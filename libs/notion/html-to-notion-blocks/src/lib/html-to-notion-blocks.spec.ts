import { htmlToNotion } from './html-to-notion-blocks.js'

const testText = `<ul><li>Experience with working in an academic journal or publishing context.</li><li>Comfortable with reference managers (Zotero, Mendeley).</li><li>Strong opinions on how documents should look, or what makes things look pretty in general. Most academic articles range from boring to bad-looking, but it doesn't need to be that way!</li><li>Eye for detail. While it's not the typesetters job to correct the manuscript, it's almost inevitable that some small errors make their way through both peer reviewers and copy-editors.</li><li><s>Burning hatred for the Elsevier Industrial Complex.</s> Passion for Open Science.</li></ul><p><a href="hey">this is a link</a></p><p>This is <strong>bold</strong> and <em>italic</em></p><p>This is nested <code><strong><i>code and bold and italic</i></strong></code> and <strong>bold and italic</strong> and <em>italic and bold</em> and <strong><em>bold and italic and bold</em></strong></p><pre><code>const a = 1\\nconst b = 2\\nconst c = 3</code></pre>`

describe('rehypeToNotion', () => {
  it('should work', async () => {
    const res = htmlToNotion(testText)
    expect(res).toEqual([
      {
        bulleted_list_item: {
          children: undefined,
          rich_text: [
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: {
                content: 'Experience with working in an academic journal or publishing context.',
                link: undefined,
              },
              type: 'text',
            },
          ],
        },
        object: 'block',
        type: 'bulleted_list_item',
      },
      {
        bulleted_list_item: {
          children: undefined,
          rich_text: [
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: {
                content: 'Comfortable with reference managers (Zotero, Mendeley).',
                link: undefined,
              },
              type: 'text',
            },
          ],
        },
        object: 'block',
        type: 'bulleted_list_item',
      },
      {
        bulleted_list_item: {
          children: undefined,
          rich_text: [
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: {
                content:
                  "Strong opinions on how documents should look, or what makes things look pretty in general. Most academic articles range from boring to bad-looking, but it doesn't need to be that way!",
                link: undefined,
              },
              type: 'text',
            },
          ],
        },
        object: 'block',
        type: 'bulleted_list_item',
      },
      {
        bulleted_list_item: {
          children: undefined,
          rich_text: [
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: {
                content:
                  "Eye for detail. While it's not the typesetters job to correct the manuscript, it's almost inevitable that some small errors make their way through both peer reviewers and copy-editors.",
                link: undefined,
              },
              type: 'text',
            },
          ],
        },
        object: 'block',
        type: 'bulleted_list_item',
      },
      {
        bulleted_list_item: {
          children: undefined,
          rich_text: [
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: true,
                underline: false,
              },
              text: {
                content: 'Burning hatred for the Elsevier Industrial Complex.',
                link: undefined,
              },
              type: 'text',
            },
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: ' Passion for Open Science.', link: undefined },
              type: 'text',
            },
          ],
        },
        object: 'block',
        type: 'bulleted_list_item',
      },
      {
        object: 'block',
        paragraph: {
          rich_text: [
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: {
                content: 'this is a link',
                link: { type: 'url', url: 'hey' },
              },
              type: 'text',
            },
          ],
        },
        type: 'paragraph',
      },
      {
        object: 'block',
        paragraph: {
          rich_text: [
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: 'This is ', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: true,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: 'bold', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: ' and ', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: true,
                strikethrough: false,
                underline: false,
              },
              text: { content: 'italic', link: undefined },
              type: 'text',
            },
          ],
        },
        type: 'paragraph',
      },
      {
        object: 'block',
        paragraph: {
          rich_text: [
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: 'This is nested ', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: false,
                code: true,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: 'code and bold and italic', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: ' and ', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: true,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: 'bold and italic', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: ' and ', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: true,
                strikethrough: false,
                underline: false,
              },
              text: { content: 'italic and bold', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: { content: ' and ', link: undefined },
              type: 'text',
            },
            {
              annotations: {
                bold: true,
                code: false,
                color: 'default',
                italic: true,
                strikethrough: false,
                underline: false,
              },
              text: { content: 'bold and italic and bold', link: undefined },
              type: 'text',
            },
          ],
        },
        type: 'paragraph',
      },
      {
        code: {
          language: 'plain text',
          rich_text: [
            {
              annotations: {
                bold: false,
                code: false,
                color: 'default',
                italic: false,
                strikethrough: false,
                underline: false,
              },
              text: {
                content: 'const a = 1\\nconst b = 2\\nconst c = 3',
                link: undefined,
              },
              type: 'text',
            },
          ],
        },
        object: 'block',
        type: 'code',
      },
    ])
  })
})
