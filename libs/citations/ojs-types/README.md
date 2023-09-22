> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ojs-types

Some typescript types for OJS api responses

## Contents

- [ojs-types](#ojs-types)
  - [Contents](#contents)
  - [What is this?](#what-is-this)
  - [When should I use this?](#when-should-i-use-this)
  - [Install](#install)
  - [Use](#use)
  - [API](#api)
  - [Syntax tree](#syntax-tree)
  - [Types](#types)
  - [Compatibility](#compatibility)
  - [Security](#security)
  - [Related](#related)
  - [Contribute](#contribute)
  - [License](#license)

## What is this?

## When should I use this?

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add ojs-api
# or with yarn
# yarn add ojs-api
# or with npm
# npm install ojs-api
```

## Use

## API

---

### `Announcement`

#### Properties

##### `\_href?`

> `string`

Format: uri

###### Description

The URL to this announcement in the REST API.

Defined in: [lib/types.ts:6](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L6)

##### `assocId?`

> `number`

###### Description

The journal, press or preprint server ID.

Defined in: [lib/types.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L8)

##### `assocType?`

> `number`

###### Description

The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS).

Defined in: [lib/types.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L10)

##### `dateExpire?`

> `string`

###### Description

(Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers.

Defined in: [lib/types.ts:12](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L12)

##### `datePosted?`

> `string`

###### Description

The date this announcement was posted.

Defined in: [lib/types.ts:14](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L14)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:15](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L15)

##### `descriptionShort?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:16](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L16)

##### `id?`

> `number`

Defined in: [lib/types.ts:17](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L17)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:18](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L18)

##### `typeId?`

> `number`

###### Description

(Optional) One of the announcement type ids.

Defined in: [lib/types.ts:20](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L20)

---

### `AnnouncementEditable`

#### Properties

##### `assocId?`

> `number`

###### Description

The journal, press or preprint server ID.

Defined in: [lib/types.ts:781](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L781)

##### `assocType?`

> `number`

###### Description

The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS).

Defined in: [lib/types.ts:783](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L783)

##### `dateExpire?`

> `string`

###### Description

(Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers.

Defined in: [lib/types.ts:785](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L785)

##### `datePosted?`

> `string`

###### Description

The date this announcement was posted.

Defined in: [lib/types.ts:787](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L787)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:788](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L788)

##### `descriptionShort?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:789](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L789)

##### `id?`

> `number`

Defined in: [lib/types.ts:790](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L790)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:791](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L791)

##### `typeId?`

> `number`

###### Description

(Optional) One of the announcement type ids.

Defined in: [lib/types.ts:793](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L793)

---

### `AnnouncementSummary`

#### Properties

##### `\_href?`

> `string`

Format: uri

###### Description

The URL to this announcement in the REST API.

Defined in: [lib/types.ts:800](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L800)

##### `assocId?`

> `number`

###### Description

The journal, press or preprint server ID.

Defined in: [lib/types.ts:802](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L802)

##### `assocType?`

> `number`

###### Description

The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS).

Defined in: [lib/types.ts:804](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L804)

##### `dateExpire?`

> `string`

###### Description

(Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers.

Defined in: [lib/types.ts:806](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L806)

##### `datePosted?`

> `string`

###### Description

The date this announcement was posted.

Defined in: [lib/types.ts:808](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L808)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:809](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L809)

##### `descriptionShort?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:810](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L810)

##### `id?`

> `number`

Defined in: [lib/types.ts:811](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L811)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:812](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L812)

##### `typeId?`

> `number`

###### Description

(Optional) One of the announcement type ids.

Defined in: [lib/types.ts:814](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L814)

---

### `Author`

#### Properties

##### `affiliation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:23](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L23)

##### `biography?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L24)

##### `country?`

> `string`

Defined in: [lib/types.ts:25](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L25)

##### `email?`

> `string`

Defined in: [lib/types.ts:26](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L26)

##### `familyName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L27)

##### `givenName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L28)

##### `id?`

> `number`

Defined in: [lib/types.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L29)

##### `includeInBrowse?`

> `boolean`

###### Description

Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.

###### Default

true

Defined in: [lib/types.ts:34](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L34)

##### `orcid?`

> `string`

###### Description

The ORCID of this contributor. See: https\://orcid.org/

Defined in: [lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L36)

##### `preferredPublicName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L37)

##### `publicationId?`

> `number`

Defined in: [lib/types.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L38)

##### `seq?`

> `number`

###### Description

The order in which this contributor should appear in a list of contriibutors.

Defined in: [lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L40)

##### `submissionLocale?`

> `string`

###### Description

The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property.

Defined in: [lib/types.ts:42](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L42)

##### `url?`

> `string`

###### Description

An optional URL to this contributor's webpage.

Defined in: [lib/types.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L44)

##### `userGroupId?`

> `number`

###### Description

in which user group should this contributor be identified. Usually one of the author roles, such as Author or Translator.

Defined in: [lib/types.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L46)

---

### `AuthorEditable`

#### Properties

##### `affiliation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:817](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L817)

##### `biography?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:818](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L818)

##### `country?`

> `string`

Defined in: [lib/types.ts:819](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L819)

##### `email?`

> `string`

Defined in: [lib/types.ts:820](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L820)

##### `familyName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:821](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L821)

##### `givenName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:822](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L822)

##### `id?`

> `number`

Defined in: [lib/types.ts:823](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L823)

##### `includeInBrowse?`

> `boolean`

###### Description

Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.

###### Default

true

Defined in: [lib/types.ts:828](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L828)

##### `orcid?`

> `string`

###### Description

The ORCID of this contributor. See: https\://orcid.org/

Defined in: [lib/types.ts:830](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L830)

##### `preferredPublicName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:831](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L831)

##### `publicationId?`

> `number`

Defined in: [lib/types.ts:832](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L832)

##### `seq?`

> `number`

###### Description

The order in which this contributor should appear in a list of contriibutors.

Defined in: [lib/types.ts:834](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L834)

##### `url?`

> `string`

###### Description

An optional URL to this contributor's webpage.

Defined in: [lib/types.ts:836](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L836)

##### `userGroupId?`

> `number`

###### Description

in which user group should this contributor be identified. Usually one of the author roles, such as Author or Translator.

Defined in: [lib/types.ts:838](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L838)

---

### `AuthorSummary`

#### Properties

##### `affiliation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:841](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L841)

##### `email?`

> `string`

Defined in: [lib/types.ts:842](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L842)

##### `familyName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:843](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L843)

##### `givenName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:844](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L844)

##### `id?`

> `number`

Defined in: [lib/types.ts:845](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L845)

##### `includeInBrowse?`

> `boolean`

###### Description

Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.

###### Default

true

Defined in: [lib/types.ts:850](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L850)

##### `orcid?`

> `string`

###### Description

The ORCID of this contributor. See: https\://orcid.org/

Defined in: [lib/types.ts:852](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L852)

##### `preferredPublicName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:853](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L853)

##### `publicationId?`

> `number`

Defined in: [lib/types.ts:854](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L854)

##### `seq?`

> `number`

###### Description

The order in which this contributor should appear in a list of contriibutors.

Defined in: [lib/types.ts:856](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L856)

##### `submissionLocale?`

> `string`

###### Description

The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property.

Defined in: [lib/types.ts:858](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L858)

##### `userGroupId?`

> `number`

###### Description

in which user group should this contributor be identified. Usually one of the author roles, such as Author or Translator.

Defined in: [lib/types.ts:860](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L860)

---

### `Context`

#### Properties

##### `\_href?`

> `string`

Format: uri

Defined in: [lib/types.ts:50](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L50)

##### `abbreviation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:51](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L51)

##### `about?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:52](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L52)

##### `acronym?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:53](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L53)

##### `additionalHomeContent?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:54](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L54)

##### `agencies?`

> `string`

###### Description

Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:56](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L56)

##### `announcementsIntroduction?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:57](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L57)

##### `authorGuidelines?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:58](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L58)

##### `authorInformation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L59)

##### `citations?`

> `string`

###### Description

Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:61](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L61)

##### `clockssLicense?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:62](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L62)

##### `competingInterests?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:63](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L63)

##### `contactAffiliation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:64](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L64)

##### `contactEmail?`

> `string`

Defined in: [lib/types.ts:65](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L65)

##### `contactName?`

> `string`

Defined in: [lib/types.ts:66](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L66)

##### `contactPhone?`

> `string`

Defined in: [lib/types.ts:67](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L67)

##### `copyrightHolderOther?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:68](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L68)

##### `copyrightHolderType?`

> `string`

Defined in: [lib/types.ts:69](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L69)

##### `copyrightNotice?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L70)

##### `copyrightYearBasis?`

> `string`

###### Default

issue

Defined in: [lib/types.ts:72](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L72)

##### `coverage?`

> `string`

###### Description

Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:74](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L74)

##### `currency?`

> `string`

Defined in: [lib/types.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L75)

##### `customHeaders?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:76](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L76)

##### `dateFormatLong?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:77](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L77)

##### `dateFormatShort?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:78](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L78)

##### `datetimeFormatLong?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:79](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L79)

##### `datetimeFormatShort?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:80](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L80)

##### `defaultMetricType?`

> `string`

Defined in: [lib/types.ts:81](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L81)

##### `defaultReviewMode?`

> `number`

###### Default

2

Defined in: [lib/types.ts:83](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L83)

##### `delayedOpenAccessDuration?`

> `number`

Defined in: [lib/types.ts:84](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L84)

##### `delayedOpenAccessPolicy?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:85](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L85)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:86](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L86)

##### `disableBulkEmailUserGroups?`

> `number`[]

###### Description

User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property.

Defined in: [lib/types.ts:88](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L88)

##### `disableSubmissions?`

> `boolean`

###### Default

false

Defined in: [lib/types.ts:90](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L90)

##### `disableUserReg?`

> `boolean`

Defined in: [lib/types.ts:91](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L91)

##### `disciplines?`

> `string`

###### Description

Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:93](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L93)

##### `editorialTeam?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:94](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L94)

##### `emailSignature?`

> `string`

Defined in: [lib/types.ts:95](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L95)

##### `enableAnnouncements?`

> `boolean`

Defined in: [lib/types.ts:96](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L96)

##### `enableClockss?`

> `boolean`

Defined in: [lib/types.ts:97](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L97)

##### `enableLockss?`

> `boolean`

Defined in: [lib/types.ts:98](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L98)

##### `enableOai?`

> `boolean`

###### Default

1

Defined in: [lib/types.ts:100](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L100)

##### `enableOpenAccessNotification?`

> `boolean`

Defined in: [lib/types.ts:101](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L101)

##### `enablePublisherId?`

> `string`[]

Defined in: [lib/types.ts:102](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L102)

##### `enableSubscriptionOnlinePaymentNotificationPurchaseIndividual?`

> `boolean`

Defined in: [lib/types.ts:103](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L103)

##### `enableSubscriptionOnlinePaymentNotificationPurchaseInstitutional?`

> `boolean`

Defined in: [lib/types.ts:104](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L104)

##### `enableSubscriptionOnlinePaymentNotificationRenewIndividual?`

> `boolean`

Defined in: [lib/types.ts:105](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L105)

##### `enableSubscriptionOnlinePaymentNotificationRenewInstitutional?`

> `boolean`

Defined in: [lib/types.ts:106](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L106)

##### `enabled?`

> `boolean`

Defined in: [lib/types.ts:107](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L107)

##### `envelopeSender?`

> `string`

Defined in: [lib/types.ts:108](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L108)

##### `favicon?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                | Type      |
| :-------------------- | :-------- |
| `en_US`?              | `object`  |
| `en_US.altText`?      | `string`  |
| `en_US.dateUploaded`? | `string`  |
| `en_US.height`?       | `number`  |
| `en_US.name`?         | `string`  |
| `en_US.uploadName`?   | `string`  |
| `en_US.width`?        | `number`  |
| `fr_CA`?              | `object`  |
| `fr_CA.altText`?      | `string`  |
| `fr_CA.dateUploaded`? | `string`  |
| `fr_CA.height`?       | `number`  |
| `fr_CA.name`?         | `string`  |
| `fr_CA.uploadName`?   | `string`  |
| `fr_CA.width`?        | `number`  |
| `properties`?         | `unknown` |
| `type`?               | `unknown` |

Defined in: [lib/types.ts:109](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L109)

##### `homepageImage?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                | Type      |
| :-------------------- | :-------- |
| `en_US`?              | `object`  |
| `en_US.altText`?      | `string`  |
| `en_US.dateUploaded`? | `string`  |
| `en_US.height`?       | `number`  |
| `en_US.name`?         | `string`  |
| `en_US.uploadName`?   | `string`  |
| `en_US.width`?        | `number`  |
| `fr_CA`?              | `object`  |
| `fr_CA.altText`?      | `string`  |
| `fr_CA.dateUploaded`? | `string`  |
| `fr_CA.height`?       | `number`  |
| `fr_CA.name`?         | `string`  |
| `fr_CA.uploadName`?   | `string`  |
| `fr_CA.width`?        | `number`  |
| `properties`?         | `unknown` |
| `type`?               | `unknown` |

Defined in: [lib/types.ts:129](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L129)

##### `id?`

> `number`

Defined in: [lib/types.ts:149](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L149)

##### `itemsPerPage?`

> `number`

###### Default

25

Defined in: [lib/types.ts:151](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L151)

##### `journalThumbnail?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                | Type      |
| :-------------------- | :-------- |
| `en_US`?              | `object`  |
| `en_US.altText`?      | `string`  |
| `en_US.dateUploaded`? | `string`  |
| `en_US.height`?       | `number`  |
| `en_US.name`?         | `string`  |
| `en_US.uploadName`?   | `string`  |
| `en_US.width`?        | `number`  |
| `fr_CA`?              | `object`  |
| `fr_CA.altText`?      | `string`  |
| `fr_CA.dateUploaded`? | `string`  |
| `fr_CA.height`?       | `number`  |
| `fr_CA.name`?         | `string`  |
| `fr_CA.uploadName`?   | `string`  |
| `fr_CA.width`?        | `number`  |
| `properties`?         | `unknown` |
| `type`?               | `unknown` |

Defined in: [lib/types.ts:152](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L152)

##### `keywords?`

> `string`

###### Description

Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

###### Default

request

Defined in: [lib/types.ts:176](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L176)

##### `languages?`

> `string`

###### Description

Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:178](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L178)

##### `librarianInformation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:179](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L179)

##### `licenseTerms?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:180](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L180)

##### `licenseUrl?`

> `string`

Defined in: [lib/types.ts:181](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L181)

##### `lockssLicense?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:182](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L182)

##### `mailingAddress?`

> `string`

Defined in: [lib/types.ts:183](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L183)

##### `membershipFee?`

> `number`

###### Default

0

Defined in: [lib/types.ts:185](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L185)

##### `membershipFeeDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:186](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L186)

##### `membershipFeeName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:187](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L187)

##### `name?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:188](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L188)

##### `numAnnouncementsHomepage?`

> `number`

Defined in: [lib/types.ts:189](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L189)

##### `numDaysBeforeInviteReminder?`

> `number`

Defined in: [lib/types.ts:190](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L190)

##### `numDaysBeforeSubmitReminder?`

> `number`

Defined in: [lib/types.ts:191](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L191)

##### `numMonthsAfterSubscriptionExpiryReminder?`

> `number`

Defined in: [lib/types.ts:192](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L192)

##### `numMonthsBeforeSubscriptionExpiryReminder?`

> `number`

Defined in: [lib/types.ts:193](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L193)

##### `numPageLinks?`

> `number`

###### Default

10

Defined in: [lib/types.ts:195](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L195)

##### `numWeeksAfterSubscriptionExpiryReminder?`

> `number`

Defined in: [lib/types.ts:196](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L196)

##### `numWeeksBeforeSubscriptionExpiryReminder?`

> `number`

Defined in: [lib/types.ts:197](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L197)

##### `numWeeksPerResponse?`

> `number`

###### Default

4

Defined in: [lib/types.ts:199](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L199)

##### `numWeeksPerReview?`

> `number`

###### Default

4

Defined in: [lib/types.ts:201](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L201)

##### `onlineIssn?`

> `string`

Defined in: [lib/types.ts:202](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L202)

##### `openAccessPolicy?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:203](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L203)

##### `pageFooter?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:204](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L204)

##### `pageHeaderLogoImage?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                | Type      |
| :-------------------- | :-------- |
| `en_US`?              | `object`  |
| `en_US.altText`?      | `string`  |
| `en_US.dateUploaded`? | `string`  |
| `en_US.height`?       | `number`  |
| `en_US.name`?         | `string`  |
| `en_US.uploadName`?   | `string`  |
| `en_US.width`?        | `number`  |
| `fr_CA`?              | `object`  |
| `fr_CA.altText`?      | `string`  |
| `fr_CA.dateUploaded`? | `string`  |
| `fr_CA.height`?       | `number`  |
| `fr_CA.name`?         | `string`  |
| `fr_CA.uploadName`?   | `string`  |
| `fr_CA.width`?        | `number`  |
| `properties`?         | `unknown` |
| `type`?               | `unknown` |

Defined in: [lib/types.ts:205](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L205)

##### `paymentPluginName?`

> `string`

Defined in: [lib/types.ts:225](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L225)

##### `paymentsEnabled?`

> `boolean`

Defined in: [lib/types.ts:226](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L226)

##### `primaryLocale?`

> `string`

Defined in: [lib/types.ts:227](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L227)

##### `printIssn?`

> `string`

Defined in: [lib/types.ts:228](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L228)

##### `privacyStatement?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:229](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L229)

##### `publicationFee?`

> `number`

###### Default

0

Defined in: [lib/types.ts:231](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L231)

##### `publicationFeeDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:232](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L232)

##### `publicationFeeName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:233](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L233)

##### `publisherInstitution?`

> `string`

Defined in: [lib/types.ts:234](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L234)

##### `publishingMode?`

> `number`

Defined in: [lib/types.ts:235](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L235)

##### `purchaseArticleFee?`

> `number`

###### Default

0

Defined in: [lib/types.ts:237](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L237)

##### `purchaseArticleFeeDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:238](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L238)

##### `purchaseArticleFeeEnabled?`

> `boolean`

Defined in: [lib/types.ts:239](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L239)

##### `purchaseArticleFeeName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:240](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L240)

##### `purchaseIssueFee?`

> `number`

Defined in: [lib/types.ts:241](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L241)

##### `purchaseIssueFeeEnabled?`

> `boolean`

Defined in: [lib/types.ts:242](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L242)

##### `rateReviewerOnQuality?`

> `boolean`

Defined in: [lib/types.ts:243](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L243)

##### `readerInformation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:244](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L244)

##### `restrictArticleAccess?`

> `boolean`

Defined in: [lib/types.ts:245](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L245)

##### `restrictOnlyPdf?`

> `boolean`

Defined in: [lib/types.ts:246](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L246)

##### `restrictReviewerFileAccess?`

> `boolean`

Defined in: [lib/types.ts:247](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L247)

##### `restrictSiteAccess?`

> `boolean`

Defined in: [lib/types.ts:248](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L248)

##### `reviewGuidelines?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:249](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L249)

##### `reviewerAccessKeysEnabled?`

> `boolean`

Defined in: [lib/types.ts:250](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L250)

##### `rights?`

> `string`

###### Description

Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:252](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L252)

##### `searchDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:253](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L253)

##### `seq?`

> `number`

Defined in: [lib/types.ts:254](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L254)

##### `showEnsuringLink?`

> `boolean`

Defined in: [lib/types.ts:255](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L255)

##### `sidebar?`

> `string`[]

Defined in: [lib/types.ts:256](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L256)

##### `source?`

> `string`

###### Description

Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:258](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L258)

##### `styleSheet?`

> `object`

```ts
{
    dateUploaded?: string;
    name?: string;
    uploadName?: string;
}
```

###### Type declaration

| Member          | Type     |
| :-------------- | :------- |
| `dateUploaded`? | `string` |
| `name`?         | `string` |
| `uploadName`?   | `string` |

Defined in: [lib/types.ts:259](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L259)

##### `subjects?`

> `string`

###### Description

Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:265](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L265)

##### `submissionChecklist?`

> {
> `content`?: `string`;
> `order`?: `number`;
> }[]

###### Default

[
{
"order": 1,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.notPreviouslyPublished"
}
},
{
"order": 2,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.fileFormat"
}
},
{
"order": 3,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.addressesLinked"
}
},
{
"order": 4,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.submissionAppearance"
}
},
{
"order": 5,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.bibliographicRequirements"
}
}
]

Defined in: [lib/types.ts:300](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L300)

##### `submissionFee?`

> `number`

Defined in: [lib/types.ts:304](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L304)

##### `submissionFeeDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:305](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L305)

##### `submissionFeeName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:306](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L306)

##### `subscriptionAdditionalInformation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:307](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L307)

##### `subscriptionEmail?`

> `string`

Defined in: [lib/types.ts:308](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L308)

##### `subscriptionExpiryPartial?`

> `boolean`

Defined in: [lib/types.ts:309](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L309)

##### `subscriptionMailingAddress?`

> `string`

Defined in: [lib/types.ts:310](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L310)

##### `subscriptionName?`

> `string`

Defined in: [lib/types.ts:311](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L311)

##### `subscriptionPhone?`

> `string`

Defined in: [lib/types.ts:312](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L312)

##### `supportEmail?`

> `string`

Defined in: [lib/types.ts:313](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L313)

##### `supportName?`

> `string`

Defined in: [lib/types.ts:314](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L314)

##### `supportPhone?`

> `string`

Defined in: [lib/types.ts:315](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L315)

##### `supportedFormLocales?`

> `string`[]

Defined in: [lib/types.ts:316](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L316)

##### `supportedLocales?`

> `string`[]

Defined in: [lib/types.ts:317](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L317)

##### `supportedSubmissionLocales?`

> `string`[]

Defined in: [lib/types.ts:318](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L318)

##### `themePluginPath?`

> `string`

###### Default

default

Defined in: [lib/types.ts:320](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L320)

##### `timeFormat?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:321](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L321)

##### `type?`

> `string`

###### Description

Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:323](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L323)

##### `url?`

> `string`

Defined in: [lib/types.ts:324](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L324)

##### `urlPath?`

> `string`

Defined in: [lib/types.ts:325](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L325)

---

### `ContextEditable`

#### Properties

##### `abbreviation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:863](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L863)

##### `about?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:864](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L864)

##### `acronym?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:865](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L865)

##### `additionalHomeContent?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:866](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L866)

##### `agencies?`

> `string`

###### Description

Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:868](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L868)

##### `announcementsIntroduction?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:869](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L869)

##### `authorGuidelines?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:870](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L870)

##### `authorInformation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:871](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L871)

##### `citations?`

> `string`

###### Description

Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:873](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L873)

##### `clockssLicense?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:874](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L874)

##### `competingInterests?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:875](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L875)

##### `contactAffiliation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:876](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L876)

##### `contactEmail?`

> `string`

Defined in: [lib/types.ts:877](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L877)

##### `contactName?`

> `string`

Defined in: [lib/types.ts:878](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L878)

##### `contactPhone?`

> `string`

Defined in: [lib/types.ts:879](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L879)

##### `copyrightHolderOther?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:880](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L880)

##### `copyrightHolderType?`

> `string`

Defined in: [lib/types.ts:881](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L881)

##### `copyrightNotice?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:882](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L882)

##### `copyrightYearBasis?`

> `string`

###### Default

issue

Defined in: [lib/types.ts:884](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L884)

##### `coverage?`

> `string`

###### Description

Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:886](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L886)

##### `currency?`

> `string`

Defined in: [lib/types.ts:887](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L887)

##### `customHeaders?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:888](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L888)

##### `dateFormatLong?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:889](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L889)

##### `dateFormatShort?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:890](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L890)

##### `datetimeFormatLong?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:891](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L891)

##### `datetimeFormatShort?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:892](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L892)

##### `defaultMetricType?`

> `string`

Defined in: [lib/types.ts:893](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L893)

##### `defaultReviewMode?`

> `number`

###### Default

2

Defined in: [lib/types.ts:895](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L895)

##### `delayedOpenAccessDuration?`

> `number`

Defined in: [lib/types.ts:896](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L896)

##### `delayedOpenAccessPolicy?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:897](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L897)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:898](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L898)

##### `disableBulkEmailUserGroups?`

> `number`[]

###### Description

User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property.

Defined in: [lib/types.ts:900](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L900)

##### `disableSubmissions?`

> `boolean`

###### Default

false

Defined in: [lib/types.ts:902](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L902)

##### `disableUserReg?`

> `boolean`

Defined in: [lib/types.ts:903](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L903)

##### `disciplines?`

> `string`

###### Description

Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:905](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L905)

##### `editorialTeam?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:906](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L906)

##### `emailSignature?`

> `string`

Defined in: [lib/types.ts:907](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L907)

##### `enableAnnouncements?`

> `boolean`

Defined in: [lib/types.ts:908](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L908)

##### `enableClockss?`

> `boolean`

Defined in: [lib/types.ts:909](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L909)

##### `enableLockss?`

> `boolean`

Defined in: [lib/types.ts:910](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L910)

##### `enableOai?`

> `boolean`

###### Default

1

Defined in: [lib/types.ts:912](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L912)

##### `enableOpenAccessNotification?`

> `boolean`

Defined in: [lib/types.ts:913](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L913)

##### `enablePublisherId?`

> `string`[]

Defined in: [lib/types.ts:914](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L914)

##### `enableSubscriptionOnlinePaymentNotificationPurchaseIndividual?`

> `boolean`

Defined in: [lib/types.ts:915](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L915)

##### `enableSubscriptionOnlinePaymentNotificationPurchaseInstitutional?`

> `boolean`

Defined in: [lib/types.ts:916](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L916)

##### `enableSubscriptionOnlinePaymentNotificationRenewIndividual?`

> `boolean`

Defined in: [lib/types.ts:917](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L917)

##### `enableSubscriptionOnlinePaymentNotificationRenewInstitutional?`

> `boolean`

Defined in: [lib/types.ts:918](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L918)

##### `enabled?`

> `boolean`

Defined in: [lib/types.ts:919](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L919)

##### `envelopeSender?`

> `string`

Defined in: [lib/types.ts:920](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L920)

##### `favicon?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                   | Type      |
| :----------------------- | :-------- |
| `en_US`?                 | `object`  |
| `en_US.altText`?         | `string`  |
| `en_US.dateUploaded`?    | `string`  |
| `en_US.height`?          | `number`  |
| `en_US.name`?            | `string`  |
| `en_US.temporaryFileId`? | `number`  |
| `en_US.uploadName`?      | `string`  |
| `en_US.width`?           | `number`  |
| `fr_CA`?                 | `object`  |
| `fr_CA.altText`?         | `string`  |
| `fr_CA.dateUploaded`?    | `string`  |
| `fr_CA.height`?          | `number`  |
| `fr_CA.name`?            | `string`  |
| `fr_CA.temporaryFileId`? | `number`  |
| `fr_CA.uploadName`?      | `string`  |
| `fr_CA.width`?           | `number`  |
| `properties`?            | `unknown` |
| `type`?                  | `unknown` |

Defined in: [lib/types.ts:921](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L921)

##### `homepageImage?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                   | Type      |
| :----------------------- | :-------- |
| `en_US`?                 | `object`  |
| `en_US.altText`?         | `string`  |
| `en_US.dateUploaded`?    | `string`  |
| `en_US.height`?          | `number`  |
| `en_US.name`?            | `string`  |
| `en_US.temporaryFileId`? | `number`  |
| `en_US.uploadName`?      | `string`  |
| `en_US.width`?           | `number`  |
| `fr_CA`?                 | `object`  |
| `fr_CA.altText`?         | `string`  |
| `fr_CA.dateUploaded`?    | `string`  |
| `fr_CA.height`?          | `number`  |
| `fr_CA.name`?            | `string`  |
| `fr_CA.temporaryFileId`? | `number`  |
| `fr_CA.uploadName`?      | `string`  |
| `fr_CA.width`?           | `number`  |
| `properties`?            | `unknown` |
| `type`?                  | `unknown` |

Defined in: [lib/types.ts:943](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L943)

##### `itemsPerPage?`

> `number`

###### Default

25

Defined in: [lib/types.ts:966](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L966)

##### `journalThumbnail?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                   | Type      |
| :----------------------- | :-------- |
| `en_US`?                 | `object`  |
| `en_US.altText`?         | `string`  |
| `en_US.dateUploaded`?    | `string`  |
| `en_US.height`?          | `number`  |
| `en_US.name`?            | `string`  |
| `en_US.temporaryFileId`? | `number`  |
| `en_US.uploadName`?      | `string`  |
| `en_US.width`?           | `number`  |
| `fr_CA`?                 | `object`  |
| `fr_CA.altText`?         | `string`  |
| `fr_CA.dateUploaded`?    | `string`  |
| `fr_CA.height`?          | `number`  |
| `fr_CA.name`?            | `string`  |
| `fr_CA.temporaryFileId`? | `number`  |
| `fr_CA.uploadName`?      | `string`  |
| `fr_CA.width`?           | `number`  |
| `properties`?            | `unknown` |
| `type`?                  | `unknown` |

Defined in: [lib/types.ts:967](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L967)

##### `keywords?`

> `string`

###### Description

Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

###### Default

request

Defined in: [lib/types.ts:993](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L993)

##### `languages?`

> `string`

###### Description

Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:995](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L995)

##### `librarianInformation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:996](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L996)

##### `licenseTerms?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:997](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L997)

##### `licenseUrl?`

> `string`

Defined in: [lib/types.ts:998](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L998)

##### `lockssLicense?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:999](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L999)

##### `mailingAddress?`

> `string`

Defined in: [lib/types.ts:1000](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1000)

##### `membershipFee?`

> `number`

###### Default

0

Defined in: [lib/types.ts:1002](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1002)

##### `membershipFeeDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1003](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1003)

##### `membershipFeeName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1004](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1004)

##### `name?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1005](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1005)

##### `numAnnouncementsHomepage?`

> `number`

Defined in: [lib/types.ts:1006](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1006)

##### `numDaysBeforeInviteReminder?`

> `number`

Defined in: [lib/types.ts:1007](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1007)

##### `numDaysBeforeSubmitReminder?`

> `number`

Defined in: [lib/types.ts:1008](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1008)

##### `numMonthsAfterSubscriptionExpiryReminder?`

> `number`

Defined in: [lib/types.ts:1009](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1009)

##### `numMonthsBeforeSubscriptionExpiryReminder?`

> `number`

Defined in: [lib/types.ts:1010](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1010)

##### `numPageLinks?`

> `number`

###### Default

10

Defined in: [lib/types.ts:1012](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1012)

##### `numWeeksAfterSubscriptionExpiryReminder?`

> `number`

Defined in: [lib/types.ts:1013](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1013)

##### `numWeeksBeforeSubscriptionExpiryReminder?`

> `number`

Defined in: [lib/types.ts:1014](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1014)

##### `numWeeksPerResponse?`

> `number`

###### Default

4

Defined in: [lib/types.ts:1016](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1016)

##### `numWeeksPerReview?`

> `number`

###### Default

4

Defined in: [lib/types.ts:1018](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1018)

##### `onlineIssn?`

> `string`

Defined in: [lib/types.ts:1019](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1019)

##### `openAccessPolicy?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1020](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1020)

##### `pageFooter?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1021](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1021)

##### `pageHeaderLogoImage?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                   | Type      |
| :----------------------- | :-------- |
| `en_US`?                 | `object`  |
| `en_US.altText`?         | `string`  |
| `en_US.dateUploaded`?    | `string`  |
| `en_US.height`?          | `number`  |
| `en_US.name`?            | `string`  |
| `en_US.temporaryFileId`? | `number`  |
| `en_US.uploadName`?      | `string`  |
| `en_US.width`?           | `number`  |
| `fr_CA`?                 | `object`  |
| `fr_CA.altText`?         | `string`  |
| `fr_CA.dateUploaded`?    | `string`  |
| `fr_CA.height`?          | `number`  |
| `fr_CA.name`?            | `string`  |
| `fr_CA.temporaryFileId`? | `number`  |
| `fr_CA.uploadName`?      | `string`  |
| `fr_CA.width`?           | `number`  |
| `properties`?            | `unknown` |
| `type`?                  | `unknown` |

Defined in: [lib/types.ts:1022](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1022)

##### `paymentPluginName?`

> `string`

Defined in: [lib/types.ts:1044](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1044)

##### `paymentsEnabled?`

> `boolean`

Defined in: [lib/types.ts:1045](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1045)

##### `primaryLocale?`

> `string`

Defined in: [lib/types.ts:1046](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1046)

##### `printIssn?`

> `string`

Defined in: [lib/types.ts:1047](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1047)

##### `privacyStatement?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1048](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1048)

##### `publicationFee?`

> `number`

###### Default

0

Defined in: [lib/types.ts:1050](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1050)

##### `publicationFeeDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1051](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1051)

##### `publicationFeeName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1052](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1052)

##### `publisherInstitution?`

> `string`

Defined in: [lib/types.ts:1053](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1053)

##### `publishingMode?`

> `number`

Defined in: [lib/types.ts:1054](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1054)

##### `purchaseArticleFee?`

> `number`

###### Default

0

Defined in: [lib/types.ts:1056](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1056)

##### `purchaseArticleFeeDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1057](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1057)

##### `purchaseArticleFeeEnabled?`

> `boolean`

Defined in: [lib/types.ts:1058](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1058)

##### `purchaseArticleFeeName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1059](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1059)

##### `purchaseIssueFee?`

> `number`

Defined in: [lib/types.ts:1060](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1060)

##### `purchaseIssueFeeEnabled?`

> `boolean`

Defined in: [lib/types.ts:1061](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1061)

##### `rateReviewerOnQuality?`

> `boolean`

Defined in: [lib/types.ts:1062](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1062)

##### `readerInformation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1063](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1063)

##### `restrictArticleAccess?`

> `boolean`

Defined in: [lib/types.ts:1064](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1064)

##### `restrictOnlyPdf?`

> `boolean`

Defined in: [lib/types.ts:1065](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1065)

##### `restrictReviewerFileAccess?`

> `boolean`

Defined in: [lib/types.ts:1066](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1066)

##### `restrictSiteAccess?`

> `boolean`

Defined in: [lib/types.ts:1067](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1067)

##### `reviewGuidelines?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1068](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1068)

##### `reviewerAccessKeysEnabled?`

> `boolean`

Defined in: [lib/types.ts:1069](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1069)

##### `rights?`

> `string`

###### Description

Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:1071](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1071)

##### `searchDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1072](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1072)

##### `seq?`

> `number`

Defined in: [lib/types.ts:1073](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1073)

##### `showEnsuringLink?`

> `boolean`

Defined in: [lib/types.ts:1074](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1074)

##### `sidebar?`

> `string`[]

Defined in: [lib/types.ts:1075](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1075)

##### `source?`

> `string`

###### Description

Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:1077](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1077)

##### `styleSheet?`

> `object`

```ts
{
    dateUploaded?: string;
    name?: string;
    temporaryFileId?: number;
    uploadName?: string;
}
```

###### Type declaration

| Member             | Type     |
| :----------------- | :------- |
| `dateUploaded`?    | `string` |
| `name`?            | `string` |
| `temporaryFileId`? | `number` |
| `uploadName`?      | `string` |

Defined in: [lib/types.ts:1078](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1078)

##### `subjects?`

> `string`

###### Description

Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:1085](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1085)

##### `submissionChecklist?`

> {
> `content`?: `string`;
> `order`?: `number`;
> }[]

###### Default

[
{
"order": 1,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.notPreviouslyPublished"
}
},
{
"order": 2,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.fileFormat"
}
},
{
"order": 3,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.addressesLinked"
}
},
{
"order": 4,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.submissionAppearance"
}
},
{
"order": 5,
"content": {
"defaultLocaleKey": "default.contextSettings.checklist.bibliographicRequirements"
}
}
]

Defined in: [lib/types.ts:1120](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1120)

##### `submissionFee?`

> `number`

Defined in: [lib/types.ts:1124](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1124)

##### `submissionFeeDescription?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1125](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1125)

##### `submissionFeeName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1126](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1126)

##### `subscriptionAdditionalInformation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1127](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1127)

##### `subscriptionEmail?`

> `string`

Defined in: [lib/types.ts:1128](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1128)

##### `subscriptionExpiryPartial?`

> `boolean`

Defined in: [lib/types.ts:1129](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1129)

##### `subscriptionMailingAddress?`

> `string`

Defined in: [lib/types.ts:1130](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1130)

##### `subscriptionName?`

> `string`

Defined in: [lib/types.ts:1131](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1131)

##### `subscriptionPhone?`

> `string`

Defined in: [lib/types.ts:1132](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1132)

##### `supportEmail?`

> `string`

Defined in: [lib/types.ts:1133](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1133)

##### `supportName?`

> `string`

Defined in: [lib/types.ts:1134](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1134)

##### `supportPhone?`

> `string`

Defined in: [lib/types.ts:1135](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1135)

##### `supportedFormLocales?`

> `string`[]

Defined in: [lib/types.ts:1136](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1136)

##### `supportedLocales?`

> `string`[]

Defined in: [lib/types.ts:1137](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1137)

##### `supportedSubmissionLocales?`

> `string`[]

Defined in: [lib/types.ts:1138](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1138)

##### `themePluginPath?`

> `string`

###### Default

default

Defined in: [lib/types.ts:1140](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1140)

##### `timeFormat?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1141](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1141)

##### `type?`

> `string`

###### Description

Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.

Defined in: [lib/types.ts:1143](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1143)

##### `urlPath?`

> `string`

Defined in: [lib/types.ts:1144](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1144)

---

### `ContextSummary`

#### Properties

##### `\_href?`

> `string`

Format: uri

Defined in: [lib/types.ts:1148](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1148)

##### `abbreviation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1149](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1149)

##### `acronym?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1150](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1150)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1151](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1151)

##### `enabled?`

> `boolean`

Defined in: [lib/types.ts:1152](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1152)

##### `id?`

> `number`

Defined in: [lib/types.ts:1153](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1153)

##### `journalThumbnail?`

> `object`

```ts
{
    en_US?: {
    };
    fr_CA?: {
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member        | Type      |
| :------------ | :-------- |
| `en_US`?      | { }       |
| `fr_CA`?      | { }       |
| `properties`? | `unknown` |
| `type`?       | `unknown` |

Defined in: [lib/types.ts:1154](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1154)

##### `name?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1160](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1160)

##### `seq?`

> `number`

Defined in: [lib/types.ts:1161](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1161)

##### `url?`

> `string`

Defined in: [lib/types.ts:1162](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1162)

##### `urlPath?`

> `string`

Defined in: [lib/types.ts:1163](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1163)

---

### `EmailTemplate`

#### Properties

##### `\_href?`

> `string`

Format: uri

Defined in: [lib/types.ts:334](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L334)

##### `body?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:335](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L335)

##### `canDisable?`

> `boolean`

###### Description

Can this email template be disabled in the context settings area? Default is `true`.

Defined in: [lib/types.ts:337](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L337)

##### `canEdit?`

> `boolean`

###### Description

Can this email template be edited in the context settings area? Default is `true`.

Defined in: [lib/types.ts:339](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L339)

##### `contextId?`

> `number`

###### Description

The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`.

Defined in: [lib/types.ts:341](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L341)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:342](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L342)

##### `enabled?`

> `boolean`

###### Description

Is this email template enabled? Default is `true`.

Defined in: [lib/types.ts:344](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L344)

##### `fromRoleId?`

> `number`

###### Description

The `ROLE_ID_*` of the user who will send this email.

Defined in: [lib/types.ts:346](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L346)

##### `id?`

> `number`

###### Description

The email template ID.

Defined in: [lib/types.ts:348](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L348)

##### `key?`

> `string`

###### Description

A unique key for this email template.

Defined in: [lib/types.ts:350](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L350)

##### `stageId?`

> `number`

###### Description

The `WORKFLOW_STAGE_ID_*` that email template is associated with or `null` if it is not associated with a stage.

Defined in: [lib/types.ts:352](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L352)

##### `subject?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:353](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L353)

##### `toRoleId?`

> `number`

###### Description

The `ROLE_ID_*` of the user who will receive this email.

Defined in: [lib/types.ts:355](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L355)

---

### `EmailTemplateEditable`

#### Properties

##### `body?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1166](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1166)

##### `contextId?`

> `number`

###### Description

The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`.

Defined in: [lib/types.ts:1168](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1168)

##### `enabled?`

> `boolean`

###### Description

Is this email template enabled? Default is `true`.

Defined in: [lib/types.ts:1170](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1170)

##### `key?`

> `string`

###### Description

A unique key for this email template.

Defined in: [lib/types.ts:1172](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1172)

##### `subject?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1173](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1173)

---

### `EmailTemplateSummary`

#### Properties

##### `\_href?`

> `string`

Format: uri

Defined in: [lib/types.ts:1177](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1177)

##### `body?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1178](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1178)

##### `canDisable?`

> `boolean`

###### Description

Can this email template be disabled in the context settings area? Default is `true`.

Defined in: [lib/types.ts:1180](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1180)

##### `canEdit?`

> `boolean`

###### Description

Can this email template be edited in the context settings area? Default is `true`.

Defined in: [lib/types.ts:1182](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1182)

##### `contextId?`

> `number`

###### Description

The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`.

Defined in: [lib/types.ts:1184](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1184)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1185](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1185)

##### `enabled?`

> `boolean`

###### Description

Is this email template enabled? Default is `true`.

Defined in: [lib/types.ts:1187](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1187)

##### `fromRoleId?`

> `number`

###### Description

The `ROLE_ID_*` of the user who will send this email.

Defined in: [lib/types.ts:1189](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1189)

##### `id?`

> `number`

###### Description

The email template ID.

Defined in: [lib/types.ts:1191](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1191)

##### `key?`

> `string`

###### Description

A unique key for this email template.

Defined in: [lib/types.ts:1193](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1193)

##### `stageId?`

> `number`

###### Description

The `WORKFLOW_STAGE_ID_*` that email template is associated with or `null` if it is not associated with a stage.

Defined in: [lib/types.ts:1195](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1195)

##### `subject?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1196](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1196)

##### `toRoleId?`

> `number`

###### Description

The `ROLE_ID_*` of the user who will receive this email.

Defined in: [lib/types.ts:1198](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1198)

---

### `ErrorResponse`

#### Description

A response object that will be returned when the request could not be fulfilled.

#### Properties

##### `error?`

> `string`

Defined in: [lib/types.ts:329](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L329)

##### `errorMessage?`

> `string`

Defined in: [lib/types.ts:330](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L330)

---

### `Galley`

#### Properties

##### `file?`

> [`SubmissionFile`](modules.md#submissionfile)

Defined in: [lib/types.ts:358](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L358)

##### `id?`

> `number`

Defined in: [lib/types.ts:359](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L359)

##### `isApproved?`

> `boolean`

Defined in: [lib/types.ts:360](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L360)

##### `label?`

> `string`

###### Description

A human-readable label for this galley. For the primary article, it is usually indicates the format like PDF, ePub or full text. For supplementary files it often indicates the content, such as source data or interview transcripts.

Defined in: [lib/types.ts:362](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L362)

##### `locale?`

> `string`

###### Description

The primary locale of this galley.

Defined in: [lib/types.ts:364](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L364)

##### `pub-id::publisher-id?`

> `string`

###### Description

A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present.

Defined in: [lib/types.ts:366](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L366)

##### `publicationId?`

> `number`

Defined in: [lib/types.ts:367](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L367)

##### `seq?`

> `number`

###### Description

In what order this galley should appear in lists of galleys for this publication.

Defined in: [lib/types.ts:369](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L369)

##### `submissionFileId?`

> `number`

Defined in: [lib/types.ts:370](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L370)

##### `urlPath?`

> `string`

###### Description

An optional path to use in the URL instead of the ID.

Defined in: [lib/types.ts:372](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L372)

##### `urlPublished?`

> `string`

###### Description

The URL where this galley can be viewed or downloaded.

Defined in: [lib/types.ts:374](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L374)

##### `urlRemote?`

> `string`

###### Description

An optional URL where the galley can be viewed or downloaded.

Defined in: [lib/types.ts:376](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L376)

---

### `GalleyEditable`

#### Properties

##### `isApproved?`

> `boolean`

Defined in: [lib/types.ts:1201](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1201)

##### `label?`

> `string`

###### Description

A human-readable label for this galley. For the primary article, it is usually indicates the format like PDF, ePub or full text. For supplementary files it often indicates the content, such as source data or interview transcripts.

Defined in: [lib/types.ts:1203](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1203)

##### `locale?`

> `string`

###### Description

The primary locale of this galley.

Defined in: [lib/types.ts:1205](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1205)

##### `pub-id::publisher-id?`

> `string`

###### Description

A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present.

Defined in: [lib/types.ts:1207](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1207)

##### `publicationId?`

> `number`

Defined in: [lib/types.ts:1208](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1208)

##### `seq?`

> `number`

###### Description

In what order this galley should appear in lists of galleys for this publication.

Defined in: [lib/types.ts:1210](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1210)

##### `submissionFileId?`

> `number`

Defined in: [lib/types.ts:1211](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1211)

##### `urlPath?`

> `string`

###### Description

An optional path to use in the URL instead of the ID.

Defined in: [lib/types.ts:1213](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1213)

##### `urlRemote?`

> `string`

###### Description

An optional URL where the galley can be viewed or downloaded.

Defined in: [lib/types.ts:1215](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1215)

---

### `GalleySummary`

#### Properties

##### `file?`

> [`SubmissionFile`](modules.md#submissionfile)

Defined in: [lib/types.ts:1218](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1218)

##### `id?`

> `number`

Defined in: [lib/types.ts:1219](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1219)

##### `isApproved?`

> `boolean`

Defined in: [lib/types.ts:1220](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1220)

##### `label?`

> `string`

###### Description

A human-readable label for this galley. For the primary article, it is usually indicates the format like PDF, ePub or full text. For supplementary files it often indicates the content, such as source data or interview transcripts.

Defined in: [lib/types.ts:1222](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1222)

##### `locale?`

> `string`

###### Description

The primary locale of this galley.

Defined in: [lib/types.ts:1224](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1224)

##### `pub-id::publisher-id?`

> `string`

###### Description

A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present.

Defined in: [lib/types.ts:1226](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1226)

##### `publicationId?`

> `number`

Defined in: [lib/types.ts:1227](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1227)

##### `seq?`

> `number`

###### Description

In what order this galley should appear in lists of galleys for this publication.

Defined in: [lib/types.ts:1229](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1229)

##### `submissionFileId?`

> `number`

Defined in: [lib/types.ts:1230](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1230)

##### `urlPublished?`

> `string`

###### Description

The URL where this galley can be viewed or downloaded.

Defined in: [lib/types.ts:1232](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1232)

##### `urlRemote?`

> `string`

###### Description

An optional URL where the galley can be viewed or downloaded.

Defined in: [lib/types.ts:1234](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1234)

---

### `InvalidParametersResponse`

#### Description

A response object that will be returned when there are validation errors for the request parameters. Typically used with forms.

#### Example

```ts
{
 *   "name": [
 *     "You must provide a name to create a new user."
 *   ],
 *   "roles": [
 *     "You must assign the user to one or more roles."
 *   ]
 * }
```

#### Indexable

[`key`: `string`]: `unknown`

---

### `Issue`

#### Properties

##### `\_href?`

> `string`

Defined in: [lib/types.ts:393](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L393)

##### `articles?`

> [`SubmissionSummary`](modules.md#submissionsummary)[]

Defined in: [lib/types.ts:394](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L394)

##### `coverImageAltText?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:395](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L395)

##### `coverImageUrl?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:396](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L396)

##### `dateNotified?`

> `string`

Defined in: [lib/types.ts:397](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L397)

##### `datePublished?`

> `string`

Defined in: [lib/types.ts:398](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L398)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:399](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L399)

##### `doi?`

> `string`

Defined in: [lib/types.ts:400](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L400)

##### `galleys?`

> [`Galley`](modules.md#galley)[]

Defined in: [lib/types.ts:401](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L401)

##### `id?`

> `number`

Defined in: [lib/types.ts:402](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L402)

##### `identification?`

> `string`

Defined in: [lib/types.ts:403](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L403)

##### `isCurrent?`

> `boolean`

Defined in: [lib/types.ts:404](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L404)

##### `lastModified?`

> `string`

Defined in: [lib/types.ts:405](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L405)

##### `number?`

> `string`

Defined in: [lib/types.ts:406](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L406)

##### `publishedUrl?`

> `string`

Defined in: [lib/types.ts:407](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L407)

##### `sections?`

> [`SectionSummary`](modules.md#sectionsummary)[]

Defined in: [lib/types.ts:408](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L408)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:409](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L409)

##### `urlPath?`

> `string`

###### Description

An optional path to use in the URL instead of the ID.

Defined in: [lib/types.ts:411](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L411)

##### `volume?`

> `number`

Defined in: [lib/types.ts:412](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L412)

##### `year?`

> `number`

Defined in: [lib/types.ts:413](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L413)

---

### `IssueEditable`

#### Properties

##### `coverImageAltText?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1237](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1237)

##### `coverImageUrl?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1238](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1238)

##### `dateNotified?`

> `string`

Defined in: [lib/types.ts:1239](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1239)

##### `datePublished?`

> `string`

Defined in: [lib/types.ts:1240](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1240)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1241](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1241)

##### `doi?`

> `string`

Defined in: [lib/types.ts:1242](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1242)

##### `id?`

> `number`

Defined in: [lib/types.ts:1243](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1243)

##### `lastModified?`

> `string`

Defined in: [lib/types.ts:1244](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1244)

##### `number?`

> `string`

Defined in: [lib/types.ts:1245](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1245)

##### `publishedUrl?`

> `string`

Defined in: [lib/types.ts:1246](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1246)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1247](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1247)

##### `urlPath?`

> `string`

###### Description

An optional path to use in the URL instead of the ID.

Defined in: [lib/types.ts:1249](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1249)

##### `volume?`

> `number`

Defined in: [lib/types.ts:1250](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1250)

##### `year?`

> `number`

Defined in: [lib/types.ts:1251](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1251)

---

### `IssueSummary`

#### Properties

##### `\_href?`

> `string`

Defined in: [lib/types.ts:1254](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1254)

##### `coverImageAltText?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1255](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1255)

##### `coverImageUrl?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1256](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1256)

##### `datePublished?`

> `string`

Defined in: [lib/types.ts:1257](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1257)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1258](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1258)

##### `galleys?`

> [`Galley`](modules.md#galley)[]

Defined in: [lib/types.ts:1259](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1259)

##### `id?`

> `number`

Defined in: [lib/types.ts:1260](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1260)

##### `identification?`

> `string`

Defined in: [lib/types.ts:1261](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1261)

##### `number?`

> `string`

Defined in: [lib/types.ts:1262](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1262)

##### `publishedUrl?`

> `string`

Defined in: [lib/types.ts:1263](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1263)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1264](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1264)

##### `volume?`

> `number`

Defined in: [lib/types.ts:1265](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1265)

##### `year?`

> `number`

Defined in: [lib/types.ts:1266](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1266)

---

### `LocaleObject`

#### Description

Key/value pairs containing data stored by locale key.

#### Example

```ts
{
 *   "en_US": "Filename",
 *   "fr_CA": "Nom de fichier"
 * }
```

#### Indexable

[`key`: `string`]: `unknown`

---

### `Publication`

#### Properties

##### `\_href?`

> `string`

Format: uri

Defined in: [lib/types.ts:427](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L427)

##### `abstract?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:428](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L428)

##### `accessStatus?`

> `number`

###### Default

0

Defined in: [lib/types.ts:430](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L430)

##### `authors?`

> [`Author`](modules.md#author)[]

###### Description

A list of the authors for this publication.

Defined in: [lib/types.ts:432](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L432)

##### `authorsString?`

> `string`

###### Description

All of the authors rendered with the appropriate separators according to the locale.

Defined in: [lib/types.ts:434](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L434)

##### `authorsStringShort?`

> `string`

###### Description

A shortened version of the authors rendered with the appropriate separators according to the locale.

Defined in: [lib/types.ts:436](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L436)

##### `categoryIds?`

> `number`[]

Defined in: [lib/types.ts:437](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L437)

##### `citations?`

> `string`[]

###### Description

Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text.

Defined in: [lib/types.ts:439](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L439)

##### `citationsRaw?`

> `string`

###### Description

Optional metadata that contains references for works cited in this submission as raw text.

Defined in: [lib/types.ts:441](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L441)

##### `copyrightHolder?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:442](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L442)

##### `copyrightYear?`

> `number`

###### Description

The copyright year for this publication.

Defined in: [lib/types.ts:444](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L444)

##### `coverImage?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        uploadName?: string;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        uploadName?: string;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                | Type      |
| :-------------------- | :-------- |
| `en_US`?              | `object`  |
| `en_US.altText`?      | `string`  |
| `en_US.dateUploaded`? | `string`  |
| `en_US.uploadName`?   | `string`  |
| `fr_CA`?              | `object`  |
| `fr_CA.altText`?      | `string`  |
| `fr_CA.dateUploaded`? | `string`  |
| `fr_CA.uploadName`?   | `string`  |
| `properties`?         | `unknown` |
| `type`?               | `unknown` |

Defined in: [lib/types.ts:445](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L445)

##### `coverage?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:459](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L459)

##### `datePublished?`

> `string`

Defined in: [lib/types.ts:460](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L460)

##### `disciplines?`

> `string`[]

###### Description

Optional metadata that describes the submission's types of study or branches of knowledge.

Defined in: [lib/types.ts:462](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L462)

##### `fullTitle?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:463](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L463)

##### `galleys?`

> [`Galley`](modules.md#galley)[]

Defined in: [lib/types.ts:464](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L464)

##### `hideAuthor?`

> `boolean`

###### Description

Whether the contributor details should be displayed for this publication. Commonly used for editorial statements without individual authorship.

###### Default

false

Defined in: [lib/types.ts:469](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L469)

##### `id?`

> `number`

Defined in: [lib/types.ts:470](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L470)

##### `issueId?`

> `number`

Defined in: [lib/types.ts:471](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L471)

##### `keywords?`

> `string`[]

###### Description

Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission.

Defined in: [lib/types.ts:473](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L473)

##### `languages?`

> `string`[]

###### Description

Optional metadata that identifies the submission's primary language.

Defined in: [lib/types.ts:475](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L475)

##### `lastModified?`

> `string`

Defined in: [lib/types.ts:476](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L476)

##### `licenseUrl?`

> `string`

###### Description

A URL to a webpage describing the license terms for this publication.

Defined in: [lib/types.ts:478](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L478)

##### `locale?`

> `string`

###### Description

The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property.

Defined in: [lib/types.ts:480](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L480)

##### `pages?`

> `string`

###### Description

The pages of the issue in which this article appears if it is published in a physical format.

Defined in: [lib/types.ts:482](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L482)

##### `prefix?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:483](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L483)

##### `primaryContactId?`

> `number`

###### Description

Which `contributor` is the primary contact for this publication.

Defined in: [lib/types.ts:485](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L485)

##### `pub-id::publisher-id?`

> `string`

###### Description

A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present.

Defined in: [lib/types.ts:487](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L487)

##### `rights?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:488](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L488)

##### `sectionId?`

> `number`

Defined in: [lib/types.ts:489](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L489)

##### `seq?`

> `number`

###### Default

0

Defined in: [lib/types.ts:491](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L491)

##### `source?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:492](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L492)

##### `status?`

> `number`

###### Description

Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.

###### Default

1

Defined in: [lib/types.ts:497](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L497)

##### `subjects?`

> `string`[]

###### Description

Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics.

Defined in: [lib/types.ts:499](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L499)

##### `submissionId?`

> `number`

Defined in: [lib/types.ts:500](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L500)

##### `subtitle?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:501](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L501)

##### `supportingAgencies?`

> `string`[]

###### Description

Optional metadata that indicates the source of research funding or other institutional support.

Defined in: [lib/types.ts:503](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L503)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:504](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L504)

##### `type?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:505](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L505)

##### `urlPath?`

> `string`

###### Description

An optional path to use in the URL instead of the ID.

Defined in: [lib/types.ts:507](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L507)

##### `urlPublished?`

> `string`

###### Description

The public URL for this publication or where it will be available if it has not yet been published.

Defined in: [lib/types.ts:509](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L509)

##### `version?`

> `number`

###### Description

The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them.

Defined in: [lib/types.ts:511](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L511)

---

### `PublicationEditable`

#### Properties

##### `abstract?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1269](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1269)

##### `accessStatus?`

> `number`

###### Default

0

Defined in: [lib/types.ts:1271](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1271)

##### `categoryIds?`

> `number`[]

Defined in: [lib/types.ts:1272](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1272)

##### `citationsRaw?`

> `string`

###### Description

Optional metadata that contains references for works cited in this submission as raw text.

Defined in: [lib/types.ts:1274](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1274)

##### `copyrightHolder?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1275](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1275)

##### `copyrightYear?`

> `number`

###### Description

The copyright year for this publication.

Defined in: [lib/types.ts:1277](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1277)

##### `coverImage?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        temporaryFileId?: number;
        uploadName?: string;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        temporaryFileId?: number;
        uploadName?: string;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                   | Type      |
| :----------------------- | :-------- |
| `en_US`?                 | `object`  |
| `en_US.altText`?         | `string`  |
| `en_US.dateUploaded`?    | `string`  |
| `en_US.temporaryFileId`? | `number`  |
| `en_US.uploadName`?      | `string`  |
| `fr_CA`?                 | `object`  |
| `fr_CA.altText`?         | `string`  |
| `fr_CA.dateUploaded`?    | `string`  |
| `fr_CA.temporaryFileId`? | `number`  |
| `fr_CA.uploadName`?      | `string`  |
| `properties`?            | `unknown` |
| `type`?                  | `unknown` |

Defined in: [lib/types.ts:1278](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1278)

##### `coverage?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1294](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1294)

##### `datePublished?`

> `string`

Defined in: [lib/types.ts:1295](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1295)

##### `disciplines?`

> `string`[]

###### Description

Optional metadata that describes the submission's types of study or branches of knowledge.

Defined in: [lib/types.ts:1297](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1297)

##### `hideAuthor?`

> `boolean`

###### Description

Whether the contributor details should be displayed for this publication. Commonly used for editorial statements without individual authorship.

###### Default

false

Defined in: [lib/types.ts:1302](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1302)

##### `issueId?`

> `number`

Defined in: [lib/types.ts:1303](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1303)

##### `keywords?`

> `string`[]

###### Description

Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission.

Defined in: [lib/types.ts:1305](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1305)

##### `languages?`

> `string`[]

###### Description

Optional metadata that identifies the submission's primary language.

Defined in: [lib/types.ts:1307](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1307)

##### `lastModified?`

> `string`

Defined in: [lib/types.ts:1308](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1308)

##### `licenseUrl?`

> `string`

###### Description

A URL to a webpage describing the license terms for this publication.

Defined in: [lib/types.ts:1310](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1310)

##### `pages?`

> `string`

###### Description

The pages of the issue in which this article appears if it is published in a physical format.

Defined in: [lib/types.ts:1312](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1312)

##### `prefix?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1313](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1313)

##### `primaryContactId?`

> `number`

###### Description

Which `contributor` is the primary contact for this publication.

Defined in: [lib/types.ts:1315](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1315)

##### `pub-id::publisher-id?`

> `string`

###### Description

A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present.

Defined in: [lib/types.ts:1317](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1317)

##### `rights?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1318](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1318)

##### `sectionId?`

> `number`

Defined in: [lib/types.ts:1319](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1319)

##### `seq?`

> `number`

###### Default

0

Defined in: [lib/types.ts:1321](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1321)

##### `source?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1322](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1322)

##### `status?`

> `number`

###### Description

Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.

###### Default

1

Defined in: [lib/types.ts:1327](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1327)

##### `subjects?`

> `string`[]

###### Description

Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics.

Defined in: [lib/types.ts:1329](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1329)

##### `submissionId?`

> `number`

Defined in: [lib/types.ts:1330](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1330)

##### `subtitle?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1331](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1331)

##### `supportingAgencies?`

> `string`[]

###### Description

Optional metadata that indicates the source of research funding or other institutional support.

Defined in: [lib/types.ts:1333](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1333)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1334](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1334)

##### `type?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1335](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1335)

##### `urlPath?`

> `string`

###### Description

An optional path to use in the URL instead of the ID.

Defined in: [lib/types.ts:1337](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1337)

##### `version?`

> `number`

###### Description

The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them.

Defined in: [lib/types.ts:1339](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1339)

---

### `PublicationStats`

#### Description

The total abstract and galley views for a published submission.

#### Properties

##### `abstractViews?`

> `number`

Defined in: [lib/types.ts:515](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L515)

##### `galleyViews?`

> `number`

Defined in: [lib/types.ts:516](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L516)

##### `htmlViews?`

> `number`

Defined in: [lib/types.ts:518](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L518)

##### `otherViews?`

> `number`

Defined in: [lib/types.ts:519](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L519)

##### `pdfViews?`

> `number`

Defined in: [lib/types.ts:517](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L517)

##### `publication?`

> `object`

```ts
{
    _href?: string;
    fullTitle?: LocaleObject;
    id?: number;
    shortAuthorString?: string;
    urlPublished?: string;
    urlWorkflow?: string;
}
```

###### Type declaration

| Member               | Type                                      |
| :------------------- | :---------------------------------------- |
| `_href`?             | `string`                                  |
| `fullTitle`?         | [`LocaleObject`](modules.md#localeobject) |
| `id`?                | `number`                                  |
| `shortAuthorString`? | `string`                                  |
| `urlPublished`?      | `string`                                  |
| `urlWorkflow`?       | `string`                                  |

Defined in: [lib/types.ts:520](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L520)

---

### `PublicationSummary`

#### Properties

##### `\_href?`

> `string`

Format: uri

Defined in: [lib/types.ts:1343](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1343)

##### `authorsString?`

> `string`

###### Description

All of the authors rendered with the appropriate separators according to the locale.

Defined in: [lib/types.ts:1345](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1345)

##### `authorsStringShort?`

> `string`

###### Description

A shortened version of the authors rendered with the appropriate separators according to the locale.

Defined in: [lib/types.ts:1347](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1347)

##### `categoryIds?`

> `number`[]

Defined in: [lib/types.ts:1348](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1348)

##### `coverImage?`

> `object`

```ts
{
    en_US?: {
    };
    fr_CA?: {
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member        | Type      |
| :------------ | :-------- |
| `en_US`?      | { }       |
| `fr_CA`?      | { }       |
| `properties`? | `unknown` |
| `type`?       | `unknown` |

Defined in: [lib/types.ts:1349](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1349)

##### `datePublished?`

> `string`

Defined in: [lib/types.ts:1355](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1355)

##### `fullTitle?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1356](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1356)

##### `galleys?`

> [`Galley`](modules.md#galley)[]

Defined in: [lib/types.ts:1357](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1357)

##### `id?`

> `number`

Defined in: [lib/types.ts:1358](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1358)

##### `locale?`

> `string`

###### Description

The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property.

Defined in: [lib/types.ts:1360](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1360)

##### `pages?`

> `string`

###### Description

The pages of the issue in which this article appears if it is published in a physical format.

Defined in: [lib/types.ts:1362](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1362)

##### `prefix?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1363](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1363)

##### `primaryContactId?`

> `number`

###### Description

Which `contributor` is the primary contact for this publication.

Defined in: [lib/types.ts:1365](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1365)

##### `pub-id::publisher-id?`

> `string`

###### Description

A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present.

Defined in: [lib/types.ts:1367](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1367)

##### `sectionId?`

> `number`

Defined in: [lib/types.ts:1368](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1368)

##### `status?`

> `number`

###### Description

Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.

###### Default

1

Defined in: [lib/types.ts:1373](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1373)

##### `submissionId?`

> `number`

Defined in: [lib/types.ts:1374](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1374)

##### `subtitle?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1375](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1375)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1376](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1376)

##### `urlPublished?`

> `string`

###### Description

The public URL for this publication or where it will be available if it has not yet been published.

Defined in: [lib/types.ts:1378](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1378)

##### `version?`

> `number`

###### Description

The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them.

Defined in: [lib/types.ts:1380](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1380)

---

### `ReviewRound`

#### Properties

##### `id?`

> `number`

Defined in: [lib/types.ts:530](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L530)

##### `round?`

> `number`

Defined in: [lib/types.ts:531](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L531)

##### `stageId?`

> `number`

Defined in: [lib/types.ts:532](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L532)

##### `status?`

> `string`

Defined in: [lib/types.ts:533](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L533)

##### `statusId?`

> `number`

Defined in: [lib/types.ts:534](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L534)

---

### `ReviewRoundEditable`

#### Properties

##### `id?`

> `number`

Defined in: [lib/types.ts:1383](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1383)

##### `round?`

> `number`

Defined in: [lib/types.ts:1384](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1384)

##### `stageId?`

> `number`

Defined in: [lib/types.ts:1385](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1385)

##### `statusId?`

> `number`

Defined in: [lib/types.ts:1386](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1386)

---

### `ReviewerSummary`

#### Description

A special representation of a User assigned to a reviewer group. This model presents specific details about review activity.

#### Properties

##### `\_href?`

> `string`

Defined in: [lib/types.ts:538](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L538)

##### `affiliation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:539](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L539)

##### `averageReviewCompletionDays?`

> `number`

Defined in: [lib/types.ts:540](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L540)

##### `dateLastReviewAssignment?`

> `string`

Defined in: [lib/types.ts:541](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L541)

##### `disabled?`

> `boolean`

Defined in: [lib/types.ts:542](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L542)

##### `fullName?`

> `string`

Defined in: [lib/types.ts:543](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L543)

##### `gossip?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:544](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L544)

##### `groups?`

> [`UserGroup`](modules.md#usergroup)[]

Defined in: [lib/types.ts:545](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L545)

##### `id?`

> `number`

Defined in: [lib/types.ts:546](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L546)

##### `interests?`

> [`UserInterest`](modules.md#userinterest)[]

Defined in: [lib/types.ts:547](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L547)

##### `reviewsActive?`

> `number`

Defined in: [lib/types.ts:548](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L548)

##### `reviewsCancelled?`

> `number`

Defined in: [lib/types.ts:550](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L550)

##### `reviewsCompleted?`

> `number`

Defined in: [lib/types.ts:549](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L549)

##### `reviewsDeclined?`

> `number`

Defined in: [lib/types.ts:551](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L551)

##### `userName?`

> `string`

Defined in: [lib/types.ts:552](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L552)

---

### `Section`

#### Properties

##### `abbrev?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:555](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L555)

##### `id?`

> `number`

Defined in: [lib/types.ts:556](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L556)

##### `seq?`

> `number`

Defined in: [lib/types.ts:557](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L557)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:558](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L558)

---

### `SectionEditable`

#### Properties

##### `abbrev?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1389](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1389)

##### `id?`

> `number`

Defined in: [lib/types.ts:1390](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1390)

##### `seq?`

> `number`

Defined in: [lib/types.ts:1391](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1391)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1392](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1392)

---

### `SectionSummary`

#### Properties

##### `abbrev?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1395](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1395)

##### `id?`

> `number`

Defined in: [lib/types.ts:1396](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1396)

##### `seq?`

> `number`

Defined in: [lib/types.ts:1397](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1397)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1398](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1398)

---

### `Site`

#### Properties

##### `about?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:561](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L561)

##### `contactEmail?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:562](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L562)

##### `contactName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:563](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L563)

##### `enableBulkEmails?`

> `number`[]

###### Description

Which hosted journals, presses or preprint servers are allowed to send bulk emails.

Defined in: [lib/types.ts:565](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L565)

##### `installedLocales?`

> `string`[]

Defined in: [lib/types.ts:566](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L566)

##### `minPasswordLength?`

> `number`

Defined in: [lib/types.ts:567](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L567)

##### `pageFooter?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:568](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L568)

##### `pageHeaderTitleImage?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                | Type      |
| :-------------------- | :-------- |
| `en_US`?              | `object`  |
| `en_US.altText`?      | `string`  |
| `en_US.dateUploaded`? | `string`  |
| `en_US.height`?       | `number`  |
| `en_US.name`?         | `string`  |
| `en_US.uploadName`?   | `string`  |
| `en_US.width`?        | `number`  |
| `fr_CA`?              | `object`  |
| `fr_CA.altText`?      | `string`  |
| `fr_CA.dateUploaded`? | `string`  |
| `fr_CA.height`?       | `number`  |
| `fr_CA.name`?         | `string`  |
| `fr_CA.uploadName`?   | `string`  |
| `fr_CA.width`?        | `number`  |
| `properties`?         | `unknown` |
| `type`?               | `unknown` |

Defined in: [lib/types.ts:569](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L569)

##### `primaryLocale?`

> `string`

Defined in: [lib/types.ts:589](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L589)

##### `privacyStatement?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:590](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L590)

##### `redirect?`

> `number`

Defined in: [lib/types.ts:591](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L591)

##### `sidebar?`

> `string`[]

Defined in: [lib/types.ts:592](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L592)

##### `styleSheet?`

> `object`

```ts
{
    dateUploaded?: string;
    name?: string;
    uploadName?: string;
}
```

###### Type declaration

| Member          | Type     |
| :-------------- | :------- |
| `dateUploaded`? | `string` |
| `name`?         | `string` |
| `uploadName`?   | `string` |

Defined in: [lib/types.ts:593](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L593)

##### `supportedLocales?`

> `string`[]

Defined in: [lib/types.ts:598](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L598)

##### `themePluginPath?`

> `string`

###### Default

default

Defined in: [lib/types.ts:600](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L600)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:601](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L601)

---

### `SiteEditable`

#### Properties

##### `about?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1401](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1401)

##### `contactEmail?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1402](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1402)

##### `contactName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1403](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1403)

##### `enableBulkEmails?`

> `number`[]

###### Description

Which hosted journals, presses or preprint servers are allowed to send bulk emails.

Defined in: [lib/types.ts:1405](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1405)

##### `installedLocales?`

> `string`[]

Defined in: [lib/types.ts:1406](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1406)

##### `minPasswordLength?`

> `number`

Defined in: [lib/types.ts:1407](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1407)

##### `pageFooter?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1408](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1408)

##### `pageHeaderTitleImage?`

> `object`

```ts
{
    en_US?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    fr_CA?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    properties?: unknown;
    type?: unknown;
}
```

###### Type declaration

| Member                   | Type      |
| :----------------------- | :-------- |
| `en_US`?                 | `object`  |
| `en_US.altText`?         | `string`  |
| `en_US.dateUploaded`?    | `string`  |
| `en_US.height`?          | `number`  |
| `en_US.name`?            | `string`  |
| `en_US.temporaryFileId`? | `number`  |
| `en_US.uploadName`?      | `string`  |
| `en_US.width`?           | `number`  |
| `fr_CA`?                 | `object`  |
| `fr_CA.altText`?         | `string`  |
| `fr_CA.dateUploaded`?    | `string`  |
| `fr_CA.height`?          | `number`  |
| `fr_CA.name`?            | `string`  |
| `fr_CA.temporaryFileId`? | `number`  |
| `fr_CA.uploadName`?      | `string`  |
| `fr_CA.width`?           | `number`  |
| `properties`?            | `unknown` |
| `type`?                  | `unknown` |

Defined in: [lib/types.ts:1409](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1409)

##### `primaryLocale?`

> `string`

Defined in: [lib/types.ts:1431](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1431)

##### `privacyStatement?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1432](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1432)

##### `redirect?`

> `number`

Defined in: [lib/types.ts:1433](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1433)

##### `sidebar?`

> `string`[]

Defined in: [lib/types.ts:1434](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1434)

##### `styleSheet?`

> `object`

```ts
{
    dateUploaded?: string;
    name?: string;
    temporaryFileId?: number;
    uploadName?: string;
}
```

###### Type declaration

| Member             | Type     |
| :----------------- | :------- |
| `dateUploaded`?    | `string` |
| `name`?            | `string` |
| `temporaryFileId`? | `number` |
| `uploadName`?      | `string` |

Defined in: [lib/types.ts:1435](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1435)

##### `supportedLocales?`

> `string`[]

Defined in: [lib/types.ts:1441](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1441)

##### `themePluginPath?`

> `string`

###### Default

default

Defined in: [lib/types.ts:1443](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1443)

##### `title?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1444](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1444)

---

### `Submission`

#### Properties

##### `\_href?`

> `string`

Defined in: [lib/types.ts:604](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L604)

##### `contextId?`

> `number`

Defined in: [lib/types.ts:605](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L605)

##### `currentPublicationId?`

> `number`

###### Description

Which publication is the latest published version.

Defined in: [lib/types.ts:607](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L607)

##### `dateLastActivity?`

> `string`

###### Description

The last time activity was recorded related to this submission.

Defined in: [lib/types.ts:609](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L609)

##### `dateSubmitted?`

> `string`

Defined in: [lib/types.ts:610](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L610)

##### `id?`

> `number`

Defined in: [lib/types.ts:611](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L611)

##### `lastModified?`

> `string`

###### Description

The last time a modification was made to this submission or any of its associated objects.

Defined in: [lib/types.ts:613](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L613)

##### `locale?`

> `string`

###### Description

The primary language of this submission.

Defined in: [lib/types.ts:615](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L615)

##### `publications?`

> [`Publication`](modules.md#publication)[]

###### Description

A list of publications that have been created for this submission.

Defined in: [lib/types.ts:617](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L617)

##### `reviewAssignments?`

> {
> `dateDue`?: `number`;
> `dateResponseDue`?: `number`;
> `id`?: `number`;
> `isCurrentUserAssigned`?: `number`;
> `reviewRoundId`?: `number`;
> `round`?: `number`;
> `status`?: `number`;
> `statusLabel`?: `number`;
> }[]

###### Description

Information about pending and completed review assignments.

Defined in: [lib/types.ts:619](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L619)

##### `reviewRounds?`

> [`ReviewRound`](modules.md#reviewround)[]

###### Description

A list of review rounds that have been opened for this submission.

Defined in: [lib/types.ts:630](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L630)

##### `stageId?`

> `number`

###### Description

The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.

###### Default

1

Defined in: [lib/types.ts:635](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L635)

##### `stages?`

> {
> `currentUserAssignedRoles`?: `number`[];
> `files`?: {
> `count`?: `number`;
> };
> `id`?: `number`;
> `isActiveStage`?: `boolean`;
> `label`?: `string`;
> `queries`?: `unknown`[];
> `status`?: `string`;
> `statusId`?: `number`;
> }[]

###### Description

Key data about the status, files and discussions of each stage.

Defined in: [lib/types.ts:637](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L637)

##### `status?`

> `number`

###### Description

Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.

###### Default

1

Defined in: [lib/types.ts:653](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L653)

##### `statusLabel?`

> `string`

###### Description

A human-readable version of the submission's status. It will be Published, Declined, Queued (still in the workflow) or Scheduled.

Defined in: [lib/types.ts:655](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L655)

##### `submissionProgress?`

> `number`

###### Description

This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.

###### Default

1

Defined in: [lib/types.ts:660](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L660)

##### `urlAuthorWorkflow?`

> `string`

###### Description

A URL to the author's editorial workflow.

Defined in: [lib/types.ts:662](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L662)

##### `urlEditorialWorkflow?`

> `string`

###### Description

A URL to the editors' and assistants' editorial workflow.

Defined in: [lib/types.ts:664](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L664)

##### `urlPublished?`

> `string`

###### Description

A URL to the current publication or where it will be published.

Defined in: [lib/types.ts:666](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L666)

##### `urlWorkflow?`

> `string`

###### Description

A URL to the workflow most appropriate for the current user. It will match the `urlAuthorWorkflow` or \`urlEditorialWorkflow.

Defined in: [lib/types.ts:668](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L668)

---

### `SubmissionEditable`

#### Properties

##### `contextId?`

> `number`

Defined in: [lib/types.ts:1447](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1447)

##### `currentPublicationId?`

> `number`

###### Description

Which publication is the latest published version.

Defined in: [lib/types.ts:1449](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1449)

##### `dateLastActivity?`

> `string`

###### Description

The last time activity was recorded related to this submission.

Defined in: [lib/types.ts:1451](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1451)

##### `dateSubmitted?`

> `string`

Defined in: [lib/types.ts:1452](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1452)

##### `id?`

> `number`

Defined in: [lib/types.ts:1453](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1453)

##### `lastModified?`

> `string`

###### Description

The last time a modification was made to this submission or any of its associated objects.

Defined in: [lib/types.ts:1455](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1455)

##### `locale?`

> `string`

###### Description

The primary language of this submission.

Defined in: [lib/types.ts:1457](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1457)

##### `stageId?`

> `number`

###### Description

The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.

###### Default

1

Defined in: [lib/types.ts:1462](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1462)

##### `status?`

> `number`

###### Description

Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.

###### Default

1

Defined in: [lib/types.ts:1467](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1467)

##### `submissionProgress?`

> `number`

###### Description

This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.

###### Default

1

Defined in: [lib/types.ts:1472](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1472)

---

### `SubmissionFile`

#### Properties

##### `\_href?`

> `string`

Format: uri

Defined in: [lib/types.ts:672](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L672)

##### `assocId?`

> `number`

###### Description

Used with `assocType` to associate this file with an object such as a galley.

Defined in: [lib/types.ts:674](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L674)

##### `assocType?`

> `number`

###### Description

Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round).

Defined in: [lib/types.ts:676](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L676)

##### `caption?`

> `string`

###### Description

A caption for this file. Used with artwork such as images.

Defined in: [lib/types.ts:678](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L678)

##### `copyrightOwner?`

> `string`

###### Description

The copyright owner of this file. Used with artwork such as images.

Defined in: [lib/types.ts:680](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L680)

##### `createdAt?`

> `string`

###### Description

The date this submission file object was created in the system. Set automatically by the software.

Defined in: [lib/types.ts:682](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L682)

##### `creator?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:683](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L683)

##### `credit?`

> `string`

###### Description

An attribution for this file, such as a photographer's name. Used with artwork such as images.

Defined in: [lib/types.ts:685](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L685)

##### `dateCreated?`

> `string`

###### Description

Public metadata about when this content was created. Used with supplementary files.

Defined in: [lib/types.ts:687](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L687)

##### `dependentFiles?`

> [`SubmissionFile`](modules.md#submissionfile)[]

###### Description

Any dependent files, typically images or audio files that are loaded by an HTML file.

Defined in: [lib/types.ts:689](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L689)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:690](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L690)

##### `documentType?`

> `string`

Defined in: [lib/types.ts:691](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L691)

##### `fileId?`

> `number`

Defined in: [lib/types.ts:692](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L692)

##### `fileStage?`

> `number`

Defined in: [lib/types.ts:693](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L693)

##### `genreId?`

> `number`

Defined in: [lib/types.ts:694](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L694)

##### `id?`

> `number`

Defined in: [lib/types.ts:695](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L695)

##### `language?`

> `string`

###### Description

The language of this file if it contains text. Used with supplementary files.

Defined in: [lib/types.ts:697](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L697)

##### `locale?`

> `string`

###### Description

The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property.

Defined in: [lib/types.ts:699](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L699)

##### `mimetype?`

> `string`

Defined in: [lib/types.ts:700](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L700)

##### `name?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:701](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L701)

##### `path?`

> `string`

Defined in: [lib/types.ts:702](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L702)

##### `publisher?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:703](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L703)

##### `revisions?`

> {
> `documentType`?: `string`;
> `fileId`?: `number`;
> `mimetype`?: `string`;
> `path`?: `string`;
> `url`?: `string`;
> }[]

###### Description

Previous versions of this file.

Defined in: [lib/types.ts:705](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L705)

##### `source?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:712](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L712)

##### `sourceSubmissionFileId?`

> `number`

###### Description

When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`.

Defined in: [lib/types.ts:714](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L714)

##### `sponsor?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:715](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L715)

##### `subject?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:716](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L716)

##### `submissionId?`

> `number`

Defined in: [lib/types.ts:717](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L717)

##### `terms?`

> `string`

###### Description

Licensing terms for this file. Used with artwork such as images.

Defined in: [lib/types.ts:719](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L719)

##### `updatedAt?`

> `string`

###### Description

When this object was last updated.

Defined in: [lib/types.ts:721](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L721)

##### `uploaderUserId?`

> `number`

Defined in: [lib/types.ts:722](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L722)

##### `url?`

> `string`

Defined in: [lib/types.ts:723](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L723)

##### `viewable?`

> `boolean`

Defined in: [lib/types.ts:724](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L724)

---

### `SubmissionFileEditable`

#### Properties

##### `assocId?`

> `number`

###### Description

Used with `assocType` to associate this file with an object such as a galley.

Defined in: [lib/types.ts:1517](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1517)

##### `assocType?`

> `number`

###### Description

Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round).

Defined in: [lib/types.ts:1519](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1519)

##### `caption?`

> `string`

###### Description

A caption for this file. Used with artwork such as images.

Defined in: [lib/types.ts:1521](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1521)

##### `copyrightOwner?`

> `string`

###### Description

The copyright owner of this file. Used with artwork such as images.

Defined in: [lib/types.ts:1523](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1523)

##### `createdAt?`

> `string`

###### Description

The date this submission file object was created in the system. Set automatically by the software.

Defined in: [lib/types.ts:1525](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1525)

##### `creator?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1526](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1526)

##### `credit?`

> `string`

###### Description

An attribution for this file, such as a photographer's name. Used with artwork such as images.

Defined in: [lib/types.ts:1528](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1528)

##### `dateCreated?`

> `string`

###### Description

Public metadata about when this content was created. Used with supplementary files.

Defined in: [lib/types.ts:1530](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1530)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1531](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1531)

##### `file?`

> `string`

Format: binary

Defined in: [lib/types.ts:1533](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1533)

##### `fileId?`

> `number`

Defined in: [lib/types.ts:1534](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1534)

##### `fileStage?`

> `number`

Defined in: [lib/types.ts:1535](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1535)

##### `genreId?`

> `number`

Defined in: [lib/types.ts:1536](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1536)

##### `language?`

> `string`

###### Description

The language of this file if it contains text. Used with supplementary files.

Defined in: [lib/types.ts:1538](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1538)

##### `name?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1539](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1539)

##### `publisher?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1540](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1540)

##### `source?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1541](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1541)

##### `sourceSubmissionFileId?`

> `number`

###### Description

When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`.

Defined in: [lib/types.ts:1543](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1543)

##### `sponsor?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1544](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1544)

##### `subject?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1545](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1545)

##### `submissionId?`

> `number`

Defined in: [lib/types.ts:1546](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1546)

##### `terms?`

> `string`

###### Description

Licensing terms for this file. Used with artwork such as images.

Defined in: [lib/types.ts:1548](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1548)

##### `updatedAt?`

> `string`

###### Description

When this object was last updated.

Defined in: [lib/types.ts:1550](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1550)

##### `uploaderUserId?`

> `number`

Defined in: [lib/types.ts:1551](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1551)

##### `viewable?`

> `boolean`

Defined in: [lib/types.ts:1552](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1552)

---

### `SubmissionFileSummary`

#### Properties

##### `\_href?`

> `string`

Format: uri

Defined in: [lib/types.ts:1556](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1556)

##### `assocId?`

> `number`

###### Description

Used with `assocType` to associate this file with an object such as a galley.

Defined in: [lib/types.ts:1558](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1558)

##### `assocType?`

> `number`

###### Description

Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round).

Defined in: [lib/types.ts:1560](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1560)

##### `caption?`

> `string`

###### Description

A caption for this file. Used with artwork such as images.

Defined in: [lib/types.ts:1562](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1562)

##### `copyrightOwner?`

> `string`

###### Description

The copyright owner of this file. Used with artwork such as images.

Defined in: [lib/types.ts:1564](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1564)

##### `createdAt?`

> `string`

###### Description

The date this submission file object was created in the system. Set automatically by the software.

Defined in: [lib/types.ts:1566](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1566)

##### `creator?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1567](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1567)

##### `credit?`

> `string`

###### Description

An attribution for this file, such as a photographer's name. Used with artwork such as images.

Defined in: [lib/types.ts:1569](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1569)

##### `dateCreated?`

> `string`

###### Description

Public metadata about when this content was created. Used with supplementary files.

Defined in: [lib/types.ts:1571](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1571)

##### `description?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1572](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1572)

##### `documentType?`

> `string`

Defined in: [lib/types.ts:1573](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1573)

##### `fileId?`

> `number`

Defined in: [lib/types.ts:1574](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1574)

##### `fileStage?`

> `number`

Defined in: [lib/types.ts:1575](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1575)

##### `genreId?`

> `number`

Defined in: [lib/types.ts:1576](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1576)

##### `id?`

> `number`

Defined in: [lib/types.ts:1577](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1577)

##### `language?`

> `string`

###### Description

The language of this file if it contains text. Used with supplementary files.

Defined in: [lib/types.ts:1579](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1579)

##### `locale?`

> `string`

###### Description

The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property.

Defined in: [lib/types.ts:1581](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1581)

##### `mimetype?`

> `string`

Defined in: [lib/types.ts:1582](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1582)

##### `name?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1583](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1583)

##### `path?`

> `string`

Defined in: [lib/types.ts:1584](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1584)

##### `publisher?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1585](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1585)

##### `source?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1586](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1586)

##### `sourceSubmissionFileId?`

> `number`

###### Description

When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`.

Defined in: [lib/types.ts:1588](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1588)

##### `sponsor?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1589](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1589)

##### `subject?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1590](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1590)

##### `submissionId?`

> `number`

Defined in: [lib/types.ts:1591](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1591)

##### `terms?`

> `string`

###### Description

Licensing terms for this file. Used with artwork such as images.

Defined in: [lib/types.ts:1593](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1593)

##### `updatedAt?`

> `string`

###### Description

When this object was last updated.

Defined in: [lib/types.ts:1595](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1595)

##### `uploaderUserId?`

> `number`

Defined in: [lib/types.ts:1596](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1596)

##### `url?`

> `string`

Defined in: [lib/types.ts:1597](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1597)

##### `viewable?`

> `boolean`

Defined in: [lib/types.ts:1598](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1598)

---

### `SubmissionSummary`

#### Properties

##### `\_href?`

> `string`

Defined in: [lib/types.ts:1475](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1475)

##### `contextId?`

> `number`

Defined in: [lib/types.ts:1476](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1476)

##### `currentPublicationId?`

> `number`

###### Description

Which publication is the latest published version.

Defined in: [lib/types.ts:1478](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1478)

##### `dateLastActivity?`

> `string`

###### Description

The last time activity was recorded related to this submission.

Defined in: [lib/types.ts:1480](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1480)

##### `dateSubmitted?`

> `string`

Defined in: [lib/types.ts:1481](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1481)

##### `id?`

> `number`

Defined in: [lib/types.ts:1482](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1482)

##### `lastModified?`

> `string`

###### Description

The last time a modification was made to this submission or any of its associated objects.

Defined in: [lib/types.ts:1484](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1484)

##### `locale?`

> `string`

###### Description

The primary language of this submission.

Defined in: [lib/types.ts:1486](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1486)

##### `publications?`

> [`Publication`](modules.md#publication)[]

###### Description

A list of publications that have been created for this submission.

Defined in: [lib/types.ts:1488](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1488)

##### `stageId?`

> `number`

###### Description

The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.

###### Default

1

Defined in: [lib/types.ts:1493](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1493)

##### `status?`

> `number`

###### Description

Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.

###### Default

1

Defined in: [lib/types.ts:1498](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1498)

##### `statusLabel?`

> `string`

###### Description

A human-readable version of the submission's status. It will be Published, Declined, Queued (still in the workflow) or Scheduled.

Defined in: [lib/types.ts:1500](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1500)

##### `submissionProgress?`

> `number`

###### Description

This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.

###### Default

1

Defined in: [lib/types.ts:1505](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1505)

##### `urlAuthorWorkflow?`

> `string`

###### Description

A URL to the author's editorial workflow.

Defined in: [lib/types.ts:1507](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1507)

##### `urlEditorialWorkflow?`

> `string`

###### Description

A URL to the editors' and assistants' editorial workflow.

Defined in: [lib/types.ts:1509](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1509)

##### `urlPublished?`

> `string`

###### Description

A URL to the current publication or where it will be published.

Defined in: [lib/types.ts:1511](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1511)

##### `urlWorkflow?`

> `string`

###### Description

A URL to the workflow most appropriate for the current user. It will match the `urlAuthorWorkflow` or \`urlEditorialWorkflow.

Defined in: [lib/types.ts:1513](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1513)

---

### `ThemeOptions`

#### Description

A theme with values for any of its theme options. The theme is provided in the `themePluginPath` key. Other keys may or may not exist depending on what options have been defined by that theme.

#### Properties

##### `...?`

> `string`

Defined in: [lib/types.ts:729](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L729)

##### `themePluginPath?`

> `string`

Defined in: [lib/types.ts:728](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L728)

---

### `TimelineInterval`

#### Properties

##### `date?`

> `string`

Defined in: [lib/types.ts:732](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L732)

##### `label?`

> `string`

Defined in: [lib/types.ts:733](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L733)

##### `value?`

> `number`

Defined in: [lib/types.ts:734](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L734)

---

### `User`

#### Properties

##### `\_href?`

> `string`

Defined in: [lib/types.ts:737](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L737)

##### `affiliation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:738](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L738)

##### `authId?`

> `number`

Defined in: [lib/types.ts:739](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L739)

##### `authString?`

> `string`

Defined in: [lib/types.ts:740](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L740)

##### `billingAddress?`

> `string`

Defined in: [lib/types.ts:741](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L741)

##### `biography?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:742](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L742)

##### `country?`

> `string`

Defined in: [lib/types.ts:743](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L743)

##### `dateLastRegistered?`

> `string`

Defined in: [lib/types.ts:744](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L744)

##### `dateRegistered?`

> `string`

Defined in: [lib/types.ts:745](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L745)

##### `dateValidated?`

> `string`

Defined in: [lib/types.ts:746](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L746)

##### `disabled?`

> `boolean`

Defined in: [lib/types.ts:747](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L747)

##### `disabledReason?`

> `string`

Defined in: [lib/types.ts:748](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L748)

##### `email?`

> `string`

Defined in: [lib/types.ts:749](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L749)

##### `familyName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:750](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L750)

##### `fullName?`

> `string`

Defined in: [lib/types.ts:751](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L751)

##### `givenName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:752](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L752)

##### `gossip?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:753](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L753)

##### `groups?`

> [`UserGroup`](modules.md#usergroup)[]

Defined in: [lib/types.ts:754](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L754)

##### `id?`

> `number`

Defined in: [lib/types.ts:755](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L755)

##### `interests?`

> [`UserInterest`](modules.md#userinterest)[]

Defined in: [lib/types.ts:756](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L756)

##### `mailingAddress?`

> `string`

Defined in: [lib/types.ts:757](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L757)

##### `mustChangePassword?`

> `boolean`

Defined in: [lib/types.ts:758](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L758)

##### `orcid?`

> `string`

Defined in: [lib/types.ts:759](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L759)

##### `phone?`

> `string`

Defined in: [lib/types.ts:760](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L760)

##### `signature?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:761](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L761)

##### `url?`

> `string`

Defined in: [lib/types.ts:762](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L762)

##### `userName?`

> `string`

Defined in: [lib/types.ts:763](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L763)

---

### `UserEditable`

#### Properties

##### `affiliation?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1601](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1601)

##### `authId?`

> `number`

Defined in: [lib/types.ts:1602](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1602)

##### `authString?`

> `string`

Defined in: [lib/types.ts:1603](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1603)

##### `billingAddress?`

> `string`

Defined in: [lib/types.ts:1604](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1604)

##### `biography?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1605](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1605)

##### `country?`

> `string`

Defined in: [lib/types.ts:1606](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1606)

##### `dateLastRegistered?`

> `string`

Defined in: [lib/types.ts:1607](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1607)

##### `dateRegistered?`

> `string`

Defined in: [lib/types.ts:1608](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1608)

##### `dateValidated?`

> `string`

Defined in: [lib/types.ts:1609](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1609)

##### `disabled?`

> `boolean`

Defined in: [lib/types.ts:1610](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1610)

##### `disabledReason?`

> `string`

Defined in: [lib/types.ts:1611](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1611)

##### `email?`

> `string`

Defined in: [lib/types.ts:1612](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1612)

##### `familyName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1613](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1613)

##### `givenName?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1614](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1614)

##### `gossip?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1615](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1615)

##### `mailingAddress?`

> `string`

Defined in: [lib/types.ts:1616](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1616)

##### `mustChangePassword?`

> `boolean`

Defined in: [lib/types.ts:1617](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1617)

##### `orcid?`

> `string`

Defined in: [lib/types.ts:1618](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1618)

##### `phone?`

> `string`

Defined in: [lib/types.ts:1619](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1619)

##### `signature?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1620](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1620)

##### `url?`

> `string`

Defined in: [lib/types.ts:1621](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1621)

##### `userName?`

> `string`

Defined in: [lib/types.ts:1622](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1622)

---

### `UserGroup`

#### Properties

##### `abbrev?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:766](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L766)

##### `id?`

> `number`

Defined in: [lib/types.ts:767](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L767)

##### `name?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:768](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L768)

##### `permitSelfRegistration?`

> `boolean`

Defined in: [lib/types.ts:769](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L769)

##### `recommendOnly?`

> `boolean`

Defined in: [lib/types.ts:770](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L770)

##### `roleId?`

> `number`

Defined in: [lib/types.ts:771](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L771)

##### `showTitle?`

> `boolean`

Defined in: [lib/types.ts:772](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L772)

---

### `UserGroupEditable`

#### Properties

##### `abbrev?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1635](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1635)

##### `id?`

> `number`

Defined in: [lib/types.ts:1636](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1636)

##### `name?`

> [`LocaleObject`](modules.md#localeobject)

Defined in: [lib/types.ts:1637](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1637)

##### `permitSelfRegistration?`

> `boolean`

Defined in: [lib/types.ts:1638](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1638)

##### `recommendOnly?`

> `boolean`

Defined in: [lib/types.ts:1639](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1639)

##### `roleId?`

> `number`

Defined in: [lib/types.ts:1640](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1640)

##### `showTitle?`

> `boolean`

Defined in: [lib/types.ts:1641](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1641)

---

### `UserInterest`

#### Description

A user's review interests.

#### Properties

##### `id?`

> `number`

Defined in: [lib/types.ts:776](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L776)

##### `interest?`

> `string`

Defined in: [lib/types.ts:777](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L777)

---

### `UserSummary`

#### Properties

##### `\_href?`

> `string`

Defined in: [lib/types.ts:1625](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1625)

##### `disabled?`

> `boolean`

Defined in: [lib/types.ts:1626](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1626)

##### `email?`

> `string`

Defined in: [lib/types.ts:1627](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1627)

##### `fullName?`

> `string`

Defined in: [lib/types.ts:1628](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1628)

##### `groups?`

> [`UserGroup`](modules.md#usergroup)[]

Defined in: [lib/types.ts:1629](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1629)

##### `id?`

> `number`

Defined in: [lib/types.ts:1630](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1630)

##### `orcid?`

> `string`

Defined in: [lib/types.ts:1631](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1631)

##### `userName?`

> `string`

Defined in: [lib/types.ts:1632](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/ojs-types/src/lib/types.ts#L1632)

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
[relatex-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/relatex-parse
[jast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast
[jast-util-to-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast-util-to-texast
[jastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jastscript
[texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast
[texast-util-to-latex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast-util-to-latex
[hast]: https://github.com/syntax-tree/hast
[xast]: https://github.com/syntax-tree/xast
[mdast]: https://github.com/syntax-tree/mdast
[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown
[latex-utensils]: https://github.com/tamuratak/latex-utensils
[latexjs]: https://github.com/latexjs/latexjs
[reoff]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff
[reoff-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff/reoff-parse
[reoff-rejour]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff/reoff-rejour
[ooxast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ooxast/ooxast
[ooxast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ooxast/ooxast-util-to-jast
[ojs-types]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ojs-types
