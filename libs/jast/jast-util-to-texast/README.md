> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# jast-jast-util-to-texast

[![npm version](https://badge.fury.io/js/jast-util-to-texast.svg)](https://badge.fury.io/js/jast-util-to-texast) [![npm downloads](https://img.shields.io/npm/dm/jast-util-to-texast.svg)](https://www.npmjs.com/package/jast-util-to-texast)

Utility to convert a [jast][jast] tree to a [texast][texast] tree.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
*   [Syntax tree](#syntax-tree)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

## When should I use this?

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add jast-util-to-texast
# or with yarn
# yarn add jast-util-to-texast
# or with npm
# npm install jast-util-to-texast
```

## Use

## API

***

### `all()`

Convert all nodes in tree using j

#### Signature

```ts
all(j: J, parent: Node): TexastContent[];
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `j` | [`J`](modules.md#j) | jast constructor function |
| `parent` | [`Node`](modules.md#node) |  |

#### Returns

[`TexastContent`](modules.md#texastcontent)[]

Defined in:  [src/lib/all.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/all.ts#L10)

***

### `one()`

#### Signature

```ts
one(j: J, node: Node, parent: Parent): TexastContent | TexastContent[] | void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`J`](modules.md#j) |
| `node` | [`Node`](modules.md#node) |
| `parent` | [`Parent`](modules.md#parent) |

#### Returns

[`TexastContent`](modules.md#texastcontent) | [`TexastContent`](modules.md#texastcontent)[] | `void`

Defined in:  [src/lib/one.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/one.ts#L7)

***

### `toTexast()`

#### Signature

```ts
toTexast(tree: TexastContent | TexastRoot, options: Options = ...): TexastContent | TexastRoot;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | [`TexastContent`](modules.md#texastcontent) | [`TexastRoot`](modules.md#texastroot) |
| `options` | [`Options`](modules.md#options) |

#### Returns

[`TexastContent`](modules.md#texastcontent) | [`TexastRoot`](modules.md#texastroot)

Defined in:  [src/lib/jast-util-to-texast.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/jast-util-to-texast.ts#L24)

***

### `defaultHandlers`

> **`Const`** `object`

```ts
{
    abbrev: () => void;
    abbrevJournaltitle: () => void;
    abstract: () => void;
    accessDate: () => void;
    ack: () => void;
    addrLine: () => void;
    address: () => void;
    aff: () => void;
    affAlternatives: () => void;
    altText: () => void;
    altTitle: () => void;
    alternatives: () => void;
    annotation: () => void;
    anonymous: () => void;
    answer: () => void;
    answerSet: () => void;
    app: () => void;
    appGroup: () => void;
    array: () => void;
    article: (j: J, node: Root) => TexastContent;
    articleCategories: () => void;
    articleId: () => void;
    articleMeta: () => void;
    articleTitle: (j: J, node: Parents, parent: Parent) => TexastContent;
    articleVersion: () => void;
    articleVersionalternatives: () => void;
    attrib: () => void;
    authorComment: () => void;
    authorNotes: () => void;
    awardDesc: () => void;
    awardGroup: () => void;
    awardId: () => void;
    awardName: () => void;
    back: (j: J, parent: Node) => TexastContent[];
    bio: () => void;
    blockAlternatives: () => void;
    body: (j: J, node: Root) => TexastContent;
    bold: (j: J, node: Parents, parent: Parent) => TexastContent;
    boxedText: () => void;
    break: () => void;
    caption: (j: J, node: Parents, parent: Parent) => TexastContent;
    chapterTitle: () => void;
    chemStruct: () => void;
    chemStructwrap: () => void;
    citationAlternatives: () => void;
    city: () => void;
    code: () => void;
    col: () => void;
    colgroup: () => void;
    collab: () => void;
    collabAlternatives: () => void;
    command: (j: J, node: Parents, parent: Parent) => TexastContent;
    comment: () => void;
    compoundKwd: () => void;
    compoundKwdpart: () => void;
    compoundSubject: () => void;
    compoundSubjectpart: () => void;
    confAcronym: () => void;
    confDate: () => void;
    confLoc: () => void;
    confName: () => void;
    confNum: () => void;
    confSponsor: () => void;
    confTheme: () => void;
    conference: () => void;
    contrib: () => void;
    contribGroup: (j: J, node: Node) => TexastContent[];
    contribId: () => void;
    contributedResourcegroup: () => void;
    copyrightHolder: () => void;
    copyrightStatement: () => void;
    copyrightYear: () => void;
    corresp: () => void;
    count: () => void;
    country: () => void;
    counts: () => void;
    customMeta: () => void;
    customMetagroup: () => void;
    dataTitle: () => void;
    date: () => void;
    dateIncitation: () => void;
    day: () => void;
    def: () => void;
    defHead: () => void;
    defItem: () => void;
    defList: () => void;
    degrees: () => void;
    disp-quote: (j: J, node: DispQuote) => Environment;
    dispFormula: () => void;
    dispFormulagroup: () => void;
    dispQuote: () => void;
    edition: () => void;
    elementCitation: () => void;
    elocationId: () => void;
    email: () => void;
    equationCount: () => void;
    era: () => void;
    etal: () => void;
    event: () => void;
    eventDesc: () => void;
    explanation: () => void;
    extLink: (j: J, node: ExtLink) => {
        children: CommandArg[];
        name: string;
        type: string;
    };
    extendedBy: () => void;
    fax: () => void;
    fig: (j: J, fig: Fig) => {
        children: TexastContent[];
        name: string;
        type: string;
    };
    figCount: () => void;
    figGroup: () => void;
    fixedCase: () => void;
    floatsGroup: () => void;
    fn: (j: J, parent: Node) => TexastContent[];
    fnGroup: (j: J, parent: Node) => TexastContent[];
    fpage: () => void;
    front: (j: J, node: Root) => TexastContent;
    frontStub: () => void;
    fundingGroup: () => void;
    fundingSource: () => void;
    fundingStatement: () => void;
    givenNames: () => void;
    glossary: () => void;
    glyphData: () => void;
    glyphRef: () => void;
    gov: () => void;
    graphic: (j: J, node: Graphic) => {
        children: (CommandArg | {
            type: string;
            value: string;
        })[];
        name: string;
        type: string;
    };
    history: () => void;
    hr: () => void;
    indexTerm: () => void;
    indexTermrangeend: () => void;
    inlineFormula: () => void;
    inlineGraphic: (j: J, node: Graphic) => {
        children: (CommandArg | {
            type: string;
            value: string;
        })[];
        name: string;
        type: string;
    };
    inlineMedia: () => void;
    inlineSupplementarymaterial: () => void;
    institution: () => void;
    institutionId: () => void;
    institutionWrap: () => void;
    instruction: () => void;
    isbn: () => void;
    issn: () => void;
    issnL: () => void;
    issue: () => void;
    issueId: () => void;
    issuePart: () => void;
    issueSponsor: () => void;
    issueSubtitle: () => void;
    issueTitle: () => void;
    issueTitlegroup: (j: J, node: Node) => TexastContent[];
    italic: (j: J, node: Node) => TexastContent;
    journalId: () => void;
    journalMeta: () => void;
    journalSubtitle: () => void;
    journalTitle: (j: J, node: Parents, parent: Parent) => TexastContent;
    journalTitlegroup: (j: J, node: Node) => TexastContent[];
    kwd: () => void;
    kwdGroup: () => void;
    label: (j: J, node: Parents, parent: Parent) => TexastContent;
    license: () => void;
    licenseP: () => void;
    list: (j: J, list: List) => {
        children: TexastContent[];
        name: string;
        type: string;
    };
    listItem: (j: J, item: ListItem) => TexastContent;
    longDesc: () => void;
    lpage: () => void;
    media: () => void;
    metaName: () => void;
    metaValue: () => void;
    milestoneEnd: () => void;
    milestoneStart: () => void;
    mixedCitation: () => void;
    monospace: () => void;
    month: () => void;
    name: () => void;
    nameAlternatives: () => void;
    namedContent: () => void;
    nestedKwd: () => void;
    nlmCitation: () => void;
    note: () => void;
    notes: () => void;
    objectId: () => void;
    onBehalfof: () => void;
    openAccess: () => void;
    option: () => void;
    overline: () => void;
    overlineEnd: () => void;
    overlineStart: () => void;
    p: (j: J, p: P) => TexastContent;
    pageCount: () => void;
    pageRange: () => void;
    partTitle: () => void;
    patent: () => void;
    permissions: () => void;
    personGroup: () => void;
    phone: () => void;
    postalCode: () => void;
    prefix: () => void;
    preformat: () => void;
    price: () => void;
    principalAwardrecipient: () => void;
    principalInvestigator: () => void;
    privateChar: () => void;
    processingMeta: () => void;
    product: () => void;
    pubDate: () => void;
    pubDatenotavailable: () => void;
    pubHistory: () => void;
    pubId: () => void;
    publisher: () => void;
    publisherLoc: () => void;
    publisherName: () => void;
    question: () => void;
    questionPreamble: () => void;
    questionWrap: () => void;
    questionWrapgroup: () => void;
    rb: () => void;
    ref: () => void;
    refCount: () => void;
    refList: (j: J, list: RefList) => Environment | undefined;
    relatedArticle: () => void;
    relatedObject: () => void;
    resourceId: () => void;
    resourceName: () => void;
    resourceWrap: () => void;
    response: () => void;
    restrictedBy: () => void;
    role: () => void;
    roman: () => void;
    root: (j: J, node: Root) => TexastContent;
    rp: () => void;
    rt: () => void;
    ruby: () => void;
    sansSerif: (j: J, node: Parents, parent: Parent) => TexastContent;
    sc: (j: J, node: Parents, parent: Parent) => TexastContent;
    season: () => void;
    sec: (j: J, node: Parents) => TexastContent[];
    secMeta: () => void;
    see: () => void;
    seeAlso: () => void;
    selfUri: () => void;
    series: () => void;
    seriesText: () => void;
    seriesTitle: () => void;
    sig: () => void;
    sigBlock: () => void;
    size: () => void;
    source: () => void;
    speaker: () => void;
    speech: () => void;
    state: () => void;
    statement: () => void;
    std: () => void;
    stdOrganization: () => void;
    strike: () => void;
    stringConf: () => void;
    stringDate: () => void;
    stringName: () => void;
    styledContent: () => void;
    sub: (j: J, node: Node) => TexastContent;
    subArticle: () => void;
    subjGroup: () => void;
    subject: () => void;
    subtitle: () => void;
    suffix: () => void;
    sup: (j: J, node: Node) => TexastContent;
    supplement: () => void;
    supplementaryMaterial: () => void;
    supportDescription: () => void;
    supportGroup: () => void;
    supportSource: () => void;
    surname: () => void;
    table: (j: J, table: Table) => {
        children: TexastContent[];
        name: string;
        type: string;
    };
    tableCount: () => void;
    tableWrap: (j: J, node: TableWrap) => TexastContent;
    tableWrapfoot: () => void;
    tableWrapgroup: () => void;
    target: () => void;
    tbody: (j: J, parent: Node) => TexastContent[];
    td: (j: J, node: Td) => TableCell;
    term: () => void;
    termHead: () => void;
    texMath: () => void;
    text: (j: J, node: Text) => TexastContent;
    textualForm: () => void;
    tfoot: () => void;
    th: () => void;
    thead: () => void;
    timeStamp: () => void;
    title: (j: J, parent: Node) => TexastContent[];
    titleGroup: (j: J, node: Node) => TexastContent[];
    tr: (j: J, node: Tr) => TexastContent;
    transAbstract: () => void;
    transSource: () => void;
    transSubtitle: () => void;
    transTitle: (j: J, node: Parents, parent: Parent) => TexastContent;
    transTitlegroup: (j: J, node: Node) => TexastContent[];
    underline: () => void;
    underlineEnd: () => void;
    underlineStart: () => void;
    unstructuredKwdgroup: () => void;
    uri: () => void;
    verseGroup: () => void;
    verseLine: () => void;
    version: () => void;
    volume: (j: J, node: Parents, parent: Parent) => TexastContent;
    volumeId: () => void;
    volumeIssuegroup: () => void;
    volumeSeries: (j: J, node: Parents, parent: Parent) => TexastContent;
    wordCount: () => void;
    x: () => void;
    xml: () => void;
    xref: (j: J, node: Xref) => TexastContent;
    year: () => void;
}
```

#### Type declaration

| Member | Type |
| :------ | :------ |
| `abbrev` | () => `void` |
| `abbrevJournaltitle` | () => `void` |
| `abstract` | () => `void` |
| `accessDate` | () => `void` |
| `ack` | () => `void` |
| `addrLine` | () => `void` |
| `address` | () => `void` |
| `aff` | () => `void` |
| `affAlternatives` | () => `void` |
| `altText` | () => `void` |
| `altTitle` | () => `void` |
| `alternatives` | () => `void` |
| `annotation` | () => `void` |
| `anonymous` | () => `void` |
| `answer` | () => `void` |
| `answerSet` | () => `void` |
| `app` | () => `void` |
| `appGroup` | () => `void` |
| `array` | () => `void` |
| `article` | (`j`: [`J`](modules.md#j), `node`: [`Root`](modules.md#root)) => [`TexastContent`](modules.md#texastcontent) |
| `articleCategories` | () => `void` |
| `articleId` | () => `void` |
| `articleMeta` | () => `void` |
| `articleTitle` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `articleVersion` | () => `void` |
| `articleVersionalternatives` | () => `void` |
| `attrib` | () => `void` |
| `authorComment` | () => `void` |
| `authorNotes` | () => `void` |
| `awardDesc` | () => `void` |
| `awardGroup` | () => `void` |
| `awardId` | () => `void` |
| `awardName` | () => `void` |
| `back` | (`j`: [`J`](modules.md#j), `parent`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `bio` | () => `void` |
| `blockAlternatives` | () => `void` |
| `body` | (`j`: [`J`](modules.md#j), `node`: [`Root`](modules.md#root)) => [`TexastContent`](modules.md#texastcontent) |
| `bold` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `boxedText` | () => `void` |
| `break` | () => `void` |
| `caption` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `chapterTitle` | () => `void` |
| `chemStruct` | () => `void` |
| `chemStructwrap` | () => `void` |
| `citationAlternatives` | () => `void` |
| `city` | () => `void` |
| `code` | () => `void` |
| `col` | () => `void` |
| `colgroup` | () => `void` |
| `collab` | () => `void` |
| `collabAlternatives` | () => `void` |
| `command` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `comment` | () => `void` |
| `compoundKwd` | () => `void` |
| `compoundKwdpart` | () => `void` |
| `compoundSubject` | () => `void` |
| `compoundSubjectpart` | () => `void` |
| `confAcronym` | () => `void` |
| `confDate` | () => `void` |
| `confLoc` | () => `void` |
| `confName` | () => `void` |
| `confNum` | () => `void` |
| `confSponsor` | () => `void` |
| `confTheme` | () => `void` |
| `conference` | () => `void` |
| `contrib` | () => `void` |
| `contribGroup` | (`j`: [`J`](modules.md#j), `node`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `contribId` | () => `void` |
| `contributedResourcegroup` | () => `void` |
| `copyrightHolder` | () => `void` |
| `copyrightStatement` | () => `void` |
| `copyrightYear` | () => `void` |
| `corresp` | () => `void` |
| `count` | () => `void` |
| `country` | () => `void` |
| `counts` | () => `void` |
| `customMeta` | () => `void` |
| `customMetagroup` | () => `void` |
| `dataTitle` | () => `void` |
| `date` | () => `void` |
| `dateIncitation` | () => `void` |
| `day` | () => `void` |
| `def` | () => `void` |
| `defHead` | () => `void` |
| `defItem` | () => `void` |
| `defList` | () => `void` |
| `degrees` | () => `void` |
| `disp-quote` | (`j`: [`J`](modules.md#j), `node`: `DispQuote`) => `Environment` |
| `dispFormula` | () => `void` |
| `dispFormulagroup` | () => `void` |
| `dispQuote` | () => `void` |
| `edition` | () => `void` |
| `elementCitation` | () => `void` |
| `elocationId` | () => `void` |
| `email` | () => `void` |
| `equationCount` | () => `void` |
| `era` | () => `void` |
| `etal` | () => `void` |
| `event` | () => `void` |
| `eventDesc` | () => `void` |
| `explanation` | () => `void` |
| `extLink` | (`j`: [`J`](modules.md#j), `node`: `ExtLink`) => {     `children`: `CommandArg`[];     `name`: `string`;     `type`: `string`; } |
| `extendedBy` | () => `void` |
| `fax` | () => `void` |
| `fig` | (`j`: [`J`](modules.md#j), `fig`: `Fig`) => {     `children`: [`TexastContent`](modules.md#texastcontent)[];     `name`: `string`;     `type`: `string`; } |
| `figCount` | () => `void` |
| `figGroup` | () => `void` |
| `fixedCase` | () => `void` |
| `floatsGroup` | () => `void` |
| `fn` | (`j`: [`J`](modules.md#j), `parent`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `fnGroup` | (`j`: [`J`](modules.md#j), `parent`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `fpage` | () => `void` |
| `front` | (`j`: [`J`](modules.md#j), `node`: [`Root`](modules.md#root)) => [`TexastContent`](modules.md#texastcontent) |
| `frontStub` | () => `void` |
| `fundingGroup` | () => `void` |
| `fundingSource` | () => `void` |
| `fundingStatement` | () => `void` |
| `givenNames` | () => `void` |
| `glossary` | () => `void` |
| `glyphData` | () => `void` |
| `glyphRef` | () => `void` |
| `gov` | () => `void` |
| `graphic` | (`j`: [`J`](modules.md#j), `node`: `Graphic`) => {     `children`: (`CommandArg` | {         `type`: `string`;         `value`: `string`;     })[];     `name`: `string`;     `type`: `string`; } |
| `history` | () => `void` |
| `hr` | () => `void` |
| `indexTerm` | () => `void` |
| `indexTermrangeend` | () => `void` |
| `inlineFormula` | () => `void` |
| `inlineGraphic` | (`j`: [`J`](modules.md#j), `node`: `Graphic`) => {     `children`: (`CommandArg` | {         `type`: `string`;         `value`: `string`;     })[];     `name`: `string`;     `type`: `string`; } |
| `inlineMedia` | () => `void` |
| `inlineSupplementarymaterial` | () => `void` |
| `institution` | () => `void` |
| `institutionId` | () => `void` |
| `institutionWrap` | () => `void` |
| `instruction` | () => `void` |
| `isbn` | () => `void` |
| `issn` | () => `void` |
| `issnL` | () => `void` |
| `issue` | () => `void` |
| `issueId` | () => `void` |
| `issuePart` | () => `void` |
| `issueSponsor` | () => `void` |
| `issueSubtitle` | () => `void` |
| `issueTitle` | () => `void` |
| `issueTitlegroup` | (`j`: [`J`](modules.md#j), `node`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `italic` | (`j`: [`J`](modules.md#j), `node`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent) |
| `journalId` | () => `void` |
| `journalMeta` | () => `void` |
| `journalSubtitle` | () => `void` |
| `journalTitle` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `journalTitlegroup` | (`j`: [`J`](modules.md#j), `node`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `kwd` | () => `void` |
| `kwdGroup` | () => `void` |
| `label` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `license` | () => `void` |
| `licenseP` | () => `void` |
| `list` | (`j`: [`J`](modules.md#j), `list`: `List`) => {     `children`: [`TexastContent`](modules.md#texastcontent)[];     `name`: `string`;     `type`: `string`; } |
| `listItem` | (`j`: [`J`](modules.md#j), `item`: `ListItem`) => [`TexastContent`](modules.md#texastcontent) |
| `longDesc` | () => `void` |
| `lpage` | () => `void` |
| `media` | () => `void` |
| `metaName` | () => `void` |
| `metaValue` | () => `void` |
| `milestoneEnd` | () => `void` |
| `milestoneStart` | () => `void` |
| `mixedCitation` | () => `void` |
| `monospace` | () => `void` |
| `month` | () => `void` |
| `name` | () => `void` |
| `nameAlternatives` | () => `void` |
| `namedContent` | () => `void` |
| `nestedKwd` | () => `void` |
| `nlmCitation` | () => `void` |
| `note` | () => `void` |
| `notes` | () => `void` |
| `objectId` | () => `void` |
| `onBehalfof` | () => `void` |
| `openAccess` | () => `void` |
| `option` | () => `void` |
| `overline` | () => `void` |
| `overlineEnd` | () => `void` |
| `overlineStart` | () => `void` |
| `p` | (`j`: [`J`](modules.md#j), `p`: `P`) => [`TexastContent`](modules.md#texastcontent) |
| `pageCount` | () => `void` |
| `pageRange` | () => `void` |
| `partTitle` | () => `void` |
| `patent` | () => `void` |
| `permissions` | () => `void` |
| `personGroup` | () => `void` |
| `phone` | () => `void` |
| `postalCode` | () => `void` |
| `prefix` | () => `void` |
| `preformat` | () => `void` |
| `price` | () => `void` |
| `principalAwardrecipient` | () => `void` |
| `principalInvestigator` | () => `void` |
| `privateChar` | () => `void` |
| `processingMeta` | () => `void` |
| `product` | () => `void` |
| `pubDate` | () => `void` |
| `pubDatenotavailable` | () => `void` |
| `pubHistory` | () => `void` |
| `pubId` | () => `void` |
| `publisher` | () => `void` |
| `publisherLoc` | () => `void` |
| `publisherName` | () => `void` |
| `question` | () => `void` |
| `questionPreamble` | () => `void` |
| `questionWrap` | () => `void` |
| `questionWrapgroup` | () => `void` |
| `rb` | () => `void` |
| `ref` | () => `void` |
| `refCount` | () => `void` |
| `refList` | (`j`: [`J`](modules.md#j), `list`: `RefList`) => `Environment` | `undefined` |
| `relatedArticle` | () => `void` |
| `relatedObject` | () => `void` |
| `resourceId` | () => `void` |
| `resourceName` | () => `void` |
| `resourceWrap` | () => `void` |
| `response` | () => `void` |
| `restrictedBy` | () => `void` |
| `role` | () => `void` |
| `roman` | () => `void` |
| `root` | (`j`: [`J`](modules.md#j), `node`: [`Root`](modules.md#root)) => [`TexastContent`](modules.md#texastcontent) |
| `rp` | () => `void` |
| `rt` | () => `void` |
| `ruby` | () => `void` |
| `sansSerif` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `sc` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `season` | () => `void` |
| `sec` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents)) => [`TexastContent`](modules.md#texastcontent)[] |
| `secMeta` | () => `void` |
| `see` | () => `void` |
| `seeAlso` | () => `void` |
| `selfUri` | () => `void` |
| `series` | () => `void` |
| `seriesText` | () => `void` |
| `seriesTitle` | () => `void` |
| `sig` | () => `void` |
| `sigBlock` | () => `void` |
| `size` | () => `void` |
| `source` | () => `void` |
| `speaker` | () => `void` |
| `speech` | () => `void` |
| `state` | () => `void` |
| `statement` | () => `void` |
| `std` | () => `void` |
| `stdOrganization` | () => `void` |
| `strike` | () => `void` |
| `stringConf` | () => `void` |
| `stringDate` | () => `void` |
| `stringName` | () => `void` |
| `styledContent` | () => `void` |
| `sub` | (`j`: [`J`](modules.md#j), `node`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent) |
| `subArticle` | () => `void` |
| `subjGroup` | () => `void` |
| `subject` | () => `void` |
| `subtitle` | () => `void` |
| `suffix` | () => `void` |
| `sup` | (`j`: [`J`](modules.md#j), `node`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent) |
| `supplement` | () => `void` |
| `supplementaryMaterial` | () => `void` |
| `supportDescription` | () => `void` |
| `supportGroup` | () => `void` |
| `supportSource` | () => `void` |
| `surname` | () => `void` |
| `table` | (`j`: [`J`](modules.md#j), `table`: `Table`) => {     `children`: [`TexastContent`](modules.md#texastcontent)[];     `name`: `string`;     `type`: `string`; } |
| `tableCount` | () => `void` |
| `tableWrap` | (`j`: [`J`](modules.md#j), `node`: `TableWrap`) => [`TexastContent`](modules.md#texastcontent) |
| `tableWrapfoot` | () => `void` |
| `tableWrapgroup` | () => `void` |
| `target` | () => `void` |
| `tbody` | (`j`: [`J`](modules.md#j), `parent`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `td` | (`j`: [`J`](modules.md#j), `node`: `Td`) => `TableCell` |
| `term` | () => `void` |
| `termHead` | () => `void` |
| `texMath` | () => `void` |
| `text` | (`j`: [`J`](modules.md#j), `node`: [`Text`](modules.md#text)) => [`TexastContent`](modules.md#texastcontent) |
| `textualForm` | () => `void` |
| `tfoot` | () => `void` |
| `th` | () => `void` |
| `thead` | () => `void` |
| `timeStamp` | () => `void` |
| `title` | (`j`: [`J`](modules.md#j), `parent`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `titleGroup` | (`j`: [`J`](modules.md#j), `node`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `tr` | (`j`: [`J`](modules.md#j), `node`: `Tr`) => [`TexastContent`](modules.md#texastcontent) |
| `transAbstract` | () => `void` |
| `transSource` | () => `void` |
| `transSubtitle` | () => `void` |
| `transTitle` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `transTitlegroup` | (`j`: [`J`](modules.md#j), `node`: [`Node`](modules.md#node)) => [`TexastContent`](modules.md#texastcontent)[] |
| `underline` | () => `void` |
| `underlineEnd` | () => `void` |
| `underlineStart` | () => `void` |
| `unstructuredKwdgroup` | () => `void` |
| `uri` | () => `void` |
| `verseGroup` | () => `void` |
| `verseLine` | () => `void` |
| `version` | () => `void` |
| `volume` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `volumeId` | () => `void` |
| `volumeIssuegroup` | () => `void` |
| `volumeSeries` | (`j`: [`J`](modules.md#j), `node`: [`Parents`](modules.md#parents), `parent`: [`Parent`](modules.md#parent)) => [`TexastContent`](modules.md#texastcontent) |
| `wordCount` | () => `void` |
| `x` | () => `void` |
| `xml` | () => `void` |
| `xref` | (`j`: [`J`](modules.md#j), `node`: `Xref`) => [`TexastContent`](modules.md#texastcontent) |
| `year` | () => `void` |

Defined in:  [src/lib/handlers/index.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/handlers/index.ts#L29)

***

### `Context`

#### Properties

##### `baseFound`

> `boolean`

Defined in:  [src/lib/types.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L59)

##### `bibname`

> `string`

Defined in:  [src/lib/types.ts:76](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L76)

##### `booktabs`

> `boolean`

Defined in:  [src/lib/types.ts:68](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L68)

##### `checked`

> `string`

Defined in:  [src/lib/types.ts:66](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L66)

##### `citationAnalyzer`

> `Function`

###### Type declaration

*Signature\`*

```ts
(node: Node): string;
```

*Parameters\`*

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node) |

*Returns\`*

`string`

Defined in:  [src/lib/types.ts:81](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L81)

##### `columnSeparator`

> `boolean`

Defined in:  [src/lib/types.ts:77](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L77)

##### `document`

> `undefined` | `boolean`

Defined in:  [src/lib/types.ts:65](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L65)

##### `documentClass`

> `object`

```ts
{
    name: string;
    options?: string[];
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `name` | `string` |
| `options`? | `string`[] |

Defined in:  [src/lib/types.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L71)

##### `footnotes`

> `Record`<`string`, [`TexastContent`](modules.md#texastcontent)[]>

Defined in:  [src/lib/types.ts:78](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L78)

##### `frozenBaseUrl`

> `null` | `string`

Defined in:  [src/lib/types.ts:60](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L60)

##### `handlers`

> `object`

###### Index signature

[`handler`: `string`]: [`Handle`](modules.md#handle)

###### Type declaration

Defined in:  [src/lib/types.ts:64](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L64)

##### `inTable`

> `boolean`

Defined in:  [src/lib/types.ts:62](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L62)

##### `italics`

> `string`

Defined in:  [src/lib/types.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L70)

##### `nodeById?`

> `object`

###### Index signature

[`id`: `string`]: [`Element`](modules.md#element)

###### Type declaration

Defined in:  [src/lib/types.ts:56](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L56)

##### `numberOfRows`

> `number`

Defined in:  [src/lib/types.ts:80](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L80)

##### `qNesting`

> `number`

Defined in:  [src/lib/types.ts:63](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L63)

##### `quotes`

> `string`[]

Defined in:  [src/lib/types.ts:69](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L69)

##### `rowNumber`

> `number`

Defined in:  [src/lib/types.ts:79](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L79)

##### `sectionDepth`

> `number`

Defined in:  [src/lib/types.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L75)

##### `unchecked`

> `string`

Defined in:  [src/lib/types.ts:67](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L67)

##### `wrapText`

> `boolean`

Defined in:  [src/lib/types.ts:61](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L61)

***

### `Name`

#### Hierarchy

*   `Node`.**Name**

#### Properties

##### `attributes`

> `object`

```ts
{
    id?: string;
    nameStyle?: NameTypeNameStyle;
    specificUse?: string;
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `id`? | `string` |
| `nameStyle`? | `NameTypeNameStyle` |
| `specificUse`? | `string` |

Defined in:  [libs/jast/jast/src/lib/jats.ts:6790](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/jats.ts#L6790)

##### `children`

> ([`Text`](modules.md#text) | `GivenNames` | `Prefix` | `Suffix` | `Surname`)[]

Defined in:  [libs/jast/jast/src/lib/jats.ts:6796](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/jats.ts#L6796)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistNode.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `"name"`

Defined in:  [libs/jast/jast/src/lib/jats.ts:6789](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/jats.ts#L6789)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistNode.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"element"`

Overrides: UnistNode.type

Defined in:  [libs/jast/jast/src/lib/jats.ts:6788](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/jats.ts#L6788)

***

### `Options`

#### Properties

##### `bibname?`

> `string`

Defined in:  [src/lib/types.ts:39](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L39)

##### `booktabs?`

> `boolean`

Defined in:  [src/lib/types.ts:41](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L41)

##### `checked?`

> `string`

Defined in:  [src/lib/types.ts:34](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L34)

##### `citationAnalyzer?`

> `Function`

###### Type declaration

*Signature\`*

```ts
(node: Node): string;
```

*Parameters\`*

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node) |

*Returns\`*

`string`

Defined in:  [src/lib/types.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L46)

##### `columnSeparator?`

> `boolean`

Defined in:  [src/lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L40)

##### `document?`

> `boolean`

Defined in:  [src/lib/types.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L32)

##### `documentClass?`

> `object`

```ts
{
    name: string;
    options?: string[];
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `name` | `string` |
| `options`? | `string`[] |

Defined in:  [src/lib/types.ts:42](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L42)

##### `handlers?`

> `object`

###### Index signature

[`handle`: `string`]: [`Handle`](modules.md#handle)

###### Type declaration

Defined in:  [src/lib/types.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L31)

##### `italics?`

> `"emph"` | `"textit"`

Defined in:  [src/lib/types.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L38)

##### `newLines?`

> `boolean`

Defined in:  [src/lib/types.ts:33](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L33)

##### `quotes?`

> `string`[]

Defined in:  [src/lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L36)

##### `topSection?`

> `number`

Defined in:  [src/lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L37)

##### `unchecked?`

> `string`

Defined in:  [src/lib/types.ts:35](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L35)

***

### `Parent`

#### Hierarchy

*   `Parent`.**Parent**

#### Properties

##### `children`

> ([`Text`](modules.md#text) | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `Label` | `ObjectId` | `P` | `Sec` | `Title` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `AddrLine` | `City` | `Country` | `Email` | `ExtLink` | `Fax` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Array` | `Code` | `Graphic` | `Media` | `Preformat` | `SupplementaryMaterial` | `Table` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `Attrib` | `LongDesc` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Back` | `Body` | `FloatsGroup` | `Front` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Degrees` | [`Name`](modules.md#name) | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Series` | `Size` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tfoot` | `Thead` | `Tr` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)[]

Overrides: UnistParent.children

Defined in:  [libs/jast/jast/src/lib/rejour.ts:25](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/rejour.ts#L25)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistParent.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistParent.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `string`

The variant of a node.

Inherited from: UnistParent.type

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:22

***

### `Root`

#### Hierarchy

*   `Parent`.**Root**

#### Properties

##### `children`

> ([`Text`](modules.md#text) | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `Label` | `ObjectId` | `P` | `Sec` | `Title` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `AddrLine` | `City` | `Country` | `Email` | `ExtLink` | `Fax` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Array` | `Code` | `Graphic` | `Media` | `Preformat` | `SupplementaryMaterial` | `Table` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `Attrib` | `LongDesc` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Back` | `Body` | `FloatsGroup` | `Front` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Degrees` | [`Name`](modules.md#name) | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Series` | `Size` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tfoot` | `Thead` | `Tr` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` | `Instruction` | `Doctype`)[]

Overrides: UnistParent.children

Defined in:  [libs/jast/jast/src/lib/rejour.ts:20](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/rejour.ts#L20)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistParent.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistParent.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"root"`

Overrides: UnistParent.type

Defined in:  [libs/jast/jast/src/lib/rejour.ts:19](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/rejour.ts#L19)

***

### `TexastLiteral`

Nodes containing a value.

#### Type parameters

*   `Value` = `unknown`Specific value type of Literal.value such as `string` for `Text` node
*   `TData` *extends* `object` = `Data`

#### Hierarchy

*   `Node`<`TData`>.**TexastLiteral**

#### Properties

##### `data?`

> `TData`

Information from the ecosystem.

Inherited from: Node.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: Node.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `string`

The variant of a node.

Inherited from: Node.type

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:22

##### `value`

> `Value`

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:113

***

### `TexastParent`

#### Hierarchy

*   `Parent`.**TexastParent**

#### Properties

##### `children`

> [`TexastContent`](modules.md#texastcontent)[]

Overrides: UnistParent.children

Defined in:  [libs/texast/texast/src/lib/texast.ts:106](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/texast/texast/src/lib/texast.ts#L106)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistParent.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistParent.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `string`

The variant of a node.

Inherited from: UnistParent.type

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:22

***

### `TexastRoot`

#### Hierarchy

*   [`TexastParent`](modules.md#texastparent).**TexastRoot**

#### Properties

##### `children`

> [`TexastContent`](modules.md#texastcontent)[]

Inherited from: [TexastParent](modules.md#texastparent).[children](modules.md#children)

Defined in:  [libs/texast/texast/src/lib/texast.ts:106](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/texast/texast/src/lib/texast.ts#L106)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [TexastParent](modules.md#texastparent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [TexastParent](modules.md#texastparent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"root"`

The variant of a node.

Overrides: [TexastParent](modules.md#texastparent).[type](modules.md#type)

Defined in:  [libs/texast/texast/src/lib/texast.ts:86](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/texast/texast/src/lib/texast.ts#L86)

***

### `Text`

Nodes containing a value.

#### Hierarchy

*   [`TexastLiteral`](modules.md#texastliteral).**Text**

#### Properties

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [TexastLiteral](modules.md#texastliteral).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [TexastLiteral](modules.md#texastliteral).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"text"`

The variant of a node.

Overrides: [TexastLiteral](modules.md#texastliteral).[type](modules.md#type)

Defined in:  [libs/jast/jast/src/lib/jats.ts:43](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/jats.ts#L43)

##### `value`

> `string`

Overrides: [TexastLiteral](modules.md#texastliteral).[value](modules.md#value)

Defined in:  [libs/jast/jast/src/lib/jats.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/jats.ts#L44)

***

### `Attributes`

> `JastProperties`

Defined in:  [src/lib/types.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L29)

***

### `Content`

> `ValuesType`<`documentMap`>

Defined in:  [libs/jast/jast/src/lib/jats.ts:13710](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/jats.ts#L13710)

***

### `Element`

> `Extract`<[`Content`](modules.md#content), {
> `type`: `"element"`;
> }>

Defined in:  [libs/jast/jast/src/lib/jats.ts:13711](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast/src/lib/jats.ts#L13711)

***

### `Handle`

> `Function`

#### Type declaration

##### `Signature`

```ts
(j: J, node: any, parent?: Parent): TexastContent | TexastContent[] | void;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `j` | [`J`](modules.md#j) |
| `node` | `any` |
| `parent?` | [`Parent`](modules.md#parent) |

##### `Returns`

[`TexastContent`](modules.md#texastcontent) | [`TexastContent`](modules.md#texastcontent)[] | `void`

Defined in:  [src/lib/types.ts:49](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L49)

***

### `J`

> [`JWithProps`](modules.md#jwithprops) & [`JWithoutProps`](modules.md#jwithoutprops) & [`Context`](modules.md#context)

Defined in:  [src/lib/types.ts:106](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L106)

***

### `JWithProps`

> `Function`

#### Type declaration

##### `Signature`

```ts
(
  node: Node, 
  type: string, 
  props?: Attributes, 
  children?: string | TexastContent[]): TexastContent;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node) |
| `type` | `string` |
| `props?` | [`Attributes`](modules.md#attributes) |
| `children?` | `string` | [`TexastContent`](modules.md#texastcontent)[] |

##### `Returns`

[`TexastContent`](modules.md#texastcontent)

Defined in:  [src/lib/types.ts:84](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L84)

***

### `JWithPropsSpecific`

> <`TNode`> `Function`

#### Type parameters

*   `TNode` *extends* [`TexastContent`](modules.md#texastcontent) = [`TexastContent`](modules.md#texastcontent)

#### Type declaration

##### `Signature`

```ts
(
  node: Node, 
  type: Pick<TNode, "type">, 
  props?: Attributes, 
  children?: Pick<TNode, "children">): TNode;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node) |
| `type` | `Pick`<`TNode`, `"type"`> |
| `props?` | [`Attributes`](modules.md#attributes) |
| `children?` | `Pick`<`TNode`, `"children"`> |

##### `Returns`

`TNode`

Defined in:  [src/lib/types.ts:97](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L97)

***

### `JWithoutProps`

> `Function`

#### Type declaration

##### `Signature`

```ts
(node: Node, type: string, children?: string | TexastContent[]): TexastContent;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node) |
| `type` | `string` |
| `children?` | `string` | [`TexastContent`](modules.md#texastcontent)[] |

##### `Returns`

[`TexastContent`](modules.md#texastcontent)

Defined in:  [src/lib/types.ts:91](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L91)

***

### `Node`

> [`Parent`](modules.md#parent)[`"children"`][`number`] | [`Root`](modules.md#root)

jast Node

Defined in:  [src/lib/types.ts:26](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L26)

***

### `Parents`

> `Extract`<`Exclude`<[`Node`](modules.md#node), [`Text`](modules.md#text) | [`Root`](modules.md#root)>, {
> `children`: `any`[];
> }>

Defined in:  [src/lib/types.ts:122](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-to-texast/src/lib/types.ts#L122)

***

### `TexastContent`

> `TopLevelDocumentContent` | `PreambleContent` | `AlignmentContent` | `MathContent` | `CommandContent` | [`TexastParagraphContent`](modules.md#texastparagraphcontent) | `CommandArg` | `ListContent` | `Text` | `Comment` | `TabularContent` | `TableRowContent`

Defined in:  [libs/texast/texast/src/lib/texast.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/texast/texast/src/lib/texast.ts#L32)

***

### `TexastParagraphContent`

> `Text` | `InlineMath` | `Command` | `Comment`

Defined in:  [libs/texast/texast/src/lib/texast.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/texast/texast/src/lib/texast.ts#L75)

## Syntax tree

## Types

## Compatibility

## Security

## Related

## Contribute

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna

[unified]: https://unifiedjs.com

[unifiedgh]: https://github.com/unifiedjs/unified

[xast-from-xml]: https://github.com/syntax-tree/xast-util-from-xml

[rehype]: https://github.com/rehypejs/rehype

[rejour]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour

[rejour-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-parse

[rejour-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-stringify

[rejour-move-abstract]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-move-abstract

[rejour-meta]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-meta

[rejour-relatex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-relatex

[relatex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex

[relatex-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/relatex-stringify

[jast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast

[jast-jast-util-to-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast-jast-util-to-texast

[jastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jastscript

[texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast

[texast-util-to-latex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast-util-to-latex

[hast]: https://github.com/syntax-tree/hast

[xast]: https://github.com/syntax-tree/xast

[mdast]: https://github.com/syntax-tree/mdast

[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[latex-utensils]: https://github.com/tamuratak/latex-utensils

[latexjs]: https://github.com/latexjs/latexjs
