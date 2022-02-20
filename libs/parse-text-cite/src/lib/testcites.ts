import type { TestData } from './parse-text-cite.spec'
export const tests: TestData = {
  'Custom-Shit': {
    description: 'own cases i wanna catch',
    content: [
      {
        description: 'Some build up',
        result: [
          'Another long sentence that ends in a citations is the form that makes Thomas the happiest ',
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'Thomas2022',
              },
            ],
            properties: { noteIndex: 0 },
          },
          '.',
        ],
        input:
          'Another long sentence that ends in a citations is the form that makes Thomas the happiest (Thomas, 2022).',
      },
    ],
  },
  //   'APA-8-6': {
  //     description: `which use a semi-colon`,
  //     content: [
  //       {
  //         description: ``,
  //         result: `\\parencites{8.6a}[as cited in][]{8.6b}`,
  //         input: `(Rabbitt, 1982; as cited in Lyon et al., 2014)`,
  //       },
  //       {
  //         description: `To obtain the exact format, if desired, wrap the citation in`,
  //         result: `\\DeclareDelimFormat{multicitedelim}{\\addcomma\\space}
  // \\DeclareDelimFormat{multicitedelim}{\\addsemicolon\\space}
  // \\parencites{8.6a}[as cited in][]{8.6b}`,
  //         input: `(Rabbitt, 1982, as cited in Lyon et al., 2014)`,
  //       },
  //       {
  //         description: `Primary source with no date`,
  //         result: `Allport's diary \\parencite[as cited in][]{8.6c}`,
  //         input: `Allport’s diary (as cited in Nicholson, 2003)`,
  //       },
  //     ],
  //   },
  //   // 'APA-8-9': {
  //   //   description: `liography database entry.`,
  //   // },
  //   'APA-8-10': {
  //     description: `Simple cite. “Jr.” suffix is not shown (bib entry for this example has a suffix)`,
  //     content: [
  //       {
  //         description: ``,
  //         result: `\\textcite{8.10a}`,
  //         input: `Kessler (2003)`,
  //       },
  //       {
  //         description: `Testing seasonal periodical citations–should be ignored and only year printed`,
  //         result: `\\textcite{8.10b}`,
  //         input: `Test (2001)`,
  //       },
  //     ],
  //   },
  'APA-8-11': {
    description: `Within a paragraph, not in the narrative sense`,
    content: [
      {
        description: `plain parenthetical citation`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Koehler2016',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Koehler, 2016)`,
      },
      {
        description: `plain parenthetical citation with double dog`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Koehler-Muller2016',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Koehler-Muller, 2016)`,
      },
      {
        description: `plain parenthetical citation with prefix`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'vanRavenzwaai2016',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(van Ravenzwaai, 2016)`,
      },
      {
        description: `plain parenthetical citation with most insane name`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: "O'Neil-vanRavenzwaai2016",
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(O'Neil-van Ravenzwaai, 2016)`,
      },
      //       {
      //         description: `Within parentheses, use the \\nptextcite command which is equivalent to the \\textcite com-
      // mand but omits the parenthesis and uses commas instead. See the biblatex-apa docs.`,
      //         result: `(\\nptextcite[see][for more detail]{8.11a})`,
      //         input: `(see Koehler, 2016, for more detail)`,
      //       },
      //       {
      //         description: `e.g. e.g.`,
      //         result: `(e.g., falsely balanced news coverage; \\nptextcite{8.11a})`,
      //         input: `(e.g., falsely balanced news coverage; Koehler, 2016)`,
      //       },
      //       {
      //         description: ``,
      //         result: {
      //           author: 'Koehler',
      //           year: '2016',
      //           type: 'text',
      //           before: '',
      //           after: 'noted the dangers of falsely balanced news coverage.',
      //         },
      //         input: `Koehler (2016) noted the dangers of falsely balanced news coverage.`,
      //       },
      //       {
      //         description: '',
      //         result: `In \\citeyear{8.11a}, \\citeauthor{8.11a} noted the dangers of falsely balanced
      // news coverage.`,
      //         input: `In 2016, Koehler noted the dangers of falsely balanced news coverage.`,
      //       },
    ],
  },
  'APA-8-12': {
    description: `Citing multiple works`,
    content: [
      {
        description: 'generic',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Adams2019' },
            { id: 'Shumway2015' },
            { id: 'Westinghouse2017' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Adams et al., 2019; Shumway & Shulman, 2015; Westinghouse, 2017)`,
      },
      //       {
      //         description: ``,
      //         result: `\\parencite{8.12d,8.12e,8.12f,8.12g}`,
      //         input: `(Department of Veteran Affairs, n.d., 2017a, 2017b, 2019)`,
      //       },
      //       {
      //         description: ``,
      //         result: `\\parencite{8.12h,8.12i,8.12j,8.12k}`,
      //         input: `(Zhou, n.d., 2000, 2016, in press)`,
      //       },
      {
        description: `two things`,
        result: {
          citationId: 'CITE-X',
          citationItems: [{ id: 'Carraway2013' }, { id: 'Other2014' }],
          properties: { noteIndex: 0 },
        },
        input: `(Carraway, 2013; Other, 2014)`,
      },
      {
        description: `multi`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Carraway2013' },
            { id: 'Carraway2014' },
            { id: 'Carraway2019' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Carraway, 2013, 2014, 2019)`,
      },
      {
        description: `multi`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Carraway2013' },
            { id: 'Carraway2014' },
            { id: 'Carraway2019' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Carraway, Guy, & Man, 2013, 2014, 2019)`,
      },
      {
        description: `et al with multi`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Carraway2013' },
            { id: 'Carraway2014' },
            { id: 'Carraway2019' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Carraway et al., 2013, 2014, 2019)`,
      },
      {
        description: `multi then two things`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Carraway2013' },
            { id: 'Carraway2014' },
            { id: 'Other2014' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Carraway, 2013, 2014; Other, 2014)`,
      },
      {
        description: `prefix in the middle `,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Sampson2020' },
            { id: 'Augustine2017', prefix: 'see also ' },
            { id: 'Melara2018' },
            { id: 'Pérez2014' },
          ],
          properties: { noteIndex: 0 },
        },

        input: `(Sampson & Hughes, 2020; see also Augustine, 2017; Melara et al., 2018; Pérez, 2014)`,
      },
      //       {
      //         description: `“in press” should have hyphen before disambiguating part of label`,
      //         result: `\\parencite{8.12s,8.12t,8.12u}`,
      //         input: `(Smidge, 2000, in press-a, in press-b)`,
      //       },
    ],
  },
  'APA-8-13': {
    description: `Classical and part works`,
    content: [
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'CentersforDiseaseControlandPrevention2019',
              locator: '10',
              label: 'page',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Centers for Disease Control and Prevention, 2019, p. 10)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Shimamura2017', locator: '3', label: 'chapter' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Shimamura, 2017, Chapter 3)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Armstrong2015', label: 'page', locator: '3–17' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Armstrong, 2015, pp. 3–17)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Shadid2020', label: 'paragraph', locator: '2–3' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Shadid, 2020, paras. 2–3)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [{ id: 'Kovačič2019', label: 'table', locator: '1' }],
          properties: { noteIndex: 0 },
        },
        input: `(Kovačič & Horvat, 2019, Table 1)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Thompson2020', label: 'none', locator: 'Slide 7' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Thompson, 2020, Slide 7)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'BeckInstituteforCognitiveBehaviourTherapy2012',
              label: 'none',
              locator: '1:30:40',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Beck Institute for Cognitive Behaviour Therapy, 2012, 1:30:40)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'KingJamesBible2017', label: 'none', locator: '1 Cor. 13:1' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(King James Bible, 1769/2017, 1 Cor. 13:1)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Aristotle1994', label: 'part', locator: 'IV' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Aristotle, ca. 350 B.C.E./1994, Part IV)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            { id: 'Shakespeare1995', label: 'none', locator: '1.3.36–37' },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Shakespeare, 1623/1995, 1.3.36–37)`,
      },
      //       // 'Note the use of \\nopp in the Shakespeare example to suppress the pagination prefix since the part specification is auto-detected as a range by biblatex which it then assumes is a page range. Note also the date format for the Aristotle example, see the reference file for the data format–no special formatting is required by the user as biblatex fully supports the relevant parts of the ISO 601 specification and can parse/format such dates automatically.',
    ],
  },
  //   'APA-8-14': {
  //     description: `Use SHORTTITLE field of the entry if it exists`,
  //     content: [
  //       {
  //         description: ``,
  //         result: `\\parencite{8.14a}`,
  //         input: `(Interpersonal Skills, 2019)`,
  //       },
  //       {
  //         description: `Articles use quotes instead of italics`,
  //         result: `\\parencite{8.14b}`,
  //         input: `(“Understanding Sensory Memory,” 2018)`,
  //       },
  //       {
  //         description: `Citing anonymous author`,
  //         result: `\\parencite{8.14c}`,
  //         input: `(Anonymous, 2017)`,
  //       },
  //     ],
  //   },
  'APA-8-15': {
    description: `Citations with reprint/reissue dates`,
    content: [
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [{ id: 'Freud1953' }],
          properties: { noteIndex: 0, mode: 'composite' },
        },
        input: `Freud (1900/1953)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [{ id: 'Piaget2000' }],
          properties: { noteIndex: 0 },
        },
        input: `(Piaget, 1966/2000)`,
      },
    ],
  },
  //   'APA-8-16': {
  //     description: `This is not a strict rule and so simply use the lower-level citation commands`,
  //     content: [
  //       {
  //         description: ``,
  //         result: `\\citeauthor{8.11a}`,
  //         input: `Koehler`,
  //       },
  //     ],
  //   },
  'APA-8-17': {
    description: `separated by “&”`,
    content: [
      {
        description: `&`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Jöreskog2007',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Jöreskog & Sörbon, 2007)`,
      },
      {
        description: ``,

        result: {
          citationId: 'CITE-X',
          citationItems: [{ id: 'Eifert2018' }],
          properties: { noteIndex: 0, mode: 'composite' },
        },
        input: `Eifert and Yildiz (2018)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'AmericanEducationalResearchAssociation2014',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(American Educational Research Association et al., 2014)`,
      },
    ],
  },
  'APA-8-18': {
    description: `Automatic list disambiguation for ambiguous truncations. Note that “et al” is plural so it will only truncate two or more names. If it would truncate just one name, we just give the name`,
    content: [
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Kapoor2017',
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
        },
        input: `Kapoor, Bloom, Montez, et al. (2017)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Kapoor2017',
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
        },
        input: `Kapoor, Bloom, Zucker, et al. (2017)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Hasan2015',
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
        },
        input: `Hasan, Liang, Kahn, and Jones-Miller (2015)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Hasan2015',
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
        },
        input: `Hasan, Liang, Kahn, and Weintraub (2015)`,
      },
      {
        description: `Automatic list disambiguation is only for ambiguous author lists in the same year. This is implied in APA-8-18 by the phrase “the same in-text citation form”. So these are not disambiguated`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Albert1990',
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
        },
        input: `Albert et al. (1990)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Albert1990',
            },
            {
              id: 'Albert1991',
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
        },
        input: `Albert et al. (1990, 1991)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Albert1990',
            },
            {
              id: 'Albert1991',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Albert et al., 1990, 1991)`,
      },
    ],
  },
  'APA-8-19': {
    description: `Citations of works by same authors in the same year`,
    content: [
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Judge2012b',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Judge & Kammeyer-Mueller, 2012b)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Judge2012a',
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
        },
        input: `Judge and Kammeyer-Mueller (2012a)`,
      },
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'SifuentesNDa',
            },
            {
              id: 'SifuentesNDb',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Sifuentes, n.d.-a, n.d.-b)`,
      },
    ],
  },
  'APA-8-20': {
    description: `initials when primary author`,
    content: [
      {
        description: ``,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Taylor2015',
            },
            {
              id: 'Taylor2014',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(J. M. Taylor & Neimeyer, 2015; T. Taylor, 2014)`,
      },
      {
        description: `When initials are also the same, revert to standard format`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Plumber2015',
            },
            {
              id: 'Plumber2014',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Plumber, 2015; Plumber, 2014)`,
      },
      {
        description: `Only the primary author should have initials`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Brown2004',
            },
            {
              id: 'Campbell1993',
            },
            {
              id: 'Campbell2005',
            },
            {
              id: 'Deutsch1963',
            },
            {
              id: 'Smyth1992',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Brown & Campbell, 2004; A. Campbell et al., 1993; W. K. Campbell et al., 2005; Deutsch & Deutsch, 1963; Smyth et al., 1992)`,
      },
      {
        description: `Authors in same reference with same surname`,
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Chen2019',
            },
          ],
          properties: { noteIndex: 0 },
        },
        input: `(Chen & Chen, 2019)`,
      },
    ],
  },
  //   'APA-8-21': {
  //     description: `Group author abbreviations should work between citations of different works by the author`,
  //     content: [
  //       {
  //         description: ``,
  //         result: `\\parencite{8.21a}`,
  //         input: `(The American Psychological Association [APA], 2017)`,
  //       },
  //       {
  //         description: ``,
  //         result: `\\parencite{8.21a}`,
  //         input: `(APA, 2017)`,
  //       },
  //       {
  //         description: ``,
  //         result: `\\parencite{8.21b}`,
  //         input: `(APA, 2006)`,
  //       },
  //       {
  //         description: `Testing suffices`,
  //         result: `\\textcite{stest1}`,
  //         input: `Gring (1968)`,
  //       },
  //       {
  //         description: ``,
  //         result: `\\textcite{stest2}`,
  //         input: `Greaves (1968)`,
  //       },
  //       {
  //         description: `Testing prefices`,
  //         result: `\\textcite{pretest}`,
  //         input: `von Mises (2000)`,
  //       },
  //       {
  //         description: ``,
  //         result: `\\textcite{nopretest}`,
  //         input: `Mises (2001)`,
  //       },
  //       {
  //         description: `Testing prefices plus suffices`,
  //         result: `\\textcite{presufftest}`,
  //         input: `von Greaves (1969)`,
  //       },
  //       {
  //         description: ``,
  //         result: `\\textcite{presufftest2}`,
  //         input: `von Greaves (2001b)`,
  //       },
  //       {
  //         description: ``,
  //         result: `\\textcite{nopresufftest}`,
  //         input: `Greaves (2001a)`,
  //       },
  //       {
  //         description: `Testing “and others”`,
  //         result: `\\textcite{ao1}`,
  //         input: `Boker et al. (2011)`,
  //       },
  //       {
  //         description: ``,
  //         result: `\\textcite{ao2}`,
  //         input: `Olive et al. (2014)`,
  //       },
  //       {
  //         description: `Testing name elision in cites`,
  //         result: `\\parencite{kingetal2005a,weissetal2007a,weissetal2009a}`,
  //         input: `(King et al., 2005; Weiss et al., 2009, 2007)`,
  //       },
  //       {
  //         description: 'Testing citation formats for complete dates',

  //         result: '\\textcite{Ludwig2014}',
  //         input: 'Ludwig (2014)',
  //       },
  //       {
  //         description: 'Testing month ranges with same months, different days',
  //         result: '\\textcite{daterange1}',
  //         input: 'Furnishings (1984)',
  //       },
  //       {
  //         description: 'Testing month ranges with different months',
  //         result: '\\textcite{daterange2}',
  //         input: 'Granary (1984)',
  //       },
  //     ],
  //   },
}
