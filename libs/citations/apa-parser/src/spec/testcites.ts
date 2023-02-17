import type { TestData } from './apa-parser.spec'
export const tests: TestData = {
  'Custom-Shit': {
    description: 'own cases i wanna catch',
    content: [
      {
        description: 'Spanish Names',
        result: [
          'Wow ',
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'BautistaPerpinya2019',
                itemData: {
                  author: [{ family: 'Bautista Perpinya' }],
                  issued: { 'date-parts': [['2019']] },
                },
              },
            ],
            originalText: '(Bautista Perpinya, 2019)',
            properties: { noteIndex: 0 },
          },
          '.',
        ],
        input: 'Wow (Bautista Perpinya, 2019).',
      },
      {
        input:
          'We used Gorilla (Anwyl-Irvine et al., 2019) to present the visual probe task online and the task is available on the open materials page to preview or clone (https://gorilla.sc/openmaterials/85021).',
        description: 'Complex case with a URL',
        result: [
          'We used Gorilla ',
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'Anwyl-Irvine2019',
                itemData: {
                  author: [
                    {
                      family: 'Anwyl-Irvine',
                    },
                  ],
                  issued: {
                    'date-parts': [['2019']],
                  },
                },
              },
            ],
            originalText: '(Anwyl-Irvine et al., 2019)',
            properties: {
              noteIndex: 0,
            },
          },
          ' to present the visual probe task online and the task is available on the open materials page to preview or clone ',
          '(https://gorilla.sc/openmaterials/85021).',
        ],
      },
      {
        description: 'Can deal with NBSP',
        result: [
          'We considered outliers to be any response outside 2.5 times the median absolute deviation for each participant, SOA, and trial condition ',
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'Leys2013',
                itemData: {
                  author: [
                    {
                      family: 'Leys',
                    },
                  ],
                  issued: {
                    'date-parts': [['2013']],
                  },
                },
              },
            ],
            originalText: '(Leys et al, 2013)',
            properties: {
              noteIndex: 0,
            },
          },
          '.',
        ],
        input:
          'We considered outliers to be any response outside 2.5 times the median absolute deviation for each participant, SOA, and trial condition (Leys et al., 2013).',
      },
      {
        description: 'Just a normal fucking et al.!',
        result: [
          'Wow ',
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'Stephan2019',
                itemData: {
                  author: [{ family: 'Stephan' }],
                  issued: { 'date-parts': [['2019']] },
                },
              },
              {
                id: 'Gerard2020',
                itemData: {
                  author: [{ family: 'Gerard' }],
                  issued: { 'date-parts': [['2020']] },
                },
              },
            ],
            originalText: '(Stephan et al., 2019; Gerard et al., 2020)',
            properties: { noteIndex: 0 },
          },
          '.',
        ],
        input: 'Wow (Stephan et al., 2019; Gerard et al., 2020).',
      },

      {
        description: 'Just a et al!',
        result: [
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'Stephan2019',
                itemData: {
                  author: [{ family: 'Stephan' }],
                  issued: { 'date-parts': [['2019']] },
                },
              },
            ],
            originalText: '(Stephan et al., 2019)',
            properties: { noteIndex: 0 },
          },
        ],
        input: '(Stephan et al., 2019)',
      },
      {
        description: 'Other dang parantheses in the sentence!',
        result: [
          ') Another long sentence start with a paren ',
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'Thomas2022',
                itemData: {
                  author: [{ family: 'Thomas' }],
                  issued: { 'date-parts': [['2022']] },
                },
              },
            ],
            originalText: '(Thomas, 2022)',
            properties: { noteIndex: 0 },
          },
          '.',
        ],
        input: ') Another long sentence start with a paren (Thomas, 2022).',
      },
      {
        description: 'Some build up',
        result: [
          'Another long sentence that ends in a citations is the form that makes Thomas the happiest ',
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'Thomas2022',
                itemData: {
                  author: [{ family: 'Thomas' }],
                  issued: { 'date-parts': [['2022']] },
                },
              },
            ],
            originalText: '(Thomas, 2022)',
            properties: { noteIndex: 0 },
          },
          '.',
        ],
        input:
          'Another long sentence that ends in a citations is the form that makes Thomas the happiest (Thomas, 2022).',
      },
      {
        description: 'Just two sentences',
        result: [
          'Another long sentence that ends in a citations is the form that makes Thomas the happiest. Here is one more sentence. ',
        ],
        input:
          'Another long sentence that ends in a citations is the form that makes Thomas the happiest. Here is one more sentence. ',
      },
    ],
  },
  //   'APA-8-6': {
  //     description: "which use a semi-colon",
  //     content: [
  //       {
  //         description: "",
  //         result: "\\parencites{8.6a}[as cited in][]{8.6b}",
  //         input: "(Rabbitt, 1982; as cited in Lyon et al., 2014)",
  //       },
  //       {
  //         description: "To obtain the exact format, if desired, wrap the citation in",
  //         result: "\\DeclareDelimFormat{multicitedelim}{\\addcomma\\space}
  // \\DeclareDelimFormat{multicitedelim}{\\addsemicolon\\space}
  // \\parencites{8.6a}[as cited in][]{8.6b}",
  //         input: "(Rabbitt, 1982, as cited in Lyon et al., 2014)",
  //       },
  //       {
  //         description: "Primary source with no date",
  //         result: "Allport's diary \\parencite[as cited in][]{8.6c}",
  //         input: "Allport’s diary (as cited in Nicholson, 2003)",
  //       },
  //     ],
  //   },
  //   // 'APA-8-9': {
  //   //   description: "liography database entry.",
  //   // },
  //   'APA-8-10': {
  //     description: "Simple cite. “Jr.” suffix is not shown (bib entry for this example has a suffix)",
  //     content: [
  //       {
  //         description: "",
  //         result: "\\textcite{8.10a}",
  //         input: "Kessler (2003)",
  //       },
  //       {
  //         description: "Testing seasonal periodical citations–should be ignored and only year printed",
  //         result: "\\textcite{8.10b}",
  //         input: "Test (2001)",
  //       },
  //     ],
  //   },
  'APA-8-11': {
    description: 'Within a paragraph, not in the narrative sense',
    content: [
      {
        description: 'plain parenthetical citation',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Koehler2016',
              itemData: {
                author: [{ family: 'Koehler' }],
                issued: { 'date-parts': [['2016']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Koehler, 2016)',
        },
        input: '(Koehler, 2016)',
      },
      {
        description: 'plain parenthetical citation with see',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Koehler2016',
              itemData: {
                author: [{ family: 'Koehler' }],
                issued: { 'date-parts': [['2016']] },
              },
              prefix: 'see',
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(see Koehler, 2016)',
        },
        input: '(see Koehler, 2016)',
      },
      {
        description: 'plain parenthetical citation with double dog',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Koehler-Muller2016',
              itemData: {
                author: [{ family: 'Koehler-Muller' }],
                issued: { 'date-parts': [['2016']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Koehler-Muller, 2016)',
        },
        input: '(Koehler-Muller, 2016)',
      },
      {
        description: 'plain parenthetical citation with prefix',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'vanRavenzwaai2016',
              itemData: {
                author: [
                  { family: 'Ravenzwaai', 'non-dropping-particle': 'van' },
                ],
                issued: { 'date-parts': [['2016']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(van Ravenzwaai, 2016)',
        },
        input: '(van Ravenzwaai, 2016)',
      },
      {
        description: 'plain parenthetical citation with most insane name',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: "O'Neil-vanRavenzwaai2016",
              itemData: {
                author: [{ family: "O'Neil-van Ravenzwaai" }],
                issued: { 'date-parts': [['2016']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: "(O'Neil-van Ravenzwaai, 2016)",
        },
        input: "(O'Neil-van Ravenzwaai, 2016)",
      },
      //       {
      //         description: "Within parentheses, use the \\nptextcite command which is equivalent to the \\textcite com-
      // mand but omits the parenthesis and uses commas instead. See the biblatex-apa docs.",
      //         result: "(\\nptextcite[see][for more detail]{8.11a})",
      //         input: "(see Koehler, 2016, for more detail)",
      //       },
      //       {
      //         description: "e.g. e.g.",
      //         result: "(e.g., falsely balanced news coverage; \\nptextcite{8.11a})",
      //         input: "(e.g., falsely balanced news coverage; Koehler, 2016)",
      //       },
      //       {
      //         description: "",
      //         result: {
      //           author: 'Koehler',
      //           year: '2016',
      //           type: 'text',
      //           before: '',
      //           after: 'noted the dangers of falsely balanced news coverage.',
      //         },
      //         input: "Koehler (2016) noted the dangers of falsely balanced news coverage.",
      //       },
      //       {
      //         description: '',
      //         result: "In \\citeyear{8.11a}, \\citeauthor{8.11a} noted the dangers of falsely balanced
      // news coverage.",
      //         input: "In 2016, Koehler noted the dangers of falsely balanced news coverage.",
      //       },
    ],
  },
  'APA-8-12': {
    description: 'Citing multiple works',
    content: [
      {
        description: 'generic',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Adams2019',
              itemData: {
                author: [{ family: 'Adams' }],
                issued: { 'date-parts': [['2019']] },
              },
            },
            {
              id: 'Shumway2015',
              itemData: {
                author: [{ family: 'Shumway' }, { family: 'Shulman' }],
                issued: { 'date-parts': [['2015']] },
              },
            },
            {
              id: 'Westinghouse2017',
              itemData: {
                author: [{ family: 'Westinghouse' }],
                issued: { 'date-parts': [['2017']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText:
            '(Adams et al., 2019; Shumway & Shulman, 2015; Westinghouse, 2017)',
        },
        input:
          '(Adams et al., 2019; Shumway & Shulman, 2015; Westinghouse, 2017)',
      },
      {
        description: 'tough for some reason',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Gillich2019',
              itemData: {
                author: [{ family: 'Gillich' }],
                issued: { 'date-parts': [['2019']] },
              },
            },
            {
              id: 'vanMoorselaar2019',
              itemData: {
                author: [
                  { family: 'Moorselaar', 'non-dropping-particle': 'van' },
                  { family: 'Slagter' },
                ],
                issued: { 'date-parts': [['2019']] },
              },
            },
          ],
          properties: { noteIndex: 0 },

          originalText:
            '(Gillich et al., 2019; van Moorselaar & Slagter, 2019)',
        },
        input: '(Gillich et al., 2019; van Moorselaar & Slagter, 2019)',
      },
      {
        description: 'tough for some reason with context',
        result: [
          'in ',
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'Vallée-Tourangeau2020',
                itemData: {
                  author: [
                    { family: 'Vallée-Tourangeau' },
                    { family: 'March' },
                  ],
                  issued: { 'date-parts': [['2020']] },
                },
              },
            ],
            properties: { noteIndex: 0, mode: 'composite' },

            originalText: 'Vallée-Tourangeau and March (2020)',
          },
        ],
        input: 'in Vallée-Tourangeau and March (2020)',
      },
      {
        description: 'tough for some reason with context',
        result: [
          'all i wanna do is really fucking go ',
          {
            citationId: 'CITE-X',
            citationItems: [
              {
                id: 'Gillich2019',
                itemData: {
                  author: [{ family: 'Gillich' }],
                  issued: { 'date-parts': [['2019']] },
                },
              },
              {
                id: 'vanMoorselaar2019',
                itemData: {
                  author: [
                    { family: 'Moorselaar', 'non-dropping-particle': 'van' },
                    { family: 'Slagter' },
                  ],
                  issued: { 'date-parts': [['2019']] },
                },
              },
            ],
            properties: { noteIndex: 0 },

            originalText:
              '(Gillich et al., 2019; van Moorselaar & Slagter, 2019)',
          },
        ],
        input:
          'all i wanna do is really fucking go (Gillich et al., 2019; van Moorselaar & Slagter, 2019)',
      },
      //       {
      //         description: "",
      //         result: "\\parencite{8.12d,8.12e,8.12f,8.12g}",
      //         input: "(Department of Veteran Affairs, n.d., 2017a, 2017b, 2019)",
      //       },
      //       {
      //         description: "",
      //         result: "\\parencite{8.12h,8.12i,8.12j,8.12k}",
      //         input: "(Zhou, n.d., 2000, 2016, in press)",
      //       },
      {
        description: 'two things',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Carraway2013',
              itemData: {
                author: [{ family: 'Carraway' }],
                issued: { 'date-parts': [['2013']] },
              },
            },
            {
              id: 'Other2014',
              itemData: {
                author: [{ family: 'Other' }],
                issued: { 'date-parts': [['2014']] },
              },
            },
          ],
          properties: { noteIndex: 0 },

          originalText: '(Carraway, 2013; Other, 2014)',
        },
        input: '(Carraway, 2013; Other, 2014)',
      },
      {
        description: 'multi',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Carraway2013',
              itemData: {
                author: [{ family: 'Carraway' }],
                issued: { 'date-parts': [['2013']] },
              },
            },
            {
              id: 'Carraway2014',
              itemData: {
                author: [{ family: 'Carraway' }],
                issued: { 'date-parts': [['2014']] },
              },
            },
            {
              id: 'Carraway2019',
              itemData: {
                author: [{ family: 'Carraway' }],
                issued: { 'date-parts': [['2019']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Carraway, 2013, 2014, 2019)',
        },
        input: '(Carraway, 2013, 2014, 2019)',
      },
      {
        description: 'multi',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Carraway2013',
              itemData: {
                author: [
                  { family: 'Carraway' },
                  { family: 'Guy' },
                  { family: 'Man' },
                ],
                issued: { 'date-parts': [['2013']] },
              },
            },
            {
              id: 'Carraway2014',
              itemData: {
                author: [
                  { family: 'Carraway' },
                  { family: 'Guy' },
                  { family: 'Man' },
                ],
                issued: { 'date-parts': [['2014']] },
              },
            },
            {
              id: 'Carraway2019',
              itemData: {
                author: [
                  { family: 'Carraway' },
                  { family: 'Guy' },
                  { family: 'Man' },
                ],
                issued: { 'date-parts': [['2019']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Carraway, Guy, & Man, 2013, 2014, 2019)',
        },
        input: '(Carraway, Guy, & Man, 2013, 2014, 2019)',
      },
      {
        description: 'et al with multi',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Carraway2013',
              itemData: {
                author: [{ family: 'Carraway' }],
                issued: { 'date-parts': [['2013']] },
              },
            },
            {
              id: 'Carraway2014',
              itemData: {
                author: [{ family: 'Carraway' }],
                issued: { 'date-parts': [['2014']] },
              },
            },
            {
              id: 'Carraway2019',
              itemData: {
                author: [{ family: 'Carraway' }],
                issued: { 'date-parts': [['2019']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Carraway et al., 2013, 2014, 2019)',
        },
        input: '(Carraway et al., 2013, 2014, 2019)',
      },
      {
        description: 'multi then two things',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Carraway2013',
              itemData: {
                author: [{ family: 'Carraway' }],
                issued: { 'date-parts': [['2013']] },
              },
            },
            {
              id: 'Carraway2014',
              itemData: {
                author: [{ family: 'Carraway' }],
                issued: { 'date-parts': [['2014']] },
              },
            },
            {
              id: 'Other2014',
              itemData: {
                author: [{ family: 'Other' }],
                issued: { 'date-parts': [['2014']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Carraway, 2013, 2014; Other, 2014)',
        },
        input: '(Carraway, 2013, 2014; Other, 2014)',
      },
      {
        description: 'prefix in the middle ',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Sampson2020',
              itemData: {
                author: [{ family: 'Sampson' }, { family: 'Hughes' }],
                issued: { 'date-parts': [['2020']] },
              },
            },
            {
              id: 'Augustine2017',
              itemData: {
                author: [{ family: 'Augustine' }],
                issued: { 'date-parts': [['2017']] },
              },
              prefix: 'see also ',
            },
            {
              id: 'Melara2018',
              itemData: {
                author: [{ family: 'Melara' }],
                issued: { 'date-parts': [['2018']] },
              },
            },
            {
              id: 'Pérez2014',
              itemData: {
                author: [{ family: 'Pérez' }],
                issued: { 'date-parts': [['2014']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText:
            '(Sampson & Hughes, 2020; see also Augustine, 2017; Melara et al., 2018; Pérez, 2014)',
        },
        input:
          '(Sampson & Hughes, 2020; see also Augustine, 2017; Melara et al., 2018; Pérez, 2014)',
      },
      //       {
      //         description: "“in press” should have hyphen before disambiguating part of label",
      //         result: "\\parencite{8.12s,8.12t,8.12u}",
      //         input: "(Smidge, 2000, in press-a, in press-b)",
      //       },
    ],
  },
  'APA-8-13': {
    description: 'Classical and part works',
    content: [
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'CentersforDiseaseControlandPrevention2019',
              itemData: {
                author: [{ family: 'CentersforDiseaseControlandPrevention' }],
                issued: { 'date-parts': [['2019']] },
              },
              locator: '10',
              label: 'page',
            },
          ],
          properties: { noteIndex: 0 },
          originalText:
            '(Centers for Disease Control and Prevention, 2019, p. 10)',
        },
        input: '(Centers for Disease Control and Prevention, 2019, p. 10)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Shimamura2017',
              itemData: {
                author: [{ family: 'Shimamura' }],
                issued: { 'date-parts': [['2017']] },
              },
              locator: '3',
              label: 'chapter',
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Shimamura, 2017, Chapter 3)',
        },
        input: '(Shimamura, 2017, Chapter 3)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Armstrong2015',
              itemData: {
                author: [{ family: 'Armstrong' }],
                issued: { 'date-parts': [['2015']] },
              },
              label: 'page',
              locator: '3–17',
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Armstrong, 2015, pp. 3–17)',
        },
        input: '(Armstrong, 2015, pp. 3–17)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Shadid2020',
              itemData: {
                author: [{ family: 'Shadid' }],
                issued: { 'date-parts': [['2020']] },
              },
              label: 'paragraph',
              locator: '2–3',
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Shadid, 2020, paras. 2–3)',
        },
        input: '(Shadid, 2020, paras. 2–3)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Kovačič2019',
              itemData: {
                author: [{ family: 'Kovačič' }, { family: 'Horvat' }],
                issued: { 'date-parts': [['2019']] },
              },
              label: 'table',
              locator: '1',
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Kovačič & Horvat, 2019, Table 1)',
        },
        input: '(Kovačič & Horvat, 2019, Table 1)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Thompson2020',
              itemData: {
                author: [{ family: 'Thompson' }],
                issued: { 'date-parts': [['2020']] },
              },
              label: 'none',
              locator: 'Slide 7',
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Thompson, 2020, Slide 7)',
        },
        input: '(Thompson, 2020, Slide 7)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'BeckInstituteforCognitiveBehaviourTherapy2012',
              itemData: {
                author: [
                  { family: 'BeckInstituteforCognitiveBehaviourTherapy' },
                ],
                issued: { 'date-parts': [['2012']] },
              },
              label: 'none',
              locator: '1:30:40',
            },
          ],
          properties: { noteIndex: 0 },
          originalText:
            '(Beck Institute for Cognitive Behaviour Therapy, 2012, 1:30:40)',
        },
        input:
          '(Beck Institute for Cognitive Behaviour Therapy, 2012, 1:30:40)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'KingJamesBible2017',
              itemData: {
                author: [{ family: 'KingJamesBible' }],
                issued: { 'date-parts': [['2017']] },
                'original-date': { 'date-parts': [['1769']] },
              },
              label: 'none',
              locator: '1 Cor. 13:1',
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(King James Bible, 1769/2017, 1 Cor. 13:1)',
        },
        input: '(King James Bible, 1769/2017, 1 Cor. 13:1)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Aristotle1994',
              itemData: {
                author: [{ family: 'Aristotle' }],
                issued: { 'date-parts': [['1994']] },
                'original-date': { 'date-parts': [['-350']] },
              },
              label: 'part',
              locator: 'IV',
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Aristotle, ca. 350 B.C.E./1994, Part IV)',
        },
        input: '(Aristotle, ca. 350 B.C.E./1994, Part IV)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Aristotle-350',
              itemData: {
                author: [{ family: 'Aristotle' }],
                issued: { 'date-parts': [['-350']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Aristotle, 350 B.C.E.)',
        },
        input: '(Aristotle, 350 B.C.E.)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Shakespeare1995',
              itemData: {
                author: [{ family: 'Shakespeare' }],
                issued: { 'date-parts': [['1995']] },
                'original-date': { 'date-parts': [['1623']] },
              },
              label: 'none',
              locator: '1.3.36–37',
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Shakespeare, 1623/1995, 1.3.36–37)',
        },
        input: '(Shakespeare, 1623/1995, 1.3.36–37)',
      },
      {
        description: 'Works with multiple locators',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Shakespeare1995',
              label: 'none',
              locator: '1.3.36–37',
              itemData: {
                author: [{ family: 'Shakespeare' }],
                issued: { 'date-parts': [['1995']] },
                'original-date': { 'date-parts': [['1623']] },
              },
            },
            {
              id: 'Johnson2021',
              label: 'page',
              locator: '1',
              itemData: {
                author: [{ family: 'Johnson' }],
                issued: { 'date-parts': [['2021']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText:
            '(Shakespeare, 1623/1995, 1.3.36–37; Johnson, 2021, p. 1)',
        },
        input: '(Shakespeare, 1623/1995, 1.3.36–37; Johnson, 2021, p. 1)',
      },
      //       // 'Note the use of \\nopp in the Shakespeare example to suppress the pagination prefix since the part specification is auto-detected as a range by biblatex which it then assumes is a page range. Note also the date format for the Aristotle example, see the reference file for the data format–no special formatting is required by the user as biblatex fully supports the relevant parts of the ISO 601 specification and can parse/format such dates automatically.',
    ],
  },
  //   'APA-8-14': {
  //     description: "Use SHORTTITLE field of the entry if it exists",
  //     content: [
  //       {
  //         description: "",
  //         result: "\\parencite{8.14a}",
  //         input: "(Interpersonal Skills, 2019)",
  //       },
  //       {
  //         description: "Articles use quotes instead of italics",
  //         result: "\\parencite{8.14b}",
  //         input: "(“Understanding Sensory Memory,” 2018)",
  //       },
  //       {
  //         description: "Citing anonymous author",
  //         result: "\\parencite{8.14c}",
  //         input: "(Anonymous, 2017)",
  //       },
  //     ],
  //   },
  'APA-8-15': {
    description: 'Citations with reprint/reissue dates',
    content: [
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Freud1953',
              itemData: {
                author: [{ family: 'Freud' }],
                issued: { 'date-parts': [['1953']] },
                'original-date': { 'date-parts': [['1900']] },
              },
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
          originalText: 'Freud (1900/1953)',
        },
        input: 'Freud (1900/1953)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Piaget2000',
              itemData: {
                author: [{ family: 'Piaget' }],
                issued: { 'date-parts': [['2000']] },
                'original-date': { 'date-parts': [['1966']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Piaget, 1966/2000)',
        },
        input: '(Piaget, 1966/2000)',
      },
    ],
  },
  //   'APA-8-16': {
  //     description: "This is not a strict rule and so simply use the lower-level citation commands",
  //     content: [
  //       {
  //         description: "",
  //         result: "\\citeauthor{8.11a}",
  //         input: "Koehler",
  //       },
  //     ],
  //   },
  'APA-8-17': {
    description: 'separated by “&”',
    content: [
      {
        description: '&',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Jöreskog2007',
              itemData: {
                author: [{ family: 'Jöreskog' }, { family: 'Sörbon' }],
                issued: { 'date-parts': [['2007']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Jöreskog & Sörbon, 2007)',
        },
        input: '(Jöreskog & Sörbon, 2007)',
      },
      {
        description: '',

        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Eifert2018',
              itemData: {
                author: [{ family: 'Eifert' }, { family: 'Yildiz' }],
                issued: { 'date-parts': [['2018']] },
              },
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
          originalText: 'Eifert and Yildiz (2018)',
        },
        input: 'Eifert and Yildiz (2018)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'AmericanEducationalResearchAssociation2014',
              itemData: {
                author: [{ family: 'AmericanEducationalResearchAssociation' }],
                issued: { 'date-parts': [['2014']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText:
            '(American Educational Research Association et al., 2014)',
        },
        input: '(American Educational Research Association et al., 2014)',
      },
    ],
  },
  'APA-8-18': {
    description:
      'Automatic list disambiguation for ambiguous truncations. Note that “et al” is plural so it will only truncate two or more names. If it would truncate just one name, we just give the name',
    content: [
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Kapoor2017',
              itemData: {
                author: [
                  { family: 'Kapoor' },
                  { family: 'Bloom' },
                  { family: 'Montez' },
                ],
                issued: { 'date-parts': [['2017']] },
              },
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
          originalText: 'Kapoor, Bloom, Montez, et al. (2017)',
        },
        input: 'Kapoor, Bloom, Montez, et al. (2017)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Kapoor2017',
              itemData: {
                author: [
                  { family: 'Kapoor' },
                  { family: 'Bloom' },
                  { family: 'Zucker' },
                ],
                issued: { 'date-parts': [['2017']] },
              },
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
          originalText: 'Kapoor, Bloom, Zucker, et al. (2017)',
        },
        input: 'Kapoor, Bloom, Zucker, et al. (2017)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Hasan2015',
              itemData: {
                author: [
                  { family: 'Hasan' },
                  { family: 'Liang' },
                  { family: 'Kahn' },
                  { family: 'Jones-Miller' },
                ],
                issued: { 'date-parts': [['2015']] },
              },
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
          originalText: 'Hasan, Liang, Kahn, and Jones-Miller (2015)',
        },
        input: 'Hasan, Liang, Kahn, and Jones-Miller (2015)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Hasan2015',
              itemData: {
                author: [
                  { family: 'Hasan' },
                  { family: 'Liang' },
                  { family: 'Kahn' },
                  { family: 'Weintraub' },
                ],
                issued: { 'date-parts': [['2015']] },
              },
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
          originalText: 'Hasan, Liang, Kahn, and Weintraub (2015)',
        },
        input: 'Hasan, Liang, Kahn, and Weintraub (2015)',
      },
      {
        description:
          'Automatic list disambiguation is only for ambiguous author lists in the same year. This is implied in APA-8-18 by the phrase “the same in-text citation form”. So these are not disambiguated',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Albert1990',
              itemData: {
                author: [{ family: 'Albert' }],
                issued: { 'date-parts': [['1990']] },
              },
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
          originalText: 'Albert et al. (1990)',
        },
        input: 'Albert et al. (1990)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Albert1990',
              itemData: {
                author: [{ family: 'Albert' }],
                issued: { 'date-parts': [['1990']] },
              },
            },
            {
              id: 'Albert1991',
              itemData: {
                author: [{ family: 'Albert' }],
                issued: { 'date-parts': [['1991']] },
              },
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
          originalText: 'Albert et al. (1990, 1991)',
        },
        input: 'Albert et al. (1990, 1991)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Albert1990',
              itemData: {
                author: [{ family: 'Albert' }],
                issued: { 'date-parts': [['1990']] },
              },
            },
            {
              id: 'Albert1991',
              itemData: {
                author: [{ family: 'Albert' }],
                issued: { 'date-parts': [['1991']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Albert et al., 1990, 1991)',
        },
        input: '(Albert et al., 1990, 1991)',
      },
    ],
  },
  'APA-8-19': {
    description: 'Citations of works by same authors in the same year',
    content: [
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Judge2012b',
              itemData: {
                author: [{ family: 'Judge' }, { family: 'Kammeyer-Mueller' }],
                issued: { 'date-parts': [['2012']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Judge & Kammeyer-Mueller, 2012b)',
        },
        input: '(Judge & Kammeyer-Mueller, 2012b)',
      },
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Judge2012a',
              itemData: {
                author: [{ family: 'Judge' }, { family: 'Kammeyer-Mueller' }],
                issued: { 'date-parts': [['2012']] },
              },
            },
          ],
          properties: { noteIndex: 0, mode: 'composite' },
          originalText: 'Judge and Kammeyer-Mueller (2012a)',
        },
        input: 'Judge and Kammeyer-Mueller (2012a)',
      },
      {
        description: '',
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
          originalText: '(Sifuentes, n.d.-a, n.d.-b)',
        },
        input: '(Sifuentes, n.d.-a, n.d.-b)',
      },
    ],
  },
  'APA-8-20': {
    description: 'initials when primary author',
    content: [
      {
        description: '',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Taylor2015',
              itemData: {
                author: [
                  { family: 'Taylor', given: 'J M' },
                  { family: 'Neimeyer' },
                ],
                issued: { 'date-parts': [['2015']] },
              },
            },
            {
              id: 'Taylor2014',
              itemData: {
                author: [{ family: 'Taylor', given: 'T' }],
                issued: { 'date-parts': [['2014']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(J. M. Taylor & Neimeyer, 2015; T. Taylor, 2014)',
        },
        input: '(J. M. Taylor & Neimeyer, 2015; T. Taylor, 2014)',
      },
      {
        description:
          'When initials are also the same, revert to standard format',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Plumber2015',
              itemData: {
                author: [{ family: 'Plumber' }],
                issued: { 'date-parts': [['2015']] },
              },
            },
            {
              id: 'Plumber2014',
              itemData: {
                author: [{ family: 'Plumber' }],
                issued: { 'date-parts': [['2014']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Plumber, 2015; Plumber, 2014)',
        },
        input: '(Plumber, 2015; Plumber, 2014)',
      },
      {
        description: 'Only the primary author should have initials',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Brown2004',
              itemData: {
                author: [{ family: 'Brown' }, { family: 'Campbell' }],
                issued: { 'date-parts': [['2004']] },
              },
            },
            {
              id: 'Campbell1993',
              itemData: {
                author: [{ family: 'Campbell', given: 'A' }],
                issued: { 'date-parts': [['1993']] },
              },
            },
            {
              id: 'Campbell2005',
              itemData: {
                author: [{ family: 'Campbell', given: 'W K' }],
                issued: { 'date-parts': [['2005']] },
              },
            },
            {
              id: 'Deutsch1963',
              itemData: {
                author: [{ family: 'Deutsch' }, { family: 'Deutsch' }],
                issued: { 'date-parts': [['1963']] },
              },
            },
            {
              id: 'Smyth1992',
              itemData: {
                author: [{ family: 'Smyth' }],
                issued: { 'date-parts': [['1992']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText:
            '(Brown & Campbell, 2004; A. Campbell et al., 1993; W. K. Campbell et al., 2005; Deutsch & Deutsch, 1963; Smyth et al., 1992)',
        },
        input:
          '(Brown & Campbell, 2004; A. Campbell et al., 1993; W. K. Campbell et al., 2005; Deutsch & Deutsch, 1963; Smyth et al., 1992)',
      },
      {
        description: 'Authors in same reference with same surname',
        result: {
          citationId: 'CITE-X',
          citationItems: [
            {
              id: 'Chen2019',
              itemData: {
                author: [{ family: 'Chen' }, { family: 'Chen' }],
                issued: { 'date-parts': [['2019']] },
              },
            },
          ],
          properties: { noteIndex: 0 },
          originalText: '(Chen & Chen, 2019)',
        },
        input: '(Chen & Chen, 2019)',
      },
    ],
  },
  //   'APA-8-21': {
  //     description: "Group author abbreviations should work between citations of different works by the author",
  //     content: [
  //       {
  //         description: "",
  //         result: "\\parencite{8.21a}",
  //         input: "(The American Psychological Association [APA], 2017)",
  //       },
  //       {
  //         description: "",
  //         result: "\\parencite{8.21a}",
  //         input: "(APA, 2017)",
  //       },
  //       {
  //         description: "",
  //         result: "\\parencite{8.21b}",
  //         input: "(APA, 2006)",
  //       },
  //       {
  //         description: "Testing suffices",
  //         result: "\\textcite{stest1}",
  //         input: "Gring (1968)",
  //       },
  //       {
  //         description: "",
  //         result: "\\textcite{stest2}",
  //         input: "Greaves (1968)",
  //       },
  //       {
  //         description: "Testing prefices",
  //         result: "\\textcite{pretest}",
  //         input: "von Mises (2000)",
  //       },
  //       {
  //         description: "",
  //         result: "\\textcite{nopretest}",
  //         input: "Mises (2001)",
  //       },
  //       {
  //         description: "Testing prefices plus suffices",
  //         result: "\\textcite{presufftest}",
  //         input: "von Greaves (1969)",
  //       },
  //       {
  //         description: "",
  //         result: "\\textcite{presufftest2}",
  //         input: "von Greaves (2001b)",
  //       },
  //       {
  //         description: "",
  //         result: "\\textcite{nopresufftest}",
  //         input: "Greaves (2001a)",
  //       },
  //       {
  //         description: "Testing “and others”",
  //         result: "\\textcite{ao1}",
  //         input: "Boker et al. (2011)",
  //       },
  //       {
  //         description: "",
  //         result: "\\textcite{ao2}",
  //         input: "Olive et al. (2014)",
  //       },
  //       {
  //         description: "Testing name elision in cites",
  //         result: "\\parencite{kingetal2005a,weissetal2007a,weissetal2009a}",
  //         input: "(King et al., 2005; Weiss et al., 2009, 2007)",
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
