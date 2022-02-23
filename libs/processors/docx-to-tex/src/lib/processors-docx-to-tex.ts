export function docxToTex(input: Uint8Array): string {
  const vfile = await docxToVfile(input)

  const proc = unified()
    .use(reoffParse)
    .use(reoffClean)
    .use(() => (tree, vfile) => vfile.data('bibliography', parseBib(tree)))
    .use(
      () => (tree, vfile) =>
        ooxastUtilCitations(tree, vfile.data('bibliography'))
    )
    .use(reoffRejour)
    .use(rejourFrontmatter)
    .use(relatexStringify)
}
