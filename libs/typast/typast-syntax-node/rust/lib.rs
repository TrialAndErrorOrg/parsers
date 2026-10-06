//! Node.js bindings: `parse(text, options)` returns the typast JSON from `typast-syntax`.

use napi::{Error, Result};
use napi_derive::napi;
use typast_syntax::{Mode, Options};

#[napi(object)]
pub struct ParseOptions {
    /// `"markup"` (default), `"math"` or `"code"`
    pub mode: Option<String>,
    /// Add unist positions (default `true`)
    pub positions: Option<bool>,
}

fn options(options: Option<ParseOptions>) -> Result<Options> {
    let mut out = Options::default();
    if let Some(o) = options {
        if let Some(mode) = o.mode {
            out.mode = Mode::from_name(&mode)
                .ok_or_else(|| Error::from_reason(format!("unknown mode `{mode}`")))?;
        }
        if let Some(positions) = o.positions {
            out.positions = positions;
        }
    }
    Ok(out)
}

/// Parse Typst source into `{ tree, errors }`, serialized as JSON.
#[napi]
pub fn parse(text: String, options: Option<ParseOptions>) -> Result<String> {
    Ok(typast_syntax::parse_to_json(&text, self::options(options)?))
}

/// Parse Typst source into Typst's concrete syntax tree, serialized as JSON.
#[napi]
pub fn parse_cst(text: String, options: Option<ParseOptions>) -> Result<String> {
    Ok(typast_syntax::parse_cst_to_json(
        &text,
        self::options(options)?,
    ))
}

/// The `typst-syntax` version the parser follows.
#[napi]
pub fn typst_version() -> &'static str {
    typast_syntax::TYPST_VERSION
}
