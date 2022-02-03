// > This section is rendered by this module from [`example.js`](example.js).

// Say we have the follow JATS XML file, `example.xml`
/*
```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE article PUBLIC "-//NLM//DTD JATS (Z39.96) Journal Publishing DTD v1.2 20190208//EN" "https://jats.nlm.nih.gov/publishing/1.2/JATS-journalpublishing1.dtd">
<article xmlns:xlink="http://www.w3.org/1999/xlink">
  <front>
    <article-meta>
      <title-group>
        <article-title>A Fantastic Article</article-title>
      </title-group>
      <contrib-group content-type="author">
        <contrib contrib-type="person">
          <name>
            <surname>Fake</surname>
            <given-names>Person</given-names>
          </name>
        </contrib>
    </article-meta>
  </front>
  <body id="body">
    <sec id="sec-1">
      <title>Abstract</title>
      <p id="_paragraph-1">
        This will be an abstract
      </p>
    </sec>
  </body>
</article>
```
*/

// And our module, `example.ts`, looks like this:
import { unified } from 'unified'
import rejourParse from 'rejour-parse'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'

const file = fs.readFileSync('example.xml', { encoding: 'utf8' })

const result = await unified()
  .use(rejourParse)
  .use(rejourRelatex)
  .use(relatexStringify)
  .process(file)

// Now, printing `result` (the newly generated .tex file) yields:
console.log('latex', String(result))
