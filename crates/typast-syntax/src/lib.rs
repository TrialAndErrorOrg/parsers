//! Parse Typst source with Typst's own parser (`typst-syntax`) and turn its typed syntax tree
//! into `typast`: a unist tree, as JSON.
//!
//! The node shapes are documented in `libs/typast/typast/src/lib/typast.ts`. Positions are unist
//! positions: 1-based lines and columns, 0-based offsets, all in UTF-16 code units so they index
//! JavaScript strings.

use std::collections::HashMap;

use serde_json::{Map, Value, json};
use typst_syntax::ast::{
    self, Arg, ArrayItem, AstNode, DestructuringItem, DictItem, Expr, Imports, LetBindingKind,
    MathTextKind, Param, Pattern, Unit,
};
use typst_syntax::{Lines, SyntaxKind, SyntaxNode};

/// Which syntax the source starts in.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Mode {
    Markup,
    Math,
    Code,
}

impl Mode {
    pub fn from_name(name: &str) -> Option<Self> {
        match name {
            "markup" => Some(Self::Markup),
            "math" => Some(Self::Math),
            "code" => Some(Self::Code),
            _ => None,
        }
    }
}

#[derive(Debug, Clone, Copy)]
pub struct Options {
    pub mode: Mode,
    /// Add unist `position`s to every node.
    pub positions: bool,
}

impl Default for Options {
    fn default() -> Self {
        Self {
            mode: Mode::Markup,
            positions: true,
        }
    }
}

/// The version of `typst-syntax` this crate parses with.
pub const TYPST_VERSION: &str = "0.15.1";

/// Parse `text` and return `{ "tree": Root, "errors": [{ message, hints, position }] }` as JSON.
pub fn parse_to_json(text: &str, options: Options) -> String {
    parse_to_value(text, options).to_string()
}

/// Like [`parse_to_json`], as a [`serde_json::Value`].
pub fn parse_to_value(text: &str, options: Options) -> Value {
    let root = match options.mode {
        Mode::Markup => typst_syntax::parse(text),
        Mode::Math => typst_syntax::parse_math(text),
        Mode::Code => typst_syntax::parse_code(text),
    };
    let mut cx = Cx::new(text, &root, options.positions);
    let children = match options.mode {
        Mode::Markup => cx.markup(&root),
        Mode::Math => cx.math_seq(&root),
        Mode::Code => cx.code_seq(&root),
    };
    let mut tree = Map::new();
    tree.insert("type".into(), "root".into());
    tree.insert("children".into(), Value::Array(children));
    if cx.positions {
        tree.insert("position".into(), cx.position_range(0, text.len()));
    }
    let errors = std::mem::take(&mut cx.errors);
    json!({ "tree": Value::Object(tree), "errors": errors })
}

/// Parse `text` into Typst's lossless concrete syntax tree, as JSON: every token, including
/// whitespace and punctuation. `{ kind, text?, children?, position? }`, `kind` being
/// `typst_syntax::SyntaxKind`'s name.
pub fn parse_cst_to_json(text: &str, options: Options) -> String {
    let root = match options.mode {
        Mode::Markup => typst_syntax::parse(text),
        Mode::Math => typst_syntax::parse_math(text),
        Mode::Code => typst_syntax::parse_code(text),
    };
    let cx = Cx::new(text, &root, options.positions);
    cx.cst(&root).to_string()
}

/// How many content blocks follow the parentheses of an argument list (`f(x)[a][b]`: 2).
fn trailing_blocks(args: &SyntaxNode) -> usize {
    let after_parens = args
        .children()
        .rposition(|c| c.kind() == SyntaxKind::RightParen)
        .map_or(0, |i| i + 1);
    args.children()
        .skip(after_parens)
        .filter(|c| c.kind() == SyntaxKind::ContentBlock)
        .count()
}

struct Cx<'a> {
    lines: Lines<&'a str>,
    /// Byte offset of every node in the tree, keyed by address (the tree is immutable here).
    offsets: HashMap<*const SyntaxNode, usize>,
    positions: bool,
    errors: Vec<Value>,
}

impl<'a> Cx<'a> {
    fn new(text: &'a str, root: &SyntaxNode, positions: bool) -> Self {
        let mut cx = Self {
            lines: Lines::new(text),
            offsets: HashMap::new(),
            positions,
            errors: vec![],
        };
        cx.index(root, 0);
        cx
    }

    fn index(&mut self, node: &SyntaxNode, offset: usize) {
        self.offsets.insert(node as *const _, offset);
        if node.kind() == SyntaxKind::Error {
            let (errors, _) = node.errors_and_warnings();
            for error in errors {
                let mut e = Map::new();
                e.insert("message".into(), error.message.as_str().into());
                if !error.hints.is_empty() {
                    e.insert(
                        "hints".into(),
                        error
                            .hints
                            .iter()
                            .map(|h| Value::from(h.v.as_str()))
                            .collect(),
                    );
                }
                e.insert(
                    "position".into(),
                    self.position_range(offset, offset + node.len()),
                );
                self.errors.push(Value::Object(e));
            }
        }
        let mut child_offset = offset;
        for child in node.children() {
            self.index(child, child_offset);
            child_offset += child.len();
        }
    }

    fn point(&self, byte: usize) -> Value {
        let line = self.lines.byte_to_line(byte).unwrap_or(0);
        let line_start = self.lines.line_to_byte(line).unwrap_or(0);
        let offset = self.lines.byte_to_utf16(byte).unwrap_or(0);
        let column = offset - self.lines.byte_to_utf16(line_start).unwrap_or(0);
        json!({ "line": line + 1, "column": column + 1, "offset": offset })
    }

    fn position_range(&self, start: usize, end: usize) -> Value {
        json!({ "start": self.point(start), "end": self.point(end) })
    }

    fn position(&self, node: &SyntaxNode) -> Option<Value> {
        let start = *self.offsets.get(&(node as *const _))?;
        Some(self.position_range(start, start + node.len()))
    }

    /// A node object with its type and position.
    fn node(&self, kind: &str, source: &SyntaxNode) -> Map<String, Value> {
        let mut map = Map::new();
        map.insert("type".into(), kind.into());
        if self.positions
            && let Some(position) = self.position(source)
        {
            map.insert("position".into(), position);
        }
        map
    }

    fn leaf(&self, kind: &str, source: &SyntaxNode) -> Value {
        Value::Object(self.node(kind, source))
    }

    fn with(&self, kind: &str, source: &SyntaxNode, fields: Vec<(&str, Value)>) -> Value {
        let mut map = self.node(kind, source);
        for (key, value) in fields {
            if !value.is_null() {
                map.insert(key.into(), value);
            }
        }
        Value::Object(map)
    }

    fn comment(&self, node: &SyntaxNode) -> Option<Value> {
        let text = node.leaf_text().as_str();
        let (value, block) = match node.kind() {
            SyntaxKind::LineComment => (text.strip_prefix("//").unwrap_or(text), false),
            SyntaxKind::BlockComment => {
                let inner = text.strip_prefix("/*").unwrap_or(text);
                (inner.strip_suffix("*/").unwrap_or(inner), true)
            }
            _ => return None,
        };
        Some(self.with(
            "comment",
            node,
            vec![("value", value.into()), ("block", block.into())],
        ))
    }

    fn error(&self, node: &SyntaxNode) -> Value {
        let (errors, _) = node.errors_and_warnings();
        let message = errors
            .first()
            .map(|e| e.message.to_string())
            .unwrap_or_default();
        self.with(
            "error",
            node,
            vec![
                ("value", node.full_text().as_str().into()),
                ("message", message.into()),
            ],
        )
    }

    // -----------------------------------------------------------------------
    // Sequences
    // -----------------------------------------------------------------------

    /// The children of a `Markup` node: like `ast::Markup::exprs`, plus comments and errors.
    fn markup(&mut self, node: &SyntaxNode) -> Vec<Value> {
        let mut out = vec![];
        let mut was_stmt = false;
        for child in node.children() {
            let kind = child.kind();
            // Typst ignores a newline directly after a statement without a semicolon.
            let skip = was_stmt && kind == SyntaxKind::Space;
            if kind != SyntaxKind::Hash {
                was_stmt = kind.is_stmt();
            }
            if skip {
                continue;
            }
            if let Some(value) = self.sequence_item(child) {
                out.push(value);
            }
        }
        out
    }

    /// The children of a `Math` node.
    fn math_seq(&mut self, node: &SyntaxNode) -> Vec<Value> {
        node.children()
            .filter_map(|child| self.sequence_item(child))
            .collect()
    }

    /// The children of a `Code` node: expressions, comments and errors (no whitespace).
    fn code_seq(&mut self, node: &SyntaxNode) -> Vec<Value> {
        node.children()
            .filter(|child| child.kind() != SyntaxKind::Space)
            .filter_map(|child| self.sequence_item(child))
            .collect()
    }

    fn sequence_item(&mut self, child: &SyntaxNode) -> Option<Value> {
        match child.kind() {
            SyntaxKind::Space => Some(self.with(
                "space",
                child,
                vec![("value", child.leaf_text().as_str().into())],
            )),
            SyntaxKind::LineComment | SyntaxKind::BlockComment => self.comment(child),
            SyntaxKind::Error => Some(self.error(child)),
            _ => child.cast::<Expr>().map(|expr| self.expr(expr)),
        }
    }

    // -----------------------------------------------------------------------
    // Expressions
    // -----------------------------------------------------------------------

    fn opt_expr(&mut self, expr: Option<Expr>) -> Value {
        expr.map_or(Value::Null, |e| self.expr(e))
    }

    fn expr(&mut self, expr: Expr) -> Value {
        let n = expr.to_untyped();
        match expr {
            Expr::Text(v) => self.with("text", n, vec![("value", v.get().as_str().into())]),
            Expr::Space(_) => self.with("space", n, vec![("value", n.leaf_text().as_str().into())]),
            Expr::Linebreak(_) => self.leaf("linebreak", n),
            Expr::Parbreak(_) => self.leaf("parbreak", n),
            Expr::Escape(v) => self.with("escape", n, vec![("value", v.get().to_string().into())]),
            Expr::Shorthand(v) => {
                self.with("shorthand", n, vec![("value", v.get().to_string().into())])
            }
            Expr::SmartQuote(v) => self.with("smartQuote", n, vec![("double", v.double().into())]),
            Expr::Strong(v) => {
                let children = self.markup(v.body().to_untyped());
                self.with("strong", n, vec![("children", children.into())])
            }
            Expr::Emph(v) => {
                let children = self.markup(v.body().to_untyped());
                self.with("emph", n, vec![("children", children.into())])
            }
            Expr::Raw(v) => {
                let lines: Vec<&str> = v.lines().map(|l| l.get().as_str()).collect();
                self.with(
                    "raw",
                    n,
                    vec![
                        ("value", lines.join("\n").into()),
                        (
                            "lang",
                            v.lang().map_or(Value::Null, |l| l.get().as_str().into()),
                        ),
                        ("block", v.block().into()),
                    ],
                )
            }
            Expr::Link(v) => self.with("link", n, vec![("url", v.get().as_str().into())]),
            Expr::Label(v) => self.with("label", n, vec![("name", v.get().into())]),
            Expr::Ref(v) => {
                let supplement = v
                    .supplement()
                    .map_or(Value::Null, |s| self.expr(Expr::ContentBlock(s)));
                self.with(
                    "ref",
                    n,
                    vec![("target", v.target().into()), ("supplement", supplement)],
                )
            }
            Expr::Heading(v) => {
                let children = self.markup(v.body().to_untyped());
                self.with(
                    "heading",
                    n,
                    vec![
                        ("depth", v.depth().get().into()),
                        ("children", children.into()),
                    ],
                )
            }
            Expr::ListItem(v) => {
                let children = self.markup(v.body().to_untyped());
                self.with("listItem", n, vec![("children", children.into())])
            }
            Expr::EnumItem(v) => {
                let children = self.markup(v.body().to_untyped());
                self.with(
                    "enumItem",
                    n,
                    vec![
                        ("number", v.number().map_or(Value::Null, Value::from)),
                        ("children", children.into()),
                    ],
                )
            }
            Expr::TermItem(v) => {
                let term = self.markup(v.term().to_untyped());
                let children = self.markup(v.description().to_untyped());
                self.with(
                    "termItem",
                    n,
                    vec![("term", term.into()), ("children", children.into())],
                )
            }
            Expr::Equation(v) => {
                let children = self.math_seq(v.body().to_untyped());
                self.with(
                    "equation",
                    n,
                    vec![("block", v.block().into()), ("children", children.into())],
                )
            }

            // Math
            Expr::Math(v) => {
                let children = self.math_seq(n);
                let deparenthesized = if v.was_deparenthesized() {
                    Value::Bool(true)
                } else {
                    Value::Null
                };
                self.with(
                    "math",
                    n,
                    vec![
                        ("deparenthesized", deparenthesized),
                        ("children", children.into()),
                    ],
                )
            }
            Expr::MathText(v) => {
                let value = match v.get() {
                    MathTextKind::Grapheme(s) | MathTextKind::Number(s) => s.as_str(),
                };
                self.with("mathText", n, vec![("value", value.into())])
            }
            Expr::MathIdent(v) => {
                self.with("mathIdent", n, vec![("name", v.get().as_str().into())])
            }
            Expr::MathFieldAccess(v) => self.math_field_access(v),
            Expr::MathShorthand(v) => self.with(
                "mathShorthand",
                n,
                vec![("value", v.get().to_string().into())],
            ),
            Expr::MathAlignPoint(_) => self.leaf("mathAlignPoint", n),
            Expr::MathCall(v) => {
                let callee = self.math_access(v.callee());
                let args: Vec<Value> = v
                    .args()
                    .arg_items()
                    .map(|item| {
                        let mut arg = self.arg(item.arg);
                        if item.ends_in_semicolon
                            && let Value::Object(map) = &mut arg
                        {
                            map.insert("semicolon".into(), true.into());
                        }
                        arg
                    })
                    .collect();
                self.with(
                    "mathCall",
                    n,
                    vec![("callee", callee), ("args", args.into())],
                )
            }
            Expr::MathDelimited(v) => {
                let open = self.expr(v.open());
                let children = self.math_seq(v.body().to_untyped());
                let close = self.expr(v.close());
                self.with(
                    "mathDelimited",
                    n,
                    vec![
                        ("open", open),
                        ("children", children.into()),
                        ("close", close),
                    ],
                )
            }
            Expr::MathAttach(v) => {
                let base = self.expr(v.base());
                let bottom = self.opt_expr(v.bottom());
                let top = self.opt_expr(v.top());
                let primes = v.primes().map_or(Value::Null, |p| p.count().into());
                self.with(
                    "mathAttach",
                    n,
                    vec![
                        ("base", base),
                        ("bottom", bottom),
                        ("top", top),
                        ("primes", primes),
                    ],
                )
            }
            Expr::MathPrimes(v) => self.with("mathPrimes", n, vec![("count", v.count().into())]),
            Expr::MathFrac(v) => {
                let num = self.expr(v.num());
                let denom = self.expr(v.denom());
                self.with("mathFrac", n, vec![("num", num), ("denom", denom)])
            }
            Expr::MathRoot(v) => {
                let radicand = self.expr(v.radicand());
                let index = v.index().map_or(Value::Null, Value::from);
                self.with(
                    "mathRoot",
                    n,
                    vec![("index", index), ("radicand", radicand)],
                )
            }

            // Code literals
            Expr::Ident(v) => self.with("ident", n, vec![("name", v.get().as_str().into())]),
            Expr::None(_) => self.leaf("none", n),
            Expr::Auto(_) => self.leaf("auto", n),
            Expr::Bool(v) => self.with("bool", n, vec![("value", v.get().into())]),
            Expr::Int(v) => self.with("int", n, vec![("value", v.get().into())]),
            Expr::Float(v) => self.with("float", n, vec![("value", v.get().into())]),
            Expr::Numeric(v) => {
                let (value, unit) = v.get();
                let unit = match unit {
                    Unit::Pt => "pt",
                    Unit::Mm => "mm",
                    Unit::Cm => "cm",
                    Unit::In => "in",
                    Unit::Rad => "rad",
                    Unit::Deg => "deg",
                    Unit::Em => "em",
                    Unit::Fr => "fr",
                    Unit::Percent => "%",
                };
                self.with(
                    "numeric",
                    n,
                    vec![("value", value.into()), ("unit", unit.into())],
                )
            }
            Expr::Str(v) => self.with("str", n, vec![("value", v.get().as_str().into())]),

            // Blocks and collections
            Expr::CodeBlock(v) => {
                let children = self.code_seq(v.body().to_untyped());
                self.with("codeBlock", n, vec![("children", children.into())])
            }
            Expr::ContentBlock(v) => {
                let children = self.markup(v.body().to_untyped());
                self.with("contentBlock", n, vec![("children", children.into())])
            }
            Expr::Parenthesized(v) => {
                let inner = self.expr(v.expr());
                self.with("parenthesized", n, vec![("expr", inner)])
            }
            Expr::Array(v) => {
                let items: Vec<Value> = v
                    .items()
                    .map(|item| match item {
                        ArrayItem::Pos(e) => self.expr(e),
                        ArrayItem::Spread(s) => self.spread_expr(s),
                    })
                    .collect();
                self.with("array", n, vec![("items", items.into())])
            }
            Expr::Dict(v) => {
                let items: Vec<Value> = v
                    .items()
                    .map(|item| match item {
                        DictItem::Named(named) => self.named_expr(named),
                        DictItem::Keyed(keyed) => {
                            let key = self.expr(keyed.key());
                            let value = self.expr(keyed.expr());
                            self.with(
                                "keyed",
                                keyed.to_untyped(),
                                vec![("key", key), ("expr", value)],
                            )
                        }
                        DictItem::Spread(s) => self.spread_expr(s),
                    })
                    .collect();
                self.with("dict", n, vec![("items", items.into())])
            }

            // Operations
            Expr::Unary(v) => {
                let inner = self.expr(v.expr());
                self.with(
                    "unary",
                    n,
                    vec![("op", v.op().as_str().into()), ("expr", inner)],
                )
            }
            Expr::Binary(v) => {
                let lhs = self.expr(v.lhs());
                let rhs = self.expr(v.rhs());
                self.with(
                    "binary",
                    n,
                    vec![("op", v.op().as_str().into()), ("lhs", lhs), ("rhs", rhs)],
                )
            }
            Expr::FieldAccess(v) => {
                let target = self.expr(v.target());
                self.with(
                    "fieldAccess",
                    n,
                    vec![
                        ("target", target),
                        ("field", v.field().get().as_str().into()),
                    ],
                )
            }
            Expr::FuncCall(v) => {
                let callee = self.expr(v.callee());
                // what is in the parentheses is `args`, the content blocks after them `children`
                let items: Vec<Arg> = v.args().items().collect();
                let split = items.len() - trailing_blocks(v.args().to_untyped()).min(items.len());
                let args: Vec<Value> = items[..split].iter().map(|a| self.arg(*a)).collect();
                let children: Vec<Value> = items[split..].iter().map(|a| self.arg(*a)).collect();
                self.with(
                    "funcCall",
                    n,
                    vec![
                        ("callee", callee),
                        ("args", args.into()),
                        ("children", children.into()),
                    ],
                )
            }
            Expr::Closure(v) => {
                let name = v.name().map_or(Value::Null, |i| i.get().as_str().into());
                let params: Vec<Value> = v.params().children().map(|p| self.param(p)).collect();
                let body = self.expr(v.body());
                self.with(
                    "closure",
                    n,
                    vec![("name", name), ("params", params.into()), ("body", body)],
                )
            }

            // Statements and control flow
            Expr::LetBinding(v) => {
                let pattern = match v.kind() {
                    LetBindingKind::Normal(p) => self.pattern(p),
                    LetBindingKind::Closure(ident) => self.expr(Expr::Ident(ident)),
                };
                let init = self.opt_expr(v.init());
                self.with("letBinding", n, vec![("pattern", pattern), ("init", init)])
            }
            Expr::DestructAssignment(v) => {
                let pattern = self.pattern(v.pattern());
                let value = self.expr(v.value());
                self.with(
                    "destructAssignment",
                    n,
                    vec![("pattern", pattern), ("value", value)],
                )
            }
            Expr::SetRule(v) => {
                let target = self.expr(v.target());
                let args = self.args(v.args());
                let condition = self.opt_expr(v.condition());
                self.with(
                    "setRule",
                    n,
                    vec![("target", target), ("args", args), ("condition", condition)],
                )
            }
            Expr::ShowRule(v) => {
                let selector = self.opt_expr(v.selector());
                let transform = self.expr(v.transform());
                self.with(
                    "showRule",
                    n,
                    vec![("selector", selector), ("transform", transform)],
                )
            }
            Expr::Contextual(v) => {
                let body = self.expr(v.body());
                self.with("contextual", n, vec![("body", body)])
            }
            Expr::Conditional(v) => {
                let condition = self.expr(v.condition());
                let if_body = self.expr(v.if_body());
                let else_body = self.opt_expr(v.else_body());
                self.with(
                    "conditional",
                    n,
                    vec![
                        ("condition", condition),
                        ("ifBody", if_body),
                        ("elseBody", else_body),
                    ],
                )
            }
            Expr::WhileLoop(v) => {
                let condition = self.expr(v.condition());
                let body = self.expr(v.body());
                self.with(
                    "whileLoop",
                    n,
                    vec![("condition", condition), ("body", body)],
                )
            }
            Expr::ForLoop(v) => {
                let pattern = self.pattern(v.pattern());
                let iterable = self.expr(v.iterable());
                let body = self.expr(v.body());
                self.with(
                    "forLoop",
                    n,
                    vec![("pattern", pattern), ("iterable", iterable), ("body", body)],
                )
            }
            Expr::ModuleImport(v) => {
                let source = self.expr(v.source());
                let new_name = v
                    .new_name()
                    .map_or(Value::Null, |i| i.get().as_str().into());
                let imports = match v.imports() {
                    None => Value::Null,
                    Some(Imports::Wildcard) => "*".into(),
                    Some(Imports::Items(items)) => Value::Array(
                        items
                            .iter()
                            .map(|item| {
                                let path: Vec<Value> = item
                                    .path()
                                    .iter()
                                    .map(|i| i.get().as_str().into())
                                    .collect();
                                let (source, renamed) = match item {
                                    ast::ImportItem::Renamed(r) => {
                                        (r.to_untyped(), r.new_name().get().as_str().into())
                                    }
                                    ast::ImportItem::Simple(p) => (p.to_untyped(), Value::Null),
                                };
                                self.with(
                                    "importItem",
                                    source,
                                    vec![("path", path.into()), ("newName", renamed)],
                                )
                            })
                            .collect(),
                    ),
                };
                self.with(
                    "moduleImport",
                    n,
                    vec![
                        ("source", source),
                        ("newName", new_name),
                        ("imports", imports),
                    ],
                )
            }
            Expr::ModuleInclude(v) => {
                let source = self.expr(v.source());
                self.with("moduleInclude", n, vec![("source", source)])
            }
            Expr::LoopBreak(_) => self.leaf("loopBreak", n),
            Expr::LoopContinue(_) => self.leaf("loopContinue", n),
            Expr::FuncReturn(v) => {
                let body = self.opt_expr(v.body());
                self.with("funcReturn", n, vec![("body", body)])
            }
        }
    }

    fn math_access(&mut self, access: ast::MathAccess) -> Value {
        match access {
            ast::MathAccess::MathIdent(i) => self.with(
                "mathIdent",
                i.to_untyped(),
                vec![("name", i.get().as_str().into())],
            ),
            ast::MathAccess::MathFieldAccess(f) => self.math_field_access(f),
        }
    }

    fn math_field_access(&mut self, access: ast::MathFieldAccess) -> Value {
        let target = self.math_access(access.target());
        self.with(
            "mathFieldAccess",
            access.to_untyped(),
            vec![
                ("target", target),
                ("field", access.field().get().as_str().into()),
            ],
        )
    }

    fn args(&mut self, args: ast::Args) -> Value {
        Value::Array(args.items().map(|a| self.arg(a)).collect())
    }

    fn arg(&mut self, arg: Arg) -> Value {
        match arg {
            Arg::Pos(e) => self.expr(e),
            Arg::Named(named) => self.named_expr(named),
            Arg::Spread(s) => self.spread_expr(s),
        }
    }

    fn named_expr(&mut self, named: ast::Named) -> Value {
        let value = self.expr(named.expr());
        self.with(
            "named",
            named.to_untyped(),
            vec![
                ("name", named.name().get().as_str().into()),
                ("expr", value),
            ],
        )
    }

    fn named_pattern(&mut self, named: ast::Named) -> Value {
        let value = self.pattern(named.pattern());
        self.with(
            "named",
            named.to_untyped(),
            vec![
                ("name", named.name().get().as_str().into()),
                ("expr", value),
            ],
        )
    }

    fn spread_expr(&mut self, spread: ast::Spread) -> Value {
        let value = self.expr(spread.expr());
        self.with("spread", spread.to_untyped(), vec![("expr", value)])
    }

    fn spread_sink(&mut self, spread: ast::Spread) -> Value {
        if let Some(ident) = spread.sink_ident() {
            return self.with(
                "spread",
                spread.to_untyped(),
                vec![("sink", ident.get().as_str().into())],
            );
        }
        let value = self.opt_expr(spread.sink_expr());
        self.with("spread", spread.to_untyped(), vec![("expr", value)])
    }

    fn param(&mut self, param: Param) -> Value {
        match param {
            Param::Pos(p) => self.pattern(p),
            Param::Named(named) => self.named_expr(named),
            Param::Spread(s) => self.spread_sink(s),
        }
    }

    fn pattern(&mut self, pattern: Pattern) -> Value {
        match pattern {
            Pattern::Normal(e) => self.expr(e),
            Pattern::Placeholder(u) => self.leaf("underscore", u.to_untyped()),
            Pattern::Parenthesized(p) => {
                let inner = self.pattern(p.pattern());
                self.with("parenthesized", p.to_untyped(), vec![("expr", inner)])
            }
            Pattern::Destructuring(d) => {
                let items: Vec<Value> = d
                    .items()
                    .map(|item| match item {
                        DestructuringItem::Pattern(p) => self.pattern(p),
                        DestructuringItem::Named(named) => self.named_pattern(named),
                        DestructuringItem::Spread(s) => self.spread_sink(s),
                    })
                    .collect();
                self.with(
                    "destructuring",
                    d.to_untyped(),
                    vec![("items", items.into())],
                )
            }
        }
    }

    // -----------------------------------------------------------------------
    // Concrete syntax tree
    // -----------------------------------------------------------------------

    fn cst(&self, node: &SyntaxNode) -> Value {
        let mut map = Map::new();
        map.insert("kind".into(), format!("{:?}", node.kind()).into());
        if node.children().len() == 0 {
            map.insert("text".into(), node.leaf_text().as_str().into());
        } else {
            map.insert(
                "children".into(),
                node.children().map(|c| self.cst(c)).collect(),
            );
        }
        if self.positions
            && let Some(position) = self.position(node)
        {
            map.insert("position".into(), position);
        }
        Value::Object(map)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn tree(text: &str) -> Value {
        parse_to_value(
            text,
            Options {
                mode: Mode::Markup,
                positions: false,
            },
        )["tree"]
            .clone()
    }

    #[test]
    fn markup() {
        let t = tree("= Intro <intro>\n\nSome *bold* text.");
        let kinds: Vec<&str> = t["children"]
            .as_array()
            .unwrap()
            .iter()
            .map(|c| c["type"].as_str().unwrap())
            .collect();
        assert_eq!(
            kinds,
            [
                "heading", "space", "label", "parbreak", "text", "space", "strong", "space", "text"
            ]
        );
        assert_eq!(t["children"][0]["depth"], 1);
    }

    #[test]
    fn code() {
        let t = tree("#set text(size: 10pt)\n#footnote[a]");
        assert_eq!(t["children"][0]["type"], "setRule");
        assert_eq!(
            t["children"][0]["args"][0]["expr"],
            json!({ "type": "numeric", "value": 10.0, "unit": "pt" })
        );
        // the newline after the statement is not a space
        assert_eq!(t["children"][1]["type"], "funcCall");
        assert_eq!(t["children"][1]["args"], json!([]));
        assert_eq!(t["children"][1]["children"][0]["type"], "contentBlock");
    }

    #[test]
    fn call_arguments_and_trailing_content() {
        let t = tree("#f(a, [b])[c][d]");
        let call = &t["children"][0];
        assert_eq!(call["args"].as_array().unwrap().len(), 2);
        assert_eq!(call["args"][1]["type"], "contentBlock");
        let children: Vec<&str> = call["children"]
            .as_array()
            .unwrap()
            .iter()
            .map(|c| c["children"][0]["value"].as_str().unwrap())
            .collect();
        assert_eq!(children, ["c", "d"]);
    }

    #[test]
    fn positions_are_utf16() {
        let v = parse_to_value("é😀 *x*", Options::default());
        let strong = &v["tree"]["children"][2];
        assert_eq!(strong["type"], "strong");
        assert_eq!(
            strong["position"]["start"],
            json!({ "line": 1, "column": 5, "offset": 4 })
        );
    }

    #[test]
    fn errors() {
        let v = parse_to_value("#f(", Options::default());
        assert!(!v["errors"].as_array().unwrap().is_empty());
    }

    #[test]
    fn comments() {
        let t = tree("a // note\nb");
        assert_eq!(
            t["children"][2],
            json!({ "type": "comment", "value": " note", "block": false })
        );
    }
}
