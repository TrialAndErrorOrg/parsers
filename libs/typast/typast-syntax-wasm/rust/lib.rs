//! WebAssembly bindings: `parse(text, mode, positions)` returns the typast JSON from
//! `typast-syntax`.

use typast_syntax::{Mode, Options};
use wasm_bindgen::prelude::*;

fn options(mode: &str, positions: bool) -> Result<Options, JsError> {
    let mode =
        Mode::from_name(mode).ok_or_else(|| JsError::new(&format!("unknown mode `{mode}`")))?;
    Ok(Options { mode, positions })
}

/// Parse Typst source into `{ tree, errors }`, serialized as JSON.
#[wasm_bindgen]
pub fn parse(text: &str, mode: &str, positions: bool) -> Result<String, JsError> {
    Ok(typast_syntax::parse_to_json(
        text,
        options(mode, positions)?,
    ))
}

/// Parse Typst source into Typst's concrete syntax tree, serialized as JSON.
#[wasm_bindgen(js_name = parseCst)]
pub fn parse_cst(text: &str, mode: &str, positions: bool) -> Result<String, JsError> {
    Ok(typast_syntax::parse_cst_to_json(
        text,
        options(mode, positions)?,
    ))
}

/// The `typst-syntax` version the parser follows.
#[wasm_bindgen(js_name = typstVersion)]
pub fn typst_version() -> String {
    typast_syntax::TYPST_VERSION.into()
}
