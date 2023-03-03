> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

***

### `default`

#### Constructors

#### constructor()

##### `Signature`

```ts
new default(«destructured»: object = {}): default;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `«destructured»` | `object` |
| › `cookie` | `undefined` | `string` |
| › `endpoint` | `undefined` | `string` |
| › `token` | `undefined` | `string` |
| › `version` | `undefined` | `string` |

##### `Returns`

[`default`](modules.md#default)

Defined in:  [lib/ojs-client.ts:83](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L83)

#### Properties

##### `authenticatedFetch`

> `Function`

###### Type declaration

*Signature\`*

```ts
(
  method: string, 
  path: string, 
  data?: false | Record<string, any>, 
  query?: Record<string, any>): Promise<any>;
```

*Parameters\`*

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `path` | `string` |
| `data?` | `false` | `Record`<`string`, `any`> |
| `query?` | `Record`<`string`, `any`> |

*Returns\`*

`Promise`<`any`>

Defined in:  [lib/ojs-client.ts:77](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L77)

##### `cookie`

> `string`

Defined in:  [lib/ojs-client.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L75)

##### `endpoint`

> `string`

Defined in:  [lib/ojs-client.ts:63](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L63)

##### `headers`

> `object`

```ts
{
    Accept: string;
    Content-Type: string;
    Cookie: string;
    accept-version: string;
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `Accept` | `string` |
| `Content-Type` | `string` |
| `Cookie` | `string` |
| `accept-version` | `string` |

Defined in:  [lib/ojs-client.ts:67](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L67)

##### `token`

> `string`

Defined in:  [lib/ojs-client.ts:65](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L65)

#### Methods

##### `createFile()`

Post a file

###### Signature

```ts
createFile(submissionId: string, body: object): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `submissionId` | `string` | - |
| `body` | `object` | - |
| `body._href?` | `string` | Format: uri |
| `body.assocId?` | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `body.assocType?` | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `body.caption?` | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `body.copyrightOwner?` | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `body.createdAt?` | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `body.creator?` | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `body.credit?` | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `body.dateCreated?` | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `body.dependentFiles?` | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `body.description?` | `string` | - |
| `body.documentType?` | `string` | - |
| `body.file?` | `string` | Format: binary |
| `body.fileId` | `number` | - |
| `body.fileStage` | `number` | - |
| `body.genre?` | `object` | `Description`  The genre of this file, such as Article Text or Data Set. |
| `body.genre.dependent?` | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `body.genre.id?` | `number` | - |
| `body.genre.name?` | `string` | - |
| `body.genre.supplementary?` | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `body.genreId?` | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `body.id?` | `number` | - |
| `body.language?` | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `body.locale?` | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `body.mimetype?` | `string` | - |
| `body.name` | {  } | - |
| `body.path?` | `string` | - |
| `body.publisher?` | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `body.revisions?` | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `body.source?` | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `body.sourceSubmissionFileId?` | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `body.sponsor?` | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `body.subject?` | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `body.submissionId` | `number` | - |
| `body.terms?` | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `body.updatedAt?` | `string` | `Description`  When this object was last updated. |
| `body.uploaderUserId` | `number` | - |
| `body.url?` | `string` | - |
| `body.viewable?` | `boolean` | - |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:359](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L359)

##### `createSubmission()`

Get a list of submissions

###### Signature

```ts
createSubmission(body: object): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `object` | - |
| `body._href?` | `string` | Format: uri |
| `body.assocId?` | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `body.assocType?` | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `body.caption?` | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `body.copyrightOwner?` | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `body.createdAt?` | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `body.creator?` | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `body.credit?` | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `body.dateCreated?` | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `body.dependentFiles?` | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `body.description?` | `string` | - |
| `body.documentType?` | `string` | - |
| `body.file?` | `string` | Format: binary |
| `body.fileId` | `number` | - |
| `body.fileStage` | `number` | - |
| `body.genre?` | `object` | `Description`  The genre of this file, such as Article Text or Data Set. |
| `body.genre.dependent?` | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `body.genre.id?` | `number` | - |
| `body.genre.name?` | `string` | - |
| `body.genre.supplementary?` | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `body.genreId?` | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `body.id?` | `number` | - |
| `body.language?` | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `body.locale?` | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `body.mimetype?` | `string` | - |
| `body.name` | {  } | - |
| `body.path?` | `string` | - |
| `body.publisher?` | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `body.revisions?` | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `body.source?` | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `body.sourceSubmissionFileId?` | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `body.sponsor?` | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `body.subject?` | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `body.submissionId` | `number` | - |
| `body.terms?` | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `body.updatedAt?` | `string` | `Description`  When this object was last updated. |
| `body.uploaderUserId` | `number` | - |
| `body.url?` | `string` | - |
| `body.viewable?` | `boolean` | - |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:224](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L224)

##### `delete()`

###### Signature

```ts
delete(path: string, query: Record<string, any> = {}): Promise<any>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `query` | `Record`<`string`, `any`> |

###### Returns

`Promise`<`any`>

Defined in:  [lib/ojs-client.ts:158](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L158)

##### `deleteFile()`

Delete a file

###### Signature

```ts
deleteFile(submissionId: string, submissionFileId: string, query: object): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `submissionId` | `string` | - |
| `submissionFileId` | `string` | - |
| `query` | `object` | - |
| `query.stageId` | `number` | The workflow stage id of the file to be edited. For example, `WORKFLOW_STAGE_ID_PRODUCTION`. |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:387](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L387)

##### `deleteSubmission()`

Delete a submission by ID

###### Signature

```ts
deleteSubmission(id: number): Promise<unknown>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:257](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L257)

##### `editFile()`

Edit a file

###### Signature

```ts
editFile(
  submissionId: string, 
  submissionFileId: string, 
  body: object, 
  query: object): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `submissionId` | `string` | - |
| `submissionFileId` | `string` | - |
| `body` | `object` | - |
| `body._href?` | `string` | Format: uri |
| `body.assocId?` | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `body.assocType?` | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `body.caption?` | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `body.copyrightOwner?` | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `body.createdAt?` | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `body.creator?` | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `body.credit?` | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `body.dateCreated?` | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `body.dependentFiles?` | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `body.description?` | `string` | - |
| `body.documentType?` | `string` | - |
| `body.file?` | `string` | Format: binary |
| `body.fileId` | `number` | - |
| `body.fileStage` | `number` | - |
| `body.genre?` | `object` | `Description`  The genre of this file, such as Article Text or Data Set. |
| `body.genre.dependent?` | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `body.genre.id?` | `number` | - |
| `body.genre.name?` | `string` | - |
| `body.genre.supplementary?` | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `body.genreId?` | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `body.id?` | `number` | - |
| `body.language?` | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `body.locale?` | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `body.mimetype?` | `string` | - |
| `body.name` | {  } | - |
| `body.path?` | `string` | - |
| `body.publisher?` | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `body.revisions?` | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `body.source?` | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `body.sourceSubmissionFileId?` | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `body.sponsor?` | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `body.subject?` | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `body.submissionId` | `number` | - |
| `body.terms?` | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `body.updatedAt?` | `string` | `Description`  When this object was last updated. |
| `body.uploaderUserId` | `number` | - |
| `body.url?` | `string` | - |
| `body.viewable?` | `boolean` | - |
| `query` | `object` | - |
| `query.stageId` | `number` | The workflow stage id of the file to be edited. For example, `WORKFLOW_STAGE_ID_PRODUCTION`. |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:370](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L370)

##### `editPublication()`

Edit a specific publication associated with a submission

###### Signature

```ts
editPublication(submissionId: number, publicationId: number, body: object): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `submissionId` | `number` | - |
| `publicationId` | `number` | - |
| `body` | `object` | - |
| `body._href?` | `string` | Format: uri |
| `body.abstract?` | `string` | - |
| `body.authors?` | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `body.authorsString?` | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `body.authorsStringIncludeInBrowse?` | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `body.authorsStringShort?` | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `body.categoryIds?` | `number`[] | - |
| `body.citations?` | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `body.citationsRaw?` | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `body.copyrightHolder?` | `string` | `Description`  The copyright statement for this publication. |
| `body.copyrightYear?` | `number` | `Description`  The copyright year for this publication. |
| `body.coverImage?` | `object` | - |
| `body.coverImage.altText?` | `string` | - |
| `body.coverImage.dateUploaded?` | `string` | - |
| `body.coverImage.temporaryFileId?` | `number` | - |
| `body.coverImage.uploadName?` | `string` | - |
| `body.coverage?` | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `body.datePublished?` | `string` | - |
| `body.disciplines?` | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `body.doiId?` | `number` | `Description`  Reference to the DOI for this publication |
| `body.doiObject?` | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `body.fullTitle?` | `string` | `Description`  The combined prefix, title and subtitle. |
| `body.id?` | `number` | - |
| `body.keywords?` | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `body.languages?` | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `body.lastModified?` | `string` | - |
| `body.licenseUrl?` | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `body.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `body.prefix?` | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `body.primaryContactId?` | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `body.pub-id::publisher-id?` | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `body.rights?` | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `body.seq?` | `number` | - |
| `body.source?` | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `body.status?` | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `body.subjects?` | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `body.submissionId` | `number` | - |
| `body.subtitle?` | {  } | - |
| `body.supportingAgencies?` | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `body.title` | {  } | - |
| `body.type?` | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `body.urlPath?` | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `body.urlPublished?` | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `body.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:312](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L312)

##### `editSubmission()`

Edit a submission by ID

###### Signature

```ts
editSubmission(id: number, body: object): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | - |
| `body` | `object` | - |
| `body._href?` | `string` | Format: uri |
| `body.assocId?` | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `body.assocType?` | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `body.caption?` | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `body.copyrightOwner?` | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `body.createdAt?` | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `body.creator?` | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `body.credit?` | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `body.dateCreated?` | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `body.dependentFiles?` | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `body.description?` | `string` | - |
| `body.documentType?` | `string` | - |
| `body.file?` | `string` | Format: binary |
| `body.fileId` | `number` | - |
| `body.fileStage` | `number` | - |
| `body.genre?` | `object` | `Description`  The genre of this file, such as Article Text or Data Set. |
| `body.genre.dependent?` | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `body.genre.id?` | `number` | - |
| `body.genre.name?` | `string` | - |
| `body.genre.supplementary?` | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `body.genreId?` | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `body.id?` | `number` | - |
| `body.language?` | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `body.locale?` | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `body.mimetype?` | `string` | - |
| `body.name` | {  } | - |
| `body.path?` | `string` | - |
| `body.publisher?` | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `body.revisions?` | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `body.source?` | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `body.sourceSubmissionFileId?` | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `body.sponsor?` | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `body.subject?` | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `body.submissionId` | `number` | - |
| `body.terms?` | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `body.updatedAt?` | `string` | `Description`  When this object was last updated. |
| `body.uploaderUserId` | `number` | - |
| `body.url?` | `string` | - |
| `body.viewable?` | `boolean` | - |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:245](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L245)

##### `file()`

Get a specific file associated with a specific submission

###### Signature

```ts
file(submissionId: string, submissionFileId: string, query?: object): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `submissionId` | `string` | - |
| `submissionFileId` | `string` | - |
| `query?` | `object` | - |
| `query.stageId` | `number` | The workflow stage id of the requested file. For example, `WORKFLOW_STAGE_ID_PRODUCTION`. |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:342](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L342)

##### `files()`

Get the files associated with a specific submission

###### Signature

```ts
files(submissionId: string, query?: object): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `submissionId` | `string` | - |
| `query?` | `object` | - |
| `query.fileStages?` | `number`[] | Filter results by those submission files assigned to one or more file stage. One of the `SUBMISSION_FILE_` constants. |
| `query.reviewRoundIds?` | `number`[] | Filter results by those submission files assigned to one or more review rounds. |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:331](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L331)

##### `get()`

###### Signature

```ts
get(path: string, query: Record<string, any> = {}): Promise<any>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `query` | `Record`<`string`, `any`> |

###### Returns

`Promise`<`any`>

Defined in:  [lib/ojs-client.ts:130](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L130)

##### `info()`

###### Signature

```ts
info(query: object = {}): Promise<any>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `object` |

###### Returns

`Promise`<`any`>

Defined in:  [lib/ojs-client.ts:164](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L164)

##### `patch()`

###### Signature

```ts
patch(path: string, data: Record<string, any>, query: Record<string, any> = {}): Promise<any>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `Record`<`string`, `any`> |
| `query` | `Record`<`string`, `any`> |

###### Returns

`Promise`<`any`>

Defined in:  [lib/ojs-client.ts:150](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L150)

##### `post()`

###### Signature

```ts
post(path: string, data: Record<string, any>, query: Record<string, any> = {}): Promise<any>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `Record`<`string`, `any`> |
| `query` | `Record`<`string`, `any`> |

###### Returns

`Promise`<`any`>

Defined in:  [lib/ojs-client.ts:134](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L134)

##### `postPublication()`

Get the publications associatioted with a submission

###### Signature

```ts
postPublication(submissionId: number, body: object): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `submissionId` | `number` | - |
| `body` | `object` | - |
| `body._href?` | `string` | Format: uri |
| `body.abstract?` | `string` | - |
| `body.authors?` | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `body.authorsString?` | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `body.authorsStringIncludeInBrowse?` | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `body.authorsStringShort?` | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `body.categoryIds?` | `number`[] | - |
| `body.citations?` | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `body.citationsRaw?` | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `body.copyrightHolder?` | `string` | `Description`  The copyright statement for this publication. |
| `body.copyrightYear?` | `number` | `Description`  The copyright year for this publication. |
| `body.coverImage?` | `object` | - |
| `body.coverImage.altText?` | `string` | - |
| `body.coverImage.dateUploaded?` | `string` | - |
| `body.coverImage.temporaryFileId?` | `number` | - |
| `body.coverImage.uploadName?` | `string` | - |
| `body.coverage?` | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `body.datePublished?` | `string` | - |
| `body.disciplines?` | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `body.doiId?` | `number` | `Description`  Reference to the DOI for this publication |
| `body.doiObject?` | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `body.fullTitle?` | `string` | `Description`  The combined prefix, title and subtitle. |
| `body.id?` | `number` | - |
| `body.keywords?` | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `body.languages?` | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `body.lastModified?` | `string` | - |
| `body.licenseUrl?` | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `body.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `body.prefix?` | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `body.primaryContactId?` | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `body.pub-id::publisher-id?` | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `body.rights?` | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `body.seq?` | `number` | - |
| `body.source?` | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `body.status?` | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `body.subjects?` | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `body.submissionId` | `number` | - |
| `body.subtitle?` | {  } | - |
| `body.supportingAgencies?` | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `body.title` | {  } | - |
| `body.type?` | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `body.urlPath?` | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `body.urlPublished?` | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `body.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:268](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L268)

##### `publication()`

Get a specific publication associated with a submission

###### Signature

```ts
publication(submissionId: number, publicationId: number): Promise<unknown>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `submissionId` | `number` |
| `publicationId` | `number` |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:296](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L296)

##### `publications()`

Get the publications associatioted with a submission

###### Signature

```ts
publications(submissionId: number): Promise<unknown>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `submissionId` | `number` |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:283](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L283)

##### `put()`

###### Signature

```ts
put(path: string, data: Record<string, any>, query: Record<string, any> = {}): Promise<any>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `Record`<`string`, `any`> |
| `query` | `Record`<`string`, `any`> |

###### Returns

`Promise`<`any`>

Defined in:  [lib/ojs-client.ts:142](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L142)

##### `submission()`

Get a submission by ID

###### Signature

```ts
submission(id: number): Promise<unknown>;
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:234](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L234)

##### `submissions()`

Get a list of submissions

###### Signature

```ts
submissions(query: object = {}): Promise<unknown>;
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `object` | - |
| `query.assignedTo?` | `number`[] | Filter results by those assigned to one or more user ids. All users except managers and admins are automatically restricted to assigned submissions and do not need to pass this parameter. |
| `query.count?` | `number` | How many results to return in a single request. Max is `100`. |
| `query.daysInactive?` | `number` | Filter the results by those which have not had activity for the last X days. |
| `query.isIncomplete?` | `boolean` | Filter the results by those for which the author has not yet completed the submission process. |
| `query.isOverdue?` | `boolean` | Filter the results by those for which a reviewer has missed a deadline. |
| `query.issueIds?` | `number`[] | Filter the results by those with one or more publications assigned to an issue. |
| `query.offset?` | `number` | Offset the results returned. Use this to receive subsequent pages of requests. A `count` of `10` and `offset` of `15` will return results `15` to `25`. |
| `query.orderBy?` | `"datePublished"` | `"dateSubmitted"` | `"lastActivity"` | `"lastModified"` | `"sequence"` | `"title"` | Order the results returned. |
| `query.orderDirection?` | `"ASC"` | `"DESC"` | Return the results in ascending or descending order. |
| `query.searchPhrase?` | `string` | Filter the results by a search phrase matched against the title and authors. |
| `query.sectionIds?` | `number`[] | Filter the results by those with one or more publications assigned to a section. |
| `query.status?` | (`1` | `3` | `4` | `5`)[] | Filter results by one or more submission statuses. Must match the value of one of the `PKPSubmission::STATUS_QUEUED`, `PKPSubmission::STATUS_SCHEDULED`, `PKPSubmission::STATUS_PUBLISHED` or `PKPSubmission::STATUS_DECLINED` constants. |

###### Returns

`Promise`<`unknown`>

Defined in:  [lib/ojs-client.ts:214](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/ojs-client.ts#L214)

***

### `definitions`

#### Properties

##### `Announcement`

> `object`

```ts
{
    _href?: string;
    assocId: number;
    assocType: number;
    dateExpire?: string;
    datePosted?: string;
    description?: string;
    descriptionShort?: string;
    id?: number;
    title: string;
    typeId?: number;
    url?: string;
}
```

Announcement

###### Description

An announcement or news item.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | Format: uri  `Description`  The URL to this announcement in the REST API. |
| `assocId` | `number` | `Description`  The journal, press or preprint server ID. |
| `assocType` | `number` | `Description`  The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS). |
| `dateExpire`? | `string` | `Description`  (Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers. |
| `datePosted`? | `string` | `Description`  The date this announcement was posted. |
| `description`? | `string` | `Description`  The full text of the announcement. |
| `descriptionShort`? | `string` | `Description`  A summary of this announcement. |
| `id`? | `number` | - |
| `title` | `string` | - |
| `typeId`? | `number` | `Description`  (Optional) One of the announcement type ids. |
| `url`? | `string` | Format: uri  `Description`  The URL to the published announcement. |

Defined in:  [lib/swagger-types.ts:1859](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1859)

##### `AnnouncementSummary`

> `object`

```ts
{
    _href?: string;
    assocId: number;
    assocType: number;
    dateExpire?: string;
    datePosted?: string;
    description?: string;
    descriptionShort?: string;
    id?: number;
    title: string;
    typeId?: number;
    url?: string;
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | Format: uri  `Description`  The URL to this announcement in the REST API. |
| `assocId` | `number` | `Description`  The journal, press or preprint server ID. |
| `assocType` | `number` | `Description`  The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS). |
| `dateExpire`? | `string` | `Description`  (Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers. |
| `datePosted`? | `string` | `Description`  The date this announcement was posted. |
| `description`? | `string` | `Description`  The full text of the announcement. |
| `descriptionShort`? | `string` | `Description`  A summary of this announcement. |
| `id`? | `number` | - |
| `title` | `string` | - |
| `typeId`? | `number` | `Description`  (Optional) One of the announcement type ids. |
| `url`? | `string` | Format: uri  `Description`  The URL to the published announcement. |

Defined in:  [lib/swagger-types.ts:1887](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1887)

##### `Author`

> `object`

```ts
{
    affiliation?: string;
    biography?: string;
    country?: string;
    email: string;
    familyName?: string;
    fullName?: string;
    givenName: string;
    id?: number;
    includeInBrowse?: boolean;
    orcid?: string;
    preferredPublicName?: string;
    publicationId: number;
    seq?: number;
    submissionLocale?: string;
    url?: string;
    userGroupId: number;
    userGroupName?: string;
}
```

Author

###### Description

An author of a publication.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `affiliation`? | `string` | `Description`  The scholarly institution this contributor is employed by or affiliated with. |
| `biography`? | `string` | `Description`  An optional bio statement about this contributor. |
| `country`? | `string` | - |
| `email` | `string` | - |
| `familyName`? | `string` | - |
| `fullName`? | `string` | `Description`  The full name of the author. This will be the preferredPublicName or, if that is not available, a string containing the givenName and familyName. |
| `givenName` | `string` | - |
| `id`? | `number` | - |
| `includeInBrowse`? | `boolean` | `Description`  Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.  `Default`  true |
| `orcid`? | `string` | `Description`  The ORCID of this contributor. See: https\://orcid.org/ |
| `preferredPublicName`? | `string` | `Description`  An optional field for contributors to specify how they prefer to be identified in this publication. |
| `publicationId` | `number` | - |
| `seq`? | `number` | `Description`  The order in which this contributor should appear in a list of contriibutors. |
| `submissionLocale`? | `string` | `Description`  The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `url`? | `string` | `Description`  An optional URL to this contributor's webpage. |
| `userGroupId` | `number` | `Description`  The ID of this contributor's assigned user group. See userGroupName. |
| `userGroupName`? | `string` | `Description`  The name of this contributor's role in the publication, such as 'Author' or 'Translator'. |

Defined in:  [lib/swagger-types.ts:1892](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1892)

##### `Context`

> `object`

```ts
{
    _href?: string;
    about?: string;
    acronym?: string;
    additionalHomeContent?: string;
    agencies?: string;
    announcementsIntroduction?: string;
    authorGuidelines?: string;
    authorInformation?: string;
    automaticDoiDeposit?: boolean;
    citations?: string;
    competingInterests?: string;
    contactAffiliation?: string;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    copySubmissionAckAddress?: string;
    copySubmissionAckPrimaryContact?: boolean;
    copyrightHolderOther?: string;
    copyrightHolderType?: string;
    copyrightNotice?: string;
    country?: string;
    coverage?: string;
    currency?: string;
    customDoiSuffixType?: string;
    customHeaders?: string;
    dateFormatLong?: string;
    dateFormatShort?: string;
    datetimeFormatLong?: string;
    datetimeFormatShort?: string;
    defaultMetricType?: string;
    defaultReviewMode?: number;
    description?: string;
    disableBulkEmailUserGroups?: number[];
    disableSubmissions?: boolean;
    disableUserReg?: boolean;
    disciplines?: string;
    doiPrefix?: string;
    doiPublicationSuffixPattern?: string;
    doiRepresentationSuffixPattern?: string;
    editorialTeam?: string;
    emailSignature?: string;
    enableAnnouncements?: boolean;
    enableClockss?: boolean;
    enableDois?: boolean;
    enableLockss?: boolean;
    enabled?: boolean;
    envelopeSender?: string;
    favicon?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    homepageImage?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    id?: number;
    itemsPerPage?: number;
    keywords?: string;
    languages?: string;
    librarianInformation?: string;
    licenseUrl?: string;
    mailingAddress?: string;
    name: string;
    notifyAllAuthors?: boolean;
    numAnnouncementsHomepage?: number;
    numDaysBeforeInviteReminder?: number;
    numDaysBeforeSubmitReminder?: number;
    numPageLinks?: number;
    numWeeksPerResponse?: number;
    numWeeksPerReview?: number;
    openAccessPolicy?: string;
    pageFooter?: string;
    pageHeaderLogoImage?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    paymentsEnabled?: boolean;
    primaryLocale: string;
    privacyStatement?: string;
    rateReviewerOnQuality?: boolean;
    readerInformation?: string;
    registrationAgency?: string;
    restrictReviewerFileAccess?: boolean;
    restrictSiteAccess?: boolean;
    reviewGuidelines?: string;
    reviewerAccessKeysEnabled?: boolean;
    rights?: string;
    searchDescription?: string;
    seq?: number;
    showEnsuringLink?: boolean;
    sidebar?: string[];
    source?: string;
    styleSheet?: {
        dateUploaded?: string;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
    };
    subjects?: string;
    submissionChecklist?: {
        content?: string;
        order?: number;
    }[];
    supportEmail?: string;
    supportName?: string;
    supportPhone?: string;
    supportedFormLocales?: string[];
    supportedLocales: string[];
    supportedSubmissionLocales?: string[];
    themePluginPath?: string;
    timeFormat?: string;
    type?: string;
    url?: string;
    urlPath: string;
}
```

Context

###### Description

A journal or press.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | Format: uri |
| `about`? | `string` | - |
| `acronym`? | `string` | - |
| `additionalHomeContent`? | `string` | - |
| `agencies`? | `string` | `Description`  Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `announcementsIntroduction`? | `string` | - |
| `authorGuidelines`? | `string` | - |
| `authorInformation`? | `string` | - |
| `automaticDoiDeposit`? | `boolean` | - |
| `citations`? | `string` | `Description`  Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `competingInterests`? | `string` | - |
| `contactAffiliation`? | `string` | - |
| `contactEmail`? | `string` | - |
| `contactName`? | `string` | - |
| `contactPhone`? | `string` | - |
| `copySubmissionAckAddress`? | `string` | `Description`  A copy of the submission acknowledgement email will be sent to any of the email addresses entered here. Separate multiple email addresses with a comma. Example: one\@example.com,two\@example.com |
| `copySubmissionAckPrimaryContact`? | `boolean` | `Description`  A copy of the submission acknowledgement email will be sent to this context's primary contact when true. |
| `copyrightHolderOther`? | `string` | - |
| `copyrightHolderType`? | `string` | - |
| `copyrightNotice`? | `string` | - |
| `country`? | `string` | - |
| `coverage`? | `string` | `Description`  Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `currency`? | `string` | - |
| `customDoiSuffixType`? | `string` | - |
| `customHeaders`? | `string` | - |
| `dateFormatLong`? | `string` | - |
| `dateFormatShort`? | `string` | - |
| `datetimeFormatLong`? | `string` | - |
| `datetimeFormatShort`? | `string` | - |
| `defaultMetricType`? | `string` | - |
| `defaultReviewMode`? | `number` | `Default`  2 |
| `description`? | `string` | - |
| `disableBulkEmailUserGroups`? | `number`[] | `Description`  User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property. |
| `disableSubmissions`? | `boolean` | - |
| `disableUserReg`? | `boolean` | - |
| `disciplines`? | `string` | `Description`  Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `doiPrefix`? | `string` | - |
| `doiPublicationSuffixPattern`? | `string` | - |
| `doiRepresentationSuffixPattern`? | `string` | - |
| `editorialTeam`? | `string` | - |
| `emailSignature`? | `string` | - |
| `enableAnnouncements`? | `boolean` | - |
| `enableClockss`? | `boolean` | - |
| `enableDois`? | `boolean` | - |
| `enableLockss`? | `boolean` | - |
| `enabled`? | `boolean` | - |
| `envelopeSender`? | `string` | - |
| `favicon`? | `object` | - |
| `favicon.altText`? | `string` | - |
| `favicon.dateUploaded`? | `string` | - |
| `favicon.height`? | `number` | - |
| `favicon.name`? | `string` | - |
| `favicon.temporaryFileId`? | `number` | - |
| `favicon.uploadName`? | `string` | - |
| `favicon.width`? | `number` | - |
| `homepageImage`? | `object` | - |
| `homepageImage.altText`? | `string` | - |
| `homepageImage.dateUploaded`? | `string` | - |
| `homepageImage.height`? | `number` | - |
| `homepageImage.name`? | `string` | - |
| `homepageImage.temporaryFileId`? | `number` | - |
| `homepageImage.uploadName`? | `string` | - |
| `homepageImage.width`? | `number` | - |
| `id`? | `number` | - |
| `itemsPerPage`? | `number` | `Default`  25 |
| `keywords`? | `string` | `Description`  Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.  `Default`  request |
| `languages`? | `string` | `Description`  Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `librarianInformation`? | `string` | - |
| `licenseUrl`? | `string` | - |
| `mailingAddress`? | `string` | - |
| `name` | `string` | - |
| `notifyAllAuthors`? | `boolean` | `Description`  When enabled, all authors of a submission will receive a notification when an editorial decision is made regarding a submission. When disabled, only authors assigned to the submission will be notified.  `Default`  true |
| `numAnnouncementsHomepage`? | `number` | - |
| `numDaysBeforeInviteReminder`? | `number` | - |
| `numDaysBeforeSubmitReminder`? | `number` | - |
| `numPageLinks`? | `number` | `Default`  10 |
| `numWeeksPerResponse`? | `number` | `Default`  4 |
| `numWeeksPerReview`? | `number` | `Default`  4 |
| `openAccessPolicy`? | `string` | - |
| `pageFooter`? | `string` | - |
| `pageHeaderLogoImage`? | `object` | - |
| `pageHeaderLogoImage.altText`? | `string` | - |
| `pageHeaderLogoImage.dateUploaded`? | `string` | - |
| `pageHeaderLogoImage.height`? | `number` | - |
| `pageHeaderLogoImage.name`? | `string` | - |
| `pageHeaderLogoImage.temporaryFileId`? | `number` | - |
| `pageHeaderLogoImage.uploadName`? | `string` | - |
| `pageHeaderLogoImage.width`? | `number` | - |
| `paymentsEnabled`? | `boolean` | - |
| `primaryLocale` | `string` | - |
| `privacyStatement`? | `string` | - |
| `rateReviewerOnQuality`? | `boolean` | - |
| `readerInformation`? | `string` | - |
| `registrationAgency`? | `string` | `Default`  none |
| `restrictReviewerFileAccess`? | `boolean` | - |
| `restrictSiteAccess`? | `boolean` | - |
| `reviewGuidelines`? | `string` | - |
| `reviewerAccessKeysEnabled`? | `boolean` | - |
| `rights`? | `string` | `Description`  Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `searchDescription`? | `string` | - |
| `seq`? | `number` | - |
| `showEnsuringLink`? | `boolean` | - |
| `sidebar`? | `string`[] | - |
| `source`? | `string` | `Description`  Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `styleSheet`? | `object` | - |
| `styleSheet.dateUploaded`? | `string` | - |
| `styleSheet.name`? | `string` | - |
| `styleSheet.temporaryFileId`? | `number` | - |
| `styleSheet.uploadName`? | `string` | - |
| `subjects`? | `string` | `Description`  Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `submissionChecklist`? | {     `content`?: `string`;     `order`?: `number`; }[] | `Default`  [object Object],[object Object],[object Object],[object Object],[object Object] |
| `supportEmail`? | `string` | - |
| `supportName`? | `string` | - |
| `supportPhone`? | `string` | - |
| `supportedFormLocales`? | `string`[] | - |
| `supportedLocales` | `string`[] | - |
| `supportedSubmissionLocales`? | `string`[] | - |
| `themePluginPath`? | `string` | `Default`  default |
| `timeFormat`? | `string` | - |
| `type`? | `string` | `Description`  Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `url`? | `string` | - |
| `urlPath` | `string` | - |

Defined in:  [lib/swagger-types.ts:1929](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1929)

##### `ContextSummary`

> `object`

```ts
{
    _href?: string;
    about?: string;
    acronym?: string;
    additionalHomeContent?: string;
    agencies?: string;
    announcementsIntroduction?: string;
    authorGuidelines?: string;
    authorInformation?: string;
    automaticDoiDeposit?: boolean;
    citations?: string;
    competingInterests?: string;
    contactAffiliation?: string;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    copySubmissionAckAddress?: string;
    copySubmissionAckPrimaryContact?: boolean;
    copyrightHolderOther?: string;
    copyrightHolderType?: string;
    copyrightNotice?: string;
    country?: string;
    coverage?: string;
    currency?: string;
    customDoiSuffixType?: string;
    customHeaders?: string;
    dateFormatLong?: string;
    dateFormatShort?: string;
    datetimeFormatLong?: string;
    datetimeFormatShort?: string;
    defaultMetricType?: string;
    defaultReviewMode?: number;
    description?: string;
    disableBulkEmailUserGroups?: number[];
    disableSubmissions?: boolean;
    disableUserReg?: boolean;
    disciplines?: string;
    doiPrefix?: string;
    doiPublicationSuffixPattern?: string;
    doiRepresentationSuffixPattern?: string;
    editorialTeam?: string;
    emailSignature?: string;
    enableAnnouncements?: boolean;
    enableClockss?: boolean;
    enableDois?: boolean;
    enableLockss?: boolean;
    enabled?: boolean;
    envelopeSender?: string;
    favicon?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    homepageImage?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    id?: number;
    itemsPerPage?: number;
    keywords?: string;
    languages?: string;
    librarianInformation?: string;
    licenseUrl?: string;
    mailingAddress?: string;
    name: string;
    notifyAllAuthors?: boolean;
    numAnnouncementsHomepage?: number;
    numDaysBeforeInviteReminder?: number;
    numDaysBeforeSubmitReminder?: number;
    numPageLinks?: number;
    numWeeksPerResponse?: number;
    numWeeksPerReview?: number;
    openAccessPolicy?: string;
    pageFooter?: string;
    pageHeaderLogoImage?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    paymentsEnabled?: boolean;
    primaryLocale: string;
    privacyStatement?: string;
    rateReviewerOnQuality?: boolean;
    readerInformation?: string;
    registrationAgency?: string;
    restrictReviewerFileAccess?: boolean;
    restrictSiteAccess?: boolean;
    reviewGuidelines?: string;
    reviewerAccessKeysEnabled?: boolean;
    rights?: string;
    searchDescription?: string;
    seq?: number;
    showEnsuringLink?: boolean;
    sidebar?: string[];
    source?: string;
    styleSheet?: {
        dateUploaded?: string;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
    };
    subjects?: string;
    submissionChecklist?: {
        content?: string;
        order?: number;
    }[];
    supportEmail?: string;
    supportName?: string;
    supportPhone?: string;
    supportedFormLocales?: string[];
    supportedLocales: string[];
    supportedSubmissionLocales?: string[];
    themePluginPath?: string;
    timeFormat?: string;
    type?: string;
    url?: string;
    urlPath: string;
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | Format: uri |
| `about`? | `string` | - |
| `acronym`? | `string` | - |
| `additionalHomeContent`? | `string` | - |
| `agencies`? | `string` | `Description`  Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `announcementsIntroduction`? | `string` | - |
| `authorGuidelines`? | `string` | - |
| `authorInformation`? | `string` | - |
| `automaticDoiDeposit`? | `boolean` | - |
| `citations`? | `string` | `Description`  Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `competingInterests`? | `string` | - |
| `contactAffiliation`? | `string` | - |
| `contactEmail`? | `string` | - |
| `contactName`? | `string` | - |
| `contactPhone`? | `string` | - |
| `copySubmissionAckAddress`? | `string` | `Description`  A copy of the submission acknowledgement email will be sent to any of the email addresses entered here. Separate multiple email addresses with a comma. Example: one\@example.com,two\@example.com |
| `copySubmissionAckPrimaryContact`? | `boolean` | `Description`  A copy of the submission acknowledgement email will be sent to this context's primary contact when true. |
| `copyrightHolderOther`? | `string` | - |
| `copyrightHolderType`? | `string` | - |
| `copyrightNotice`? | `string` | - |
| `country`? | `string` | - |
| `coverage`? | `string` | `Description`  Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `currency`? | `string` | - |
| `customDoiSuffixType`? | `string` | - |
| `customHeaders`? | `string` | - |
| `dateFormatLong`? | `string` | - |
| `dateFormatShort`? | `string` | - |
| `datetimeFormatLong`? | `string` | - |
| `datetimeFormatShort`? | `string` | - |
| `defaultMetricType`? | `string` | - |
| `defaultReviewMode`? | `number` | `Default`  2 |
| `description`? | `string` | - |
| `disableBulkEmailUserGroups`? | `number`[] | `Description`  User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property. |
| `disableSubmissions`? | `boolean` | - |
| `disableUserReg`? | `boolean` | - |
| `disciplines`? | `string` | `Description`  Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `doiPrefix`? | `string` | - |
| `doiPublicationSuffixPattern`? | `string` | - |
| `doiRepresentationSuffixPattern`? | `string` | - |
| `editorialTeam`? | `string` | - |
| `emailSignature`? | `string` | - |
| `enableAnnouncements`? | `boolean` | - |
| `enableClockss`? | `boolean` | - |
| `enableDois`? | `boolean` | - |
| `enableLockss`? | `boolean` | - |
| `enabled`? | `boolean` | - |
| `envelopeSender`? | `string` | - |
| `favicon`? | `object` | - |
| `favicon.altText`? | `string` | - |
| `favicon.dateUploaded`? | `string` | - |
| `favicon.height`? | `number` | - |
| `favicon.name`? | `string` | - |
| `favicon.temporaryFileId`? | `number` | - |
| `favicon.uploadName`? | `string` | - |
| `favicon.width`? | `number` | - |
| `homepageImage`? | `object` | - |
| `homepageImage.altText`? | `string` | - |
| `homepageImage.dateUploaded`? | `string` | - |
| `homepageImage.height`? | `number` | - |
| `homepageImage.name`? | `string` | - |
| `homepageImage.temporaryFileId`? | `number` | - |
| `homepageImage.uploadName`? | `string` | - |
| `homepageImage.width`? | `number` | - |
| `id`? | `number` | - |
| `itemsPerPage`? | `number` | `Default`  25 |
| `keywords`? | `string` | `Description`  Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.  `Default`  request |
| `languages`? | `string` | `Description`  Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `librarianInformation`? | `string` | - |
| `licenseUrl`? | `string` | - |
| `mailingAddress`? | `string` | - |
| `name` | `string` | - |
| `notifyAllAuthors`? | `boolean` | `Description`  When enabled, all authors of a submission will receive a notification when an editorial decision is made regarding a submission. When disabled, only authors assigned to the submission will be notified.  `Default`  true |
| `numAnnouncementsHomepage`? | `number` | - |
| `numDaysBeforeInviteReminder`? | `number` | - |
| `numDaysBeforeSubmitReminder`? | `number` | - |
| `numPageLinks`? | `number` | `Default`  10 |
| `numWeeksPerResponse`? | `number` | `Default`  4 |
| `numWeeksPerReview`? | `number` | `Default`  4 |
| `openAccessPolicy`? | `string` | - |
| `pageFooter`? | `string` | - |
| `pageHeaderLogoImage`? | `object` | - |
| `pageHeaderLogoImage.altText`? | `string` | - |
| `pageHeaderLogoImage.dateUploaded`? | `string` | - |
| `pageHeaderLogoImage.height`? | `number` | - |
| `pageHeaderLogoImage.name`? | `string` | - |
| `pageHeaderLogoImage.temporaryFileId`? | `number` | - |
| `pageHeaderLogoImage.uploadName`? | `string` | - |
| `pageHeaderLogoImage.width`? | `number` | - |
| `paymentsEnabled`? | `boolean` | - |
| `primaryLocale` | `string` | - |
| `privacyStatement`? | `string` | - |
| `rateReviewerOnQuality`? | `boolean` | - |
| `readerInformation`? | `string` | - |
| `registrationAgency`? | `string` | `Default`  none |
| `restrictReviewerFileAccess`? | `boolean` | - |
| `restrictSiteAccess`? | `boolean` | - |
| `reviewGuidelines`? | `string` | - |
| `reviewerAccessKeysEnabled`? | `boolean` | - |
| `rights`? | `string` | `Description`  Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `searchDescription`? | `string` | - |
| `seq`? | `number` | - |
| `showEnsuringLink`? | `boolean` | - |
| `sidebar`? | `string`[] | - |
| `source`? | `string` | `Description`  Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `styleSheet`? | `object` | - |
| `styleSheet.dateUploaded`? | `string` | - |
| `styleSheet.name`? | `string` | - |
| `styleSheet.temporaryFileId`? | `number` | - |
| `styleSheet.uploadName`? | `string` | - |
| `subjects`? | `string` | `Description`  Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `submissionChecklist`? | {     `content`?: `string`;     `order`?: `number`; }[] | `Default`  [object Object],[object Object],[object Object],[object Object],[object Object] |
| `supportEmail`? | `string` | - |
| `supportName`? | `string` | - |
| `supportPhone`? | `string` | - |
| `supportedFormLocales`? | `string`[] | - |
| `supportedLocales` | `string`[] | - |
| `supportedSubmissionLocales`? | `string`[] | - |
| `themePluginPath`? | `string` | `Default`  default |
| `timeFormat`? | `string` | - |
| `type`? | `string` | `Description`  Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `url`? | `string` | - |
| `urlPath` | `string` | - |

Defined in:  [lib/swagger-types.ts:2089](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2089)

##### `Contributor`

> `object`

```ts
{
    affiliation?: string;
    biography?: string;
    country?: string;
    email: string;
    familyName?: string;
    fullName?: string;
    givenName: string;
    id?: number;
    includeInBrowse?: boolean;
    orcid?: string;
    preferredPublicName?: string;
    publicationId: number;
    seq?: number;
    submissionLocale?: string;
    url?: string;
    userGroupId: number;
    userGroupName?: string;
}
```

Author

###### Description

An author of a publication.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `affiliation`? | `string` | `Description`  The scholarly institution this contributor is employed by or affiliated with. |
| `biography`? | `string` | `Description`  An optional bio statement about this contributor. |
| `country`? | `string` | - |
| `email` | `string` | - |
| `familyName`? | `string` | - |
| `fullName`? | `string` | `Description`  The full name of the author. This will be the preferredPublicName or, if that is not available, a string containing the givenName and familyName. |
| `givenName` | `string` | - |
| `id`? | `number` | - |
| `includeInBrowse`? | `boolean` | `Description`  Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.  `Default`  true |
| `orcid`? | `string` | `Description`  The ORCID of this contributor. See: https\://orcid.org/ |
| `preferredPublicName`? | `string` | `Description`  An optional field for contributors to specify how they prefer to be identified in this publication. |
| `publicationId` | `number` | - |
| `seq`? | `number` | `Description`  The order in which this contributor should appear in a list of contriibutors. |
| `submissionLocale`? | `string` | `Description`  The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `url`? | `string` | `Description`  An optional URL to this contributor's webpage. |
| `userGroupId` | `number` | `Description`  The ID of this contributor's assigned user group. See userGroupName. |
| `userGroupName`? | `string` | `Description`  The name of this contributor's role in the publication, such as 'Author' or 'Translator'. |

Defined in:  [lib/swagger-types.ts:2263](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2263)

##### `Doi`

> `object`

```ts
{
    contextId: number;
    doi: string;
    id?: number;
    resolvingUrl?: string;
    status?: number;
}
```

DOI

###### Description

The Digital Object Identifier (DOI) is a persistent ID assigned to published items.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `contextId` | `number` | `Description`  Context id for DOI |
| `doi` | `string` | `Description`  Persistent identifier |
| `id`? | `number` | - |
| `resolvingUrl`? | `string` | `Description`  DOI URL that resolves to the indicated item |
| `status`? | `number` | `Description`  Persistent identifier status  `Default`  1 |

Defined in:  [lib/swagger-types.ts:2094](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2094)

##### `EmailTemplate`

> `object`

```ts
{
    _href?: string;
    body: string;
    canDisable?: boolean;
    canEdit?: boolean;
    contextId: number;
    description?: string;
    enabled?: boolean;
    fromRoleId?: number;
    id?: number;
    key: string;
    stageId?: number;
    subject: string;
    toRoleId?: number;
}
```

Email Template

###### Description

A saved email message that can be sent by the application during registration, submission, peer review and all other operations of the application.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | Format: uri |
| `body` | `string` | `Description`  The email template to be used in the email's main body content. |
| `canDisable`? | `boolean` | `Description`  Can this email template be disabled in the context settings area? Default is `true`. |
| `canEdit`? | `boolean` | `Description`  Can this email template be edited in the context settings area? Default is `true`. |
| `contextId` | `number` | `Description`  The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`. |
| `description`? | `string` | `Description`  A description of when this email template is used. |
| `enabled`? | `boolean` | `Description`  Is this email template enabled? Default is `true`. |
| `fromRoleId`? | `number` | `Description`  The `ROLE_ID_*` of the user who will send this email. |
| `id`? | `number` | `Description`  The email template ID. |
| `key` | `string` | `Description`  A unique key for this email template. |
| `stageId`? | `number` | `Description`  The `WORKFLOW_STAGE_ID_*` that email template is associated with or `null` if it is not associated with a stage. |
| `subject` | `string` | `Description`  The subject of the email to be used in the email's subject header. |
| `toRoleId`? | `number` | `Description`  The `ROLE_ID_*` of the user who will receive this email. |

Defined in:  [lib/swagger-types.ts:2117](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2117)

##### `EmailTemplateSummary`

> [`"EmailTemplate"`]

Defined in:  [lib/swagger-types.ts:2145](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2145)

##### `ErrorResponse`

> `object`

```ts
{
    error?: string;
    errorMessage?: string;
}
```

###### Description

A response object that will be returned when the request could not be fulfilled.

###### Type declaration

| Member | Type |
| :------ | :------ |
| `error`? | `string` |
| `errorMessage`? | `string` |

Defined in:  [lib/swagger-types.ts:2109](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2109)

##### `Galley`

> `unknown`

Defined in:  [lib/swagger-types.ts:2146](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2146)

##### `InvalidParametersResponse`

> `object`

###### Description

A response object that will be returned when there are validation errors for the request parameters. Typically used with forms.

###### Example

```ts
[object Object]
```

###### Index signature

[`key`: `string`]: `unknown`

###### Type declaration

Defined in:  [lib/swagger-types.ts:2151](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2151)

##### `Issue`

> `unknown`

Defined in:  [lib/swagger-types.ts:2152](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2152)

##### `IssueSummary`

> `unknown`

Defined in:  [lib/swagger-types.ts:2153](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2153)

##### `LocaleObject`

> `object`

###### Description

Key/value pairs containing data stored by locale key.

###### Example

```ts
[object Object]
```

###### Index signature

[`key`: `string`]: `unknown`

###### Type declaration

Defined in:  [lib/swagger-types.ts:2158](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2158)

##### `Publication`

> `object`

```ts
{
    _href?: string;
    abstract?: string;
    authors?: {
        affiliation?: string;
        biography?: string;
        country?: string;
        email: string;
        familyName?: string;
        fullName?: string;
        givenName: string;
        id?: number;
        includeInBrowse?: boolean;
        orcid?: string;
        preferredPublicName?: string;
        publicationId: number;
        seq?: number;
        submissionLocale?: string;
        url?: string;
        userGroupId: number;
        userGroupName?: string;
    }[];
    authorsString?: string;
    authorsStringIncludeInBrowse?: string;
    authorsStringShort?: string;
    categoryIds?: number[];
    citations?: string[];
    citationsRaw?: string;
    copyrightHolder?: string;
    copyrightYear?: number;
    coverImage?: {
        altText?: string;
        dateUploaded?: string;
        temporaryFileId?: number;
        uploadName?: string;
    };
    coverage?: string;
    datePublished?: string;
    disciplines?: string[];
    doiId?: number;
    doiObject?: {
        contextId: number;
        doi: string;
        id?: number;
        resolvingUrl?: string;
        status?: number;
    }[];
    fullTitle?: string;
    id?: number;
    keywords?: string[];
    languages?: string[];
    lastModified?: string;
    licenseUrl?: string;
    locale: string;
    prefix?: string;
    primaryContactId?: number;
    pub-id::publisher-id?: string;
    rights?: string;
    seq?: number;
    source?: string;
    status?: number;
    subjects?: string[];
    submissionId: number;
    subtitle?: {
    };
    supportingAgencies?: string[];
    title: {
    };
    type?: string;
    urlPath?: string;
    urlPublished?: string;
    version: number;
}
```

Publication

###### Description

A published version of a submission.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | Format: uri |
| `abstract`? | `string` | - |
| `authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `authorsString`? | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `authorsStringIncludeInBrowse`? | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `authorsStringShort`? | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `categoryIds`? | `number`[] | - |
| `citations`? | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `citationsRaw`? | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `copyrightHolder`? | `string` | `Description`  The copyright statement for this publication. |
| `copyrightYear`? | `number` | `Description`  The copyright year for this publication. |
| `coverImage`? | `object` | - |
| `coverImage.altText`? | `string` | - |
| `coverImage.dateUploaded`? | `string` | - |
| `coverImage.temporaryFileId`? | `number` | - |
| `coverImage.uploadName`? | `string` | - |
| `coverage`? | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `datePublished`? | `string` | - |
| `disciplines`? | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `doiId`? | `number` | `Description`  Reference to the DOI for this publication |
| `doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `fullTitle`? | `string` | `Description`  The combined prefix, title and subtitle. |
| `id`? | `number` | - |
| `keywords`? | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `languages`? | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `lastModified`? | `string` | - |
| `licenseUrl`? | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `prefix`? | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `primaryContactId`? | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `pub-id::publisher-id`? | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `rights`? | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `seq`? | `number` | - |
| `source`? | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `status`? | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `subjects`? | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `submissionId` | `number` | - |
| `subtitle`? | {  } | - |
| `supportingAgencies`? | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `title` | {  } | - |
| `type`? | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `urlPath`? | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `urlPublished`? | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |

Defined in:  [lib/swagger-types.ts:2163](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2163)

##### `PublicationStats`

> `object`

```ts
{
    abstractViews?: number;
    galleyViews?: number;
    htmlViews?: number;
    otherViews?: number;
    pdfViews?: number;
    publication?: {
        _href?: string;
        fullTitle?: {
        };
        id?: number;
        shortAuthorString?: string;
        urlPublished?: string;
        urlWorkflow?: string;
    };
}
```

###### Description

The total abstract and galley views for a published submission.

###### Type declaration

| Member | Type |
| :------ | :------ |
| `abstractViews`? | `number` |
| `galleyViews`? | `number` |
| `htmlViews`? | `number` |
| `otherViews`? | `number` |
| `pdfViews`? | `number` |
| `publication`? | `object` |
| `publication._href`? | `string` |
| `publication.fullTitle`? | {  } |
| `publication.id`? | `number` |
| `publication.shortAuthorString`? | `string` |
| `publication.urlPublished`? | `string` |
| `publication.urlWorkflow`? | `string` |

Defined in:  [lib/swagger-types.ts:2244](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2244)

##### `ReviewRound`

> `object`

```ts
{
    id?: number;
    round?: number;
    stageId?: number;
    status?: string;
    statusId?: number;
}
```

Review Round

###### Description

A round of review assignments in the review stage.

###### Type declaration

| Member | Type |
| :------ | :------ |
| `id`? | `number` |
| `round`? | `number` |
| `stageId`? | `number` |
| `status`? | `string` |
| `statusId`? | `number` |

Defined in:  [lib/swagger-types.ts:2300](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2300)

##### `ReviewerSummary`

> `object`

```ts
{
    _href?: string;
    affiliation?: {
    };
    averageReviewCompletionDays?: number;
    dateLastReviewAssignment?: string;
    disabled?: boolean;
    fullName?: string;
    gossip?: {
    };
    groups?: {
        abbrev?: {
        };
        id?: number;
        name?: {
        };
        permitSelfRegistration?: boolean;
        recommendOnly?: boolean;
        roleId?: number;
        showTitle?: boolean;
    }[];
    id?: number;
    interests?: {
        id?: number;
        interest?: string;
    }[];
    reviewsActive?: number;
    reviewsCancelled?: number;
    reviewsCompleted?: number;
    reviewsDeclined?: number;
    userName?: string;
}
```

###### Description

A special representation of a User assigned to a reviewer group. This model presents specific details about review activity.

###### Type declaration

| Member | Type |
| :------ | :------ |
| `_href`? | `string` |
| `affiliation`? | {  } |
| `averageReviewCompletionDays`? | `number` |
| `dateLastReviewAssignment`? | `string` |
| `disabled`? | `boolean` |
| `fullName`? | `string` |
| `gossip`? | {  } |
| `groups`? | {     `abbrev`?: {     };     `id`?: `number`;     `name`?: {     };     `permitSelfRegistration`?: `boolean`;     `recommendOnly`?: `boolean`;     `roleId`?: `number`;     `showTitle`?: `boolean`; }[] |
| `id`? | `number` |
| `interests`? | {     `id`?: `number`;     `interest`?: `string`; }[] |
| `reviewsActive`? | `number` |
| `reviewsCancelled`? | `number` |
| `reviewsCompleted`? | `number` |
| `reviewsDeclined`? | `number` |
| `userName`? | `string` |

Defined in:  [lib/swagger-types.ts:2308](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2308)

##### `Section`

> `unknown`

Defined in:  [lib/swagger-types.ts:2325](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2325)

##### `Site`

> `object`

```ts
{
    about?: string;
    contactEmail: string;
    contactName: string;
    enableBulkEmails?: number[];
    installedLocales?: string[];
    minPasswordLength?: number;
    pageFooter?: string;
    pageHeaderTitleImage?: {
        altText?: string;
        dateUploaded?: string;
        height?: number;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
        width?: number;
    };
    primaryLocale?: string;
    privacyStatement?: string;
    redirect?: number;
    sidebar?: string[];
    styleSheet?: {
        dateUploaded?: string;
        name?: string;
        temporaryFileId?: number;
        uploadName?: string;
    };
    supportedLocales?: string[];
    themePluginPath?: string;
    title: string;
}
```

Site

###### Description

The overall site hosting one or more contexts (journals/presses).

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `about`? | `string` | - |
| `contactEmail` | `string` | - |
| `contactName` | `string` | - |
| `enableBulkEmails`? | `number`[] | `Description`  Which hosted journals, presses or preprint servers are allowed to send bulk emails. |
| `installedLocales`? | `string`[] | - |
| `minPasswordLength`? | `number` | - |
| `pageFooter`? | `string` | - |
| `pageHeaderTitleImage`? | `object` | - |
| `pageHeaderTitleImage.altText`? | `string` | - |
| `pageHeaderTitleImage.dateUploaded`? | `string` | - |
| `pageHeaderTitleImage.height`? | `number` | - |
| `pageHeaderTitleImage.name`? | `string` | - |
| `pageHeaderTitleImage.temporaryFileId`? | `number` | - |
| `pageHeaderTitleImage.uploadName`? | `string` | - |
| `pageHeaderTitleImage.width`? | `number` | - |
| `primaryLocale`? | `string` | - |
| `privacyStatement`? | `string` | - |
| `redirect`? | `number` | - |
| `sidebar`? | `string`[] | - |
| `styleSheet`? | `object` | - |
| `styleSheet.dateUploaded`? | `string` | - |
| `styleSheet.name`? | `string` | - |
| `styleSheet.temporaryFileId`? | `number` | - |
| `styleSheet.uploadName`? | `string` | - |
| `supportedLocales`? | `string`[] | - |
| `themePluginPath`? | `string` | `Default`  default |
| `title` | `string` | - |

Defined in:  [lib/swagger-types.ts:2330](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2330)

##### `Submission`

> `object`

```ts
{
    _href?: string;
    contextId: number;
    currentPublicationId?: number;
    dateLastActivity?: string;
    dateSubmitted?: string;
    id?: number;
    lastModified?: string;
    locale?: string;
    publications?: {
        _href?: string;
        abstract?: string;
        authors?: {
            affiliation?: string;
            biography?: string;
            country?: string;
            email: string;
            familyName?: string;
            fullName?: string;
            givenName: string;
            id?: number;
            includeInBrowse?: boolean;
            orcid?: string;
            preferredPublicName?: string;
            publicationId: number;
            seq?: number;
            submissionLocale?: string;
            url?: string;
            userGroupId: number;
            userGroupName?: string;
        }[];
        authorsString?: string;
        authorsStringIncludeInBrowse?: string;
        authorsStringShort?: string;
        categoryIds?: number[];
        citations?: string[];
        citationsRaw?: string;
        copyrightHolder?: string;
        copyrightYear?: number;
        coverImage?: {
            altText?: string;
            dateUploaded?: string;
            temporaryFileId?: number;
            uploadName?: string;
        };
        coverage?: string;
        datePublished?: string;
        disciplines?: string[];
        doiId?: number;
        doiObject?: {
            contextId: number;
            doi: string;
            id?: number;
            resolvingUrl?: string;
            status?: number;
        }[];
        fullTitle?: string;
        id?: number;
        keywords?: string[];
        languages?: string[];
        lastModified?: string;
        licenseUrl?: string;
        locale: string;
        prefix?: string;
        primaryContactId?: number;
        pub-id::publisher-id?: string;
        rights?: string;
        seq?: number;
        source?: string;
        status?: number;
        subjects?: string[];
        submissionId: number;
        subtitle?: {
        };
        supportingAgencies?: string[];
        title: {
        };
        type?: string;
        urlPath?: string;
        urlPublished?: string;
        version: number;
    }[];
    reviewAssignments?: {
        dateDue?: number;
        dateResponseDue?: number;
        id?: number;
        isCurrentUserAssigned?: number;
        reviewRoundId?: number;
        round?: number;
        status?: number;
        statusLabel?: number;
    }[];
    reviewRounds?: {
        id?: number;
        round?: number;
        stageId?: number;
        status?: string;
        statusId?: number;
    }[];
    sectionId: number;
    stageId?: number;
    stages?: {
        currentUserAssignedRoles?: number[];
        files?: {
            count?: number;
        };
        id?: number;
        isActiveStage?: boolean;
        label?: string;
        queries?: unknown[];
        status?: string;
        statusId?: number;
    }[];
    status?: number;
    statusLabel?: string;
    submissionProgress?: number;
    urlAuthorWorkflow?: string;
    urlEditorialWorkflow?: string;
    urlPublished?: string;
    urlWorkflow?: string;
}
```

Submission

###### Description

A submission to the journal or press.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | - |
| `contextId` | `number` | - |
| `currentPublicationId`? | `number` | `Description`  Which publication is the latest published version. |
| `dateLastActivity`? | `string` | `Description`  The last time activity was recorded related to this submission. |
| `dateSubmitted`? | `string` | - |
| `id`? | `number` | - |
| `lastModified`? | `string` | `Description`  The last time a modification was made to this submission or any of its associated objects. |
| `locale`? | `string` | `Description`  The primary language of this submission. |
| `publications`? | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; }[] | `Description`  A list of publications that have been created for this submission. |
| `reviewAssignments`? | {     `dateDue`?: `number`;     `dateResponseDue`?: `number`;     `id`?: `number`;     `isCurrentUserAssigned`?: `number`;     `reviewRoundId`?: `number`;     `round`?: `number`;     `status`?: `number`;     `statusLabel`?: `number`; }[] | `Description`  Information about pending and completed review assignments. |
| `reviewRounds`? | {     `id`?: `number`;     `round`?: `number`;     `stageId`?: `number`;     `status`?: `string`;     `statusId`?: `number`; }[] | `Description`  A list of review rounds that have been opened for this submission. |
| `sectionId` | `number` | `Description`  The section this submission should be assigned to. This can only be passed when creating a new submission and the data is assigned to the first publication. Edit the publication to change the `sectionId`. |
| `stageId`? | `number` | `Description`  The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.  `Default`  1 |
| `stages`? | {     `currentUserAssignedRoles`?: `number`[];     `files`?: {         `count`?: `number`;     };     `id`?: `number`;     `isActiveStage`?: `boolean`;     `label`?: `string`;     `queries`?: `unknown`[];     `status`?: `string`;     `statusId`?: `number`; }[] | `Description`  Key data about the status, files and discussions of each stage. |
| `status`? | `number` | `Description`  Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `statusLabel`? | `string` | `Description`  A human-readable version of the submission's status. It will be Published, Declined, Queued (still in the workflow) or Scheduled. |
| `submissionProgress`? | `number` | `Description`  This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.  `Default`  1 |
| `urlAuthorWorkflow`? | `string` | `Description`  A URL to the author's editorial workflow. |
| `urlEditorialWorkflow`? | `string` | `Description`  A URL to the editors' and assistants' editorial workflow. |
| `urlPublished`? | `string` | `Description`  A URL to the current publication or where it will be published. |
| `urlWorkflow`? | `string` | `Description`  A URL to the workflow most appropriate for the current user. It will match the `urlAuthorWorkflow` or \`urlEditorialWorkflow. |

Defined in:  [lib/swagger-types.ts:2367](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2367)

##### `SubmissionFile`

> `object`

```ts
{
    _href?: string;
    assocId?: number;
    assocType?: number;
    caption?: string;
    copyrightOwner?: string;
    createdAt?: string;
    creator?: string;
    credit?: string;
    dateCreated?: string;
    dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
    description?: string;
    documentType?: string;
    file?: string;
    fileId: number;
    fileStage: number;
    genre?: {
        dependent?: boolean;
        id?: number;
        name?: string;
        supplementary?: boolean;
    };
    genreId?: number;
    id?: number;
    language?: string;
    locale?: string;
    mimetype?: string;
    name: {
    };
    path?: string;
    publisher?: string;
    revisions?: {
        documentType?: string;
        fileId?: number;
        mimetype?: string;
        path?: string;
        url?: string;
    }[];
    source?: string;
    sourceSubmissionFileId?: number;
    sponsor?: string;
    subject?: string;
    submissionId: number;
    terms?: string;
    updatedAt?: string;
    uploaderUserId: number;
    url?: string;
    viewable?: boolean;
}
```

Submission File

###### Description

A submission file including associated metadata.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | Format: uri |
| `assocId`? | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `assocType`? | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `caption`? | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `copyrightOwner`? | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `createdAt`? | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `creator`? | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `credit`? | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `dateCreated`? | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `dependentFiles`? | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `description`? | `string` | - |
| `documentType`? | `string` | - |
| `file`? | `string` | Format: binary |
| `fileId` | `number` | - |
| `fileStage` | `number` | - |
| `genre`? | `object` | `Description`  The genre of this file, such as Article Text or Data Set. |
| `genre.dependent`? | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `genre.id`? | `number` | - |
| `genre.name`? | `string` | - |
| `genre.supplementary`? | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `genreId`? | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `id`? | `number` | - |
| `language`? | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `locale`? | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `mimetype`? | `string` | - |
| `name` | {  } | - |
| `path`? | `string` | - |
| `publisher`? | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `revisions`? | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `source`? | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `sourceSubmissionFileId`? | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `sponsor`? | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `subject`? | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `submissionId` | `number` | - |
| `terms`? | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `updatedAt`? | `string` | `Description`  When this object was last updated. |
| `uploaderUserId` | `number` | - |
| `url`? | `string` | - |
| `viewable`? | `boolean` | - |

Defined in:  [lib/swagger-types.ts:2440](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2440)

##### `ThemeOptions`

> `object`

```ts
{
    ...?: string;
    themePluginPath?: string;
}
```

###### Description

A theme with values for any of its theme options. The theme is provided in the `themePluginPath` key. Other keys may or may not exist depending on what options have been defined by that theme.

###### Type declaration

| Member | Type |
| :------ | :------ |
| `...`? | `string` |
| `themePluginPath`? | `string` |

Defined in:  [lib/swagger-types.ts:2514](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2514)

##### `TimelineInterval`

> `object`

```ts
{
    date?: string;
    label?: string;
    value?: number;
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `date`? | `string` |
| `label`? | `string` |
| `value`? | `number` |

Defined in:  [lib/swagger-types.ts:2518](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2518)

##### `User`

> `object`

```ts
{
    _href?: string;
    affiliation?: string;
    apiKey?: string;
    apiKeyEnabled?: boolean;
    authId?: number;
    authStr?: string;
    billingAddress?: string;
    biography?: string;
    country?: string;
    dateLastEmail?: string;
    dateLastLogin?: string;
    dateRegistered?: string;
    dateValidated?: string;
    disabled?: boolean;
    disabledReason?: string;
    email?: string;
    familyName?: string;
    fullName?: string;
    givenName?: string;
    gossip?: string;
    groups?: {
        abbrev?: {
        };
        id?: number;
        name?: {
        };
        permitSelfRegistration?: boolean;
        recommendOnly?: boolean;
        roleId?: number;
        showTitle?: boolean;
    }[];
    id?: number;
    inlineHelp?: boolean;
    interests?: {
        id?: number;
        interest?: string;
    }[];
    locales?: string[];
    mailingAddress?: string;
    mustChangePassword?: boolean;
    orcid?: string;
    password?: string;
    phone?: string;
    preferredPublicName?: string;
    profileImage?: {
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    signature?: string;
    url?: string;
    userName?: string;
}
```

User

###### Description

A registered user.

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | - |
| `affiliation`? | `string` | - |
| `apiKey`? | `string` | - |
| `apiKeyEnabled`? | `boolean` | - |
| `authId`? | `number` | - |
| `authStr`? | `string` | - |
| `billingAddress`? | `string` | - |
| `biography`? | `string` | - |
| `country`? | `string` | - |
| `dateLastEmail`? | `string` | - |
| `dateLastLogin`? | `string` | - |
| `dateRegistered`? | `string` | - |
| `dateValidated`? | `string` | - |
| `disabled`? | `boolean` | - |
| `disabledReason`? | `string` | - |
| `email`? | `string` | - |
| `familyName`? | `string` | - |
| `fullName`? | `string` | - |
| `givenName`? | `string` | - |
| `gossip`? | `string` | - |
| `groups`? | {     `abbrev`?: {     };     `id`?: `number`;     `name`?: {     };     `permitSelfRegistration`?: `boolean`;     `recommendOnly`?: `boolean`;     `roleId`?: `number`;     `showTitle`?: `boolean`; }[] | - |
| `id`? | `number` | - |
| `inlineHelp`? | `boolean` | - |
| `interests`? | {     `id`?: `number`;     `interest`?: `string`; }[] | - |
| `locales`? | `string`[] | - |
| `mailingAddress`? | `string` | - |
| `mustChangePassword`? | `boolean` | - |
| `orcid`? | `string` | - |
| `password`? | `string` | - |
| `phone`? | `string` | - |
| `preferredPublicName`? | `string` | `Description`  An optional field for users to specify how they prefer to be identified. |
| `profileImage`? | `object` | - |
| `profileImage.dateUploaded`? | `string` | - |
| `profileImage.height`? | `number` | - |
| `profileImage.name`? | `string` | - |
| `profileImage.uploadName`? | `string` | - |
| `profileImage.width`? | `number` | - |
| `signature`? | `string` | - |
| `url`? | `string` | - |
| `userName`? | `string` | - |

Defined in:  [lib/swagger-types.ts:2527](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2527)

##### `UserGroup`

> `object`

```ts
{
    abbrev?: {
    };
    id?: number;
    name?: {
    };
    permitSelfRegistration?: boolean;
    recommendOnly?: boolean;
    roleId?: number;
    showTitle?: boolean;
}
```

UserGroup

###### Description

A user group assigned to one of the allowed roles.

###### Type declaration

| Member | Type |
| :------ | :------ |
| `abbrev`? | {  } |
| `id`? | `number` |
| `name`? | {  } |
| `permitSelfRegistration`? | `boolean` |
| `recommendOnly`? | `boolean` |
| `roleId`? | `number` |
| `showTitle`? | `boolean` |

Defined in:  [lib/swagger-types.ts:2576](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2576)

##### `UserInterest`

> `object`

```ts
{
    id?: number;
    interest?: string;
}
```

###### Description

A user's review interests.

###### Type declaration

| Member | Type |
| :------ | :------ |
| `id`? | `number` |
| `interest`? | `string` |

Defined in:  [lib/swagger-types.ts:2586](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2586)

##### `UserSummary`

> `object`

```ts
{
    _href?: string;
    affiliation?: string;
    apiKey?: string;
    apiKeyEnabled?: boolean;
    authId?: number;
    authStr?: string;
    billingAddress?: string;
    biography?: string;
    country?: string;
    dateLastEmail?: string;
    dateLastLogin?: string;
    dateRegistered?: string;
    dateValidated?: string;
    disabled?: boolean;
    disabledReason?: string;
    email?: string;
    familyName?: string;
    fullName?: string;
    givenName?: string;
    gossip?: string;
    groups?: {
        abbrev?: {
        };
        id?: number;
        name?: {
        };
        permitSelfRegistration?: boolean;
        recommendOnly?: boolean;
        roleId?: number;
        showTitle?: boolean;
    }[];
    id?: number;
    inlineHelp?: boolean;
    interests?: {
        id?: number;
        interest?: string;
    }[];
    locales?: string[];
    mailingAddress?: string;
    mustChangePassword?: boolean;
    orcid?: string;
    password?: string;
    phone?: string;
    preferredPublicName?: string;
    profileImage?: {
        dateUploaded?: string;
        height?: number;
        name?: string;
        uploadName?: string;
        width?: number;
    };
    signature?: string;
    url?: string;
    userName?: string;
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `_href`? | `string` | - |
| `affiliation`? | `string` | - |
| `apiKey`? | `string` | - |
| `apiKeyEnabled`? | `boolean` | - |
| `authId`? | `number` | - |
| `authStr`? | `string` | - |
| `billingAddress`? | `string` | - |
| `biography`? | `string` | - |
| `country`? | `string` | - |
| `dateLastEmail`? | `string` | - |
| `dateLastLogin`? | `string` | - |
| `dateRegistered`? | `string` | - |
| `dateValidated`? | `string` | - |
| `disabled`? | `boolean` | - |
| `disabledReason`? | `string` | - |
| `email`? | `string` | - |
| `familyName`? | `string` | - |
| `fullName`? | `string` | - |
| `givenName`? | `string` | - |
| `gossip`? | `string` | - |
| `groups`? | {     `abbrev`?: {     };     `id`?: `number`;     `name`?: {     };     `permitSelfRegistration`?: `boolean`;     `recommendOnly`?: `boolean`;     `roleId`?: `number`;     `showTitle`?: `boolean`; }[] | - |
| `id`? | `number` | - |
| `inlineHelp`? | `boolean` | - |
| `interests`? | {     `id`?: `number`;     `interest`?: `string`; }[] | - |
| `locales`? | `string`[] | - |
| `mailingAddress`? | `string` | - |
| `mustChangePassword`? | `boolean` | - |
| `orcid`? | `string` | - |
| `password`? | `string` | - |
| `phone`? | `string` | - |
| `preferredPublicName`? | `string` | `Description`  An optional field for users to specify how they prefer to be identified. |
| `profileImage`? | `object` | - |
| `profileImage.dateUploaded`? | `string` | - |
| `profileImage.height`? | `number` | - |
| `profileImage.name`? | `string` | - |
| `profileImage.uploadName`? | `string` | - |
| `profileImage.width`? | `number` | - |
| `signature`? | `string` | - |
| `url`? | `string` | - |
| `userName`? | `string` | - |

Defined in:  [lib/swagger-types.ts:2571](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L2571)

***

### `external`

***

### `operations`

***

### `paths`

This file was auto-generated by openapi-typescript.
Do not make direct changes to the file.

#### Properties

##### `/\_payments`

> `object`

```ts
{
    put: {
        parameters: {};
        responses: {
            200: unknown;
            400: {
                schema: {
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `put` | `object` | This endpoint is used on the settings page to save payment plugin settings alongside the general journal settings for enabling payments and setting the currency. |
| `put.parameters` | {} | - |
| `put.responses` | {     `200`: `unknown`;     `400`: {         `schema`: {         };     }; } | - |
| `put.responses.200` | `unknown` | The parameters you submitted |
| `put.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `put.responses.400.schema` | {  } | - |

Defined in:  [lib/swagger-types.ts:1772](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1772)

##### `/\_submissions`

> `object`

```ts
{
    get: {
        parameters: {};
        responses: {
            200: unknown;
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | This endpoint delivers a little bit of extra information about each submission that is used in the submissions list. This private endpoint saves a few extra HTTP requests, but it is more database-intensive for each query. |
| `get.parameters` | {} | - |
| `get.responses` | {     `200`: `unknown`; } | - |
| `get.responses.200` | `unknown` | List of submissions. |

Defined in:  [lib/swagger-types.ts:1842](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1842)

##### `/\_uploadPublicFile`

> `object`

```ts
{
    options: {
        responses: {
            200: unknown;
        };
    };
    post: {
        parameters: {
            body: {
                file?: unknown;
            };
        };
        responses: {
            200: {
                schema: {
                    url?: string;
                };
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            409: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            413: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            500: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `options` | `object` | Responds with the appopriate headers to indicate file uploads maybe be sent, required by some file upload utilities which send a preflight request. |
| `options.responses` | {     `200`: `unknown`; } | - |
| `options.responses.200` | `unknown` | An empty response body. |
| `post` | `object` | The user's public file directory supports files uploaded through the TinyMCE rich text editor. This is commonly used in context settings but is also available to all registered users through their profile biography. |
| `post.parameters` | {     `body`: {         `file`?: `unknown`;     }; } | - |
| `post.parameters.body` | {     `file`?: `unknown`; } | - |
| `post.parameters.body.file`? | `unknown` | Use the `file` key to upload your file. |
| `post.responses` | {     `200`: {         `schema`: {             `url`?: `string`;         };     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `409`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `413`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `500`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `post.responses.200` | {     `schema`: {         `url`?: `string`;     }; } | An object containing the URL to the uploaded file. |
| `post.responses.200.schema` | {     `url`?: `string`; } | - |
| `post.responses.200.schema.url`? | `string` | - |
| `post.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | One of the following errors occurred. \* No uploaded file could be found. \* This file type is not supported. \* The file you uploaded identifies itself as an image but it is not a valid image. \* The mime-type did not match the file extension. \* The file is too large. \* The server configuration could not support this file upload because there is no temporary directory, it doesn't have permission to write to the directory, or a PHP extension stopped the file upload.  The error message will contain further details. |
| `post.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.400.schema.error`? | `string` | - |
| `post.responses.400.schema.errorMessage`? | `string` | - |
| `post.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to upload this public file. |
| `post.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.403.schema.error`? | `string` | - |
| `post.responses.403.schema.errorMessage`? | `string` | - |
| `post.responses.409` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The upload failed for an unknown reason. |
| `post.responses.409.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.409.schema.error`? | `string` | - |
| `post.responses.409.schema.errorMessage`? | `string` | - |
| `post.responses.413` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Your user file directory is full. |
| `post.responses.413.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.413.schema.error`? | `string` | - |
| `post.responses.413.schema.errorMessage`? | `string` | - |
| `post.responses.500` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The server is unable to read or write to the public files directory. |
| `post.responses.500.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.500.schema.error`? | `string` | - |
| `post.responses.500.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1786](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1786)

##### `/announcements`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                count?: unknown;
                offset?: number;
                searchPhrase?: string;
                typeIds?: number[];
            };
        };
        responses: {
            200: {
                schema: {
                    items?: {
                        _href?: string;
                        assocId: number;
                        assocType: number;
                        dateExpire?: string;
                        datePosted?: string;
                        description?: string;
                        descriptionShort?: string;
                        id?: number;
                        title: string;
                        typeId?: number;
                        url?: string;
                    }[];
                    itemsMax?: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    post: {
        parameters: {};
        responses: {
            200: {
                schema: {
                    _href?: string;
                    assocId: number;
                    assocType: number;
                    dateExpire?: string;
                    datePosted?: string;
                    description?: string;
                    descriptionShort?: string;
                    id?: number;
                    title: string;
                    typeId?: number;
                    url?: string;
                };
            };
            400: {
                schema: {
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | - |
| `get.parameters` | {     `query`: {         `count`?: `unknown`;         `offset`?: `number`;         `searchPhrase`?: `string`;         `typeIds`?: `number`[];     }; } | - |
| `get.parameters.query` | {     `count`?: `unknown`;     `offset`?: `number`;     `searchPhrase`?: `string`;     `typeIds`?: `number`[]; } | - |
| `get.parameters.query.count`? | `unknown` | How many results to return in a single request. |
| `get.parameters.query.offset`? | `number` | Offset the results returned. Use this to receive subsequent pages of requests. |
| `get.parameters.query.searchPhrase`? | `string` | Filter results by a search phrase matched against the `title`, `descriptionShort`, and `description`. |
| `get.parameters.query.typeIds`? | `number`[] | Filter results by announcements of these announcement types. |
| `get.responses` | {     `200`: {         `schema`: {             `items`?: {                 `_href`?: `string`;                 `assocId`: `number`;                 `assocType`: `number`;                 `dateExpire`?: `string`;                 `datePosted`?: `string`;                 `description`?: `string`;                 `descriptionShort`?: `string`;                 `id`?: `number`;                 `title`: `string`;                 `typeId`?: `number`;                 `url`?: `string`;             }[];             `itemsMax`?: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `items`?: {             `_href`?: `string`;             `assocId`: `number`;             `assocType`: `number`;             `dateExpire`?: `string`;             `datePosted`?: `string`;             `description`?: `string`;             `descriptionShort`?: `string`;             `id`?: `number`;             `title`: `string`;             `typeId`?: `number`;             `url`?: `string`;         }[];         `itemsMax`?: `number`;     }; } | List of announcements. |
| `get.responses.200.schema` | {     `items`?: {         `_href`?: `string`;         `assocId`: `number`;         `assocType`: `number`;         `dateExpire`?: `string`;         `datePosted`?: `string`;         `description`?: `string`;         `descriptionShort`?: `string`;         `id`?: `number`;         `title`: `string`;         `typeId`?: `number`;         `url`?: `string`;     }[];     `itemsMax`?: `number`; } | - |
| `get.responses.200.schema.items`? | {     `_href`?: `string`;     `assocId`: `number`;     `assocType`: `number`;     `dateExpire`?: `string`;     `datePosted`?: `string`;     `description`?: `string`;     `descriptionShort`?: `string`;     `id`?: `number`;     `title`: `string`;     `typeId`?: `number`;     `url`?: `string`; }[] | - |
| `get.responses.200.schema.itemsMax`? | `number` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to view announcements in this context. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `post` | `object` | Create and publish a new announcement in this context. |
| `post.parameters` | {} | - |
| `post.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `assocId`: `number`;             `assocType`: `number`;             `dateExpire`?: `string`;             `datePosted`?: `string`;             `description`?: `string`;             `descriptionShort`?: `string`;             `id`?: `number`;             `title`: `string`;             `typeId`?: `number`;             `url`?: `string`;         };     };     `400`: {         `schema`: {         };     }; } | - |
| `post.responses.200` | {     `schema`: {         `_href`?: `string`;         `assocId`: `number`;         `assocType`: `number`;         `dateExpire`?: `string`;         `datePosted`?: `string`;         `description`?: `string`;         `descriptionShort`?: `string`;         `id`?: `number`;         `title`: `string`;         `typeId`?: `number`;         `url`?: `string`;     }; } | Details of the announcement that was just added. |
| `post.responses.200.schema` | {     `_href`?: `string`;     `assocId`: `number`;     `assocType`: `number`;     `dateExpire`?: `string`;     `datePosted`?: `string`;     `description`?: `string`;     `descriptionShort`?: `string`;     `id`?: `number`;     `title`: `string`;     `typeId`?: `number`;     `url`?: `string`; } | - |
| `post.responses.200.schema._href`? | `string` | Format: uri  `Description`  The URL to this announcement in the REST API. |
| `post.responses.200.schema.assocId` | `number` | `Description`  The journal, press or preprint server ID. |
| `post.responses.200.schema.assocType` | `number` | `Description`  The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS). |
| `post.responses.200.schema.dateExpire`? | `string` | `Description`  (Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers. |
| `post.responses.200.schema.datePosted`? | `string` | `Description`  The date this announcement was posted. |
| `post.responses.200.schema.description`? | `string` | `Description`  The full text of the announcement. |
| `post.responses.200.schema.descriptionShort`? | `string` | `Description`  A summary of this announcement. |
| `post.responses.200.schema.id`? | `number` | - |
| `post.responses.200.schema.title` | `string` | - |
| `post.responses.200.schema.typeId`? | `number` | `Description`  (Optional) One of the announcement type ids. |
| `post.responses.200.schema.url`? | `string` | Format: uri  `Description`  The URL to the published announcement. |
| `post.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `post.responses.400.schema` | {  } | - |

Defined in:  [lib/swagger-types.ts:1150](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1150)

##### `/announcements/\{announcementId}`

> `object`

```ts
{
    delete: {
        parameters: {
            path: {
                announcementId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    assocId: number;
                    assocType: number;
                    dateExpire?: string;
                    datePosted?: string;
                    description?: string;
                    descriptionShort?: string;
                    id?: number;
                    title: string;
                    typeId?: number;
                    url?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    get: {
        parameters: {
            path: {
                announcementId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    assocId: number;
                    assocType: number;
                    dateExpire?: string;
                    datePosted?: string;
                    description?: string;
                    descriptionShort?: string;
                    id?: number;
                    title: string;
                    typeId?: number;
                    url?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    put: {
        parameters: {
            path: {
                announcementId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    assocId: number;
                    assocType: number;
                    dateExpire?: string;
                    datePosted?: string;
                    description?: string;
                    descriptionShort?: string;
                    id?: number;
                    title: string;
                    typeId?: number;
                    url?: string;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `delete` | `object` | Delete an announcement. |
| `delete.parameters` | {     `path`: {         `announcementId`: `number`;     }; } | - |
| `delete.parameters.path` | {     `announcementId`: `number`; } | - |
| `delete.parameters.path.announcementId` | `number` | Announcement ID |
| `delete.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `assocId`: `number`;             `assocType`: `number`;             `dateExpire`?: `string`;             `datePosted`?: `string`;             `description`?: `string`;             `descriptionShort`?: `string`;             `id`?: `number`;             `title`: `string`;             `typeId`?: `number`;             `url`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `delete.responses.200` | {     `schema`: {         `_href`?: `string`;         `assocId`: `number`;         `assocType`: `number`;         `dateExpire`?: `string`;         `datePosted`?: `string`;         `description`?: `string`;         `descriptionShort`?: `string`;         `id`?: `number`;         `title`: `string`;         `typeId`?: `number`;         `url`?: `string`;     }; } | Details of the announcement that was just deleted. |
| `delete.responses.200.schema` | {     `_href`?: `string`;     `assocId`: `number`;     `assocType`: `number`;     `dateExpire`?: `string`;     `datePosted`?: `string`;     `description`?: `string`;     `descriptionShort`?: `string`;     `id`?: `number`;     `title`: `string`;     `typeId`?: `number`;     `url`?: `string`; } | - |
| `delete.responses.200.schema._href`? | `string` | Format: uri  `Description`  The URL to this announcement in the REST API. |
| `delete.responses.200.schema.assocId` | `number` | `Description`  The journal, press or preprint server ID. |
| `delete.responses.200.schema.assocType` | `number` | `Description`  The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS). |
| `delete.responses.200.schema.dateExpire`? | `string` | `Description`  (Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers. |
| `delete.responses.200.schema.datePosted`? | `string` | `Description`  The date this announcement was posted. |
| `delete.responses.200.schema.description`? | `string` | `Description`  The full text of the announcement. |
| `delete.responses.200.schema.descriptionShort`? | `string` | `Description`  A summary of this announcement. |
| `delete.responses.200.schema.id`? | `number` | - |
| `delete.responses.200.schema.title` | `string` | - |
| `delete.responses.200.schema.typeId`? | `number` | `Description`  (Optional) One of the announcement type ids. |
| `delete.responses.200.schema.url`? | `string` | Format: uri  `Description`  The URL to the published announcement. |
| `delete.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to delete this announcement. |
| `delete.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.403.schema.error`? | `string` | - |
| `delete.responses.403.schema.errorMessage`? | `string` | - |
| `delete.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested announcement could not be found. |
| `delete.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.404.schema.error`? | `string` | - |
| `delete.responses.404.schema.errorMessage`? | `string` | - |
| `get` | `object` | - |
| `get.parameters` | {     `path`: {         `announcementId`: `number`;     }; } | - |
| `get.parameters.path` | {     `announcementId`: `number`; } | - |
| `get.parameters.path.announcementId` | `number` | Announcement ID |
| `get.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `assocId`: `number`;             `assocType`: `number`;             `dateExpire`?: `string`;             `datePosted`?: `string`;             `description`?: `string`;             `descriptionShort`?: `string`;             `id`?: `number`;             `title`: `string`;             `typeId`?: `number`;             `url`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `_href`?: `string`;         `assocId`: `number`;         `assocType`: `number`;         `dateExpire`?: `string`;         `datePosted`?: `string`;         `description`?: `string`;         `descriptionShort`?: `string`;         `id`?: `number`;         `title`: `string`;         `typeId`?: `number`;         `url`?: `string`;     }; } | Announcement details. |
| `get.responses.200.schema` | {     `_href`?: `string`;     `assocId`: `number`;     `assocType`: `number`;     `dateExpire`?: `string`;     `datePosted`?: `string`;     `description`?: `string`;     `descriptionShort`?: `string`;     `id`?: `number`;     `title`: `string`;     `typeId`?: `number`;     `url`?: `string`; } | - |
| `get.responses.200.schema._href`? | `string` | Format: uri  `Description`  The URL to this announcement in the REST API. |
| `get.responses.200.schema.assocId` | `number` | `Description`  The journal, press or preprint server ID. |
| `get.responses.200.schema.assocType` | `number` | `Description`  The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS). |
| `get.responses.200.schema.dateExpire`? | `string` | `Description`  (Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers. |
| `get.responses.200.schema.datePosted`? | `string` | `Description`  The date this announcement was posted. |
| `get.responses.200.schema.description`? | `string` | `Description`  The full text of the announcement. |
| `get.responses.200.schema.descriptionShort`? | `string` | `Description`  A summary of this announcement. |
| `get.responses.200.schema.id`? | `number` | - |
| `get.responses.200.schema.title` | `string` | - |
| `get.responses.200.schema.typeId`? | `number` | `Description`  (Optional) One of the announcement type ids. |
| `get.responses.200.schema.url`? | `string` | Format: uri  `Description`  The URL to the published announcement. |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to view this announcement. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested announcement could not be found. Or you requested an announcement that is not part of this context. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `put` | `object` | Edit an announcement. |
| `put.parameters` | {     `path`: {         `announcementId`: `number`;     }; } | - |
| `put.parameters.path` | {     `announcementId`: `number`; } | - |
| `put.parameters.path.announcementId` | `number` | Announcement ID |
| `put.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `assocId`: `number`;             `assocType`: `number`;             `dateExpire`?: `string`;             `datePosted`?: `string`;             `description`?: `string`;             `descriptionShort`?: `string`;             `id`?: `number`;             `title`: `string`;             `typeId`?: `number`;             `url`?: `string`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `_href`?: `string`;         `assocId`: `number`;         `assocType`: `number`;         `dateExpire`?: `string`;         `datePosted`?: `string`;         `description`?: `string`;         `descriptionShort`?: `string`;         `id`?: `number`;         `title`: `string`;         `typeId`?: `number`;         `url`?: `string`;     }; } | The announcement that was just edited with the current values after the edit has occurred. |
| `put.responses.200.schema` | {     `_href`?: `string`;     `assocId`: `number`;     `assocType`: `number`;     `dateExpire`?: `string`;     `datePosted`?: `string`;     `description`?: `string`;     `descriptionShort`?: `string`;     `id`?: `number`;     `title`: `string`;     `typeId`?: `number`;     `url`?: `string`; } | - |
| `put.responses.200.schema._href`? | `string` | Format: uri  `Description`  The URL to this announcement in the REST API. |
| `put.responses.200.schema.assocId` | `number` | `Description`  The journal, press or preprint server ID. |
| `put.responses.200.schema.assocType` | `number` | `Description`  The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS). |
| `put.responses.200.schema.dateExpire`? | `string` | `Description`  (Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers. |
| `put.responses.200.schema.datePosted`? | `string` | `Description`  The date this announcement was posted. |
| `put.responses.200.schema.description`? | `string` | `Description`  The full text of the announcement. |
| `put.responses.200.schema.descriptionShort`? | `string` | `Description`  A summary of this announcement. |
| `put.responses.200.schema.id`? | `number` | - |
| `put.responses.200.schema.title` | `string` | - |
| `put.responses.200.schema.typeId`? | `number` | `Description`  (Optional) One of the announcement type ids. |
| `put.responses.200.schema.url`? | `string` | Format: uri  `Description`  The URL to the published announcement. |
| `put.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `put.responses.400.schema` | {  } | - |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to edit this announcement. |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.403.schema.error`? | `string` | - |
| `put.responses.403.schema.errorMessage`? | `string` | - |
| `put.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested announcement could not be found. |
| `put.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.404.schema.error`? | `string` | - |
| `put.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1193](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1193)

##### `/contexts`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                count?: unknown;
                isEnabled?: string;
                offset?: number;
                searchPhrase?: string;
            };
        };
        responses: {
            200: {
                schema: {
                    items?: {
                        _href?: string;
                        about?: string;
                        acronym?: string;
                        additionalHomeContent?: string;
                        agencies?: string;
                        announcementsIntroduction?: string;
                        authorGuidelines?: string;
                        authorInformation?: string;
                        automaticDoiDeposit?: boolean;
                        citations?: string;
                        competingInterests?: string;
                        contactAffiliation?: string;
                        contactEmail?: string;
                        contactName?: string;
                        contactPhone?: string;
                        copySubmissionAckAddress?: string;
                        copySubmissionAckPrimaryContact?: boolean;
                        copyrightHolderOther?: string;
                        copyrightHolderType?: string;
                        copyrightNotice?: string;
                        country?: string;
                        coverage?: string;
                        currency?: string;
                        customDoiSuffixType?: string;
                        customHeaders?: string;
                        dateFormatLong?: string;
                        dateFormatShort?: string;
                        datetimeFormatLong?: string;
                        datetimeFormatShort?: string;
                        defaultMetricType?: string;
                        defaultReviewMode?: number;
                        description?: string;
                        disableBulkEmailUserGroups?: number[];
                        disableSubmissions?: boolean;
                        disableUserReg?: boolean;
                        disciplines?: string;
                        doiPrefix?: string;
                        doiPublicationSuffixPattern?: string;
                        doiRepresentationSuffixPattern?: string;
                        editorialTeam?: string;
                        emailSignature?: string;
                        enableAnnouncements?: boolean;
                        enableClockss?: boolean;
                        enableDois?: boolean;
                        enableLockss?: boolean;
                        enabled?: boolean;
                        envelopeSender?: string;
                        favicon?: {
                            altText?: string;
                            dateUploaded?: string;
                            height?: number;
                            name?: string;
                            temporaryFileId?: number;
                            uploadName?: string;
                            width?: number;
                        };
                        homepageImage?: {
                            altText?: string;
                            dateUploaded?: string;
                            height?: number;
                            name?: string;
                            temporaryFileId?: number;
                            uploadName?: string;
                            width?: number;
                        };
                        id?: number;
                        itemsPerPage?: number;
                        keywords?: string;
                        languages?: string;
                        librarianInformation?: string;
                        licenseUrl?: string;
                        mailingAddress?: string;
                        name: string;
                        notifyAllAuthors?: boolean;
                        numAnnouncementsHomepage?: number;
                        numDaysBeforeInviteReminder?: number;
                        numDaysBeforeSubmitReminder?: number;
                        numPageLinks?: number;
                        numWeeksPerResponse?: number;
                        numWeeksPerReview?: number;
                        openAccessPolicy?: string;
                        pageFooter?: string;
                        pageHeaderLogoImage?: {
                            altText?: string;
                            dateUploaded?: string;
                            height?: number;
                            name?: string;
                            temporaryFileId?: number;
                            uploadName?: string;
                            width?: number;
                        };
                        paymentsEnabled?: boolean;
                        primaryLocale: string;
                        privacyStatement?: string;
                        rateReviewerOnQuality?: boolean;
                        readerInformation?: string;
                        registrationAgency?: string;
                        restrictReviewerFileAccess?: boolean;
                        restrictSiteAccess?: boolean;
                        reviewGuidelines?: string;
                        reviewerAccessKeysEnabled?: boolean;
                        rights?: string;
                        searchDescription?: string;
                        seq?: number;
                        showEnsuringLink?: boolean;
                        sidebar?: string[];
                        source?: string;
                        styleSheet?: {
                            dateUploaded?: string;
                            name?: string;
                            temporaryFileId?: number;
                            uploadName?: string;
                        };
                        subjects?: string;
                        submissionChecklist?: {
                            content?: string;
                            order?: number;
                        }[];
                        supportEmail?: string;
                        supportName?: string;
                        supportPhone?: string;
                        supportedFormLocales?: string[];
                        supportedLocales: string[];
                        supportedSubmissionLocales?: string[];
                        themePluginPath?: string;
                        timeFormat?: string;
                        type?: string;
                        url?: string;
                        urlPath: string;
                    }[];
                    itemsMax?: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    post: {
        parameters: {};
        responses: {
            200: {
                schema: {
                    _href?: string;
                    about?: string;
                    acronym?: string;
                    additionalHomeContent?: string;
                    agencies?: string;
                    announcementsIntroduction?: string;
                    authorGuidelines?: string;
                    authorInformation?: string;
                    automaticDoiDeposit?: boolean;
                    citations?: string;
                    competingInterests?: string;
                    contactAffiliation?: string;
                    contactEmail?: string;
                    contactName?: string;
                    contactPhone?: string;
                    copySubmissionAckAddress?: string;
                    copySubmissionAckPrimaryContact?: boolean;
                    copyrightHolderOther?: string;
                    copyrightHolderType?: string;
                    copyrightNotice?: string;
                    country?: string;
                    coverage?: string;
                    currency?: string;
                    customDoiSuffixType?: string;
                    customHeaders?: string;
                    dateFormatLong?: string;
                    dateFormatShort?: string;
                    datetimeFormatLong?: string;
                    datetimeFormatShort?: string;
                    defaultMetricType?: string;
                    defaultReviewMode?: number;
                    description?: string;
                    disableBulkEmailUserGroups?: number[];
                    disableSubmissions?: boolean;
                    disableUserReg?: boolean;
                    disciplines?: string;
                    doiPrefix?: string;
                    doiPublicationSuffixPattern?: string;
                    doiRepresentationSuffixPattern?: string;
                    editorialTeam?: string;
                    emailSignature?: string;
                    enableAnnouncements?: boolean;
                    enableClockss?: boolean;
                    enableDois?: boolean;
                    enableLockss?: boolean;
                    enabled?: boolean;
                    envelopeSender?: string;
                    favicon?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    homepageImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    id?: number;
                    itemsPerPage?: number;
                    keywords?: string;
                    languages?: string;
                    librarianInformation?: string;
                    licenseUrl?: string;
                    mailingAddress?: string;
                    name: string;
                    notifyAllAuthors?: boolean;
                    numAnnouncementsHomepage?: number;
                    numDaysBeforeInviteReminder?: number;
                    numDaysBeforeSubmitReminder?: number;
                    numPageLinks?: number;
                    numWeeksPerResponse?: number;
                    numWeeksPerReview?: number;
                    openAccessPolicy?: string;
                    pageFooter?: string;
                    pageHeaderLogoImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    paymentsEnabled?: boolean;
                    primaryLocale: string;
                    privacyStatement?: string;
                    rateReviewerOnQuality?: boolean;
                    readerInformation?: string;
                    registrationAgency?: string;
                    restrictReviewerFileAccess?: boolean;
                    restrictSiteAccess?: boolean;
                    reviewGuidelines?: string;
                    reviewerAccessKeysEnabled?: boolean;
                    rights?: string;
                    searchDescription?: string;
                    seq?: number;
                    showEnsuringLink?: boolean;
                    sidebar?: string[];
                    source?: string;
                    styleSheet?: {
                        dateUploaded?: string;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    subjects?: string;
                    submissionChecklist?: {
                        content?: string;
                        order?: number;
                    }[];
                    supportEmail?: string;
                    supportName?: string;
                    supportPhone?: string;
                    supportedFormLocales?: string[];
                    supportedLocales: string[];
                    supportedSubmissionLocales?: string[];
                    themePluginPath?: string;
                    timeFormat?: string;
                    type?: string;
                    url?: string;
                    urlPath: string;
                };
            };
            400: {
                schema: {
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Get an array of the journals (OJS), presses (OMP) or preprint servers (OPS) hosted on this site. |
| `get.parameters` | {     `query`: {         `count`?: `unknown`;         `isEnabled`?: `string`;         `offset`?: `number`;         `searchPhrase`?: `string`;     }; } | - |
| `get.parameters.query` | {     `count`?: `unknown`;     `isEnabled`?: `string`;     `offset`?: `number`;     `searchPhrase`?: `string`; } | - |
| `get.parameters.query.count`? | `unknown` | How many results to return in a single request. Max is `100`. |
| `get.parameters.query.isEnabled`? | `string` | Filter results by enabled/disabled contexts. Any truthy or falsey value will get enabled/disabled contexts. Leave this parameter out to get all contexts. |
| `get.parameters.query.offset`? | `number` | Offset the results returned. Use this to receive subsequent pages of requests. |
| `get.parameters.query.searchPhrase`? | `string` | Filter results by a search phrase matched against the `name`, `description`, `acronym`, or `abbreviation`. |
| `get.responses` | {     `200`: {         `schema`: {             `items`?: {                 `_href`?: `string`;                 `about`?: `string`;                 `acronym`?: `string`;                 `additionalHomeContent`?: `string`;                 `agencies`?: `string`;                 `announcementsIntroduction`?: `string`;                 `authorGuidelines`?: `string`;                 `authorInformation`?: `string`;                 `automaticDoiDeposit`?: `boolean`;                 `citations`?: `string`;                 `competingInterests`?: `string`;                 `contactAffiliation`?: `string`;                 `contactEmail`?: `string`;                 `contactName`?: `string`;                 `contactPhone`?: `string`;                 `copySubmissionAckAddress`?: `string`;                 `copySubmissionAckPrimaryContact`?: `boolean`;                 `copyrightHolderOther`?: `string`;                 `copyrightHolderType`?: `string`;                 `copyrightNotice`?: `string`;                 `country`?: `string`;                 `coverage`?: `string`;                 `currency`?: `string`;                 `customDoiSuffixType`?: `string`;                 `customHeaders`?: `string`;                 `dateFormatLong`?: `string`;                 `dateFormatShort`?: `string`;                 `datetimeFormatLong`?: `string`;                 `datetimeFormatShort`?: `string`;                 `defaultMetricType`?: `string`;                 `defaultReviewMode`?: `number`;                 `description`?: `string`;                 `disableBulkEmailUserGroups`?: `number`[];                 `disableSubmissions`?: `boolean`;                 `disableUserReg`?: `boolean`;                 `disciplines`?: `string`;                 `doiPrefix`?: `string`;                 `doiPublicationSuffixPattern`?: `string`;                 `doiRepresentationSuffixPattern`?: `string`;                 `editorialTeam`?: `string`;                 `emailSignature`?: `string`;                 `enableAnnouncements`?: `boolean`;                 `enableClockss`?: `boolean`;                 `enableDois`?: `boolean`;                 `enableLockss`?: `boolean`;                 `enabled`?: `boolean`;                 `envelopeSender`?: `string`;                 `favicon`?: {                     `altText`?: `string`;                     `dateUploaded`?: `string`;                     `height`?: `number`;                     `name`?: `string`;                     `temporaryFileId`?: `number`;                     `uploadName`?: `string`;                     `width`?: `number`;                 };                 `homepageImage`?: {                     `altText`?: `string`;                     `dateUploaded`?: `string`;                     `height`?: `number`;                     `name`?: `string`;                     `temporaryFileId`?: `number`;                     `uploadName`?: `string`;                     `width`?: `number`;                 };                 `id`?: `number`;                 `itemsPerPage`?: `number`;                 `keywords`?: `string`;                 `languages`?: `string`;                 `librarianInformation`?: `string`;                 `licenseUrl`?: `string`;                 `mailingAddress`?: `string`;                 `name`: `string`;                 `notifyAllAuthors`?: `boolean`;                 `numAnnouncementsHomepage`?: `number`;                 `numDaysBeforeInviteReminder`?: `number`;                 `numDaysBeforeSubmitReminder`?: `number`;                 `numPageLinks`?: `number`;                 `numWeeksPerResponse`?: `number`;                 `numWeeksPerReview`?: `number`;                 `openAccessPolicy`?: `string`;                 `pageFooter`?: `string`;                 `pageHeaderLogoImage`?: {                     `altText`?: `string`;                     `dateUploaded`?: `string`;                     `height`?: `number`;                     `name`?: `string`;                     `temporaryFileId`?: `number`;                     `uploadName`?: `string`;                     `width`?: `number`;                 };                 `paymentsEnabled`?: `boolean`;                 `primaryLocale`: `string`;                 `privacyStatement`?: `string`;                 `rateReviewerOnQuality`?: `boolean`;                 `readerInformation`?: `string`;                 `registrationAgency`?: `string`;                 `restrictReviewerFileAccess`?: `boolean`;                 `restrictSiteAccess`?: `boolean`;                 `reviewGuidelines`?: `string`;                 `reviewerAccessKeysEnabled`?: `boolean`;                 `rights`?: `string`;                 `searchDescription`?: `string`;                 `seq`?: `number`;                 `showEnsuringLink`?: `boolean`;                 `sidebar`?: `string`[];                 `source`?: `string`;                 `styleSheet`?: {                     `dateUploaded`?: `string`;                     `name`?: `string`;                     `temporaryFileId`?: `number`;                     `uploadName`?: `string`;                 };                 `subjects`?: `string`;                 `submissionChecklist`?: {                     `content`?: `string`;                     `order`?: `number`;                 }[];                 `supportEmail`?: `string`;                 `supportName`?: `string`;                 `supportPhone`?: `string`;                 `supportedFormLocales`?: `string`[];                 `supportedLocales`: `string`[];                 `supportedSubmissionLocales`?: `string`[];                 `themePluginPath`?: `string`;                 `timeFormat`?: `string`;                 `type`?: `string`;                 `url`?: `string`;                 `urlPath`: `string`;             }[];             `itemsMax`?: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `items`?: {             `_href`?: `string`;             `about`?: `string`;             `acronym`?: `string`;             `additionalHomeContent`?: `string`;             `agencies`?: `string`;             `announcementsIntroduction`?: `string`;             `authorGuidelines`?: `string`;             `authorInformation`?: `string`;             `automaticDoiDeposit`?: `boolean`;             `citations`?: `string`;             `competingInterests`?: `string`;             `contactAffiliation`?: `string`;             `contactEmail`?: `string`;             `contactName`?: `string`;             `contactPhone`?: `string`;             `copySubmissionAckAddress`?: `string`;             `copySubmissionAckPrimaryContact`?: `boolean`;             `copyrightHolderOther`?: `string`;             `copyrightHolderType`?: `string`;             `copyrightNotice`?: `string`;             `country`?: `string`;             `coverage`?: `string`;             `currency`?: `string`;             `customDoiSuffixType`?: `string`;             `customHeaders`?: `string`;             `dateFormatLong`?: `string`;             `dateFormatShort`?: `string`;             `datetimeFormatLong`?: `string`;             `datetimeFormatShort`?: `string`;             `defaultMetricType`?: `string`;             `defaultReviewMode`?: `number`;             `description`?: `string`;             `disableBulkEmailUserGroups`?: `number`[];             `disableSubmissions`?: `boolean`;             `disableUserReg`?: `boolean`;             `disciplines`?: `string`;             `doiPrefix`?: `string`;             `doiPublicationSuffixPattern`?: `string`;             `doiRepresentationSuffixPattern`?: `string`;             `editorialTeam`?: `string`;             `emailSignature`?: `string`;             `enableAnnouncements`?: `boolean`;             `enableClockss`?: `boolean`;             `enableDois`?: `boolean`;             `enableLockss`?: `boolean`;             `enabled`?: `boolean`;             `envelopeSender`?: `string`;             `favicon`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `homepageImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `id`?: `number`;             `itemsPerPage`?: `number`;             `keywords`?: `string`;             `languages`?: `string`;             `librarianInformation`?: `string`;             `licenseUrl`?: `string`;             `mailingAddress`?: `string`;             `name`: `string`;             `notifyAllAuthors`?: `boolean`;             `numAnnouncementsHomepage`?: `number`;             `numDaysBeforeInviteReminder`?: `number`;             `numDaysBeforeSubmitReminder`?: `number`;             `numPageLinks`?: `number`;             `numWeeksPerResponse`?: `number`;             `numWeeksPerReview`?: `number`;             `openAccessPolicy`?: `string`;             `pageFooter`?: `string`;             `pageHeaderLogoImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `paymentsEnabled`?: `boolean`;             `primaryLocale`: `string`;             `privacyStatement`?: `string`;             `rateReviewerOnQuality`?: `boolean`;             `readerInformation`?: `string`;             `registrationAgency`?: `string`;             `restrictReviewerFileAccess`?: `boolean`;             `restrictSiteAccess`?: `boolean`;             `reviewGuidelines`?: `string`;             `reviewerAccessKeysEnabled`?: `boolean`;             `rights`?: `string`;             `searchDescription`?: `string`;             `seq`?: `number`;             `showEnsuringLink`?: `boolean`;             `sidebar`?: `string`[];             `source`?: `string`;             `styleSheet`?: {                 `dateUploaded`?: `string`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `subjects`?: `string`;             `submissionChecklist`?: {                 `content`?: `string`;                 `order`?: `number`;             }[];             `supportEmail`?: `string`;             `supportName`?: `string`;             `supportPhone`?: `string`;             `supportedFormLocales`?: `string`[];             `supportedLocales`: `string`[];             `supportedSubmissionLocales`?: `string`[];             `themePluginPath`?: `string`;             `timeFormat`?: `string`;             `type`?: `string`;             `url`?: `string`;             `urlPath`: `string`;         }[];         `itemsMax`?: `number`;     }; } | List of contexts. |
| `get.responses.200.schema` | {     `items`?: {         `_href`?: `string`;         `about`?: `string`;         `acronym`?: `string`;         `additionalHomeContent`?: `string`;         `agencies`?: `string`;         `announcementsIntroduction`?: `string`;         `authorGuidelines`?: `string`;         `authorInformation`?: `string`;         `automaticDoiDeposit`?: `boolean`;         `citations`?: `string`;         `competingInterests`?: `string`;         `contactAffiliation`?: `string`;         `contactEmail`?: `string`;         `contactName`?: `string`;         `contactPhone`?: `string`;         `copySubmissionAckAddress`?: `string`;         `copySubmissionAckPrimaryContact`?: `boolean`;         `copyrightHolderOther`?: `string`;         `copyrightHolderType`?: `string`;         `copyrightNotice`?: `string`;         `country`?: `string`;         `coverage`?: `string`;         `currency`?: `string`;         `customDoiSuffixType`?: `string`;         `customHeaders`?: `string`;         `dateFormatLong`?: `string`;         `dateFormatShort`?: `string`;         `datetimeFormatLong`?: `string`;         `datetimeFormatShort`?: `string`;         `defaultMetricType`?: `string`;         `defaultReviewMode`?: `number`;         `description`?: `string`;         `disableBulkEmailUserGroups`?: `number`[];         `disableSubmissions`?: `boolean`;         `disableUserReg`?: `boolean`;         `disciplines`?: `string`;         `doiPrefix`?: `string`;         `doiPublicationSuffixPattern`?: `string`;         `doiRepresentationSuffixPattern`?: `string`;         `editorialTeam`?: `string`;         `emailSignature`?: `string`;         `enableAnnouncements`?: `boolean`;         `enableClockss`?: `boolean`;         `enableDois`?: `boolean`;         `enableLockss`?: `boolean`;         `enabled`?: `boolean`;         `envelopeSender`?: `string`;         `favicon`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `homepageImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `id`?: `number`;         `itemsPerPage`?: `number`;         `keywords`?: `string`;         `languages`?: `string`;         `librarianInformation`?: `string`;         `licenseUrl`?: `string`;         `mailingAddress`?: `string`;         `name`: `string`;         `notifyAllAuthors`?: `boolean`;         `numAnnouncementsHomepage`?: `number`;         `numDaysBeforeInviteReminder`?: `number`;         `numDaysBeforeSubmitReminder`?: `number`;         `numPageLinks`?: `number`;         `numWeeksPerResponse`?: `number`;         `numWeeksPerReview`?: `number`;         `openAccessPolicy`?: `string`;         `pageFooter`?: `string`;         `pageHeaderLogoImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `paymentsEnabled`?: `boolean`;         `primaryLocale`: `string`;         `privacyStatement`?: `string`;         `rateReviewerOnQuality`?: `boolean`;         `readerInformation`?: `string`;         `registrationAgency`?: `string`;         `restrictReviewerFileAccess`?: `boolean`;         `restrictSiteAccess`?: `boolean`;         `reviewGuidelines`?: `string`;         `reviewerAccessKeysEnabled`?: `boolean`;         `rights`?: `string`;         `searchDescription`?: `string`;         `seq`?: `number`;         `showEnsuringLink`?: `boolean`;         `sidebar`?: `string`[];         `source`?: `string`;         `styleSheet`?: {             `dateUploaded`?: `string`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `subjects`?: `string`;         `submissionChecklist`?: {             `content`?: `string`;             `order`?: `number`;         }[];         `supportEmail`?: `string`;         `supportName`?: `string`;         `supportPhone`?: `string`;         `supportedFormLocales`?: `string`[];         `supportedLocales`: `string`[];         `supportedSubmissionLocales`?: `string`[];         `themePluginPath`?: `string`;         `timeFormat`?: `string`;         `type`?: `string`;         `url`?: `string`;         `urlPath`: `string`;     }[];     `itemsMax`?: `number`; } | - |
| `get.responses.200.schema.items`? | {     `_href`?: `string`;     `about`?: `string`;     `acronym`?: `string`;     `additionalHomeContent`?: `string`;     `agencies`?: `string`;     `announcementsIntroduction`?: `string`;     `authorGuidelines`?: `string`;     `authorInformation`?: `string`;     `automaticDoiDeposit`?: `boolean`;     `citations`?: `string`;     `competingInterests`?: `string`;     `contactAffiliation`?: `string`;     `contactEmail`?: `string`;     `contactName`?: `string`;     `contactPhone`?: `string`;     `copySubmissionAckAddress`?: `string`;     `copySubmissionAckPrimaryContact`?: `boolean`;     `copyrightHolderOther`?: `string`;     `copyrightHolderType`?: `string`;     `copyrightNotice`?: `string`;     `country`?: `string`;     `coverage`?: `string`;     `currency`?: `string`;     `customDoiSuffixType`?: `string`;     `customHeaders`?: `string`;     `dateFormatLong`?: `string`;     `dateFormatShort`?: `string`;     `datetimeFormatLong`?: `string`;     `datetimeFormatShort`?: `string`;     `defaultMetricType`?: `string`;     `defaultReviewMode`?: `number`;     `description`?: `string`;     `disableBulkEmailUserGroups`?: `number`[];     `disableSubmissions`?: `boolean`;     `disableUserReg`?: `boolean`;     `disciplines`?: `string`;     `doiPrefix`?: `string`;     `doiPublicationSuffixPattern`?: `string`;     `doiRepresentationSuffixPattern`?: `string`;     `editorialTeam`?: `string`;     `emailSignature`?: `string`;     `enableAnnouncements`?: `boolean`;     `enableClockss`?: `boolean`;     `enableDois`?: `boolean`;     `enableLockss`?: `boolean`;     `enabled`?: `boolean`;     `envelopeSender`?: `string`;     `favicon`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `homepageImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `id`?: `number`;     `itemsPerPage`?: `number`;     `keywords`?: `string`;     `languages`?: `string`;     `librarianInformation`?: `string`;     `licenseUrl`?: `string`;     `mailingAddress`?: `string`;     `name`: `string`;     `notifyAllAuthors`?: `boolean`;     `numAnnouncementsHomepage`?: `number`;     `numDaysBeforeInviteReminder`?: `number`;     `numDaysBeforeSubmitReminder`?: `number`;     `numPageLinks`?: `number`;     `numWeeksPerResponse`?: `number`;     `numWeeksPerReview`?: `number`;     `openAccessPolicy`?: `string`;     `pageFooter`?: `string`;     `pageHeaderLogoImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `paymentsEnabled`?: `boolean`;     `primaryLocale`: `string`;     `privacyStatement`?: `string`;     `rateReviewerOnQuality`?: `boolean`;     `readerInformation`?: `string`;     `registrationAgency`?: `string`;     `restrictReviewerFileAccess`?: `boolean`;     `restrictSiteAccess`?: `boolean`;     `reviewGuidelines`?: `string`;     `reviewerAccessKeysEnabled`?: `boolean`;     `rights`?: `string`;     `searchDescription`?: `string`;     `seq`?: `number`;     `showEnsuringLink`?: `boolean`;     `sidebar`?: `string`[];     `source`?: `string`;     `styleSheet`?: {         `dateUploaded`?: `string`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `subjects`?: `string`;     `submissionChecklist`?: {         `content`?: `string`;         `order`?: `number`;     }[];     `supportEmail`?: `string`;     `supportName`?: `string`;     `supportPhone`?: `string`;     `supportedFormLocales`?: `string`[];     `supportedLocales`: `string`[];     `supportedSubmissionLocales`?: `string`[];     `themePluginPath`?: `string`;     `timeFormat`?: `string`;     `type`?: `string`;     `url`?: `string`;     `urlPath`: `string`; }[] | - |
| `get.responses.200.schema.itemsMax`? | `number` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to view disabled contexts. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `post` | `object` | Create a new journal (OJS), press (OMP) or preprint server (OPS). |
| `post.parameters` | {} | - |
| `post.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `about`?: `string`;             `acronym`?: `string`;             `additionalHomeContent`?: `string`;             `agencies`?: `string`;             `announcementsIntroduction`?: `string`;             `authorGuidelines`?: `string`;             `authorInformation`?: `string`;             `automaticDoiDeposit`?: `boolean`;             `citations`?: `string`;             `competingInterests`?: `string`;             `contactAffiliation`?: `string`;             `contactEmail`?: `string`;             `contactName`?: `string`;             `contactPhone`?: `string`;             `copySubmissionAckAddress`?: `string`;             `copySubmissionAckPrimaryContact`?: `boolean`;             `copyrightHolderOther`?: `string`;             `copyrightHolderType`?: `string`;             `copyrightNotice`?: `string`;             `country`?: `string`;             `coverage`?: `string`;             `currency`?: `string`;             `customDoiSuffixType`?: `string`;             `customHeaders`?: `string`;             `dateFormatLong`?: `string`;             `dateFormatShort`?: `string`;             `datetimeFormatLong`?: `string`;             `datetimeFormatShort`?: `string`;             `defaultMetricType`?: `string`;             `defaultReviewMode`?: `number`;             `description`?: `string`;             `disableBulkEmailUserGroups`?: `number`[];             `disableSubmissions`?: `boolean`;             `disableUserReg`?: `boolean`;             `disciplines`?: `string`;             `doiPrefix`?: `string`;             `doiPublicationSuffixPattern`?: `string`;             `doiRepresentationSuffixPattern`?: `string`;             `editorialTeam`?: `string`;             `emailSignature`?: `string`;             `enableAnnouncements`?: `boolean`;             `enableClockss`?: `boolean`;             `enableDois`?: `boolean`;             `enableLockss`?: `boolean`;             `enabled`?: `boolean`;             `envelopeSender`?: `string`;             `favicon`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `homepageImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `id`?: `number`;             `itemsPerPage`?: `number`;             `keywords`?: `string`;             `languages`?: `string`;             `librarianInformation`?: `string`;             `licenseUrl`?: `string`;             `mailingAddress`?: `string`;             `name`: `string`;             `notifyAllAuthors`?: `boolean`;             `numAnnouncementsHomepage`?: `number`;             `numDaysBeforeInviteReminder`?: `number`;             `numDaysBeforeSubmitReminder`?: `number`;             `numPageLinks`?: `number`;             `numWeeksPerResponse`?: `number`;             `numWeeksPerReview`?: `number`;             `openAccessPolicy`?: `string`;             `pageFooter`?: `string`;             `pageHeaderLogoImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `paymentsEnabled`?: `boolean`;             `primaryLocale`: `string`;             `privacyStatement`?: `string`;             `rateReviewerOnQuality`?: `boolean`;             `readerInformation`?: `string`;             `registrationAgency`?: `string`;             `restrictReviewerFileAccess`?: `boolean`;             `restrictSiteAccess`?: `boolean`;             `reviewGuidelines`?: `string`;             `reviewerAccessKeysEnabled`?: `boolean`;             `rights`?: `string`;             `searchDescription`?: `string`;             `seq`?: `number`;             `showEnsuringLink`?: `boolean`;             `sidebar`?: `string`[];             `source`?: `string`;             `styleSheet`?: {                 `dateUploaded`?: `string`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `subjects`?: `string`;             `submissionChecklist`?: {                 `content`?: `string`;                 `order`?: `number`;             }[];             `supportEmail`?: `string`;             `supportName`?: `string`;             `supportPhone`?: `string`;             `supportedFormLocales`?: `string`[];             `supportedLocales`: `string`[];             `supportedSubmissionLocales`?: `string`[];             `themePluginPath`?: `string`;             `timeFormat`?: `string`;             `type`?: `string`;             `url`?: `string`;             `urlPath`: `string`;         };     };     `400`: {         `schema`: {         };     }; } | - |
| `post.responses.200` | {     `schema`: {         `_href`?: `string`;         `about`?: `string`;         `acronym`?: `string`;         `additionalHomeContent`?: `string`;         `agencies`?: `string`;         `announcementsIntroduction`?: `string`;         `authorGuidelines`?: `string`;         `authorInformation`?: `string`;         `automaticDoiDeposit`?: `boolean`;         `citations`?: `string`;         `competingInterests`?: `string`;         `contactAffiliation`?: `string`;         `contactEmail`?: `string`;         `contactName`?: `string`;         `contactPhone`?: `string`;         `copySubmissionAckAddress`?: `string`;         `copySubmissionAckPrimaryContact`?: `boolean`;         `copyrightHolderOther`?: `string`;         `copyrightHolderType`?: `string`;         `copyrightNotice`?: `string`;         `country`?: `string`;         `coverage`?: `string`;         `currency`?: `string`;         `customDoiSuffixType`?: `string`;         `customHeaders`?: `string`;         `dateFormatLong`?: `string`;         `dateFormatShort`?: `string`;         `datetimeFormatLong`?: `string`;         `datetimeFormatShort`?: `string`;         `defaultMetricType`?: `string`;         `defaultReviewMode`?: `number`;         `description`?: `string`;         `disableBulkEmailUserGroups`?: `number`[];         `disableSubmissions`?: `boolean`;         `disableUserReg`?: `boolean`;         `disciplines`?: `string`;         `doiPrefix`?: `string`;         `doiPublicationSuffixPattern`?: `string`;         `doiRepresentationSuffixPattern`?: `string`;         `editorialTeam`?: `string`;         `emailSignature`?: `string`;         `enableAnnouncements`?: `boolean`;         `enableClockss`?: `boolean`;         `enableDois`?: `boolean`;         `enableLockss`?: `boolean`;         `enabled`?: `boolean`;         `envelopeSender`?: `string`;         `favicon`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `homepageImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `id`?: `number`;         `itemsPerPage`?: `number`;         `keywords`?: `string`;         `languages`?: `string`;         `librarianInformation`?: `string`;         `licenseUrl`?: `string`;         `mailingAddress`?: `string`;         `name`: `string`;         `notifyAllAuthors`?: `boolean`;         `numAnnouncementsHomepage`?: `number`;         `numDaysBeforeInviteReminder`?: `number`;         `numDaysBeforeSubmitReminder`?: `number`;         `numPageLinks`?: `number`;         `numWeeksPerResponse`?: `number`;         `numWeeksPerReview`?: `number`;         `openAccessPolicy`?: `string`;         `pageFooter`?: `string`;         `pageHeaderLogoImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `paymentsEnabled`?: `boolean`;         `primaryLocale`: `string`;         `privacyStatement`?: `string`;         `rateReviewerOnQuality`?: `boolean`;         `readerInformation`?: `string`;         `registrationAgency`?: `string`;         `restrictReviewerFileAccess`?: `boolean`;         `restrictSiteAccess`?: `boolean`;         `reviewGuidelines`?: `string`;         `reviewerAccessKeysEnabled`?: `boolean`;         `rights`?: `string`;         `searchDescription`?: `string`;         `seq`?: `number`;         `showEnsuringLink`?: `boolean`;         `sidebar`?: `string`[];         `source`?: `string`;         `styleSheet`?: {             `dateUploaded`?: `string`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `subjects`?: `string`;         `submissionChecklist`?: {             `content`?: `string`;             `order`?: `number`;         }[];         `supportEmail`?: `string`;         `supportName`?: `string`;         `supportPhone`?: `string`;         `supportedFormLocales`?: `string`[];         `supportedLocales`: `string`[];         `supportedSubmissionLocales`?: `string`[];         `themePluginPath`?: `string`;         `timeFormat`?: `string`;         `type`?: `string`;         `url`?: `string`;         `urlPath`: `string`;     }; } | Details of the context that was just added. |
| `post.responses.200.schema` | {     `_href`?: `string`;     `about`?: `string`;     `acronym`?: `string`;     `additionalHomeContent`?: `string`;     `agencies`?: `string`;     `announcementsIntroduction`?: `string`;     `authorGuidelines`?: `string`;     `authorInformation`?: `string`;     `automaticDoiDeposit`?: `boolean`;     `citations`?: `string`;     `competingInterests`?: `string`;     `contactAffiliation`?: `string`;     `contactEmail`?: `string`;     `contactName`?: `string`;     `contactPhone`?: `string`;     `copySubmissionAckAddress`?: `string`;     `copySubmissionAckPrimaryContact`?: `boolean`;     `copyrightHolderOther`?: `string`;     `copyrightHolderType`?: `string`;     `copyrightNotice`?: `string`;     `country`?: `string`;     `coverage`?: `string`;     `currency`?: `string`;     `customDoiSuffixType`?: `string`;     `customHeaders`?: `string`;     `dateFormatLong`?: `string`;     `dateFormatShort`?: `string`;     `datetimeFormatLong`?: `string`;     `datetimeFormatShort`?: `string`;     `defaultMetricType`?: `string`;     `defaultReviewMode`?: `number`;     `description`?: `string`;     `disableBulkEmailUserGroups`?: `number`[];     `disableSubmissions`?: `boolean`;     `disableUserReg`?: `boolean`;     `disciplines`?: `string`;     `doiPrefix`?: `string`;     `doiPublicationSuffixPattern`?: `string`;     `doiRepresentationSuffixPattern`?: `string`;     `editorialTeam`?: `string`;     `emailSignature`?: `string`;     `enableAnnouncements`?: `boolean`;     `enableClockss`?: `boolean`;     `enableDois`?: `boolean`;     `enableLockss`?: `boolean`;     `enabled`?: `boolean`;     `envelopeSender`?: `string`;     `favicon`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `homepageImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `id`?: `number`;     `itemsPerPage`?: `number`;     `keywords`?: `string`;     `languages`?: `string`;     `librarianInformation`?: `string`;     `licenseUrl`?: `string`;     `mailingAddress`?: `string`;     `name`: `string`;     `notifyAllAuthors`?: `boolean`;     `numAnnouncementsHomepage`?: `number`;     `numDaysBeforeInviteReminder`?: `number`;     `numDaysBeforeSubmitReminder`?: `number`;     `numPageLinks`?: `number`;     `numWeeksPerResponse`?: `number`;     `numWeeksPerReview`?: `number`;     `openAccessPolicy`?: `string`;     `pageFooter`?: `string`;     `pageHeaderLogoImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `paymentsEnabled`?: `boolean`;     `primaryLocale`: `string`;     `privacyStatement`?: `string`;     `rateReviewerOnQuality`?: `boolean`;     `readerInformation`?: `string`;     `registrationAgency`?: `string`;     `restrictReviewerFileAccess`?: `boolean`;     `restrictSiteAccess`?: `boolean`;     `reviewGuidelines`?: `string`;     `reviewerAccessKeysEnabled`?: `boolean`;     `rights`?: `string`;     `searchDescription`?: `string`;     `seq`?: `number`;     `showEnsuringLink`?: `boolean`;     `sidebar`?: `string`[];     `source`?: `string`;     `styleSheet`?: {         `dateUploaded`?: `string`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `subjects`?: `string`;     `submissionChecklist`?: {         `content`?: `string`;         `order`?: `number`;     }[];     `supportEmail`?: `string`;     `supportName`?: `string`;     `supportPhone`?: `string`;     `supportedFormLocales`?: `string`[];     `supportedLocales`: `string`[];     `supportedSubmissionLocales`?: `string`[];     `themePluginPath`?: `string`;     `timeFormat`?: `string`;     `type`?: `string`;     `url`?: `string`;     `urlPath`: `string`; } | - |
| `post.responses.200.schema._href`? | `string` | Format: uri |
| `post.responses.200.schema.about`? | `string` | - |
| `post.responses.200.schema.acronym`? | `string` | - |
| `post.responses.200.schema.additionalHomeContent`? | `string` | - |
| `post.responses.200.schema.agencies`? | `string` | `Description`  Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `post.responses.200.schema.announcementsIntroduction`? | `string` | - |
| `post.responses.200.schema.authorGuidelines`? | `string` | - |
| `post.responses.200.schema.authorInformation`? | `string` | - |
| `post.responses.200.schema.automaticDoiDeposit`? | `boolean` | - |
| `post.responses.200.schema.citations`? | `string` | `Description`  Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `post.responses.200.schema.competingInterests`? | `string` | - |
| `post.responses.200.schema.contactAffiliation`? | `string` | - |
| `post.responses.200.schema.contactEmail`? | `string` | - |
| `post.responses.200.schema.contactName`? | `string` | - |
| `post.responses.200.schema.contactPhone`? | `string` | - |
| `post.responses.200.schema.copySubmissionAckAddress`? | `string` | `Description`  A copy of the submission acknowledgement email will be sent to any of the email addresses entered here. Separate multiple email addresses with a comma. Example: one\@example.com,two\@example.com |
| `post.responses.200.schema.copySubmissionAckPrimaryContact`? | `boolean` | `Description`  A copy of the submission acknowledgement email will be sent to this context's primary contact when true. |
| `post.responses.200.schema.copyrightHolderOther`? | `string` | - |
| `post.responses.200.schema.copyrightHolderType`? | `string` | - |
| `post.responses.200.schema.copyrightNotice`? | `string` | - |
| `post.responses.200.schema.country`? | `string` | - |
| `post.responses.200.schema.coverage`? | `string` | `Description`  Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `post.responses.200.schema.currency`? | `string` | - |
| `post.responses.200.schema.customDoiSuffixType`? | `string` | - |
| `post.responses.200.schema.customHeaders`? | `string` | - |
| `post.responses.200.schema.dateFormatLong`? | `string` | - |
| `post.responses.200.schema.dateFormatShort`? | `string` | - |
| `post.responses.200.schema.datetimeFormatLong`? | `string` | - |
| `post.responses.200.schema.datetimeFormatShort`? | `string` | - |
| `post.responses.200.schema.defaultMetricType`? | `string` | - |
| `post.responses.200.schema.defaultReviewMode`? | `number` | `Default`  2 |
| `post.responses.200.schema.description`? | `string` | - |
| `post.responses.200.schema.disableBulkEmailUserGroups`? | `number`[] | `Description`  User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property. |
| `post.responses.200.schema.disableSubmissions`? | `boolean` | - |
| `post.responses.200.schema.disableUserReg`? | `boolean` | - |
| `post.responses.200.schema.disciplines`? | `string` | `Description`  Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `post.responses.200.schema.doiPrefix`? | `string` | - |
| `post.responses.200.schema.doiPublicationSuffixPattern`? | `string` | - |
| `post.responses.200.schema.doiRepresentationSuffixPattern`? | `string` | - |
| `post.responses.200.schema.editorialTeam`? | `string` | - |
| `post.responses.200.schema.emailSignature`? | `string` | - |
| `post.responses.200.schema.enableAnnouncements`? | `boolean` | - |
| `post.responses.200.schema.enableClockss`? | `boolean` | - |
| `post.responses.200.schema.enableDois`? | `boolean` | - |
| `post.responses.200.schema.enableLockss`? | `boolean` | - |
| `post.responses.200.schema.enabled`? | `boolean` | - |
| `post.responses.200.schema.envelopeSender`? | `string` | - |
| `post.responses.200.schema.favicon`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `post.responses.200.schema.favicon.altText`? | `string` | - |
| `post.responses.200.schema.favicon.dateUploaded`? | `string` | - |
| `post.responses.200.schema.favicon.height`? | `number` | - |
| `post.responses.200.schema.favicon.name`? | `string` | - |
| `post.responses.200.schema.favicon.temporaryFileId`? | `number` | - |
| `post.responses.200.schema.favicon.uploadName`? | `string` | - |
| `post.responses.200.schema.favicon.width`? | `number` | - |
| `post.responses.200.schema.homepageImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `post.responses.200.schema.homepageImage.altText`? | `string` | - |
| `post.responses.200.schema.homepageImage.dateUploaded`? | `string` | - |
| `post.responses.200.schema.homepageImage.height`? | `number` | - |
| `post.responses.200.schema.homepageImage.name`? | `string` | - |
| `post.responses.200.schema.homepageImage.temporaryFileId`? | `number` | - |
| `post.responses.200.schema.homepageImage.uploadName`? | `string` | - |
| `post.responses.200.schema.homepageImage.width`? | `number` | - |
| `post.responses.200.schema.id`? | `number` | - |
| `post.responses.200.schema.itemsPerPage`? | `number` | `Default`  25 |
| `post.responses.200.schema.keywords`? | `string` | `Description`  Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.  `Default`  request |
| `post.responses.200.schema.languages`? | `string` | `Description`  Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `post.responses.200.schema.librarianInformation`? | `string` | - |
| `post.responses.200.schema.licenseUrl`? | `string` | - |
| `post.responses.200.schema.mailingAddress`? | `string` | - |
| `post.responses.200.schema.name` | `string` | - |
| `post.responses.200.schema.notifyAllAuthors`? | `boolean` | `Description`  When enabled, all authors of a submission will receive a notification when an editorial decision is made regarding a submission. When disabled, only authors assigned to the submission will be notified.  `Default`  true |
| `post.responses.200.schema.numAnnouncementsHomepage`? | `number` | - |
| `post.responses.200.schema.numDaysBeforeInviteReminder`? | `number` | - |
| `post.responses.200.schema.numDaysBeforeSubmitReminder`? | `number` | - |
| `post.responses.200.schema.numPageLinks`? | `number` | `Default`  10 |
| `post.responses.200.schema.numWeeksPerResponse`? | `number` | `Default`  4 |
| `post.responses.200.schema.numWeeksPerReview`? | `number` | `Default`  4 |
| `post.responses.200.schema.openAccessPolicy`? | `string` | - |
| `post.responses.200.schema.pageFooter`? | `string` | - |
| `post.responses.200.schema.pageHeaderLogoImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `post.responses.200.schema.pageHeaderLogoImage.altText`? | `string` | - |
| `post.responses.200.schema.pageHeaderLogoImage.dateUploaded`? | `string` | - |
| `post.responses.200.schema.pageHeaderLogoImage.height`? | `number` | - |
| `post.responses.200.schema.pageHeaderLogoImage.name`? | `string` | - |
| `post.responses.200.schema.pageHeaderLogoImage.temporaryFileId`? | `number` | - |
| `post.responses.200.schema.pageHeaderLogoImage.uploadName`? | `string` | - |
| `post.responses.200.schema.pageHeaderLogoImage.width`? | `number` | - |
| `post.responses.200.schema.paymentsEnabled`? | `boolean` | - |
| `post.responses.200.schema.primaryLocale` | `string` | - |
| `post.responses.200.schema.privacyStatement`? | `string` | - |
| `post.responses.200.schema.rateReviewerOnQuality`? | `boolean` | - |
| `post.responses.200.schema.readerInformation`? | `string` | - |
| `post.responses.200.schema.registrationAgency`? | `string` | `Default`  none |
| `post.responses.200.schema.restrictReviewerFileAccess`? | `boolean` | - |
| `post.responses.200.schema.restrictSiteAccess`? | `boolean` | - |
| `post.responses.200.schema.reviewGuidelines`? | `string` | - |
| `post.responses.200.schema.reviewerAccessKeysEnabled`? | `boolean` | - |
| `post.responses.200.schema.rights`? | `string` | `Description`  Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `post.responses.200.schema.searchDescription`? | `string` | - |
| `post.responses.200.schema.seq`? | `number` | - |
| `post.responses.200.schema.showEnsuringLink`? | `boolean` | - |
| `post.responses.200.schema.sidebar`? | `string`[] | - |
| `post.responses.200.schema.source`? | `string` | `Description`  Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `post.responses.200.schema.styleSheet`? | {     `dateUploaded`?: `string`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `post.responses.200.schema.styleSheet.dateUploaded`? | `string` | - |
| `post.responses.200.schema.styleSheet.name`? | `string` | - |
| `post.responses.200.schema.styleSheet.temporaryFileId`? | `number` | - |
| `post.responses.200.schema.styleSheet.uploadName`? | `string` | - |
| `post.responses.200.schema.subjects`? | `string` | `Description`  Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `post.responses.200.schema.submissionChecklist`? | {     `content`?: `string`;     `order`?: `number`; }[] | `Default`  [object Object],[object Object],[object Object],[object Object],[object Object] |
| `post.responses.200.schema.supportEmail`? | `string` | - |
| `post.responses.200.schema.supportName`? | `string` | - |
| `post.responses.200.schema.supportPhone`? | `string` | - |
| `post.responses.200.schema.supportedFormLocales`? | `string`[] | - |
| `post.responses.200.schema.supportedLocales` | `string`[] | - |
| `post.responses.200.schema.supportedSubmissionLocales`? | `string`[] | - |
| `post.responses.200.schema.themePluginPath`? | `string` | `Default`  default |
| `post.responses.200.schema.timeFormat`? | `string` | - |
| `post.responses.200.schema.type`? | `string` | `Description`  Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `post.responses.200.schema.url`? | `string` | - |
| `post.responses.200.schema.urlPath` | `string` | - |
| `post.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `post.responses.400.schema` | {  } | - |

Defined in:  [lib/swagger-types.ts:928](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L928)

##### `/contexts/\{contextId}`

> `object`

```ts
{
    delete: {
        parameters: {
            path: {
                contextId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    about?: string;
                    acronym?: string;
                    additionalHomeContent?: string;
                    agencies?: string;
                    announcementsIntroduction?: string;
                    authorGuidelines?: string;
                    authorInformation?: string;
                    automaticDoiDeposit?: boolean;
                    citations?: string;
                    competingInterests?: string;
                    contactAffiliation?: string;
                    contactEmail?: string;
                    contactName?: string;
                    contactPhone?: string;
                    copySubmissionAckAddress?: string;
                    copySubmissionAckPrimaryContact?: boolean;
                    copyrightHolderOther?: string;
                    copyrightHolderType?: string;
                    copyrightNotice?: string;
                    country?: string;
                    coverage?: string;
                    currency?: string;
                    customDoiSuffixType?: string;
                    customHeaders?: string;
                    dateFormatLong?: string;
                    dateFormatShort?: string;
                    datetimeFormatLong?: string;
                    datetimeFormatShort?: string;
                    defaultMetricType?: string;
                    defaultReviewMode?: number;
                    description?: string;
                    disableBulkEmailUserGroups?: number[];
                    disableSubmissions?: boolean;
                    disableUserReg?: boolean;
                    disciplines?: string;
                    doiPrefix?: string;
                    doiPublicationSuffixPattern?: string;
                    doiRepresentationSuffixPattern?: string;
                    editorialTeam?: string;
                    emailSignature?: string;
                    enableAnnouncements?: boolean;
                    enableClockss?: boolean;
                    enableDois?: boolean;
                    enableLockss?: boolean;
                    enabled?: boolean;
                    envelopeSender?: string;
                    favicon?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    homepageImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    id?: number;
                    itemsPerPage?: number;
                    keywords?: string;
                    languages?: string;
                    librarianInformation?: string;
                    licenseUrl?: string;
                    mailingAddress?: string;
                    name: string;
                    notifyAllAuthors?: boolean;
                    numAnnouncementsHomepage?: number;
                    numDaysBeforeInviteReminder?: number;
                    numDaysBeforeSubmitReminder?: number;
                    numPageLinks?: number;
                    numWeeksPerResponse?: number;
                    numWeeksPerReview?: number;
                    openAccessPolicy?: string;
                    pageFooter?: string;
                    pageHeaderLogoImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    paymentsEnabled?: boolean;
                    primaryLocale: string;
                    privacyStatement?: string;
                    rateReviewerOnQuality?: boolean;
                    readerInformation?: string;
                    registrationAgency?: string;
                    restrictReviewerFileAccess?: boolean;
                    restrictSiteAccess?: boolean;
                    reviewGuidelines?: string;
                    reviewerAccessKeysEnabled?: boolean;
                    rights?: string;
                    searchDescription?: string;
                    seq?: number;
                    showEnsuringLink?: boolean;
                    sidebar?: string[];
                    source?: string;
                    styleSheet?: {
                        dateUploaded?: string;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    subjects?: string;
                    submissionChecklist?: {
                        content?: string;
                        order?: number;
                    }[];
                    supportEmail?: string;
                    supportName?: string;
                    supportPhone?: string;
                    supportedFormLocales?: string[];
                    supportedLocales: string[];
                    supportedSubmissionLocales?: string[];
                    themePluginPath?: string;
                    timeFormat?: string;
                    type?: string;
                    url?: string;
                    urlPath: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    get: {
        parameters: {
            path: {
                contextId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    about?: string;
                    acronym?: string;
                    additionalHomeContent?: string;
                    agencies?: string;
                    announcementsIntroduction?: string;
                    authorGuidelines?: string;
                    authorInformation?: string;
                    automaticDoiDeposit?: boolean;
                    citations?: string;
                    competingInterests?: string;
                    contactAffiliation?: string;
                    contactEmail?: string;
                    contactName?: string;
                    contactPhone?: string;
                    copySubmissionAckAddress?: string;
                    copySubmissionAckPrimaryContact?: boolean;
                    copyrightHolderOther?: string;
                    copyrightHolderType?: string;
                    copyrightNotice?: string;
                    country?: string;
                    coverage?: string;
                    currency?: string;
                    customDoiSuffixType?: string;
                    customHeaders?: string;
                    dateFormatLong?: string;
                    dateFormatShort?: string;
                    datetimeFormatLong?: string;
                    datetimeFormatShort?: string;
                    defaultMetricType?: string;
                    defaultReviewMode?: number;
                    description?: string;
                    disableBulkEmailUserGroups?: number[];
                    disableSubmissions?: boolean;
                    disableUserReg?: boolean;
                    disciplines?: string;
                    doiPrefix?: string;
                    doiPublicationSuffixPattern?: string;
                    doiRepresentationSuffixPattern?: string;
                    editorialTeam?: string;
                    emailSignature?: string;
                    enableAnnouncements?: boolean;
                    enableClockss?: boolean;
                    enableDois?: boolean;
                    enableLockss?: boolean;
                    enabled?: boolean;
                    envelopeSender?: string;
                    favicon?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    homepageImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    id?: number;
                    itemsPerPage?: number;
                    keywords?: string;
                    languages?: string;
                    librarianInformation?: string;
                    licenseUrl?: string;
                    mailingAddress?: string;
                    name: string;
                    notifyAllAuthors?: boolean;
                    numAnnouncementsHomepage?: number;
                    numDaysBeforeInviteReminder?: number;
                    numDaysBeforeSubmitReminder?: number;
                    numPageLinks?: number;
                    numWeeksPerResponse?: number;
                    numWeeksPerReview?: number;
                    openAccessPolicy?: string;
                    pageFooter?: string;
                    pageHeaderLogoImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    paymentsEnabled?: boolean;
                    primaryLocale: string;
                    privacyStatement?: string;
                    rateReviewerOnQuality?: boolean;
                    readerInformation?: string;
                    registrationAgency?: string;
                    restrictReviewerFileAccess?: boolean;
                    restrictSiteAccess?: boolean;
                    reviewGuidelines?: string;
                    reviewerAccessKeysEnabled?: boolean;
                    rights?: string;
                    searchDescription?: string;
                    seq?: number;
                    showEnsuringLink?: boolean;
                    sidebar?: string[];
                    source?: string;
                    styleSheet?: {
                        dateUploaded?: string;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    subjects?: string;
                    submissionChecklist?: {
                        content?: string;
                        order?: number;
                    }[];
                    supportEmail?: string;
                    supportName?: string;
                    supportPhone?: string;
                    supportedFormLocales?: string[];
                    supportedLocales: string[];
                    supportedSubmissionLocales?: string[];
                    themePluginPath?: string;
                    timeFormat?: string;
                    type?: string;
                    url?: string;
                    urlPath: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    put: {
        parameters: {
            path: {
                contextId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    about?: string;
                    acronym?: string;
                    additionalHomeContent?: string;
                    agencies?: string;
                    announcementsIntroduction?: string;
                    authorGuidelines?: string;
                    authorInformation?: string;
                    automaticDoiDeposit?: boolean;
                    citations?: string;
                    competingInterests?: string;
                    contactAffiliation?: string;
                    contactEmail?: string;
                    contactName?: string;
                    contactPhone?: string;
                    copySubmissionAckAddress?: string;
                    copySubmissionAckPrimaryContact?: boolean;
                    copyrightHolderOther?: string;
                    copyrightHolderType?: string;
                    copyrightNotice?: string;
                    country?: string;
                    coverage?: string;
                    currency?: string;
                    customDoiSuffixType?: string;
                    customHeaders?: string;
                    dateFormatLong?: string;
                    dateFormatShort?: string;
                    datetimeFormatLong?: string;
                    datetimeFormatShort?: string;
                    defaultMetricType?: string;
                    defaultReviewMode?: number;
                    description?: string;
                    disableBulkEmailUserGroups?: number[];
                    disableSubmissions?: boolean;
                    disableUserReg?: boolean;
                    disciplines?: string;
                    doiPrefix?: string;
                    doiPublicationSuffixPattern?: string;
                    doiRepresentationSuffixPattern?: string;
                    editorialTeam?: string;
                    emailSignature?: string;
                    enableAnnouncements?: boolean;
                    enableClockss?: boolean;
                    enableDois?: boolean;
                    enableLockss?: boolean;
                    enabled?: boolean;
                    envelopeSender?: string;
                    favicon?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    homepageImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    id?: number;
                    itemsPerPage?: number;
                    keywords?: string;
                    languages?: string;
                    librarianInformation?: string;
                    licenseUrl?: string;
                    mailingAddress?: string;
                    name: string;
                    notifyAllAuthors?: boolean;
                    numAnnouncementsHomepage?: number;
                    numDaysBeforeInviteReminder?: number;
                    numDaysBeforeSubmitReminder?: number;
                    numPageLinks?: number;
                    numWeeksPerResponse?: number;
                    numWeeksPerReview?: number;
                    openAccessPolicy?: string;
                    pageFooter?: string;
                    pageHeaderLogoImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    paymentsEnabled?: boolean;
                    primaryLocale: string;
                    privacyStatement?: string;
                    rateReviewerOnQuality?: boolean;
                    readerInformation?: string;
                    registrationAgency?: string;
                    restrictReviewerFileAccess?: boolean;
                    restrictSiteAccess?: boolean;
                    reviewGuidelines?: string;
                    reviewerAccessKeysEnabled?: boolean;
                    rights?: string;
                    searchDescription?: string;
                    seq?: number;
                    showEnsuringLink?: boolean;
                    sidebar?: string[];
                    source?: string;
                    styleSheet?: {
                        dateUploaded?: string;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    subjects?: string;
                    submissionChecklist?: {
                        content?: string;
                        order?: number;
                    }[];
                    supportEmail?: string;
                    supportName?: string;
                    supportPhone?: string;
                    supportedFormLocales?: string[];
                    supportedLocales: string[];
                    supportedSubmissionLocales?: string[];
                    themePluginPath?: string;
                    timeFormat?: string;
                    type?: string;
                    url?: string;
                    urlPath: string;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `delete` | `object` | Delete a journal (OJS), press (OMP) or preprint server (OPS). |
| `delete.parameters` | {     `path`: {         `contextId`: `number`;     }; } | - |
| `delete.parameters.path` | {     `contextId`: `number`; } | - |
| `delete.parameters.path.contextId` | `number` | Context ID |
| `delete.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `about`?: `string`;             `acronym`?: `string`;             `additionalHomeContent`?: `string`;             `agencies`?: `string`;             `announcementsIntroduction`?: `string`;             `authorGuidelines`?: `string`;             `authorInformation`?: `string`;             `automaticDoiDeposit`?: `boolean`;             `citations`?: `string`;             `competingInterests`?: `string`;             `contactAffiliation`?: `string`;             `contactEmail`?: `string`;             `contactName`?: `string`;             `contactPhone`?: `string`;             `copySubmissionAckAddress`?: `string`;             `copySubmissionAckPrimaryContact`?: `boolean`;             `copyrightHolderOther`?: `string`;             `copyrightHolderType`?: `string`;             `copyrightNotice`?: `string`;             `country`?: `string`;             `coverage`?: `string`;             `currency`?: `string`;             `customDoiSuffixType`?: `string`;             `customHeaders`?: `string`;             `dateFormatLong`?: `string`;             `dateFormatShort`?: `string`;             `datetimeFormatLong`?: `string`;             `datetimeFormatShort`?: `string`;             `defaultMetricType`?: `string`;             `defaultReviewMode`?: `number`;             `description`?: `string`;             `disableBulkEmailUserGroups`?: `number`[];             `disableSubmissions`?: `boolean`;             `disableUserReg`?: `boolean`;             `disciplines`?: `string`;             `doiPrefix`?: `string`;             `doiPublicationSuffixPattern`?: `string`;             `doiRepresentationSuffixPattern`?: `string`;             `editorialTeam`?: `string`;             `emailSignature`?: `string`;             `enableAnnouncements`?: `boolean`;             `enableClockss`?: `boolean`;             `enableDois`?: `boolean`;             `enableLockss`?: `boolean`;             `enabled`?: `boolean`;             `envelopeSender`?: `string`;             `favicon`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `homepageImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `id`?: `number`;             `itemsPerPage`?: `number`;             `keywords`?: `string`;             `languages`?: `string`;             `librarianInformation`?: `string`;             `licenseUrl`?: `string`;             `mailingAddress`?: `string`;             `name`: `string`;             `notifyAllAuthors`?: `boolean`;             `numAnnouncementsHomepage`?: `number`;             `numDaysBeforeInviteReminder`?: `number`;             `numDaysBeforeSubmitReminder`?: `number`;             `numPageLinks`?: `number`;             `numWeeksPerResponse`?: `number`;             `numWeeksPerReview`?: `number`;             `openAccessPolicy`?: `string`;             `pageFooter`?: `string`;             `pageHeaderLogoImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `paymentsEnabled`?: `boolean`;             `primaryLocale`: `string`;             `privacyStatement`?: `string`;             `rateReviewerOnQuality`?: `boolean`;             `readerInformation`?: `string`;             `registrationAgency`?: `string`;             `restrictReviewerFileAccess`?: `boolean`;             `restrictSiteAccess`?: `boolean`;             `reviewGuidelines`?: `string`;             `reviewerAccessKeysEnabled`?: `boolean`;             `rights`?: `string`;             `searchDescription`?: `string`;             `seq`?: `number`;             `showEnsuringLink`?: `boolean`;             `sidebar`?: `string`[];             `source`?: `string`;             `styleSheet`?: {                 `dateUploaded`?: `string`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `subjects`?: `string`;             `submissionChecklist`?: {                 `content`?: `string`;                 `order`?: `number`;             }[];             `supportEmail`?: `string`;             `supportName`?: `string`;             `supportPhone`?: `string`;             `supportedFormLocales`?: `string`[];             `supportedLocales`: `string`[];             `supportedSubmissionLocales`?: `string`[];             `themePluginPath`?: `string`;             `timeFormat`?: `string`;             `type`?: `string`;             `url`?: `string`;             `urlPath`: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `delete.responses.200` | {     `schema`: {         `_href`?: `string`;         `about`?: `string`;         `acronym`?: `string`;         `additionalHomeContent`?: `string`;         `agencies`?: `string`;         `announcementsIntroduction`?: `string`;         `authorGuidelines`?: `string`;         `authorInformation`?: `string`;         `automaticDoiDeposit`?: `boolean`;         `citations`?: `string`;         `competingInterests`?: `string`;         `contactAffiliation`?: `string`;         `contactEmail`?: `string`;         `contactName`?: `string`;         `contactPhone`?: `string`;         `copySubmissionAckAddress`?: `string`;         `copySubmissionAckPrimaryContact`?: `boolean`;         `copyrightHolderOther`?: `string`;         `copyrightHolderType`?: `string`;         `copyrightNotice`?: `string`;         `country`?: `string`;         `coverage`?: `string`;         `currency`?: `string`;         `customDoiSuffixType`?: `string`;         `customHeaders`?: `string`;         `dateFormatLong`?: `string`;         `dateFormatShort`?: `string`;         `datetimeFormatLong`?: `string`;         `datetimeFormatShort`?: `string`;         `defaultMetricType`?: `string`;         `defaultReviewMode`?: `number`;         `description`?: `string`;         `disableBulkEmailUserGroups`?: `number`[];         `disableSubmissions`?: `boolean`;         `disableUserReg`?: `boolean`;         `disciplines`?: `string`;         `doiPrefix`?: `string`;         `doiPublicationSuffixPattern`?: `string`;         `doiRepresentationSuffixPattern`?: `string`;         `editorialTeam`?: `string`;         `emailSignature`?: `string`;         `enableAnnouncements`?: `boolean`;         `enableClockss`?: `boolean`;         `enableDois`?: `boolean`;         `enableLockss`?: `boolean`;         `enabled`?: `boolean`;         `envelopeSender`?: `string`;         `favicon`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `homepageImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `id`?: `number`;         `itemsPerPage`?: `number`;         `keywords`?: `string`;         `languages`?: `string`;         `librarianInformation`?: `string`;         `licenseUrl`?: `string`;         `mailingAddress`?: `string`;         `name`: `string`;         `notifyAllAuthors`?: `boolean`;         `numAnnouncementsHomepage`?: `number`;         `numDaysBeforeInviteReminder`?: `number`;         `numDaysBeforeSubmitReminder`?: `number`;         `numPageLinks`?: `number`;         `numWeeksPerResponse`?: `number`;         `numWeeksPerReview`?: `number`;         `openAccessPolicy`?: `string`;         `pageFooter`?: `string`;         `pageHeaderLogoImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `paymentsEnabled`?: `boolean`;         `primaryLocale`: `string`;         `privacyStatement`?: `string`;         `rateReviewerOnQuality`?: `boolean`;         `readerInformation`?: `string`;         `registrationAgency`?: `string`;         `restrictReviewerFileAccess`?: `boolean`;         `restrictSiteAccess`?: `boolean`;         `reviewGuidelines`?: `string`;         `reviewerAccessKeysEnabled`?: `boolean`;         `rights`?: `string`;         `searchDescription`?: `string`;         `seq`?: `number`;         `showEnsuringLink`?: `boolean`;         `sidebar`?: `string`[];         `source`?: `string`;         `styleSheet`?: {             `dateUploaded`?: `string`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `subjects`?: `string`;         `submissionChecklist`?: {             `content`?: `string`;             `order`?: `number`;         }[];         `supportEmail`?: `string`;         `supportName`?: `string`;         `supportPhone`?: `string`;         `supportedFormLocales`?: `string`[];         `supportedLocales`: `string`[];         `supportedSubmissionLocales`?: `string`[];         `themePluginPath`?: `string`;         `timeFormat`?: `string`;         `type`?: `string`;         `url`?: `string`;         `urlPath`: `string`;     }; } | Details of the context that was just deleted. |
| `delete.responses.200.schema` | {     `_href`?: `string`;     `about`?: `string`;     `acronym`?: `string`;     `additionalHomeContent`?: `string`;     `agencies`?: `string`;     `announcementsIntroduction`?: `string`;     `authorGuidelines`?: `string`;     `authorInformation`?: `string`;     `automaticDoiDeposit`?: `boolean`;     `citations`?: `string`;     `competingInterests`?: `string`;     `contactAffiliation`?: `string`;     `contactEmail`?: `string`;     `contactName`?: `string`;     `contactPhone`?: `string`;     `copySubmissionAckAddress`?: `string`;     `copySubmissionAckPrimaryContact`?: `boolean`;     `copyrightHolderOther`?: `string`;     `copyrightHolderType`?: `string`;     `copyrightNotice`?: `string`;     `country`?: `string`;     `coverage`?: `string`;     `currency`?: `string`;     `customDoiSuffixType`?: `string`;     `customHeaders`?: `string`;     `dateFormatLong`?: `string`;     `dateFormatShort`?: `string`;     `datetimeFormatLong`?: `string`;     `datetimeFormatShort`?: `string`;     `defaultMetricType`?: `string`;     `defaultReviewMode`?: `number`;     `description`?: `string`;     `disableBulkEmailUserGroups`?: `number`[];     `disableSubmissions`?: `boolean`;     `disableUserReg`?: `boolean`;     `disciplines`?: `string`;     `doiPrefix`?: `string`;     `doiPublicationSuffixPattern`?: `string`;     `doiRepresentationSuffixPattern`?: `string`;     `editorialTeam`?: `string`;     `emailSignature`?: `string`;     `enableAnnouncements`?: `boolean`;     `enableClockss`?: `boolean`;     `enableDois`?: `boolean`;     `enableLockss`?: `boolean`;     `enabled`?: `boolean`;     `envelopeSender`?: `string`;     `favicon`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `homepageImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `id`?: `number`;     `itemsPerPage`?: `number`;     `keywords`?: `string`;     `languages`?: `string`;     `librarianInformation`?: `string`;     `licenseUrl`?: `string`;     `mailingAddress`?: `string`;     `name`: `string`;     `notifyAllAuthors`?: `boolean`;     `numAnnouncementsHomepage`?: `number`;     `numDaysBeforeInviteReminder`?: `number`;     `numDaysBeforeSubmitReminder`?: `number`;     `numPageLinks`?: `number`;     `numWeeksPerResponse`?: `number`;     `numWeeksPerReview`?: `number`;     `openAccessPolicy`?: `string`;     `pageFooter`?: `string`;     `pageHeaderLogoImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `paymentsEnabled`?: `boolean`;     `primaryLocale`: `string`;     `privacyStatement`?: `string`;     `rateReviewerOnQuality`?: `boolean`;     `readerInformation`?: `string`;     `registrationAgency`?: `string`;     `restrictReviewerFileAccess`?: `boolean`;     `restrictSiteAccess`?: `boolean`;     `reviewGuidelines`?: `string`;     `reviewerAccessKeysEnabled`?: `boolean`;     `rights`?: `string`;     `searchDescription`?: `string`;     `seq`?: `number`;     `showEnsuringLink`?: `boolean`;     `sidebar`?: `string`[];     `source`?: `string`;     `styleSheet`?: {         `dateUploaded`?: `string`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `subjects`?: `string`;     `submissionChecklist`?: {         `content`?: `string`;         `order`?: `number`;     }[];     `supportEmail`?: `string`;     `supportName`?: `string`;     `supportPhone`?: `string`;     `supportedFormLocales`?: `string`[];     `supportedLocales`: `string`[];     `supportedSubmissionLocales`?: `string`[];     `themePluginPath`?: `string`;     `timeFormat`?: `string`;     `type`?: `string`;     `url`?: `string`;     `urlPath`: `string`; } | - |
| `delete.responses.200.schema._href`? | `string` | Format: uri |
| `delete.responses.200.schema.about`? | `string` | - |
| `delete.responses.200.schema.acronym`? | `string` | - |
| `delete.responses.200.schema.additionalHomeContent`? | `string` | - |
| `delete.responses.200.schema.agencies`? | `string` | `Description`  Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `delete.responses.200.schema.announcementsIntroduction`? | `string` | - |
| `delete.responses.200.schema.authorGuidelines`? | `string` | - |
| `delete.responses.200.schema.authorInformation`? | `string` | - |
| `delete.responses.200.schema.automaticDoiDeposit`? | `boolean` | - |
| `delete.responses.200.schema.citations`? | `string` | `Description`  Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `delete.responses.200.schema.competingInterests`? | `string` | - |
| `delete.responses.200.schema.contactAffiliation`? | `string` | - |
| `delete.responses.200.schema.contactEmail`? | `string` | - |
| `delete.responses.200.schema.contactName`? | `string` | - |
| `delete.responses.200.schema.contactPhone`? | `string` | - |
| `delete.responses.200.schema.copySubmissionAckAddress`? | `string` | `Description`  A copy of the submission acknowledgement email will be sent to any of the email addresses entered here. Separate multiple email addresses with a comma. Example: one\@example.com,two\@example.com |
| `delete.responses.200.schema.copySubmissionAckPrimaryContact`? | `boolean` | `Description`  A copy of the submission acknowledgement email will be sent to this context's primary contact when true. |
| `delete.responses.200.schema.copyrightHolderOther`? | `string` | - |
| `delete.responses.200.schema.copyrightHolderType`? | `string` | - |
| `delete.responses.200.schema.copyrightNotice`? | `string` | - |
| `delete.responses.200.schema.country`? | `string` | - |
| `delete.responses.200.schema.coverage`? | `string` | `Description`  Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `delete.responses.200.schema.currency`? | `string` | - |
| `delete.responses.200.schema.customDoiSuffixType`? | `string` | - |
| `delete.responses.200.schema.customHeaders`? | `string` | - |
| `delete.responses.200.schema.dateFormatLong`? | `string` | - |
| `delete.responses.200.schema.dateFormatShort`? | `string` | - |
| `delete.responses.200.schema.datetimeFormatLong`? | `string` | - |
| `delete.responses.200.schema.datetimeFormatShort`? | `string` | - |
| `delete.responses.200.schema.defaultMetricType`? | `string` | - |
| `delete.responses.200.schema.defaultReviewMode`? | `number` | `Default`  2 |
| `delete.responses.200.schema.description`? | `string` | - |
| `delete.responses.200.schema.disableBulkEmailUserGroups`? | `number`[] | `Description`  User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property. |
| `delete.responses.200.schema.disableSubmissions`? | `boolean` | - |
| `delete.responses.200.schema.disableUserReg`? | `boolean` | - |
| `delete.responses.200.schema.disciplines`? | `string` | `Description`  Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `delete.responses.200.schema.doiPrefix`? | `string` | - |
| `delete.responses.200.schema.doiPublicationSuffixPattern`? | `string` | - |
| `delete.responses.200.schema.doiRepresentationSuffixPattern`? | `string` | - |
| `delete.responses.200.schema.editorialTeam`? | `string` | - |
| `delete.responses.200.schema.emailSignature`? | `string` | - |
| `delete.responses.200.schema.enableAnnouncements`? | `boolean` | - |
| `delete.responses.200.schema.enableClockss`? | `boolean` | - |
| `delete.responses.200.schema.enableDois`? | `boolean` | - |
| `delete.responses.200.schema.enableLockss`? | `boolean` | - |
| `delete.responses.200.schema.enabled`? | `boolean` | - |
| `delete.responses.200.schema.envelopeSender`? | `string` | - |
| `delete.responses.200.schema.favicon`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `delete.responses.200.schema.favicon.altText`? | `string` | - |
| `delete.responses.200.schema.favicon.dateUploaded`? | `string` | - |
| `delete.responses.200.schema.favicon.height`? | `number` | - |
| `delete.responses.200.schema.favicon.name`? | `string` | - |
| `delete.responses.200.schema.favicon.temporaryFileId`? | `number` | - |
| `delete.responses.200.schema.favicon.uploadName`? | `string` | - |
| `delete.responses.200.schema.favicon.width`? | `number` | - |
| `delete.responses.200.schema.homepageImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `delete.responses.200.schema.homepageImage.altText`? | `string` | - |
| `delete.responses.200.schema.homepageImage.dateUploaded`? | `string` | - |
| `delete.responses.200.schema.homepageImage.height`? | `number` | - |
| `delete.responses.200.schema.homepageImage.name`? | `string` | - |
| `delete.responses.200.schema.homepageImage.temporaryFileId`? | `number` | - |
| `delete.responses.200.schema.homepageImage.uploadName`? | `string` | - |
| `delete.responses.200.schema.homepageImage.width`? | `number` | - |
| `delete.responses.200.schema.id`? | `number` | - |
| `delete.responses.200.schema.itemsPerPage`? | `number` | `Default`  25 |
| `delete.responses.200.schema.keywords`? | `string` | `Description`  Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.  `Default`  request |
| `delete.responses.200.schema.languages`? | `string` | `Description`  Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `delete.responses.200.schema.librarianInformation`? | `string` | - |
| `delete.responses.200.schema.licenseUrl`? | `string` | - |
| `delete.responses.200.schema.mailingAddress`? | `string` | - |
| `delete.responses.200.schema.name` | `string` | - |
| `delete.responses.200.schema.notifyAllAuthors`? | `boolean` | `Description`  When enabled, all authors of a submission will receive a notification when an editorial decision is made regarding a submission. When disabled, only authors assigned to the submission will be notified.  `Default`  true |
| `delete.responses.200.schema.numAnnouncementsHomepage`? | `number` | - |
| `delete.responses.200.schema.numDaysBeforeInviteReminder`? | `number` | - |
| `delete.responses.200.schema.numDaysBeforeSubmitReminder`? | `number` | - |
| `delete.responses.200.schema.numPageLinks`? | `number` | `Default`  10 |
| `delete.responses.200.schema.numWeeksPerResponse`? | `number` | `Default`  4 |
| `delete.responses.200.schema.numWeeksPerReview`? | `number` | `Default`  4 |
| `delete.responses.200.schema.openAccessPolicy`? | `string` | - |
| `delete.responses.200.schema.pageFooter`? | `string` | - |
| `delete.responses.200.schema.pageHeaderLogoImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `delete.responses.200.schema.pageHeaderLogoImage.altText`? | `string` | - |
| `delete.responses.200.schema.pageHeaderLogoImage.dateUploaded`? | `string` | - |
| `delete.responses.200.schema.pageHeaderLogoImage.height`? | `number` | - |
| `delete.responses.200.schema.pageHeaderLogoImage.name`? | `string` | - |
| `delete.responses.200.schema.pageHeaderLogoImage.temporaryFileId`? | `number` | - |
| `delete.responses.200.schema.pageHeaderLogoImage.uploadName`? | `string` | - |
| `delete.responses.200.schema.pageHeaderLogoImage.width`? | `number` | - |
| `delete.responses.200.schema.paymentsEnabled`? | `boolean` | - |
| `delete.responses.200.schema.primaryLocale` | `string` | - |
| `delete.responses.200.schema.privacyStatement`? | `string` | - |
| `delete.responses.200.schema.rateReviewerOnQuality`? | `boolean` | - |
| `delete.responses.200.schema.readerInformation`? | `string` | - |
| `delete.responses.200.schema.registrationAgency`? | `string` | `Default`  none |
| `delete.responses.200.schema.restrictReviewerFileAccess`? | `boolean` | - |
| `delete.responses.200.schema.restrictSiteAccess`? | `boolean` | - |
| `delete.responses.200.schema.reviewGuidelines`? | `string` | - |
| `delete.responses.200.schema.reviewerAccessKeysEnabled`? | `boolean` | - |
| `delete.responses.200.schema.rights`? | `string` | `Description`  Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `delete.responses.200.schema.searchDescription`? | `string` | - |
| `delete.responses.200.schema.seq`? | `number` | - |
| `delete.responses.200.schema.showEnsuringLink`? | `boolean` | - |
| `delete.responses.200.schema.sidebar`? | `string`[] | - |
| `delete.responses.200.schema.source`? | `string` | `Description`  Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `delete.responses.200.schema.styleSheet`? | {     `dateUploaded`?: `string`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `delete.responses.200.schema.styleSheet.dateUploaded`? | `string` | - |
| `delete.responses.200.schema.styleSheet.name`? | `string` | - |
| `delete.responses.200.schema.styleSheet.temporaryFileId`? | `number` | - |
| `delete.responses.200.schema.styleSheet.uploadName`? | `string` | - |
| `delete.responses.200.schema.subjects`? | `string` | `Description`  Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `delete.responses.200.schema.submissionChecklist`? | {     `content`?: `string`;     `order`?: `number`; }[] | `Default`  [object Object],[object Object],[object Object],[object Object],[object Object] |
| `delete.responses.200.schema.supportEmail`? | `string` | - |
| `delete.responses.200.schema.supportName`? | `string` | - |
| `delete.responses.200.schema.supportPhone`? | `string` | - |
| `delete.responses.200.schema.supportedFormLocales`? | `string`[] | - |
| `delete.responses.200.schema.supportedLocales` | `string`[] | - |
| `delete.responses.200.schema.supportedSubmissionLocales`? | `string`[] | - |
| `delete.responses.200.schema.themePluginPath`? | `string` | `Default`  default |
| `delete.responses.200.schema.timeFormat`? | `string` | - |
| `delete.responses.200.schema.type`? | `string` | `Description`  Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `delete.responses.200.schema.url`? | `string` | - |
| `delete.responses.200.schema.urlPath` | `string` | - |
| `delete.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to delete this context. |
| `delete.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.403.schema.error`? | `string` | - |
| `delete.responses.403.schema.errorMessage`? | `string` | - |
| `delete.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested context could not be found. |
| `delete.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.404.schema.error`? | `string` | - |
| `delete.responses.404.schema.errorMessage`? | `string` | - |
| `get` | `object` | - |
| `get.parameters` | {     `path`: {         `contextId`: `number`;     }; } | - |
| `get.parameters.path` | {     `contextId`: `number`; } | - |
| `get.parameters.path.contextId` | `number` | Context ID |
| `get.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `about`?: `string`;             `acronym`?: `string`;             `additionalHomeContent`?: `string`;             `agencies`?: `string`;             `announcementsIntroduction`?: `string`;             `authorGuidelines`?: `string`;             `authorInformation`?: `string`;             `automaticDoiDeposit`?: `boolean`;             `citations`?: `string`;             `competingInterests`?: `string`;             `contactAffiliation`?: `string`;             `contactEmail`?: `string`;             `contactName`?: `string`;             `contactPhone`?: `string`;             `copySubmissionAckAddress`?: `string`;             `copySubmissionAckPrimaryContact`?: `boolean`;             `copyrightHolderOther`?: `string`;             `copyrightHolderType`?: `string`;             `copyrightNotice`?: `string`;             `country`?: `string`;             `coverage`?: `string`;             `currency`?: `string`;             `customDoiSuffixType`?: `string`;             `customHeaders`?: `string`;             `dateFormatLong`?: `string`;             `dateFormatShort`?: `string`;             `datetimeFormatLong`?: `string`;             `datetimeFormatShort`?: `string`;             `defaultMetricType`?: `string`;             `defaultReviewMode`?: `number`;             `description`?: `string`;             `disableBulkEmailUserGroups`?: `number`[];             `disableSubmissions`?: `boolean`;             `disableUserReg`?: `boolean`;             `disciplines`?: `string`;             `doiPrefix`?: `string`;             `doiPublicationSuffixPattern`?: `string`;             `doiRepresentationSuffixPattern`?: `string`;             `editorialTeam`?: `string`;             `emailSignature`?: `string`;             `enableAnnouncements`?: `boolean`;             `enableClockss`?: `boolean`;             `enableDois`?: `boolean`;             `enableLockss`?: `boolean`;             `enabled`?: `boolean`;             `envelopeSender`?: `string`;             `favicon`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `homepageImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `id`?: `number`;             `itemsPerPage`?: `number`;             `keywords`?: `string`;             `languages`?: `string`;             `librarianInformation`?: `string`;             `licenseUrl`?: `string`;             `mailingAddress`?: `string`;             `name`: `string`;             `notifyAllAuthors`?: `boolean`;             `numAnnouncementsHomepage`?: `number`;             `numDaysBeforeInviteReminder`?: `number`;             `numDaysBeforeSubmitReminder`?: `number`;             `numPageLinks`?: `number`;             `numWeeksPerResponse`?: `number`;             `numWeeksPerReview`?: `number`;             `openAccessPolicy`?: `string`;             `pageFooter`?: `string`;             `pageHeaderLogoImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `paymentsEnabled`?: `boolean`;             `primaryLocale`: `string`;             `privacyStatement`?: `string`;             `rateReviewerOnQuality`?: `boolean`;             `readerInformation`?: `string`;             `registrationAgency`?: `string`;             `restrictReviewerFileAccess`?: `boolean`;             `restrictSiteAccess`?: `boolean`;             `reviewGuidelines`?: `string`;             `reviewerAccessKeysEnabled`?: `boolean`;             `rights`?: `string`;             `searchDescription`?: `string`;             `seq`?: `number`;             `showEnsuringLink`?: `boolean`;             `sidebar`?: `string`[];             `source`?: `string`;             `styleSheet`?: {                 `dateUploaded`?: `string`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `subjects`?: `string`;             `submissionChecklist`?: {                 `content`?: `string`;                 `order`?: `number`;             }[];             `supportEmail`?: `string`;             `supportName`?: `string`;             `supportPhone`?: `string`;             `supportedFormLocales`?: `string`[];             `supportedLocales`: `string`[];             `supportedSubmissionLocales`?: `string`[];             `themePluginPath`?: `string`;             `timeFormat`?: `string`;             `type`?: `string`;             `url`?: `string`;             `urlPath`: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `_href`?: `string`;         `about`?: `string`;         `acronym`?: `string`;         `additionalHomeContent`?: `string`;         `agencies`?: `string`;         `announcementsIntroduction`?: `string`;         `authorGuidelines`?: `string`;         `authorInformation`?: `string`;         `automaticDoiDeposit`?: `boolean`;         `citations`?: `string`;         `competingInterests`?: `string`;         `contactAffiliation`?: `string`;         `contactEmail`?: `string`;         `contactName`?: `string`;         `contactPhone`?: `string`;         `copySubmissionAckAddress`?: `string`;         `copySubmissionAckPrimaryContact`?: `boolean`;         `copyrightHolderOther`?: `string`;         `copyrightHolderType`?: `string`;         `copyrightNotice`?: `string`;         `country`?: `string`;         `coverage`?: `string`;         `currency`?: `string`;         `customDoiSuffixType`?: `string`;         `customHeaders`?: `string`;         `dateFormatLong`?: `string`;         `dateFormatShort`?: `string`;         `datetimeFormatLong`?: `string`;         `datetimeFormatShort`?: `string`;         `defaultMetricType`?: `string`;         `defaultReviewMode`?: `number`;         `description`?: `string`;         `disableBulkEmailUserGroups`?: `number`[];         `disableSubmissions`?: `boolean`;         `disableUserReg`?: `boolean`;         `disciplines`?: `string`;         `doiPrefix`?: `string`;         `doiPublicationSuffixPattern`?: `string`;         `doiRepresentationSuffixPattern`?: `string`;         `editorialTeam`?: `string`;         `emailSignature`?: `string`;         `enableAnnouncements`?: `boolean`;         `enableClockss`?: `boolean`;         `enableDois`?: `boolean`;         `enableLockss`?: `boolean`;         `enabled`?: `boolean`;         `envelopeSender`?: `string`;         `favicon`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `homepageImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `id`?: `number`;         `itemsPerPage`?: `number`;         `keywords`?: `string`;         `languages`?: `string`;         `librarianInformation`?: `string`;         `licenseUrl`?: `string`;         `mailingAddress`?: `string`;         `name`: `string`;         `notifyAllAuthors`?: `boolean`;         `numAnnouncementsHomepage`?: `number`;         `numDaysBeforeInviteReminder`?: `number`;         `numDaysBeforeSubmitReminder`?: `number`;         `numPageLinks`?: `number`;         `numWeeksPerResponse`?: `number`;         `numWeeksPerReview`?: `number`;         `openAccessPolicy`?: `string`;         `pageFooter`?: `string`;         `pageHeaderLogoImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `paymentsEnabled`?: `boolean`;         `primaryLocale`: `string`;         `privacyStatement`?: `string`;         `rateReviewerOnQuality`?: `boolean`;         `readerInformation`?: `string`;         `registrationAgency`?: `string`;         `restrictReviewerFileAccess`?: `boolean`;         `restrictSiteAccess`?: `boolean`;         `reviewGuidelines`?: `string`;         `reviewerAccessKeysEnabled`?: `boolean`;         `rights`?: `string`;         `searchDescription`?: `string`;         `seq`?: `number`;         `showEnsuringLink`?: `boolean`;         `sidebar`?: `string`[];         `source`?: `string`;         `styleSheet`?: {             `dateUploaded`?: `string`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `subjects`?: `string`;         `submissionChecklist`?: {             `content`?: `string`;             `order`?: `number`;         }[];         `supportEmail`?: `string`;         `supportName`?: `string`;         `supportPhone`?: `string`;         `supportedFormLocales`?: `string`[];         `supportedLocales`: `string`[];         `supportedSubmissionLocales`?: `string`[];         `themePluginPath`?: `string`;         `timeFormat`?: `string`;         `type`?: `string`;         `url`?: `string`;         `urlPath`: `string`;     }; } | Context details. Some details may be withheld if you are not a site admin or manager of that context. |
| `get.responses.200.schema` | {     `_href`?: `string`;     `about`?: `string`;     `acronym`?: `string`;     `additionalHomeContent`?: `string`;     `agencies`?: `string`;     `announcementsIntroduction`?: `string`;     `authorGuidelines`?: `string`;     `authorInformation`?: `string`;     `automaticDoiDeposit`?: `boolean`;     `citations`?: `string`;     `competingInterests`?: `string`;     `contactAffiliation`?: `string`;     `contactEmail`?: `string`;     `contactName`?: `string`;     `contactPhone`?: `string`;     `copySubmissionAckAddress`?: `string`;     `copySubmissionAckPrimaryContact`?: `boolean`;     `copyrightHolderOther`?: `string`;     `copyrightHolderType`?: `string`;     `copyrightNotice`?: `string`;     `country`?: `string`;     `coverage`?: `string`;     `currency`?: `string`;     `customDoiSuffixType`?: `string`;     `customHeaders`?: `string`;     `dateFormatLong`?: `string`;     `dateFormatShort`?: `string`;     `datetimeFormatLong`?: `string`;     `datetimeFormatShort`?: `string`;     `defaultMetricType`?: `string`;     `defaultReviewMode`?: `number`;     `description`?: `string`;     `disableBulkEmailUserGroups`?: `number`[];     `disableSubmissions`?: `boolean`;     `disableUserReg`?: `boolean`;     `disciplines`?: `string`;     `doiPrefix`?: `string`;     `doiPublicationSuffixPattern`?: `string`;     `doiRepresentationSuffixPattern`?: `string`;     `editorialTeam`?: `string`;     `emailSignature`?: `string`;     `enableAnnouncements`?: `boolean`;     `enableClockss`?: `boolean`;     `enableDois`?: `boolean`;     `enableLockss`?: `boolean`;     `enabled`?: `boolean`;     `envelopeSender`?: `string`;     `favicon`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `homepageImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `id`?: `number`;     `itemsPerPage`?: `number`;     `keywords`?: `string`;     `languages`?: `string`;     `librarianInformation`?: `string`;     `licenseUrl`?: `string`;     `mailingAddress`?: `string`;     `name`: `string`;     `notifyAllAuthors`?: `boolean`;     `numAnnouncementsHomepage`?: `number`;     `numDaysBeforeInviteReminder`?: `number`;     `numDaysBeforeSubmitReminder`?: `number`;     `numPageLinks`?: `number`;     `numWeeksPerResponse`?: `number`;     `numWeeksPerReview`?: `number`;     `openAccessPolicy`?: `string`;     `pageFooter`?: `string`;     `pageHeaderLogoImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `paymentsEnabled`?: `boolean`;     `primaryLocale`: `string`;     `privacyStatement`?: `string`;     `rateReviewerOnQuality`?: `boolean`;     `readerInformation`?: `string`;     `registrationAgency`?: `string`;     `restrictReviewerFileAccess`?: `boolean`;     `restrictSiteAccess`?: `boolean`;     `reviewGuidelines`?: `string`;     `reviewerAccessKeysEnabled`?: `boolean`;     `rights`?: `string`;     `searchDescription`?: `string`;     `seq`?: `number`;     `showEnsuringLink`?: `boolean`;     `sidebar`?: `string`[];     `source`?: `string`;     `styleSheet`?: {         `dateUploaded`?: `string`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `subjects`?: `string`;     `submissionChecklist`?: {         `content`?: `string`;         `order`?: `number`;     }[];     `supportEmail`?: `string`;     `supportName`?: `string`;     `supportPhone`?: `string`;     `supportedFormLocales`?: `string`[];     `supportedLocales`: `string`[];     `supportedSubmissionLocales`?: `string`[];     `themePluginPath`?: `string`;     `timeFormat`?: `string`;     `type`?: `string`;     `url`?: `string`;     `urlPath`: `string`; } | - |
| `get.responses.200.schema._href`? | `string` | Format: uri |
| `get.responses.200.schema.about`? | `string` | - |
| `get.responses.200.schema.acronym`? | `string` | - |
| `get.responses.200.schema.additionalHomeContent`? | `string` | - |
| `get.responses.200.schema.agencies`? | `string` | `Description`  Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `get.responses.200.schema.announcementsIntroduction`? | `string` | - |
| `get.responses.200.schema.authorGuidelines`? | `string` | - |
| `get.responses.200.schema.authorInformation`? | `string` | - |
| `get.responses.200.schema.automaticDoiDeposit`? | `boolean` | - |
| `get.responses.200.schema.citations`? | `string` | `Description`  Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `get.responses.200.schema.competingInterests`? | `string` | - |
| `get.responses.200.schema.contactAffiliation`? | `string` | - |
| `get.responses.200.schema.contactEmail`? | `string` | - |
| `get.responses.200.schema.contactName`? | `string` | - |
| `get.responses.200.schema.contactPhone`? | `string` | - |
| `get.responses.200.schema.copySubmissionAckAddress`? | `string` | `Description`  A copy of the submission acknowledgement email will be sent to any of the email addresses entered here. Separate multiple email addresses with a comma. Example: one\@example.com,two\@example.com |
| `get.responses.200.schema.copySubmissionAckPrimaryContact`? | `boolean` | `Description`  A copy of the submission acknowledgement email will be sent to this context's primary contact when true. |
| `get.responses.200.schema.copyrightHolderOther`? | `string` | - |
| `get.responses.200.schema.copyrightHolderType`? | `string` | - |
| `get.responses.200.schema.copyrightNotice`? | `string` | - |
| `get.responses.200.schema.country`? | `string` | - |
| `get.responses.200.schema.coverage`? | `string` | `Description`  Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `get.responses.200.schema.currency`? | `string` | - |
| `get.responses.200.schema.customDoiSuffixType`? | `string` | - |
| `get.responses.200.schema.customHeaders`? | `string` | - |
| `get.responses.200.schema.dateFormatLong`? | `string` | - |
| `get.responses.200.schema.dateFormatShort`? | `string` | - |
| `get.responses.200.schema.datetimeFormatLong`? | `string` | - |
| `get.responses.200.schema.datetimeFormatShort`? | `string` | - |
| `get.responses.200.schema.defaultMetricType`? | `string` | - |
| `get.responses.200.schema.defaultReviewMode`? | `number` | `Default`  2 |
| `get.responses.200.schema.description`? | `string` | - |
| `get.responses.200.schema.disableBulkEmailUserGroups`? | `number`[] | `Description`  User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property. |
| `get.responses.200.schema.disableSubmissions`? | `boolean` | - |
| `get.responses.200.schema.disableUserReg`? | `boolean` | - |
| `get.responses.200.schema.disciplines`? | `string` | `Description`  Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `get.responses.200.schema.doiPrefix`? | `string` | - |
| `get.responses.200.schema.doiPublicationSuffixPattern`? | `string` | - |
| `get.responses.200.schema.doiRepresentationSuffixPattern`? | `string` | - |
| `get.responses.200.schema.editorialTeam`? | `string` | - |
| `get.responses.200.schema.emailSignature`? | `string` | - |
| `get.responses.200.schema.enableAnnouncements`? | `boolean` | - |
| `get.responses.200.schema.enableClockss`? | `boolean` | - |
| `get.responses.200.schema.enableDois`? | `boolean` | - |
| `get.responses.200.schema.enableLockss`? | `boolean` | - |
| `get.responses.200.schema.enabled`? | `boolean` | - |
| `get.responses.200.schema.envelopeSender`? | `string` | - |
| `get.responses.200.schema.favicon`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `get.responses.200.schema.favicon.altText`? | `string` | - |
| `get.responses.200.schema.favicon.dateUploaded`? | `string` | - |
| `get.responses.200.schema.favicon.height`? | `number` | - |
| `get.responses.200.schema.favicon.name`? | `string` | - |
| `get.responses.200.schema.favicon.temporaryFileId`? | `number` | - |
| `get.responses.200.schema.favicon.uploadName`? | `string` | - |
| `get.responses.200.schema.favicon.width`? | `number` | - |
| `get.responses.200.schema.homepageImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `get.responses.200.schema.homepageImage.altText`? | `string` | - |
| `get.responses.200.schema.homepageImage.dateUploaded`? | `string` | - |
| `get.responses.200.schema.homepageImage.height`? | `number` | - |
| `get.responses.200.schema.homepageImage.name`? | `string` | - |
| `get.responses.200.schema.homepageImage.temporaryFileId`? | `number` | - |
| `get.responses.200.schema.homepageImage.uploadName`? | `string` | - |
| `get.responses.200.schema.homepageImage.width`? | `number` | - |
| `get.responses.200.schema.id`? | `number` | - |
| `get.responses.200.schema.itemsPerPage`? | `number` | `Default`  25 |
| `get.responses.200.schema.keywords`? | `string` | `Description`  Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.  `Default`  request |
| `get.responses.200.schema.languages`? | `string` | `Description`  Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `get.responses.200.schema.librarianInformation`? | `string` | - |
| `get.responses.200.schema.licenseUrl`? | `string` | - |
| `get.responses.200.schema.mailingAddress`? | `string` | - |
| `get.responses.200.schema.name` | `string` | - |
| `get.responses.200.schema.notifyAllAuthors`? | `boolean` | `Description`  When enabled, all authors of a submission will receive a notification when an editorial decision is made regarding a submission. When disabled, only authors assigned to the submission will be notified.  `Default`  true |
| `get.responses.200.schema.numAnnouncementsHomepage`? | `number` | - |
| `get.responses.200.schema.numDaysBeforeInviteReminder`? | `number` | - |
| `get.responses.200.schema.numDaysBeforeSubmitReminder`? | `number` | - |
| `get.responses.200.schema.numPageLinks`? | `number` | `Default`  10 |
| `get.responses.200.schema.numWeeksPerResponse`? | `number` | `Default`  4 |
| `get.responses.200.schema.numWeeksPerReview`? | `number` | `Default`  4 |
| `get.responses.200.schema.openAccessPolicy`? | `string` | - |
| `get.responses.200.schema.pageFooter`? | `string` | - |
| `get.responses.200.schema.pageHeaderLogoImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `get.responses.200.schema.pageHeaderLogoImage.altText`? | `string` | - |
| `get.responses.200.schema.pageHeaderLogoImage.dateUploaded`? | `string` | - |
| `get.responses.200.schema.pageHeaderLogoImage.height`? | `number` | - |
| `get.responses.200.schema.pageHeaderLogoImage.name`? | `string` | - |
| `get.responses.200.schema.pageHeaderLogoImage.temporaryFileId`? | `number` | - |
| `get.responses.200.schema.pageHeaderLogoImage.uploadName`? | `string` | - |
| `get.responses.200.schema.pageHeaderLogoImage.width`? | `number` | - |
| `get.responses.200.schema.paymentsEnabled`? | `boolean` | - |
| `get.responses.200.schema.primaryLocale` | `string` | - |
| `get.responses.200.schema.privacyStatement`? | `string` | - |
| `get.responses.200.schema.rateReviewerOnQuality`? | `boolean` | - |
| `get.responses.200.schema.readerInformation`? | `string` | - |
| `get.responses.200.schema.registrationAgency`? | `string` | `Default`  none |
| `get.responses.200.schema.restrictReviewerFileAccess`? | `boolean` | - |
| `get.responses.200.schema.restrictSiteAccess`? | `boolean` | - |
| `get.responses.200.schema.reviewGuidelines`? | `string` | - |
| `get.responses.200.schema.reviewerAccessKeysEnabled`? | `boolean` | - |
| `get.responses.200.schema.rights`? | `string` | `Description`  Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `get.responses.200.schema.searchDescription`? | `string` | - |
| `get.responses.200.schema.seq`? | `number` | - |
| `get.responses.200.schema.showEnsuringLink`? | `boolean` | - |
| `get.responses.200.schema.sidebar`? | `string`[] | - |
| `get.responses.200.schema.source`? | `string` | `Description`  Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `get.responses.200.schema.styleSheet`? | {     `dateUploaded`?: `string`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `get.responses.200.schema.styleSheet.dateUploaded`? | `string` | - |
| `get.responses.200.schema.styleSheet.name`? | `string` | - |
| `get.responses.200.schema.styleSheet.temporaryFileId`? | `number` | - |
| `get.responses.200.schema.styleSheet.uploadName`? | `string` | - |
| `get.responses.200.schema.subjects`? | `string` | `Description`  Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `get.responses.200.schema.submissionChecklist`? | {     `content`?: `string`;     `order`?: `number`; }[] | `Default`  [object Object],[object Object],[object Object],[object Object],[object Object] |
| `get.responses.200.schema.supportEmail`? | `string` | - |
| `get.responses.200.schema.supportName`? | `string` | - |
| `get.responses.200.schema.supportPhone`? | `string` | - |
| `get.responses.200.schema.supportedFormLocales`? | `string`[] | - |
| `get.responses.200.schema.supportedLocales` | `string`[] | - |
| `get.responses.200.schema.supportedSubmissionLocales`? | `string`[] | - |
| `get.responses.200.schema.themePluginPath`? | `string` | `Default`  default |
| `get.responses.200.schema.timeFormat`? | `string` | - |
| `get.responses.200.schema.type`? | `string` | `Description`  Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `get.responses.200.schema.url`? | `string` | - |
| `get.responses.200.schema.urlPath` | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to view this context. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested context could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `put` | `object` | Edit a journal (OJS), press (OMP) or preprint server (OPS). |
| `put.parameters` | {     `path`: {         `contextId`: `number`;     }; } | - |
| `put.parameters.path` | {     `contextId`: `number`; } | - |
| `put.parameters.path.contextId` | `number` | Context ID |
| `put.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `about`?: `string`;             `acronym`?: `string`;             `additionalHomeContent`?: `string`;             `agencies`?: `string`;             `announcementsIntroduction`?: `string`;             `authorGuidelines`?: `string`;             `authorInformation`?: `string`;             `automaticDoiDeposit`?: `boolean`;             `citations`?: `string`;             `competingInterests`?: `string`;             `contactAffiliation`?: `string`;             `contactEmail`?: `string`;             `contactName`?: `string`;             `contactPhone`?: `string`;             `copySubmissionAckAddress`?: `string`;             `copySubmissionAckPrimaryContact`?: `boolean`;             `copyrightHolderOther`?: `string`;             `copyrightHolderType`?: `string`;             `copyrightNotice`?: `string`;             `country`?: `string`;             `coverage`?: `string`;             `currency`?: `string`;             `customDoiSuffixType`?: `string`;             `customHeaders`?: `string`;             `dateFormatLong`?: `string`;             `dateFormatShort`?: `string`;             `datetimeFormatLong`?: `string`;             `datetimeFormatShort`?: `string`;             `defaultMetricType`?: `string`;             `defaultReviewMode`?: `number`;             `description`?: `string`;             `disableBulkEmailUserGroups`?: `number`[];             `disableSubmissions`?: `boolean`;             `disableUserReg`?: `boolean`;             `disciplines`?: `string`;             `doiPrefix`?: `string`;             `doiPublicationSuffixPattern`?: `string`;             `doiRepresentationSuffixPattern`?: `string`;             `editorialTeam`?: `string`;             `emailSignature`?: `string`;             `enableAnnouncements`?: `boolean`;             `enableClockss`?: `boolean`;             `enableDois`?: `boolean`;             `enableLockss`?: `boolean`;             `enabled`?: `boolean`;             `envelopeSender`?: `string`;             `favicon`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `homepageImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `id`?: `number`;             `itemsPerPage`?: `number`;             `keywords`?: `string`;             `languages`?: `string`;             `librarianInformation`?: `string`;             `licenseUrl`?: `string`;             `mailingAddress`?: `string`;             `name`: `string`;             `notifyAllAuthors`?: `boolean`;             `numAnnouncementsHomepage`?: `number`;             `numDaysBeforeInviteReminder`?: `number`;             `numDaysBeforeSubmitReminder`?: `number`;             `numPageLinks`?: `number`;             `numWeeksPerResponse`?: `number`;             `numWeeksPerReview`?: `number`;             `openAccessPolicy`?: `string`;             `pageFooter`?: `string`;             `pageHeaderLogoImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `paymentsEnabled`?: `boolean`;             `primaryLocale`: `string`;             `privacyStatement`?: `string`;             `rateReviewerOnQuality`?: `boolean`;             `readerInformation`?: `string`;             `registrationAgency`?: `string`;             `restrictReviewerFileAccess`?: `boolean`;             `restrictSiteAccess`?: `boolean`;             `reviewGuidelines`?: `string`;             `reviewerAccessKeysEnabled`?: `boolean`;             `rights`?: `string`;             `searchDescription`?: `string`;             `seq`?: `number`;             `showEnsuringLink`?: `boolean`;             `sidebar`?: `string`[];             `source`?: `string`;             `styleSheet`?: {                 `dateUploaded`?: `string`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `subjects`?: `string`;             `submissionChecklist`?: {                 `content`?: `string`;                 `order`?: `number`;             }[];             `supportEmail`?: `string`;             `supportName`?: `string`;             `supportPhone`?: `string`;             `supportedFormLocales`?: `string`[];             `supportedLocales`: `string`[];             `supportedSubmissionLocales`?: `string`[];             `themePluginPath`?: `string`;             `timeFormat`?: `string`;             `type`?: `string`;             `url`?: `string`;             `urlPath`: `string`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `_href`?: `string`;         `about`?: `string`;         `acronym`?: `string`;         `additionalHomeContent`?: `string`;         `agencies`?: `string`;         `announcementsIntroduction`?: `string`;         `authorGuidelines`?: `string`;         `authorInformation`?: `string`;         `automaticDoiDeposit`?: `boolean`;         `citations`?: `string`;         `competingInterests`?: `string`;         `contactAffiliation`?: `string`;         `contactEmail`?: `string`;         `contactName`?: `string`;         `contactPhone`?: `string`;         `copySubmissionAckAddress`?: `string`;         `copySubmissionAckPrimaryContact`?: `boolean`;         `copyrightHolderOther`?: `string`;         `copyrightHolderType`?: `string`;         `copyrightNotice`?: `string`;         `country`?: `string`;         `coverage`?: `string`;         `currency`?: `string`;         `customDoiSuffixType`?: `string`;         `customHeaders`?: `string`;         `dateFormatLong`?: `string`;         `dateFormatShort`?: `string`;         `datetimeFormatLong`?: `string`;         `datetimeFormatShort`?: `string`;         `defaultMetricType`?: `string`;         `defaultReviewMode`?: `number`;         `description`?: `string`;         `disableBulkEmailUserGroups`?: `number`[];         `disableSubmissions`?: `boolean`;         `disableUserReg`?: `boolean`;         `disciplines`?: `string`;         `doiPrefix`?: `string`;         `doiPublicationSuffixPattern`?: `string`;         `doiRepresentationSuffixPattern`?: `string`;         `editorialTeam`?: `string`;         `emailSignature`?: `string`;         `enableAnnouncements`?: `boolean`;         `enableClockss`?: `boolean`;         `enableDois`?: `boolean`;         `enableLockss`?: `boolean`;         `enabled`?: `boolean`;         `envelopeSender`?: `string`;         `favicon`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `homepageImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `id`?: `number`;         `itemsPerPage`?: `number`;         `keywords`?: `string`;         `languages`?: `string`;         `librarianInformation`?: `string`;         `licenseUrl`?: `string`;         `mailingAddress`?: `string`;         `name`: `string`;         `notifyAllAuthors`?: `boolean`;         `numAnnouncementsHomepage`?: `number`;         `numDaysBeforeInviteReminder`?: `number`;         `numDaysBeforeSubmitReminder`?: `number`;         `numPageLinks`?: `number`;         `numWeeksPerResponse`?: `number`;         `numWeeksPerReview`?: `number`;         `openAccessPolicy`?: `string`;         `pageFooter`?: `string`;         `pageHeaderLogoImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `paymentsEnabled`?: `boolean`;         `primaryLocale`: `string`;         `privacyStatement`?: `string`;         `rateReviewerOnQuality`?: `boolean`;         `readerInformation`?: `string`;         `registrationAgency`?: `string`;         `restrictReviewerFileAccess`?: `boolean`;         `restrictSiteAccess`?: `boolean`;         `reviewGuidelines`?: `string`;         `reviewerAccessKeysEnabled`?: `boolean`;         `rights`?: `string`;         `searchDescription`?: `string`;         `seq`?: `number`;         `showEnsuringLink`?: `boolean`;         `sidebar`?: `string`[];         `source`?: `string`;         `styleSheet`?: {             `dateUploaded`?: `string`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `subjects`?: `string`;         `submissionChecklist`?: {             `content`?: `string`;             `order`?: `number`;         }[];         `supportEmail`?: `string`;         `supportName`?: `string`;         `supportPhone`?: `string`;         `supportedFormLocales`?: `string`[];         `supportedLocales`: `string`[];         `supportedSubmissionLocales`?: `string`[];         `themePluginPath`?: `string`;         `timeFormat`?: `string`;         `type`?: `string`;         `url`?: `string`;         `urlPath`: `string`;     }; } | The context that was just edited with the current values after the edit has occurred. |
| `put.responses.200.schema` | {     `_href`?: `string`;     `about`?: `string`;     `acronym`?: `string`;     `additionalHomeContent`?: `string`;     `agencies`?: `string`;     `announcementsIntroduction`?: `string`;     `authorGuidelines`?: `string`;     `authorInformation`?: `string`;     `automaticDoiDeposit`?: `boolean`;     `citations`?: `string`;     `competingInterests`?: `string`;     `contactAffiliation`?: `string`;     `contactEmail`?: `string`;     `contactName`?: `string`;     `contactPhone`?: `string`;     `copySubmissionAckAddress`?: `string`;     `copySubmissionAckPrimaryContact`?: `boolean`;     `copyrightHolderOther`?: `string`;     `copyrightHolderType`?: `string`;     `copyrightNotice`?: `string`;     `country`?: `string`;     `coverage`?: `string`;     `currency`?: `string`;     `customDoiSuffixType`?: `string`;     `customHeaders`?: `string`;     `dateFormatLong`?: `string`;     `dateFormatShort`?: `string`;     `datetimeFormatLong`?: `string`;     `datetimeFormatShort`?: `string`;     `defaultMetricType`?: `string`;     `defaultReviewMode`?: `number`;     `description`?: `string`;     `disableBulkEmailUserGroups`?: `number`[];     `disableSubmissions`?: `boolean`;     `disableUserReg`?: `boolean`;     `disciplines`?: `string`;     `doiPrefix`?: `string`;     `doiPublicationSuffixPattern`?: `string`;     `doiRepresentationSuffixPattern`?: `string`;     `editorialTeam`?: `string`;     `emailSignature`?: `string`;     `enableAnnouncements`?: `boolean`;     `enableClockss`?: `boolean`;     `enableDois`?: `boolean`;     `enableLockss`?: `boolean`;     `enabled`?: `boolean`;     `envelopeSender`?: `string`;     `favicon`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `homepageImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `id`?: `number`;     `itemsPerPage`?: `number`;     `keywords`?: `string`;     `languages`?: `string`;     `librarianInformation`?: `string`;     `licenseUrl`?: `string`;     `mailingAddress`?: `string`;     `name`: `string`;     `notifyAllAuthors`?: `boolean`;     `numAnnouncementsHomepage`?: `number`;     `numDaysBeforeInviteReminder`?: `number`;     `numDaysBeforeSubmitReminder`?: `number`;     `numPageLinks`?: `number`;     `numWeeksPerResponse`?: `number`;     `numWeeksPerReview`?: `number`;     `openAccessPolicy`?: `string`;     `pageFooter`?: `string`;     `pageHeaderLogoImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `paymentsEnabled`?: `boolean`;     `primaryLocale`: `string`;     `privacyStatement`?: `string`;     `rateReviewerOnQuality`?: `boolean`;     `readerInformation`?: `string`;     `registrationAgency`?: `string`;     `restrictReviewerFileAccess`?: `boolean`;     `restrictSiteAccess`?: `boolean`;     `reviewGuidelines`?: `string`;     `reviewerAccessKeysEnabled`?: `boolean`;     `rights`?: `string`;     `searchDescription`?: `string`;     `seq`?: `number`;     `showEnsuringLink`?: `boolean`;     `sidebar`?: `string`[];     `source`?: `string`;     `styleSheet`?: {         `dateUploaded`?: `string`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `subjects`?: `string`;     `submissionChecklist`?: {         `content`?: `string`;         `order`?: `number`;     }[];     `supportEmail`?: `string`;     `supportName`?: `string`;     `supportPhone`?: `string`;     `supportedFormLocales`?: `string`[];     `supportedLocales`: `string`[];     `supportedSubmissionLocales`?: `string`[];     `themePluginPath`?: `string`;     `timeFormat`?: `string`;     `type`?: `string`;     `url`?: `string`;     `urlPath`: `string`; } | - |
| `put.responses.200.schema._href`? | `string` | Format: uri |
| `put.responses.200.schema.about`? | `string` | - |
| `put.responses.200.schema.acronym`? | `string` | - |
| `put.responses.200.schema.additionalHomeContent`? | `string` | - |
| `put.responses.200.schema.agencies`? | `string` | `Description`  Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `put.responses.200.schema.announcementsIntroduction`? | `string` | - |
| `put.responses.200.schema.authorGuidelines`? | `string` | - |
| `put.responses.200.schema.authorInformation`? | `string` | - |
| `put.responses.200.schema.automaticDoiDeposit`? | `boolean` | - |
| `put.responses.200.schema.citations`? | `string` | `Description`  Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `put.responses.200.schema.competingInterests`? | `string` | - |
| `put.responses.200.schema.contactAffiliation`? | `string` | - |
| `put.responses.200.schema.contactEmail`? | `string` | - |
| `put.responses.200.schema.contactName`? | `string` | - |
| `put.responses.200.schema.contactPhone`? | `string` | - |
| `put.responses.200.schema.copySubmissionAckAddress`? | `string` | `Description`  A copy of the submission acknowledgement email will be sent to any of the email addresses entered here. Separate multiple email addresses with a comma. Example: one\@example.com,two\@example.com |
| `put.responses.200.schema.copySubmissionAckPrimaryContact`? | `boolean` | `Description`  A copy of the submission acknowledgement email will be sent to this context's primary contact when true. |
| `put.responses.200.schema.copyrightHolderOther`? | `string` | - |
| `put.responses.200.schema.copyrightHolderType`? | `string` | - |
| `put.responses.200.schema.copyrightNotice`? | `string` | - |
| `put.responses.200.schema.country`? | `string` | - |
| `put.responses.200.schema.coverage`? | `string` | `Description`  Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `put.responses.200.schema.currency`? | `string` | - |
| `put.responses.200.schema.customDoiSuffixType`? | `string` | - |
| `put.responses.200.schema.customHeaders`? | `string` | - |
| `put.responses.200.schema.dateFormatLong`? | `string` | - |
| `put.responses.200.schema.dateFormatShort`? | `string` | - |
| `put.responses.200.schema.datetimeFormatLong`? | `string` | - |
| `put.responses.200.schema.datetimeFormatShort`? | `string` | - |
| `put.responses.200.schema.defaultMetricType`? | `string` | - |
| `put.responses.200.schema.defaultReviewMode`? | `number` | `Default`  2 |
| `put.responses.200.schema.description`? | `string` | - |
| `put.responses.200.schema.disableBulkEmailUserGroups`? | `number`[] | `Description`  User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property. |
| `put.responses.200.schema.disableSubmissions`? | `boolean` | - |
| `put.responses.200.schema.disableUserReg`? | `boolean` | - |
| `put.responses.200.schema.disciplines`? | `string` | `Description`  Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `put.responses.200.schema.doiPrefix`? | `string` | - |
| `put.responses.200.schema.doiPublicationSuffixPattern`? | `string` | - |
| `put.responses.200.schema.doiRepresentationSuffixPattern`? | `string` | - |
| `put.responses.200.schema.editorialTeam`? | `string` | - |
| `put.responses.200.schema.emailSignature`? | `string` | - |
| `put.responses.200.schema.enableAnnouncements`? | `boolean` | - |
| `put.responses.200.schema.enableClockss`? | `boolean` | - |
| `put.responses.200.schema.enableDois`? | `boolean` | - |
| `put.responses.200.schema.enableLockss`? | `boolean` | - |
| `put.responses.200.schema.enabled`? | `boolean` | - |
| `put.responses.200.schema.envelopeSender`? | `string` | - |
| `put.responses.200.schema.favicon`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `put.responses.200.schema.favicon.altText`? | `string` | - |
| `put.responses.200.schema.favicon.dateUploaded`? | `string` | - |
| `put.responses.200.schema.favicon.height`? | `number` | - |
| `put.responses.200.schema.favicon.name`? | `string` | - |
| `put.responses.200.schema.favicon.temporaryFileId`? | `number` | - |
| `put.responses.200.schema.favicon.uploadName`? | `string` | - |
| `put.responses.200.schema.favicon.width`? | `number` | - |
| `put.responses.200.schema.homepageImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `put.responses.200.schema.homepageImage.altText`? | `string` | - |
| `put.responses.200.schema.homepageImage.dateUploaded`? | `string` | - |
| `put.responses.200.schema.homepageImage.height`? | `number` | - |
| `put.responses.200.schema.homepageImage.name`? | `string` | - |
| `put.responses.200.schema.homepageImage.temporaryFileId`? | `number` | - |
| `put.responses.200.schema.homepageImage.uploadName`? | `string` | - |
| `put.responses.200.schema.homepageImage.width`? | `number` | - |
| `put.responses.200.schema.id`? | `number` | - |
| `put.responses.200.schema.itemsPerPage`? | `number` | `Default`  25 |
| `put.responses.200.schema.keywords`? | `string` | `Description`  Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.  `Default`  request |
| `put.responses.200.schema.languages`? | `string` | `Description`  Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `put.responses.200.schema.librarianInformation`? | `string` | - |
| `put.responses.200.schema.licenseUrl`? | `string` | - |
| `put.responses.200.schema.mailingAddress`? | `string` | - |
| `put.responses.200.schema.name` | `string` | - |
| `put.responses.200.schema.notifyAllAuthors`? | `boolean` | `Description`  When enabled, all authors of a submission will receive a notification when an editorial decision is made regarding a submission. When disabled, only authors assigned to the submission will be notified.  `Default`  true |
| `put.responses.200.schema.numAnnouncementsHomepage`? | `number` | - |
| `put.responses.200.schema.numDaysBeforeInviteReminder`? | `number` | - |
| `put.responses.200.schema.numDaysBeforeSubmitReminder`? | `number` | - |
| `put.responses.200.schema.numPageLinks`? | `number` | `Default`  10 |
| `put.responses.200.schema.numWeeksPerResponse`? | `number` | `Default`  4 |
| `put.responses.200.schema.numWeeksPerReview`? | `number` | `Default`  4 |
| `put.responses.200.schema.openAccessPolicy`? | `string` | - |
| `put.responses.200.schema.pageFooter`? | `string` | - |
| `put.responses.200.schema.pageHeaderLogoImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } | - |
| `put.responses.200.schema.pageHeaderLogoImage.altText`? | `string` | - |
| `put.responses.200.schema.pageHeaderLogoImage.dateUploaded`? | `string` | - |
| `put.responses.200.schema.pageHeaderLogoImage.height`? | `number` | - |
| `put.responses.200.schema.pageHeaderLogoImage.name`? | `string` | - |
| `put.responses.200.schema.pageHeaderLogoImage.temporaryFileId`? | `number` | - |
| `put.responses.200.schema.pageHeaderLogoImage.uploadName`? | `string` | - |
| `put.responses.200.schema.pageHeaderLogoImage.width`? | `number` | - |
| `put.responses.200.schema.paymentsEnabled`? | `boolean` | - |
| `put.responses.200.schema.primaryLocale` | `string` | - |
| `put.responses.200.schema.privacyStatement`? | `string` | - |
| `put.responses.200.schema.rateReviewerOnQuality`? | `boolean` | - |
| `put.responses.200.schema.readerInformation`? | `string` | - |
| `put.responses.200.schema.registrationAgency`? | `string` | `Default`  none |
| `put.responses.200.schema.restrictReviewerFileAccess`? | `boolean` | - |
| `put.responses.200.schema.restrictSiteAccess`? | `boolean` | - |
| `put.responses.200.schema.reviewGuidelines`? | `string` | - |
| `put.responses.200.schema.reviewerAccessKeysEnabled`? | `boolean` | - |
| `put.responses.200.schema.rights`? | `string` | `Description`  Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `put.responses.200.schema.searchDescription`? | `string` | - |
| `put.responses.200.schema.seq`? | `number` | - |
| `put.responses.200.schema.showEnsuringLink`? | `boolean` | - |
| `put.responses.200.schema.sidebar`? | `string`[] | - |
| `put.responses.200.schema.source`? | `string` | `Description`  Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `put.responses.200.schema.styleSheet`? | {     `dateUploaded`?: `string`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `put.responses.200.schema.styleSheet.dateUploaded`? | `string` | - |
| `put.responses.200.schema.styleSheet.name`? | `string` | - |
| `put.responses.200.schema.styleSheet.temporaryFileId`? | `number` | - |
| `put.responses.200.schema.styleSheet.uploadName`? | `string` | - |
| `put.responses.200.schema.subjects`? | `string` | `Description`  Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `put.responses.200.schema.submissionChecklist`? | {     `content`?: `string`;     `order`?: `number`; }[] | `Default`  [object Object],[object Object],[object Object],[object Object],[object Object] |
| `put.responses.200.schema.supportEmail`? | `string` | - |
| `put.responses.200.schema.supportName`? | `string` | - |
| `put.responses.200.schema.supportPhone`? | `string` | - |
| `put.responses.200.schema.supportedFormLocales`? | `string`[] | - |
| `put.responses.200.schema.supportedLocales` | `string`[] | - |
| `put.responses.200.schema.supportedSubmissionLocales`? | `string`[] | - |
| `put.responses.200.schema.themePluginPath`? | `string` | `Default`  default |
| `put.responses.200.schema.timeFormat`? | `string` | - |
| `put.responses.200.schema.type`? | `string` | `Description`  Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. |
| `put.responses.200.schema.url`? | `string` | - |
| `put.responses.200.schema.urlPath` | `string` | - |
| `put.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `put.responses.400.schema` | {  } | - |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | There are two possible conditions that will result in a `403` response. 1. You do not have permission to edit this context. 2. You submitted changes for one context from the API endpoint of another context. To edit a context, you must make a request to that context's API endpoint or the site-wide API endpoint. |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.403.schema.error`? | `string` | - |
| `put.responses.403.schema.errorMessage`? | `string` | - |
| `put.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested context could not be found. |
| `put.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.404.schema.error`? | `string` | - |
| `put.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:972](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L972)

##### `/contexts/\{contextId}/theme`

> `object`

```ts
{
    get: {
        parameters: {
            path: {
                contextId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    ...?: string;
                    themePluginPath?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    put: {
        parameters: {
            path: {
                contextId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    ...?: string;
                    themePluginPath?: string;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Get the active theme and theme options for any journal (OJS), press (OMP) or preprint server (OPS). |
| `get.parameters` | {     `path`: {         `contextId`: `number`;     }; } | - |
| `get.parameters.path` | {     `contextId`: `number`; } | - |
| `get.parameters.path.contextId` | `number` | Context ID |
| `get.responses` | {     `200`: {         `schema`: {             `...`?: `string`;             `themePluginPath`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `...`?: `string`;         `themePluginPath`?: `string`;     }; } | The response will include the theme plugin directory in `themePluginPath`. Any theme options will be provided in additional keys based on the option name. |
| `get.responses.200.schema` | {     `...`?: `string`;     `themePluginPath`?: `string`; } | - |
| `get.responses.200.schema....`? | `string` | - |
| `get.responses.200.schema.themePluginPath`? | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to view this context. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested context could not be found. A 404 may also be returned when a context has no active theme, or the active theme plugin has not been installed or enabled. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `put` | `object` | Edit the active theme and theme options for any journal (OJS), press (OMP) or preprint server (OPS). |
| `put.parameters` | {     `path`: {         `contextId`: `number`;     }; } | - |
| `put.parameters.path` | {     `contextId`: `number`; } | - |
| `put.parameters.path.contextId` | `number` | Context ID |
| `put.responses` | {     `200`: {         `schema`: {             `...`?: `string`;             `themePluginPath`?: `string`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `...`?: `string`;         `themePluginPath`?: `string`;     }; } | The new theme and values for any of its theme options. |
| `put.responses.200.schema` | {     `...`?: `string`;     `themePluginPath`?: `string`; } | - |
| `put.responses.200.schema....`? | `string` | - |
| `put.responses.200.schema.themePluginPath`? | `string` | - |
| `put.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `put.responses.400.schema` | {  } | - |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | There are two possible conditions that will result in a `403` response. 1. You do not have permission to edit this context. 2. You submitted changes for one context from the API endpoint of another context. To edit a context, you must make a request to that context's API endpoint or the site-wide API endpoint. |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.403.schema.error`? | `string` | - |
| `put.responses.403.schema.errorMessage`? | `string` | - |
| `put.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested context could not be found. |
| `put.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.404.schema.error`? | `string` | - |
| `put.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1046](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1046)

##### `/emailTemplates`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                fromRoleIds?: number[];
                isCustom?: string;
                isEnabled?: string;
                searchPhrase?: string;
                stageIds?: number[];
                toRoleIds?: number[];
            };
        };
        responses: {
            200: {
                schema: {
                    items?: ["EmailTemplate"][];
                    itemsMax?: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    post: {
        parameters: {};
        responses: {
            200: {
                schema: {
                    _href?: string;
                    body: string;
                    canDisable?: boolean;
                    canEdit?: boolean;
                    contextId: number;
                    description?: string;
                    enabled?: boolean;
                    fromRoleId?: number;
                    id?: number;
                    key: string;
                    stageId?: number;
                    subject: string;
                    toRoleId?: number;
                };
            };
            400: {
                schema: {
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `get` | `object` |
| `get.parameters` | {     `query`: {         `fromRoleIds`?: `number`[];         `isCustom`?: `string`;         `isEnabled`?: `string`;         `searchPhrase`?: `string`;         `stageIds`?: `number`[];         `toRoleIds`?: `number`[];     }; } |
| `get.parameters.query` | {     `fromRoleIds`?: `number`[];     `isCustom`?: `string`;     `isEnabled`?: `string`;     `searchPhrase`?: `string`;     `stageIds`?: `number`[];     `toRoleIds`?: `number`[]; } |
| `get.parameters.query.fromRoleIds`? | `number`[] |
| `get.parameters.query.isCustom`? | `string` |
| `get.parameters.query.isEnabled`? | `string` |
| `get.parameters.query.searchPhrase`? | `string` |
| `get.parameters.query.stageIds`? | `number`[] |
| `get.parameters.query.toRoleIds`? | `number`[] |
| `get.responses` | {     `200`: {         `schema`: {             `items`?: [`"EmailTemplate"`][];             `itemsMax`?: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } |
| `get.responses.200` | {     `schema`: {         `items`?: [`"EmailTemplate"`][];         `itemsMax`?: `number`;     }; } |
| `get.responses.200.schema` | {     `items`?: [`"EmailTemplate"`][];     `itemsMax`?: `number`; } |
| `get.responses.200.schema.items`? | [`"EmailTemplate"`][] |
| `get.responses.200.schema.itemsMax`? | `number` |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `get.responses.403.schema.error`? | `string` |
| `get.responses.403.schema.errorMessage`? | `string` |
| `post` | `object` |
| `post.parameters` | {} |
| `post.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `body`: `string`;             `canDisable`?: `boolean`;             `canEdit`?: `boolean`;             `contextId`: `number`;             `description`?: `string`;             `enabled`?: `boolean`;             `fromRoleId`?: `number`;             `id`?: `number`;             `key`: `string`;             `stageId`?: `number`;             `subject`: `string`;             `toRoleId`?: `number`;         };     };     `400`: {         `schema`: {         };     }; } |
| `post.responses.200` | {     `schema`: {         `_href`?: `string`;         `body`: `string`;         `canDisable`?: `boolean`;         `canEdit`?: `boolean`;         `contextId`: `number`;         `description`?: `string`;         `enabled`?: `boolean`;         `fromRoleId`?: `number`;         `id`?: `number`;         `key`: `string`;         `stageId`?: `number`;         `subject`: `string`;         `toRoleId`?: `number`;     }; } |
| `post.responses.200.schema` | {     `_href`?: `string`;     `body`: `string`;     `canDisable`?: `boolean`;     `canEdit`?: `boolean`;     `contextId`: `number`;     `description`?: `string`;     `enabled`?: `boolean`;     `fromRoleId`?: `number`;     `id`?: `number`;     `key`: `string`;     `stageId`?: `number`;     `subject`: `string`;     `toRoleId`?: `number`; } |
| `post.responses.200.schema._href`? | `string` |
| `post.responses.200.schema.body` | `string` |
| `post.responses.200.schema.canDisable`? | `boolean` |
| `post.responses.200.schema.canEdit`? | `boolean` |
| `post.responses.200.schema.contextId` | `number` |
| `post.responses.200.schema.description`? | `string` |
| `post.responses.200.schema.enabled`? | `boolean` |
| `post.responses.200.schema.fromRoleId`? | `number` |
| `post.responses.200.schema.id`? | `number` |
| `post.responses.200.schema.key` | `string` |
| `post.responses.200.schema.stageId`? | `number` |
| `post.responses.200.schema.subject` | `string` |
| `post.responses.200.schema.toRoleId`? | `number` |
| `post.responses.400` | {     `schema`: {     }; } |
| `post.responses.400.schema` | {  } |

Defined in:  [lib/swagger-types.ts:1267](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1267)

##### `/emailTemplates/restoreDefaults`

> `object`

```ts
{
    delete: {
        responses: {
            200: {
                schema: string[];
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `delete` | `object` | Delete custom templates and reset all templates to their default settings. |
| `delete.responses` | {     `200`: {         `schema`: `string`[];     }; } | - |
| `delete.responses.200` | {     `schema`: `string`[]; } | A list of template keys which were deleted or reset. |
| `delete.responses.200.schema` | `string`[] | - |

Defined in:  [lib/swagger-types.ts:1387](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1387)

##### `/emailTemplates/\{key}`

> `object`

```ts
{
    delete: {
        parameters: {
            path: {
                key: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    body: string;
                    canDisable?: boolean;
                    canEdit?: boolean;
                    contextId: number;
                    description?: string;
                    enabled?: boolean;
                    fromRoleId?: number;
                    id?: number;
                    key: string;
                    stageId?: number;
                    subject: string;
                    toRoleId?: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    get: {
        parameters: {
            path: {
                key: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    body: string;
                    canDisable?: boolean;
                    canEdit?: boolean;
                    contextId: number;
                    description?: string;
                    enabled?: boolean;
                    fromRoleId?: number;
                    id?: number;
                    key: string;
                    stageId?: number;
                    subject: string;
                    toRoleId?: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    put: {
        parameters: {
            path: {
                key: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    body: string;
                    canDisable?: boolean;
                    canEdit?: boolean;
                    contextId: number;
                    description?: string;
                    enabled?: boolean;
                    fromRoleId?: number;
                    id?: number;
                    key: string;
                    stageId?: number;
                    subject: string;
                    toRoleId?: number;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `delete` | `object` | Default templates that have not been modified can not be deleted. |
| `delete.parameters` | {     `path`: {         `key`: `number`;     }; } | - |
| `delete.parameters.path` | {     `key`: `number`; } | - |
| `delete.parameters.path.key` | `number` | Email template key |
| `delete.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `body`: `string`;             `canDisable`?: `boolean`;             `canEdit`?: `boolean`;             `contextId`: `number`;             `description`?: `string`;             `enabled`?: `boolean`;             `fromRoleId`?: `number`;             `id`?: `number`;             `key`: `string`;             `stageId`?: `number`;             `subject`: `string`;             `toRoleId`?: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `delete.responses.200` | {     `schema`: {         `_href`?: `string`;         `body`: `string`;         `canDisable`?: `boolean`;         `canEdit`?: `boolean`;         `contextId`: `number`;         `description`?: `string`;         `enabled`?: `boolean`;         `fromRoleId`?: `number`;         `id`?: `number`;         `key`: `string`;         `stageId`?: `number`;         `subject`: `string`;         `toRoleId`?: `number`;     }; } | Details of the email template that was just deleted. |
| `delete.responses.200.schema` | {     `_href`?: `string`;     `body`: `string`;     `canDisable`?: `boolean`;     `canEdit`?: `boolean`;     `contextId`: `number`;     `description`?: `string`;     `enabled`?: `boolean`;     `fromRoleId`?: `number`;     `id`?: `number`;     `key`: `string`;     `stageId`?: `number`;     `subject`: `string`;     `toRoleId`?: `number`; } | - |
| `delete.responses.200.schema._href`? | `string` | Format: uri |
| `delete.responses.200.schema.body` | `string` | `Description`  The email template to be used in the email's main body content. |
| `delete.responses.200.schema.canDisable`? | `boolean` | `Description`  Can this email template be disabled in the context settings area? Default is `true`. |
| `delete.responses.200.schema.canEdit`? | `boolean` | `Description`  Can this email template be edited in the context settings area? Default is `true`. |
| `delete.responses.200.schema.contextId` | `number` | `Description`  The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`. |
| `delete.responses.200.schema.description`? | `string` | `Description`  A description of when this email template is used. |
| `delete.responses.200.schema.enabled`? | `boolean` | `Description`  Is this email template enabled? Default is `true`. |
| `delete.responses.200.schema.fromRoleId`? | `number` | `Description`  The `ROLE_ID_*` of the user who will send this email. |
| `delete.responses.200.schema.id`? | `number` | `Description`  The email template ID. |
| `delete.responses.200.schema.key` | `string` | `Description`  A unique key for this email template. |
| `delete.responses.200.schema.stageId`? | `number` | `Description`  The `WORKFLOW_STAGE_ID_*` that email template is associated with or `null` if it is not associated with a stage. |
| `delete.responses.200.schema.subject` | `string` | `Description`  The subject of the email to be used in the email's subject header. |
| `delete.responses.200.schema.toRoleId`? | `number` | `Description`  The `ROLE_ID_*` of the user who will receive this email. |
| `delete.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to delete this email template. |
| `delete.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.403.schema.error`? | `string` | - |
| `delete.responses.403.schema.errorMessage`? | `string` | - |
| `delete.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested email template could not be found. This will be returned if you try to delete a default email template that has not been modified. |
| `delete.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.404.schema.error`? | `string` | - |
| `delete.responses.404.schema.errorMessage`? | `string` | - |
| `get` | `object` | Email templates are fetched by their key, rather than ID, so that a default template is retrieved if it has not been customized. See the [documentation](https://docs.pkp.sfu.ca/dev/documentation/en/email-templates). |
| `get.parameters` | {     `path`: {         `key`: `number`;     }; } | - |
| `get.parameters.path` | {     `key`: `number`; } | - |
| `get.parameters.path.key` | `number` | Email template key |
| `get.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `body`: `string`;             `canDisable`?: `boolean`;             `canEdit`?: `boolean`;             `contextId`: `number`;             `description`?: `string`;             `enabled`?: `boolean`;             `fromRoleId`?: `number`;             `id`?: `number`;             `key`: `string`;             `stageId`?: `number`;             `subject`: `string`;             `toRoleId`?: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `_href`?: `string`;         `body`: `string`;         `canDisable`?: `boolean`;         `canEdit`?: `boolean`;         `contextId`: `number`;         `description`?: `string`;         `enabled`?: `boolean`;         `fromRoleId`?: `number`;         `id`?: `number`;         `key`: `string`;         `stageId`?: `number`;         `subject`: `string`;         `toRoleId`?: `number`;     }; } | Email template details. |
| `get.responses.200.schema` | {     `_href`?: `string`;     `body`: `string`;     `canDisable`?: `boolean`;     `canEdit`?: `boolean`;     `contextId`: `number`;     `description`?: `string`;     `enabled`?: `boolean`;     `fromRoleId`?: `number`;     `id`?: `number`;     `key`: `string`;     `stageId`?: `number`;     `subject`: `string`;     `toRoleId`?: `number`; } | - |
| `get.responses.200.schema._href`? | `string` | Format: uri |
| `get.responses.200.schema.body` | `string` | `Description`  The email template to be used in the email's main body content. |
| `get.responses.200.schema.canDisable`? | `boolean` | `Description`  Can this email template be disabled in the context settings area? Default is `true`. |
| `get.responses.200.schema.canEdit`? | `boolean` | `Description`  Can this email template be edited in the context settings area? Default is `true`. |
| `get.responses.200.schema.contextId` | `number` | `Description`  The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`. |
| `get.responses.200.schema.description`? | `string` | `Description`  A description of when this email template is used. |
| `get.responses.200.schema.enabled`? | `boolean` | `Description`  Is this email template enabled? Default is `true`. |
| `get.responses.200.schema.fromRoleId`? | `number` | `Description`  The `ROLE_ID_*` of the user who will send this email. |
| `get.responses.200.schema.id`? | `number` | `Description`  The email template ID. |
| `get.responses.200.schema.key` | `string` | `Description`  A unique key for this email template. |
| `get.responses.200.schema.stageId`? | `number` | `Description`  The `WORKFLOW_STAGE_ID_*` that email template is associated with or `null` if it is not associated with a stage. |
| `get.responses.200.schema.subject` | `string` | `Description`  The subject of the email to be used in the email's subject header. |
| `get.responses.200.schema.toRoleId`? | `number` | `Description`  The `ROLE_ID_*` of the user who will receive this email. |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to view email templates. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested email template could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `put` | `object` | - |
| `put.parameters` | {     `path`: {         `key`: `number`;     }; } | - |
| `put.parameters.path` | {     `key`: `number`; } | - |
| `put.parameters.path.key` | `number` | Email template key |
| `put.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `body`: `string`;             `canDisable`?: `boolean`;             `canEdit`?: `boolean`;             `contextId`: `number`;             `description`?: `string`;             `enabled`?: `boolean`;             `fromRoleId`?: `number`;             `id`?: `number`;             `key`: `string`;             `stageId`?: `number`;             `subject`: `string`;             `toRoleId`?: `number`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `_href`?: `string`;         `body`: `string`;         `canDisable`?: `boolean`;         `canEdit`?: `boolean`;         `contextId`: `number`;         `description`?: `string`;         `enabled`?: `boolean`;         `fromRoleId`?: `number`;         `id`?: `number`;         `key`: `string`;         `stageId`?: `number`;         `subject`: `string`;         `toRoleId`?: `number`;     }; } | The email template that was just edited with the current values after the edit has occurred. |
| `put.responses.200.schema` | {     `_href`?: `string`;     `body`: `string`;     `canDisable`?: `boolean`;     `canEdit`?: `boolean`;     `contextId`: `number`;     `description`?: `string`;     `enabled`?: `boolean`;     `fromRoleId`?: `number`;     `id`?: `number`;     `key`: `string`;     `stageId`?: `number`;     `subject`: `string`;     `toRoleId`?: `number`; } | - |
| `put.responses.200.schema._href`? | `string` | Format: uri |
| `put.responses.200.schema.body` | `string` | `Description`  The email template to be used in the email's main body content. |
| `put.responses.200.schema.canDisable`? | `boolean` | `Description`  Can this email template be disabled in the context settings area? Default is `true`. |
| `put.responses.200.schema.canEdit`? | `boolean` | `Description`  Can this email template be edited in the context settings area? Default is `true`. |
| `put.responses.200.schema.contextId` | `number` | `Description`  The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`. |
| `put.responses.200.schema.description`? | `string` | `Description`  A description of when this email template is used. |
| `put.responses.200.schema.enabled`? | `boolean` | `Description`  Is this email template enabled? Default is `true`. |
| `put.responses.200.schema.fromRoleId`? | `number` | `Description`  The `ROLE_ID_*` of the user who will send this email. |
| `put.responses.200.schema.id`? | `number` | `Description`  The email template ID. |
| `put.responses.200.schema.key` | `string` | `Description`  A unique key for this email template. |
| `put.responses.200.schema.stageId`? | `number` | `Description`  The `WORKFLOW_STAGE_ID_*` that email template is associated with or `null` if it is not associated with a stage. |
| `put.responses.200.schema.subject` | `string` | `Description`  The subject of the email to be used in the email's subject header. |
| `put.responses.200.schema.toRoleId`? | `number` | `Description`  The `ROLE_ID_*` of the user who will receive this email. |
| `put.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `put.responses.400.schema` | {  } | - |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | There are two possible conditions that will result in a `403` response. 1. You do not have permission to edit this email template. 2. You are an admin and you submitted changes for an email template in one context from the API endpoint of another context. To edit an email template, you must make a request to the API endpoint of that email template's context. |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.403.schema.error`? | `string` | - |
| `put.responses.403.schema.errorMessage`? | `string` | - |
| `put.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested email template could not be found. |
| `put.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.404.schema.error`? | `string` | - |
| `put.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1313](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1313)

##### `/issues`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                count?: number;
                isPublished?: boolean;
                numbers?: string;
                offset?: number;
                orderBy?: "datePublished" | "lastModified" | "seq";
                orderDirection?: "ASC" | "DESC";
                searchPhrase?: string;
                volumes?: string;
                years?: string;
            };
        };
        responses: {
            200: {
                schema: unknown[];
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Results are eordered by `datePublished`. |
| `get.parameters` | {     `query`: {         `count`?: `number`;         `isPublished`?: `boolean`;         `numbers`?: `string`;         `offset`?: `number`;         `orderBy`?: `"datePublished"` | `"lastModified"` | `"seq"`;         `orderDirection`?: `"ASC"` | `"DESC"`;         `searchPhrase`?: `string`;         `volumes`?: `string`;         `years`?: `string`;     }; } | - |
| `get.parameters.query` | {     `count`?: `number`;     `isPublished`?: `boolean`;     `numbers`?: `string`;     `offset`?: `number`;     `orderBy`?: `"datePublished"` | `"lastModified"` | `"seq"`;     `orderDirection`?: `"ASC"` | `"DESC"`;     `searchPhrase`?: `string`;     `volumes`?: `string`;     `years`?: `string`; } | - |
| `get.parameters.query.count`? | `number` | How many results to return in a single request. Max is `100`. |
| `get.parameters.query.isPublished`? | `boolean` | Filter returned issues by those that have been published. Pass a `false` value to return only unpublished issues. Only administrators and journal managers are allowed to access unpublished issues. |
| `get.parameters.query.numbers`? | `string` | Filter returned issues by those assigned a specific number. |
| `get.parameters.query.offset`? | `number` | Offset the results returned. Use this to receive subsequent pages of requests. A `count` of `10` and `offset` of `15` will return results `15` to `25`. |
| `get.parameters.query.orderBy`? | `"datePublished"` | `"lastModified"` | `"seq"` | Order the results returned. |
| `get.parameters.query.orderDirection`? | `"ASC"` | `"DESC"` | Return the results in ascending or descending order. |
| `get.parameters.query.searchPhrase`? | `string` | Filter the results by a search phrase matched against the title, description and year. It will also attempt to match search phrases using the localised issue identification. For example, in English a search for `Vol. 1 No. 2 (2018)` will match an issue with a volume of `1`, a number of `2` and a year of `2018`. The precise format differs for each language. |
| `get.parameters.query.volumes`? | `string` | Filter returned issues by those in a specific volume. |
| `get.parameters.query.years`? | `string` | Filter returned issues by those in a specific year. |
| `get.responses` | {     `200`: {         `schema`: `unknown`[];     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: `unknown`[]; } | List of issues. |
| `get.responses.200.schema` | `unknown`[] | - |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested volume, number or year is not valid. |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.400.schema.error`? | `string` | - |
| `get.responses.400.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:754](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L754)

##### `/issues/current`

> `object`

```ts
{
    get: {
        responses: {
            200: {
                schema: unknown;
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `get` | `object` |
| `get.responses` | {     `200`: {         `schema`: `unknown`;     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } |
| `get.responses.200` | {     `schema`: `unknown`; } |
| `get.responses.200.schema` | `unknown` |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `get.responses.404.schema.error`? | `string` |
| `get.responses.404.schema.errorMessage`? | `string` |

Defined in:  [lib/swagger-types.ts:791](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L791)

##### `/issues/\{issueId}`

> `object`

```ts
{
    get: {
        parameters: {
            path: {
                issueId: number;
            };
        };
        responses: {
            200: {
                schema: unknown;
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | If the issue has a custom section order, the `seq` property of each `SectionSummary` will reflect the sequence for that issue. |
| `get.parameters` | {     `path`: {         `issueId`: `number`;     }; } | - |
| `get.parameters.path` | {     `issueId`: `number`; } | - |
| `get.parameters.path.issueId` | `number` | Issue ID |
| `get.responses` | {     `200`: {         `schema`: `unknown`;     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: `unknown`; } | The requested issue. |
| `get.responses.200.schema` | `unknown` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested issue could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:805](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L805)

##### `/site`

> `object`

```ts
{
    get: {
        responses: {
            200: {
                schema: {
                    about?: string;
                    contactEmail: string;
                    contactName: string;
                    enableBulkEmails?: number[];
                    installedLocales?: string[];
                    minPasswordLength?: number;
                    pageFooter?: string;
                    pageHeaderTitleImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    primaryLocale?: string;
                    privacyStatement?: string;
                    redirect?: number;
                    sidebar?: string[];
                    styleSheet?: {
                        dateUploaded?: string;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    supportedLocales?: string[];
                    themePluginPath?: string;
                    title: string;
                };
            };
        };
    };
    put: {
        parameters: {};
        responses: {
            200: {
                schema: {
                    about?: string;
                    contactEmail: string;
                    contactName: string;
                    enableBulkEmails?: number[];
                    installedLocales?: string[];
                    minPasswordLength?: number;
                    pageFooter?: string;
                    pageHeaderTitleImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                        width?: number;
                    };
                    primaryLocale?: string;
                    privacyStatement?: string;
                    redirect?: number;
                    sidebar?: string[];
                    styleSheet?: {
                        dateUploaded?: string;
                        name?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    supportedLocales?: string[];
                    themePluginPath?: string;
                    title: string;
                };
            };
            400: {
                schema: {
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `get` | `object` |
| `get.responses` | {     `200`: {         `schema`: {             `about`?: `string`;             `contactEmail`: `string`;             `contactName`: `string`;             `enableBulkEmails`?: `number`[];             `installedLocales`?: `string`[];             `minPasswordLength`?: `number`;             `pageFooter`?: `string`;             `pageHeaderTitleImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `primaryLocale`?: `string`;             `privacyStatement`?: `string`;             `redirect`?: `number`;             `sidebar`?: `string`[];             `styleSheet`?: {                 `dateUploaded`?: `string`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `supportedLocales`?: `string`[];             `themePluginPath`?: `string`;             `title`: `string`;         };     }; } |
| `get.responses.200` | {     `schema`: {         `about`?: `string`;         `contactEmail`: `string`;         `contactName`: `string`;         `enableBulkEmails`?: `number`[];         `installedLocales`?: `string`[];         `minPasswordLength`?: `number`;         `pageFooter`?: `string`;         `pageHeaderTitleImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `primaryLocale`?: `string`;         `privacyStatement`?: `string`;         `redirect`?: `number`;         `sidebar`?: `string`[];         `styleSheet`?: {             `dateUploaded`?: `string`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `supportedLocales`?: `string`[];         `themePluginPath`?: `string`;         `title`: `string`;     }; } |
| `get.responses.200.schema` | {     `about`?: `string`;     `contactEmail`: `string`;     `contactName`: `string`;     `enableBulkEmails`?: `number`[];     `installedLocales`?: `string`[];     `minPasswordLength`?: `number`;     `pageFooter`?: `string`;     `pageHeaderTitleImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `primaryLocale`?: `string`;     `privacyStatement`?: `string`;     `redirect`?: `number`;     `sidebar`?: `string`[];     `styleSheet`?: {         `dateUploaded`?: `string`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `supportedLocales`?: `string`[];     `themePluginPath`?: `string`;     `title`: `string`; } |
| `get.responses.200.schema.about`? | `string` |
| `get.responses.200.schema.contactEmail` | `string` |
| `get.responses.200.schema.contactName` | `string` |
| `get.responses.200.schema.enableBulkEmails`? | `number`[] |
| `get.responses.200.schema.installedLocales`? | `string`[] |
| `get.responses.200.schema.minPasswordLength`? | `number` |
| `get.responses.200.schema.pageFooter`? | `string` |
| `get.responses.200.schema.pageHeaderTitleImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } |
| `get.responses.200.schema.pageHeaderTitleImage.altText`? | `string` |
| `get.responses.200.schema.pageHeaderTitleImage.dateUploaded`? | `string` |
| `get.responses.200.schema.pageHeaderTitleImage.height`? | `number` |
| `get.responses.200.schema.pageHeaderTitleImage.name`? | `string` |
| `get.responses.200.schema.pageHeaderTitleImage.temporaryFileId`? | `number` |
| `get.responses.200.schema.pageHeaderTitleImage.uploadName`? | `string` |
| `get.responses.200.schema.pageHeaderTitleImage.width`? | `number` |
| `get.responses.200.schema.primaryLocale`? | `string` |
| `get.responses.200.schema.privacyStatement`? | `string` |
| `get.responses.200.schema.redirect`? | `number` |
| `get.responses.200.schema.sidebar`? | `string`[] |
| `get.responses.200.schema.styleSheet`? | {     `dateUploaded`?: `string`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } |
| `get.responses.200.schema.styleSheet.dateUploaded`? | `string` |
| `get.responses.200.schema.styleSheet.name`? | `string` |
| `get.responses.200.schema.styleSheet.temporaryFileId`? | `number` |
| `get.responses.200.schema.styleSheet.uploadName`? | `string` |
| `get.responses.200.schema.supportedLocales`? | `string`[] |
| `get.responses.200.schema.themePluginPath`? | `string` |
| `get.responses.200.schema.title` | `string` |
| `put` | `object` |
| `put.parameters` | {} |
| `put.responses` | {     `200`: {         `schema`: {             `about`?: `string`;             `contactEmail`: `string`;             `contactName`: `string`;             `enableBulkEmails`?: `number`[];             `installedLocales`?: `string`[];             `minPasswordLength`?: `number`;             `pageFooter`?: `string`;             `pageHeaderTitleImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `primaryLocale`?: `string`;             `privacyStatement`?: `string`;             `redirect`?: `number`;             `sidebar`?: `string`[];             `styleSheet`?: {                 `dateUploaded`?: `string`;                 `name`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `supportedLocales`?: `string`[];             `themePluginPath`?: `string`;             `title`: `string`;         };     };     `400`: {         `schema`: {         };     }; } |
| `put.responses.200` | {     `schema`: {         `about`?: `string`;         `contactEmail`: `string`;         `contactName`: `string`;         `enableBulkEmails`?: `number`[];         `installedLocales`?: `string`[];         `minPasswordLength`?: `number`;         `pageFooter`?: `string`;         `pageHeaderTitleImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;             `width`?: `number`;         };         `primaryLocale`?: `string`;         `privacyStatement`?: `string`;         `redirect`?: `number`;         `sidebar`?: `string`[];         `styleSheet`?: {             `dateUploaded`?: `string`;             `name`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `supportedLocales`?: `string`[];         `themePluginPath`?: `string`;         `title`: `string`;     }; } |
| `put.responses.200.schema` | {     `about`?: `string`;     `contactEmail`: `string`;     `contactName`: `string`;     `enableBulkEmails`?: `number`[];     `installedLocales`?: `string`[];     `minPasswordLength`?: `number`;     `pageFooter`?: `string`;     `pageHeaderTitleImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;         `width`?: `number`;     };     `primaryLocale`?: `string`;     `privacyStatement`?: `string`;     `redirect`?: `number`;     `sidebar`?: `string`[];     `styleSheet`?: {         `dateUploaded`?: `string`;         `name`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `supportedLocales`?: `string`[];     `themePluginPath`?: `string`;     `title`: `string`; } |
| `put.responses.200.schema.about`? | `string` |
| `put.responses.200.schema.contactEmail` | `string` |
| `put.responses.200.schema.contactName` | `string` |
| `put.responses.200.schema.enableBulkEmails`? | `number`[] |
| `put.responses.200.schema.installedLocales`? | `string`[] |
| `put.responses.200.schema.minPasswordLength`? | `number` |
| `put.responses.200.schema.pageFooter`? | `string` |
| `put.responses.200.schema.pageHeaderTitleImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`;     `width`?: `number`; } |
| `put.responses.200.schema.pageHeaderTitleImage.altText`? | `string` |
| `put.responses.200.schema.pageHeaderTitleImage.dateUploaded`? | `string` |
| `put.responses.200.schema.pageHeaderTitleImage.height`? | `number` |
| `put.responses.200.schema.pageHeaderTitleImage.name`? | `string` |
| `put.responses.200.schema.pageHeaderTitleImage.temporaryFileId`? | `number` |
| `put.responses.200.schema.pageHeaderTitleImage.uploadName`? | `string` |
| `put.responses.200.schema.pageHeaderTitleImage.width`? | `number` |
| `put.responses.200.schema.primaryLocale`? | `string` |
| `put.responses.200.schema.privacyStatement`? | `string` |
| `put.responses.200.schema.redirect`? | `number` |
| `put.responses.200.schema.sidebar`? | `string`[] |
| `put.responses.200.schema.styleSheet`? | {     `dateUploaded`?: `string`;     `name`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } |
| `put.responses.200.schema.styleSheet.dateUploaded`? | `string` |
| `put.responses.200.schema.styleSheet.name`? | `string` |
| `put.responses.200.schema.styleSheet.temporaryFileId`? | `number` |
| `put.responses.200.schema.styleSheet.uploadName`? | `string` |
| `put.responses.200.schema.supportedLocales`? | `string`[] |
| `put.responses.200.schema.themePluginPath`? | `string` |
| `put.responses.200.schema.title` | `string` |
| `put.responses.400` | {     `schema`: {     }; } |
| `put.responses.400.schema` | {  } |

Defined in:  [lib/swagger-types.ts:1098](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1098)

##### `/site/theme`

> `object`

```ts
{
    get: {
        responses: {
            200: {
                schema: {
                    ...?: string;
                    themePluginPath?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    put: {
        parameters: {};
        responses: {
            200: {
                schema: {
                    ...?: string;
                    themePluginPath?: string;
                };
            };
            400: {
                schema: {
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Get the active theme and theme options for the site. |
| `get.responses` | {     `200`: {         `schema`: {             `...`?: `string`;             `themePluginPath`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `...`?: `string`;         `themePluginPath`?: `string`;     }; } | The response will include the theme plugin directory in `themePluginPath`. Any theme options will be provided in additional keys based on the option name. |
| `get.responses.200.schema` | {     `...`?: `string`;     `themePluginPath`?: `string`; } | - |
| `get.responses.200.schema....`? | `string` | - |
| `get.responses.200.schema.themePluginPath`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Details about the active theme could not be found. This can occur when the active theme plugin is not installed or enabled. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `put` | `object` | Get the active theme and theme options for the site. |
| `put.parameters` | {} | - |
| `put.responses` | {     `200`: {         `schema`: {             `...`?: `string`;             `themePluginPath`?: `string`;         };     };     `400`: {         `schema`: {         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `...`?: `string`;         `themePluginPath`?: `string`;     }; } | The new theme and values for any of its theme options. |
| `put.responses.200.schema` | {     `...`?: `string`;     `themePluginPath`?: `string`; } | - |
| `put.responses.200.schema....`? | `string` | - |
| `put.responses.200.schema.themePluginPath`? | `string` | - |
| `put.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `put.responses.400.schema` | {  } | - |

Defined in:  [lib/swagger-types.ts:1121](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1121)

##### `/stats/editorial`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                dateEnd?: string;
                dateStart?: string;
                sectionIds?: number[];
            };
        };
        responses: {
            200: {
                schema: unknown[];
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Returns information about editorial activity such as the number of submissions accepted and declined, the number of days to reach editorial decisions, and the acceptance and rejection rates. |
| `get.parameters` | {     `query`: {         `dateEnd`?: `string`;         `dateStart`?: `string`;         `sectionIds`?: `number`[];     }; } | - |
| `get.parameters.query` | {     `dateEnd`?: `string`;     `dateStart`?: `string`;     `sectionIds`?: `number`[]; } | - |
| `get.parameters.query.dateEnd`? | `string` | Return stats before this date. |
| `get.parameters.query.dateStart`? | `string` | Return stats after this date. |
| `get.parameters.query.sectionIds`? | `number`[] | Filter results by submissions to these sections. |
| `get.responses` | {     `200`: {         `schema`: `unknown`[];     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: `unknown`[]; } | An array containing the requested stats. The `name` may change with translation but the `key` will be a reliable, unique identifier for the statistic. |
| `get.responses.200.schema` | `unknown`[] | - |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Your request was not valid. One or more of the request parameters will be invalid. The error message will contain details about the invalid parameter. |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.400.schema.error`? | `string` | - |
| `get.responses.400.schema.errorMessage`? | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access editorial statistics for this journal or press. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested resource was not found. This should only occur if the API is requested without specifying the context. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1398](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1398)

##### `/stats/editorial/averages`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                sectionIds?: number[];
            };
        };
        responses: {
            200: {
                schema: unknown[];
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Returns yearly averages of editorial activity. To ensure averages are calculated fairly, partial years are not included in the averages. For example, if the first submission was received in October 2017 and the last submission was received in the current calendar year, only submissions from 2018 up until the end of the previous calendar year will be used to calculate the average. |
| `get.parameters` | {     `query`: {         `sectionIds`?: `number`[];     }; } | - |
| `get.parameters.query` | {     `sectionIds`?: `number`[]; } | - |
| `get.parameters.query.sectionIds`? | `number`[] | Filter results by submissions to these sections. |
| `get.responses` | {     `200`: {         `schema`: `unknown`[];     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: `unknown`[]; } | An object containing the requested averages. Each property matches one of the properties from `/stats/editorial`. The value `-1` may be returned for a property if an average can not be calculated. This can occur if there is not a full calendar year of activity to average. |
| `get.responses.200.schema` | `unknown`[] | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access editorial statistics for this journal or press. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested resource was not found. This should only occur if the API is requested without specifying the context. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1431](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1431)

##### `/stats/publications`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                count?: unknown;
                dateEnd?: string;
                dateStart?: string;
                offset?: number;
                orderDirection?: "ASC" | "DESC";
                searchPhrase?: string;
                sectionIds?: string;
                submissionIds?: number[];
            };
        };
        responses: {
            200: {
                schema: {
                    abstractViews?: number;
                    galleyViews?: number;
                    htmlViews?: number;
                    otherViews?: number;
                    pdfViews?: number;
                    publication?: {
                        _href?: string;
                        fullTitle?: {
                        };
                        id?: number;
                        shortAuthorString?: string;
                        urlPublished?: string;
                        urlWorkflow?: string;
                    };
                }[];
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Returns a list of publications ordered by their total abstract views. Includes total views by abstract, all galleys, PDF galleys, HTML galleys and other galleys. |
| `get.parameters` | {     `query`: {         `count`?: `unknown`;         `dateEnd`?: `string`;         `dateStart`?: `string`;         `offset`?: `number`;         `orderDirection`?: `"ASC"` | `"DESC"`;         `searchPhrase`?: `string`;         `sectionIds`?: `string`;         `submissionIds`?: `number`[];     }; } | - |
| `get.parameters.query` | {     `count`?: `unknown`;     `dateEnd`?: `string`;     `dateStart`?: `string`;     `offset`?: `number`;     `orderDirection`?: `"ASC"` | `"DESC"`;     `searchPhrase`?: `string`;     `sectionIds`?: `string`;     `submissionIds`?: `number`[]; } | - |
| `get.parameters.query.count`? | `unknown` | How many publications to return in a single request. Max is `100`. |
| `get.parameters.query.dateEnd`? | `string` | Return stats for publications before this date. |
| `get.parameters.query.dateStart`? | `string` | Return stats for publications after this date. |
| `get.parameters.query.offset`? | `number` | Offset the publications returned. Use this to receive subsequent pages of requests. |
| `get.parameters.query.orderDirection`? | `"ASC"` | `"DESC"` | Return the results in ascending or descending order. |
| `get.parameters.query.searchPhrase`? | `string` | Filter results by publications that match this search phrase. Searches the same submission properties as the `searchPhrase` parameter in the `/submissions` endpoint. |
| `get.parameters.query.sectionIds`? | `string` | Filter results by publications in these sections. |
| `get.parameters.query.submissionIds`? | `number`[] | Filter results by these submissions. |
| `get.responses` | {     `200`: {         `schema`: {             `abstractViews`?: `number`;             `galleyViews`?: `number`;             `htmlViews`?: `number`;             `otherViews`?: `number`;             `pdfViews`?: `number`;             `publication`?: {                 `_href`?: `string`;                 `fullTitle`?: {                 };                 `id`?: `number`;                 `shortAuthorString`?: `string`;                 `urlPublished`?: `string`;                 `urlWorkflow`?: `string`;             };         }[];     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `abstractViews`?: `number`;         `galleyViews`?: `number`;         `htmlViews`?: `number`;         `otherViews`?: `number`;         `pdfViews`?: `number`;         `publication`?: {             `_href`?: `string`;             `fullTitle`?: {             };             `id`?: `number`;             `shortAuthorString`?: `string`;             `urlPublished`?: `string`;             `urlWorkflow`?: `string`;         };     }[]; } | A list of publications with their total stats during the requested period. |
| `get.responses.200.schema` | {     `abstractViews`?: `number`;     `galleyViews`?: `number`;     `htmlViews`?: `number`;     `otherViews`?: `number`;     `pdfViews`?: `number`;     `publication`?: {         `_href`?: `string`;         `fullTitle`?: {         };         `id`?: `number`;         `shortAuthorString`?: `string`;         `urlPublished`?: `string`;         `urlWorkflow`?: `string`;     }; }[] | - |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Your request was not valid. One or more of the request parameters will be invalid. The error message will contain details about the invalid parameter. |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.400.schema.error`? | `string` | - |
| `get.responses.400.schema.errorMessage`? | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access statistics for this journal or press. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested resource was not found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1456](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1456)

##### `/stats/publications/abstract`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                dateEnd?: string;
                dateStart?: string;
                searchPhrase?: string;
                sectionIds?: number[];
                submissionIds?: number[];
                timelineInterval?: "day" | "month";
            };
        };
        responses: {
            200: {
                schema: {
                    date?: string;
                    label?: string;
                    value?: number;
                }[];
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Returns a monthly or daily timeline of abstract views for the publications which match the request parameters. |
| `get.parameters` | {     `query`: {         `dateEnd`?: `string`;         `dateStart`?: `string`;         `searchPhrase`?: `string`;         `sectionIds`?: `number`[];         `submissionIds`?: `number`[];         `timelineInterval`?: `"day"` | `"month"`;     }; } | - |
| `get.parameters.query` | {     `dateEnd`?: `string`;     `dateStart`?: `string`;     `searchPhrase`?: `string`;     `sectionIds`?: `number`[];     `submissionIds`?: `number`[];     `timelineInterval`?: `"day"` | `"month"`; } | - |
| `get.parameters.query.dateEnd`? | `string` | Return stats for publications before this date. |
| `get.parameters.query.dateStart`? | `string` | Return stats for publications after this date. |
| `get.parameters.query.searchPhrase`? | `string` | Filter results by publications that match this search phrase. Searches the same submission properties as the `searchPhrase` parameter in the `/submissions` endpoint. |
| `get.parameters.query.sectionIds`? | `number`[] | Filter results by publications in these sections. |
| `get.parameters.query.submissionIds`? | `number`[] | Filter results by these submissions. |
| `get.parameters.query.timelineInterval`? | `"day"` | `"month"` | Return the total daily or monthly views |
| `get.responses` | {     `200`: {         `schema`: {             `date`?: `string`;             `label`?: `string`;             `value`?: `number`;         }[];     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `date`?: `string`;         `label`?: `string`;         `value`?: `number`;     }[]; } | A list of days or months with the total stats for that day or month. |
| `get.responses.200.schema` | {     `date`?: `string`;     `label`?: `string`;     `value`?: `number`; }[] | - |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Your request was not valid. One or more of the request parameters will be invalid. The error message will contain details about the invalid parameter. |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.400.schema.error`? | `string` | - |
| `get.responses.400.schema.errorMessage`? | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access statistics for this journal or press. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested resource was not found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1499](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1499)

##### `/stats/publications/galley`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                dateEnd?: string;
                dateStart?: string;
                searchPhrase?: string;
                sectionIds?: number[];
                submissionIds?: number[];
                timelineInterval?: "day" | "month";
            };
        };
        responses: {
            200: {
                schema: {
                    date?: string;
                    label?: string;
                    value?: number;
                }[];
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Returns a monthly or daily timeline of galley views for the publications which match the request parameters. |
| `get.parameters` | {     `query`: {         `dateEnd`?: `string`;         `dateStart`?: `string`;         `searchPhrase`?: `string`;         `sectionIds`?: `number`[];         `submissionIds`?: `number`[];         `timelineInterval`?: `"day"` | `"month"`;     }; } | - |
| `get.parameters.query` | {     `dateEnd`?: `string`;     `dateStart`?: `string`;     `searchPhrase`?: `string`;     `sectionIds`?: `number`[];     `submissionIds`?: `number`[];     `timelineInterval`?: `"day"` | `"month"`; } | - |
| `get.parameters.query.dateEnd`? | `string` | Return stats for publications before this date. |
| `get.parameters.query.dateStart`? | `string` | Return stats for publications after this date. |
| `get.parameters.query.searchPhrase`? | `string` | Filter results by publications that match this search phrase. Searches the same submission properties as the `searchPhrase` parameter in the `/submissions` endpoint. |
| `get.parameters.query.sectionIds`? | `number`[] | Filter results by publications in these sections. |
| `get.parameters.query.submissionIds`? | `number`[] | Filter results by these publications. |
| `get.parameters.query.timelineInterval`? | `"day"` | `"month"` | Return the total daily or monthly views. |
| `get.responses` | {     `200`: {         `schema`: {             `date`?: `string`;             `label`?: `string`;             `value`?: `number`;         }[];     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `date`?: `string`;         `label`?: `string`;         `value`?: `number`;     }[]; } | A list of days or months with the total stats for that day or month. |
| `get.responses.200.schema` | {     `date`?: `string`;     `label`?: `string`;     `value`?: `number`; }[] | - |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Your request was not valid. One or more of the request parameters will be invalid. The error message will contain details about the invalid parameter. |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.400.schema.error`? | `string` | - |
| `get.responses.400.schema.errorMessage`? | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access statistics for this journal or press. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested resource was not found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1538](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1538)

##### `/stats/publications/\{submissionId}`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                dateEnd?: string;
                dateStart?: string;
            };
        };
        responses: {
            200: {
                schema: {
                    abstractViews?: number;
                    galleyViews?: number;
                    htmlViews?: number;
                    otherViews?: number;
                    pdfViews?: number;
                    publication?: {
                        _href?: string;
                        fullTitle?: {
                        };
                        id?: number;
                        shortAuthorString?: string;
                        urlPublished?: string;
                        urlWorkflow?: string;
                    };
                };
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Returns a publication's total views by abstract, all galleys, PDF galleys, HTML galleys and other galleys. |
| `get.parameters` | {     `query`: {         `dateEnd`?: `string`;         `dateStart`?: `string`;     }; } | - |
| `get.parameters.query` | {     `dateEnd`?: `string`;     `dateStart`?: `string`; } | - |
| `get.parameters.query.dateEnd`? | `string` | Return stats for publications before this date. |
| `get.parameters.query.dateStart`? | `string` | Return stats for publications after this date. |
| `get.responses` | {     `200`: {         `schema`: {             `abstractViews`?: `number`;             `galleyViews`?: `number`;             `htmlViews`?: `number`;             `otherViews`?: `number`;             `pdfViews`?: `number`;             `publication`?: {                 `_href`?: `string`;                 `fullTitle`?: {                 };                 `id`?: `number`;                 `shortAuthorString`?: `string`;                 `urlPublished`?: `string`;                 `urlWorkflow`?: `string`;             };         };     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `abstractViews`?: `number`;         `galleyViews`?: `number`;         `htmlViews`?: `number`;         `otherViews`?: `number`;         `pdfViews`?: `number`;         `publication`?: {             `_href`?: `string`;             `fullTitle`?: {             };             `id`?: `number`;             `shortAuthorString`?: `string`;             `urlPublished`?: `string`;             `urlWorkflow`?: `string`;         };     }; } | The total stats for the publication during the period requested. |
| `get.responses.200.schema` | {     `abstractViews`?: `number`;     `galleyViews`?: `number`;     `htmlViews`?: `number`;     `otherViews`?: `number`;     `pdfViews`?: `number`;     `publication`?: {         `_href`?: `string`;         `fullTitle`?: {         };         `id`?: `number`;         `shortAuthorString`?: `string`;         `urlPublished`?: `string`;         `urlWorkflow`?: `string`;     }; } | - |
| `get.responses.200.schema.abstractViews`? | `number` | - |
| `get.responses.200.schema.galleyViews`? | `number` | - |
| `get.responses.200.schema.htmlViews`? | `number` | - |
| `get.responses.200.schema.otherViews`? | `number` | - |
| `get.responses.200.schema.pdfViews`? | `number` | - |
| `get.responses.200.schema.publication`? | {     `_href`?: `string`;     `fullTitle`?: {     };     `id`?: `number`;     `shortAuthorString`?: `string`;     `urlPublished`?: `string`;     `urlWorkflow`?: `string`; } | - |
| `get.responses.200.schema.publication._href`? | `string` | - |
| `get.responses.200.schema.publication.fullTitle`? | {  } | - |
| `get.responses.200.schema.publication.id`? | `number` | - |
| `get.responses.200.schema.publication.shortAuthorString`? | `string` | - |
| `get.responses.200.schema.publication.urlPublished`? | `string` | - |
| `get.responses.200.schema.publication.urlWorkflow`? | `string` | - |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Your request was not valid. One or more of the request parameters will be invalid. The error message will contain details about the invalid parameter. |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.400.schema.error`? | `string` | - |
| `get.responses.400.schema.errorMessage`? | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access statistics for this journal or press. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested resource was not found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1577](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1577)

##### `/stats/publications/\{submissionId}/abstract`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                dateEnd?: string;
                dateStart?: string;
                timelineInterval?: "day" | "month";
            };
        };
        responses: {
            200: {
                schema: {
                    date?: string;
                    label?: string;
                    value?: number;
                }[];
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Returns a monthly or daily timeline of abstract views for the requested publication. |
| `get.parameters` | {     `query`: {         `dateEnd`?: `string`;         `dateStart`?: `string`;         `timelineInterval`?: `"day"` | `"month"`;     }; } | - |
| `get.parameters.query` | {     `dateEnd`?: `string`;     `dateStart`?: `string`;     `timelineInterval`?: `"day"` | `"month"`; } | - |
| `get.parameters.query.dateEnd`? | `string` | Return stats for publications before this date. |
| `get.parameters.query.dateStart`? | `string` | Return stats for publications after this date. |
| `get.parameters.query.timelineInterval`? | `"day"` | `"month"` | Return the total daily or monthly views |
| `get.responses` | {     `200`: {         `schema`: {             `date`?: `string`;             `label`?: `string`;             `value`?: `number`;         }[];     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `date`?: `string`;         `label`?: `string`;         `value`?: `number`;     }[]; } | A list of days or months with the total stats for that day or month. |
| `get.responses.200.schema` | {     `date`?: `string`;     `label`?: `string`;     `value`?: `number`; }[] | - |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Your request was not valid. One or more of the request parameters will be invalid. The error message will contain details about the invalid parameter. |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.400.schema.error`? | `string` | - |
| `get.responses.400.schema.errorMessage`? | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access statistics for this journal or press. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested resource was not found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1608](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1608)

##### `/stats/publications/\{submissionId}/galley`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                dateEnd?: string;
                dateStart?: string;
                timelineInterval?: "day" | "month";
            };
        };
        responses: {
            200: {
                schema: {
                    date?: string;
                    label?: string;
                    value?: number;
                }[];
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Returns a monthly or daily timeline of galley views for the requested publication. |
| `get.parameters` | {     `query`: {         `dateEnd`?: `string`;         `dateStart`?: `string`;         `timelineInterval`?: `"day"` | `"month"`;     }; } | - |
| `get.parameters.query` | {     `dateEnd`?: `string`;     `dateStart`?: `string`;     `timelineInterval`?: `"day"` | `"month"`; } | - |
| `get.parameters.query.dateEnd`? | `string` | Return stats for publications before this date. |
| `get.parameters.query.dateStart`? | `string` | Return stats for publications after this date. |
| `get.parameters.query.timelineInterval`? | `"day"` | `"month"` | Return the total daily or monthly views. |
| `get.responses` | {     `200`: {         `schema`: {             `date`?: `string`;             `label`?: `string`;             `value`?: `number`;         }[];     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `date`?: `string`;         `label`?: `string`;         `value`?: `number`;     }[]; } | A list of days or months with the total stats for that day or month. |
| `get.responses.200.schema` | {     `date`?: `string`;     `label`?: `string`;     `value`?: `number`; }[] | - |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Your request was not valid. One or more of the request parameters will be invalid. The error message will contain details about the invalid parameter. |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.400.schema.error`? | `string` | - |
| `get.responses.400.schema.errorMessage`? | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access statistics for this journal or press. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested resource was not found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1641](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1641)

##### `/stats/users`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                registeredAfter?: string;
                registeredBefore?: string;
                status?: "active" | "disabled";
            };
        };
        responses: {
            200: {
                schema: unknown[];
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Returns a count of the number of user registrations broken down by roles.  Please note when using the `registeredBefore` and `registeredAfter` parameters that role counts reflect current user roles.  A user who registered as an author in January, 2019 but was later appointed to subeditor will be counted as a subeditor when the registration date range includes January, 2019. |
| `get.parameters` | {     `query`: {         `registeredAfter`?: `string`;         `registeredBefore`?: `string`;         `status`?: `"active"` | `"disabled"`;     }; } | - |
| `get.parameters.query` | {     `registeredAfter`?: `string`;     `registeredBefore`?: `string`;     `status`?: `"active"` | `"disabled"`; } | - |
| `get.parameters.query.registeredAfter`? | `string` | Return counts reflecting users who registered after this date. |
| `get.parameters.query.registeredBefore`? | `string` | Return counts reflecting users who registered before this date. |
| `get.parameters.query.status`? | `"active"` | `"disabled"` | Count `active` or `disabled` users. Default: `active`. |
| `get.responses` | {     `200`: {         `schema`: `unknown`[];     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: `unknown`[]; } | An object containing the requested stats. The `id` relects the `ROLE_ID_*` constant in the application. |
| `get.responses.200.schema` | `unknown`[] | - |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | Your request was not valid. One or more of the request parameters will be invalid. The error message will contain details about the invalid parameter. |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.400.schema.error`? | `string` | - |
| `get.responses.400.schema.errorMessage`? | `string` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access user statistics for this journal or press. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested resource was not found. This should only occur if the API is requested without specifying the context. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1674](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1674)

##### `/submissions`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                assignedTo?: number[];
                count?: number;
                daysInactive?: number;
                isIncomplete?: boolean;
                isOverdue?: boolean;
                issueIds?: number[];
                offset?: number;
                orderBy?: "datePublished" | "dateSubmitted" | "lastActivity" | "lastModified" | "sequence" | "title";
                orderDirection?: "ASC" | "DESC";
                searchPhrase?: string;
                sectionIds?: number[];
                status?: (1 | 3 | 4 | 5)[];
            };
        };
        responses: {
            200: {
                schema: {
                    items?: {
                        _href?: string;
                        contextId: number;
                        currentPublicationId?: number;
                        dateLastActivity?: string;
                        dateSubmitted?: string;
                        id?: number;
                        lastModified?: string;
                        locale?: string;
                        publications?: {
                            _href?: string;
                            abstract?: string;
                            authors?: {
                                affiliation?: string;
                                biography?: string;
                                country?: string;
                                email: string;
                                familyName?: string;
                                fullName?: string;
                                givenName: string;
                                id?: number;
                                includeInBrowse?: boolean;
                                orcid?: string;
                                preferredPublicName?: string;
                                publicationId: number;
                                seq?: number;
                                submissionLocale?: string;
                                url?: string;
                                userGroupId: number;
                                userGroupName?: string;
                            }[];
                            authorsString?: string;
                            authorsStringIncludeInBrowse?: string;
                            authorsStringShort?: string;
                            categoryIds?: number[];
                            citations?: string[];
                            citationsRaw?: string;
                            copyrightHolder?: string;
                            copyrightYear?: number;
                            coverImage?: {
                                altText?: string;
                                dateUploaded?: string;
                                temporaryFileId?: number;
                                uploadName?: string;
                            };
                            coverage?: string;
                            datePublished?: string;
                            disciplines?: string[];
                            doiId?: number;
                            doiObject?: {
                                contextId: number;
                                doi: string;
                                id?: number;
                                resolvingUrl?: string;
                                status?: number;
                            }[];
                            fullTitle?: string;
                            id?: number;
                            keywords?: string[];
                            languages?: string[];
                            lastModified?: string;
                            licenseUrl?: string;
                            locale: string;
                            prefix?: string;
                            primaryContactId?: number;
                            pub-id::publisher-id?: string;
                            rights?: string;
                            seq?: number;
                            source?: string;
                            status?: number;
                            subjects?: string[];
                            submissionId: number;
                            subtitle?: {
                            };
                            supportingAgencies?: string[];
                            title: {
                            };
                            type?: string;
                            urlPath?: string;
                            urlPublished?: string;
                            version: number;
                        }[];
                        reviewAssignments?: {
                            dateDue?: number;
                            dateResponseDue?: number;
                            id?: number;
                            isCurrentUserAssigned?: number;
                            reviewRoundId?: number;
                            round?: number;
                            status?: number;
                            statusLabel?: number;
                        }[];
                        reviewRounds?: {
                            id?: number;
                            round?: number;
                            stageId?: number;
                            status?: string;
                            statusId?: number;
                        }[];
                        sectionId: number;
                        stageId?: number;
                        stages?: {
                            currentUserAssignedRoles?: number[];
                            files?: {
                                count?: number;
                            };
                            id?: number;
                            isActiveStage?: boolean;
                            label?: string;
                            queries?: unknown[];
                            status?: string;
                            statusId?: number;
                        }[];
                        status?: number;
                        statusLabel?: string;
                        submissionProgress?: number;
                        urlAuthorWorkflow?: string;
                        urlEditorialWorkflow?: string;
                        urlPublished?: string;
                        urlWorkflow?: string;
                    }[];
                    itemsMax?: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    post: {
        parameters: {
            body: {
                schema: {
                    _href?: string;
                    assocId?: number;
                    assocType?: number;
                    caption?: string;
                    copyrightOwner?: string;
                    createdAt?: string;
                    creator?: string;
                    credit?: string;
                    dateCreated?: string;
                    dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
                    description?: string;
                    documentType?: string;
                    file?: string;
                    fileId: number;
                    fileStage: number;
                    genre?: {
                        dependent?: boolean;
                        id?: number;
                        name?: string;
                        supplementary?: boolean;
                    };
                    genreId?: number;
                    id?: number;
                    language?: string;
                    locale?: string;
                    mimetype?: string;
                    name: {
                    };
                    path?: string;
                    publisher?: string;
                    revisions?: {
                        documentType?: string;
                        fileId?: number;
                        mimetype?: string;
                        path?: string;
                        url?: string;
                    }[];
                    source?: string;
                    sourceSubmissionFileId?: number;
                    sponsor?: string;
                    subject?: string;
                    submissionId: number;
                    terms?: string;
                    updatedAt?: string;
                    uploaderUserId: number;
                    url?: string;
                    viewable?: boolean;
                };
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    contextId: number;
                    currentPublicationId?: number;
                    dateLastActivity?: string;
                    dateSubmitted?: string;
                    id?: number;
                    lastModified?: string;
                    locale?: string;
                    publications?: {
                        _href?: string;
                        abstract?: string;
                        authors?: {
                            affiliation?: string;
                            biography?: string;
                            country?: string;
                            email: string;
                            familyName?: string;
                            fullName?: string;
                            givenName: string;
                            id?: number;
                            includeInBrowse?: boolean;
                            orcid?: string;
                            preferredPublicName?: string;
                            publicationId: number;
                            seq?: number;
                            submissionLocale?: string;
                            url?: string;
                            userGroupId: number;
                            userGroupName?: string;
                        }[];
                        authorsString?: string;
                        authorsStringIncludeInBrowse?: string;
                        authorsStringShort?: string;
                        categoryIds?: number[];
                        citations?: string[];
                        citationsRaw?: string;
                        copyrightHolder?: string;
                        copyrightYear?: number;
                        coverImage?: {
                            altText?: string;
                            dateUploaded?: string;
                            temporaryFileId?: number;
                            uploadName?: string;
                        };
                        coverage?: string;
                        datePublished?: string;
                        disciplines?: string[];
                        doiId?: number;
                        doiObject?: {
                            contextId: number;
                            doi: string;
                            id?: number;
                            resolvingUrl?: string;
                            status?: number;
                        }[];
                        fullTitle?: string;
                        id?: number;
                        keywords?: string[];
                        languages?: string[];
                        lastModified?: string;
                        licenseUrl?: string;
                        locale: string;
                        prefix?: string;
                        primaryContactId?: number;
                        pub-id::publisher-id?: string;
                        rights?: string;
                        seq?: number;
                        source?: string;
                        status?: number;
                        subjects?: string[];
                        submissionId: number;
                        subtitle?: {
                        };
                        supportingAgencies?: string[];
                        title: {
                        };
                        type?: string;
                        urlPath?: string;
                        urlPublished?: string;
                        version: number;
                    }[];
                    reviewAssignments?: {
                        dateDue?: number;
                        dateResponseDue?: number;
                        id?: number;
                        isCurrentUserAssigned?: number;
                        reviewRoundId?: number;
                        round?: number;
                        status?: number;
                        statusLabel?: number;
                    }[];
                    reviewRounds?: {
                        id?: number;
                        round?: number;
                        stageId?: number;
                        status?: string;
                        statusId?: number;
                    }[];
                    sectionId: number;
                    stageId?: number;
                    stages?: {
                        currentUserAssignedRoles?: number[];
                        files?: {
                            count?: number;
                        };
                        id?: number;
                        isActiveStage?: boolean;
                        label?: string;
                        queries?: unknown[];
                        status?: string;
                        statusId?: number;
                    }[];
                    status?: number;
                    statusLabel?: string;
                    submissionProgress?: number;
                    urlAuthorWorkflow?: string;
                    urlEditorialWorkflow?: string;
                    urlPublished?: string;
                    urlWorkflow?: string;
                };
            };
            400: {
                schema: {
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | See `/submissions/{submissionId}` for notes about submission properties. |
| `get.parameters` | {     `query`: {         `assignedTo`?: `number`[];         `count`?: `number`;         `daysInactive`?: `number`;         `isIncomplete`?: `boolean`;         `isOverdue`?: `boolean`;         `issueIds`?: `number`[];         `offset`?: `number`;         `orderBy`?: `"datePublished"` | `"dateSubmitted"` | `"lastActivity"` | `"lastModified"` | `"sequence"` | `"title"`;         `orderDirection`?: `"ASC"` | `"DESC"`;         `searchPhrase`?: `string`;         `sectionIds`?: `number`[];         `status`?: (`1` | `3` | `4` | `5`)[];     }; } | - |
| `get.parameters.query` | {     `assignedTo`?: `number`[];     `count`?: `number`;     `daysInactive`?: `number`;     `isIncomplete`?: `boolean`;     `isOverdue`?: `boolean`;     `issueIds`?: `number`[];     `offset`?: `number`;     `orderBy`?: `"datePublished"` | `"dateSubmitted"` | `"lastActivity"` | `"lastModified"` | `"sequence"` | `"title"`;     `orderDirection`?: `"ASC"` | `"DESC"`;     `searchPhrase`?: `string`;     `sectionIds`?: `number`[];     `status`?: (`1` | `3` | `4` | `5`)[]; } | - |
| `get.parameters.query.assignedTo`? | `number`[] | Filter results by those assigned to one or more user ids. All users except managers and admins are automatically restricted to assigned submissions and do not need to pass this parameter. |
| `get.parameters.query.count`? | `number` | How many results to return in a single request. Max is `100`. |
| `get.parameters.query.daysInactive`? | `number` | Filter the results by those which have not had activity for the last X days. |
| `get.parameters.query.isIncomplete`? | `boolean` | Filter the results by those for which the author has not yet completed the submission process. |
| `get.parameters.query.isOverdue`? | `boolean` | Filter the results by those for which a reviewer has missed a deadline. |
| `get.parameters.query.issueIds`? | `number`[] | Filter the results by those with one or more publications assigned to an issue. |
| `get.parameters.query.offset`? | `number` | Offset the results returned. Use this to receive subsequent pages of requests. A `count` of `10` and `offset` of `15` will return results `15` to `25`. |
| `get.parameters.query.orderBy`? | `"datePublished"` | `"dateSubmitted"` | `"lastActivity"` | `"lastModified"` | `"sequence"` | `"title"` | Order the results returned. |
| `get.parameters.query.orderDirection`? | `"ASC"` | `"DESC"` | Return the results in ascending or descending order. |
| `get.parameters.query.searchPhrase`? | `string` | Filter the results by a search phrase matched against the title and authors. |
| `get.parameters.query.sectionIds`? | `number`[] | Filter the results by those with one or more publications assigned to a section. |
| `get.parameters.query.status`? | (`1` | `3` | `4` | `5`)[] | Filter results by one or more submission statuses. Must match the value of one of the `PKPSubmission::STATUS_QUEUED`, `PKPSubmission::STATUS_SCHEDULED`, `PKPSubmission::STATUS_PUBLISHED` or `PKPSubmission::STATUS_DECLINED` constants. |
| `get.responses` | {     `200`: {         `schema`: {             `items`?: {                 `_href`?: `string`;                 `contextId`: `number`;                 `currentPublicationId`?: `number`;                 `dateLastActivity`?: `string`;                 `dateSubmitted`?: `string`;                 `id`?: `number`;                 `lastModified`?: `string`;                 `locale`?: `string`;                 `publications`?: {                     `_href`?: `string`;                     `abstract`?: `string`;                     `authors`?: {                         `affiliation`?: `string`;                         `biography`?: `string`;                         `country`?: `string`;                         `email`: `string`;                         `familyName`?: `string`;                         `fullName`?: `string`;                         `givenName`: `string`;                         `id`?: `number`;                         `includeInBrowse`?: `boolean`;                         `orcid`?: `string`;                         `preferredPublicName`?: `string`;                         `publicationId`: `number`;                         `seq`?: `number`;                         `submissionLocale`?: `string`;                         `url`?: `string`;                         `userGroupId`: `number`;                         `userGroupName`?: `string`;                     }[];                     `authorsString`?: `string`;                     `authorsStringIncludeInBrowse`?: `string`;                     `authorsStringShort`?: `string`;                     `categoryIds`?: `number`[];                     `citations`?: `string`[];                     `citationsRaw`?: `string`;                     `copyrightHolder`?: `string`;                     `copyrightYear`?: `number`;                     `coverImage`?: {                         `altText`?: `string`;                         `dateUploaded`?: `string`;                         `temporaryFileId`?: `number`;                         `uploadName`?: `string`;                     };                     `coverage`?: `string`;                     `datePublished`?: `string`;                     `disciplines`?: `string`[];                     `doiId`?: `number`;                     `doiObject`?: {                         `contextId`: `number`;                         `doi`: `string`;                         `id`?: `number`;                         `resolvingUrl`?: `string`;                         `status`?: `number`;                     }[];                     `fullTitle`?: `string`;                     `id`?: `number`;                     `keywords`?: `string`[];                     `languages`?: `string`[];                     `lastModified`?: `string`;                     `licenseUrl`?: `string`;                     `locale`: `string`;                     `prefix`?: `string`;                     `primaryContactId`?: `number`;                     `pub-id::publisher-id`?: `string`;                     `rights`?: `string`;                     `seq`?: `number`;                     `source`?: `string`;                     `status`?: `number`;                     `subjects`?: `string`[];                     `submissionId`: `number`;                     `subtitle`?: {                     };                     `supportingAgencies`?: `string`[];                     `title`: {                     };                     `type`?: `string`;                     `urlPath`?: `string`;                     `urlPublished`?: `string`;                     `version`: `number`;                 }[];                 `reviewAssignments`?: {                     `dateDue`?: `number`;                     `dateResponseDue`?: `number`;                     `id`?: `number`;                     `isCurrentUserAssigned`?: `number`;                     `reviewRoundId`?: `number`;                     `round`?: `number`;                     `status`?: `number`;                     `statusLabel`?: `number`;                 }[];                 `reviewRounds`?: {                     `id`?: `number`;                     `round`?: `number`;                     `stageId`?: `number`;                     `status`?: `string`;                     `statusId`?: `number`;                 }[];                 `sectionId`: `number`;                 `stageId`?: `number`;                 `stages`?: {                     `currentUserAssignedRoles`?: `number`[];                     `files`?: {                         `count`?: `number`;                     };                     `id`?: `number`;                     `isActiveStage`?: `boolean`;                     `label`?: `string`;                     `queries`?: `unknown`[];                     `status`?: `string`;                     `statusId`?: `number`;                 }[];                 `status`?: `number`;                 `statusLabel`?: `string`;                 `submissionProgress`?: `number`;                 `urlAuthorWorkflow`?: `string`;                 `urlEditorialWorkflow`?: `string`;                 `urlPublished`?: `string`;                 `urlWorkflow`?: `string`;             }[];             `itemsMax`?: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `items`?: {             `_href`?: `string`;             `contextId`: `number`;             `currentPublicationId`?: `number`;             `dateLastActivity`?: `string`;             `dateSubmitted`?: `string`;             `id`?: `number`;             `lastModified`?: `string`;             `locale`?: `string`;             `publications`?: {                 `_href`?: `string`;                 `abstract`?: `string`;                 `authors`?: {                     `affiliation`?: `string`;                     `biography`?: `string`;                     `country`?: `string`;                     `email`: `string`;                     `familyName`?: `string`;                     `fullName`?: `string`;                     `givenName`: `string`;                     `id`?: `number`;                     `includeInBrowse`?: `boolean`;                     `orcid`?: `string`;                     `preferredPublicName`?: `string`;                     `publicationId`: `number`;                     `seq`?: `number`;                     `submissionLocale`?: `string`;                     `url`?: `string`;                     `userGroupId`: `number`;                     `userGroupName`?: `string`;                 }[];                 `authorsString`?: `string`;                 `authorsStringIncludeInBrowse`?: `string`;                 `authorsStringShort`?: `string`;                 `categoryIds`?: `number`[];                 `citations`?: `string`[];                 `citationsRaw`?: `string`;                 `copyrightHolder`?: `string`;                 `copyrightYear`?: `number`;                 `coverImage`?: {                     `altText`?: `string`;                     `dateUploaded`?: `string`;                     `temporaryFileId`?: `number`;                     `uploadName`?: `string`;                 };                 `coverage`?: `string`;                 `datePublished`?: `string`;                 `disciplines`?: `string`[];                 `doiId`?: `number`;                 `doiObject`?: {                     `contextId`: `number`;                     `doi`: `string`;                     `id`?: `number`;                     `resolvingUrl`?: `string`;                     `status`?: `number`;                 }[];                 `fullTitle`?: `string`;                 `id`?: `number`;                 `keywords`?: `string`[];                 `languages`?: `string`[];                 `lastModified`?: `string`;                 `licenseUrl`?: `string`;                 `locale`: `string`;                 `prefix`?: `string`;                 `primaryContactId`?: `number`;                 `pub-id::publisher-id`?: `string`;                 `rights`?: `string`;                 `seq`?: `number`;                 `source`?: `string`;                 `status`?: `number`;                 `subjects`?: `string`[];                 `submissionId`: `number`;                 `subtitle`?: {                 };                 `supportingAgencies`?: `string`[];                 `title`: {                 };                 `type`?: `string`;                 `urlPath`?: `string`;                 `urlPublished`?: `string`;                 `version`: `number`;             }[];             `reviewAssignments`?: {                 `dateDue`?: `number`;                 `dateResponseDue`?: `number`;                 `id`?: `number`;                 `isCurrentUserAssigned`?: `number`;                 `reviewRoundId`?: `number`;                 `round`?: `number`;                 `status`?: `number`;                 `statusLabel`?: `number`;             }[];             `reviewRounds`?: {                 `id`?: `number`;                 `round`?: `number`;                 `stageId`?: `number`;                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `sectionId`: `number`;             `stageId`?: `number`;             `stages`?: {                 `currentUserAssignedRoles`?: `number`[];                 `files`?: {                     `count`?: `number`;                 };                 `id`?: `number`;                 `isActiveStage`?: `boolean`;                 `label`?: `string`;                 `queries`?: `unknown`[];                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `status`?: `number`;             `statusLabel`?: `string`;             `submissionProgress`?: `number`;             `urlAuthorWorkflow`?: `string`;             `urlEditorialWorkflow`?: `string`;             `urlPublished`?: `string`;             `urlWorkflow`?: `string`;         }[];         `itemsMax`?: `number`;     }; } | List of requested submissions. |
| `get.responses.200.schema` | {     `items`?: {         `_href`?: `string`;         `contextId`: `number`;         `currentPublicationId`?: `number`;         `dateLastActivity`?: `string`;         `dateSubmitted`?: `string`;         `id`?: `number`;         `lastModified`?: `string`;         `locale`?: `string`;         `publications`?: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         }[];         `reviewAssignments`?: {             `dateDue`?: `number`;             `dateResponseDue`?: `number`;             `id`?: `number`;             `isCurrentUserAssigned`?: `number`;             `reviewRoundId`?: `number`;             `round`?: `number`;             `status`?: `number`;             `statusLabel`?: `number`;         }[];         `reviewRounds`?: {             `id`?: `number`;             `round`?: `number`;             `stageId`?: `number`;             `status`?: `string`;             `statusId`?: `number`;         }[];         `sectionId`: `number`;         `stageId`?: `number`;         `stages`?: {             `currentUserAssignedRoles`?: `number`[];             `files`?: {                 `count`?: `number`;             };             `id`?: `number`;             `isActiveStage`?: `boolean`;             `label`?: `string`;             `queries`?: `unknown`[];             `status`?: `string`;             `statusId`?: `number`;         }[];         `status`?: `number`;         `statusLabel`?: `string`;         `submissionProgress`?: `number`;         `urlAuthorWorkflow`?: `string`;         `urlEditorialWorkflow`?: `string`;         `urlPublished`?: `string`;         `urlWorkflow`?: `string`;     }[];     `itemsMax`?: `number`; } | - |
| `get.responses.200.schema.items`? | {     `_href`?: `string`;     `contextId`: `number`;     `currentPublicationId`?: `number`;     `dateLastActivity`?: `string`;     `dateSubmitted`?: `string`;     `id`?: `number`;     `lastModified`?: `string`;     `locale`?: `string`;     `publications`?: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }[];     `reviewAssignments`?: {         `dateDue`?: `number`;         `dateResponseDue`?: `number`;         `id`?: `number`;         `isCurrentUserAssigned`?: `number`;         `reviewRoundId`?: `number`;         `round`?: `number`;         `status`?: `number`;         `statusLabel`?: `number`;     }[];     `reviewRounds`?: {         `id`?: `number`;         `round`?: `number`;         `stageId`?: `number`;         `status`?: `string`;         `statusId`?: `number`;     }[];     `sectionId`: `number`;     `stageId`?: `number`;     `stages`?: {         `currentUserAssignedRoles`?: `number`[];         `files`?: {             `count`?: `number`;         };         `id`?: `number`;         `isActiveStage`?: `boolean`;         `label`?: `string`;         `queries`?: `unknown`[];         `status`?: `string`;         `statusId`?: `number`;     }[];     `status`?: `number`;     `statusLabel`?: `string`;     `submissionProgress`?: `number`;     `urlAuthorWorkflow`?: `string`;     `urlEditorialWorkflow`?: `string`;     `urlPublished`?: `string`;     `urlWorkflow`?: `string`; }[] | - |
| `get.responses.200.schema.itemsMax`? | `number` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access submissions assigned to the user requested in the `assignedTo` parameter. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `post` | `object` | - |
| `post.parameters` | {     `body`: {         `schema`: {             `_href`?: `string`;             `assocId`?: `number`;             `assocType`?: `number`;             `caption`?: `string`;             `copyrightOwner`?: `string`;             `createdAt`?: `string`;             `creator`?: `string`;             `credit`?: `string`;             `dateCreated`?: `string`;             `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];             `description`?: `string`;             `documentType`?: `string`;             `file`?: `string`;             `fileId`: `number`;             `fileStage`: `number`;             `genre`?: {                 `dependent`?: `boolean`;                 `id`?: `number`;                 `name`?: `string`;                 `supplementary`?: `boolean`;             };             `genreId`?: `number`;             `id`?: `number`;             `language`?: `string`;             `locale`?: `string`;             `mimetype`?: `string`;             `name`: {             };             `path`?: `string`;             `publisher`?: `string`;             `revisions`?: {                 `documentType`?: `string`;                 `fileId`?: `number`;                 `mimetype`?: `string`;                 `path`?: `string`;                 `url`?: `string`;             }[];             `source`?: `string`;             `sourceSubmissionFileId`?: `number`;             `sponsor`?: `string`;             `subject`?: `string`;             `submissionId`: `number`;             `terms`?: `string`;             `updatedAt`?: `string`;             `uploaderUserId`: `number`;             `url`?: `string`;             `viewable`?: `boolean`;         };     }; } | - |
| `post.parameters.body` | {     `schema`: {         `_href`?: `string`;         `assocId`?: `number`;         `assocType`?: `number`;         `caption`?: `string`;         `copyrightOwner`?: `string`;         `createdAt`?: `string`;         `creator`?: `string`;         `credit`?: `string`;         `dateCreated`?: `string`;         `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];         `description`?: `string`;         `documentType`?: `string`;         `file`?: `string`;         `fileId`: `number`;         `fileStage`: `number`;         `genre`?: {             `dependent`?: `boolean`;             `id`?: `number`;             `name`?: `string`;             `supplementary`?: `boolean`;         };         `genreId`?: `number`;         `id`?: `number`;         `language`?: `string`;         `locale`?: `string`;         `mimetype`?: `string`;         `name`: {         };         `path`?: `string`;         `publisher`?: `string`;         `revisions`?: {             `documentType`?: `string`;             `fileId`?: `number`;             `mimetype`?: `string`;             `path`?: `string`;             `url`?: `string`;         }[];         `source`?: `string`;         `sourceSubmissionFileId`?: `number`;         `sponsor`?: `string`;         `subject`?: `string`;         `submissionId`: `number`;         `terms`?: `string`;         `updatedAt`?: `string`;         `uploaderUserId`: `number`;         `url`?: `string`;         `viewable`?: `boolean`;     }; } | - |
| `post.parameters.body.schema` | {     `_href`?: `string`;     `assocId`?: `number`;     `assocType`?: `number`;     `caption`?: `string`;     `copyrightOwner`?: `string`;     `createdAt`?: `string`;     `creator`?: `string`;     `credit`?: `string`;     `dateCreated`?: `string`;     `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];     `description`?: `string`;     `documentType`?: `string`;     `file`?: `string`;     `fileId`: `number`;     `fileStage`: `number`;     `genre`?: {         `dependent`?: `boolean`;         `id`?: `number`;         `name`?: `string`;         `supplementary`?: `boolean`;     };     `genreId`?: `number`;     `id`?: `number`;     `language`?: `string`;     `locale`?: `string`;     `mimetype`?: `string`;     `name`: {     };     `path`?: `string`;     `publisher`?: `string`;     `revisions`?: {         `documentType`?: `string`;         `fileId`?: `number`;         `mimetype`?: `string`;         `path`?: `string`;         `url`?: `string`;     }[];     `source`?: `string`;     `sourceSubmissionFileId`?: `number`;     `sponsor`?: `string`;     `subject`?: `string`;     `submissionId`: `number`;     `terms`?: `string`;     `updatedAt`?: `string`;     `uploaderUserId`: `number`;     `url`?: `string`;     `viewable`?: `boolean`; } | - |
| `post.parameters.body.schema._href`? | `string` | Format: uri |
| `post.parameters.body.schema.assocId`? | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `post.parameters.body.schema.assocType`? | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `post.parameters.body.schema.caption`? | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `post.parameters.body.schema.copyrightOwner`? | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `post.parameters.body.schema.createdAt`? | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `post.parameters.body.schema.creator`? | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `post.parameters.body.schema.credit`? | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `post.parameters.body.schema.dateCreated`? | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `post.parameters.body.schema.dependentFiles`? | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `post.parameters.body.schema.description`? | `string` | - |
| `post.parameters.body.schema.documentType`? | `string` | - |
| `post.parameters.body.schema.file`? | `string` | Format: binary |
| `post.parameters.body.schema.fileId` | `number` | - |
| `post.parameters.body.schema.fileStage` | `number` | - |
| `post.parameters.body.schema.genre`? | {     `dependent`?: `boolean`;     `id`?: `number`;     `name`?: `string`;     `supplementary`?: `boolean`; } | `Description`  The genre of this file, such as Article Text or Data Set. |
| `post.parameters.body.schema.genre.dependent`? | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `post.parameters.body.schema.genre.id`? | `number` | - |
| `post.parameters.body.schema.genre.name`? | `string` | - |
| `post.parameters.body.schema.genre.supplementary`? | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `post.parameters.body.schema.genreId`? | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `post.parameters.body.schema.id`? | `number` | - |
| `post.parameters.body.schema.language`? | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `post.parameters.body.schema.locale`? | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `post.parameters.body.schema.mimetype`? | `string` | - |
| `post.parameters.body.schema.name` | {  } | - |
| `post.parameters.body.schema.path`? | `string` | - |
| `post.parameters.body.schema.publisher`? | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `post.parameters.body.schema.revisions`? | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `post.parameters.body.schema.source`? | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `post.parameters.body.schema.sourceSubmissionFileId`? | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `post.parameters.body.schema.sponsor`? | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `post.parameters.body.schema.subject`? | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `post.parameters.body.schema.submissionId` | `number` | - |
| `post.parameters.body.schema.terms`? | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `post.parameters.body.schema.updatedAt`? | `string` | `Description`  When this object was last updated. |
| `post.parameters.body.schema.uploaderUserId` | `number` | - |
| `post.parameters.body.schema.url`? | `string` | - |
| `post.parameters.body.schema.viewable`? | `boolean` | - |
| `post.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `contextId`: `number`;             `currentPublicationId`?: `number`;             `dateLastActivity`?: `string`;             `dateSubmitted`?: `string`;             `id`?: `number`;             `lastModified`?: `string`;             `locale`?: `string`;             `publications`?: {                 `_href`?: `string`;                 `abstract`?: `string`;                 `authors`?: {                     `affiliation`?: `string`;                     `biography`?: `string`;                     `country`?: `string`;                     `email`: `string`;                     `familyName`?: `string`;                     `fullName`?: `string`;                     `givenName`: `string`;                     `id`?: `number`;                     `includeInBrowse`?: `boolean`;                     `orcid`?: `string`;                     `preferredPublicName`?: `string`;                     `publicationId`: `number`;                     `seq`?: `number`;                     `submissionLocale`?: `string`;                     `url`?: `string`;                     `userGroupId`: `number`;                     `userGroupName`?: `string`;                 }[];                 `authorsString`?: `string`;                 `authorsStringIncludeInBrowse`?: `string`;                 `authorsStringShort`?: `string`;                 `categoryIds`?: `number`[];                 `citations`?: `string`[];                 `citationsRaw`?: `string`;                 `copyrightHolder`?: `string`;                 `copyrightYear`?: `number`;                 `coverImage`?: {                     `altText`?: `string`;                     `dateUploaded`?: `string`;                     `temporaryFileId`?: `number`;                     `uploadName`?: `string`;                 };                 `coverage`?: `string`;                 `datePublished`?: `string`;                 `disciplines`?: `string`[];                 `doiId`?: `number`;                 `doiObject`?: {                     `contextId`: `number`;                     `doi`: `string`;                     `id`?: `number`;                     `resolvingUrl`?: `string`;                     `status`?: `number`;                 }[];                 `fullTitle`?: `string`;                 `id`?: `number`;                 `keywords`?: `string`[];                 `languages`?: `string`[];                 `lastModified`?: `string`;                 `licenseUrl`?: `string`;                 `locale`: `string`;                 `prefix`?: `string`;                 `primaryContactId`?: `number`;                 `pub-id::publisher-id`?: `string`;                 `rights`?: `string`;                 `seq`?: `number`;                 `source`?: `string`;                 `status`?: `number`;                 `subjects`?: `string`[];                 `submissionId`: `number`;                 `subtitle`?: {                 };                 `supportingAgencies`?: `string`[];                 `title`: {                 };                 `type`?: `string`;                 `urlPath`?: `string`;                 `urlPublished`?: `string`;                 `version`: `number`;             }[];             `reviewAssignments`?: {                 `dateDue`?: `number`;                 `dateResponseDue`?: `number`;                 `id`?: `number`;                 `isCurrentUserAssigned`?: `number`;                 `reviewRoundId`?: `number`;                 `round`?: `number`;                 `status`?: `number`;                 `statusLabel`?: `number`;             }[];             `reviewRounds`?: {                 `id`?: `number`;                 `round`?: `number`;                 `stageId`?: `number`;                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `sectionId`: `number`;             `stageId`?: `number`;             `stages`?: {                 `currentUserAssignedRoles`?: `number`[];                 `files`?: {                     `count`?: `number`;                 };                 `id`?: `number`;                 `isActiveStage`?: `boolean`;                 `label`?: `string`;                 `queries`?: `unknown`[];                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `status`?: `number`;             `statusLabel`?: `string`;             `submissionProgress`?: `number`;             `urlAuthorWorkflow`?: `string`;             `urlEditorialWorkflow`?: `string`;             `urlPublished`?: `string`;             `urlWorkflow`?: `string`;         };     };     `400`: {         `schema`: {         };     }; } | - |
| `post.responses.200` | {     `schema`: {         `_href`?: `string`;         `contextId`: `number`;         `currentPublicationId`?: `number`;         `dateLastActivity`?: `string`;         `dateSubmitted`?: `string`;         `id`?: `number`;         `lastModified`?: `string`;         `locale`?: `string`;         `publications`?: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         }[];         `reviewAssignments`?: {             `dateDue`?: `number`;             `dateResponseDue`?: `number`;             `id`?: `number`;             `isCurrentUserAssigned`?: `number`;             `reviewRoundId`?: `number`;             `round`?: `number`;             `status`?: `number`;             `statusLabel`?: `number`;         }[];         `reviewRounds`?: {             `id`?: `number`;             `round`?: `number`;             `stageId`?: `number`;             `status`?: `string`;             `statusId`?: `number`;         }[];         `sectionId`: `number`;         `stageId`?: `number`;         `stages`?: {             `currentUserAssignedRoles`?: `number`[];             `files`?: {                 `count`?: `number`;             };             `id`?: `number`;             `isActiveStage`?: `boolean`;             `label`?: `string`;             `queries`?: `unknown`[];             `status`?: `string`;             `statusId`?: `number`;         }[];         `status`?: `number`;         `statusLabel`?: `string`;         `submissionProgress`?: `number`;         `urlAuthorWorkflow`?: `string`;         `urlEditorialWorkflow`?: `string`;         `urlPublished`?: `string`;         `urlWorkflow`?: `string`;     }; } | Details of the submission that was just added. |
| `post.responses.200.schema` | {     `_href`?: `string`;     `contextId`: `number`;     `currentPublicationId`?: `number`;     `dateLastActivity`?: `string`;     `dateSubmitted`?: `string`;     `id`?: `number`;     `lastModified`?: `string`;     `locale`?: `string`;     `publications`?: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }[];     `reviewAssignments`?: {         `dateDue`?: `number`;         `dateResponseDue`?: `number`;         `id`?: `number`;         `isCurrentUserAssigned`?: `number`;         `reviewRoundId`?: `number`;         `round`?: `number`;         `status`?: `number`;         `statusLabel`?: `number`;     }[];     `reviewRounds`?: {         `id`?: `number`;         `round`?: `number`;         `stageId`?: `number`;         `status`?: `string`;         `statusId`?: `number`;     }[];     `sectionId`: `number`;     `stageId`?: `number`;     `stages`?: {         `currentUserAssignedRoles`?: `number`[];         `files`?: {             `count`?: `number`;         };         `id`?: `number`;         `isActiveStage`?: `boolean`;         `label`?: `string`;         `queries`?: `unknown`[];         `status`?: `string`;         `statusId`?: `number`;     }[];     `status`?: `number`;     `statusLabel`?: `string`;     `submissionProgress`?: `number`;     `urlAuthorWorkflow`?: `string`;     `urlEditorialWorkflow`?: `string`;     `urlPublished`?: `string`;     `urlWorkflow`?: `string`; } | - |
| `post.responses.200.schema._href`? | `string` | - |
| `post.responses.200.schema.contextId` | `number` | - |
| `post.responses.200.schema.currentPublicationId`? | `number` | `Description`  Which publication is the latest published version. |
| `post.responses.200.schema.dateLastActivity`? | `string` | `Description`  The last time activity was recorded related to this submission. |
| `post.responses.200.schema.dateSubmitted`? | `string` | - |
| `post.responses.200.schema.id`? | `number` | - |
| `post.responses.200.schema.lastModified`? | `string` | `Description`  The last time a modification was made to this submission or any of its associated objects. |
| `post.responses.200.schema.locale`? | `string` | `Description`  The primary language of this submission. |
| `post.responses.200.schema.publications`? | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; }[] | `Description`  A list of publications that have been created for this submission. |
| `post.responses.200.schema.reviewAssignments`? | {     `dateDue`?: `number`;     `dateResponseDue`?: `number`;     `id`?: `number`;     `isCurrentUserAssigned`?: `number`;     `reviewRoundId`?: `number`;     `round`?: `number`;     `status`?: `number`;     `statusLabel`?: `number`; }[] | `Description`  Information about pending and completed review assignments. |
| `post.responses.200.schema.reviewRounds`? | {     `id`?: `number`;     `round`?: `number`;     `stageId`?: `number`;     `status`?: `string`;     `statusId`?: `number`; }[] | `Description`  A list of review rounds that have been opened for this submission. |
| `post.responses.200.schema.sectionId` | `number` | `Description`  The section this submission should be assigned to. This can only be passed when creating a new submission and the data is assigned to the first publication. Edit the publication to change the `sectionId`. |
| `post.responses.200.schema.stageId`? | `number` | `Description`  The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.  `Default`  1 |
| `post.responses.200.schema.stages`? | {     `currentUserAssignedRoles`?: `number`[];     `files`?: {         `count`?: `number`;     };     `id`?: `number`;     `isActiveStage`?: `boolean`;     `label`?: `string`;     `queries`?: `unknown`[];     `status`?: `string`;     `statusId`?: `number`; }[] | `Description`  Key data about the status, files and discussions of each stage. |
| `post.responses.200.schema.status`? | `number` | `Description`  Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `post.responses.200.schema.statusLabel`? | `string` | `Description`  A human-readable version of the submission's status. It will be Published, Declined, Queued (still in the workflow) or Scheduled. |
| `post.responses.200.schema.submissionProgress`? | `number` | `Description`  This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.  `Default`  1 |
| `post.responses.200.schema.urlAuthorWorkflow`? | `string` | `Description`  A URL to the author's editorial workflow. |
| `post.responses.200.schema.urlEditorialWorkflow`? | `string` | `Description`  A URL to the editors' and assistants' editorial workflow. |
| `post.responses.200.schema.urlPublished`? | `string` | `Description`  A URL to the current publication or where it will be published. |
| `post.responses.200.schema.urlWorkflow`? | `string` | `Description`  A URL to the workflow most appropriate for the current user. It will match the `urlAuthorWorkflow` or `urlEditorialWorkflow. | | `post.responses.400`| {    `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. | | `post.responses.400.schema\` | {  } | - |

Defined in:  [lib/swagger-types.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L7)

##### `/submissions/\{submissionId}`

> `object`

```ts
{
    delete: {
        parameters: {
            path: {
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    contextId: number;
                    currentPublicationId?: number;
                    dateLastActivity?: string;
                    dateSubmitted?: string;
                    id?: number;
                    lastModified?: string;
                    locale?: string;
                    publications?: {
                        _href?: string;
                        abstract?: string;
                        authors?: {
                            affiliation?: string;
                            biography?: string;
                            country?: string;
                            email: string;
                            familyName?: string;
                            fullName?: string;
                            givenName: string;
                            id?: number;
                            includeInBrowse?: boolean;
                            orcid?: string;
                            preferredPublicName?: string;
                            publicationId: number;
                            seq?: number;
                            submissionLocale?: string;
                            url?: string;
                            userGroupId: number;
                            userGroupName?: string;
                        }[];
                        authorsString?: string;
                        authorsStringIncludeInBrowse?: string;
                        authorsStringShort?: string;
                        categoryIds?: number[];
                        citations?: string[];
                        citationsRaw?: string;
                        copyrightHolder?: string;
                        copyrightYear?: number;
                        coverImage?: {
                            altText?: string;
                            dateUploaded?: string;
                            temporaryFileId?: number;
                            uploadName?: string;
                        };
                        coverage?: string;
                        datePublished?: string;
                        disciplines?: string[];
                        doiId?: number;
                        doiObject?: {
                            contextId: number;
                            doi: string;
                            id?: number;
                            resolvingUrl?: string;
                            status?: number;
                        }[];
                        fullTitle?: string;
                        id?: number;
                        keywords?: string[];
                        languages?: string[];
                        lastModified?: string;
                        licenseUrl?: string;
                        locale: string;
                        prefix?: string;
                        primaryContactId?: number;
                        pub-id::publisher-id?: string;
                        rights?: string;
                        seq?: number;
                        source?: string;
                        status?: number;
                        subjects?: string[];
                        submissionId: number;
                        subtitle?: {
                        };
                        supportingAgencies?: string[];
                        title: {
                        };
                        type?: string;
                        urlPath?: string;
                        urlPublished?: string;
                        version: number;
                    }[];
                    reviewAssignments?: {
                        dateDue?: number;
                        dateResponseDue?: number;
                        id?: number;
                        isCurrentUserAssigned?: number;
                        reviewRoundId?: number;
                        round?: number;
                        status?: number;
                        statusLabel?: number;
                    }[];
                    reviewRounds?: {
                        id?: number;
                        round?: number;
                        stageId?: number;
                        status?: string;
                        statusId?: number;
                    }[];
                    sectionId: number;
                    stageId?: number;
                    stages?: {
                        currentUserAssignedRoles?: number[];
                        files?: {
                            count?: number;
                        };
                        id?: number;
                        isActiveStage?: boolean;
                        label?: string;
                        queries?: unknown[];
                        status?: string;
                        statusId?: number;
                    }[];
                    status?: number;
                    statusLabel?: string;
                    submissionProgress?: number;
                    urlAuthorWorkflow?: string;
                    urlEditorialWorkflow?: string;
                    urlPublished?: string;
                    urlWorkflow?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    get: {
        parameters: {
            path: {
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    contextId: number;
                    currentPublicationId?: number;
                    dateLastActivity?: string;
                    dateSubmitted?: string;
                    id?: number;
                    lastModified?: string;
                    locale?: string;
                    publications?: {
                        _href?: string;
                        abstract?: string;
                        authors?: {
                            affiliation?: string;
                            biography?: string;
                            country?: string;
                            email: string;
                            familyName?: string;
                            fullName?: string;
                            givenName: string;
                            id?: number;
                            includeInBrowse?: boolean;
                            orcid?: string;
                            preferredPublicName?: string;
                            publicationId: number;
                            seq?: number;
                            submissionLocale?: string;
                            url?: string;
                            userGroupId: number;
                            userGroupName?: string;
                        }[];
                        authorsString?: string;
                        authorsStringIncludeInBrowse?: string;
                        authorsStringShort?: string;
                        categoryIds?: number[];
                        citations?: string[];
                        citationsRaw?: string;
                        copyrightHolder?: string;
                        copyrightYear?: number;
                        coverImage?: {
                            altText?: string;
                            dateUploaded?: string;
                            temporaryFileId?: number;
                            uploadName?: string;
                        };
                        coverage?: string;
                        datePublished?: string;
                        disciplines?: string[];
                        doiId?: number;
                        doiObject?: {
                            contextId: number;
                            doi: string;
                            id?: number;
                            resolvingUrl?: string;
                            status?: number;
                        }[];
                        fullTitle?: string;
                        id?: number;
                        keywords?: string[];
                        languages?: string[];
                        lastModified?: string;
                        licenseUrl?: string;
                        locale: string;
                        prefix?: string;
                        primaryContactId?: number;
                        pub-id::publisher-id?: string;
                        rights?: string;
                        seq?: number;
                        source?: string;
                        status?: number;
                        subjects?: string[];
                        submissionId: number;
                        subtitle?: {
                        };
                        supportingAgencies?: string[];
                        title: {
                        };
                        type?: string;
                        urlPath?: string;
                        urlPublished?: string;
                        version: number;
                    }[];
                    reviewAssignments?: {
                        dateDue?: number;
                        dateResponseDue?: number;
                        id?: number;
                        isCurrentUserAssigned?: number;
                        reviewRoundId?: number;
                        round?: number;
                        status?: number;
                        statusLabel?: number;
                    }[];
                    reviewRounds?: {
                        id?: number;
                        round?: number;
                        stageId?: number;
                        status?: string;
                        statusId?: number;
                    }[];
                    sectionId: number;
                    stageId?: number;
                    stages?: {
                        currentUserAssignedRoles?: number[];
                        files?: {
                            count?: number;
                        };
                        id?: number;
                        isActiveStage?: boolean;
                        label?: string;
                        queries?: unknown[];
                        status?: string;
                        statusId?: number;
                    }[];
                    status?: number;
                    statusLabel?: string;
                    submissionProgress?: number;
                    urlAuthorWorkflow?: string;
                    urlEditorialWorkflow?: string;
                    urlPublished?: string;
                    urlWorkflow?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    put: {
        parameters: {
            body: {
                schema: {
                    _href?: string;
                    assocId?: number;
                    assocType?: number;
                    caption?: string;
                    copyrightOwner?: string;
                    createdAt?: string;
                    creator?: string;
                    credit?: string;
                    dateCreated?: string;
                    dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
                    description?: string;
                    documentType?: string;
                    file?: string;
                    fileId: number;
                    fileStage: number;
                    genre?: {
                        dependent?: boolean;
                        id?: number;
                        name?: string;
                        supplementary?: boolean;
                    };
                    genreId?: number;
                    id?: number;
                    language?: string;
                    locale?: string;
                    mimetype?: string;
                    name: {
                    };
                    path?: string;
                    publisher?: string;
                    revisions?: {
                        documentType?: string;
                        fileId?: number;
                        mimetype?: string;
                        path?: string;
                        url?: string;
                    }[];
                    source?: string;
                    sourceSubmissionFileId?: number;
                    sponsor?: string;
                    subject?: string;
                    submissionId: number;
                    terms?: string;
                    updatedAt?: string;
                    uploaderUserId: number;
                    url?: string;
                    viewable?: boolean;
                };
            };
            path: {
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    contextId: number;
                    currentPublicationId?: number;
                    dateLastActivity?: string;
                    dateSubmitted?: string;
                    id?: number;
                    lastModified?: string;
                    locale?: string;
                    publications?: {
                        _href?: string;
                        abstract?: string;
                        authors?: {
                            affiliation?: string;
                            biography?: string;
                            country?: string;
                            email: string;
                            familyName?: string;
                            fullName?: string;
                            givenName: string;
                            id?: number;
                            includeInBrowse?: boolean;
                            orcid?: string;
                            preferredPublicName?: string;
                            publicationId: number;
                            seq?: number;
                            submissionLocale?: string;
                            url?: string;
                            userGroupId: number;
                            userGroupName?: string;
                        }[];
                        authorsString?: string;
                        authorsStringIncludeInBrowse?: string;
                        authorsStringShort?: string;
                        categoryIds?: number[];
                        citations?: string[];
                        citationsRaw?: string;
                        copyrightHolder?: string;
                        copyrightYear?: number;
                        coverImage?: {
                            altText?: string;
                            dateUploaded?: string;
                            temporaryFileId?: number;
                            uploadName?: string;
                        };
                        coverage?: string;
                        datePublished?: string;
                        disciplines?: string[];
                        doiId?: number;
                        doiObject?: {
                            contextId: number;
                            doi: string;
                            id?: number;
                            resolvingUrl?: string;
                            status?: number;
                        }[];
                        fullTitle?: string;
                        id?: number;
                        keywords?: string[];
                        languages?: string[];
                        lastModified?: string;
                        licenseUrl?: string;
                        locale: string;
                        prefix?: string;
                        primaryContactId?: number;
                        pub-id::publisher-id?: string;
                        rights?: string;
                        seq?: number;
                        source?: string;
                        status?: number;
                        subjects?: string[];
                        submissionId: number;
                        subtitle?: {
                        };
                        supportingAgencies?: string[];
                        title: {
                        };
                        type?: string;
                        urlPath?: string;
                        urlPublished?: string;
                        version: number;
                    }[];
                    reviewAssignments?: {
                        dateDue?: number;
                        dateResponseDue?: number;
                        id?: number;
                        isCurrentUserAssigned?: number;
                        reviewRoundId?: number;
                        round?: number;
                        status?: number;
                        statusLabel?: number;
                    }[];
                    reviewRounds?: {
                        id?: number;
                        round?: number;
                        stageId?: number;
                        status?: string;
                        statusId?: number;
                    }[];
                    sectionId: number;
                    stageId?: number;
                    stages?: {
                        currentUserAssignedRoles?: number[];
                        files?: {
                            count?: number;
                        };
                        id?: number;
                        isActiveStage?: boolean;
                        label?: string;
                        queries?: unknown[];
                        status?: string;
                        statusId?: number;
                    }[];
                    status?: number;
                    statusLabel?: string;
                    submissionProgress?: number;
                    urlAuthorWorkflow?: string;
                    urlEditorialWorkflow?: string;
                    urlPublished?: string;
                    urlWorkflow?: string;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `delete` | `object` | Only journal managers and subeditors can make a request to this endpoint. |
| `delete.parameters` | {     `path`: {         `submissionId`: `number`;     }; } | - |
| `delete.parameters.path` | {     `submissionId`: `number`; } | - |
| `delete.parameters.path.submissionId` | `number` | Submission ID |
| `delete.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `contextId`: `number`;             `currentPublicationId`?: `number`;             `dateLastActivity`?: `string`;             `dateSubmitted`?: `string`;             `id`?: `number`;             `lastModified`?: `string`;             `locale`?: `string`;             `publications`?: {                 `_href`?: `string`;                 `abstract`?: `string`;                 `authors`?: {                     `affiliation`?: `string`;                     `biography`?: `string`;                     `country`?: `string`;                     `email`: `string`;                     `familyName`?: `string`;                     `fullName`?: `string`;                     `givenName`: `string`;                     `id`?: `number`;                     `includeInBrowse`?: `boolean`;                     `orcid`?: `string`;                     `preferredPublicName`?: `string`;                     `publicationId`: `number`;                     `seq`?: `number`;                     `submissionLocale`?: `string`;                     `url`?: `string`;                     `userGroupId`: `number`;                     `userGroupName`?: `string`;                 }[];                 `authorsString`?: `string`;                 `authorsStringIncludeInBrowse`?: `string`;                 `authorsStringShort`?: `string`;                 `categoryIds`?: `number`[];                 `citations`?: `string`[];                 `citationsRaw`?: `string`;                 `copyrightHolder`?: `string`;                 `copyrightYear`?: `number`;                 `coverImage`?: {                     `altText`?: `string`;                     `dateUploaded`?: `string`;                     `temporaryFileId`?: `number`;                     `uploadName`?: `string`;                 };                 `coverage`?: `string`;                 `datePublished`?: `string`;                 `disciplines`?: `string`[];                 `doiId`?: `number`;                 `doiObject`?: {                     `contextId`: `number`;                     `doi`: `string`;                     `id`?: `number`;                     `resolvingUrl`?: `string`;                     `status`?: `number`;                 }[];                 `fullTitle`?: `string`;                 `id`?: `number`;                 `keywords`?: `string`[];                 `languages`?: `string`[];                 `lastModified`?: `string`;                 `licenseUrl`?: `string`;                 `locale`: `string`;                 `prefix`?: `string`;                 `primaryContactId`?: `number`;                 `pub-id::publisher-id`?: `string`;                 `rights`?: `string`;                 `seq`?: `number`;                 `source`?: `string`;                 `status`?: `number`;                 `subjects`?: `string`[];                 `submissionId`: `number`;                 `subtitle`?: {                 };                 `supportingAgencies`?: `string`[];                 `title`: {                 };                 `type`?: `string`;                 `urlPath`?: `string`;                 `urlPublished`?: `string`;                 `version`: `number`;             }[];             `reviewAssignments`?: {                 `dateDue`?: `number`;                 `dateResponseDue`?: `number`;                 `id`?: `number`;                 `isCurrentUserAssigned`?: `number`;                 `reviewRoundId`?: `number`;                 `round`?: `number`;                 `status`?: `number`;                 `statusLabel`?: `number`;             }[];             `reviewRounds`?: {                 `id`?: `number`;                 `round`?: `number`;                 `stageId`?: `number`;                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `sectionId`: `number`;             `stageId`?: `number`;             `stages`?: {                 `currentUserAssignedRoles`?: `number`[];                 `files`?: {                     `count`?: `number`;                 };                 `id`?: `number`;                 `isActiveStage`?: `boolean`;                 `label`?: `string`;                 `queries`?: `unknown`[];                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `status`?: `number`;             `statusLabel`?: `string`;             `submissionProgress`?: `number`;             `urlAuthorWorkflow`?: `string`;             `urlEditorialWorkflow`?: `string`;             `urlPublished`?: `string`;             `urlWorkflow`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `delete.responses.200` | {     `schema`: {         `_href`?: `string`;         `contextId`: `number`;         `currentPublicationId`?: `number`;         `dateLastActivity`?: `string`;         `dateSubmitted`?: `string`;         `id`?: `number`;         `lastModified`?: `string`;         `locale`?: `string`;         `publications`?: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         }[];         `reviewAssignments`?: {             `dateDue`?: `number`;             `dateResponseDue`?: `number`;             `id`?: `number`;             `isCurrentUserAssigned`?: `number`;             `reviewRoundId`?: `number`;             `round`?: `number`;             `status`?: `number`;             `statusLabel`?: `number`;         }[];         `reviewRounds`?: {             `id`?: `number`;             `round`?: `number`;             `stageId`?: `number`;             `status`?: `string`;             `statusId`?: `number`;         }[];         `sectionId`: `number`;         `stageId`?: `number`;         `stages`?: {             `currentUserAssignedRoles`?: `number`[];             `files`?: {                 `count`?: `number`;             };             `id`?: `number`;             `isActiveStage`?: `boolean`;             `label`?: `string`;             `queries`?: `unknown`[];             `status`?: `string`;             `statusId`?: `number`;         }[];         `status`?: `number`;         `statusLabel`?: `string`;         `submissionProgress`?: `number`;         `urlAuthorWorkflow`?: `string`;         `urlEditorialWorkflow`?: `string`;         `urlPublished`?: `string`;         `urlWorkflow`?: `string`;     }; } | Details of the deleted submission. |
| `delete.responses.200.schema` | {     `_href`?: `string`;     `contextId`: `number`;     `currentPublicationId`?: `number`;     `dateLastActivity`?: `string`;     `dateSubmitted`?: `string`;     `id`?: `number`;     `lastModified`?: `string`;     `locale`?: `string`;     `publications`?: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }[];     `reviewAssignments`?: {         `dateDue`?: `number`;         `dateResponseDue`?: `number`;         `id`?: `number`;         `isCurrentUserAssigned`?: `number`;         `reviewRoundId`?: `number`;         `round`?: `number`;         `status`?: `number`;         `statusLabel`?: `number`;     }[];     `reviewRounds`?: {         `id`?: `number`;         `round`?: `number`;         `stageId`?: `number`;         `status`?: `string`;         `statusId`?: `number`;     }[];     `sectionId`: `number`;     `stageId`?: `number`;     `stages`?: {         `currentUserAssignedRoles`?: `number`[];         `files`?: {             `count`?: `number`;         };         `id`?: `number`;         `isActiveStage`?: `boolean`;         `label`?: `string`;         `queries`?: `unknown`[];         `status`?: `string`;         `statusId`?: `number`;     }[];     `status`?: `number`;     `statusLabel`?: `string`;     `submissionProgress`?: `number`;     `urlAuthorWorkflow`?: `string`;     `urlEditorialWorkflow`?: `string`;     `urlPublished`?: `string`;     `urlWorkflow`?: `string`; } | - |
| `delete.responses.200.schema._href`? | `string` | - |
| `delete.responses.200.schema.contextId` | `number` | - |
| `delete.responses.200.schema.currentPublicationId`? | `number` | `Description`  Which publication is the latest published version. |
| `delete.responses.200.schema.dateLastActivity`? | `string` | `Description`  The last time activity was recorded related to this submission. |
| `delete.responses.200.schema.dateSubmitted`? | `string` | - |
| `delete.responses.200.schema.id`? | `number` | - |
| `delete.responses.200.schema.lastModified`? | `string` | `Description`  The last time a modification was made to this submission or any of its associated objects. |
| `delete.responses.200.schema.locale`? | `string` | `Description`  The primary language of this submission. |
| `delete.responses.200.schema.publications`? | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; }[] | `Description`  A list of publications that have been created for this submission. |
| `delete.responses.200.schema.reviewAssignments`? | {     `dateDue`?: `number`;     `dateResponseDue`?: `number`;     `id`?: `number`;     `isCurrentUserAssigned`?: `number`;     `reviewRoundId`?: `number`;     `round`?: `number`;     `status`?: `number`;     `statusLabel`?: `number`; }[] | `Description`  Information about pending and completed review assignments. |
| `delete.responses.200.schema.reviewRounds`? | {     `id`?: `number`;     `round`?: `number`;     `stageId`?: `number`;     `status`?: `string`;     `statusId`?: `number`; }[] | `Description`  A list of review rounds that have been opened for this submission. |
| `delete.responses.200.schema.sectionId` | `number` | `Description`  The section this submission should be assigned to. This can only be passed when creating a new submission and the data is assigned to the first publication. Edit the publication to change the `sectionId`. |
| `delete.responses.200.schema.stageId`? | `number` | `Description`  The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.  `Default`  1 |
| `delete.responses.200.schema.stages`? | {     `currentUserAssignedRoles`?: `number`[];     `files`?: {         `count`?: `number`;     };     `id`?: `number`;     `isActiveStage`?: `boolean`;     `label`?: `string`;     `queries`?: `unknown`[];     `status`?: `string`;     `statusId`?: `number`; }[] | `Description`  Key data about the status, files and discussions of each stage. |
| `delete.responses.200.schema.status`? | `number` | `Description`  Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `delete.responses.200.schema.statusLabel`? | `string` | `Description`  A human-readable version of the submission's status. It will be Published, Declined, Queued (still in the workflow) or Scheduled. |
| `delete.responses.200.schema.submissionProgress`? | `number` | `Description`  This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.  `Default`  1 |
| `delete.responses.200.schema.urlAuthorWorkflow`? | `string` | `Description`  A URL to the author's editorial workflow. |
| `delete.responses.200.schema.urlEditorialWorkflow`? | `string` | `Description`  A URL to the editors' and assistants' editorial workflow. |
| `delete.responses.200.schema.urlPublished`? | `string` | `Description`  A URL to the current publication or where it will be published. |
| `delete.responses.200.schema.urlWorkflow`? | `string` | `Description`  A URL to the workflow most appropriate for the current user. It will match the `urlAuthorWorkflow` or `urlEditorialWorkflow. | | `delete.responses.403`| {    `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You are not allowed to delete this submission. | | `delete.responses.403.schema`| {    `error`?: `string`;     `errorMessage`?: `string`; } | - | | `delete.responses.403.schema.error`? | `string`| - |
|`delete.responses.403.schema.errorMessage`? | `string`| - |
|`delete.responses.404`| {    `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The submission could not be found. | | `delete.responses.404.schema`| {    `error`?: `string`;     `errorMessage`?: `string`; } | - | | `delete.responses.404.schema.error`? | `string`| - |
|`delete.responses.404.schema.errorMessage`? | `string`| - |
|`get`|`object`| * Unpublished submissions are only returned for assigned participants, editors and admins. *`abstract`includes HTML markup. *`pages`is usually a`string`. But in some cases it may return an array of arrays. Each array contains two items: the start and end page. Example: `[[25, 31], [45, 62]]`. * `submissionProgress`will be > 0 if the submission is incomplete. *`stages`, `reviewRounds`and`reviewAssignments`should only be returned for participants assigned to the submission. *`reviewAssignments`should only expose user-identifying information for editors and admins. |
|`get.parameters`| {    `path`: {         `submissionId`: `number`;     }; } | - | | `get.parameters.path`| {    `submissionId`: `number`; } | - | | `get.parameters.path.submissionId`|`number`| Submission ID |
|`get.responses`| {    `200`: {         `schema`: {             `\_href`?: `string`;             `contextId`: `number`;             `currentPublicationId`?: `number`;             `dateLastActivity`?: `string`;             `dateSubmitted`?: `string`;             `id`?: `number`;             `lastModified`?: `string`;             `locale`?: `string`;             `publications`?: {                 `\_href`?: `string`;                 `abstract`?: `string`;                 `authors`?: {                     `affiliation`?: `string`;                     `biography`?: `string`;                     `country`?: `string`;                     `email`: `string`;                     `familyName`?: `string`;                     `fullName`?: `string`;                     `givenName`: `string`;                     `id`?: `number`;                     `includeInBrowse`?: `boolean`;                     `orcid`?: `string`;                     `preferredPublicName`?: `string`;                     `publicationId`: `number`;                     `seq`?: `number`;                     `submissionLocale`?: `string`;                     `url`?: `string`;                     `userGroupId`: `number`;                     `userGroupName`?: `string`;                 }[];                 `authorsString`?: `string`;                 `authorsStringIncludeInBrowse`?: `string`;                 `authorsStringShort`?: `string`;                 `categoryIds`?: `number`[];                 `citations`?: `string`[];                 `citationsRaw`?: `string`;                 `copyrightHolder`?: `string`;                 `copyrightYear`?: `number`;                 `coverImage`?: {                     `altText`?: `string`;                     `dateUploaded`?: `string`;                     `temporaryFileId`?: `number`;                     `uploadName`?: `string`;                 };                 `coverage`?: `string`;                 `datePublished`?: `string`;                 `disciplines`?: `string`[];                 `doiId`?: `number`;                 `doiObject`?: {                     `contextId`: `number`;                     `doi`: `string`;                     `id`?: `number`;                     `resolvingUrl`?: `string`;                     `status`?: `number`;                 }[];                 `fullTitle`?: `string`;                 `id`?: `number`;                 `keywords`?: `string`[];                 `languages`?: `string`[];                 `lastModified`?: `string`;                 `licenseUrl`?: `string`;                 `locale`: `string`;                 `prefix`?: `string`;                 `primaryContactId`?: `number`;                 `pub-id::publisher-id`?: `string`;                 `rights`?: `string`;                 `seq`?: `number`;                 `source`?: `string`;                 `status`?: `number`;                 `subjects`?: `string`[];                 `submissionId`: `number`;                 `subtitle`?: {                 };                 `supportingAgencies`?: `string`[];                 `title`: {                 };                 `type`?: `string`;                 `urlPath`?: `string`;                 `urlPublished`?: `string`;                 `version`: `number`;             }[];             `reviewAssignments`?: {                 `dateDue`?: `number`;                 `dateResponseDue`?: `number`;                 `id`?: `number`;                 `isCurrentUserAssigned`?: `number`;                 `reviewRoundId`?: `number`;                 `round`?: `number`;                 `status`?: `number`;                 `statusLabel`?: `number`;             }[];             `reviewRounds`?: {                 `id`?: `number`;                 `round`?: `number`;                 `stageId`?: `number`;                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `sectionId`: `number`;             `stageId`?: `number`;             `stages`?: {                 `currentUserAssignedRoles`?: `number`[];                 `files`?: {                     `count`?: `number`;                 };                 `id`?: `number`;                 `isActiveStage`?: `boolean`;                 `label`?: `string`;                 `queries`?: `unknown`[];                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `status`?: `number`;             `statusLabel`?: `string`;             `submissionProgress`?: `number`;             `urlAuthorWorkflow`?: `string`;             `urlEditorialWorkflow`?: `string`;             `urlPublished`?: `string`;             `urlWorkflow`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - | | `get.responses.200`| {    `schema`: {         `\_href`?: `string`;         `contextId`: `number`;         `currentPublicationId`?: `number`;         `dateLastActivity`?: `string`;         `dateSubmitted`?: `string`;         `id`?: `number`;         `lastModified`?: `string`;         `locale`?: `string`;         `publications`?: {             `\_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         }[];         `reviewAssignments`?: {             `dateDue`?: `number`;             `dateResponseDue`?: `number`;             `id`?: `number`;             `isCurrentUserAssigned`?: `number`;             `reviewRoundId`?: `number`;             `round`?: `number`;             `status`?: `number`;             `statusLabel`?: `number`;         }[];         `reviewRounds`?: {             `id`?: `number`;             `round`?: `number`;             `stageId`?: `number`;             `status`?: `string`;             `statusId`?: `number`;         }[];         `sectionId`: `number`;         `stageId`?: `number`;         `stages`?: {             `currentUserAssignedRoles`?: `number`[];             `files`?: {                 `count`?: `number`;             };             `id`?: `number`;             `isActiveStage`?: `boolean`;             `label`?: `string`;             `queries`?: `unknown`[];             `status`?: `string`;             `statusId`?: `number`;         }[];         `status`?: `number`;         `statusLabel`?: `string`;         `submissionProgress`?: `number`;         `urlAuthorWorkflow`?: `string`;         `urlEditorialWorkflow`?: `string`;         `urlPublished`?: `string`;         `urlWorkflow`?: `string`;     }; } | The submission details. | | `get.responses.200.schema`| {    `\_href`?: `string`;     `contextId`: `number`;     `currentPublicationId`?: `number`;     `dateLastActivity`?: `string`;     `dateSubmitted`?: `string`;     `id`?: `number`;     `lastModified`?: `string`;     `locale`?: `string`;     `publications`?: {         `\_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }[];     `reviewAssignments`?: {         `dateDue`?: `number`;         `dateResponseDue`?: `number`;         `id`?: `number`;         `isCurrentUserAssigned`?: `number`;         `reviewRoundId`?: `number`;         `round`?: `number`;         `status`?: `number`;         `statusLabel`?: `number`;     }[];     `reviewRounds`?: {         `id`?: `number`;         `round`?: `number`;         `stageId`?: `number`;         `status`?: `string`;         `statusId`?: `number`;     }[];     `sectionId`: `number`;     `stageId`?: `number`;     `stages`?: {         `currentUserAssignedRoles`?: `number`[];         `files`?: {             `count`?: `number`;         };         `id`?: `number`;         `isActiveStage`?: `boolean`;         `label`?: `string`;         `queries`?: `unknown`[];         `status`?: `string`;         `statusId`?: `number`;     }[];     `status`?: `number`;     `statusLabel`?: `string`;     `submissionProgress`?: `number`;     `urlAuthorWorkflow`?: `string`;     `urlEditorialWorkflow`?: `string`;     `urlPublished`?: `string`;     `urlWorkflow`?: `string`; } | - | | `get.responses.200.schema.*href`? | `string`| - |
|`get.responses.200.schema.contextId`|`number`| - |
|`get.responses.200.schema.currentPublicationId`? | `number`|`Description` Which publication is the latest published version. |
|`get.responses.200.schema.dateLastActivity`? | `string`|`Description` The last time activity was recorded related to this submission. |
|`get.responses.200.schema.dateSubmitted`? | `string`| - |
|`get.responses.200.schema.id`? | `number`| - |
|`get.responses.200.schema.lastModified`? | `string`|`Description` The last time a modification was made to this submission or any of its associated objects. |
|`get.responses.200.schema.locale`? | `string`|`Description` The primary language of this submission. |
|`get.responses.200.schema.publications`? | {     `*href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; }[] | `Description` A list of publications that have been created for this submission. |
|`get.responses.200.schema.reviewAssignments`? | {     `dateDue`?: `number`;     `dateResponseDue`?: `number`;     `id`?: `number`;     `isCurrentUserAssigned`?: `number`;     `reviewRoundId`?: `number`;     `round`?: `number`;     `status`?: `number`;     `statusLabel`?: `number`; }[] | `Description` Information about pending and completed review assignments. |
|`get.responses.200.schema.reviewRounds`? | {     `id`?: `number`;     `round`?: `number`;     `stageId`?: `number`;     `status`?: `string`;     `statusId`?: `number`; }[] | `Description` A list of review rounds that have been opened for this submission. |
|`get.responses.200.schema.sectionId`|`number`|`Description` The section this submission should be assigned to. This can only be passed when creating a new submission and the data is assigned to the first publication. Edit the publication to change the`sectionId`. | | `get.responses.200.schema.stageId`? | `number`|`Description` The stage of the editorial workflow that this submission is currently in. One of the`WORKFLOW\_STAGE*`constants. Default is`WORKFLOW\_STAGE\_SUBMISSION`.  `Default` 1 |
|`get.responses.200.schema.stages`? | {     `currentUserAssignedRoles`?: `number`[];     `files`?: {         `count`?: `number`;     };     `id`?: `number`;     `isActiveStage`?: `boolean`;     `label`?: `string`;     `queries`?: `unknown`[];     `status`?: `string`;     `statusId`?: `number`; }[] | `Description` Key data about the status, files and discussions of each stage. |
|`get.responses.200.schema.status`? | `number`|`Description` Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the`PKPSubmission::STATUS*\*`constants. Default is`PKPSubmission::STATUS\_QUEUED`.  `Default` 1 |
|`get.responses.200.schema.statusLabel`? | `string`|`Description` A human-readable version of the submission's status. It will be Published, Declined, Queued (still in the workflow) or Scheduled. |
|`get.responses.200.schema.submissionProgress`? | `number`|`Description` This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to`0`, indicating it is ready for an editor's consideration.  `Default` 1 |
|`get.responses.200.schema.urlAuthorWorkflow`? | `string`|`Description` A URL to the author's editorial workflow. |
|`get.responses.200.schema.urlEditorialWorkflow`? | `string`|`Description` A URL to the editors' and assistants' editorial workflow. |
|`get.responses.200.schema.urlPublished`? | `string`|`Description` A URL to the current publication or where it will be published. |
|`get.responses.200.schema.urlWorkflow`? | `string`|`Description` A URL to the workflow most appropriate for the current user. It will match the`urlAuthorWorkflow`or`urlEditorialWorkflow. |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to access this submissions. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The submission could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `put` | `object` | - |
| `put.parameters` | {     `body`: {         `schema`: {             `_href`?: `string`;             `assocId`?: `number`;             `assocType`?: `number`;             `caption`?: `string`;             `copyrightOwner`?: `string`;             `createdAt`?: `string`;             `creator`?: `string`;             `credit`?: `string`;             `dateCreated`?: `string`;             `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];             `description`?: `string`;             `documentType`?: `string`;             `file`?: `string`;             `fileId`: `number`;             `fileStage`: `number`;             `genre`?: {                 `dependent`?: `boolean`;                 `id`?: `number`;                 `name`?: `string`;                 `supplementary`?: `boolean`;             };             `genreId`?: `number`;             `id`?: `number`;             `language`?: `string`;             `locale`?: `string`;             `mimetype`?: `string`;             `name`: {             };             `path`?: `string`;             `publisher`?: `string`;             `revisions`?: {                 `documentType`?: `string`;                 `fileId`?: `number`;                 `mimetype`?: `string`;                 `path`?: `string`;                 `url`?: `string`;             }[];             `source`?: `string`;             `sourceSubmissionFileId`?: `number`;             `sponsor`?: `string`;             `subject`?: `string`;             `submissionId`: `number`;             `terms`?: `string`;             `updatedAt`?: `string`;             `uploaderUserId`: `number`;             `url`?: `string`;             `viewable`?: `boolean`;         };     };     `path`: {         `submissionId`: `number`;     }; } | - |
| `put.parameters.body` | {     `schema`: {         `_href`?: `string`;         `assocId`?: `number`;         `assocType`?: `number`;         `caption`?: `string`;         `copyrightOwner`?: `string`;         `createdAt`?: `string`;         `creator`?: `string`;         `credit`?: `string`;         `dateCreated`?: `string`;         `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];         `description`?: `string`;         `documentType`?: `string`;         `file`?: `string`;         `fileId`: `number`;         `fileStage`: `number`;         `genre`?: {             `dependent`?: `boolean`;             `id`?: `number`;             `name`?: `string`;             `supplementary`?: `boolean`;         };         `genreId`?: `number`;         `id`?: `number`;         `language`?: `string`;         `locale`?: `string`;         `mimetype`?: `string`;         `name`: {         };         `path`?: `string`;         `publisher`?: `string`;         `revisions`?: {             `documentType`?: `string`;             `fileId`?: `number`;             `mimetype`?: `string`;             `path`?: `string`;             `url`?: `string`;         }[];         `source`?: `string`;         `sourceSubmissionFileId`?: `number`;         `sponsor`?: `string`;         `subject`?: `string`;         `submissionId`: `number`;         `terms`?: `string`;         `updatedAt`?: `string`;         `uploaderUserId`: `number`;         `url`?: `string`;         `viewable`?: `boolean`;     }; } | - |
| `put.parameters.body.schema` | {     `_href`?: `string`;     `assocId`?: `number`;     `assocType`?: `number`;     `caption`?: `string`;     `copyrightOwner`?: `string`;     `createdAt`?: `string`;     `creator`?: `string`;     `credit`?: `string`;     `dateCreated`?: `string`;     `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];     `description`?: `string`;     `documentType`?: `string`;     `file`?: `string`;     `fileId`: `number`;     `fileStage`: `number`;     `genre`?: {         `dependent`?: `boolean`;         `id`?: `number`;         `name`?: `string`;         `supplementary`?: `boolean`;     };     `genreId`?: `number`;     `id`?: `number`;     `language`?: `string`;     `locale`?: `string`;     `mimetype`?: `string`;     `name`: {     };     `path`?: `string`;     `publisher`?: `string`;     `revisions`?: {         `documentType`?: `string`;         `fileId`?: `number`;         `mimetype`?: `string`;         `path`?: `string`;         `url`?: `string`;     }[];     `source`?: `string`;     `sourceSubmissionFileId`?: `number`;     `sponsor`?: `string`;     `subject`?: `string`;     `submissionId`: `number`;     `terms`?: `string`;     `updatedAt`?: `string`;     `uploaderUserId`: `number`;     `url`?: `string`;     `viewable`?: `boolean`; } | - |
| `put.parameters.body.schema._href`? | `string` | Format: uri |
| `put.parameters.body.schema.assocId`? | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `put.parameters.body.schema.assocType`? | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `put.parameters.body.schema.caption`? | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `put.parameters.body.schema.copyrightOwner`? | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `put.parameters.body.schema.createdAt`? | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `put.parameters.body.schema.creator`? | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `put.parameters.body.schema.credit`? | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `put.parameters.body.schema.dateCreated`? | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `put.parameters.body.schema.dependentFiles`? | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `put.parameters.body.schema.description`? | `string` | - |
| `put.parameters.body.schema.documentType`? | `string` | - |
| `put.parameters.body.schema.file`? | `string` | Format: binary |
| `put.parameters.body.schema.fileId` | `number` | - |
| `put.parameters.body.schema.fileStage` | `number` | - |
| `put.parameters.body.schema.genre`? | {     `dependent`?: `boolean`;     `id`?: `number`;     `name`?: `string`;     `supplementary`?: `boolean`; } | `Description`  The genre of this file, such as Article Text or Data Set. |
| `put.parameters.body.schema.genre.dependent`? | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `put.parameters.body.schema.genre.id`? | `number` | - |
| `put.parameters.body.schema.genre.name`? | `string` | - |
| `put.parameters.body.schema.genre.supplementary`? | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `put.parameters.body.schema.genreId`? | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `put.parameters.body.schema.id`? | `number` | - |
| `put.parameters.body.schema.language`? | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `put.parameters.body.schema.locale`? | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `put.parameters.body.schema.mimetype`? | `string` | - |
| `put.parameters.body.schema.name` | {  } | - |
| `put.parameters.body.schema.path`? | `string` | - |
| `put.parameters.body.schema.publisher`? | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `put.parameters.body.schema.revisions`? | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `put.parameters.body.schema.source`? | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `put.parameters.body.schema.sourceSubmissionFileId`? | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `put.parameters.body.schema.sponsor`? | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `put.parameters.body.schema.subject`? | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `put.parameters.body.schema.submissionId` | `number` | - |
| `put.parameters.body.schema.terms`? | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `put.parameters.body.schema.updatedAt`? | `string` | `Description`  When this object was last updated. |
| `put.parameters.body.schema.uploaderUserId` | `number` | - |
| `put.parameters.body.schema.url`? | `string` | - |
| `put.parameters.body.schema.viewable`? | `boolean` | - |
| `put.parameters.path` | {     `submissionId`: `number`; } | - |
| `put.parameters.path.submissionId` | `number` | Submission ID |
| `put.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `contextId`: `number`;             `currentPublicationId`?: `number`;             `dateLastActivity`?: `string`;             `dateSubmitted`?: `string`;             `id`?: `number`;             `lastModified`?: `string`;             `locale`?: `string`;             `publications`?: {                 `_href`?: `string`;                 `abstract`?: `string`;                 `authors`?: {                     `affiliation`?: `string`;                     `biography`?: `string`;                     `country`?: `string`;                     `email`: `string`;                     `familyName`?: `string`;                     `fullName`?: `string`;                     `givenName`: `string`;                     `id`?: `number`;                     `includeInBrowse`?: `boolean`;                     `orcid`?: `string`;                     `preferredPublicName`?: `string`;                     `publicationId`: `number`;                     `seq`?: `number`;                     `submissionLocale`?: `string`;                     `url`?: `string`;                     `userGroupId`: `number`;                     `userGroupName`?: `string`;                 }[];                 `authorsString`?: `string`;                 `authorsStringIncludeInBrowse`?: `string`;                 `authorsStringShort`?: `string`;                 `categoryIds`?: `number`[];                 `citations`?: `string`[];                 `citationsRaw`?: `string`;                 `copyrightHolder`?: `string`;                 `copyrightYear`?: `number`;                 `coverImage`?: {                     `altText`?: `string`;                     `dateUploaded`?: `string`;                     `temporaryFileId`?: `number`;                     `uploadName`?: `string`;                 };                 `coverage`?: `string`;                 `datePublished`?: `string`;                 `disciplines`?: `string`[];                 `doiId`?: `number`;                 `doiObject`?: {                     `contextId`: `number`;                     `doi`: `string`;                     `id`?: `number`;                     `resolvingUrl`?: `string`;                     `status`?: `number`;                 }[];                 `fullTitle`?: `string`;                 `id`?: `number`;                 `keywords`?: `string`[];                 `languages`?: `string`[];                 `lastModified`?: `string`;                 `licenseUrl`?: `string`;                 `locale`: `string`;                 `prefix`?: `string`;                 `primaryContactId`?: `number`;                 `pub-id::publisher-id`?: `string`;                 `rights`?: `string`;                 `seq`?: `number`;                 `source`?: `string`;                 `status`?: `number`;                 `subjects`?: `string`[];                 `submissionId`: `number`;                 `subtitle`?: {                 };                 `supportingAgencies`?: `string`[];                 `title`: {                 };                 `type`?: `string`;                 `urlPath`?: `string`;                 `urlPublished`?: `string`;                 `version`: `number`;             }[];             `reviewAssignments`?: {                 `dateDue`?: `number`;                 `dateResponseDue`?: `number`;                 `id`?: `number`;                 `isCurrentUserAssigned`?: `number`;                 `reviewRoundId`?: `number`;                 `round`?: `number`;                 `status`?: `number`;                 `statusLabel`?: `number`;             }[];             `reviewRounds`?: {                 `id`?: `number`;                 `round`?: `number`;                 `stageId`?: `number`;                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `sectionId`: `number`;             `stageId`?: `number`;             `stages`?: {                 `currentUserAssignedRoles`?: `number`[];                 `files`?: {                     `count`?: `number`;                 };                 `id`?: `number`;                 `isActiveStage`?: `boolean`;                 `label`?: `string`;                 `queries`?: `unknown`[];                 `status`?: `string`;                 `statusId`?: `number`;             }[];             `status`?: `number`;             `statusLabel`?: `string`;             `submissionProgress`?: `number`;             `urlAuthorWorkflow`?: `string`;             `urlEditorialWorkflow`?: `string`;             `urlPublished`?: `string`;             `urlWorkflow`?: `string`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `_href`?: `string`;         `contextId`: `number`;         `currentPublicationId`?: `number`;         `dateLastActivity`?: `string`;         `dateSubmitted`?: `string`;         `id`?: `number`;         `lastModified`?: `string`;         `locale`?: `string`;         `publications`?: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         }[];         `reviewAssignments`?: {             `dateDue`?: `number`;             `dateResponseDue`?: `number`;             `id`?: `number`;             `isCurrentUserAssigned`?: `number`;             `reviewRoundId`?: `number`;             `round`?: `number`;             `status`?: `number`;             `statusLabel`?: `number`;         }[];         `reviewRounds`?: {             `id`?: `number`;             `round`?: `number`;             `stageId`?: `number`;             `status`?: `string`;             `statusId`?: `number`;         }[];         `sectionId`: `number`;         `stageId`?: `number`;         `stages`?: {             `currentUserAssignedRoles`?: `number`[];             `files`?: {                 `count`?: `number`;             };             `id`?: `number`;             `isActiveStage`?: `boolean`;             `label`?: `string`;             `queries`?: `unknown`[];             `status`?: `string`;             `statusId`?: `number`;         }[];         `status`?: `number`;         `statusLabel`?: `string`;         `submissionProgress`?: `number`;         `urlAuthorWorkflow`?: `string`;         `urlEditorialWorkflow`?: `string`;         `urlPublished`?: `string`;         `urlWorkflow`?: `string`;     }; } | The submission that was just edited with the new values after the update has occurred. |
| `put.responses.200.schema` | {     `_href`?: `string`;     `contextId`: `number`;     `currentPublicationId`?: `number`;     `dateLastActivity`?: `string`;     `dateSubmitted`?: `string`;     `id`?: `number`;     `lastModified`?: `string`;     `locale`?: `string`;     `publications`?: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }[];     `reviewAssignments`?: {         `dateDue`?: `number`;         `dateResponseDue`?: `number`;         `id`?: `number`;         `isCurrentUserAssigned`?: `number`;         `reviewRoundId`?: `number`;         `round`?: `number`;         `status`?: `number`;         `statusLabel`?: `number`;     }[];     `reviewRounds`?: {         `id`?: `number`;         `round`?: `number`;         `stageId`?: `number`;         `status`?: `string`;         `statusId`?: `number`;     }[];     `sectionId`: `number`;     `stageId`?: `number`;     `stages`?: {         `currentUserAssignedRoles`?: `number`[];         `files`?: {             `count`?: `number`;         };         `id`?: `number`;         `isActiveStage`?: `boolean`;         `label`?: `string`;         `queries`?: `unknown`[];         `status`?: `string`;         `statusId`?: `number`;     }[];     `status`?: `number`;     `statusLabel`?: `string`;     `submissionProgress`?: `number`;     `urlAuthorWorkflow`?: `string`;     `urlEditorialWorkflow`?: `string`;     `urlPublished`?: `string`;     `urlWorkflow`?: `string`; } | - |
| `put.responses.200.schema._href`? | `string` | - |
| `put.responses.200.schema.contextId` | `number` | - |
| `put.responses.200.schema.currentPublicationId`? | `number` | `Description`  Which publication is the latest published version. |
| `put.responses.200.schema.dateLastActivity`? | `string` | `Description`  The last time activity was recorded related to this submission. |
| `put.responses.200.schema.dateSubmitted`? | `string` | - |
| `put.responses.200.schema.id`? | `number` | - |
| `put.responses.200.schema.lastModified`? | `string` | `Description`  The last time a modification was made to this submission or any of its associated objects. |
| `put.responses.200.schema.locale`? | `string` | `Description`  The primary language of this submission. |
| `put.responses.200.schema.publications`? | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; }[] | `Description`  A list of publications that have been created for this submission. |
| `put.responses.200.schema.reviewAssignments`? | {     `dateDue`?: `number`;     `dateResponseDue`?: `number`;     `id`?: `number`;     `isCurrentUserAssigned`?: `number`;     `reviewRoundId`?: `number`;     `round`?: `number`;     `status`?: `number`;     `statusLabel`?: `number`; }[] | `Description`  Information about pending and completed review assignments. |
| `put.responses.200.schema.reviewRounds`? | {     `id`?: `number`;     `round`?: `number`;     `stageId`?: `number`;     `status`?: `string`;     `statusId`?: `number`; }[] | `Description`  A list of review rounds that have been opened for this submission. |
| `put.responses.200.schema.sectionId` | `number` | `Description`  The section this submission should be assigned to. This can only be passed when creating a new submission and the data is assigned to the first publication. Edit the publication to change the `sectionId`. |
| `put.responses.200.schema.stageId`? | `number` | `Description`  The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.  `Default`  1 |
| `put.responses.200.schema.stages`? | {     `currentUserAssignedRoles`?: `number`[];     `files`?: {         `count`?: `number`;     };     `id`?: `number`;     `isActiveStage`?: `boolean`;     `label`?: `string`;     `queries`?: `unknown`[];     `status`?: `string`;     `statusId`?: `number`; }[] | `Description`  Key data about the status, files and discussions of each stage. |
| `put.responses.200.schema.status`? | `number` | `Description`  Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `put.responses.200.schema.statusLabel`? | `string` | `Description`  A human-readable version of the submission's status. It will be Published, Declined, Queued (still in the workflow) or Scheduled. |
| `put.responses.200.schema.submissionProgress`? | `number` | `Description`  This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.  `Default`  1 |
| `put.responses.200.schema.urlAuthorWorkflow`? | `string` | `Description`  A URL to the author's editorial workflow. |
| `put.responses.200.schema.urlEditorialWorkflow`? | `string` | `Description`  A URL to the editors' and assistants' editorial workflow. |
| `put.responses.200.schema.urlPublished`? | `string` | `Description`  A URL to the current publication or where it will be published. |
| `put.responses.200.schema.urlWorkflow`? | `string` | `Description`  A URL to the workflow most appropriate for the current user. It will match the `urlAuthorWorkflow` or `urlEditorialWorkflow. | | `put.responses.400`| {    `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. | | `put.responses.400.schema`| {  } | - |
|`put.responses.403`| {    `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | This error indicates one of the following: * You are not allowed to edit a submission from the site-wide endpoint. You must use a context (journal/press/server) endpoint. * You are not allowed to change the context (journal/press/server) of a submission. | | `put.responses.403.schema`| {    `error`?: `string`;     `errorMessage`?: `string`; } | - | | `put.responses.403.schema.error`? | `string`| - |
|`put.responses.403.schema.errorMessage`? | `string`| - |
|`put.responses.404`| {    `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The submission could not be found. | | `put.responses.404.schema`| {    `error`?: `string`;     `errorMessage`?: `string`; } | - | | `put.responses.404.schema.error`? | `string`| - |
|`put.responses.404.schema.errorMessage`? | `string\` | - |

Defined in:  [lib/swagger-types.ts:74](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L74)

##### `/submissions/\{submissionId}/files`

> `object`

```ts
{
    get: {
        parameters: {
            path: {
                submissionId: number;
            };
            query: {
                fileStages?: number[];
                reviewRoundIds?: number[];
            };
        };
        responses: {
            200: {
                schema: {
                    items: {
                        _href?: string;
                        assocId?: number;
                        assocType?: number;
                        caption?: string;
                        copyrightOwner?: string;
                        createdAt?: string;
                        creator?: string;
                        credit?: string;
                        dateCreated?: string;
                        dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
                        description?: string;
                        documentType?: string;
                        file?: string;
                        fileId: number;
                        fileStage: number;
                        genre?: {
                            dependent?: boolean;
                            id?: number;
                            name?: string;
                            supplementary?: boolean;
                        };
                        genreId?: number;
                        id?: number;
                        language?: string;
                        locale?: string;
                        mimetype?: string;
                        name: {
                        };
                        path?: string;
                        publisher?: string;
                        revisions?: {
                            documentType?: string;
                            fileId?: number;
                            mimetype?: string;
                            path?: string;
                            url?: string;
                        }[];
                        source?: string;
                        sourceSubmissionFileId?: number;
                        sponsor?: string;
                        subject?: string;
                        submissionId: number;
                        terms?: string;
                        updatedAt?: string;
                        uploaderUserId: number;
                        url?: string;
                        viewable?: boolean;
                    }[];
                    itemsMax: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    post: {
        parameters: {
            body: {
                schema: {
                    _href?: string;
                    assocId?: number;
                    assocType?: number;
                    caption?: string;
                    copyrightOwner?: string;
                    createdAt?: string;
                    creator?: string;
                    credit?: string;
                    dateCreated?: string;
                    dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
                    description?: string;
                    documentType?: string;
                    file?: string;
                    fileId: number;
                    fileStage: number;
                    genre?: {
                        dependent?: boolean;
                        id?: number;
                        name?: string;
                        supplementary?: boolean;
                    };
                    genreId?: number;
                    id?: number;
                    language?: string;
                    locale?: string;
                    mimetype?: string;
                    name: {
                    };
                    path?: string;
                    publisher?: string;
                    revisions?: {
                        documentType?: string;
                        fileId?: number;
                        mimetype?: string;
                        path?: string;
                        url?: string;
                    }[];
                    source?: string;
                    sourceSubmissionFileId?: number;
                    sponsor?: string;
                    subject?: string;
                    submissionId: number;
                    terms?: string;
                    updatedAt?: string;
                    uploaderUserId: number;
                    url?: string;
                    viewable?: boolean;
                };
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    assocId?: number;
                    assocType?: number;
                    caption?: string;
                    copyrightOwner?: string;
                    createdAt?: string;
                    creator?: string;
                    credit?: string;
                    dateCreated?: string;
                    dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
                    description?: string;
                    documentType?: string;
                    file?: string;
                    fileId: number;
                    fileStage: number;
                    genre?: {
                        dependent?: boolean;
                        id?: number;
                        name?: string;
                        supplementary?: boolean;
                    };
                    genreId?: number;
                    id?: number;
                    language?: string;
                    locale?: string;
                    mimetype?: string;
                    name: {
                    };
                    path?: string;
                    publisher?: string;
                    revisions?: {
                        documentType?: string;
                        fileId?: number;
                        mimetype?: string;
                        path?: string;
                        url?: string;
                    }[];
                    source?: string;
                    sourceSubmissionFileId?: number;
                    sponsor?: string;
                    subject?: string;
                    submissionId: number;
                    terms?: string;
                    updatedAt?: string;
                    uploaderUserId: number;
                    url?: string;
                    viewable?: boolean;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | This will return all of a submission's files that the user is allowed to access, except review attachments and discussion files. A user is allowed to access different file stages depending on their stage assignment. \* Managers, subeditors and assistants can access all file stages if they are assigned to the matching workflow stage. For example, an assistant assigned to the copyediting stage can access files in `SUBMISSION_FILE_COPYEDIT` and `SUBMISSION_FILE_FINAL`. \* Authors are restricted to the `SUBMISSION_FILE_SUBMISSION`, `SUBMISSION_FILE_REVIEW_REVISION`, `SUBMISSION_FILE_COPYEDIT` and `SUBMISSION_FILE_PROOF` file stages. For example, an author with access to the copyediting stage will have access to `SUBMISSION_FILE_COPYEDIT` (copyedited files) but not `SUBMISSION_FILE_FINAL` (draft files). \* Reviewers and readers are not allowed to access this endpoint. \* Managers who are not assigned to the submission are allowed to access all file stages as though they are assigned to every workflow stage. |
| `get.parameters` | {     `path`: {         `submissionId`: `number`;     };     `query`: {         `fileStages`?: `number`[];         `reviewRoundIds`?: `number`[];     }; } | - |
| `get.parameters.path` | {     `submissionId`: `number`; } | - |
| `get.parameters.path.submissionId` | `number` | Submission ID |
| `get.parameters.query` | {     `fileStages`?: `number`[];     `reviewRoundIds`?: `number`[]; } | - |
| `get.parameters.query.fileStages`? | `number`[] | Filter results by those submission files assigned to one or more file stage. One of the `SUBMISSION_FILE_` constants. |
| `get.parameters.query.reviewRoundIds`? | `number`[] | Filter results by those submission files assigned to one or more review rounds. |
| `get.responses` | {     `200`: {         `schema`: {             `items`: {                 `_href`?: `string`;                 `assocId`?: `number`;                 `assocType`?: `number`;                 `caption`?: `string`;                 `copyrightOwner`?: `string`;                 `createdAt`?: `string`;                 `creator`?: `string`;                 `credit`?: `string`;                 `dateCreated`?: `string`;                 `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];                 `description`?: `string`;                 `documentType`?: `string`;                 `file`?: `string`;                 `fileId`: `number`;                 `fileStage`: `number`;                 `genre`?: {                     `dependent`?: `boolean`;                     `id`?: `number`;                     `name`?: `string`;                     `supplementary`?: `boolean`;                 };                 `genreId`?: `number`;                 `id`?: `number`;                 `language`?: `string`;                 `locale`?: `string`;                 `mimetype`?: `string`;                 `name`: {                 };                 `path`?: `string`;                 `publisher`?: `string`;                 `revisions`?: {                     `documentType`?: `string`;                     `fileId`?: `number`;                     `mimetype`?: `string`;                     `path`?: `string`;                     `url`?: `string`;                 }[];                 `source`?: `string`;                 `sourceSubmissionFileId`?: `number`;                 `sponsor`?: `string`;                 `subject`?: `string`;                 `submissionId`: `number`;                 `terms`?: `string`;                 `updatedAt`?: `string`;                 `uploaderUserId`: `number`;                 `url`?: `string`;                 `viewable`?: `boolean`;             }[];             `itemsMax`: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `items`: {             `_href`?: `string`;             `assocId`?: `number`;             `assocType`?: `number`;             `caption`?: `string`;             `copyrightOwner`?: `string`;             `createdAt`?: `string`;             `creator`?: `string`;             `credit`?: `string`;             `dateCreated`?: `string`;             `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];             `description`?: `string`;             `documentType`?: `string`;             `file`?: `string`;             `fileId`: `number`;             `fileStage`: `number`;             `genre`?: {                 `dependent`?: `boolean`;                 `id`?: `number`;                 `name`?: `string`;                 `supplementary`?: `boolean`;             };             `genreId`?: `number`;             `id`?: `number`;             `language`?: `string`;             `locale`?: `string`;             `mimetype`?: `string`;             `name`: {             };             `path`?: `string`;             `publisher`?: `string`;             `revisions`?: {                 `documentType`?: `string`;                 `fileId`?: `number`;                 `mimetype`?: `string`;                 `path`?: `string`;                 `url`?: `string`;             }[];             `source`?: `string`;             `sourceSubmissionFileId`?: `number`;             `sponsor`?: `string`;             `subject`?: `string`;             `submissionId`: `number`;             `terms`?: `string`;             `updatedAt`?: `string`;             `uploaderUserId`: `number`;             `url`?: `string`;             `viewable`?: `boolean`;         }[];         `itemsMax`: `number`;     }; } | An array of the requested submission files. |
| `get.responses.200.schema` | {     `items`: {         `_href`?: `string`;         `assocId`?: `number`;         `assocType`?: `number`;         `caption`?: `string`;         `copyrightOwner`?: `string`;         `createdAt`?: `string`;         `creator`?: `string`;         `credit`?: `string`;         `dateCreated`?: `string`;         `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];         `description`?: `string`;         `documentType`?: `string`;         `file`?: `string`;         `fileId`: `number`;         `fileStage`: `number`;         `genre`?: {             `dependent`?: `boolean`;             `id`?: `number`;             `name`?: `string`;             `supplementary`?: `boolean`;         };         `genreId`?: `number`;         `id`?: `number`;         `language`?: `string`;         `locale`?: `string`;         `mimetype`?: `string`;         `name`: {         };         `path`?: `string`;         `publisher`?: `string`;         `revisions`?: {             `documentType`?: `string`;             `fileId`?: `number`;             `mimetype`?: `string`;             `path`?: `string`;             `url`?: `string`;         }[];         `source`?: `string`;         `sourceSubmissionFileId`?: `number`;         `sponsor`?: `string`;         `subject`?: `string`;         `submissionId`: `number`;         `terms`?: `string`;         `updatedAt`?: `string`;         `uploaderUserId`: `number`;         `url`?: `string`;         `viewable`?: `boolean`;     }[];     `itemsMax`: `number`; } | - |
| `get.responses.200.schema.items` | {     `_href`?: `string`;     `assocId`?: `number`;     `assocType`?: `number`;     `caption`?: `string`;     `copyrightOwner`?: `string`;     `createdAt`?: `string`;     `creator`?: `string`;     `credit`?: `string`;     `dateCreated`?: `string`;     `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];     `description`?: `string`;     `documentType`?: `string`;     `file`?: `string`;     `fileId`: `number`;     `fileStage`: `number`;     `genre`?: {         `dependent`?: `boolean`;         `id`?: `number`;         `name`?: `string`;         `supplementary`?: `boolean`;     };     `genreId`?: `number`;     `id`?: `number`;     `language`?: `string`;     `locale`?: `string`;     `mimetype`?: `string`;     `name`: {     };     `path`?: `string`;     `publisher`?: `string`;     `revisions`?: {         `documentType`?: `string`;         `fileId`?: `number`;         `mimetype`?: `string`;         `path`?: `string`;         `url`?: `string`;     }[];     `source`?: `string`;     `sourceSubmissionFileId`?: `number`;     `sponsor`?: `string`;     `subject`?: `string`;     `submissionId`: `number`;     `terms`?: `string`;     `updatedAt`?: `string`;     `uploaderUserId`: `number`;     `url`?: `string`;     `viewable`?: `boolean`; }[] | - |
| `get.responses.200.schema.itemsMax` | `number` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You do not have permission to view the requested files.  |Error Code|Description| |---|---| |`api.403.unauthorized`|You are not allowed to access files for this submission.| |`api.submissionFiles.403.unauthorizedFileStageId`|You are not allowed to access files in one or more of the `fileStages` requested.| |`api.submissionFiles.403.unauthorizedReviewRound`|You are not allowed to access files in one or more of the `reviewRoundIds` requested. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `post` | `object` | A user is allowed to upload to different file stages depending on their stage assignments. See the description for `GET /submission/{submissionId}/files` above. Once a submission has been completed, authors are no longer allowed to upload to `SUBMISSION_FILE_SUBMISSION`. Authors are not allowed to upload to `SUBMISSION_FILE_REVIEW_REVISION` until revisions have been requested. |
| `post.parameters` | {     `body`: {         `schema`: {             `_href`?: `string`;             `assocId`?: `number`;             `assocType`?: `number`;             `caption`?: `string`;             `copyrightOwner`?: `string`;             `createdAt`?: `string`;             `creator`?: `string`;             `credit`?: `string`;             `dateCreated`?: `string`;             `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];             `description`?: `string`;             `documentType`?: `string`;             `file`?: `string`;             `fileId`: `number`;             `fileStage`: `number`;             `genre`?: {                 `dependent`?: `boolean`;                 `id`?: `number`;                 `name`?: `string`;                 `supplementary`?: `boolean`;             };             `genreId`?: `number`;             `id`?: `number`;             `language`?: `string`;             `locale`?: `string`;             `mimetype`?: `string`;             `name`: {             };             `path`?: `string`;             `publisher`?: `string`;             `revisions`?: {                 `documentType`?: `string`;                 `fileId`?: `number`;                 `mimetype`?: `string`;                 `path`?: `string`;                 `url`?: `string`;             }[];             `source`?: `string`;             `sourceSubmissionFileId`?: `number`;             `sponsor`?: `string`;             `subject`?: `string`;             `submissionId`: `number`;             `terms`?: `string`;             `updatedAt`?: `string`;             `uploaderUserId`: `number`;             `url`?: `string`;             `viewable`?: `boolean`;         };     }; } | - |
| `post.parameters.body` | {     `schema`: {         `_href`?: `string`;         `assocId`?: `number`;         `assocType`?: `number`;         `caption`?: `string`;         `copyrightOwner`?: `string`;         `createdAt`?: `string`;         `creator`?: `string`;         `credit`?: `string`;         `dateCreated`?: `string`;         `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];         `description`?: `string`;         `documentType`?: `string`;         `file`?: `string`;         `fileId`: `number`;         `fileStage`: `number`;         `genre`?: {             `dependent`?: `boolean`;             `id`?: `number`;             `name`?: `string`;             `supplementary`?: `boolean`;         };         `genreId`?: `number`;         `id`?: `number`;         `language`?: `string`;         `locale`?: `string`;         `mimetype`?: `string`;         `name`: {         };         `path`?: `string`;         `publisher`?: `string`;         `revisions`?: {             `documentType`?: `string`;             `fileId`?: `number`;             `mimetype`?: `string`;             `path`?: `string`;             `url`?: `string`;         }[];         `source`?: `string`;         `sourceSubmissionFileId`?: `number`;         `sponsor`?: `string`;         `subject`?: `string`;         `submissionId`: `number`;         `terms`?: `string`;         `updatedAt`?: `string`;         `uploaderUserId`: `number`;         `url`?: `string`;         `viewable`?: `boolean`;     }; } | - |
| `post.parameters.body.schema` | {     `_href`?: `string`;     `assocId`?: `number`;     `assocType`?: `number`;     `caption`?: `string`;     `copyrightOwner`?: `string`;     `createdAt`?: `string`;     `creator`?: `string`;     `credit`?: `string`;     `dateCreated`?: `string`;     `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];     `description`?: `string`;     `documentType`?: `string`;     `file`?: `string`;     `fileId`: `number`;     `fileStage`: `number`;     `genre`?: {         `dependent`?: `boolean`;         `id`?: `number`;         `name`?: `string`;         `supplementary`?: `boolean`;     };     `genreId`?: `number`;     `id`?: `number`;     `language`?: `string`;     `locale`?: `string`;     `mimetype`?: `string`;     `name`: {     };     `path`?: `string`;     `publisher`?: `string`;     `revisions`?: {         `documentType`?: `string`;         `fileId`?: `number`;         `mimetype`?: `string`;         `path`?: `string`;         `url`?: `string`;     }[];     `source`?: `string`;     `sourceSubmissionFileId`?: `number`;     `sponsor`?: `string`;     `subject`?: `string`;     `submissionId`: `number`;     `terms`?: `string`;     `updatedAt`?: `string`;     `uploaderUserId`: `number`;     `url`?: `string`;     `viewable`?: `boolean`; } | - |
| `post.parameters.body.schema._href`? | `string` | Format: uri |
| `post.parameters.body.schema.assocId`? | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `post.parameters.body.schema.assocType`? | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `post.parameters.body.schema.caption`? | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `post.parameters.body.schema.copyrightOwner`? | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `post.parameters.body.schema.createdAt`? | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `post.parameters.body.schema.creator`? | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `post.parameters.body.schema.credit`? | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `post.parameters.body.schema.dateCreated`? | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `post.parameters.body.schema.dependentFiles`? | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `post.parameters.body.schema.description`? | `string` | - |
| `post.parameters.body.schema.documentType`? | `string` | - |
| `post.parameters.body.schema.file`? | `string` | Format: binary |
| `post.parameters.body.schema.fileId` | `number` | - |
| `post.parameters.body.schema.fileStage` | `number` | - |
| `post.parameters.body.schema.genre`? | {     `dependent`?: `boolean`;     `id`?: `number`;     `name`?: `string`;     `supplementary`?: `boolean`; } | `Description`  The genre of this file, such as Article Text or Data Set. |
| `post.parameters.body.schema.genre.dependent`? | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `post.parameters.body.schema.genre.id`? | `number` | - |
| `post.parameters.body.schema.genre.name`? | `string` | - |
| `post.parameters.body.schema.genre.supplementary`? | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `post.parameters.body.schema.genreId`? | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `post.parameters.body.schema.id`? | `number` | - |
| `post.parameters.body.schema.language`? | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `post.parameters.body.schema.locale`? | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `post.parameters.body.schema.mimetype`? | `string` | - |
| `post.parameters.body.schema.name` | {  } | - |
| `post.parameters.body.schema.path`? | `string` | - |
| `post.parameters.body.schema.publisher`? | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `post.parameters.body.schema.revisions`? | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `post.parameters.body.schema.source`? | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `post.parameters.body.schema.sourceSubmissionFileId`? | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `post.parameters.body.schema.sponsor`? | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `post.parameters.body.schema.subject`? | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `post.parameters.body.schema.submissionId` | `number` | - |
| `post.parameters.body.schema.terms`? | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `post.parameters.body.schema.updatedAt`? | `string` | `Description`  When this object was last updated. |
| `post.parameters.body.schema.uploaderUserId` | `number` | - |
| `post.parameters.body.schema.url`? | `string` | - |
| `post.parameters.body.schema.viewable`? | `boolean` | - |
| `post.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `assocId`?: `number`;             `assocType`?: `number`;             `caption`?: `string`;             `copyrightOwner`?: `string`;             `createdAt`?: `string`;             `creator`?: `string`;             `credit`?: `string`;             `dateCreated`?: `string`;             `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];             `description`?: `string`;             `documentType`?: `string`;             `file`?: `string`;             `fileId`: `number`;             `fileStage`: `number`;             `genre`?: {                 `dependent`?: `boolean`;                 `id`?: `number`;                 `name`?: `string`;                 `supplementary`?: `boolean`;             };             `genreId`?: `number`;             `id`?: `number`;             `language`?: `string`;             `locale`?: `string`;             `mimetype`?: `string`;             `name`: {             };             `path`?: `string`;             `publisher`?: `string`;             `revisions`?: {                 `documentType`?: `string`;                 `fileId`?: `number`;                 `mimetype`?: `string`;                 `path`?: `string`;                 `url`?: `string`;             }[];             `source`?: `string`;             `sourceSubmissionFileId`?: `number`;             `sponsor`?: `string`;             `subject`?: `string`;             `submissionId`: `number`;             `terms`?: `string`;             `updatedAt`?: `string`;             `uploaderUserId`: `number`;             `url`?: `string`;             `viewable`?: `boolean`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `post.responses.200` | {     `schema`: {         `_href`?: `string`;         `assocId`?: `number`;         `assocType`?: `number`;         `caption`?: `string`;         `copyrightOwner`?: `string`;         `createdAt`?: `string`;         `creator`?: `string`;         `credit`?: `string`;         `dateCreated`?: `string`;         `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];         `description`?: `string`;         `documentType`?: `string`;         `file`?: `string`;         `fileId`: `number`;         `fileStage`: `number`;         `genre`?: {             `dependent`?: `boolean`;             `id`?: `number`;             `name`?: `string`;             `supplementary`?: `boolean`;         };         `genreId`?: `number`;         `id`?: `number`;         `language`?: `string`;         `locale`?: `string`;         `mimetype`?: `string`;         `name`: {         };         `path`?: `string`;         `publisher`?: `string`;         `revisions`?: {             `documentType`?: `string`;             `fileId`?: `number`;             `mimetype`?: `string`;             `path`?: `string`;             `url`?: `string`;         }[];         `source`?: `string`;         `sourceSubmissionFileId`?: `number`;         `sponsor`?: `string`;         `subject`?: `string`;         `submissionId`: `number`;         `terms`?: `string`;         `updatedAt`?: `string`;         `uploaderUserId`: `number`;         `url`?: `string`;         `viewable`?: `boolean`;     }; } | The new submission file. |
| `post.responses.200.schema` | {     `_href`?: `string`;     `assocId`?: `number`;     `assocType`?: `number`;     `caption`?: `string`;     `copyrightOwner`?: `string`;     `createdAt`?: `string`;     `creator`?: `string`;     `credit`?: `string`;     `dateCreated`?: `string`;     `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];     `description`?: `string`;     `documentType`?: `string`;     `file`?: `string`;     `fileId`: `number`;     `fileStage`: `number`;     `genre`?: {         `dependent`?: `boolean`;         `id`?: `number`;         `name`?: `string`;         `supplementary`?: `boolean`;     };     `genreId`?: `number`;     `id`?: `number`;     `language`?: `string`;     `locale`?: `string`;     `mimetype`?: `string`;     `name`: {     };     `path`?: `string`;     `publisher`?: `string`;     `revisions`?: {         `documentType`?: `string`;         `fileId`?: `number`;         `mimetype`?: `string`;         `path`?: `string`;         `url`?: `string`;     }[];     `source`?: `string`;     `sourceSubmissionFileId`?: `number`;     `sponsor`?: `string`;     `subject`?: `string`;     `submissionId`: `number`;     `terms`?: `string`;     `updatedAt`?: `string`;     `uploaderUserId`: `number`;     `url`?: `string`;     `viewable`?: `boolean`; } | - |
| `post.responses.200.schema._href`? | `string` | Format: uri |
| `post.responses.200.schema.assocId`? | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `post.responses.200.schema.assocType`? | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `post.responses.200.schema.caption`? | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `post.responses.200.schema.copyrightOwner`? | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `post.responses.200.schema.createdAt`? | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `post.responses.200.schema.creator`? | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `post.responses.200.schema.credit`? | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `post.responses.200.schema.dateCreated`? | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `post.responses.200.schema.dependentFiles`? | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `post.responses.200.schema.description`? | `string` | - |
| `post.responses.200.schema.documentType`? | `string` | - |
| `post.responses.200.schema.file`? | `string` | Format: binary |
| `post.responses.200.schema.fileId` | `number` | - |
| `post.responses.200.schema.fileStage` | `number` | - |
| `post.responses.200.schema.genre`? | {     `dependent`?: `boolean`;     `id`?: `number`;     `name`?: `string`;     `supplementary`?: `boolean`; } | `Description`  The genre of this file, such as Article Text or Data Set. |
| `post.responses.200.schema.genre.dependent`? | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `post.responses.200.schema.genre.id`? | `number` | - |
| `post.responses.200.schema.genre.name`? | `string` | - |
| `post.responses.200.schema.genre.supplementary`? | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `post.responses.200.schema.genreId`? | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `post.responses.200.schema.id`? | `number` | - |
| `post.responses.200.schema.language`? | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `post.responses.200.schema.locale`? | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `post.responses.200.schema.mimetype`? | `string` | - |
| `post.responses.200.schema.name` | {  } | - |
| `post.responses.200.schema.path`? | `string` | - |
| `post.responses.200.schema.publisher`? | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `post.responses.200.schema.revisions`? | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `post.responses.200.schema.source`? | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `post.responses.200.schema.sourceSubmissionFileId`? | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `post.responses.200.schema.sponsor`? | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `post.responses.200.schema.subject`? | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `post.responses.200.schema.submissionId` | `number` | - |
| `post.responses.200.schema.terms`? | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `post.responses.200.schema.updatedAt`? | `string` | `Description`  When this object was last updated. |
| `post.responses.200.schema.uploaderUserId` | `number` | - |
| `post.responses.200.schema.url`? | `string` | - |
| `post.responses.200.schema.viewable`? | `boolean` | - |
| `post.responses.400` | {     `schema`: {     }; } | There was an error when uploading the file or the values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `post.responses.400.schema` | {  } | - |
| `post.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You are not allowed to upload a file to the specified file stage of this submission. |
| `post.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.403.schema.error`? | `string` | - |
| `post.responses.403.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:160](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L160)

##### `/submissions/\{submissionId}/files/\{submissionFileId}`

> `object`

```ts
{
    delete: {
        parameters: {
            path: {
                submissionFileId: number;
                submissionId: number;
            };
            query: {
                stageId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    assocId?: number;
                    assocType?: number;
                    caption?: string;
                    copyrightOwner?: string;
                    createdAt?: string;
                    creator?: string;
                    credit?: string;
                    dateCreated?: string;
                    dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
                    description?: string;
                    documentType?: string;
                    file?: string;
                    fileId: number;
                    fileStage: number;
                    genre?: {
                        dependent?: boolean;
                        id?: number;
                        name?: string;
                        supplementary?: boolean;
                    };
                    genreId?: number;
                    id?: number;
                    language?: string;
                    locale?: string;
                    mimetype?: string;
                    name: {
                    };
                    path?: string;
                    publisher?: string;
                    revisions?: {
                        documentType?: string;
                        fileId?: number;
                        mimetype?: string;
                        path?: string;
                        url?: string;
                    }[];
                    source?: string;
                    sourceSubmissionFileId?: number;
                    sponsor?: string;
                    subject?: string;
                    submissionId: number;
                    terms?: string;
                    updatedAt?: string;
                    uploaderUserId: number;
                    url?: string;
                    viewable?: boolean;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    get: {
        parameters: {
            path: {
                submissionFileId: number;
                submissionId: number;
            };
            query: {
                stageId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    assocId?: number;
                    assocType?: number;
                    caption?: string;
                    copyrightOwner?: string;
                    createdAt?: string;
                    creator?: string;
                    credit?: string;
                    dateCreated?: string;
                    dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
                    description?: string;
                    documentType?: string;
                    file?: string;
                    fileId: number;
                    fileStage: number;
                    genre?: {
                        dependent?: boolean;
                        id?: number;
                        name?: string;
                        supplementary?: boolean;
                    };
                    genreId?: number;
                    id?: number;
                    language?: string;
                    locale?: string;
                    mimetype?: string;
                    name: {
                    };
                    path?: string;
                    publisher?: string;
                    revisions?: {
                        documentType?: string;
                        fileId?: number;
                        mimetype?: string;
                        path?: string;
                        url?: string;
                    }[];
                    source?: string;
                    sourceSubmissionFileId?: number;
                    sponsor?: string;
                    subject?: string;
                    submissionId: number;
                    terms?: string;
                    updatedAt?: string;
                    uploaderUserId: number;
                    url?: string;
                    viewable?: boolean;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    put: {
        parameters: {
            body: {
                schema: {
                    _href?: string;
                    assocId?: number;
                    assocType?: number;
                    caption?: string;
                    copyrightOwner?: string;
                    createdAt?: string;
                    creator?: string;
                    credit?: string;
                    dateCreated?: string;
                    dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
                    description?: string;
                    documentType?: string;
                    file?: string;
                    fileId: number;
                    fileStage: number;
                    genre?: {
                        dependent?: boolean;
                        id?: number;
                        name?: string;
                        supplementary?: boolean;
                    };
                    genreId?: number;
                    id?: number;
                    language?: string;
                    locale?: string;
                    mimetype?: string;
                    name: {
                    };
                    path?: string;
                    publisher?: string;
                    revisions?: {
                        documentType?: string;
                        fileId?: number;
                        mimetype?: string;
                        path?: string;
                        url?: string;
                    }[];
                    source?: string;
                    sourceSubmissionFileId?: number;
                    sponsor?: string;
                    subject?: string;
                    submissionId: number;
                    terms?: string;
                    updatedAt?: string;
                    uploaderUserId: number;
                    url?: string;
                    viewable?: boolean;
                };
            };
            path: {
                submissionFileId: number;
                submissionId: number;
            };
            query: {
                stageId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    assocId?: number;
                    assocType?: number;
                    caption?: string;
                    copyrightOwner?: string;
                    createdAt?: string;
                    creator?: string;
                    credit?: string;
                    dateCreated?: string;
                    dependentFiles?: { _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }[];
                    description?: string;
                    documentType?: string;
                    file?: string;
                    fileId: number;
                    fileStage: number;
                    genre?: {
                        dependent?: boolean;
                        id?: number;
                        name?: string;
                        supplementary?: boolean;
                    };
                    genreId?: number;
                    id?: number;
                    language?: string;
                    locale?: string;
                    mimetype?: string;
                    name: {
                    };
                    path?: string;
                    publisher?: string;
                    revisions?: {
                        documentType?: string;
                        fileId?: number;
                        mimetype?: string;
                        path?: string;
                        url?: string;
                    }[];
                    source?: string;
                    sourceSubmissionFileId?: number;
                    sponsor?: string;
                    subject?: string;
                    submissionId: number;
                    terms?: string;
                    updatedAt?: string;
                    uploaderUserId: number;
                    url?: string;
                    viewable?: boolean;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `delete` | `object` | You must pass the correct `stageId` when deleting a file. |
| `delete.parameters` | {     `path`: {         `submissionFileId`: `number`;         `submissionId`: `number`;     };     `query`: {         `stageId`: `number`;     }; } | - |
| `delete.parameters.path` | {     `submissionFileId`: `number`;     `submissionId`: `number`; } | - |
| `delete.parameters.path.submissionFileId` | `number` | Submission File ID |
| `delete.parameters.path.submissionId` | `number` | Submission ID |
| `delete.parameters.query` | {     `stageId`: `number`; } | - |
| `delete.parameters.query.stageId` | `number` | The workflow stage id of the file to be edited. For example, `WORKFLOW_STAGE_ID_PRODUCTION`. |
| `delete.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `assocId`?: `number`;             `assocType`?: `number`;             `caption`?: `string`;             `copyrightOwner`?: `string`;             `createdAt`?: `string`;             `creator`?: `string`;             `credit`?: `string`;             `dateCreated`?: `string`;             `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];             `description`?: `string`;             `documentType`?: `string`;             `file`?: `string`;             `fileId`: `number`;             `fileStage`: `number`;             `genre`?: {                 `dependent`?: `boolean`;                 `id`?: `number`;                 `name`?: `string`;                 `supplementary`?: `boolean`;             };             `genreId`?: `number`;             `id`?: `number`;             `language`?: `string`;             `locale`?: `string`;             `mimetype`?: `string`;             `name`: {             };             `path`?: `string`;             `publisher`?: `string`;             `revisions`?: {                 `documentType`?: `string`;                 `fileId`?: `number`;                 `mimetype`?: `string`;                 `path`?: `string`;                 `url`?: `string`;             }[];             `source`?: `string`;             `sourceSubmissionFileId`?: `number`;             `sponsor`?: `string`;             `subject`?: `string`;             `submissionId`: `number`;             `terms`?: `string`;             `updatedAt`?: `string`;             `uploaderUserId`: `number`;             `url`?: `string`;             `viewable`?: `boolean`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `delete.responses.200` | {     `schema`: {         `_href`?: `string`;         `assocId`?: `number`;         `assocType`?: `number`;         `caption`?: `string`;         `copyrightOwner`?: `string`;         `createdAt`?: `string`;         `creator`?: `string`;         `credit`?: `string`;         `dateCreated`?: `string`;         `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];         `description`?: `string`;         `documentType`?: `string`;         `file`?: `string`;         `fileId`: `number`;         `fileStage`: `number`;         `genre`?: {             `dependent`?: `boolean`;             `id`?: `number`;             `name`?: `string`;             `supplementary`?: `boolean`;         };         `genreId`?: `number`;         `id`?: `number`;         `language`?: `string`;         `locale`?: `string`;         `mimetype`?: `string`;         `name`: {         };         `path`?: `string`;         `publisher`?: `string`;         `revisions`?: {             `documentType`?: `string`;             `fileId`?: `number`;             `mimetype`?: `string`;             `path`?: `string`;             `url`?: `string`;         }[];         `source`?: `string`;         `sourceSubmissionFileId`?: `number`;         `sponsor`?: `string`;         `subject`?: `string`;         `submissionId`: `number`;         `terms`?: `string`;         `updatedAt`?: `string`;         `uploaderUserId`: `number`;         `url`?: `string`;         `viewable`?: `boolean`;     }; } | The submission file that was just deleted. |
| `delete.responses.200.schema` | {     `_href`?: `string`;     `assocId`?: `number`;     `assocType`?: `number`;     `caption`?: `string`;     `copyrightOwner`?: `string`;     `createdAt`?: `string`;     `creator`?: `string`;     `credit`?: `string`;     `dateCreated`?: `string`;     `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];     `description`?: `string`;     `documentType`?: `string`;     `file`?: `string`;     `fileId`: `number`;     `fileStage`: `number`;     `genre`?: {         `dependent`?: `boolean`;         `id`?: `number`;         `name`?: `string`;         `supplementary`?: `boolean`;     };     `genreId`?: `number`;     `id`?: `number`;     `language`?: `string`;     `locale`?: `string`;     `mimetype`?: `string`;     `name`: {     };     `path`?: `string`;     `publisher`?: `string`;     `revisions`?: {         `documentType`?: `string`;         `fileId`?: `number`;         `mimetype`?: `string`;         `path`?: `string`;         `url`?: `string`;     }[];     `source`?: `string`;     `sourceSubmissionFileId`?: `number`;     `sponsor`?: `string`;     `subject`?: `string`;     `submissionId`: `number`;     `terms`?: `string`;     `updatedAt`?: `string`;     `uploaderUserId`: `number`;     `url`?: `string`;     `viewable`?: `boolean`; } | - |
| `delete.responses.200.schema._href`? | `string` | Format: uri |
| `delete.responses.200.schema.assocId`? | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `delete.responses.200.schema.assocType`? | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `delete.responses.200.schema.caption`? | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `delete.responses.200.schema.copyrightOwner`? | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `delete.responses.200.schema.createdAt`? | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `delete.responses.200.schema.creator`? | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `delete.responses.200.schema.credit`? | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `delete.responses.200.schema.dateCreated`? | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `delete.responses.200.schema.dependentFiles`? | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `delete.responses.200.schema.description`? | `string` | - |
| `delete.responses.200.schema.documentType`? | `string` | - |
| `delete.responses.200.schema.file`? | `string` | Format: binary |
| `delete.responses.200.schema.fileId` | `number` | - |
| `delete.responses.200.schema.fileStage` | `number` | - |
| `delete.responses.200.schema.genre`? | {     `dependent`?: `boolean`;     `id`?: `number`;     `name`?: `string`;     `supplementary`?: `boolean`; } | `Description`  The genre of this file, such as Article Text or Data Set. |
| `delete.responses.200.schema.genre.dependent`? | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `delete.responses.200.schema.genre.id`? | `number` | - |
| `delete.responses.200.schema.genre.name`? | `string` | - |
| `delete.responses.200.schema.genre.supplementary`? | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `delete.responses.200.schema.genreId`? | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `delete.responses.200.schema.id`? | `number` | - |
| `delete.responses.200.schema.language`? | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `delete.responses.200.schema.locale`? | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `delete.responses.200.schema.mimetype`? | `string` | - |
| `delete.responses.200.schema.name` | {  } | - |
| `delete.responses.200.schema.path`? | `string` | - |
| `delete.responses.200.schema.publisher`? | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `delete.responses.200.schema.revisions`? | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `delete.responses.200.schema.source`? | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `delete.responses.200.schema.sourceSubmissionFileId`? | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `delete.responses.200.schema.sponsor`? | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `delete.responses.200.schema.subject`? | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `delete.responses.200.schema.submissionId` | `number` | - |
| `delete.responses.200.schema.terms`? | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `delete.responses.200.schema.updatedAt`? | `string` | `Description`  When this object was last updated. |
| `delete.responses.200.schema.uploaderUserId` | `number` | - |
| `delete.responses.200.schema.url`? | `string` | - |
| `delete.responses.200.schema.viewable`? | `boolean` | - |
| `delete.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You are not allowed to delete the requested file. |
| `delete.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.403.schema.error`? | `string` | - |
| `delete.responses.403.schema.errorMessage`? | `string` | - |
| `get` | `object` | You must pass the correct `stageId` when requesting a file. |
| `get.parameters` | {     `path`: {         `submissionFileId`: `number`;         `submissionId`: `number`;     };     `query`: {         `stageId`: `number`;     }; } | - |
| `get.parameters.path` | {     `submissionFileId`: `number`;     `submissionId`: `number`; } | - |
| `get.parameters.path.submissionFileId` | `number` | Submission File ID |
| `get.parameters.path.submissionId` | `number` | Submission ID |
| `get.parameters.query` | {     `stageId`: `number`; } | - |
| `get.parameters.query.stageId` | `number` | The workflow stage id of the requested file. For example, `WORKFLOW_STAGE_ID_PRODUCTION`. |
| `get.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `assocId`?: `number`;             `assocType`?: `number`;             `caption`?: `string`;             `copyrightOwner`?: `string`;             `createdAt`?: `string`;             `creator`?: `string`;             `credit`?: `string`;             `dateCreated`?: `string`;             `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];             `description`?: `string`;             `documentType`?: `string`;             `file`?: `string`;             `fileId`: `number`;             `fileStage`: `number`;             `genre`?: {                 `dependent`?: `boolean`;                 `id`?: `number`;                 `name`?: `string`;                 `supplementary`?: `boolean`;             };             `genreId`?: `number`;             `id`?: `number`;             `language`?: `string`;             `locale`?: `string`;             `mimetype`?: `string`;             `name`: {             };             `path`?: `string`;             `publisher`?: `string`;             `revisions`?: {                 `documentType`?: `string`;                 `fileId`?: `number`;                 `mimetype`?: `string`;                 `path`?: `string`;                 `url`?: `string`;             }[];             `source`?: `string`;             `sourceSubmissionFileId`?: `number`;             `sponsor`?: `string`;             `subject`?: `string`;             `submissionId`: `number`;             `terms`?: `string`;             `updatedAt`?: `string`;             `uploaderUserId`: `number`;             `url`?: `string`;             `viewable`?: `boolean`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `_href`?: `string`;         `assocId`?: `number`;         `assocType`?: `number`;         `caption`?: `string`;         `copyrightOwner`?: `string`;         `createdAt`?: `string`;         `creator`?: `string`;         `credit`?: `string`;         `dateCreated`?: `string`;         `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];         `description`?: `string`;         `documentType`?: `string`;         `file`?: `string`;         `fileId`: `number`;         `fileStage`: `number`;         `genre`?: {             `dependent`?: `boolean`;             `id`?: `number`;             `name`?: `string`;             `supplementary`?: `boolean`;         };         `genreId`?: `number`;         `id`?: `number`;         `language`?: `string`;         `locale`?: `string`;         `mimetype`?: `string`;         `name`: {         };         `path`?: `string`;         `publisher`?: `string`;         `revisions`?: {             `documentType`?: `string`;             `fileId`?: `number`;             `mimetype`?: `string`;             `path`?: `string`;             `url`?: `string`;         }[];         `source`?: `string`;         `sourceSubmissionFileId`?: `number`;         `sponsor`?: `string`;         `subject`?: `string`;         `submissionId`: `number`;         `terms`?: `string`;         `updatedAt`?: `string`;         `uploaderUserId`: `number`;         `url`?: `string`;         `viewable`?: `boolean`;     }; } | Details of the submission file. |
| `get.responses.200.schema` | {     `_href`?: `string`;     `assocId`?: `number`;     `assocType`?: `number`;     `caption`?: `string`;     `copyrightOwner`?: `string`;     `createdAt`?: `string`;     `creator`?: `string`;     `credit`?: `string`;     `dateCreated`?: `string`;     `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];     `description`?: `string`;     `documentType`?: `string`;     `file`?: `string`;     `fileId`: `number`;     `fileStage`: `number`;     `genre`?: {         `dependent`?: `boolean`;         `id`?: `number`;         `name`?: `string`;         `supplementary`?: `boolean`;     };     `genreId`?: `number`;     `id`?: `number`;     `language`?: `string`;     `locale`?: `string`;     `mimetype`?: `string`;     `name`: {     };     `path`?: `string`;     `publisher`?: `string`;     `revisions`?: {         `documentType`?: `string`;         `fileId`?: `number`;         `mimetype`?: `string`;         `path`?: `string`;         `url`?: `string`;     }[];     `source`?: `string`;     `sourceSubmissionFileId`?: `number`;     `sponsor`?: `string`;     `subject`?: `string`;     `submissionId`: `number`;     `terms`?: `string`;     `updatedAt`?: `string`;     `uploaderUserId`: `number`;     `url`?: `string`;     `viewable`?: `boolean`; } | - |
| `get.responses.200.schema._href`? | `string` | Format: uri |
| `get.responses.200.schema.assocId`? | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `get.responses.200.schema.assocType`? | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `get.responses.200.schema.caption`? | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `get.responses.200.schema.copyrightOwner`? | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `get.responses.200.schema.createdAt`? | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `get.responses.200.schema.creator`? | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `get.responses.200.schema.credit`? | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `get.responses.200.schema.dateCreated`? | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `get.responses.200.schema.dependentFiles`? | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `get.responses.200.schema.description`? | `string` | - |
| `get.responses.200.schema.documentType`? | `string` | - |
| `get.responses.200.schema.file`? | `string` | Format: binary |
| `get.responses.200.schema.fileId` | `number` | - |
| `get.responses.200.schema.fileStage` | `number` | - |
| `get.responses.200.schema.genre`? | {     `dependent`?: `boolean`;     `id`?: `number`;     `name`?: `string`;     `supplementary`?: `boolean`; } | `Description`  The genre of this file, such as Article Text or Data Set. |
| `get.responses.200.schema.genre.dependent`? | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `get.responses.200.schema.genre.id`? | `number` | - |
| `get.responses.200.schema.genre.name`? | `string` | - |
| `get.responses.200.schema.genre.supplementary`? | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `get.responses.200.schema.genreId`? | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `get.responses.200.schema.id`? | `number` | - |
| `get.responses.200.schema.language`? | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `get.responses.200.schema.locale`? | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `get.responses.200.schema.mimetype`? | `string` | - |
| `get.responses.200.schema.name` | {  } | - |
| `get.responses.200.schema.path`? | `string` | - |
| `get.responses.200.schema.publisher`? | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `get.responses.200.schema.revisions`? | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `get.responses.200.schema.source`? | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `get.responses.200.schema.sourceSubmissionFileId`? | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `get.responses.200.schema.sponsor`? | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `get.responses.200.schema.subject`? | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `get.responses.200.schema.submissionId` | `number` | - |
| `get.responses.200.schema.terms`? | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `get.responses.200.schema.updatedAt`? | `string` | `Description`  When this object was last updated. |
| `get.responses.200.schema.uploaderUserId` | `number` | - |
| `get.responses.200.schema.url`? | `string` | - |
| `get.responses.200.schema.viewable`? | `boolean` | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You are not allowed to access the requested file. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `put` | `object` | You must pass the correct `stageId` when editing a file. |
| `put.parameters` | {     `body`: {         `schema`: {             `_href`?: `string`;             `assocId`?: `number`;             `assocType`?: `number`;             `caption`?: `string`;             `copyrightOwner`?: `string`;             `createdAt`?: `string`;             `creator`?: `string`;             `credit`?: `string`;             `dateCreated`?: `string`;             `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];             `description`?: `string`;             `documentType`?: `string`;             `file`?: `string`;             `fileId`: `number`;             `fileStage`: `number`;             `genre`?: {                 `dependent`?: `boolean`;                 `id`?: `number`;                 `name`?: `string`;                 `supplementary`?: `boolean`;             };             `genreId`?: `number`;             `id`?: `number`;             `language`?: `string`;             `locale`?: `string`;             `mimetype`?: `string`;             `name`: {             };             `path`?: `string`;             `publisher`?: `string`;             `revisions`?: {                 `documentType`?: `string`;                 `fileId`?: `number`;                 `mimetype`?: `string`;                 `path`?: `string`;                 `url`?: `string`;             }[];             `source`?: `string`;             `sourceSubmissionFileId`?: `number`;             `sponsor`?: `string`;             `subject`?: `string`;             `submissionId`: `number`;             `terms`?: `string`;             `updatedAt`?: `string`;             `uploaderUserId`: `number`;             `url`?: `string`;             `viewable`?: `boolean`;         };     };     `path`: {         `submissionFileId`: `number`;         `submissionId`: `number`;     };     `query`: {         `stageId`: `number`;     }; } | - |
| `put.parameters.body` | {     `schema`: {         `_href`?: `string`;         `assocId`?: `number`;         `assocType`?: `number`;         `caption`?: `string`;         `copyrightOwner`?: `string`;         `createdAt`?: `string`;         `creator`?: `string`;         `credit`?: `string`;         `dateCreated`?: `string`;         `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];         `description`?: `string`;         `documentType`?: `string`;         `file`?: `string`;         `fileId`: `number`;         `fileStage`: `number`;         `genre`?: {             `dependent`?: `boolean`;             `id`?: `number`;             `name`?: `string`;             `supplementary`?: `boolean`;         };         `genreId`?: `number`;         `id`?: `number`;         `language`?: `string`;         `locale`?: `string`;         `mimetype`?: `string`;         `name`: {         };         `path`?: `string`;         `publisher`?: `string`;         `revisions`?: {             `documentType`?: `string`;             `fileId`?: `number`;             `mimetype`?: `string`;             `path`?: `string`;             `url`?: `string`;         }[];         `source`?: `string`;         `sourceSubmissionFileId`?: `number`;         `sponsor`?: `string`;         `subject`?: `string`;         `submissionId`: `number`;         `terms`?: `string`;         `updatedAt`?: `string`;         `uploaderUserId`: `number`;         `url`?: `string`;         `viewable`?: `boolean`;     }; } | - |
| `put.parameters.body.schema` | {     `_href`?: `string`;     `assocId`?: `number`;     `assocType`?: `number`;     `caption`?: `string`;     `copyrightOwner`?: `string`;     `createdAt`?: `string`;     `creator`?: `string`;     `credit`?: `string`;     `dateCreated`?: `string`;     `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];     `description`?: `string`;     `documentType`?: `string`;     `file`?: `string`;     `fileId`: `number`;     `fileStage`: `number`;     `genre`?: {         `dependent`?: `boolean`;         `id`?: `number`;         `name`?: `string`;         `supplementary`?: `boolean`;     };     `genreId`?: `number`;     `id`?: `number`;     `language`?: `string`;     `locale`?: `string`;     `mimetype`?: `string`;     `name`: {     };     `path`?: `string`;     `publisher`?: `string`;     `revisions`?: {         `documentType`?: `string`;         `fileId`?: `number`;         `mimetype`?: `string`;         `path`?: `string`;         `url`?: `string`;     }[];     `source`?: `string`;     `sourceSubmissionFileId`?: `number`;     `sponsor`?: `string`;     `subject`?: `string`;     `submissionId`: `number`;     `terms`?: `string`;     `updatedAt`?: `string`;     `uploaderUserId`: `number`;     `url`?: `string`;     `viewable`?: `boolean`; } | - |
| `put.parameters.body.schema._href`? | `string` | Format: uri |
| `put.parameters.body.schema.assocId`? | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `put.parameters.body.schema.assocType`? | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `put.parameters.body.schema.caption`? | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `put.parameters.body.schema.copyrightOwner`? | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `put.parameters.body.schema.createdAt`? | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `put.parameters.body.schema.creator`? | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `put.parameters.body.schema.credit`? | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `put.parameters.body.schema.dateCreated`? | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `put.parameters.body.schema.dependentFiles`? | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `put.parameters.body.schema.description`? | `string` | - |
| `put.parameters.body.schema.documentType`? | `string` | - |
| `put.parameters.body.schema.file`? | `string` | Format: binary |
| `put.parameters.body.schema.fileId` | `number` | - |
| `put.parameters.body.schema.fileStage` | `number` | - |
| `put.parameters.body.schema.genre`? | {     `dependent`?: `boolean`;     `id`?: `number`;     `name`?: `string`;     `supplementary`?: `boolean`; } | `Description`  The genre of this file, such as Article Text or Data Set. |
| `put.parameters.body.schema.genre.dependent`? | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `put.parameters.body.schema.genre.id`? | `number` | - |
| `put.parameters.body.schema.genre.name`? | `string` | - |
| `put.parameters.body.schema.genre.supplementary`? | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `put.parameters.body.schema.genreId`? | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `put.parameters.body.schema.id`? | `number` | - |
| `put.parameters.body.schema.language`? | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `put.parameters.body.schema.locale`? | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `put.parameters.body.schema.mimetype`? | `string` | - |
| `put.parameters.body.schema.name` | {  } | - |
| `put.parameters.body.schema.path`? | `string` | - |
| `put.parameters.body.schema.publisher`? | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `put.parameters.body.schema.revisions`? | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `put.parameters.body.schema.source`? | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `put.parameters.body.schema.sourceSubmissionFileId`? | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `put.parameters.body.schema.sponsor`? | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `put.parameters.body.schema.subject`? | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `put.parameters.body.schema.submissionId` | `number` | - |
| `put.parameters.body.schema.terms`? | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `put.parameters.body.schema.updatedAt`? | `string` | `Description`  When this object was last updated. |
| `put.parameters.body.schema.uploaderUserId` | `number` | - |
| `put.parameters.body.schema.url`? | `string` | - |
| `put.parameters.body.schema.viewable`? | `boolean` | - |
| `put.parameters.path` | {     `submissionFileId`: `number`;     `submissionId`: `number`; } | - |
| `put.parameters.path.submissionFileId` | `number` | Submission File ID |
| `put.parameters.path.submissionId` | `number` | Submission ID |
| `put.parameters.query` | {     `stageId`: `number`; } | - |
| `put.parameters.query.stageId` | `number` | The workflow stage id of the file to be edited. For example, `WORKFLOW_STAGE_ID_PRODUCTION`. |
| `put.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `assocId`?: `number`;             `assocType`?: `number`;             `caption`?: `string`;             `copyrightOwner`?: `string`;             `createdAt`?: `string`;             `creator`?: `string`;             `credit`?: `string`;             `dateCreated`?: `string`;             `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];             `description`?: `string`;             `documentType`?: `string`;             `file`?: `string`;             `fileId`: `number`;             `fileStage`: `number`;             `genre`?: {                 `dependent`?: `boolean`;                 `id`?: `number`;                 `name`?: `string`;                 `supplementary`?: `boolean`;             };             `genreId`?: `number`;             `id`?: `number`;             `language`?: `string`;             `locale`?: `string`;             `mimetype`?: `string`;             `name`: {             };             `path`?: `string`;             `publisher`?: `string`;             `revisions`?: {                 `documentType`?: `string`;                 `fileId`?: `number`;                 `mimetype`?: `string`;                 `path`?: `string`;                 `url`?: `string`;             }[];             `source`?: `string`;             `sourceSubmissionFileId`?: `number`;             `sponsor`?: `string`;             `subject`?: `string`;             `submissionId`: `number`;             `terms`?: `string`;             `updatedAt`?: `string`;             `uploaderUserId`: `number`;             `url`?: `string`;             `viewable`?: `boolean`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `_href`?: `string`;         `assocId`?: `number`;         `assocType`?: `number`;         `caption`?: `string`;         `copyrightOwner`?: `string`;         `createdAt`?: `string`;         `creator`?: `string`;         `credit`?: `string`;         `dateCreated`?: `string`;         `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];         `description`?: `string`;         `documentType`?: `string`;         `file`?: `string`;         `fileId`: `number`;         `fileStage`: `number`;         `genre`?: {             `dependent`?: `boolean`;             `id`?: `number`;             `name`?: `string`;             `supplementary`?: `boolean`;         };         `genreId`?: `number`;         `id`?: `number`;         `language`?: `string`;         `locale`?: `string`;         `mimetype`?: `string`;         `name`: {         };         `path`?: `string`;         `publisher`?: `string`;         `revisions`?: {             `documentType`?: `string`;             `fileId`?: `number`;             `mimetype`?: `string`;             `path`?: `string`;             `url`?: `string`;         }[];         `source`?: `string`;         `sourceSubmissionFileId`?: `number`;         `sponsor`?: `string`;         `subject`?: `string`;         `submissionId`: `number`;         `terms`?: `string`;         `updatedAt`?: `string`;         `uploaderUserId`: `number`;         `url`?: `string`;         `viewable`?: `boolean`;     }; } | The submission file that was just edited with the new values after the update has occurred. |
| `put.responses.200.schema` | {     `_href`?: `string`;     `assocId`?: `number`;     `assocType`?: `number`;     `caption`?: `string`;     `copyrightOwner`?: `string`;     `createdAt`?: `string`;     `creator`?: `string`;     `credit`?: `string`;     `dateCreated`?: `string`;     `dependentFiles`?: `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[];     `description`?: `string`;     `documentType`?: `string`;     `file`?: `string`;     `fileId`: `number`;     `fileStage`: `number`;     `genre`?: {         `dependent`?: `boolean`;         `id`?: `number`;         `name`?: `string`;         `supplementary`?: `boolean`;     };     `genreId`?: `number`;     `id`?: `number`;     `language`?: `string`;     `locale`?: `string`;     `mimetype`?: `string`;     `name`: {     };     `path`?: `string`;     `publisher`?: `string`;     `revisions`?: {         `documentType`?: `string`;         `fileId`?: `number`;         `mimetype`?: `string`;         `path`?: `string`;         `url`?: `string`;     }[];     `source`?: `string`;     `sourceSubmissionFileId`?: `number`;     `sponsor`?: `string`;     `subject`?: `string`;     `submissionId`: `number`;     `terms`?: `string`;     `updatedAt`?: `string`;     `uploaderUserId`: `number`;     `url`?: `string`;     `viewable`?: `boolean`; } | - |
| `put.responses.200.schema._href`? | `string` | Format: uri |
| `put.responses.200.schema.assocId`? | `number` | `Description`  Used with `assocType` to associate this file with an object such as a galley. |
| `put.responses.200.schema.assocType`? | `number` | `Description`  Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). |
| `put.responses.200.schema.caption`? | `string` | `Description`  A caption for this file. Used with artwork such as images. |
| `put.responses.200.schema.copyrightOwner`? | `string` | `Description`  The copyright owner of this file. Used with artwork such as images. |
| `put.responses.200.schema.createdAt`? | `string` | `Description`  The date this submission file object was created in the system. Set automatically by the software. |
| `put.responses.200.schema.creator`? | `string` | `Description`  An attribution for this file, such as the creator of a data set. Used with supplementary files. |
| `put.responses.200.schema.credit`? | `string` | `Description`  An attribution for this file, such as a photographer's name. Used with artwork such as images. |
| `put.responses.200.schema.dateCreated`? | `string` | `Description`  Public metadata about when this content was created. Used with supplementary files. |
| `put.responses.200.schema.dependentFiles`? | `{ _href?: string | undefined; assocId?: number | undefined; assocType?: number | undefined; caption?: string | undefined; copyrightOwner?: string | undefined; createdAt?: string | undefined; ... 28 more ...; viewable?: boolean | undefined; }`[] | `Description`  Any dependent files, typically images or audio files that are loaded by an HTML file. |
| `put.responses.200.schema.description`? | `string` | - |
| `put.responses.200.schema.documentType`? | `string` | - |
| `put.responses.200.schema.file`? | `string` | Format: binary |
| `put.responses.200.schema.fileId` | `number` | - |
| `put.responses.200.schema.fileStage` | `number` | - |
| `put.responses.200.schema.genre`? | {     `dependent`?: `boolean`;     `id`?: `number`;     `name`?: `string`;     `supplementary`?: `boolean`; } | `Description`  The genre of this file, such as Article Text or Data Set. |
| `put.responses.200.schema.genre.dependent`? | `boolean` | `Description`  Dependent files, such as images displayed by a HTML file, that are be displayed with published content. |
| `put.responses.200.schema.genre.id`? | `number` | - |
| `put.responses.200.schema.genre.name`? | `string` | - |
| `put.responses.200.schema.genre.supplementary`? | `boolean` | `Description`  Supplementary files, such as data sets and research materials, that are displayed separately from the main publication files. |
| `put.responses.200.schema.genreId`? | `number` | `Description`  The genre ID of this file. Use this to change the file's genre, for example from Article Text to Data Set. |
| `put.responses.200.schema.id`? | `number` | - |
| `put.responses.200.schema.language`? | `string` | `Description`  The language of this file if it contains text. Used with supplementary files. |
| `put.responses.200.schema.locale`? | `string` | `Description`  The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `put.responses.200.schema.mimetype`? | `string` | - |
| `put.responses.200.schema.name` | {  } | - |
| `put.responses.200.schema.path`? | `string` | - |
| `put.responses.200.schema.publisher`? | `string` | `Description`  The publisher of this file. Used with supplementary files. |
| `put.responses.200.schema.revisions`? | {     `documentType`?: `string`;     `fileId`?: `number`;     `mimetype`?: `string`;     `path`?: `string`;     `url`?: `string`; }[] | `Description`  Previous versions of this file. |
| `put.responses.200.schema.source`? | `string` | `Description`  An attribution for this file that identifies its source, such as a dataset from which this file was generated. Used with supplementary files. |
| `put.responses.200.schema.sourceSubmissionFileId`? | `number` | `Description`  When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. |
| `put.responses.200.schema.sponsor`? | `string` | `Description`  Sponsorship or funding disclosure for this file. Used with supplementary files. |
| `put.responses.200.schema.subject`? | `string` | `Description`  Subject metadata for this file. Used with supplementary files. |
| `put.responses.200.schema.submissionId` | `number` | - |
| `put.responses.200.schema.terms`? | `string` | `Description`  Licensing terms for this file. Used with artwork such as images. |
| `put.responses.200.schema.updatedAt`? | `string` | `Description`  When this object was last updated. |
| `put.responses.200.schema.uploaderUserId` | `number` | - |
| `put.responses.200.schema.url`? | `string` | - |
| `put.responses.200.schema.viewable`? | `boolean` | - |
| `put.responses.400` | {     `schema`: {     }; } | There was an error when uploading the file or the values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `put.responses.400.schema` | {  } | - |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | You are not allowed to edit the requested file. |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.403.schema.error`? | `string` | - |
| `put.responses.403.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:224](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L224)

##### `/submissions/\{submissionId}/participants`

> `object`

```ts
{
    get: {
        parameters: {
            path: {
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    affiliation?: string;
                    apiKey?: string;
                    apiKeyEnabled?: boolean;
                    authId?: number;
                    authStr?: string;
                    billingAddress?: string;
                    biography?: string;
                    country?: string;
                    dateLastEmail?: string;
                    dateLastLogin?: string;
                    dateRegistered?: string;
                    dateValidated?: string;
                    disabled?: boolean;
                    disabledReason?: string;
                    email?: string;
                    familyName?: string;
                    fullName?: string;
                    givenName?: string;
                    gossip?: string;
                    groups?: {
                        abbrev?: {
                        };
                        id?: number;
                        name?: {
                        };
                        permitSelfRegistration?: boolean;
                        recommendOnly?: boolean;
                        roleId?: number;
                        showTitle?: boolean;
                    }[];
                    id?: number;
                    inlineHelp?: boolean;
                    interests?: {
                        id?: number;
                        interest?: string;
                    }[];
                    locales?: string[];
                    mailingAddress?: string;
                    mustChangePassword?: boolean;
                    orcid?: string;
                    password?: string;
                    phone?: string;
                    preferredPublicName?: string;
                    profileImage?: {
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        uploadName?: string;
                        width?: number;
                    };
                    signature?: string;
                    url?: string;
                    userName?: string;
                }[];
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Get the participants assigned to a submisssion. |
| `get.parameters` | {     `path`: {         `submissionId`: `number`;     }; } | - |
| `get.parameters.path` | {     `submissionId`: `number`; } | - |
| `get.parameters.path.submissionId` | `number` | Submission ID |
| `get.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `affiliation`?: `string`;             `apiKey`?: `string`;             `apiKeyEnabled`?: `boolean`;             `authId`?: `number`;             `authStr`?: `string`;             `billingAddress`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `dateLastEmail`?: `string`;             `dateLastLogin`?: `string`;             `dateRegistered`?: `string`;             `dateValidated`?: `string`;             `disabled`?: `boolean`;             `disabledReason`?: `string`;             `email`?: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`?: `string`;             `gossip`?: `string`;             `groups`?: {                 `abbrev`?: {                 };                 `id`?: `number`;                 `name`?: {                 };                 `permitSelfRegistration`?: `boolean`;                 `recommendOnly`?: `boolean`;                 `roleId`?: `number`;                 `showTitle`?: `boolean`;             }[];             `id`?: `number`;             `inlineHelp`?: `boolean`;             `interests`?: {                 `id`?: `number`;                 `interest`?: `string`;             }[];             `locales`?: `string`[];             `mailingAddress`?: `string`;             `mustChangePassword`?: `boolean`;             `orcid`?: `string`;             `password`?: `string`;             `phone`?: `string`;             `preferredPublicName`?: `string`;             `profileImage`?: {                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `signature`?: `string`;             `url`?: `string`;             `userName`?: `string`;         }[];     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `_href`?: `string`;         `affiliation`?: `string`;         `apiKey`?: `string`;         `apiKeyEnabled`?: `boolean`;         `authId`?: `number`;         `authStr`?: `string`;         `billingAddress`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `dateLastEmail`?: `string`;         `dateLastLogin`?: `string`;         `dateRegistered`?: `string`;         `dateValidated`?: `string`;         `disabled`?: `boolean`;         `disabledReason`?: `string`;         `email`?: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`?: `string`;         `gossip`?: `string`;         `groups`?: {             `abbrev`?: {             };             `id`?: `number`;             `name`?: {             };             `permitSelfRegistration`?: `boolean`;             `recommendOnly`?: `boolean`;             `roleId`?: `number`;             `showTitle`?: `boolean`;         }[];         `id`?: `number`;         `inlineHelp`?: `boolean`;         `interests`?: {             `id`?: `number`;             `interest`?: `string`;         }[];         `locales`?: `string`[];         `mailingAddress`?: `string`;         `mustChangePassword`?: `boolean`;         `orcid`?: `string`;         `password`?: `string`;         `phone`?: `string`;         `preferredPublicName`?: `string`;         `profileImage`?: {             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `uploadName`?: `string`;             `width`?: `number`;         };         `signature`?: `string`;         `url`?: `string`;         `userName`?: `string`;     }[]; } | List of users assigned to a submission |
| `get.responses.200.schema` | {     `_href`?: `string`;     `affiliation`?: `string`;     `apiKey`?: `string`;     `apiKeyEnabled`?: `boolean`;     `authId`?: `number`;     `authStr`?: `string`;     `billingAddress`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `dateLastEmail`?: `string`;     `dateLastLogin`?: `string`;     `dateRegistered`?: `string`;     `dateValidated`?: `string`;     `disabled`?: `boolean`;     `disabledReason`?: `string`;     `email`?: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`?: `string`;     `gossip`?: `string`;     `groups`?: {         `abbrev`?: {         };         `id`?: `number`;         `name`?: {         };         `permitSelfRegistration`?: `boolean`;         `recommendOnly`?: `boolean`;         `roleId`?: `number`;         `showTitle`?: `boolean`;     }[];     `id`?: `number`;     `inlineHelp`?: `boolean`;     `interests`?: {         `id`?: `number`;         `interest`?: `string`;     }[];     `locales`?: `string`[];     `mailingAddress`?: `string`;     `mustChangePassword`?: `boolean`;     `orcid`?: `string`;     `password`?: `string`;     `phone`?: `string`;     `preferredPublicName`?: `string`;     `profileImage`?: {         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `uploadName`?: `string`;         `width`?: `number`;     };     `signature`?: `string`;     `url`?: `string`;     `userName`?: `string`; }[] | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested submission could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:308](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L308)

##### `/submissions/\{submissionId}/participants/\{stageId}`

> `object`

```ts
{
    get: {
        parameters: {
            path: {
                stageId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    affiliation?: string;
                    apiKey?: string;
                    apiKeyEnabled?: boolean;
                    authId?: number;
                    authStr?: string;
                    billingAddress?: string;
                    biography?: string;
                    country?: string;
                    dateLastEmail?: string;
                    dateLastLogin?: string;
                    dateRegistered?: string;
                    dateValidated?: string;
                    disabled?: boolean;
                    disabledReason?: string;
                    email?: string;
                    familyName?: string;
                    fullName?: string;
                    givenName?: string;
                    gossip?: string;
                    groups?: {
                        abbrev?: {
                        };
                        id?: number;
                        name?: {
                        };
                        permitSelfRegistration?: boolean;
                        recommendOnly?: boolean;
                        roleId?: number;
                        showTitle?: boolean;
                    }[];
                    id?: number;
                    inlineHelp?: boolean;
                    interests?: {
                        id?: number;
                        interest?: string;
                    }[];
                    locales?: string[];
                    mailingAddress?: string;
                    mustChangePassword?: boolean;
                    orcid?: string;
                    password?: string;
                    phone?: string;
                    preferredPublicName?: string;
                    profileImage?: {
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        uploadName?: string;
                        width?: number;
                    };
                    signature?: string;
                    url?: string;
                    userName?: string;
                }[];
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | Get all participants assigned to a submission for a specific workflow stage, such as the review or copyediting stage. |
| `get.parameters` | {     `path`: {         `stageId`: `number`;         `submissionId`: `number`;     }; } | - |
| `get.parameters.path` | {     `stageId`: `number`;     `submissionId`: `number`; } | - |
| `get.parameters.path.stageId` | `number` | Stage ID |
| `get.parameters.path.submissionId` | `number` | Submission ID |
| `get.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `affiliation`?: `string`;             `apiKey`?: `string`;             `apiKeyEnabled`?: `boolean`;             `authId`?: `number`;             `authStr`?: `string`;             `billingAddress`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `dateLastEmail`?: `string`;             `dateLastLogin`?: `string`;             `dateRegistered`?: `string`;             `dateValidated`?: `string`;             `disabled`?: `boolean`;             `disabledReason`?: `string`;             `email`?: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`?: `string`;             `gossip`?: `string`;             `groups`?: {                 `abbrev`?: {                 };                 `id`?: `number`;                 `name`?: {                 };                 `permitSelfRegistration`?: `boolean`;                 `recommendOnly`?: `boolean`;                 `roleId`?: `number`;                 `showTitle`?: `boolean`;             }[];             `id`?: `number`;             `inlineHelp`?: `boolean`;             `interests`?: {                 `id`?: `number`;                 `interest`?: `string`;             }[];             `locales`?: `string`[];             `mailingAddress`?: `string`;             `mustChangePassword`?: `boolean`;             `orcid`?: `string`;             `password`?: `string`;             `phone`?: `string`;             `preferredPublicName`?: `string`;             `profileImage`?: {                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `signature`?: `string`;             `url`?: `string`;             `userName`?: `string`;         }[];     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `_href`?: `string`;         `affiliation`?: `string`;         `apiKey`?: `string`;         `apiKeyEnabled`?: `boolean`;         `authId`?: `number`;         `authStr`?: `string`;         `billingAddress`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `dateLastEmail`?: `string`;         `dateLastLogin`?: `string`;         `dateRegistered`?: `string`;         `dateValidated`?: `string`;         `disabled`?: `boolean`;         `disabledReason`?: `string`;         `email`?: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`?: `string`;         `gossip`?: `string`;         `groups`?: {             `abbrev`?: {             };             `id`?: `number`;             `name`?: {             };             `permitSelfRegistration`?: `boolean`;             `recommendOnly`?: `boolean`;             `roleId`?: `number`;             `showTitle`?: `boolean`;         }[];         `id`?: `number`;         `inlineHelp`?: `boolean`;         `interests`?: {             `id`?: `number`;             `interest`?: `string`;         }[];         `locales`?: `string`[];         `mailingAddress`?: `string`;         `mustChangePassword`?: `boolean`;         `orcid`?: `string`;         `password`?: `string`;         `phone`?: `string`;         `preferredPublicName`?: `string`;         `profileImage`?: {             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `uploadName`?: `string`;             `width`?: `number`;         };         `signature`?: `string`;         `url`?: `string`;         `userName`?: `string`;     }[]; } | List of users assigned to the requested stage of the requested submission |
| `get.responses.200.schema` | {     `_href`?: `string`;     `affiliation`?: `string`;     `apiKey`?: `string`;     `apiKeyEnabled`?: `boolean`;     `authId`?: `number`;     `authStr`?: `string`;     `billingAddress`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `dateLastEmail`?: `string`;     `dateLastLogin`?: `string`;     `dateRegistered`?: `string`;     `dateValidated`?: `string`;     `disabled`?: `boolean`;     `disabledReason`?: `string`;     `email`?: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`?: `string`;     `gossip`?: `string`;     `groups`?: {         `abbrev`?: {         };         `id`?: `number`;         `name`?: {         };         `permitSelfRegistration`?: `boolean`;         `recommendOnly`?: `boolean`;         `roleId`?: `number`;         `showTitle`?: `boolean`;     }[];     `id`?: `number`;     `inlineHelp`?: `boolean`;     `interests`?: {         `id`?: `number`;         `interest`?: `string`;     }[];     `locales`?: `string`[];     `mailingAddress`?: `string`;     `mustChangePassword`?: `boolean`;     `orcid`?: `string`;     `password`?: `string`;     `phone`?: `string`;     `preferredPublicName`?: `string`;     `profileImage`?: {         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `uploadName`?: `string`;         `width`?: `number`;     };     `signature`?: `string`;     `url`?: `string`;     `userName`?: `string`; }[] | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested submission could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:329](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L329)

##### `/submissions/\{submissionId}/publications`

> `object`

```ts
{
    get: {
        parameters: {
            path: {
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                }[];
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    post: {
        body: {
            schema: {
                _href?: string;
                abstract?: string;
                authors?: {
                    affiliation?: string;
                    biography?: string;
                    country?: string;
                    email: string;
                    familyName?: string;
                    fullName?: string;
                    givenName: string;
                    id?: number;
                    includeInBrowse?: boolean;
                    orcid?: string;
                    preferredPublicName?: string;
                    publicationId: number;
                    seq?: number;
                    submissionLocale?: string;
                    url?: string;
                    userGroupId: number;
                    userGroupName?: string;
                }[];
                authorsString?: string;
                authorsStringIncludeInBrowse?: string;
                authorsStringShort?: string;
                categoryIds?: number[];
                citations?: string[];
                citationsRaw?: string;
                copyrightHolder?: string;
                copyrightYear?: number;
                coverImage?: {
                    altText?: string;
                    dateUploaded?: string;
                    temporaryFileId?: number;
                    uploadName?: string;
                };
                coverage?: string;
                datePublished?: string;
                disciplines?: string[];
                doiId?: number;
                doiObject?: {
                    contextId: number;
                    doi: string;
                    id?: number;
                    resolvingUrl?: string;
                    status?: number;
                }[];
                fullTitle?: string;
                id?: number;
                keywords?: string[];
                languages?: string[];
                lastModified?: string;
                licenseUrl?: string;
                locale: string;
                prefix?: string;
                primaryContactId?: number;
                pub-id::publisher-id?: string;
                rights?: string;
                seq?: number;
                source?: string;
                status?: number;
                subjects?: string[];
                submissionId: number;
                subtitle?: {
                };
                supportingAgencies?: string[];
                title: {
                };
                type?: string;
                urlPath?: string;
                urlPublished?: string;
                version: number;
            };
        };
        parameters: {
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                };
            };
            400: {
                schema: {
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | - |
| `get.parameters` | {     `path`: {         `submissionId`: `number`;     }; } | - |
| `get.parameters.path` | {     `submissionId`: `number`; } | - |
| `get.parameters.path.submissionId` | `number` | Submission ID |
| `get.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         }[];     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }[]; } | List of publications for this submission. |
| `get.responses.200.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; }[] | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested submission could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `post` | `object` | Create a new publication for a submission. |
| `post.body` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } | - |
| `post.body.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } | - |
| `post.body.schema._href`? | `string` | Format: uri |
| `post.body.schema.abstract`? | `string` | - |
| `post.body.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `post.body.schema.authorsString`? | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `post.body.schema.authorsStringIncludeInBrowse`? | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `post.body.schema.authorsStringShort`? | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `post.body.schema.categoryIds`? | `number`[] | - |
| `post.body.schema.citations`? | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `post.body.schema.citationsRaw`? | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `post.body.schema.copyrightHolder`? | `string` | `Description`  The copyright statement for this publication. |
| `post.body.schema.copyrightYear`? | `number` | `Description`  The copyright year for this publication. |
| `post.body.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `post.body.schema.coverImage.altText`? | `string` | - |
| `post.body.schema.coverImage.dateUploaded`? | `string` | - |
| `post.body.schema.coverImage.temporaryFileId`? | `number` | - |
| `post.body.schema.coverImage.uploadName`? | `string` | - |
| `post.body.schema.coverage`? | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `post.body.schema.datePublished`? | `string` | - |
| `post.body.schema.disciplines`? | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `post.body.schema.doiId`? | `number` | `Description`  Reference to the DOI for this publication |
| `post.body.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `post.body.schema.fullTitle`? | `string` | `Description`  The combined prefix, title and subtitle. |
| `post.body.schema.id`? | `number` | - |
| `post.body.schema.keywords`? | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `post.body.schema.languages`? | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `post.body.schema.lastModified`? | `string` | - |
| `post.body.schema.licenseUrl`? | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `post.body.schema.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `post.body.schema.prefix`? | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `post.body.schema.primaryContactId`? | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `post.body.schema.pub-id::publisher-id`? | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `post.body.schema.rights`? | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `post.body.schema.seq`? | `number` | - |
| `post.body.schema.source`? | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `post.body.schema.status`? | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `post.body.schema.subjects`? | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `post.body.schema.submissionId` | `number` | - |
| `post.body.schema.subtitle`? | {  } | - |
| `post.body.schema.supportingAgencies`? | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `post.body.schema.title` | {  } | - |
| `post.body.schema.type`? | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `post.body.schema.urlPath`? | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `post.body.schema.urlPublished`? | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `post.body.schema.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |
| `post.parameters` | {     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `post.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `post.parameters.path.publicationId` | `number` | Publication ID |
| `post.parameters.path.submissionId` | `number` | Submission ID |
| `post.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         };     };     `400`: {         `schema`: {         };     }; } | - |
| `post.responses.200` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } | Details of the publication that was just added. |
| `post.responses.200.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } | - |
| `post.responses.200.schema._href`? | `string` | Format: uri |
| `post.responses.200.schema.abstract`? | `string` | - |
| `post.responses.200.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `post.responses.200.schema.authorsString`? | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `post.responses.200.schema.authorsStringIncludeInBrowse`? | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `post.responses.200.schema.authorsStringShort`? | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `post.responses.200.schema.categoryIds`? | `number`[] | - |
| `post.responses.200.schema.citations`? | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `post.responses.200.schema.citationsRaw`? | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `post.responses.200.schema.copyrightHolder`? | `string` | `Description`  The copyright statement for this publication. |
| `post.responses.200.schema.copyrightYear`? | `number` | `Description`  The copyright year for this publication. |
| `post.responses.200.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `post.responses.200.schema.coverImage.altText`? | `string` | - |
| `post.responses.200.schema.coverImage.dateUploaded`? | `string` | - |
| `post.responses.200.schema.coverImage.temporaryFileId`? | `number` | - |
| `post.responses.200.schema.coverImage.uploadName`? | `string` | - |
| `post.responses.200.schema.coverage`? | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `post.responses.200.schema.datePublished`? | `string` | - |
| `post.responses.200.schema.disciplines`? | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `post.responses.200.schema.doiId`? | `number` | `Description`  Reference to the DOI for this publication |
| `post.responses.200.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `post.responses.200.schema.fullTitle`? | `string` | `Description`  The combined prefix, title and subtitle. |
| `post.responses.200.schema.id`? | `number` | - |
| `post.responses.200.schema.keywords`? | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `post.responses.200.schema.languages`? | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `post.responses.200.schema.lastModified`? | `string` | - |
| `post.responses.200.schema.licenseUrl`? | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `post.responses.200.schema.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `post.responses.200.schema.prefix`? | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `post.responses.200.schema.primaryContactId`? | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `post.responses.200.schema.pub-id::publisher-id`? | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `post.responses.200.schema.rights`? | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `post.responses.200.schema.seq`? | `number` | - |
| `post.responses.200.schema.source`? | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `post.responses.200.schema.status`? | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `post.responses.200.schema.subjects`? | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `post.responses.200.schema.submissionId` | `number` | - |
| `post.responses.200.schema.subtitle`? | {  } | - |
| `post.responses.200.schema.supportingAgencies`? | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `post.responses.200.schema.title` | {  } | - |
| `post.responses.200.schema.type`? | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `post.responses.200.schema.urlPath`? | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `post.responses.200.schema.urlPublished`? | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `post.responses.200.schema.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |
| `post.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `post.responses.400.schema` | {  } | - |

Defined in:  [lib/swagger-types.ts:352](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L352)

##### `/submissions/\{submissionId}/publications/\{publicationId}`

> `object`

```ts
{
    delete: {
        parameters: {
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    get: {
        parameters: {
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    put: {
        parameters: {
            body: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                };
            };
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `delete` | `object` | Only journal managers and subeditors can make a request to this endpoint. |
| `delete.parameters` | {     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `delete.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `delete.parameters.path.publicationId` | `number` | Publication ID |
| `delete.parameters.path.submissionId` | `number` | Submission ID |
| `delete.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `delete.responses.200` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } | The publication that was just deleted. |
| `delete.responses.200.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } | - |
| `delete.responses.200.schema._href`? | `string` | Format: uri |
| `delete.responses.200.schema.abstract`? | `string` | - |
| `delete.responses.200.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `delete.responses.200.schema.authorsString`? | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `delete.responses.200.schema.authorsStringIncludeInBrowse`? | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `delete.responses.200.schema.authorsStringShort`? | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `delete.responses.200.schema.categoryIds`? | `number`[] | - |
| `delete.responses.200.schema.citations`? | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `delete.responses.200.schema.citationsRaw`? | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `delete.responses.200.schema.copyrightHolder`? | `string` | `Description`  The copyright statement for this publication. |
| `delete.responses.200.schema.copyrightYear`? | `number` | `Description`  The copyright year for this publication. |
| `delete.responses.200.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `delete.responses.200.schema.coverImage.altText`? | `string` | - |
| `delete.responses.200.schema.coverImage.dateUploaded`? | `string` | - |
| `delete.responses.200.schema.coverImage.temporaryFileId`? | `number` | - |
| `delete.responses.200.schema.coverImage.uploadName`? | `string` | - |
| `delete.responses.200.schema.coverage`? | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `delete.responses.200.schema.datePublished`? | `string` | - |
| `delete.responses.200.schema.disciplines`? | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `delete.responses.200.schema.doiId`? | `number` | `Description`  Reference to the DOI for this publication |
| `delete.responses.200.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `delete.responses.200.schema.fullTitle`? | `string` | `Description`  The combined prefix, title and subtitle. |
| `delete.responses.200.schema.id`? | `number` | - |
| `delete.responses.200.schema.keywords`? | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `delete.responses.200.schema.languages`? | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `delete.responses.200.schema.lastModified`? | `string` | - |
| `delete.responses.200.schema.licenseUrl`? | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `delete.responses.200.schema.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `delete.responses.200.schema.prefix`? | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `delete.responses.200.schema.primaryContactId`? | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `delete.responses.200.schema.pub-id::publisher-id`? | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `delete.responses.200.schema.rights`? | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `delete.responses.200.schema.seq`? | `number` | - |
| `delete.responses.200.schema.source`? | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `delete.responses.200.schema.status`? | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `delete.responses.200.schema.subjects`? | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `delete.responses.200.schema.submissionId` | `number` | - |
| `delete.responses.200.schema.subtitle`? | {  } | - |
| `delete.responses.200.schema.supportingAgencies`? | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `delete.responses.200.schema.title` | {  } | - |
| `delete.responses.200.schema.type`? | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `delete.responses.200.schema.urlPath`? | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `delete.responses.200.schema.urlPublished`? | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `delete.responses.200.schema.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |
| `delete.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | This may mean one of the following: \* You are not allowed to delete this publication. \* The publication does not belong to this submission. \* This publication is published and can not be deleted. |
| `delete.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.403.schema.error`? | `string` | - |
| `delete.responses.403.schema.errorMessage`? | `string` | - |
| `delete.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The submission could not be found. |
| `delete.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.404.schema.error`? | `string` | - |
| `delete.responses.404.schema.errorMessage`? | `string` | - |
| `get` | `object` | - |
| `get.parameters` | {     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `get.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `get.parameters.path.publicationId` | `number` | Publication ID |
| `get.parameters.path.submissionId` | `number` | Submission ID |
| `get.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } | The publication details |
| `get.responses.200.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } | - |
| `get.responses.200.schema._href`? | `string` | Format: uri |
| `get.responses.200.schema.abstract`? | `string` | - |
| `get.responses.200.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `get.responses.200.schema.authorsString`? | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `get.responses.200.schema.authorsStringIncludeInBrowse`? | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `get.responses.200.schema.authorsStringShort`? | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `get.responses.200.schema.categoryIds`? | `number`[] | - |
| `get.responses.200.schema.citations`? | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `get.responses.200.schema.citationsRaw`? | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `get.responses.200.schema.copyrightHolder`? | `string` | `Description`  The copyright statement for this publication. |
| `get.responses.200.schema.copyrightYear`? | `number` | `Description`  The copyright year for this publication. |
| `get.responses.200.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `get.responses.200.schema.coverImage.altText`? | `string` | - |
| `get.responses.200.schema.coverImage.dateUploaded`? | `string` | - |
| `get.responses.200.schema.coverImage.temporaryFileId`? | `number` | - |
| `get.responses.200.schema.coverImage.uploadName`? | `string` | - |
| `get.responses.200.schema.coverage`? | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `get.responses.200.schema.datePublished`? | `string` | - |
| `get.responses.200.schema.disciplines`? | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `get.responses.200.schema.doiId`? | `number` | `Description`  Reference to the DOI for this publication |
| `get.responses.200.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `get.responses.200.schema.fullTitle`? | `string` | `Description`  The combined prefix, title and subtitle. |
| `get.responses.200.schema.id`? | `number` | - |
| `get.responses.200.schema.keywords`? | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `get.responses.200.schema.languages`? | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `get.responses.200.schema.lastModified`? | `string` | - |
| `get.responses.200.schema.licenseUrl`? | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `get.responses.200.schema.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `get.responses.200.schema.prefix`? | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `get.responses.200.schema.primaryContactId`? | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `get.responses.200.schema.pub-id::publisher-id`? | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `get.responses.200.schema.rights`? | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `get.responses.200.schema.seq`? | `number` | - |
| `get.responses.200.schema.source`? | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `get.responses.200.schema.status`? | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `get.responses.200.schema.subjects`? | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `get.responses.200.schema.submissionId` | `number` | - |
| `get.responses.200.schema.subtitle`? | {  } | - |
| `get.responses.200.schema.supportingAgencies`? | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `get.responses.200.schema.title` | {  } | - |
| `get.responses.200.schema.type`? | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `get.responses.200.schema.urlPath`? | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `get.responses.200.schema.urlPublished`? | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `get.responses.200.schema.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested submission or publication could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `put` | `object` | - |
| `put.parameters` | {     `body`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         };     };     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `put.parameters.body` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } | - |
| `put.parameters.body.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } | - |
| `put.parameters.body.schema._href`? | `string` | Format: uri |
| `put.parameters.body.schema.abstract`? | `string` | - |
| `put.parameters.body.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `put.parameters.body.schema.authorsString`? | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `put.parameters.body.schema.authorsStringIncludeInBrowse`? | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `put.parameters.body.schema.authorsStringShort`? | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `put.parameters.body.schema.categoryIds`? | `number`[] | - |
| `put.parameters.body.schema.citations`? | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `put.parameters.body.schema.citationsRaw`? | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `put.parameters.body.schema.copyrightHolder`? | `string` | `Description`  The copyright statement for this publication. |
| `put.parameters.body.schema.copyrightYear`? | `number` | `Description`  The copyright year for this publication. |
| `put.parameters.body.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `put.parameters.body.schema.coverImage.altText`? | `string` | - |
| `put.parameters.body.schema.coverImage.dateUploaded`? | `string` | - |
| `put.parameters.body.schema.coverImage.temporaryFileId`? | `number` | - |
| `put.parameters.body.schema.coverImage.uploadName`? | `string` | - |
| `put.parameters.body.schema.coverage`? | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `put.parameters.body.schema.datePublished`? | `string` | - |
| `put.parameters.body.schema.disciplines`? | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `put.parameters.body.schema.doiId`? | `number` | `Description`  Reference to the DOI for this publication |
| `put.parameters.body.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `put.parameters.body.schema.fullTitle`? | `string` | `Description`  The combined prefix, title and subtitle. |
| `put.parameters.body.schema.id`? | `number` | - |
| `put.parameters.body.schema.keywords`? | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `put.parameters.body.schema.languages`? | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `put.parameters.body.schema.lastModified`? | `string` | - |
| `put.parameters.body.schema.licenseUrl`? | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `put.parameters.body.schema.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `put.parameters.body.schema.prefix`? | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `put.parameters.body.schema.primaryContactId`? | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `put.parameters.body.schema.pub-id::publisher-id`? | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `put.parameters.body.schema.rights`? | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `put.parameters.body.schema.seq`? | `number` | - |
| `put.parameters.body.schema.source`? | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `put.parameters.body.schema.status`? | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `put.parameters.body.schema.subjects`? | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `put.parameters.body.schema.submissionId` | `number` | - |
| `put.parameters.body.schema.subtitle`? | {  } | - |
| `put.parameters.body.schema.supportingAgencies`? | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `put.parameters.body.schema.title` | {  } | - |
| `put.parameters.body.schema.type`? | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `put.parameters.body.schema.urlPath`? | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `put.parameters.body.schema.urlPublished`? | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `put.parameters.body.schema.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |
| `put.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `put.parameters.path.publicationId` | `number` | Publication ID |
| `put.parameters.path.submissionId` | `number` | Submission ID |
| `put.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } | The publication that was just edited with the new values after the update has occurred. |
| `put.responses.200.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } | - |
| `put.responses.200.schema._href`? | `string` | Format: uri |
| `put.responses.200.schema.abstract`? | `string` | - |
| `put.responses.200.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `put.responses.200.schema.authorsString`? | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `put.responses.200.schema.authorsStringIncludeInBrowse`? | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `put.responses.200.schema.authorsStringShort`? | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `put.responses.200.schema.categoryIds`? | `number`[] | - |
| `put.responses.200.schema.citations`? | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `put.responses.200.schema.citationsRaw`? | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `put.responses.200.schema.copyrightHolder`? | `string` | `Description`  The copyright statement for this publication. |
| `put.responses.200.schema.copyrightYear`? | `number` | `Description`  The copyright year for this publication. |
| `put.responses.200.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `put.responses.200.schema.coverImage.altText`? | `string` | - |
| `put.responses.200.schema.coverImage.dateUploaded`? | `string` | - |
| `put.responses.200.schema.coverImage.temporaryFileId`? | `number` | - |
| `put.responses.200.schema.coverImage.uploadName`? | `string` | - |
| `put.responses.200.schema.coverage`? | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `put.responses.200.schema.datePublished`? | `string` | - |
| `put.responses.200.schema.disciplines`? | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `put.responses.200.schema.doiId`? | `number` | `Description`  Reference to the DOI for this publication |
| `put.responses.200.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `put.responses.200.schema.fullTitle`? | `string` | `Description`  The combined prefix, title and subtitle. |
| `put.responses.200.schema.id`? | `number` | - |
| `put.responses.200.schema.keywords`? | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `put.responses.200.schema.languages`? | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `put.responses.200.schema.lastModified`? | `string` | - |
| `put.responses.200.schema.licenseUrl`? | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `put.responses.200.schema.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `put.responses.200.schema.prefix`? | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `put.responses.200.schema.primaryContactId`? | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `put.responses.200.schema.pub-id::publisher-id`? | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `put.responses.200.schema.rights`? | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `put.responses.200.schema.seq`? | `number` | - |
| `put.responses.200.schema.source`? | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `put.responses.200.schema.status`? | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `put.responses.200.schema.subjects`? | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `put.responses.200.schema.submissionId` | `number` | - |
| `put.responses.200.schema.subtitle`? | {  } | - |
| `put.responses.200.schema.supportingAgencies`? | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `put.responses.200.schema.title` | {  } | - |
| `put.responses.200.schema.type`? | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `put.responses.200.schema.urlPath`? | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `put.responses.200.schema.urlPublished`? | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `put.responses.200.schema.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |
| `put.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `put.responses.400.schema` | {  } | - |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | This error indicates one of the following: \* The publication you want to edit does not belong to this submission. \* This publication is published and can not be edited. You must create and publish a new version. \* You do not have permission to edit this publication. \* You are not allowed to modify the `status` of a publication. You must use the `/submissions/{submissionId}/publications/{publicationId}/publish` and `.../unpublish` endpoints to modify the status of a publication. |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.403.schema.error`? | `string` | - |
| `put.responses.403.schema.errorMessage`? | `string` | - |
| `put.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The publication could not be found. |
| `put.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.404.schema.error`? | `string` | - |
| `put.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:396](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L396)

##### `/submissions/\{submissionId}/publications/\{publicationId}/contributors`

> `object`

```ts
{
    get: {
        parameters: {
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    affiliation?: string;
                    biography?: string;
                    country?: string;
                    email: string;
                    familyName?: string;
                    fullName?: string;
                    givenName: string;
                    id?: number;
                    includeInBrowse?: boolean;
                    orcid?: string;
                    preferredPublicName?: string;
                    publicationId: number;
                    seq?: number;
                    submissionLocale?: string;
                    url?: string;
                    userGroupId: number;
                    userGroupName?: string;
                }[];
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    post: {
        parameters: {
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    affiliation?: string;
                    biography?: string;
                    country?: string;
                    email: string;
                    familyName?: string;
                    fullName?: string;
                    givenName: string;
                    id?: number;
                    includeInBrowse?: boolean;
                    orcid?: string;
                    preferredPublicName?: string;
                    publicationId: number;
                    seq?: number;
                    submissionLocale?: string;
                    url?: string;
                    userGroupId: number;
                    userGroupName?: string;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `get` | `object` | - |
| `get.parameters` | {     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `get.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `get.parameters.path.publicationId` | `number` | Publication ID |
| `get.parameters.path.submissionId` | `number` | Submission ID |
| `get.responses` | {     `200`: {         `schema`: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[]; } | List of contributors for this publication. |
| `get.responses.200.schema` | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | - |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested publication is not part of the requested submission. |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested publication could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `post` | `object` | Create a new contributor for a publication. |
| `post.parameters` | {     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `post.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `post.parameters.path.publicationId` | `number` | Publication ID |
| `post.parameters.path.submissionId` | `number` | Submission ID |
| `post.responses` | {     `200`: {         `schema`: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `post.responses.200` | {     `schema`: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }; } | Details of the contributor that was just added. |
| `post.responses.200.schema` | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; } | - |
| `post.responses.200.schema.affiliation`? | `string` | `Description`  The scholarly institution this contributor is employed by or affiliated with. |
| `post.responses.200.schema.biography`? | `string` | `Description`  An optional bio statement about this contributor. |
| `post.responses.200.schema.country`? | `string` | - |
| `post.responses.200.schema.email` | `string` | - |
| `post.responses.200.schema.familyName`? | `string` | - |
| `post.responses.200.schema.fullName`? | `string` | `Description`  The full name of the author. This will be the preferredPublicName or, if that is not available, a string containing the givenName and familyName. |
| `post.responses.200.schema.givenName` | `string` | - |
| `post.responses.200.schema.id`? | `number` | - |
| `post.responses.200.schema.includeInBrowse`? | `boolean` | `Description`  Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.  `Default`  true |
| `post.responses.200.schema.orcid`? | `string` | `Description`  The ORCID of this contributor. See: https\://orcid.org/ |
| `post.responses.200.schema.preferredPublicName`? | `string` | `Description`  An optional field for contributors to specify how they prefer to be identified in this publication. |
| `post.responses.200.schema.publicationId` | `number` | - |
| `post.responses.200.schema.seq`? | `number` | `Description`  The order in which this contributor should appear in a list of contriibutors. |
| `post.responses.200.schema.submissionLocale`? | `string` | `Description`  The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `post.responses.200.schema.url`? | `string` | `Description`  An optional URL to this contributor's webpage. |
| `post.responses.200.schema.userGroupId` | `number` | `Description`  The ID of this contributor's assigned user group. See userGroupName. |
| `post.responses.200.schema.userGroupName`? | `string` | `Description`  The name of this contributor's role in the publication, such as 'Author' or 'Translator'. |
| `post.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `post.responses.400.schema` | {  } | - |
| `post.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested publication is not part of the requested submission. It could be also because the publication is not editable by the requested user |
| `post.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.403.schema.error`? | `string` | - |
| `post.responses.403.schema.errorMessage`? | `string` | - |
| `post.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested publication could not be found. |
| `post.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.404.schema.error`? | `string` | - |
| `post.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:573](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L573)

##### `/submissions/\{submissionId}/publications/\{publicationId}/contributors/saveOrder`

> `object`

```ts
{
    put: {
        parameters: {
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `put` | `object` |
| `put.parameters` | {     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } |
| `put.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } |
| `put.parameters.path.publicationId` | `number` |
| `put.parameters.path.submissionId` | `number` |
| `put.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } |
| `put.responses.200` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } |
| `put.responses.200.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } |
| `put.responses.200.schema._href`? | `string` |
| `put.responses.200.schema.abstract`? | `string` |
| `put.responses.200.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] |
| `put.responses.200.schema.authorsString`? | `string` |
| `put.responses.200.schema.authorsStringIncludeInBrowse`? | `string` |
| `put.responses.200.schema.authorsStringShort`? | `string` |
| `put.responses.200.schema.categoryIds`? | `number`[] |
| `put.responses.200.schema.citations`? | `string`[] |
| `put.responses.200.schema.citationsRaw`? | `string` |
| `put.responses.200.schema.copyrightHolder`? | `string` |
| `put.responses.200.schema.copyrightYear`? | `number` |
| `put.responses.200.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } |
| `put.responses.200.schema.coverImage.altText`? | `string` |
| `put.responses.200.schema.coverImage.dateUploaded`? | `string` |
| `put.responses.200.schema.coverImage.temporaryFileId`? | `number` |
| `put.responses.200.schema.coverImage.uploadName`? | `string` |
| `put.responses.200.schema.coverage`? | `string` |
| `put.responses.200.schema.datePublished`? | `string` |
| `put.responses.200.schema.disciplines`? | `string`[] |
| `put.responses.200.schema.doiId`? | `number` |
| `put.responses.200.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] |
| `put.responses.200.schema.fullTitle`? | `string` |
| `put.responses.200.schema.id`? | `number` |
| `put.responses.200.schema.keywords`? | `string`[] |
| `put.responses.200.schema.languages`? | `string`[] |
| `put.responses.200.schema.lastModified`? | `string` |
| `put.responses.200.schema.licenseUrl`? | `string` |
| `put.responses.200.schema.locale` | `string` |
| `put.responses.200.schema.prefix`? | `string` |
| `put.responses.200.schema.primaryContactId`? | `number` |
| `put.responses.200.schema.pub-id::publisher-id`? | `string` |
| `put.responses.200.schema.rights`? | `string` |
| `put.responses.200.schema.seq`? | `number` |
| `put.responses.200.schema.source`? | `string` |
| `put.responses.200.schema.status`? | `number` |
| `put.responses.200.schema.subjects`? | `string`[] |
| `put.responses.200.schema.submissionId` | `number` |
| `put.responses.200.schema.subtitle`? | {  } |
| `put.responses.200.schema.supportingAgencies`? | `string`[] |
| `put.responses.200.schema.title` | {  } |
| `put.responses.200.schema.type`? | `string` |
| `put.responses.200.schema.urlPath`? | `string` |
| `put.responses.200.schema.urlPublished`? | `string` |
| `put.responses.200.schema.version` | `number` |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `put.responses.403.schema.error`? | `string` |
| `put.responses.403.schema.errorMessage`? | `string` |
| `put.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `put.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `put.responses.404.schema.error`? | `string` |
| `put.responses.404.schema.errorMessage`? | `string` |

Defined in:  [lib/swagger-types.ts:723](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L723)

##### `/submissions/\{submissionId}/publications/\{publicationId}/contributors/\{contributorId}`

> `object`

```ts
{
    delete: {
        parameters: {
            path: {
                contributorId: number;
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    affiliation?: string;
                    biography?: string;
                    country?: string;
                    email: string;
                    familyName?: string;
                    fullName?: string;
                    givenName: string;
                    id?: number;
                    includeInBrowse?: boolean;
                    orcid?: string;
                    preferredPublicName?: string;
                    publicationId: number;
                    seq?: number;
                    submissionLocale?: string;
                    url?: string;
                    userGroupId: number;
                    userGroupName?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    get: {
        parameters: {
            path: {
                contributorId: number;
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    affiliation?: string;
                    biography?: string;
                    country?: string;
                    email: string;
                    familyName?: string;
                    fullName?: string;
                    givenName: string;
                    id?: number;
                    includeInBrowse?: boolean;
                    orcid?: string;
                    preferredPublicName?: string;
                    publicationId: number;
                    seq?: number;
                    submissionLocale?: string;
                    url?: string;
                    userGroupId: number;
                    userGroupName?: string;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
    put: {
        parameters: {
            path: {
                contributorId: number;
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    affiliation?: string;
                    biography?: string;
                    country?: string;
                    email: string;
                    familyName?: string;
                    fullName?: string;
                    givenName: string;
                    id?: number;
                    includeInBrowse?: boolean;
                    orcid?: string;
                    preferredPublicName?: string;
                    publicationId: number;
                    seq?: number;
                    submissionLocale?: string;
                    url?: string;
                    userGroupId: number;
                    userGroupName?: string;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `delete` | `object` | Only journal managers and subeditors can make a request to this endpoint. |
| `delete.parameters` | {     `path`: {         `contributorId`: `number`;         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `delete.parameters.path` | {     `contributorId`: `number`;     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `delete.parameters.path.contributorId` | `number` | Contributor ID |
| `delete.parameters.path.publicationId` | `number` | Publication ID |
| `delete.parameters.path.submissionId` | `number` | Submission ID |
| `delete.responses` | {     `200`: {         `schema`: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `delete.responses.200` | {     `schema`: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }; } | The contributor that was just deleted. |
| `delete.responses.200.schema` | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; } | - |
| `delete.responses.200.schema.affiliation`? | `string` | `Description`  The scholarly institution this contributor is employed by or affiliated with. |
| `delete.responses.200.schema.biography`? | `string` | `Description`  An optional bio statement about this contributor. |
| `delete.responses.200.schema.country`? | `string` | - |
| `delete.responses.200.schema.email` | `string` | - |
| `delete.responses.200.schema.familyName`? | `string` | - |
| `delete.responses.200.schema.fullName`? | `string` | `Description`  The full name of the author. This will be the preferredPublicName or, if that is not available, a string containing the givenName and familyName. |
| `delete.responses.200.schema.givenName` | `string` | - |
| `delete.responses.200.schema.id`? | `number` | - |
| `delete.responses.200.schema.includeInBrowse`? | `boolean` | `Description`  Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.  `Default`  true |
| `delete.responses.200.schema.orcid`? | `string` | `Description`  The ORCID of this contributor. See: https\://orcid.org/ |
| `delete.responses.200.schema.preferredPublicName`? | `string` | `Description`  An optional field for contributors to specify how they prefer to be identified in this publication. |
| `delete.responses.200.schema.publicationId` | `number` | - |
| `delete.responses.200.schema.seq`? | `number` | `Description`  The order in which this contributor should appear in a list of contriibutors. |
| `delete.responses.200.schema.submissionLocale`? | `string` | `Description`  The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `delete.responses.200.schema.url`? | `string` | `Description`  An optional URL to this contributor's webpage. |
| `delete.responses.200.schema.userGroupId` | `number` | `Description`  The ID of this contributor's assigned user group. See userGroupName. |
| `delete.responses.200.schema.userGroupName`? | `string` | `Description`  The name of this contributor's role in the publication, such as 'Author' or 'Translator'. |
| `delete.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | This may mean one of the following: \* You are not allowed to edit the contributors for this publication. \* This contributor is assigned to a publication that is not part of the requested submission. \* This contributor is assigned to a published publication and can not be edited. |
| `delete.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.403.schema.error`? | `string` | - |
| `delete.responses.403.schema.errorMessage`? | `string` | - |
| `delete.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested submission or publication or author could not be found. |
| `delete.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `delete.responses.404.schema.error`? | `string` | - |
| `delete.responses.404.schema.errorMessage`? | `string` | - |
| `get` | `object` | - |
| `get.parameters` | {     `path`: {         `contributorId`: `number`;         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `get.parameters.path` | {     `contributorId`: `number`;     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `get.parameters.path.contributorId` | `number` | Contributor ID |
| `get.parameters.path.publicationId` | `number` | Publication ID |
| `get.parameters.path.submissionId` | `number` | Submission ID |
| `get.responses` | {     `200`: {         `schema`: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `get.responses.200` | {     `schema`: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }; } | The contributor details |
| `get.responses.200.schema` | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; } | - |
| `get.responses.200.schema.affiliation`? | `string` | `Description`  The scholarly institution this contributor is employed by or affiliated with. |
| `get.responses.200.schema.biography`? | `string` | `Description`  An optional bio statement about this contributor. |
| `get.responses.200.schema.country`? | `string` | - |
| `get.responses.200.schema.email` | `string` | - |
| `get.responses.200.schema.familyName`? | `string` | - |
| `get.responses.200.schema.fullName`? | `string` | `Description`  The full name of the author. This will be the preferredPublicName or, if that is not available, a string containing the givenName and familyName. |
| `get.responses.200.schema.givenName` | `string` | - |
| `get.responses.200.schema.id`? | `number` | - |
| `get.responses.200.schema.includeInBrowse`? | `boolean` | `Description`  Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.  `Default`  true |
| `get.responses.200.schema.orcid`? | `string` | `Description`  The ORCID of this contributor. See: https\://orcid.org/ |
| `get.responses.200.schema.preferredPublicName`? | `string` | `Description`  An optional field for contributors to specify how they prefer to be identified in this publication. |
| `get.responses.200.schema.publicationId` | `number` | - |
| `get.responses.200.schema.seq`? | `number` | `Description`  The order in which this contributor should appear in a list of contriibutors. |
| `get.responses.200.schema.submissionLocale`? | `string` | `Description`  The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `get.responses.200.schema.url`? | `string` | `Description`  An optional URL to this contributor's webpage. |
| `get.responses.200.schema.userGroupId` | `number` | `Description`  The ID of this contributor's assigned user group. See userGroupName. |
| `get.responses.200.schema.userGroupName`? | `string` | `Description`  The name of this contributor's role in the publication, such as 'Author' or 'Translator'. |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested publication is not part of the requested submission. It could be also because the publication is not editable by the requested user |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.403.schema.error`? | `string` | - |
| `get.responses.403.schema.errorMessage`? | `string` | - |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested submission or publication or author could not be found. |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `get.responses.404.schema.error`? | `string` | - |
| `get.responses.404.schema.errorMessage`? | `string` | - |
| `put` | `object` | - |
| `put.parameters` | {     `path`: {         `contributorId`: `number`;         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `put.parameters.path` | {     `contributorId`: `number`;     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `put.parameters.path.contributorId` | `number` | Contributor ID |
| `put.parameters.path.publicationId` | `number` | Publication ID |
| `put.parameters.path.submissionId` | `number` | Submission ID |
| `put.responses` | {     `200`: {         `schema`: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }; } | The contributor that was just edited with the new values after the update has occurred. |
| `put.responses.200.schema` | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; } | - |
| `put.responses.200.schema.affiliation`? | `string` | `Description`  The scholarly institution this contributor is employed by or affiliated with. |
| `put.responses.200.schema.biography`? | `string` | `Description`  An optional bio statement about this contributor. |
| `put.responses.200.schema.country`? | `string` | - |
| `put.responses.200.schema.email` | `string` | - |
| `put.responses.200.schema.familyName`? | `string` | - |
| `put.responses.200.schema.fullName`? | `string` | `Description`  The full name of the author. This will be the preferredPublicName or, if that is not available, a string containing the givenName and familyName. |
| `put.responses.200.schema.givenName` | `string` | - |
| `put.responses.200.schema.id`? | `number` | - |
| `put.responses.200.schema.includeInBrowse`? | `boolean` | `Description`  Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.  `Default`  true |
| `put.responses.200.schema.orcid`? | `string` | `Description`  The ORCID of this contributor. See: https\://orcid.org/ |
| `put.responses.200.schema.preferredPublicName`? | `string` | `Description`  An optional field for contributors to specify how they prefer to be identified in this publication. |
| `put.responses.200.schema.publicationId` | `number` | - |
| `put.responses.200.schema.seq`? | `number` | `Description`  The order in which this contributor should appear in a list of contriibutors. |
| `put.responses.200.schema.submissionLocale`? | `string` | `Description`  The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `put.responses.200.schema.url`? | `string` | `Description`  An optional URL to this contributor's webpage. |
| `put.responses.200.schema.userGroupId` | `number` | `Description`  The ID of this contributor's assigned user group. See userGroupName. |
| `put.responses.200.schema.userGroupName`? | `string` | `Description`  The name of this contributor's role in the publication, such as 'Author' or 'Translator'. |
| `put.responses.400` | {     `schema`: {     }; } | The values you sent with the request did not pass validation. The response will contain information about which parameters failed validation. |
| `put.responses.400.schema` | {  } | - |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | This error indicates one of the following: \* This contributor is assigned to a publication that does not belong to this submission. \* This contributor is assigned to a publication that has already been published. You must create a new version of the publication to modify contributor details. \* You do not have permission to edit contributors for this publication. |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.403.schema.error`? | `string` | - |
| `put.responses.403.schema.errorMessage`? | `string` | - |
| `put.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The requested submission or publication or author could not be found. |
| `put.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.404.schema.error`? | `string` | - |
| `put.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:628](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L628)

##### `/submissions/\{submissionId}/publications/\{publicationId}/publish`

> `object`

```ts
{
    put: {
        parameters: {
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                };
            };
            400: {
                schema: {
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `put` | `object` | If the publication is assigned to an issue that is not yet published, it will be scheduled for publication and the `status` will be set to `PKPSubmission::STATUS_SCHEDULED`. If the issue is already published, it will be published immediately and the `status` will be set to `PKPSubmission::STATUS_PUBLISHED`.  The publication will be validated against any publishing requirements before it is published and a `400` response will be returned if it fails validation. |
| `put.parameters` | {     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `put.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `put.parameters.path.publicationId` | `number` | Publication ID |
| `put.parameters.path.submissionId` | `number` | Submission ID |
| `put.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         };     };     `400`: {         `schema`: {         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `put.responses.200` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } | Details of the publication that was just published. |
| `put.responses.200.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } | - |
| `put.responses.200.schema._href`? | `string` | Format: uri |
| `put.responses.200.schema.abstract`? | `string` | - |
| `put.responses.200.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `put.responses.200.schema.authorsString`? | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `put.responses.200.schema.authorsStringIncludeInBrowse`? | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `put.responses.200.schema.authorsStringShort`? | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `put.responses.200.schema.categoryIds`? | `number`[] | - |
| `put.responses.200.schema.citations`? | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `put.responses.200.schema.citationsRaw`? | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `put.responses.200.schema.copyrightHolder`? | `string` | `Description`  The copyright statement for this publication. |
| `put.responses.200.schema.copyrightYear`? | `number` | `Description`  The copyright year for this publication. |
| `put.responses.200.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `put.responses.200.schema.coverImage.altText`? | `string` | - |
| `put.responses.200.schema.coverImage.dateUploaded`? | `string` | - |
| `put.responses.200.schema.coverImage.temporaryFileId`? | `number` | - |
| `put.responses.200.schema.coverImage.uploadName`? | `string` | - |
| `put.responses.200.schema.coverage`? | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `put.responses.200.schema.datePublished`? | `string` | - |
| `put.responses.200.schema.disciplines`? | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `put.responses.200.schema.doiId`? | `number` | `Description`  Reference to the DOI for this publication |
| `put.responses.200.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `put.responses.200.schema.fullTitle`? | `string` | `Description`  The combined prefix, title and subtitle. |
| `put.responses.200.schema.id`? | `number` | - |
| `put.responses.200.schema.keywords`? | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `put.responses.200.schema.languages`? | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `put.responses.200.schema.lastModified`? | `string` | - |
| `put.responses.200.schema.licenseUrl`? | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `put.responses.200.schema.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `put.responses.200.schema.prefix`? | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `put.responses.200.schema.primaryContactId`? | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `put.responses.200.schema.pub-id::publisher-id`? | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `put.responses.200.schema.rights`? | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `put.responses.200.schema.seq`? | `number` | - |
| `put.responses.200.schema.source`? | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `put.responses.200.schema.status`? | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `put.responses.200.schema.subjects`? | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `put.responses.200.schema.submissionId` | `number` | - |
| `put.responses.200.schema.subtitle`? | {  } | - |
| `put.responses.200.schema.supportingAgencies`? | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `put.responses.200.schema.title` | {  } | - |
| `put.responses.200.schema.type`? | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `put.responses.200.schema.urlPath`? | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `put.responses.200.schema.urlPublished`? | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `put.responses.200.schema.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |
| `put.responses.400` | {     `schema`: {     }; } | One or more publication requirements have not been met. |
| `put.responses.400.schema` | {  } | - |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | A 403 response means that the publication you want to version does not belong to this submission or that the publication is already published. |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.403.schema.error`? | `string` | - |
| `put.responses.403.schema.errorMessage`? | `string` | - |
| `put.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The publication could not be found. |
| `put.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `put.responses.404.schema.error`? | `string` | - |
| `put.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:512](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L512)

##### `/submissions/\{submissionId}/publications/\{publicationId}/unpublish`

> `object`

```ts
{
    put: {
        parameters: {
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `put` | `object` |
| `put.parameters` | {     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } |
| `put.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } |
| `put.parameters.path.publicationId` | `number` |
| `put.parameters.path.submissionId` | `number` |
| `put.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } |
| `put.responses.200` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } |
| `put.responses.200.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } |
| `put.responses.200.schema._href`? | `string` |
| `put.responses.200.schema.abstract`? | `string` |
| `put.responses.200.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] |
| `put.responses.200.schema.authorsString`? | `string` |
| `put.responses.200.schema.authorsStringIncludeInBrowse`? | `string` |
| `put.responses.200.schema.authorsStringShort`? | `string` |
| `put.responses.200.schema.categoryIds`? | `number`[] |
| `put.responses.200.schema.citations`? | `string`[] |
| `put.responses.200.schema.citationsRaw`? | `string` |
| `put.responses.200.schema.copyrightHolder`? | `string` |
| `put.responses.200.schema.copyrightYear`? | `number` |
| `put.responses.200.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } |
| `put.responses.200.schema.coverImage.altText`? | `string` |
| `put.responses.200.schema.coverImage.dateUploaded`? | `string` |
| `put.responses.200.schema.coverImage.temporaryFileId`? | `number` |
| `put.responses.200.schema.coverImage.uploadName`? | `string` |
| `put.responses.200.schema.coverage`? | `string` |
| `put.responses.200.schema.datePublished`? | `string` |
| `put.responses.200.schema.disciplines`? | `string`[] |
| `put.responses.200.schema.doiId`? | `number` |
| `put.responses.200.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] |
| `put.responses.200.schema.fullTitle`? | `string` |
| `put.responses.200.schema.id`? | `number` |
| `put.responses.200.schema.keywords`? | `string`[] |
| `put.responses.200.schema.languages`? | `string`[] |
| `put.responses.200.schema.lastModified`? | `string` |
| `put.responses.200.schema.licenseUrl`? | `string` |
| `put.responses.200.schema.locale` | `string` |
| `put.responses.200.schema.prefix`? | `string` |
| `put.responses.200.schema.primaryContactId`? | `number` |
| `put.responses.200.schema.pub-id::publisher-id`? | `string` |
| `put.responses.200.schema.rights`? | `string` |
| `put.responses.200.schema.seq`? | `number` |
| `put.responses.200.schema.source`? | `string` |
| `put.responses.200.schema.status`? | `number` |
| `put.responses.200.schema.subjects`? | `string`[] |
| `put.responses.200.schema.submissionId` | `number` |
| `put.responses.200.schema.subtitle`? | {  } |
| `put.responses.200.schema.supportingAgencies`? | `string`[] |
| `put.responses.200.schema.title` | {  } |
| `put.responses.200.schema.type`? | `string` |
| `put.responses.200.schema.urlPath`? | `string` |
| `put.responses.200.schema.urlPublished`? | `string` |
| `put.responses.200.schema.version` | `number` |
| `put.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `put.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `put.responses.403.schema.error`? | `string` |
| `put.responses.403.schema.errorMessage`? | `string` |
| `put.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `put.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `put.responses.404.schema.error`? | `string` |
| `put.responses.404.schema.errorMessage`? | `string` |

Defined in:  [lib/swagger-types.ts:547](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L547)

##### `/submissions/\{submissionId}/publications/\{publicationId}/version`

> `object`

```ts
{
    post: {
        parameters: {
            path: {
                publicationId: number;
                submissionId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    abstract?: string;
                    authors?: {
                        affiliation?: string;
                        biography?: string;
                        country?: string;
                        email: string;
                        familyName?: string;
                        fullName?: string;
                        givenName: string;
                        id?: number;
                        includeInBrowse?: boolean;
                        orcid?: string;
                        preferredPublicName?: string;
                        publicationId: number;
                        seq?: number;
                        submissionLocale?: string;
                        url?: string;
                        userGroupId: number;
                        userGroupName?: string;
                    }[];
                    authorsString?: string;
                    authorsStringIncludeInBrowse?: string;
                    authorsStringShort?: string;
                    categoryIds?: number[];
                    citations?: string[];
                    citationsRaw?: string;
                    copyrightHolder?: string;
                    copyrightYear?: number;
                    coverImage?: {
                        altText?: string;
                        dateUploaded?: string;
                        temporaryFileId?: number;
                        uploadName?: string;
                    };
                    coverage?: string;
                    datePublished?: string;
                    disciplines?: string[];
                    doiId?: number;
                    doiObject?: {
                        contextId: number;
                        doi: string;
                        id?: number;
                        resolvingUrl?: string;
                        status?: number;
                    }[];
                    fullTitle?: string;
                    id?: number;
                    keywords?: string[];
                    languages?: string[];
                    lastModified?: string;
                    licenseUrl?: string;
                    locale: string;
                    prefix?: string;
                    primaryContactId?: number;
                    pub-id::publisher-id?: string;
                    rights?: string;
                    seq?: number;
                    source?: string;
                    status?: number;
                    subjects?: string[];
                    submissionId: number;
                    subtitle?: {
                    };
                    supportingAgencies?: string[];
                    title: {
                    };
                    type?: string;
                    urlPath?: string;
                    urlPublished?: string;
                    version: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `post` | `object` | Duplicate a publication, including author and galley records, in order to create a new version of a publication that can be edited. |
| `post.parameters` | {     `path`: {         `publicationId`: `number`;         `submissionId`: `number`;     }; } | - |
| `post.parameters.path` | {     `publicationId`: `number`;     `submissionId`: `number`; } | - |
| `post.parameters.path.publicationId` | `number` | Publication ID |
| `post.parameters.path.submissionId` | `number` | Submission ID |
| `post.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `abstract`?: `string`;             `authors`?: {                 `affiliation`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `email`: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`: `string`;                 `id`?: `number`;                 `includeInBrowse`?: `boolean`;                 `orcid`?: `string`;                 `preferredPublicName`?: `string`;                 `publicationId`: `number`;                 `seq`?: `number`;                 `submissionLocale`?: `string`;                 `url`?: `string`;                 `userGroupId`: `number`;                 `userGroupName`?: `string`;             }[];             `authorsString`?: `string`;             `authorsStringIncludeInBrowse`?: `string`;             `authorsStringShort`?: `string`;             `categoryIds`?: `number`[];             `citations`?: `string`[];             `citationsRaw`?: `string`;             `copyrightHolder`?: `string`;             `copyrightYear`?: `number`;             `coverImage`?: {                 `altText`?: `string`;                 `dateUploaded`?: `string`;                 `temporaryFileId`?: `number`;                 `uploadName`?: `string`;             };             `coverage`?: `string`;             `datePublished`?: `string`;             `disciplines`?: `string`[];             `doiId`?: `number`;             `doiObject`?: {                 `contextId`: `number`;                 `doi`: `string`;                 `id`?: `number`;                 `resolvingUrl`?: `string`;                 `status`?: `number`;             }[];             `fullTitle`?: `string`;             `id`?: `number`;             `keywords`?: `string`[];             `languages`?: `string`[];             `lastModified`?: `string`;             `licenseUrl`?: `string`;             `locale`: `string`;             `prefix`?: `string`;             `primaryContactId`?: `number`;             `pub-id::publisher-id`?: `string`;             `rights`?: `string`;             `seq`?: `number`;             `source`?: `string`;             `status`?: `number`;             `subjects`?: `string`[];             `submissionId`: `number`;             `subtitle`?: {             };             `supportingAgencies`?: `string`[];             `title`: {             };             `type`?: `string`;             `urlPath`?: `string`;             `urlPublished`?: `string`;             `version`: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `post.responses.200` | {     `schema`: {         `_href`?: `string`;         `abstract`?: `string`;         `authors`?: {             `affiliation`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `email`: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`: `string`;             `id`?: `number`;             `includeInBrowse`?: `boolean`;             `orcid`?: `string`;             `preferredPublicName`?: `string`;             `publicationId`: `number`;             `seq`?: `number`;             `submissionLocale`?: `string`;             `url`?: `string`;             `userGroupId`: `number`;             `userGroupName`?: `string`;         }[];         `authorsString`?: `string`;         `authorsStringIncludeInBrowse`?: `string`;         `authorsStringShort`?: `string`;         `categoryIds`?: `number`[];         `citations`?: `string`[];         `citationsRaw`?: `string`;         `copyrightHolder`?: `string`;         `copyrightYear`?: `number`;         `coverImage`?: {             `altText`?: `string`;             `dateUploaded`?: `string`;             `temporaryFileId`?: `number`;             `uploadName`?: `string`;         };         `coverage`?: `string`;         `datePublished`?: `string`;         `disciplines`?: `string`[];         `doiId`?: `number`;         `doiObject`?: {             `contextId`: `number`;             `doi`: `string`;             `id`?: `number`;             `resolvingUrl`?: `string`;             `status`?: `number`;         }[];         `fullTitle`?: `string`;         `id`?: `number`;         `keywords`?: `string`[];         `languages`?: `string`[];         `lastModified`?: `string`;         `licenseUrl`?: `string`;         `locale`: `string`;         `prefix`?: `string`;         `primaryContactId`?: `number`;         `pub-id::publisher-id`?: `string`;         `rights`?: `string`;         `seq`?: `number`;         `source`?: `string`;         `status`?: `number`;         `subjects`?: `string`[];         `submissionId`: `number`;         `subtitle`?: {         };         `supportingAgencies`?: `string`[];         `title`: {         };         `type`?: `string`;         `urlPath`?: `string`;         `urlPublished`?: `string`;         `version`: `number`;     }; } | Details of the new publication that was created. |
| `post.responses.200.schema` | {     `_href`?: `string`;     `abstract`?: `string`;     `authors`?: {         `affiliation`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `email`: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`: `string`;         `id`?: `number`;         `includeInBrowse`?: `boolean`;         `orcid`?: `string`;         `preferredPublicName`?: `string`;         `publicationId`: `number`;         `seq`?: `number`;         `submissionLocale`?: `string`;         `url`?: `string`;         `userGroupId`: `number`;         `userGroupName`?: `string`;     }[];     `authorsString`?: `string`;     `authorsStringIncludeInBrowse`?: `string`;     `authorsStringShort`?: `string`;     `categoryIds`?: `number`[];     `citations`?: `string`[];     `citationsRaw`?: `string`;     `copyrightHolder`?: `string`;     `copyrightYear`?: `number`;     `coverImage`?: {         `altText`?: `string`;         `dateUploaded`?: `string`;         `temporaryFileId`?: `number`;         `uploadName`?: `string`;     };     `coverage`?: `string`;     `datePublished`?: `string`;     `disciplines`?: `string`[];     `doiId`?: `number`;     `doiObject`?: {         `contextId`: `number`;         `doi`: `string`;         `id`?: `number`;         `resolvingUrl`?: `string`;         `status`?: `number`;     }[];     `fullTitle`?: `string`;     `id`?: `number`;     `keywords`?: `string`[];     `languages`?: `string`[];     `lastModified`?: `string`;     `licenseUrl`?: `string`;     `locale`: `string`;     `prefix`?: `string`;     `primaryContactId`?: `number`;     `pub-id::publisher-id`?: `string`;     `rights`?: `string`;     `seq`?: `number`;     `source`?: `string`;     `status`?: `number`;     `subjects`?: `string`[];     `submissionId`: `number`;     `subtitle`?: {     };     `supportingAgencies`?: `string`[];     `title`: {     };     `type`?: `string`;     `urlPath`?: `string`;     `urlPublished`?: `string`;     `version`: `number`; } | - |
| `post.responses.200.schema._href`? | `string` | Format: uri |
| `post.responses.200.schema.abstract`? | `string` | - |
| `post.responses.200.schema.authors`? | {     `affiliation`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `email`: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`: `string`;     `id`?: `number`;     `includeInBrowse`?: `boolean`;     `orcid`?: `string`;     `preferredPublicName`?: `string`;     `publicationId`: `number`;     `seq`?: `number`;     `submissionLocale`?: `string`;     `url`?: `string`;     `userGroupId`: `number`;     `userGroupName`?: `string`; }[] | `Description`  A list of the authors for this publication. |
| `post.responses.200.schema.authorsString`? | `string` | `Description`  All of the authors rendered with the appropriate separators according to the locale. |
| `post.responses.200.schema.authorsStringIncludeInBrowse`? | `string` | `Description`  A list of authors that are included in publication lists, like tables of content and search results, rendered with the appropriate separators according to the locale. |
| `post.responses.200.schema.authorsStringShort`? | `string` | `Description`  A shortened version of the authors rendered with the appropriate separators according to the locale. |
| `post.responses.200.schema.categoryIds`? | `number`[] | - |
| `post.responses.200.schema.citations`? | `string`[] | `Description`  Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. |
| `post.responses.200.schema.citationsRaw`? | `string` | `Description`  Optional metadata that contains references for works cited in this submission as raw text. |
| `post.responses.200.schema.copyrightHolder`? | `string` | `Description`  The copyright statement for this publication. |
| `post.responses.200.schema.copyrightYear`? | `number` | `Description`  The copyright year for this publication. |
| `post.responses.200.schema.coverImage`? | {     `altText`?: `string`;     `dateUploaded`?: `string`;     `temporaryFileId`?: `number`;     `uploadName`?: `string`; } | - |
| `post.responses.200.schema.coverImage.altText`? | `string` | - |
| `post.responses.200.schema.coverImage.dateUploaded`? | `string` | - |
| `post.responses.200.schema.coverImage.temporaryFileId`? | `number` | - |
| `post.responses.200.schema.coverImage.uploadName`? | `string` | - |
| `post.responses.200.schema.coverage`? | `string` | `Description`  Optional metadata that usually indicates a work's location, time period or jurisdiction. |
| `post.responses.200.schema.datePublished`? | `string` | - |
| `post.responses.200.schema.disciplines`? | `string`[] | `Description`  Optional metadata that describes the submission's types of study or branches of knowledge. |
| `post.responses.200.schema.doiId`? | `number` | `Description`  Reference to the DOI for this publication |
| `post.responses.200.schema.doiObject`? | {     `contextId`: `number`;     `doi`: `string`;     `id`?: `number`;     `resolvingUrl`?: `string`;     `status`?: `number`; }[] | `Description`  DOI object for this publication |
| `post.responses.200.schema.fullTitle`? | `string` | `Description`  The combined prefix, title and subtitle. |
| `post.responses.200.schema.id`? | `number` | - |
| `post.responses.200.schema.keywords`? | `string`[] | `Description`  Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. |
| `post.responses.200.schema.languages`? | `string`[] | `Description`  Optional metadata that identifies the submission's primary language. |
| `post.responses.200.schema.lastModified`? | `string` | - |
| `post.responses.200.schema.licenseUrl`? | `string` | `Description`  A URL to a webpage describing the license terms for this publication. |
| `post.responses.200.schema.locale` | `string` | `Description`  The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. |
| `post.responses.200.schema.prefix`? | `string` | `Description`  A prefix to be prepended to the title. In English, words such as "The" and "A" are commonly entered in the prefix instead of the title. |
| `post.responses.200.schema.primaryContactId`? | `number` | `Description`  Which `contributor` is the primary contact for this publication. |
| `post.responses.200.schema.pub-id::publisher-id`? | `string` | `Description`  A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. |
| `post.responses.200.schema.rights`? | `string` | `Description`  Optional metadata that describes any rights held over the submission. |
| `post.responses.200.schema.seq`? | `number` | - |
| `post.responses.200.schema.source`? | `string` | `Description`  Optional metadata that may be an ID, such as a DOI, of another work from which the submission is derived. |
| `post.responses.200.schema.status`? | `number` | `Description`  Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `PKPSubmission::STATUS_*` constants. Default is `PKPSubmission::STATUS_QUEUED`.  `Default`  1 |
| `post.responses.200.schema.subjects`? | `string`[] | `Description`  Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. |
| `post.responses.200.schema.submissionId` | `number` | - |
| `post.responses.200.schema.subtitle`? | {  } | - |
| `post.responses.200.schema.supportingAgencies`? | `string`[] | `Description`  Optional metadata that indicates the source of research funding or other institutional support. |
| `post.responses.200.schema.title` | {  } | - |
| `post.responses.200.schema.type`? | `string` | `Description`  Optional metadata that describes the type of the submission and usually matches on of the [Dublin Core Types](http://dublincore.org/documents/dcmi-type-vocabulary/#section-7-dcmi-type-vocabulary). |
| `post.responses.200.schema.urlPath`? | `string` | `Description`  An optional path to use in the URL instead of the ID. |
| `post.responses.200.schema.urlPublished`? | `string` | `Description`  The public URL for this publication or where it will be available if it has not yet been published. |
| `post.responses.200.schema.version` | `number` | `Description`  The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. |
| `post.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The publication you want to version does not belong to this submission. |
| `post.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.403.schema.error`? | `string` | - |
| `post.responses.403.schema.errorMessage`? | `string` | - |
| `post.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | The publication could not be found. |
| `post.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.404.schema.error`? | `string` | - |
| `post.responses.404.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:485](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L485)

##### `/temporaryFiles`

> `object`

```ts
{
    options: {
        responses: {
            200: unknown;
        };
    };
    post: {
        parameters: {
            body: {
                ...?: unknown;
            };
        };
        responses: {
            200: {
                schema: {
                    documentType?: string;
                    id?: number;
                    mimetype?: string;
                    name?: string;
                };
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `options` | `object` | Responds with the appopriate headers to indicate file uploads maybe be sent, required by some file upload utilities which send a preflight request. |
| `options.responses` | {     `200`: `unknown`; } | - |
| `options.responses.200` | `unknown` | An empty response body. |
| `post` | `object` | Upload a file to the temporary file storage area and receive a temporary file ID. |
| `post.parameters` | {     `body`: {         `...`?: `unknown`;     }; } | - |
| `post.parameters.body` | {     `...`?: `unknown`; } | - |
| `post.parameters.body....`? | `unknown` | Use any parameter key to upload your file. The API endpoint will retrieve the first uploaded file. |
| `post.responses` | {     `200`: {         `schema`: {             `documentType`?: `string`;             `id`?: `number`;             `mimetype`?: `string`;             `name`?: `string`;         };     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } | - |
| `post.responses.200` | {     `schema`: {         `documentType`?: `string`;         `id`?: `number`;         `mimetype`?: `string`;         `name`?: `string`;     }; } | The temporary file ID to use in other API requests. |
| `post.responses.200.schema` | {     `documentType`?: `string`;     `id`?: `number`;     `mimetype`?: `string`;     `name`?: `string`; } | - |
| `post.responses.200.schema.documentType`? | `string` | - |
| `post.responses.200.schema.id`? | `number` | - |
| `post.responses.200.schema.mimetype`? | `string` | - |
| `post.responses.200.schema.name`? | `string` | - |
| `post.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } | No uploaded file could be found. |
| `post.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } | - |
| `post.responses.400.schema.error`? | `string` | - |
| `post.responses.400.schema.errorMessage`? | `string` | - |

Defined in:  [lib/swagger-types.ts:1739](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1739)

##### `/users`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                assignedToSection?: number;
                assignedToSubmission?: number;
                assignedToSubmissionStage?: number;
                count?: number;
                offset?: number;
                orderBy?: "id" | "familyName" | "givenName";
                orderDirection?: "ASC" | "DESC";
                roleIds?: number[];
                searchPhrase?: string;
                status?: "active" | "disabled" | "all";
            };
        };
        responses: {
            200: {
                schema: {
                    items?: {
                        _href?: string;
                        affiliation?: string;
                        apiKey?: string;
                        apiKeyEnabled?: boolean;
                        authId?: number;
                        authStr?: string;
                        billingAddress?: string;
                        biography?: string;
                        country?: string;
                        dateLastEmail?: string;
                        dateLastLogin?: string;
                        dateRegistered?: string;
                        dateValidated?: string;
                        disabled?: boolean;
                        disabledReason?: string;
                        email?: string;
                        familyName?: string;
                        fullName?: string;
                        givenName?: string;
                        gossip?: string;
                        groups?: {
                            abbrev?: {
                            };
                            id?: number;
                            name?: {
                            };
                            permitSelfRegistration?: boolean;
                            recommendOnly?: boolean;
                            roleId?: number;
                            showTitle?: boolean;
                        }[];
                        id?: number;
                        inlineHelp?: boolean;
                        interests?: {
                            id?: number;
                            interest?: string;
                        }[];
                        locales?: string[];
                        mailingAddress?: string;
                        mustChangePassword?: boolean;
                        orcid?: string;
                        password?: string;
                        phone?: string;
                        preferredPublicName?: string;
                        profileImage?: {
                            dateUploaded?: string;
                            height?: number;
                            name?: string;
                            uploadName?: string;
                            width?: number;
                        };
                        signature?: string;
                        url?: string;
                        userName?: string;
                    }[];
                    itemsMax?: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `get` | `object` |
| `get.parameters` | {     `query`: {         `assignedToSection`?: `number`;         `assignedToSubmission`?: `number`;         `assignedToSubmissionStage`?: `number`;         `count`?: `number`;         `offset`?: `number`;         `orderBy`?: `"id"` | `"familyName"` | `"givenName"`;         `orderDirection`?: `"ASC"` | `"DESC"`;         `roleIds`?: `number`[];         `searchPhrase`?: `string`;         `status`?: `"active"` | `"disabled"` | `"all"`;     }; } |
| `get.parameters.query` | {     `assignedToSection`?: `number`;     `assignedToSubmission`?: `number`;     `assignedToSubmissionStage`?: `number`;     `count`?: `number`;     `offset`?: `number`;     `orderBy`?: `"id"` | `"familyName"` | `"givenName"`;     `orderDirection`?: `"ASC"` | `"DESC"`;     `roleIds`?: `number`[];     `searchPhrase`?: `string`;     `status`?: `"active"` | `"disabled"` | `"all"`; } |
| `get.parameters.query.assignedToSection`? | `number` |
| `get.parameters.query.assignedToSubmission`? | `number` |
| `get.parameters.query.assignedToSubmissionStage`? | `number` |
| `get.parameters.query.count`? | `number` |
| `get.parameters.query.offset`? | `number` |
| `get.parameters.query.orderBy`? | `"id"` | `"familyName"` | `"givenName"` |
| `get.parameters.query.orderDirection`? | `"ASC"` | `"DESC"` |
| `get.parameters.query.roleIds`? | `number`[] |
| `get.parameters.query.searchPhrase`? | `string` |
| `get.parameters.query.status`? | `"active"` | `"disabled"` | `"all"` |
| `get.responses` | {     `200`: {         `schema`: {             `items`?: {                 `_href`?: `string`;                 `affiliation`?: `string`;                 `apiKey`?: `string`;                 `apiKeyEnabled`?: `boolean`;                 `authId`?: `number`;                 `authStr`?: `string`;                 `billingAddress`?: `string`;                 `biography`?: `string`;                 `country`?: `string`;                 `dateLastEmail`?: `string`;                 `dateLastLogin`?: `string`;                 `dateRegistered`?: `string`;                 `dateValidated`?: `string`;                 `disabled`?: `boolean`;                 `disabledReason`?: `string`;                 `email`?: `string`;                 `familyName`?: `string`;                 `fullName`?: `string`;                 `givenName`?: `string`;                 `gossip`?: `string`;                 `groups`?: {                     `abbrev`?: {                     };                     `id`?: `number`;                     `name`?: {                     };                     `permitSelfRegistration`?: `boolean`;                     `recommendOnly`?: `boolean`;                     `roleId`?: `number`;                     `showTitle`?: `boolean`;                 }[];                 `id`?: `number`;                 `inlineHelp`?: `boolean`;                 `interests`?: {                     `id`?: `number`;                     `interest`?: `string`;                 }[];                 `locales`?: `string`[];                 `mailingAddress`?: `string`;                 `mustChangePassword`?: `boolean`;                 `orcid`?: `string`;                 `password`?: `string`;                 `phone`?: `string`;                 `preferredPublicName`?: `string`;                 `profileImage`?: {                     `dateUploaded`?: `string`;                     `height`?: `number`;                     `name`?: `string`;                     `uploadName`?: `string`;                     `width`?: `number`;                 };                 `signature`?: `string`;                 `url`?: `string`;                 `userName`?: `string`;             }[];             `itemsMax`?: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } |
| `get.responses.200` | {     `schema`: {         `items`?: {             `_href`?: `string`;             `affiliation`?: `string`;             `apiKey`?: `string`;             `apiKeyEnabled`?: `boolean`;             `authId`?: `number`;             `authStr`?: `string`;             `billingAddress`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `dateLastEmail`?: `string`;             `dateLastLogin`?: `string`;             `dateRegistered`?: `string`;             `dateValidated`?: `string`;             `disabled`?: `boolean`;             `disabledReason`?: `string`;             `email`?: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`?: `string`;             `gossip`?: `string`;             `groups`?: {                 `abbrev`?: {                 };                 `id`?: `number`;                 `name`?: {                 };                 `permitSelfRegistration`?: `boolean`;                 `recommendOnly`?: `boolean`;                 `roleId`?: `number`;                 `showTitle`?: `boolean`;             }[];             `id`?: `number`;             `inlineHelp`?: `boolean`;             `interests`?: {                 `id`?: `number`;                 `interest`?: `string`;             }[];             `locales`?: `string`[];             `mailingAddress`?: `string`;             `mustChangePassword`?: `boolean`;             `orcid`?: `string`;             `password`?: `string`;             `phone`?: `string`;             `preferredPublicName`?: `string`;             `profileImage`?: {                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `signature`?: `string`;             `url`?: `string`;             `userName`?: `string`;         }[];         `itemsMax`?: `number`;     }; } |
| `get.responses.200.schema` | {     `items`?: {         `_href`?: `string`;         `affiliation`?: `string`;         `apiKey`?: `string`;         `apiKeyEnabled`?: `boolean`;         `authId`?: `number`;         `authStr`?: `string`;         `billingAddress`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `dateLastEmail`?: `string`;         `dateLastLogin`?: `string`;         `dateRegistered`?: `string`;         `dateValidated`?: `string`;         `disabled`?: `boolean`;         `disabledReason`?: `string`;         `email`?: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`?: `string`;         `gossip`?: `string`;         `groups`?: {             `abbrev`?: {             };             `id`?: `number`;             `name`?: {             };             `permitSelfRegistration`?: `boolean`;             `recommendOnly`?: `boolean`;             `roleId`?: `number`;             `showTitle`?: `boolean`;         }[];         `id`?: `number`;         `inlineHelp`?: `boolean`;         `interests`?: {             `id`?: `number`;             `interest`?: `string`;         }[];         `locales`?: `string`[];         `mailingAddress`?: `string`;         `mustChangePassword`?: `boolean`;         `orcid`?: `string`;         `password`?: `string`;         `phone`?: `string`;         `preferredPublicName`?: `string`;         `profileImage`?: {             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `uploadName`?: `string`;             `width`?: `number`;         };         `signature`?: `string`;         `url`?: `string`;         `userName`?: `string`;     }[];     `itemsMax`?: `number`; } |
| `get.responses.200.schema.items`? | {     `_href`?: `string`;     `affiliation`?: `string`;     `apiKey`?: `string`;     `apiKeyEnabled`?: `boolean`;     `authId`?: `number`;     `authStr`?: `string`;     `billingAddress`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `dateLastEmail`?: `string`;     `dateLastLogin`?: `string`;     `dateRegistered`?: `string`;     `dateValidated`?: `string`;     `disabled`?: `boolean`;     `disabledReason`?: `string`;     `email`?: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`?: `string`;     `gossip`?: `string`;     `groups`?: {         `abbrev`?: {         };         `id`?: `number`;         `name`?: {         };         `permitSelfRegistration`?: `boolean`;         `recommendOnly`?: `boolean`;         `roleId`?: `number`;         `showTitle`?: `boolean`;     }[];     `id`?: `number`;     `inlineHelp`?: `boolean`;     `interests`?: {         `id`?: `number`;         `interest`?: `string`;     }[];     `locales`?: `string`[];     `mailingAddress`?: `string`;     `mustChangePassword`?: `boolean`;     `orcid`?: `string`;     `password`?: `string`;     `phone`?: `string`;     `preferredPublicName`?: `string`;     `profileImage`?: {         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `uploadName`?: `string`;         `width`?: `number`;     };     `signature`?: `string`;     `url`?: `string`;     `userName`?: `string`; }[] |
| `get.responses.200.schema.itemsMax`? | `number` |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `get.responses.403.schema.error`? | `string` |
| `get.responses.403.schema.errorMessage`? | `string` |

Defined in:  [lib/swagger-types.ts:826](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L826)

##### `/users/reviewers`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                averageCompletion?: number;
                count?: number;
                daysSinceLastAssignment?: string;
                offset?: number;
                orderBy?: "id" | "familyName" | "givenName";
                orderDirection?: "ASC" | "DESC";
                reviewStage?: number;
                reviewerRating?: number;
                reviewsActive?: string;
                reviewsCompleted?: string;
                searchPhrase?: string;
                status?: "active" | "disabled" | "all";
            };
        };
        responses: {
            200: {
                schema: {
                    items?: {
                        _href?: string;
                        affiliation?: {
                        };
                        averageReviewCompletionDays?: number;
                        dateLastReviewAssignment?: string;
                        disabled?: boolean;
                        fullName?: string;
                        gossip?: {
                        };
                        groups?: {
                            abbrev?: {
                            };
                            id?: number;
                            name?: {
                            };
                            permitSelfRegistration?: boolean;
                            recommendOnly?: boolean;
                            roleId?: number;
                            showTitle?: boolean;
                        }[];
                        id?: number;
                        interests?: {
                            id?: number;
                            interest?: string;
                        }[];
                        reviewsActive?: number;
                        reviewsCancelled?: number;
                        reviewsCompleted?: number;
                        reviewsDeclined?: number;
                        userName?: string;
                    }[];
                    itemsMax?: number;
                };
            };
            403: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `get` | `object` |
| `get.parameters` | {     `query`: {         `averageCompletion`?: `number`;         `count`?: `number`;         `daysSinceLastAssignment`?: `string`;         `offset`?: `number`;         `orderBy`?: `"id"` | `"familyName"` | `"givenName"`;         `orderDirection`?: `"ASC"` | `"DESC"`;         `reviewStage`?: `number`;         `reviewerRating`?: `number`;         `reviewsActive`?: `string`;         `reviewsCompleted`?: `string`;         `searchPhrase`?: `string`;         `status`?: `"active"` | `"disabled"` | `"all"`;     }; } |
| `get.parameters.query` | {     `averageCompletion`?: `number`;     `count`?: `number`;     `daysSinceLastAssignment`?: `string`;     `offset`?: `number`;     `orderBy`?: `"id"` | `"familyName"` | `"givenName"`;     `orderDirection`?: `"ASC"` | `"DESC"`;     `reviewStage`?: `number`;     `reviewerRating`?: `number`;     `reviewsActive`?: `string`;     `reviewsCompleted`?: `string`;     `searchPhrase`?: `string`;     `status`?: `"active"` | `"disabled"` | `"all"`; } |
| `get.parameters.query.averageCompletion`? | `number` |
| `get.parameters.query.count`? | `number` |
| `get.parameters.query.daysSinceLastAssignment`? | `string` |
| `get.parameters.query.offset`? | `number` |
| `get.parameters.query.orderBy`? | `"id"` | `"familyName"` | `"givenName"` |
| `get.parameters.query.orderDirection`? | `"ASC"` | `"DESC"` |
| `get.parameters.query.reviewStage`? | `number` |
| `get.parameters.query.reviewerRating`? | `number` |
| `get.parameters.query.reviewsActive`? | `string` |
| `get.parameters.query.reviewsCompleted`? | `string` |
| `get.parameters.query.searchPhrase`? | `string` |
| `get.parameters.query.status`? | `"active"` | `"disabled"` | `"all"` |
| `get.responses` | {     `200`: {         `schema`: {             `items`?: {                 `_href`?: `string`;                 `affiliation`?: {                 };                 `averageReviewCompletionDays`?: `number`;                 `dateLastReviewAssignment`?: `string`;                 `disabled`?: `boolean`;                 `fullName`?: `string`;                 `gossip`?: {                 };                 `groups`?: {                     `abbrev`?: {                     };                     `id`?: `number`;                     `name`?: {                     };                     `permitSelfRegistration`?: `boolean`;                     `recommendOnly`?: `boolean`;                     `roleId`?: `number`;                     `showTitle`?: `boolean`;                 }[];                 `id`?: `number`;                 `interests`?: {                     `id`?: `number`;                     `interest`?: `string`;                 }[];                 `reviewsActive`?: `number`;                 `reviewsCancelled`?: `number`;                 `reviewsCompleted`?: `number`;                 `reviewsDeclined`?: `number`;                 `userName`?: `string`;             }[];             `itemsMax`?: `number`;         };     };     `403`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } |
| `get.responses.200` | {     `schema`: {         `items`?: {             `_href`?: `string`;             `affiliation`?: {             };             `averageReviewCompletionDays`?: `number`;             `dateLastReviewAssignment`?: `string`;             `disabled`?: `boolean`;             `fullName`?: `string`;             `gossip`?: {             };             `groups`?: {                 `abbrev`?: {                 };                 `id`?: `number`;                 `name`?: {                 };                 `permitSelfRegistration`?: `boolean`;                 `recommendOnly`?: `boolean`;                 `roleId`?: `number`;                 `showTitle`?: `boolean`;             }[];             `id`?: `number`;             `interests`?: {                 `id`?: `number`;                 `interest`?: `string`;             }[];             `reviewsActive`?: `number`;             `reviewsCancelled`?: `number`;             `reviewsCompleted`?: `number`;             `reviewsDeclined`?: `number`;             `userName`?: `string`;         }[];         `itemsMax`?: `number`;     }; } |
| `get.responses.200.schema` | {     `items`?: {         `_href`?: `string`;         `affiliation`?: {         };         `averageReviewCompletionDays`?: `number`;         `dateLastReviewAssignment`?: `string`;         `disabled`?: `boolean`;         `fullName`?: `string`;         `gossip`?: {         };         `groups`?: {             `abbrev`?: {             };             `id`?: `number`;             `name`?: {             };             `permitSelfRegistration`?: `boolean`;             `recommendOnly`?: `boolean`;             `roleId`?: `number`;             `showTitle`?: `boolean`;         }[];         `id`?: `number`;         `interests`?: {             `id`?: `number`;             `interest`?: `string`;         }[];         `reviewsActive`?: `number`;         `reviewsCancelled`?: `number`;         `reviewsCompleted`?: `number`;         `reviewsDeclined`?: `number`;         `userName`?: `string`;     }[];     `itemsMax`?: `number`; } |
| `get.responses.200.schema.items`? | {     `_href`?: `string`;     `affiliation`?: {     };     `averageReviewCompletionDays`?: `number`;     `dateLastReviewAssignment`?: `string`;     `disabled`?: `boolean`;     `fullName`?: `string`;     `gossip`?: {     };     `groups`?: {         `abbrev`?: {         };         `id`?: `number`;         `name`?: {         };         `permitSelfRegistration`?: `boolean`;         `recommendOnly`?: `boolean`;         `roleId`?: `number`;         `showTitle`?: `boolean`;     }[];     `id`?: `number`;     `interests`?: {         `id`?: `number`;         `interest`?: `string`;     }[];     `reviewsActive`?: `number`;     `reviewsCancelled`?: `number`;     `reviewsCompleted`?: `number`;     `reviewsDeclined`?: `number`;     `userName`?: `string`; }[] |
| `get.responses.200.schema.itemsMax`? | `number` |
| `get.responses.403` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `get.responses.403.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `get.responses.403.schema.error`? | `string` |
| `get.responses.403.schema.errorMessage`? | `string` |

Defined in:  [lib/swagger-types.ts:883](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L883)

##### `/users/\{userId}`

> `object`

```ts
{
    get: {
        parameters: {
            path: {
                userId: number;
            };
        };
        responses: {
            200: {
                schema: {
                    _href?: string;
                    affiliation?: string;
                    apiKey?: string;
                    apiKeyEnabled?: boolean;
                    authId?: number;
                    authStr?: string;
                    billingAddress?: string;
                    biography?: string;
                    country?: string;
                    dateLastEmail?: string;
                    dateLastLogin?: string;
                    dateRegistered?: string;
                    dateValidated?: string;
                    disabled?: boolean;
                    disabledReason?: string;
                    email?: string;
                    familyName?: string;
                    fullName?: string;
                    givenName?: string;
                    gossip?: string;
                    groups?: {
                        abbrev?: {
                        };
                        id?: number;
                        name?: {
                        };
                        permitSelfRegistration?: boolean;
                        recommendOnly?: boolean;
                        roleId?: number;
                        showTitle?: boolean;
                    }[];
                    id?: number;
                    inlineHelp?: boolean;
                    interests?: {
                        id?: number;
                        interest?: string;
                    }[];
                    locales?: string[];
                    mailingAddress?: string;
                    mustChangePassword?: boolean;
                    orcid?: string;
                    password?: string;
                    phone?: string;
                    preferredPublicName?: string;
                    profileImage?: {
                        dateUploaded?: string;
                        height?: number;
                        name?: string;
                        uploadName?: string;
                        width?: number;
                    };
                    signature?: string;
                    url?: string;
                    userName?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `get` | `object` |
| `get.parameters` | {     `path`: {         `userId`: `number`;     }; } |
| `get.parameters.path` | {     `userId`: `number`; } |
| `get.parameters.path.userId` | `number` |
| `get.responses` | {     `200`: {         `schema`: {             `_href`?: `string`;             `affiliation`?: `string`;             `apiKey`?: `string`;             `apiKeyEnabled`?: `boolean`;             `authId`?: `number`;             `authStr`?: `string`;             `billingAddress`?: `string`;             `biography`?: `string`;             `country`?: `string`;             `dateLastEmail`?: `string`;             `dateLastLogin`?: `string`;             `dateRegistered`?: `string`;             `dateValidated`?: `string`;             `disabled`?: `boolean`;             `disabledReason`?: `string`;             `email`?: `string`;             `familyName`?: `string`;             `fullName`?: `string`;             `givenName`?: `string`;             `gossip`?: `string`;             `groups`?: {                 `abbrev`?: {                 };                 `id`?: `number`;                 `name`?: {                 };                 `permitSelfRegistration`?: `boolean`;                 `recommendOnly`?: `boolean`;                 `roleId`?: `number`;                 `showTitle`?: `boolean`;             }[];             `id`?: `number`;             `inlineHelp`?: `boolean`;             `interests`?: {                 `id`?: `number`;                 `interest`?: `string`;             }[];             `locales`?: `string`[];             `mailingAddress`?: `string`;             `mustChangePassword`?: `boolean`;             `orcid`?: `string`;             `password`?: `string`;             `phone`?: `string`;             `preferredPublicName`?: `string`;             `profileImage`?: {                 `dateUploaded`?: `string`;                 `height`?: `number`;                 `name`?: `string`;                 `uploadName`?: `string`;                 `width`?: `number`;             };             `signature`?: `string`;             `url`?: `string`;             `userName`?: `string`;         };     }; } |
| `get.responses.200` | {     `schema`: {         `_href`?: `string`;         `affiliation`?: `string`;         `apiKey`?: `string`;         `apiKeyEnabled`?: `boolean`;         `authId`?: `number`;         `authStr`?: `string`;         `billingAddress`?: `string`;         `biography`?: `string`;         `country`?: `string`;         `dateLastEmail`?: `string`;         `dateLastLogin`?: `string`;         `dateRegistered`?: `string`;         `dateValidated`?: `string`;         `disabled`?: `boolean`;         `disabledReason`?: `string`;         `email`?: `string`;         `familyName`?: `string`;         `fullName`?: `string`;         `givenName`?: `string`;         `gossip`?: `string`;         `groups`?: {             `abbrev`?: {             };             `id`?: `number`;             `name`?: {             };             `permitSelfRegistration`?: `boolean`;             `recommendOnly`?: `boolean`;             `roleId`?: `number`;             `showTitle`?: `boolean`;         }[];         `id`?: `number`;         `inlineHelp`?: `boolean`;         `interests`?: {             `id`?: `number`;             `interest`?: `string`;         }[];         `locales`?: `string`[];         `mailingAddress`?: `string`;         `mustChangePassword`?: `boolean`;         `orcid`?: `string`;         `password`?: `string`;         `phone`?: `string`;         `preferredPublicName`?: `string`;         `profileImage`?: {             `dateUploaded`?: `string`;             `height`?: `number`;             `name`?: `string`;             `uploadName`?: `string`;             `width`?: `number`;         };         `signature`?: `string`;         `url`?: `string`;         `userName`?: `string`;     }; } |
| `get.responses.200.schema` | {     `_href`?: `string`;     `affiliation`?: `string`;     `apiKey`?: `string`;     `apiKeyEnabled`?: `boolean`;     `authId`?: `number`;     `authStr`?: `string`;     `billingAddress`?: `string`;     `biography`?: `string`;     `country`?: `string`;     `dateLastEmail`?: `string`;     `dateLastLogin`?: `string`;     `dateRegistered`?: `string`;     `dateValidated`?: `string`;     `disabled`?: `boolean`;     `disabledReason`?: `string`;     `email`?: `string`;     `familyName`?: `string`;     `fullName`?: `string`;     `givenName`?: `string`;     `gossip`?: `string`;     `groups`?: {         `abbrev`?: {         };         `id`?: `number`;         `name`?: {         };         `permitSelfRegistration`?: `boolean`;         `recommendOnly`?: `boolean`;         `roleId`?: `number`;         `showTitle`?: `boolean`;     }[];     `id`?: `number`;     `inlineHelp`?: `boolean`;     `interests`?: {         `id`?: `number`;         `interest`?: `string`;     }[];     `locales`?: `string`[];     `mailingAddress`?: `string`;     `mustChangePassword`?: `boolean`;     `orcid`?: `string`;     `password`?: `string`;     `phone`?: `string`;     `preferredPublicName`?: `string`;     `profileImage`?: {         `dateUploaded`?: `string`;         `height`?: `number`;         `name`?: `string`;         `uploadName`?: `string`;         `width`?: `number`;     };     `signature`?: `string`;     `url`?: `string`;     `userName`?: `string`; } |
| `get.responses.200.schema._href`? | `string` |
| `get.responses.200.schema.affiliation`? | `string` |
| `get.responses.200.schema.apiKey`? | `string` |
| `get.responses.200.schema.apiKeyEnabled`? | `boolean` |
| `get.responses.200.schema.authId`? | `number` |
| `get.responses.200.schema.authStr`? | `string` |
| `get.responses.200.schema.billingAddress`? | `string` |
| `get.responses.200.schema.biography`? | `string` |
| `get.responses.200.schema.country`? | `string` |
| `get.responses.200.schema.dateLastEmail`? | `string` |
| `get.responses.200.schema.dateLastLogin`? | `string` |
| `get.responses.200.schema.dateRegistered`? | `string` |
| `get.responses.200.schema.dateValidated`? | `string` |
| `get.responses.200.schema.disabled`? | `boolean` |
| `get.responses.200.schema.disabledReason`? | `string` |
| `get.responses.200.schema.email`? | `string` |
| `get.responses.200.schema.familyName`? | `string` |
| `get.responses.200.schema.fullName`? | `string` |
| `get.responses.200.schema.givenName`? | `string` |
| `get.responses.200.schema.gossip`? | `string` |
| `get.responses.200.schema.groups`? | {     `abbrev`?: {     };     `id`?: `number`;     `name`?: {     };     `permitSelfRegistration`?: `boolean`;     `recommendOnly`?: `boolean`;     `roleId`?: `number`;     `showTitle`?: `boolean`; }[] |
| `get.responses.200.schema.id`? | `number` |
| `get.responses.200.schema.inlineHelp`? | `boolean` |
| `get.responses.200.schema.interests`? | {     `id`?: `number`;     `interest`?: `string`; }[] |
| `get.responses.200.schema.locales`? | `string`[] |
| `get.responses.200.schema.mailingAddress`? | `string` |
| `get.responses.200.schema.mustChangePassword`? | `boolean` |
| `get.responses.200.schema.orcid`? | `string` |
| `get.responses.200.schema.password`? | `string` |
| `get.responses.200.schema.phone`? | `string` |
| `get.responses.200.schema.preferredPublicName`? | `string` |
| `get.responses.200.schema.profileImage`? | {     `dateUploaded`?: `string`;     `height`?: `number`;     `name`?: `string`;     `uploadName`?: `string`;     `width`?: `number`; } |
| `get.responses.200.schema.profileImage.dateUploaded`? | `string` |
| `get.responses.200.schema.profileImage.height`? | `number` |
| `get.responses.200.schema.profileImage.name`? | `string` |
| `get.responses.200.schema.profileImage.uploadName`? | `string` |
| `get.responses.200.schema.profileImage.width`? | `number` |
| `get.responses.200.schema.signature`? | `string` |
| `get.responses.200.schema.url`? | `string` |
| `get.responses.200.schema.userName`? | `string` |

Defined in:  [lib/swagger-types.ts:867](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L867)

##### `/vocabs`

> `object`

```ts
{
    get: {
        parameters: {
            query: {
                locale?: string;
                vocab: string;
            };
        };
        responses: {
            200: {
                schema: string[];
            };
            400: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
            404: {
                schema: {
                    error?: string;
                    errorMessage?: string;
                };
            };
        };
    };
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `get` | `object` |
| `get.parameters` | {     `query`: {         `locale`?: `string`;         `vocab`: `string`;     }; } |
| `get.parameters.query` | {     `locale`?: `string`;     `vocab`: `string`; } |
| `get.parameters.query.locale`? | `string` |
| `get.parameters.query.vocab` | `string` |
| `get.responses` | {     `200`: {         `schema`: `string`[];     };     `400`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     };     `404`: {         `schema`: {             `error`?: `string`;             `errorMessage`?: `string`;         };     }; } |
| `get.responses.200` | {     `schema`: `string`[]; } |
| `get.responses.200.schema` | `string`[] |
| `get.responses.400` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `get.responses.400.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `get.responses.400.schema.error`? | `string` |
| `get.responses.400.schema.errorMessage`? | `string` |
| `get.responses.404` | {     `schema`: {         `error`?: `string`;         `errorMessage`?: `string`;     }; } |
| `get.responses.404.schema` | {     `error`?: `string`;     `errorMessage`?: `string`; } |
| `get.responses.404.schema.error`? | `string` |
| `get.responses.404.schema.errorMessage`? | `string` |

Defined in:  [lib/swagger-types.ts:1713](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/swagger-types.ts#L1713)

***

### `Responses`

> <`path`, `method`> [`paths`](modules.md#paths)[`path`][`method`] *extends* {
> `responses`: `any`;
> } ? [`paths`](modules.md#paths)[`path`][`method`][keyof [`paths`](modules.md#paths)[`path`][`method`][`"responses"`]] : `never`

#### Type parameters

*   `path` *extends* keyof [`paths`](modules.md#paths)
*   `method` *extends* keyof [`paths`](modules.md#paths)[`path`]

Defined in:  [lib/types.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/types.ts#L70)

***

### `SubmissionQuery`

> `object`

```ts
{
    assignedTo: number[];
    count: number;
    daysInactive: number;
    isIncomplete: boolean;
    isOverdue: boolean;
    issueIds: number[];
    offset: number;
    orderBy: "dateSubmitted" | "dateLastActivity" | "lastModified" | "title";
    orderDirection: "ASC" | "DESC";
    searchPhrase: string;
    sectionIds: number[];
    status: (1 | 2 | 3 | 4 | 5)[];
}
```

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `assignedTo` | `number`[] | Filter results by those assigned to one or more user ids. All users except managers and admins are automatically restricted to assigned submissions and do not need to pass this parameter. |
| `count` | `number` | Default: 20  How many results to return in a single request. Max is 100. |
| `daysInactive` | `number` | Filter the results by those which have not had activity for the last X days. |
| `isIncomplete` | `boolean` | Filter the results by those for which the author has not yet completed the submission process. |
| `isOverdue` | `boolean` | Filter the results by those for which a reviewer has missed a deadline. |
| `issueIds` | `number`[] | Filter the results by those with one or more publications assigned to an issue. |
| `offset` | `number` | Offset the results returned. Use this to receive subsequent pages of requests. A count of 10 and offset of 15 will return results 15 to 25. |
| `orderBy` | `"dateSubmitted"` | `"dateLastActivity"` | `"lastModified"` | `"title"` | Default: "dateSubmitted"  Order the results returned. |
| `orderDirection` | `"ASC"` | `"DESC"` | Default: "DESC"  Return the results in ascending or descending order. |
| `searchPhrase` | `string` | Filter the results by a search phrase matched against the title and authors. |
| `sectionIds` | `number`[] | Filter the results by those with one or more publications assigned to a section. |
| `status` | (`1` | `2` | `3` | `4` | `5`)[] | Filter results by one or more submission statuses. Must match the value of one of the STATUS\_QUEUED, STATUS\_SCHEDULED, STATUS\_PUBLISHED or STATUS\_DECLINED constants. |

Defined in:  [lib/types.ts:3](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ojs/ojs-client/src/lib/types.ts#L3)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add ojs-client
# or with yarn
# yarn add ojs-client
# or with npm
# npm install ojs-client
```

# ojs-client

Small Node HTTP client for communicating with your OJS's REST API

## Running unit tests

Run `nx test ojs-ojs-client` to execute the unit tests via [Jest](https://jestjs.io).
