// jote-article — Typst template for the Journal of Trial & Error.
//
// A port of `jote-new-article.cls` (v2.0). Geometry, type sizes and colours are taken from
// the class and verified against PDFs it produced (kohrt 2026, issue 6-2). All dimensions are
// given in PostScript points (Typst `pt` = 1/72 in); TeX points are converted with `tpt`.
//
// Usage:
//   #import "jote-article/lib.typ": *
//   #show: jote-article.with(title: [...], authors: (...), ...)
//
// See README.md for the full API.

// ---------------------------------------------------------------------------------------------
// Units, colours, fonts
// ---------------------------------------------------------------------------------------------

/// One TeX point (1/72.27 in) expressed in Typst points (1/72 in).
#let tpt = 0.99626pt

/// `\smallwidth` in the class: the normal baselineskip (12 TeX pt). Used for the column gap,
/// most vertical skips and many paddings.
#let sw = 12 * tpt

#let joteorange = rgb("#FEAF0C")
#let jotedark = rgb("#002642")
#let jote-orange-light = rgb("#fbeacd")
#let orcid-green = rgb("#a6ce39")
// xcolor mixes, computed exactly as LaTeX does (RGB model):
//   lightblack       = jotedark!80                  (80 % jotedark, 20 % white)
//   betterlightblack = lightblack!65!gray!65
//   darklightblack   = lightblack!65!gray!85
#let lightblack = color.mix((jotedark, 80%), (white, 20%), space: rgb)
#let _lb-gray = color.mix((lightblack, 65%), (rgb(50%, 50%, 50%), 35%), space: rgb)
#let betterlightblack = color.mix((_lb-gray, 65%), (white, 35%), space: rgb)
#let darklightblack = color.mix((_lb-gray, 85%), (white, 15%), space: rgb)

#let fonts = (
  // \setmainfont{OpenSans}: Light / LightItalic / SemiBold / SemiBoldItalic
  // pifont's \ding glyphs (❍ ❒ ✓ ➔ …) come from Zapf Dingbats, which Typst's own fallback
  // does not pick up; it is only used for the Dingbats block (systems without it fall back)
  // Open Sans has no arrows and few maths operators (`S8 → n1`); without a fallback for them
  // Typst takes Libertinus Serif. LaTeX sets them (`\rightarrow`) as maths: New Computer Modern
  // Math, which ships with Typst, has the same thin arrow and nearly the same width as the
  // reference's.
  body: (
    "Open Sans",
    (name: "New Computer Modern Math", covers: regex("[\u{2190}-\u{21FF}\u{2200}-\u{22FF}\u{27F0}-\u{27FF}\u{2900}-\u{297F}]")),
    (name: "Zapf Dingbats", covers: regex("[\u{2700}-\u{27BF}]")),
  ),
  // \overpass / \overpasslight
  display: ("Overpass",),
  // The class uses Iwona Light for maths, which has no OpenType-math version. New Computer
  // Modern Math ships with Typst; pass `math-font: "Fira Math"` (or similar) for a sans look.
  math: "New Computer Modern Math",
)

/// LaTeX size commands for a 10pt class: (font size, baselineskip) in TeX points.
#let _sizes = (
  tiny: (5, 6),
  scriptsize: (7, 8),
  footnotesize: (8, 9.5),
  small: (9, 11),
  normalsize: (10, 12),
  large: (12, 14),
  Large: (14.4, 18),
  LARGE: (17.28, 22),
  huge: (20.74, 25),
  Huge: (24.88, 30),
)

/// Font size of a LaTeX size command.
#let fsize(name) = _sizes.at(name).at(0) * tpt
/// Baselineskip of a LaTeX size command.
#let fskip(name) = _sizes.at(name).at(1) * tpt
/// Paragraph leading (gap between line boxes) for a size, given that every line box is exactly
/// 1em tall (`top-edge: 1em`, `bottom-edge: "baseline"`, i.e. TeX's \topskip model).
#let fleading(name, stretch: 1) = (_sizes.at(name).at(1) * stretch - _sizes.at(name).at(0)) * tpt

/// Switch to a LaTeX size (font size + baselineskip). Use as `#show: size-as("small")` or
/// `#size-as("small")[...]`.
#let size-as(name, stretch: 1, body) = {
  set text(size: fsize(name))
  set par(leading: fleading(name, stretch: stretch), spacing: fleading(name, stretch: stretch))
  body
}

/// Vertical gap between two normalsize blocks that leaves `n` empty lines on the 12pt grid.
#let skip(n) = n * sw + fleading("normalsize")

// ---------------------------------------------------------------------------------------------
// Geometry (twocolumn): paper 210 × 280 mm, inner 4.8 cm, outer 15 mm, 53 lines
// ---------------------------------------------------------------------------------------------

#let _geom(one-column) = {
  let lines = if one-column { 40 } else { 53 }
  let left = if one-column { 80mm } else { 48mm }
  // geometry: textheight = topskip + (lines - 1) baselineskip; top/bottom margins in 2:3 ratio of
  // what is left after head (20pt) + headsep (24pt) + footskip (12pt). Measured on the
  // reference PDF: first baseline at 96.31 pt (twocolumn), i.e. body top at 86.35 pt.
  let text-height = 10 * tpt + (lines - 1) * sw
  let free = 280mm - text-height - (20 + 24 + 12) * tpt
  let top = free * 2 / 5 + (20 + 24) * tpt
  (
    lines: lines,
    left: left,
    right: 15mm,
    top: top,
    // tiny epsilon so the last line is never pushed to the next column by rounding
    bottom: 280mm - top - text-height - 0.05pt,
    text-height: text-height,
    // \marginparwidth + \marginparsep: how far header, footer and wide boxes reach into the
    // left margin
    offset: 2.5cm + 2 * sw,
  )
}

// ---------------------------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------------------------

#let _media(name) = "media/" + name

/// Load one of the bundled SVG icons and recolour its (black) paths.
#let _icon(name, height: 1em, fill: black) = {
  let svg = read(_media(name + ".svg")).replace("#000000", fill.to-hex())
  box(image(bytes(svg), height: height, format: "svg"))
}

/// Plain-text rendering of content, for PDF metadata.
#let _plain(it) = {
  if it == none { return "" }
  if type(it) == str { return it }
  if type(it) in (int, float) { return str(it) }
  if type(it) == array { return it.map(_plain).join(", ") }
  if it.has("text") { return it.text }
  if it.has("children") { return it.children.map(_plain).join("") }
  if it.has("body") { return _plain(it.body) }
  if it.func() == smartquote { return if it.double { "\"" } else { "'" } }
  if it == [ ] { return " " }
  if it.func() == linebreak { return " " }
  ""
}

#let _overpass(weight: 400, body) = {
  set text(font: fonts.display, weight: weight)
  // the class maps \bfseries in \overpass to SemiBold and in \overpasslight to Regular
  set strong(delta: if weight <= 300 { 100 } else { 200 })
  body
}

// \openreg: Open Sans Regular with Bold as its bold face
#let _openreg(body) = {
  set text(weight: 400)
  set strong(delta: 300)
  body
}

/// The orange bar in front of section headings (`\jotebar`).
#let jotebar = {
  h(1 * tpt)
  box(width: 1.5 * tpt, height: 0.62 * sw, fill: joteorange)
  h(1 * tpt)
}

/// Green ORCID iD icon linking to the ORCID profile (academicons `\aiOrcid`, kerned as in the
/// class: `\kern-0.2em` on both sides, with the surrounding spaces).
#let orcid(id) = {
  // The class writes `{ \href{...}{\kern-0.2em\aiOrcid\kern-0.2em} }`: a space, the icon with
  // negative kerns, and another space. 0.97em high icon, 0.11em below the baseline.
  [ ]
  h(-0.2em)
  link("https://orcid.org/" + id, box(
    baseline: 0.11em,
    image(read(_media("orcid.svg"), encoding: none), height: 0.97em, format: "svg"),
  ))
  h(-0.2em)
  [ ]
}

// ---------------------------------------------------------------------------------------------
// Article-type labels (class options)
// ---------------------------------------------------------------------------------------------

#let article-types = (
  reflection: "Reflection",
  rga: "Rejected Grant Application",
  empirical: "Empirical",
  anecdote: "Anecdote",
  commentary: "Commentary",
  meta: "Meta-Research",
  editorial: "Editorial",
  review: "Peer Review",
  perspective: "Perspective",
)

#let _type-label(t) = if type(t) == str and t in article-types { article-types.at(t) } else { t }

// ---------------------------------------------------------------------------------------------
// Boxes (tcolorbox joteBox and friends)
// ---------------------------------------------------------------------------------------------

// tcolorbox default boxsep (1mm) + rule (0.5mm), plus the class' left/right=1.7\smallwidth
#let _box-pad-x = 1.7 * sw + 1mm + 0.5mm

/// The light-orange box with an Overpass title used for "Box N", take-home messages etc.
/// `title` may be none. `stretch` is the \baselinestretch used in the box body.
// Lists inside an item's body, marked so that `_wide-lists` leaves them alone.
#let _mark-nested(c) = {
  if type(c) != content { return c }
  if c.func() == list {
    let f = c.fields()
    let items = f.remove("children").map(i => list.item(_mark-nested(i.body)))
    let _ = f.remove("label", default: none)
    return [#list(..f, ..items)<jote-nested-list>]
  }
  if c.has("children") {
    let parts = c.children.map(_mark-nested)
    return if parts.len() == 0 { [] } else { parts.join() }
  }
  c
}

/// enumitem's `wide` style, which the reference's rightWide/fullWide boxes use for their outer
/// lists: no left margin, the label only indents the first line of an item. Nested lists keep
/// the normal layout (with the class' second-level markers) and get no space around them.
#let _wide-lists(lead, body) = {
  show list: it => {
    if it.at("label", default: none) == <jote-nested-list> {
      return block(above: lead, below: lead, it)
    }
    let m = it.marker
    let mark = if type(m) == array { m.at(0) } else if type(m) == function { m(0) } else { m }
    // `wide` has no label width: the label at its natural width, then the label separation
    // (unwrap the default marker's fixed-width box; keep explicit `\hspace…` labels as they are)
    if type(mark) == content and mark.func() == box and mark.has("body") and mark.body.func() != align {
      mark = mark.body
    }
    set list(marker: (text(weight: 600)[–], text(weight: 600)[∗], text(weight: 600)[·]))
    // \topsep = \baselineskip, the box's (small text, stretched): one empty line of it
    let topsep = fsize("small") + 2 * lead
    block(above: topsep, below: topsep, for item in it.children {
      block(above: lead, below: lead, [#mark#h(it.body-indent)#_mark-nested(item.body)])
    })
    // a part of a list that a converter split on a custom item label (`\item[]`): the next part
    // continues it, with the item spacing in between instead of the space around a list
    if it.at("label", default: none) == <jote-list-continues> { v(lead - topsep) }
  }
  body
}

#let _jote-box-body(title: none, stretch: 1.3, width: 100%, wide-lists: false, body) = {
  set par(first-line-indent: 0pt, justify: true)
  // floats centre their content by default
  set align(left)
  // `title={\vskip-.7em #1 \vspace*{.2em}}` lifts the title so that it straddles the top edge
  // of the box. Measured on the reference: title baseline 4.25pt below the top edge, first body
  // baseline 20pt below the title baseline.
  let title-baseline = 4.25pt
  let pad-top = if title != none { title-baseline + 20pt - fsize("small") } else { 0.8 * sw + 1.5mm }
  // a list at the end of a box keeps its \topsep below it in LaTeX (but not a `wide` one, as
  // the reference's rightWide/fullWide boxes show)
  let children = if body.has("children") { body.children } else { (body,) }
  let children = children.filter(c => c != [ ] and c.func() != parbreak)
  let ends-with-list = children.len() > 0 and children.last().func() in (list.item, enum.item, terms.item)
  block(
    width: width,
    fill: jote-orange-light,
    inset: (
      left: _box-pad-x,
      right: _box-pad-x,
      top: pad-top,
      bottom: 1.6 * sw + 1.5mm + if ends-with-list and not wide-lists { fskip("small") * stretch } else { 0pt },
    ),
    breakable: false,
    {
      if title != none {
        place(top + left, dy: title-baseline - pad-top, {
          set text(fill: jotedark, size: fsize("LARGE"), top-edge: "baseline", bottom-edge: "baseline")
          // like a tcolorbox title line, it never wraps
          box(_overpass(weight: 600, title))
        })
      }
      set text(fill: jotedark)
      show: _openreg
      show: if wide-lists { _wide-lists.with(fleading("small", stretch: stretch)) } else { it => it }
      size-as("small", stretch: stretch, body)
    },
  )
}

/// \marginparwidth + \marginparsep: how far header, footer and wide boxes reach into the left
/// margin.
#let _offset = 2.5cm + 2 * sw

/// Text-block geometry of the current page (needs context).
#let _geometry() = {
  let m = page.margin
  let len(v) = if type(v) == relative { v.length } else { v }
  let left = len(m.left)
  (
    left: left,
    right: len(m.right),
    top: len(m.top),
    full-width: page.width - left - len(m.right),
    columns: page.columns,
    column-width: (page.width - left - len(m.right) - (page.columns - 1) * columns.gutter.length) / page.columns,
    text-height: page.height - len(m.top) - len(m.bottom),
  )
}

/// The context-aware placement of a box that reaches into the left margin (`rightWide`,
/// take-home message, original purpose). In the left column (or in one-column mode) it is
/// widened into the left margin like the class does; in the right column it stays column-wide.
#let _margin-wide(body-fn, at: auto) = context {
  let off = _offset
  let geo = _geometry()
  let x = if at == auto { here().position().x } else { at }
  let page-left = geo.left
  let in-left-col = x < page-left + 1pt
  if in-left-col {
    // width = .5\textwidth + \marginparwidth + \marginparsep - \smallwidth; starts at the
    // left edge of the running header
    let col = geo.full-width / 2 - sw / 2
    move(dx: -off, body-fn(col + off + sw / 2 - sw))
  } else {
    body-fn(100%)
  }
}

/// Width of a `_margin-wide` box in the left column (needs context).
#let _margin-wide-width() = _geometry().full-width / 2 + _offset - sw

/// Width of a column (needs context).
#let _column-width() = _geometry().full-width / 2 - sw / 2

// ---------------------------------------------------------------------------------------------
// Column floats on pages with page-wide floats
// ---------------------------------------------------------------------------------------------
// Typst 0.15 bug: a column float that does not fit in the left column is deferred to the right
// column of the same page, and if that page has page-wide floats (the front matter, a wide
// figure, a full-width box) it is put there even when it does not fit either, overflowing the
// page. (LaTeX moves it to the next page.) Page-wide floats therefore record their page and
// height (`_pf-mark`). A column float anchored in the left column of such a page that cannot fit
// in a column there is held back (`_col-float`) and placed instead at the first anchor point
// (`_float-anchor`) on a later page; the template puts anchor points between the top-level
// paragraphs of the body. Everything is decided from queries, so that it settles within Typst's
// five layout passes.

/// Inside a page-wide float: records its page and the height `h` it takes from the columns.
#let _pf-mark(h) = context [#metadata((page: here().page(), h: h))<jote-page-float>]

/// Height taken by page-wide floats on `page` (needs context).
#let _page-floats(page) = query(<jote-page-float>).filter(m => m.location().page() == page).map(m => m.value.h).sum(default: 0pt)

/// Whether a float whose left-column form is `probe()` (plus `clearance`) fits on the page at
/// `pos`. Only pages with page-wide floats are checked (needs context).
#let _col-fits(pos, probe, clearance) = {
  let geo = _geometry()
  let used = _page-floats(pos.page)
  if geo.columns < 2 or used == 0pt { return true }
  measure(probe()).height + clearance <= geo.text-height - used + 0.01pt
}

/// `place(placement, float: true, clearance: clearance, body)` for a column float, held back to
/// a later page when it cannot fit on this one. `probe` is a function returning the float's
/// content as set in the left column, for measuring; `held` is the content placed when it is
/// held back (by default `body`; it lands at the top of a left column, so a box whose width
/// depends on its column should be given in its left-column form, which settles faster).
#let _col-float(placement, clearance: skip(1), probe: none, held: auto, body) = context {
  if probe == none { return place(placement, float: true, clearance: clearance, body) }
  let anchor = here()
  let pos = anchor.position()
  // where the float landed in the previous layout pass, and whether it overflowed there (a float
  // deferred from an earlier page can land on a page with page-wide floats, too)
  let landed = query(<jote-float-pos>).find(m => m.value.at == anchor)
  let overflowed = if landed == none { false } else {
    let geo = _geometry()
    let (page: p, y: y) = landed.value
    let used = _page-floats(p)
    // only pages with page-wide floats are affected by the bug (and checking only those keeps
    // floats on other pages exactly where Typst puts them)
    used > 0pt and (y < geo.top + used - 1pt or y + measure(probe()).height > geo.top + geo.text-height + 1pt)
  }
  // Decisions are sticky: once held back, a float stays held back (with the page it was held
  // on), otherwise moving it can move the page-wide floats so that it fits again, and the layout
  // never settles.
  let held-body = if held == auto { body } else { held }
  let held = query(<jote-held-float>).find(m => m.value.at == anchor)
  if held == none and not overflowed and _col-fits(pos, probe, clearance) {
    place(placement, float: true, clearance: clearance, {
      context [#metadata((at: anchor, page: here().page(), y: here().position().y))<jote-float-pos>]
      body
    })
  } else {
    let (page, h) = if held != none { (held.value.page, held.value.height) } else {
      (
        if landed != none { calc.max(pos.page, landed.value.page) } else { pos.page },
        measure(probe()).height + clearance,
      )
    }
    [#metadata((at: anchor, page: page, height: h, placement: placement, clearance: clearance, body: held-body))<jote-held-float>]
  }
}

/// An anchor point for held-back floats: places those whose anchor is on an earlier page and
/// for which this is the first anchor point on a later page with room for them. With
/// `final: true` (the end of the body), places the ones no anchor point took.
#let _float-anchor(final: false) = context {
  let here = here()
  [#metadata(here)<jote-float-anchor>]
  let held = query(<jote-held-float>)
  if held.len() == 0 { return }
  let geo = _geometry()
  let placed = query(<jote-float-placed>)
  for h in held {
    let f = h.value
    // sticky, like the decision to hold the float back
    // In two columns: an anchor point in a right column (the float then goes there if it fits,
    // and otherwise Typst defers it to the top of the next page, where LaTeX puts it too) whose
    // next page has room for it. In one column: one on a later page with room for it.
    let ok(pos, strict: true) = if geo.columns < 2 {
      pos.page > f.page and f.height <= geo.text-height - _page-floats(pos.page) + 0.01pt
    } else {
      (
        pos.page >= f.page
          and (not strict or pos.x > geo.left + 1pt)
          and f.height <= geo.text-height - _page-floats(pos.page + 1) + 0.01pt
      )
    }
    // the anchor point chosen in the previous pass, as long as it is still on a suitable page
    // (so that the layout settles); otherwise the first one that qualifies
    let prior = placed.find(m => m.value.float == f.at)
    let take = if prior != none and ok(prior.location().position(), strict: false) { prior.value.anchor == here } else {
      let first = query(selector(<jote-float-anchor>).after(h.location())).find(a => ok(a.location().position()))
      (first != none and first.value == here) or (final and first == none)
    }
    if take {
      [#metadata((float: f.at, anchor: here))<jote-float-placed>]
      place(f.placement, float: true, clearance: f.clearance, f.body)
    }
  }
}

/// A "Box N" panel.
///
/// - `width: "column"` — a box in the text flow, as wide as the column.
/// - `width: "wide"`   — LaTeX `rightWide`: a float in the current column that reaches into
///   the left margin (as wide as the left column plus the margin). `placement: auto` puts it at
///   the bottom of the column, where the reference articles have these boxes.
/// - `width: "full"`   — LaTeX `fullWide`: a float spanning the full text width plus the
///   left margin.
/// `placement`: `auto`, `top`, `bottom`, or `none` (= in the text flow, no float).
#let jote-box(title: none, width: "column", placement: auto, stretch: 1.3, body) = {
  if width == "column" {
    let b = _jote-box-body(title: title, stretch: stretch, wide-lists: true, body)
    if placement == none or placement == auto {
      block(above: skip(1), below: skip(1), b)
    } else {
      _col-float(placement, probe: () => block(width: _column-width(), b), b)
    }
  } else if width == "wide" {
    let b(at: auto) = _margin-wide(
      w => _jote-box-body(title: title, stretch: stretch, width: w, wide-lists: true, body),
      at: at,
    )
    if placement == none {
      block(above: skip(1), below: skip(1), b())
    } else {
      // `auto`: like the reference's rightWide boxes, a bottom float
      _col-float(
        if placement == auto { bottom } else { placement },
        probe: () => _jote-box-body(title: title, stretch: stretch, width: _margin-wide-width(), wide-lists: true, body),
        held: b(at: 0pt),
        b(),
      )
    }
  } else if width == "full" {
    let b = context {
      let off = _offset
      move(dx: -off, _jote-box-body(
        title: title,
        stretch: stretch,
        wide-lists: true,
        width: _geometry().full-width + off,
        body,
      ))
    }
    if placement == none {
      block(above: skip(1), below: skip(1), b)
    } else {
      // LaTeX's \topfraction (.7): a float taller than that gets a float page of its own, on
      // which it is centred vertically
      let b = layout(size => {
        let h = measure(width: size.width, b).height
        let page-h = _geometry().text-height
        if placement == auto and page-h != none and h > 0.7 * page-h {
          _pf-mark(page-h)
          // centred in the whole text height, as on a LaTeX float page (the float's clearance
          // below it is taken back from the bottom)
          block(height: page-h - skip(1), width: 100%, { v(1fr); b; v(1fr); v(-skip(1)) })
        } else {
          _pf-mark(h + skip(1))
          b
        }
      })
      place(
        if placement == auto { top } else { placement },
        float: true,
        scope: "parent",
        clearance: skip(1),
        b,
      )
    }
  } else {
    panic("jote-box: width must be \"column\", \"wide\" or \"full\"")
  }
}

/// Take-home message: top float reaching into the left margin, \baselinestretch 1.5.
#let take-home(body) = {
  let b(w) = _jote-box-body(title: [Take-home message], stretch: 1.5, width: w, body)
  _col-float(top, probe: () => b(_margin-wide-width()), held: _margin-wide(b, at: 0pt), _margin-wide(b))
}

/// Original purpose: bottom float reaching into the left margin, \baselinestretch 1.3.
#let original-purpose(body) = {
  let b(w) = _jote-box-body(title: [Original purpose], stretch: 1.3, width: w, body)
  _col-float(bottom, probe: () => b(_margin-wide-width()), held: _margin-wide(b, at: 0pt), _margin-wide(b))
}

/// The class' `fullwidth` environment: a white tcolorbox with a light-orange frame that reaches
/// into the left margin by `\marginparwidth + \marginparsep`, used for wide tables.
#let fullwidth(body) = context {
  let off = _offset
  // tcolorbox defaults: boxrule 0.5mm, left/right 4mm, top/bottom 2mm, boxsep 1mm
  pad(left: -off, block(
    width: 100%,
    stroke: 0.5mm + jote-orange-light,
    inset: (x: 5.5mm, y: 3.5mm),
    breakable: false,
    body,
  ))
}

// companionbox / invitebox: light orange with a thick (1em) orange rule on the east side.
#let _companion-box(heading: none, body) = {
  block(
    width: 100%,
    fill: jote-orange-light,
    stroke: (right: 1em + joteorange),
    inset: (left: _box-pad-x, right: _box-pad-x, top: 0.8 * sw + 1.5mm, bottom: 1.6 * sw + 1.5mm),
    breakable: false,
    {
      set par(justify: false, first-line-indent: 0pt)
      set text(fill: jotedark)
      show: _openreg
      if heading != none {
        block(below: 0.5 * sw + fleading("large"), _overpass(weight: 600, text(
          size: fsize("large"),
          heading,
        )))
      } else {
        v(0.5 * sw)
      }
      body
    },
  )
}

/// Companion article box (bottom float).
#let companion(body) = {
  let b = _companion-box(heading: [Companion Article], body)
  _col-float(bottom, probe: () => block(width: _column-width(), b), b)
}

/// Invitation box (bottom float).
#let invitation(body) = {
  let b = _companion-box(body)
  _col-float(bottom, probe: () => block(width: _column-width(), b), b)
}

// ---------------------------------------------------------------------------------------------
// Floats, quotes, landscape
// ---------------------------------------------------------------------------------------------

/// LaTeX `figure*`: a figure spanning both columns, floated to the top of a page.
#let wide-figure(placement: top, ..args) = {
  let pos = args.pos()
  if placement == none or pos.len() == 0 {
    return figure(placement: placement, scope: "parent", ..args)
  }
  let clearance = 12 * tpt + sw
  let named = args.named()
  let has-caption = named.at("caption", default: none) != none
  let kind = named.at("kind", default: auto)
  // tables have their caption on top: the space below goes after the body then
  let caption-below = has-caption and kind != table and not (
    kind == auto and type(pos.first()) == content and pos.first().func() == table
  )
  let extra = state("jote-wide-figure-extra", 0pt)
  let body = context {
    let geo = _geometry()
    // with the page's text height as the height to resolve against, so that an image sized
    // relative to it (`height: 90%`, from `0.9\textheight`) is measured at its real size
    let h = measure(figure(placement: none, ..args), width: geo.full-width, height: geo.text-height).height
    // LaTeX puts a `figure*` taller than \dbltopfraction (.7) of the text height on a float page
    // of its own, centred vertically: pad such a figure (above its body and below it) to fill
    // the page, so that no text joins it
    let e = if placement == top and h > 0.7 * geo.text-height { calc.max(0pt, geo.text-height - clearance - h) } else { 0pt }
    // record the space it takes on its page (see `_col-float`)
    _pf-mark(h + e + clearance)
    extra.update(e)
    // centred in the whole text height, as on a LaTeX float page: the float's clearance below it
    // is taken from the space below the figure
    if e > 0pt { v((e + clearance) / 2) }
  }
  let after = context { if extra.get() > 0pt { v((extra.get() - clearance) / 2) } }
  if caption-below {
    let cap = named.caption
    named.insert("caption", if type(cap) == content and cap.func() == figure.caption {
      let f = cap.fields()
      let b = f.remove("body")
      figure.caption(..f, [#b#after])
    } else { [#cap#after] })
    figure(placement: placement, scope: "parent", [#body#pos.first()], ..pos.slice(1), ..named)
  } else {
    figure(placement: placement, scope: "parent", [#body#pos.first()#after], ..pos.slice(1), ..named)
  }
}

/// `epigraph` environment: a quote with its source set flush right.
#let epigraph(source, body) = quote(block: true, attribution: source, body)

/// pdflscape `landscape`: content set on its own landscape page(s). Like pdflscape's `/Rotate`,
/// the page is shown in landscape orientation, and the running header and footer are turned
/// with it (they stay along the portrait page's edges).
#let landscape(body) = context {
  let m = page.margin
  page(
    flipped: true,
    columns: 1,
    // the portrait margins, turned clockwise
    margin: (top: m.left, right: m.top, bottom: m.right, left: m.bottom),
    {
      // floats (e.g. a table figure) are laid out on this page, not deferred
      set figure(placement: none)
      set align(top + left)
      // like a LaTeX float page, a lone table is centred vertically
      v(1fr)
      body
      v(1fr)
    },
  )
}

// ---------------------------------------------------------------------------------------------
// Running header and footers
// ---------------------------------------------------------------------------------------------

#let _citation-line(info, first-page: false) = {
  let ft = if info.footer-title != none { info.footer-title } else { info.title }
  let doi-text = "https://doi.org/" + info.doi + if info.review != none {
    ".pr" + str(info.review.at("round", default: 1))
  } else { "" }
  let doi = link(doi-text, box(doi-text))
  let jname = emph(info.journal.name)
  if info.issue != none {
    let iss = info.issue
    if first-page {
      [#info.running-author (#info.year), #ft. #jname, #emph[#iss.volume] (#iss.number), #iss.pages. #doi]
    } else {
      [#info.running-author (#info.year). #ft. #jname#emph[, #iss.volume]\(#iss.number), #iss.pages. #doi.]
    }
  } else if first-page {
    // the class writes `\@runningauthor\text{ } (\@jyear)` here: two spaces
    [#info.running-author~ (#info.year). #ft. #jname. #doi]
  } else {
    [#info.running-author (#info.year). #ft. #jname. #doi.]
  }
}

// Header and footers are drawn in the page background in absolute page coordinates; the
// offsets were measured on the reference PDF, relative to the text block.
#let _page-furniture(info, g) = context {
  let p = here().page()
  let x-left = g.left - g.offset // left edge of header/footer (fancyhdr headoffset)
  let x-right = 210mm - g.right
  let text-bottom = g.top + g.text-height // last baseline of a full column
  let footer-text(body) = {
    set text(fill: betterlightblack, size: fsize("small"))
    set par(leading: fleading("small"), justify: false, first-line-indent: 0pt)
    show link: set text(fill: jotedark)
    body
  }
  if p == 1 {
    if info.header {
      // `header` option: big uppercase article-type banner, 70 mm from the header's left edge
      let c = joteorange.lighten(30%)
      place(top + left, dx: x-left + 70mm, dy: g.top - 26.85pt, box({
        set text(fill: c, size: fsize("Huge"), top-edge: "baseline", bottom-edge: "baseline")
        _overpass(weight: 600, text(tracking: 0.06em, upper(info.article-type)))
        h(0.6em)
        box(_icon("open-access", height: 0.75 * fsize("huge"), fill: c))
      }))
    }
    // first-page footer: no rule, indented by \marginparwidth + 4mm (+ 2\tabcolsep)
    let x = x-left + 2.5cm + 4mm + 2 * 6 * tpt
    place(top + left, dx: x, dy: text-bottom + 20.53pt - fsize("small"), box(
      width: x-right - x,
      footer-text(if info.issue != none {
        grid(
          columns: (1fr, auto),
          stroke: (x, y) => if x == 0 { (right: 0.4 * tpt + betterlightblack) },
          inset: (x, y) => if x == 0 { (right: 6 * tpt) } else { (left: 6 * tpt) },
          _citation-line(info, first-page: true), counter(page).display(),
        )
      } else { _citation-line(info, first-page: true) }),
    ))
    return
  }
  // running header: logo + article type | running author | (page number in issue mode)
  // baseline 26.85pt above the text block; the line's top is the top of the logo
  place(top + left, dx: x-left, dy: g.top - 26.85pt - (1.5 * sw - 1 * tpt), box(width: x-right - x-left, {
    set text(fill: jotedark, top-edge: "baseline", bottom-edge: "baseline")
    // \raisebox{-0.1em}{\includegraphics[height=1.5\smallwidth]{logo}}
    box(baseline: 1 * tpt, image(_media("TE_logo_blue_high_res.png"), height: 1.5 * sw))
    h(6pt)
    _overpass(text(size: fsize("Large"), info.article-type))
    h(1fr)
    // measured: the running author is set at 9pt, letterspaced (\textls[10])
    text(size: fsize("small"), tracking: 0.01em, info.running-author)
    if info.issue != none {
      h(2 * 6 * tpt)
      text(fill: black, size: fsize("small"), counter(page).display())
    }
  }))
  // footer: thin rule across the header width, citation line below
  place(top + left, dx: x-left, dy: text-bottom + 18.53pt, line(
    length: x-right - x-left,
    stroke: 0.4 * tpt + betterlightblack,
  ))
  place(top + left, dx: x-left, dy: text-bottom + 37.28pt - fsize("small"), box(
    width: x-right - x-left,
    footer-text(_citation-line(info)),
  ))
}

// ---------------------------------------------------------------------------------------------
// Front matter: title block, metadata column, abstract
// ---------------------------------------------------------------------------------------------

#let _authors-line(authors) = {
  let fmt(a) = box({
    // \author[1]{\mbox{Name\orcid{…}}}
    a.name
    if a.at("orcid", default: none) != none { orcid(a.orcid) }
    let aff = a.at("affiliations", default: ())
    let notes = a.at("notes", default: ())
    let marks = aff.map(str) + notes
    if marks.len() > 0 { super(marks.join(",")) }
  })
  // authblk: \Authsep = \Authand = ",\text{ } " — a comma followed by two spaces
  authors.map(fmt).join([,~ ])
}

#let _meta-column(info) = {
  // the tracking stands in for microtype's font expansion, which widens this ragged text ~2 %
  set text(size: fsize("scriptsize"), tracking: 0.01em)
  set par(leading: fleading("scriptsize"), spacing: fleading("scriptsize"), justify: false, first-line-indent: 0pt)
  // blank line in the class = \par with \parskip = \baselineskip (12pt) on top of the 8pt grid
  let gap = fleading("scriptsize") + sw
  let b(it) = text(weight: 600, it)

  // affiliations: "¹Department …", separated by 3pt
  block(spacing: 0pt, for (i, aff) in info.affiliations.enumerate() {
    block(above: 3 * tpt + fleading("scriptsize"), below: 0pt, [#super(str(i + 1))#aff])
  })
  v(gap - fleading("scriptsize"))

  if info.review != none {
    let r = info.review
    let round = r.at("round", default: none)
    [This is #if round == none [the originally submitted version] else [submission \##round] of “#info.title” with #if round != none [round #round of the] peer review comments attached.]
    if r.at("original-author", default: none) != none {
      parbreak()
      b[Original author(s)]
      linebreak()
      emph(r.original-author)
    }
    parbreak()
    b[Published version]
    linebreak()
    link("https://doi.org/" + info.doi)
    parbreak()
    b[How to read]
    linebreak()
    [Sections which have peer review comments are marked by ▼ or links, clicking which directs you to said comments. The reviews contain links referring back to the original section.]
    return
  }

  if info.contributions != none {
    block(below: gap, [#super[†]#info.contributions])
  }
  if info.special-issue != none {
    block(below: gap, [#b[Part of Special Issue] \ #info.special-issue])
  }
  let d = info.dates
  let rows = ()
  for (key, label) in (
    ("received", "Received"),
    ("revised", "Revised"),
    ("accepted", "Accepted"),
    ("published", "Published"),
    ("issued", "Issued"),
  ) {
    let v = d.at(key, default: none)
    if v != none { rows.push([#b(label) \ #box(v)]) }
  }
  if rows.len() > 0 { block(below: gap, rows.join(linebreak())) }

  let corr = info.correspondence
  if corr != none {
    let addr = corr.at("address", default: none)
    let email = corr.at("email", default: none)
    block(below: gap, {
      b[Correspondence]
      if addr != none { [ \ #addr] }
      // allow a line break after the "@" (TeX hyphenates the address instead)
      if email != none {
        let parts = email.split("@")
        let shown = parts.slice(0, -1).map(p => box(p + "@")).join() + box(parts.last())
        [ \ #link("mailto:" + email, shown)]
      }
    })
  }
  if info.rga-info != none {
    block(below: gap, [#b[Grant Application to] #info.rga-info])
  }
  if info.funding != none {
    block(below: gap, [#b[Funding] \ #info.funding])
  }
  block(below: gap, {
    b[License]
    h(0.6em)
    box(baseline: 0.109em, _icon("creative-commons", height: 0.968em))
    h(0.3em)
    box(baseline: 0.109em, _icon("creative-commons-by", height: 0.968em))
    linebreak()
    [This article is licensed under the ]
    // (the class' link text is not hyphenated)
    _openreg(link("https://creativecommons.org/licenses/by/4.0/", text(hyphenate: false)[Creative Commons Attribution 4.0 (CC-BY 4.0)]))
    [ license, which allows you to copy, redistribute, transform and build upon the article and all its contents in any medium or format for any purpose, provided that appropriate credit is given.]
  })
  block(below: 13.05pt, [© #info.running-author #info.year])
  let published-iso = d.at("published-iso", default: none)
  link(
    "https://crossmark.crossref.org/dialog/?doi=" + info.doi + "&domain=pdf" + if published-iso != none {
      "&date_stamp=" + published-iso
    } else { "" },
    box(image(_media("CROSSMARK_Color_horizontal.png"), height: 2 * fsize("scriptsize"))),
  )
}

/// Split content into words at spaces (and after explicit hyphens), keeping inline elements
/// (quotes, emphasis, …) attached to their word. Returns an array of `(word, space)` pairs, where
/// `space` tells whether a space follows the word, or `none` for content that cannot be split
/// safely (e.g. explicit breaks).
#let _words(it) = {
  let kids = if type(it) == str { (text(it),) } else if it.func() == text { (it,) } else if it.has("children") {
    it.children
  } else { (it,) }
  let words = (((), true),)
  for c in kids {
    if c == [ ] {
      words.push(((), true))
    } else if c.func() == text {
      for (i, p) in c.text.split(" ").enumerate() {
        if i > 0 { words.push(((), true)) }
        // TeX may break after an explicit hyphen inside a word
        let parts = p.split("-")
        let pieces = if parts.len() > 1 and parts.all(x => x != "") {
          parts.slice(0, -1).map(x => x + "-") + (parts.last(),)
        } else { (p,) }
        for (k, q) in pieces.enumerate() {
          if k > 0 {
            words.last().at(1) = false
            words.push(((), true))
          }
          if q != "" { words.last().at(0).push(text(q)) }
        }
      }
    } else if c.func() in (linebreak, parbreak) {
      return none
    } else {
      words.last().at(0).push(c)
    }
  }
  words.filter(w => w.at(0).len() > 0).map(((w, sp)) => (w.join(), sp))
}

/// Ragged-right line breaking as TeX does it for the title (`\RaggedRight` from ragged2e: a
/// `\rightskip` of 0pt plus 2em, interword glue that stretches a little, no hyphenation):
/// Knuth–Plass over the word boundaries, minimising the sum of (10 + badness)² (plus
/// `\exhyphenpenalty`² after an explicit hyphen). Typst's own ragged breaking often leaves a
/// single word on a line where TeX balances the lines. Must be called in the title's text style
/// (it measures). Reproduces the line breaks of all titles in issues 6-1 and 6-2.
#let _tex-ragged(words, width, rightskip: 2em, space-stretch: 0.15em, space-shrink: 0.03em) = {
  let n = words.len()
  let line(i, j) = {
    for k in range(i, j) {
      words.at(k).at(0)
      if k < j - 1 and words.at(k).at(1) { [ ] }
    }
  }
  let inf = 1e12
  let best = (0,) + (inf,) * n
  let prev = (0,) * (n + 1)
  for j in range(1, n + 1) {
    for i in range(0, j) {
      if best.at(i) >= inf { continue }
      let short = (width - measure(line(i, j)).width).to-absolute()
      let spaces = range(i, j - 1).filter(k => words.at(k).at(1)).len()
      // interword glue may shrink a little (TeX does not let it shrink further)
      let shrink = (space-shrink * spaces).to-absolute()
      if short < -shrink and j - i > 1 { continue }
      let b = if short < 0pt {
        100 * calc.pow(-short / shrink, 3)
      } else if j == n { 0 } else {
        let r = short / (rightskip + space-stretch * spaces).to-absolute()
        calc.min(10000, 100 * calc.pow(r, 3))
      }
      let penalty = if j < n and not words.at(j - 1).at(1) { 50 } else { 0 }
      let d = best.at(i) + calc.pow(10 + b, 2) + calc.pow(penalty, 2)
      if d < best.at(j) {
        best.at(j) = d
        prev.at(j) = i
      }
    }
  }
  let breaks = ()
  let j = n
  while j > 0 {
    breaks.insert(0, j)
    j = prev.at(j)
  }
  let lines = ()
  let i = 0
  for b in breaks {
    // a box, so that a line that only fits with shrunk spaces is not broken again
    let l = line(i, b)
    lines.push(box(width: measure(l).width + 0.01pt, l))
    i = b
  }
  lines.join(linebreak())
}

#let _front-matter(info, g) = {
  set par(first-line-indent: 0pt)
  let full = g.full-width
  // ---- title "coffin": logo, title (vertically centred on the logo), authors ------------------
  let logo-w = 4 * sw
  let logo-sep = 17mm
  let title-w = 0.9 * full
  let title = {
    set text(size: fsize("Huge"), top-edge: 0.72em, bottom-edge: "baseline", hyphenate: false)
    set par(leading: fskip("Huge") - 0.72 * fsize("Huge"), justify: false)
    _overpass(weight: 600, context {
      let words = _words(info.title)
      if words == none or words.len() < 2 { info.title } else { _tex-ragged(words, title-w) }
    })
  }
  let authors = {
    set text(size: fsize("large"), top-edge: 0.86em, bottom-edge: -0.11em)
    set par(leading: fskip("large") - 0.97 * fsize("large"), justify: false)
    _overpass(weight: 300, _authors-line(info.authors))
  }
  // The class builds an xcoffins "frame": the logo, the title vertically centred on the logo,
  // and the authors 2\smallwidth below the title; the frame is typeset at (-LogoSep - 17mm)
  // from the left text edge, with its top at the top of the text block.
  let logo = image(_media("TE_logo_blue_high_res.png"), width: logo-w)
  block(width: 100%, spacing: 0pt, context {
    let title-box = block(width: title-w, title)
    let th = measure(title-box).height
    let lh = measure(logo).height
    block(spacing: 0pt, inset: (top: calc.max(0pt, (lh - th) / 2)), {
      place(horizon + left, dx: -(logo-w + logo-sep), logo)
      title-box
    })
    block(above: 2 * sw, below: 0pt, block(width: title-w, authors))
  })

  // ---- abstract with the metadata column in the left margin ----------------------------------
  // \vspace*{2\smallwidth} + \lineskip, and TeX's first line is only as tall as its glyphs
  // (≈ 0.76em) where ours is 1em
  let abstract-gap = 2 * sw + 1 * tpt - 0.24 * fsize("normalsize")
  block(above: abstract-gap, below: 0pt, width: 100%, {
    // metadata column: bottom-aligned at the bottom of the text block, with the thin orange
    // rule on its right running up to the top of the abstract
    context {
      let y = here().position().y
      let y-bottom = g.top + g.text-height - 2pt
      let h = y-bottom - y + 0.3pt
      let x-rule = g.left - 136.06pt + 123.75pt
      place(top + left, dx: -g.left + 16.11pt, dy: -0.3pt, block(
        width: x-rule - 16.11pt - 15.25pt,
        height: h,
        align(bottom, _meta-column(info)),
      ))
      place(top + left, dx: -g.left + x-rule - 0.25pt, dy: -0.3pt, rect(width: 0.5 * tpt, height: h, fill: joteorange, stroke: none))
    }
    if info.abstract != none {
      set par(justify: true)
      info.abstract
      if info.keywords != none and info.keywords.len() > 0 {
        block(above: skip(1), below: 0pt, {
          strong[Keywords]
          h(0.5em)
          emph(info.keywords.join(", "))
        })
      }
    } else {
      v(0pt)
    }
  })
}

// ---------------------------------------------------------------------------------------------
// The template
// ---------------------------------------------------------------------------------------------

#let jote-article(
  article-type: "Meta-Research",
  title: [Title],
  footer-title: none,
  authors: (),
  affiliations: (),
  running-author: none,
  correspondence: none,
  journal: (name: "Journal of Trial & Error", website: "https://journal.trialanderror.org"),
  year: none,
  doi: none,
  dates: (:),
  abstract: none,
  keywords: (),
  issue: none,
  header: false,
  special-issue: none,
  funding: none,
  contributions: none,
  rga-info: none,
  review: none,
  bibliography: none,
  one-column: false,
  math-font: fonts.math,
  body,
) = {
  let article-type = _type-label(if review != none { "review" } else { article-type })
  let running-author = if running-author == none {
    if authors.len() > 0 { authors.first().name } else { "" }
  } else { running-author }
  let journal = (name: "Journal of Trial & Error", website: "https://journal.trialanderror.org") + journal
  let year = if year == none { datetime.today().year() } else { year }
  let keywords = if keywords == none { () } else if type(keywords) == str {
    keywords.split(",").map(str.trim)
  } else { keywords }

  let g = _geom(one-column)
  let full-width = 210mm - g.left - g.right
  let g = g + (full-width: full-width)
  let info = (
    article-type: article-type,
    title: title,
    footer-title: footer-title,
    authors: authors,
    affiliations: affiliations,
    running-author: running-author,
    correspondence: correspondence,
    journal: journal,
    year: year,
    doi: if doi == none { "" } else { doi },
    dates: dates,
    abstract: abstract,
    keywords: keywords,
    issue: issue,
    header: header,
    special-issue: special-issue,
    funding: funding,
    contributions: contributions,
    rga-info: rga-info,
    review: review,
  )

  // ---- PDF metadata (hyperref/hyperxmp setup of the class) ------------------------------------
  let ft = if footer-title != none { footer-title } else { title }
  set document(
    title: _plain(running-author) + " (" + str(year) + ") - " + _plain(ft),
    author: _plain(running-author),
    keywords: keywords.map(_plain),
    description: if abstract != none { _plain(abstract) } else { none },
  )

  // ---- page ---------------------------------------------------------------------------------

  set page(
    width: 210mm,
    height: 280mm,
    margin: (left: g.left, right: g.right, top: g.top, bottom: g.bottom),
    columns: if one-column { 1 } else { 2 },
    header: none,
    footer: none,
    // on landscape pages the portrait header and footer are turned with the page
    background: context if page.flipped {
      rotate(90deg, reflow: true, box(width: 210mm, height: 280mm, _page-furniture(info, g)))
    } else { _page-furniture(info, g) },
  )
  set columns(gutter: sw)

  // ---- text ---------------------------------------------------------------------------------
  // Every line box is exactly 1em high above the baseline and has no depth, which reproduces
  // TeX's \topskip/\baselineskip grid: consecutive baselines are `size + leading` apart.
  set text(
    font: fonts.body,
    weight: 300,
    size: fsize("normalsize"),
    lang: "en",
    region: "US",
    hyphenate: true,
    // TeX's \hyphenpenalty is low (50); this gives the closest line breaks to the LaTeX output
    costs: (hyphenation: 50%),
    top-edge: 1em,
    bottom-edge: "baseline",
    fill: black,
  )
  set par(
    justify: true,
    leading: fleading("normalsize"),
    spacing: fleading("normalsize"),
    first-line-indent: 10 * tpt,
    linebreaks: "optimized",
    // TeX: interword glue shrinks to 2/3 and stretches by 1/2 of a space; microtype's font
    // expansion (±2 %) is approximated by a little tracking
    justification-limits: (
      spacing: (min: 66.67%, max: 150%),
      tracking: (min: -0.01em, max: 0.01em),
    ),
  )
  set block(spacing: fleading("normalsize"))
  // TeX's \nonfrenchspacing: after sentence-ending punctuation (not preceded by a capital) and
  // after colons, the interword space gets an extra third of a space
  show regex("[^A-Z\s][.!?:][)\]’”\"']* "): it => {
    let s = it.text
    // the match turns the text into a plain string: a smart quote in it (`"Title". Next`,
    // `end." Next`) must be made a smart quote again, or it is printed straight
    for c in s.slice(0, s.len() - 1).clusters() {
      if c == "\"" { smartquote(double: true) } else if c == "'" { smartquote(double: false) } else { c }
    }
    text(spacing: 133.3%, " ")
  }
  // ... and the same after such a mark at the end of bold or italic text (`\textbf{Works:}
  // Which`: TeX's space factor survives the group, but the rule above cannot see across the
  // element's edge): a third of a space after it. Not a weak space, which would swallow the space
  // after it; and since we cannot see whether a space follows, not after a period in italics
  // (`\emph{e.g.},`), only after bold run-in labels (`\textbf{Note.} Text`).
  let ends-with(it, pattern) = {
    let s = _plain(it.body)
    type(s) == str and s.match(regex(pattern + "[)\]’”\"']*$")) != none
  }
  show strong: it => if ends-with(it, "[^A-Z\s][.!?:]") { [#it#h(0.087em)] } else { it }
  show emph: it => if ends-with(it, "[^A-Z\s][!?:]") { [#it#h(0.087em)] } else { it }
  // TeX never breaks a line before an em dash (Typst's Unicode line breaking does); after one it
  // may. A word joiner in front of the dash keeps it with the word before.
  show "—": [#sym.wj—]
  set strong(delta: 300) // Light (300) -> SemiBold (600)
  // \textsuperscript: \sf@size (7pt at 10pt) on the math superscript shift
  set super(typographic: false, size: 0.7em, baseline: -0.36em)
  set sub(typographic: false, size: 0.7em, baseline: 0.2em)

  show link: set text(fill: jotedark)
  show ref: set text(fill: jotedark)
  // the class sets the year of a citation in bold jotedark (`cite:plabelyear+extradate`); only
  // the year is a link there (hyperref's citecolor), names and parentheses stay black
  show cite: it => {
    show link: set text(fill: black)
    show regex("\b\d{4}[a-z]?\b|\bn\.d\.|\bin press\b"): set text(weight: 600, fill: jotedark)
    it
  }

  show math.equation: set text(font: math-font, weight: 400)
  show math.equation.where(block: true): set block(above: skip(1), below: skip(1))
  // The class' maths font (Iwona) is much narrower than the fallback, so display equations
  // written to just fit a column would overflow into the other one: scale those down (by at
  // most 30 %; anything wider overflows, as an overfull box does in LaTeX)
  show math.equation.where(block: true): it => layout(size => {
    let w = measure(math.equation(block: false, math.display(it.body))).width
    if w > size.width and w <= size.width / 0.7 { scale(size.width / w * 100%, reflow: true, it) } else { it }
  })
  // in LaTeX a matrix in running text has full-size cells, like a displayed one
  show math.equation.where(block: false): it => {
    show selector.or(math.mat, math.vec, math.cases): math.display
    it
  }

  // ---- headings (titlesec setup of the class) -----------------------------------------------
  set heading(numbering: none)
  show heading: set text(size: fsize("normalsize"), weight: 300, hyphenate: false)
  show heading.where(level: 1): it => block(above: skip(1), below: skip(1), sticky: true, {
    set par(justify: false, first-line-indent: 0pt, hanging-indent: 8.5 * tpt)
    jotebar
    h(5 * tpt)
    text(weight: 600, it.body)
  })
  show heading.where(level: 2): it => block(above: skip(1), below: skip(1), sticky: true, {
    set par(justify: false, first-line-indent: 0pt)
    _openreg(it.body)
  })
  show heading.where(level: 3): it => block(above: skip(1), below: fleading("normalsize"), sticky: true, {
    set par(justify: false, first-line-indent: 0pt)
    emph(it.body)
  })
  // \paragraph: run-in, medium weight, followed by two spaces
  show heading.where(level: 4): it => [#it.body#h(0.5em)]
  show heading.where(level: 5): it => [#emph(it.body)#h(0.75em)]

  // ---- lists (enumitem: nosep, bold labels, topsep = \baselineskip, leftmargin = \parindent) --
  let label-sep = 0.5em
  // `spacing: auto` = the paragraph leading for tight lists, so items sit on the line grid
  set list(
    indent: 0pt,
    body-indent: label-sep,
    spacing: auto,
    marker: (
      // measured: the bullet is the light one, although enumitem sets labels in bold
      box(width: 10 * tpt - label-sep, text(weight: 300)[•]),
      text(weight: 600)[–],
      text(weight: 600)[∗],
      text(weight: 600)[·],
    ),
  )
  set enum(
    indent: 0pt,
    body-indent: label-sep,
    spacing: auto,
    // labels 1. / a. / i. by nesting level, in bold
    full: true,
    numbering: (..n) => {
      let ns = n.pos()
      text(weight: 600, numbering(("1.", "a.", "i.").at(calc.rem(ns.len() - 1, 3)), ns.last()))
    },
  )
  show list: set block(above: skip(1), below: skip(1))
  show enum: set block(above: skip(1), below: skip(1))
  show terms: set block(above: skip(1), below: skip(1))
  // \setlist[1]{topsep=\baselineskip}: only outer lists; nested ones are `nosep`
  show selector.or(list, enum, terms): it => {
    show selector.or(list, enum, terms): set block(above: fleading("normalsize"), below: fleading("normalsize"))
    it
  }
  set terms(separator: h(0.5em), hanging-indent: 10 * tpt, spacing: auto)

  // ---- quotes (quoting: small italic black!80, 26pt margins, \baselineskip around) ----------
  set quote(block: true)
  show quote.where(block: true): it => block(above: skip(1), below: skip(1), pad(x: 26 * tpt, {
    set text(style: "italic", fill: black.lighten(20%))
    set par(first-line-indent: 0pt)
    size-as("small", it.body)
    if it.attribution != none {
      linebreak()
      h(1fr)
      it.attribution
    }
  }))

  // ---- footnotes (footmisc: flushmargin, marginal, bottom, norule) -----------------------------
  set footnote.entry(separator: none, clearance: 9 * tpt + 6.65 * tpt - fsize("footnotesize"), gap: fleading("footnotesize"), indent: 0pt)
  show footnote.entry: it => {
    let loc = it.note.location()
    let num = numbering(it.note.numbering, ..counter(footnote).at(loc))
    set text(size: fsize("footnotesize"))
    set par(leading: fleading("footnotesize"), spacing: fleading("footnotesize"), first-line-indent: 0pt, hanging-indent: 0pt, justify: true)
    let mark-w = 0.8em
    par[#h(-mark-w)#box(width: mark-w, align(right, link(loc, super(num))))#it.note.body]
  }

  // ---- figures, tables, captions -----------------------------------------------------------
  set figure(gap: 10 * tpt, placement: auto)
  set place(clearance: 12 * tpt + sw)
  show figure: set block(above: skip(1), below: skip(1))
  show figure.where(kind: table): set figure.caption(position: top)
  set figure.caption(separator: h(1em))
  show figure.caption: it => {
    // ragged right like the class' captions, and like TeX's ragged text practically never
    // hyphenated
    set text(size: fsize("small"), hyphenate: false)
    set par(leading: fleading("small"), justify: false, first-line-indent: 0pt)
    set align(left)
    block(width: 100%, {
      text(weight: 600)[#it.supplement~#context it.counter.display(it.numbering)]
      it.separator
      text(fill: darklightblack, it.body)
    })
  }
  set table(stroke: none, inset: (x: 6 * tpt, y: 0.25 * sw / 2 + 1.5pt), align: left + top)
  // The class sets every tabular/tabularx in \small (`\AtBeginEnvironment{tabular}{\small}`):
  // a table in normal-size text becomes small. One whose size is set explicitly (a converter's
  // `text(size: 8pt)[#table(..)]` for `\footnotesize`) or that sits in small text (a box) keeps
  // it. Cells keep the surrounding leading (the box's in a box).
  show table: it => context if text.size == fsize("normalsize") {
    set text(size: fsize("small"))
    it
  } else { it }
  // Cells are ragged right, and like TeX's ragged text, not hyphenated (`auto`: only justified
  // text is)
  show table: set par(justify: false, first-line-indent: 0pt, linebreaks: "simple")
  show table: set text(hyphenate: auto)
  // Rules: the class' running footer sets \arrayrulecolor{betterlightblack} globally, so every
  // table after the first page has grey-blue rules; \arrayrulewidth is 0.4pt (1pt in `table`
  // floats, which converters give explicitly). Converters give only the thickness of a rule, so
  // that this colour applies.
  set table.hline(stroke: 0.4 * tpt + betterlightblack)
  set table.vline(stroke: 0.4 * tpt + betterlightblack)

  // ---- bibliography (biblatex-apa, \small, \bibhang = \parindent) ---------------------------
  set std.bibliography(title: [References], style: "apa")
  show std.bibliography: it => {
    set text(size: fsize("small"))
    // \bibitemsep = 0.3\smallwidth on top of the normal line distance
    set par(leading: fleading("small"), spacing: fleading("small") + 0.3 * sw, justify: false, first-line-indent: 0pt)
    set block(spacing: fleading("small") + 0.3 * sw)
    it
  }

  // ---- first page --------------------------------------------------------------------------
  let fm = _front-matter(info, g)
  if one-column {
    block(below: 26.33pt, fm)
  } else {
    // \twocolumn[...]: the front matter spans both columns; the column text starts three lines
    // below the keywords
    let clearance = 36.29pt - fsize("normalsize")
    place(top + left, scope: "parent", float: true, clearance: clearance, {
      fm
      context _pf-mark(here().position().y - g.top + clearance)
    })
  }

  // LaTeX indents the first paragraph after the front matter when no heading comes first; Typst
  // only indents paragraphs that follow another paragraph, so give it an empty one to follow
  let first = if body.func() == [].func() {
    body.children.find(c => c.func() not in (parbreak, place, metadata) and c != [ ])
  } else { body }
  if first != none and first.func() in (text, strong, emph, smartquote, smallcaps, link, box, super, sub, footnote, cite, ref) {
    par[]
  }

  // anchor points for held-back column floats between the top-level paragraphs (see `_col-float`)
  let body = if body.func() == [].func() {
    body.children.map(c => if c.func() == parbreak { (c, _float-anchor(), parbreak()) } else { (c,) }).flatten().join()
  } else { body }

  body

  _float-anchor(final: true)

  if bibliography != none { bibliography }
}

// ---------------------------------------------------------------------------------------------
// booktabs-style rules for tables: `table.hline`s with \heavyrulewidth / \lightrulewidth
// ---------------------------------------------------------------------------------------------

// (thickness only: the colour comes from the template's `table.hline` set rule)
#let toprule = table.hline(stroke: 0.8 * tpt)
#let midrule = table.hline(stroke: 0.5 * tpt)
#let bottomrule = table.hline(stroke: 0.8 * tpt)
