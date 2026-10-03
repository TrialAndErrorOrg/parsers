// Flattens content into a compact string that shows both the text and the
// structure Typst parsed, so tests can check what a serialized file means:
//
//   text, space " ", linebreak ⏎, parbreak ¶, smartquotes ' and "
//   *{strong} _{emph} H2{heading} -{list item} +{enum item} 3{numbered enum item}
//   /{term=description} L{…} N{…} T{…} (explicit list/enum/terms calls)
//   `raw` $math$ @ref K{link} name{body} and <label> after labelled elements
#let flat(c) = {
  if c == none { return "" }
  if type(c) == str { return c }
  if type(c) != content { return repr(c) }
  let n = repr(c.func())
  let j(xs) = (xs.map(flat) + ("",)).join("")
  let r = if n == "text" {
    c.text
  } else if n == "space" {
    " "
  } else if n == "linebreak" {
    "⏎"
  } else if n == "parbreak" {
    "¶"
  } else if n == "smartquote" {
    if c.double { "\"" } else { "'" }
  } else if n == "sequence" {
    j(c.children)
  } else if n == "styled" {
    flat(c.child)
  } else if n == "strong" {
    "*{" + flat(c.body) + "}"
  } else if n == "emph" {
    "_{" + flat(c.body) + "}"
  } else if n == "heading" {
    "H" + str(c.depth) + "{" + flat(c.body) + "}"
  } else if n == "list" {
    "L{" + c.children.map(i => "-" + flat(i.body)).join("|") + "}"
  } else if n == "enum" {
    let num(i) = if i.has("number") and i.number != none { str(i.number) } else { "+" }
    "N{" + c.children.map(i => num(i) + flat(i.body)).join("|") + "}"
  } else if n == "terms" {
    "T{" + c.children.map(i => flat(i.term) + "=" + flat(i.description)).join("|") + "}"
  } else if c.func() == list.item {
    // outside of layout, list items are not grouped into lists yet
    "-{" + flat(c.body) + "}"
  } else if c.func() == enum.item {
    (if c.has("number") and c.number != none { str(c.number) } else { "+" }) + "{" + flat(c.body) + "}"
  } else if c.func() == terms.item {
    "/{" + flat(c.term) + "=" + flat(c.description) + "}"
  } else if n == "raw" {
    "`" + c.text + "`"
  } else if n == "equation" {
    "$" + repr(c.body) + "$"
  } else if n == "ref" {
    "@" + str(c.target) + (if c.has("supplement") and type(c.supplement) == content { "[" + flat(c.supplement) + "]" } else { "" })
  } else if n == "link" {
    "K{" + flat(c.body) + "}"
  } else if c.has("text") and type(c.text) == str {
    c.text
  } else {
    n + "{" + (if c.has("body") { flat(c.body) } else { "" }) + "}"
  }
  if c.has("label") { r + "<" + str(c.label) + ">" } else { r }
}
