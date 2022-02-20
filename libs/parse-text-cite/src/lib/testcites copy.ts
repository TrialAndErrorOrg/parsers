import type { TestData } from './parse-text-cite.spec'
export const tests: TestData = {
  'APA-8-6': {
    description: `which use a semi-colon`,
    content: [
      {
        description: ``,
        result: `\\parencites{8.6a}[as cited in][]{8.6b}`,
        input: `(Rabbitt, 1982; as cited in Lyon et al., 2014)`,
      },
      {
        description: `To obtain the exact format, if desired, wrap the citation in`,
        result: `\\DeclareDelimFormat{multicitedelim}{\\addcomma\\space}
\\DeclareDelimFormat{multicitedelim}{\\addsemicolon\\space}
\\parencites{8.6a}[as cited in][]{8.6b}`,
        input: `(Rabbitt, 1982, as cited in Lyon et al., 2014)`,
      },
      {
        description: `Primary source with no date`,
        result: `Allport's diary \\parencite[as cited in][]{8.6c}`,
        input: `Allport’s diary (as cited in Nicholson, 2003)`,
      },
    ],
  },
  // 'APA-8-9': {
  //   description: `liography database entry.`,
  // },
  'APA-8-10': {
    description: `Simple cite. “Jr.” suffix is not shown (bib entry for this example has a suffix)`,
    content: [
      {
        description: ``,
        result: `\\textcite{8.10a}`,
        input: `Kessler (2003)`,
      },
      {
        description: `Testing seasonal periodical citations–should be ignored and only year printed`,
        result: `\\textcite{8.10b}`,
        input: `Test (2001)`,
      },
    ],
  },
  'APA-8-11': {
    description: `Within a paragraph, not in the narrative sense`,
    content: [
      {
        description: `plain parenthetical citation`,
        result: {
          author: 'Koehler',
          year: '2016',
          type: 'paren',
          before: '',
          after: '',
        },
        input: `(Koehler, 2016)`,
      },
      {
        description: `Within parentheses, use the \\nptextcite command which is equivalent to the \\textcite com-
mand but omits the parenthesis and uses commas instead. See the biblatex-apa docs.`,
        result: `(\\nptextcite[see][for more detail]{8.11a})`,
        input: `(see Koehler, 2016, for more detail)`,
      },
      {
        description: `e.g. e.g.`,
        result: `(e.g., falsely balanced news coverage; \\nptextcite{8.11a})`,
        input: `(e.g., falsely balanced news coverage; Koehler, 2016)`,
      },
      {
        description: ``,
        result: {
          author: 'Koehler',
          year: '2016',
          type: 'text',
          before: '',
          after: 'noted the dangers of falsely balanced news coverage.',
        },
        input: `Koehler (2016) noted the dangers of falsely balanced news coverage.`,
      },
      {
        description: '',
        result: `In \\citeyear{8.11a}, \\citeauthor{8.11a} noted the dangers of falsely balanced
news coverage.`,
        input: `In 2016, Koehler noted the dangers of falsely balanced news coverage.`,
      },
    ],
  },
  'APA-8-12': {
    description: `Citing multiple works`,
    content: [
      {
        description: ``,
        result: `\\parencite{8.12a,8.12b,8.12c}`,
        input: `(Adams et al., 2019; Shumway & Shulman, 2015; Westinghouse, 2017)`,
      },
      {
        description: ``,
        result: `\\parencite{8.12d,8.12e,8.12f,8.12g}`,
        input: `(Department of Veteran Affairs, n.d., 2017a, 2017b, 2019)`,
      },
      {
        description: ``,
        result: `\\parencite{8.12h,8.12i,8.12j,8.12k}`,
        input: `(Zhou, n.d., 2000, 2016, in press)`,
      },
      {
        description: ``,
        result: `\\parencite{8.12l,8.12m,8.12n}`,
        input: `(Carraway et al., 2013, 2014, 2019)`,
      },
      {
        description: ``,
        result: `\\parencites{8.12o}[see also][]{8.12p,8.12q, 8.12r}`,
        input: `(Sampson & Hughes, 2020; see also Augustine, 2017; Melara et al., 2018; Pérez, 2014)`,
      },
      {
        description: `“in press” should have hyphen before disambiguating part of label`,
        result: `\\parencite{8.12s,8.12t,8.12u}`,
        input: `(Smidge, 2000, in press-a, in press-b)`,
      },
    ],
  },
  'APA-8-13': {
    description: `Classical and part works`,
    content: [
      {
        description: ``,
        result: `\\parencite[10]{8.13a}`,
        input: `(Centers for Disease Control and Prevention, 2019, p. 10)`,
      },
      {
        description: ``,
        result: `\\parencite[Chapter 3]{8.13b}`,
        input: `(Shimamura, 2017, Chapter 3)`,
      },
      {
        description: ``,
        result: `\\parencite[3--17]{8.13c}`,
        input: `(Armstrong, 2015, pp. 3–17)`,
      },
      {
        description: ``,
        result: `\\parencite[paras. 2--3]{8.13d}`,
        input: `(Shadid, 2020, paras. 2–3)`,
      },
      {
        description: ``,
        result: `\\parencite[Table 1]{8.13e}`,
        input: `(Kovačič & Horvat, 2019, Table 1)`,
      },
      {
        description: ``,
        result: `\\parencite[Slide 7]{8.13f}`,
        input: `(Thompson, 2020, Slide 7)`,
      },
      {
        description: ``,
        result: `\\parencite[1:30:40]{8.13g}`,
        input: `(Beck Institute for Cognitive Behaviour Therapy, 2012, 1:30:40)`,
      },
      {
        description: ``,
        result: `\\parencite[1 Cor. 13:1]{8.13h}`,
        input: `(King James Bible, 1769/2017, 1 Cor. 13:1)`,
      },
      {
        description: ``,
        result: `\\parencite[Part IV]{8.13i}`,
        input: `(Aristotle, ca. 350 B.C.E./1994, Part IV)`,
      },
      {
        description: ``,
        result: `\\parencite[\\nopp1.3.36--37]{8.13j}`,
        input: `(Shakespeare, 1623/1995, 1.3.36–37)`,
      },
      // 'Note the use of \\nopp in the Shakespeare example to suppress the pagination prefix since the part specification is auto-detected as a range by biblatex which it then assumes is a page range. Note also the date format for the Aristotle example, see the reference file for the data format–no special formatting is required by the user as biblatex fully supports the relevant parts of the ISO 601 specification and can parse/format such dates automatically.',
    ],
  },
  'APA-8-14': {
    description: `Use SHORTTITLE field of the entry if it exists`,
    content: [
      {
        description: ``,
        result: `\\parencite{8.14a}`,
        input: `(Interpersonal Skills, 2019)`,
      },
      {
        description: `Articles use quotes instead of italics`,
        result: `\\parencite{8.14b}`,
        input: `(“Understanding Sensory Memory,” 2018)`,
      },
      {
        description: `Citing anonymous author`,
        result: `\\parencite{8.14c}`,
        input: `(Anonymous, 2017)`,
      },
    ],
  },
  'APA-8-15': {
    description: `Citations with reprint/reissue dates`,
    content: [
      {
        description: ``,
        result: `\\textcite{8.15a}`,
        input: `Freud (1900/1953)`,
      },
      {
        description: ``,
        result: `\\parencite{8.15b}`,
        input: `(Piaget, 1966/2000)`,
      },
    ],
  },
  'APA-8-16': {
    description: `This is not a strict rule and so simply use the lower-level citation commands`,
    content: [
      {
        description: ``,
        result: `\\citeauthor{8.11a}`,
        input: `Koehler`,
      },
    ],
  },
  'APA-8-17': {
    description: `separated by “&”`,
    content: [
      {
        description: ``,
        result: `\\parencite{8.17f}`,
        input: `(Jöreskog & Sörbon, 2007)`,
      },
      {
        description: ``,
        result: `\\textcite{8.17g}`,
        input: `Eifert and Yildiz (2018)`,
      },
      {
        description: ``,
        result: `\\parencite{8.17h}`,
        input: `(American Educational Research Association et al., 2014)`,
      },
    ],
  },
  'APA-8-18': {
    description: `Automatic list disambiguation for ambiguous truncations. Note that “et al” is plural so it will only truncate two or more names. If it would truncate just one name, we just give the name`,
    content: [
      {
        description: ``,
        result: `\\textcite{8.18a}`,
        input: `Kapoor, Bloom, Montez, et al. (2017)`,
      },
      {
        description: ``,
        result: `\\textcite{8.18b}`,
        input: `Kapoor, Bloom, Zucker, et al. (2017)`,
      },
      {
        description: ``,
        result: `\\textcite{8.18c}`,
        input: `Hasan, Liang, Kahn, and Jones-Miller (2015)`,
      },
      {
        description: ``,
        result: `\\textcite{8.18d}`,
        input: `Hasan, Liang, Kahn, and Weintraub (2015)`,
      },
      {
        description: `Automatic list disambiguation is only for ambiguous author lists in the same year. This is implied in APA-8-18 by the phrase “the same in-text citation form”. So these are not disambiguated`,
        result: `\\textcite{8.18e}`,
        input: `Albert et al. (1990)`,
      },
      {
        description: ``,
        result: `\\textcite{8.18f}`,
        input: `Albert et al. (1991)`,
      },
      {
        description: ``,
        result: `\\parencite{8.18e,8.18f}`,
        input: `(Albert et al., 1990, 1991)`,
      },
    ],
  },
  'APA-8-19': {
    description: `Citations of works by same authors in the same year`,
    content: [
      {
        description: ``,
        result: `\\parencite{8.19a}`,
        input: `(Judge & Kammeyer-Mueller, 2012b)`,
      },
      {
        description: ``,
        result: `\\textcite{8.19b}`,
        input: `Judge and Kammeyer-Mueller (2012a)`,
      },
      {
        description: ``,
        result: `\\parencite{8.19c,8.19d}`,
        input: `(Sifuentes, n.d.-a, n.d.-b)`,
      },
    ],
  },
  'APA-8-20': {
    description: `initials when primary author`,
    content: [
      {
        description: ``,
        result: `\\parencite{8.20a,8.20b}`,
        input: `(J. M. Taylor & Neimeyer, 2015; T. Taylor, 2014)`,
      },
      {
        description: `When initials are also the same, revert to standard format`,
        result: `\\parencite{8.20c,8.20d}`,
        input: `(Plumber, 2015; Plumber, 2014)`,
      },
      {
        description: `Only the primary author should have initials`,
        result: `\\parencite{8.20f,8.20g,8.20h,8.20i,8.20j}`,
        input: `(Brown & Campbell, 2004; A. Campbell et al., 1993; W. K. Campbell et al., 2005; Deutsch & Deutsch, 1963; Smyth et al., 1992)`,
      },
      {
        description: `Authors in same reference with same surname`,
        result: `\\parencite{8.20e}`,
        input: `(Chen & Chen, 2019)`,
      },
    ],
  },
  'APA-8-21': {
    description: `Group author abbreviations should work between citations of different works by the author`,
    content: [
      {
        description: ``,
        result: `\\parencite{8.21a}`,
        input: `(The American Psychological Association [APA], 2017)`,
      },
      {
        description: ``,
        result: `\\parencite{8.21a}`,
        input: `(APA, 2017)`,
      },
      {
        description: ``,
        result: `\\parencite{8.21b}`,
        input: `(APA, 2006)`,
      },
      {
        description: `Testing suffices`,
        result: `\\textcite{stest1}`,
        input: `Gring (1968)`,
      },
      {
        description: ``,
        result: `\\textcite{stest2}`,
        input: `Greaves (1968)`,
      },
      {
        description: `Testing prefices`,
        result: `\\textcite{pretest}`,
        input: `von Mises (2000)`,
      },
      {
        description: ``,
        result: `\\textcite{nopretest}`,
        input: `Mises (2001)`,
      },
      {
        description: `Testing prefices plus suffices`,
        result: `\\textcite{presufftest}`,
        input: `von Greaves (1969)`,
      },
      {
        description: ``,
        result: `\\textcite{presufftest2}`,
        input: `von Greaves (2001b)`,
      },
      {
        description: ``,
        result: `\\textcite{nopresufftest}`,
        input: `Greaves (2001a)`,
      },
      {
        description: `Testing “and others”`,
        result: `\\textcite{ao1}`,
        input: `Boker et al. (2011)`,
      },
      {
        description: ``,
        result: `\\textcite{ao2}`,
        input: `Olive et al. (2014)`,
      },
      {
        description: `Testing name elision in cites`,
        result: `\\parencite{kingetal2005a,weissetal2007a,weissetal2009a}`,
        input: `(King et al., 2005; Weiss et al., 2009, 2007)`,
      },
      {
        description: 'Testing citation formats for complete dates',

        result: '\\textcite{Ludwig2014}',
        input: 'Ludwig (2014)',
      },
      {
        description: 'Testing month ranges with same months, different days',
        result: '\\textcite{daterange1}',
        input: 'Furnishings (1984)',
      },
      {
        description: 'Testing month ranges with different months',
        result: '\\textcite{daterange2}',
        input: 'Granary (1984)',
      },
    ],
  },
}
