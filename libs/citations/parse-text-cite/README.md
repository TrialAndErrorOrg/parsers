# citations-parse-text-cite

Small tool that parses a string of text containing APA style in text citations, e.g. Jones (2020), and returns a rudimentary AST with the thing parsed.

Not very efficient at all, just uses regex so don't run it on big pieces of text at once. To be used inside other more mature parsers in order to check whether what we are looking at is a citation.
