export interface Announcement {
  /**
   * Format: uri
   * @description The URL to this announcement in the REST API.
   */
  _href?: string
  /** @description The journal, press or preprint server ID. */
  assocId?: number
  /** @description The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS). */
  assocType?: number
  /** @description (Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers. */
  dateExpire?: string
  /** @description The date this announcement was posted. */
  datePosted?: string
  description?: LocaleObject
  descriptionShort?: LocaleObject
  id?: number
  title?: LocaleObject
  /** @description (Optional) One of the announcement type ids. */
  typeId?: number
}
export interface Author {
  affiliation?: LocaleObject
  biography?: LocaleObject
  country?: string
  email?: string
  familyName?: LocaleObject
  givenName?: LocaleObject
  id?: number
  /**
   * @description Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.
   * @default true
   */
  includeInBrowse?: boolean
  /** @description The ORCID of this contributor. See: https://orcid.org/ */
  orcid?: string
  preferredPublicName?: LocaleObject
  publicationId?: number
  /** @description The order in which this contributor should appear in a list of contriibutors. */
  seq?: number
  /** @description The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property. */
  submissionLocale?: string
  /** @description An optional URL to this contributor's webpage. */
  url?: string
  /** @description in which user group should this contributor be identified. Usually one of the author roles, such as Author or Translator. */
  userGroupId?: number
}
export interface Context {
  /** Format: uri */
  _href?: string
  abbreviation?: LocaleObject
  about?: LocaleObject
  acronym?: LocaleObject
  additionalHomeContent?: LocaleObject
  /** @description Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  agencies?: string
  announcementsIntroduction?: LocaleObject
  authorGuidelines?: LocaleObject
  authorInformation?: LocaleObject
  /** @description Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  citations?: string
  clockssLicense?: LocaleObject
  competingInterests?: LocaleObject
  contactAffiliation?: LocaleObject
  contactEmail?: string
  contactName?: string
  contactPhone?: string
  copyrightHolderOther?: LocaleObject
  copyrightHolderType?: string
  copyrightNotice?: LocaleObject
  /** @default issue */
  copyrightYearBasis?: string
  /** @description Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  coverage?: string
  currency?: string
  customHeaders?: LocaleObject
  dateFormatLong?: LocaleObject
  dateFormatShort?: LocaleObject
  datetimeFormatLong?: LocaleObject
  datetimeFormatShort?: LocaleObject
  defaultMetricType?: string
  /** @default 2 */
  defaultReviewMode?: number
  delayedOpenAccessDuration?: number
  delayedOpenAccessPolicy?: LocaleObject
  description?: LocaleObject
  /** @description User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property. */
  disableBulkEmailUserGroups?: number[]
  /** @default false */
  disableSubmissions?: boolean
  disableUserReg?: boolean
  /** @description Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  disciplines?: string
  editorialTeam?: LocaleObject
  emailSignature?: string
  enableAnnouncements?: boolean
  enableClockss?: boolean
  enableLockss?: boolean
  /** @default 1 */
  enableOai?: boolean
  enableOpenAccessNotification?: boolean
  enablePublisherId?: string[]
  enableSubscriptionOnlinePaymentNotificationPurchaseIndividual?: boolean
  enableSubscriptionOnlinePaymentNotificationPurchaseInstitutional?: boolean
  enableSubscriptionOnlinePaymentNotificationRenewIndividual?: boolean
  enableSubscriptionOnlinePaymentNotificationRenewInstitutional?: boolean
  enabled?: boolean
  envelopeSender?: string
  favicon?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  homepageImage?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  id?: number
  /** @default 25 */
  itemsPerPage?: number
  journalThumbnail?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  /**
   * @description Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.
   * @default request
   */
  keywords?: string
  /** @description Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  languages?: string
  librarianInformation?: LocaleObject
  licenseTerms?: LocaleObject
  licenseUrl?: string
  lockssLicense?: LocaleObject
  mailingAddress?: string
  /** @default 0 */
  membershipFee?: number
  membershipFeeDescription?: LocaleObject
  membershipFeeName?: LocaleObject
  name?: LocaleObject
  numAnnouncementsHomepage?: number
  numDaysBeforeInviteReminder?: number
  numDaysBeforeSubmitReminder?: number
  numMonthsAfterSubscriptionExpiryReminder?: number
  numMonthsBeforeSubscriptionExpiryReminder?: number
  /** @default 10 */
  numPageLinks?: number
  numWeeksAfterSubscriptionExpiryReminder?: number
  numWeeksBeforeSubscriptionExpiryReminder?: number
  /** @default 4 */
  numWeeksPerResponse?: number
  /** @default 4 */
  numWeeksPerReview?: number
  onlineIssn?: string
  openAccessPolicy?: LocaleObject
  pageFooter?: LocaleObject
  pageHeaderLogoImage?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  paymentPluginName?: string
  paymentsEnabled?: boolean
  primaryLocale?: string
  printIssn?: string
  privacyStatement?: LocaleObject
  /** @default 0 */
  publicationFee?: number
  publicationFeeDescription?: LocaleObject
  publicationFeeName?: LocaleObject
  publisherInstitution?: string
  publishingMode?: number
  /** @default 0 */
  purchaseArticleFee?: number
  purchaseArticleFeeDescription?: LocaleObject
  purchaseArticleFeeEnabled?: boolean
  purchaseArticleFeeName?: LocaleObject
  purchaseIssueFee?: number
  purchaseIssueFeeEnabled?: boolean
  rateReviewerOnQuality?: boolean
  readerInformation?: LocaleObject
  restrictArticleAccess?: boolean
  restrictOnlyPdf?: boolean
  restrictReviewerFileAccess?: boolean
  restrictSiteAccess?: boolean
  reviewGuidelines?: LocaleObject
  reviewerAccessKeysEnabled?: boolean
  /** @description Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  rights?: string
  searchDescription?: LocaleObject
  seq?: number
  showEnsuringLink?: boolean
  sidebar?: string[]
  /** @description Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  source?: string
  styleSheet?: {
    name?: string
    uploadName?: string
    dateUploaded?: string
  }
  /** @description Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  subjects?: string
  /**
   * @default [
   *   {
   *     "order": 1,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.notPreviouslyPublished"
   *     }
   *   },
   *   {
   *     "order": 2,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.fileFormat"
   *     }
   *   },
   *   {
   *     "order": 3,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.addressesLinked"
   *     }
   *   },
   *   {
   *     "order": 4,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.submissionAppearance"
   *     }
   *   },
   *   {
   *     "order": 5,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.bibliographicRequirements"
   *     }
   *   }
   * ]
   */
  submissionChecklist?: {
    order?: number
    content?: string
  }[]
  submissionFee?: number
  submissionFeeDescription?: LocaleObject
  submissionFeeName?: LocaleObject
  subscriptionAdditionalInformation?: LocaleObject
  subscriptionEmail?: string
  subscriptionExpiryPartial?: boolean
  subscriptionMailingAddress?: string
  subscriptionName?: string
  subscriptionPhone?: string
  supportEmail?: string
  supportName?: string
  supportPhone?: string
  supportedFormLocales?: string[]
  supportedLocales?: string[]
  supportedSubmissionLocales?: string[]
  /** @default default */
  themePluginPath?: string
  timeFormat?: LocaleObject
  /** @description Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  type?: string
  url?: string
  urlPath?: string
}
/** @description A response object that will be returned when the request could not be fulfilled. */
export interface ErrorResponse {
  error?: string
  errorMessage?: string
}
export interface EmailTemplate {
  /** Format: uri */
  _href?: string
  body?: LocaleObject
  /** @description Can this email template be disabled in the context settings area? Default is `true`. */
  canDisable?: boolean
  /** @description Can this email template be edited in the context settings area? Default is `true`. */
  canEdit?: boolean
  /** @description The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`. */
  contextId?: number
  description?: LocaleObject
  /** @description Is this email template enabled? Default is `true`. */
  enabled?: boolean
  /** @description The `ROLE_ID_*` of the user who will send this email. */
  fromRoleId?: number
  /** @description The email template ID. */
  id?: number
  /** @description A unique key for this email template. */
  key?: string
  /** @description The `WORKFLOW_STAGE_ID_*` that email template is associated with or `null` if it is not associated with a stage. */
  stageId?: number
  subject?: LocaleObject
  /** @description The `ROLE_ID_*` of the user who will receive this email. */
  toRoleId?: number
}
export interface Galley {
  file?: SubmissionFile
  id?: number
  isApproved?: boolean
  /** @description A human-readable label for this galley. For the primary article, it is usually indicates the format like PDF, ePub or full text. For supplementary files it often indicates the content, such as source data or interview transcripts. */
  label?: string
  /** @description The primary locale of this galley. */
  locale?: string
  /** @description A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. */
  'pub-id::publisher-id'?: string
  publicationId?: number
  /** @description In what order this galley should appear in lists of galleys for this publication. */
  seq?: number
  submissionFileId?: number
  /** @description An optional path to use in the URL instead of the ID. */
  urlPath?: string
  /** @description The URL where this galley can be viewed or downloaded. */
  urlPublished?: string
  /** @description An optional URL where the galley can be viewed or downloaded. */
  urlRemote?: string
}
/**
 * @description A response object that will be returned when there are validation errors for the request parameters. Typically used with forms.
 * @example {
 *   "name": [
 *     "You must provide a name to create a new user."
 *   ],
 *   "roles": [
 *     "You must assign the user to one or more roles."
 *   ]
 * }
 */
export interface InvalidParametersResponse {
  [key: string]: unknown
}
export interface Issue {
  _href?: string
  articles?: SubmissionSummary[]
  coverImageAltText?: LocaleObject
  coverImageUrl?: LocaleObject
  dateNotified?: string
  datePublished?: string
  description?: LocaleObject
  doi?: string
  galleys?: Galley[]
  id?: number
  identification?: string
  isCurrent?: boolean
  lastModified?: string
  number?: string
  publishedUrl?: string
  sections?: SectionSummary[]
  title?: LocaleObject
  /** @description An optional path to use in the URL instead of the ID. */
  urlPath?: string
  volume?: number
  year?: number
}
/**
 * @description Key/value pairs containing data stored by locale key.
 * @example {
 *   "en_US": "Filename",
 *   "fr_CA": "Nom de fichier"
 * }
 */
export interface LocaleObject {
  [key: string]: unknown
}
export interface Publication {
  /** Format: uri */
  _href?: string
  abstract?: LocaleObject
  /** @default 0 */
  accessStatus?: number
  /** @description A list of the authors for this publication. */
  authors?: Author[]
  /** @description All of the authors rendered with the appropriate separators according to the locale. */
  authorsString?: string
  /** @description A shortened version of the authors rendered with the appropriate separators according to the locale. */
  authorsStringShort?: string
  categoryIds?: number[]
  /** @description Optional metadata that contains an array of references for works cited in this submission. References have been split and parsed from the raw text. */
  citations?: string[]
  /** @description Optional metadata that contains references for works cited in this submission as raw text. */
  citationsRaw?: string
  copyrightHolder?: LocaleObject
  /** @description The copyright year for this publication. */
  copyrightYear?: number
  coverImage?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      dateUploaded?: string
      uploadName?: string
      altText?: string
    }
    fr_CA?: {
      dateUploaded?: string
      uploadName?: string
      altText?: string
    }
  }
  coverage?: LocaleObject
  datePublished?: string
  /** @description Optional metadata that describes the submission's types of study or branches of knowledge. */
  disciplines?: string[]
  fullTitle?: LocaleObject
  galleys?: Galley[]
  /**
   * @description Whether the contributor details should be displayed for this publication. Commonly used for editorial statements without individual authorship.
   * @default false
   */
  hideAuthor?: boolean
  id?: number
  issueId?: number
  /** @description Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. */
  keywords?: string[]
  /** @description Optional metadata that identifies the submission's primary language. */
  languages?: string[]
  lastModified?: string
  /** @description A URL to a webpage describing the license terms for this publication. */
  licenseUrl?: string
  /** @description The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. */
  locale?: string
  /** @description The pages of the issue in which this article appears if it is published in a physical format. */
  pages?: string
  prefix?: LocaleObject
  /** @description Which `contributor` is the primary contact for this publication. */
  primaryContactId?: number
  /** @description A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. */
  'pub-id::publisher-id'?: string
  rights?: LocaleObject
  sectionId?: number
  /** @default 0 */
  seq?: number
  source?: LocaleObject
  /**
   * @description Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.
   * @default 1
   */
  status?: number
  /** @description Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. */
  subjects?: string[]
  submissionId?: number
  subtitle?: LocaleObject
  /** @description Optional metadata that indicates the source of research funding or other institutional support. */
  supportingAgencies?: string[]
  title?: LocaleObject
  type?: LocaleObject
  /** @description An optional path to use in the URL instead of the ID. */
  urlPath?: string
  /** @description The public URL for this publication or where it will be available if it has not yet been published. */
  urlPublished?: string
  /** @description The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. */
  version?: number
}
/** @description The total abstract and galley views for a published submission. */
export interface PublicationStats {
  abstractViews?: number
  galleyViews?: number
  pdfViews?: number
  htmlViews?: number
  otherViews?: number
  publication?: {
    _href?: string
    fullTitle?: LocaleObject
    id?: number
    shortAuthorString?: string
    urlPublished?: string
    urlWorkflow?: string
  }
}
export interface ReviewRound {
  id?: number
  round?: number
  stageId?: number
  status?: string
  statusId?: number
}
/** @description A special representation of a User assigned to a reviewer group. This model presents specific details about review activity. */
export interface ReviewerSummary {
  _href?: string
  affiliation?: LocaleObject
  averageReviewCompletionDays?: number
  dateLastReviewAssignment?: string
  disabled?: boolean
  fullName?: string
  gossip?: LocaleObject
  groups?: UserGroup[]
  id?: number
  interests?: UserInterest[]
  reviewsActive?: number
  reviewsCompleted?: number
  reviewsCancelled?: number
  reviewsDeclined?: number
  userName?: string
}
export interface Section {
  abbrev?: LocaleObject
  id?: number
  seq?: number
  title?: LocaleObject
}
export interface Site {
  about?: LocaleObject
  contactEmail?: LocaleObject
  contactName?: LocaleObject
  /** @description Which hosted journals, presses or preprint servers are allowed to send bulk emails. */
  enableBulkEmails?: number[]
  installedLocales?: string[]
  minPasswordLength?: number
  pageFooter?: LocaleObject
  pageHeaderTitleImage?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  primaryLocale?: string
  privacyStatement?: LocaleObject
  redirect?: number
  sidebar?: string[]
  styleSheet?: {
    name?: string
    uploadName?: string
    dateUploaded?: string
  }
  supportedLocales?: string[]
  /** @default default */
  themePluginPath?: string
  title?: LocaleObject
}
export interface Submission {
  _href?: string
  contextId?: number
  /** @description Which publication is the latest published version. */
  currentPublicationId?: number
  /** @description The last time activity was recorded related to this submission. */
  dateLastActivity?: string
  dateSubmitted?: string
  id?: number
  /** @description The last time a modification was made to this submission or any of its associated objects. */
  lastModified?: string
  /** @description The primary language of this submission. */
  locale?: string
  /** @description A list of publications that have been created for this submission. */
  publications?: Publication[]
  /** @description Information about pending and completed review assignments. */
  reviewAssignments?: {
    id?: number
    isCurrentUserAssigned?: number
    status?: number
    statusLabel?: number
    dateDue?: number
    dateResponseDue?: number
    round?: number
    reviewRoundId?: number
  }[]
  /** @description A list of review rounds that have been opened for this submission. */
  reviewRounds?: ReviewRound[]
  /**
   * @description The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.
   * @default 1
   */
  stageId?: number
  /** @description Key data about the status, files and discussions of each stage. */
  stages?: {
    id?: number
    label?: string
    isActiveStage?: boolean
    currentUserAssignedRoles?: number[]
    status?: string
    statusId?: number
    files?: {
      count?: number
    }
    queries?: unknown[]
  }[]
  /**
   * @description Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.
   * @default 1
   */
  status?: number
  /** @description A human-readable version of the submission's status. It will be Published, Declined, Queued (still in the workflow) or Scheduled. */
  statusLabel?: string
  /**
   * @description This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.
   * @default 1
   */
  submissionProgress?: number
  /** @description A URL to the author's editorial workflow. */
  urlAuthorWorkflow?: string
  /** @description A URL to the editors' and assistants' editorial workflow. */
  urlEditorialWorkflow?: string
  /** @description A URL to the current publication or where it will be published. */
  urlPublished?: string
  /** @description A URL to the workflow most appropriate for the current user. It will match the `urlAuthorWorkflow` or `urlEditorialWorkflow. */
  urlWorkflow?: string
}
export interface SubmissionFile {
  /** Format: uri */
  _href?: string
  /** @description Used with `assocType` to associate this file with an object such as a galley. */
  assocId?: number
  /** @description Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). */
  assocType?: number
  /** @description A caption for this file. Used with artwork such as images. */
  caption?: string
  /** @description The copyright owner of this file. Used with artwork such as images. */
  copyrightOwner?: string
  /** @description The date this submission file object was created in the system. Set automatically by the software. */
  createdAt?: string
  creator?: LocaleObject
  /** @description An attribution for this file, such as a photographer's name. Used with artwork such as images. */
  credit?: string
  /** @description Public metadata about when this content was created. Used with supplementary files. */
  dateCreated?: string
  /** @description Any dependent files, typically images or audio files that are loaded by an HTML file. */
  dependentFiles?: SubmissionFile[]
  description?: LocaleObject
  documentType?: string
  fileId?: number
  fileStage?: number
  genreId?: number
  id?: number
  /** @description The language of this file if it contains text. Used with supplementary files. */
  language?: string
  /** @description The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. */
  locale?: string
  mimetype?: string
  name?: LocaleObject
  path?: string
  publisher?: LocaleObject
  /** @description Previous versions of this file. */
  revisions?: {
    documentType?: string
    fileId?: number
    mimetype?: string
    path?: string
    url?: string
  }[]
  source?: LocaleObject
  /** @description When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. */
  sourceSubmissionFileId?: number
  sponsor?: LocaleObject
  subject?: LocaleObject
  submissionId?: number
  /** @description Licensing terms for this file. Used with artwork such as images. */
  terms?: string
  /** @description When this object was last updated. */
  updatedAt?: string
  uploaderUserId?: number
  url?: string
  viewable?: boolean
}
/** @description A theme with values for any of its theme options. The theme is provided in the `themePluginPath` key. Other keys may or may not exist depending on what options have been defined by that theme. */
export interface ThemeOptions {
  themePluginPath?: string
  '...'?: string
}
export interface TimelineInterval {
  date?: string
  label?: string
  value?: number
}
export interface User {
  _href?: string
  affiliation?: LocaleObject
  authId?: number
  authString?: string
  billingAddress?: string
  biography?: LocaleObject
  country?: string
  dateLastRegistered?: string
  dateRegistered?: string
  dateValidated?: string
  disabled?: boolean
  disabledReason?: string
  email?: string
  familyName?: LocaleObject
  fullName?: string
  givenName?: LocaleObject
  gossip?: LocaleObject
  groups?: UserGroup[]
  id?: number
  interests?: UserInterest[]
  mailingAddress?: string
  mustChangePassword?: boolean
  orcid?: string
  phone?: string
  signature?: LocaleObject
  url?: string
  userName?: string
}
export interface UserGroup {
  abbrev?: LocaleObject
  id?: number
  name?: LocaleObject
  permitSelfRegistration?: boolean
  recommendOnly?: boolean
  roleId?: number
  showTitle?: boolean
}
/** @description A user's review interests. */
export interface UserInterest {
  id?: number
  interest?: string
}
export interface AnnouncementEditable {
  /** @description The journal, press or preprint server ID. */
  assocId?: number
  /** @description The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS). */
  assocType?: number
  /** @description (Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers. */
  dateExpire?: string
  /** @description The date this announcement was posted. */
  datePosted?: string
  description?: LocaleObject
  descriptionShort?: LocaleObject
  id?: number
  title?: LocaleObject
  /** @description (Optional) One of the announcement type ids. */
  typeId?: number
}
export interface AnnouncementSummary {
  /**
   * Format: uri
   * @description The URL to this announcement in the REST API.
   */
  _href?: string
  /** @description The journal, press or preprint server ID. */
  assocId?: number
  /** @description The assoc object. This should always be `ASSOC_TYPE_JOURNAL` (OJS), `ASSOC_TYPE_PRESS` (OMP) or `ASSOC_TYPE_SERVER` (OPS). */
  assocType?: number
  /** @description (Optional) The date that this announcement expires, if one is set. This is typically used to express closing dates for calls for papers. */
  dateExpire?: string
  /** @description The date this announcement was posted. */
  datePosted?: string
  description?: LocaleObject
  descriptionShort?: LocaleObject
  id?: number
  title?: LocaleObject
  /** @description (Optional) One of the announcement type ids. */
  typeId?: number
}
export interface AuthorEditable {
  affiliation?: LocaleObject
  biography?: LocaleObject
  country?: string
  email?: string
  familyName?: LocaleObject
  givenName?: LocaleObject
  id?: number
  /**
   * @description Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.
   * @default true
   */
  includeInBrowse?: boolean
  /** @description The ORCID of this contributor. See: https://orcid.org/ */
  orcid?: string
  preferredPublicName?: LocaleObject
  publicationId?: number
  /** @description The order in which this contributor should appear in a list of contriibutors. */
  seq?: number
  /** @description An optional URL to this contributor's webpage. */
  url?: string
  /** @description in which user group should this contributor be identified. Usually one of the author roles, such as Author or Translator. */
  userGroupId?: number
}
export interface AuthorSummary {
  affiliation?: LocaleObject
  email?: string
  familyName?: LocaleObject
  givenName?: LocaleObject
  id?: number
  /**
   * @description Whether or not to include this contributor in author lists when the publication appears in search results, tables of content and catalog entries.
   * @default true
   */
  includeInBrowse?: boolean
  /** @description The ORCID of this contributor. See: https://orcid.org/ */
  orcid?: string
  preferredPublicName?: LocaleObject
  publicationId?: number
  /** @description The order in which this contributor should appear in a list of contriibutors. */
  seq?: number
  /** @description The primary locale of the submission this author is attached to. This locale is used as the fallback when a language is missing from a multilingual property. */
  submissionLocale?: string
  /** @description in which user group should this contributor be identified. Usually one of the author roles, such as Author or Translator. */
  userGroupId?: number
}
export interface ContextEditable {
  abbreviation?: LocaleObject
  about?: LocaleObject
  acronym?: LocaleObject
  additionalHomeContent?: LocaleObject
  /** @description Enable agencies metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  agencies?: string
  announcementsIntroduction?: LocaleObject
  authorGuidelines?: LocaleObject
  authorInformation?: LocaleObject
  /** @description Enable citations metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  citations?: string
  clockssLicense?: LocaleObject
  competingInterests?: LocaleObject
  contactAffiliation?: LocaleObject
  contactEmail?: string
  contactName?: string
  contactPhone?: string
  copyrightHolderOther?: LocaleObject
  copyrightHolderType?: string
  copyrightNotice?: LocaleObject
  /** @default issue */
  copyrightYearBasis?: string
  /** @description Enable coverage metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  coverage?: string
  currency?: string
  customHeaders?: LocaleObject
  dateFormatLong?: LocaleObject
  dateFormatShort?: LocaleObject
  datetimeFormatLong?: LocaleObject
  datetimeFormatShort?: LocaleObject
  defaultMetricType?: string
  /** @default 2 */
  defaultReviewMode?: number
  delayedOpenAccessDuration?: number
  delayedOpenAccessPolicy?: LocaleObject
  description?: LocaleObject
  /** @description User groups that a manager will be prevented from sending bulk email to using the notify feature. Only the admin may edit this property. */
  disableBulkEmailUserGroups?: number[]
  /** @default false */
  disableSubmissions?: boolean
  disableUserReg?: boolean
  /** @description Enable disciplines metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  disciplines?: string
  editorialTeam?: LocaleObject
  emailSignature?: string
  enableAnnouncements?: boolean
  enableClockss?: boolean
  enableLockss?: boolean
  /** @default 1 */
  enableOai?: boolean
  enableOpenAccessNotification?: boolean
  enablePublisherId?: string[]
  enableSubscriptionOnlinePaymentNotificationPurchaseIndividual?: boolean
  enableSubscriptionOnlinePaymentNotificationPurchaseInstitutional?: boolean
  enableSubscriptionOnlinePaymentNotificationRenewIndividual?: boolean
  enableSubscriptionOnlinePaymentNotificationRenewInstitutional?: boolean
  enabled?: boolean
  envelopeSender?: string
  favicon?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  homepageImage?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  /** @default 25 */
  itemsPerPage?: number
  journalThumbnail?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  /**
   * @description Enable keywords metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission.
   * @default request
   */
  keywords?: string
  /** @description Enable languages metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  languages?: string
  librarianInformation?: LocaleObject
  licenseTerms?: LocaleObject
  licenseUrl?: string
  lockssLicense?: LocaleObject
  mailingAddress?: string
  /** @default 0 */
  membershipFee?: number
  membershipFeeDescription?: LocaleObject
  membershipFeeName?: LocaleObject
  name?: LocaleObject
  numAnnouncementsHomepage?: number
  numDaysBeforeInviteReminder?: number
  numDaysBeforeSubmitReminder?: number
  numMonthsAfterSubscriptionExpiryReminder?: number
  numMonthsBeforeSubscriptionExpiryReminder?: number
  /** @default 10 */
  numPageLinks?: number
  numWeeksAfterSubscriptionExpiryReminder?: number
  numWeeksBeforeSubscriptionExpiryReminder?: number
  /** @default 4 */
  numWeeksPerResponse?: number
  /** @default 4 */
  numWeeksPerReview?: number
  onlineIssn?: string
  openAccessPolicy?: LocaleObject
  pageFooter?: LocaleObject
  pageHeaderLogoImage?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  paymentPluginName?: string
  paymentsEnabled?: boolean
  primaryLocale?: string
  printIssn?: string
  privacyStatement?: LocaleObject
  /** @default 0 */
  publicationFee?: number
  publicationFeeDescription?: LocaleObject
  publicationFeeName?: LocaleObject
  publisherInstitution?: string
  publishingMode?: number
  /** @default 0 */
  purchaseArticleFee?: number
  purchaseArticleFeeDescription?: LocaleObject
  purchaseArticleFeeEnabled?: boolean
  purchaseArticleFeeName?: LocaleObject
  purchaseIssueFee?: number
  purchaseIssueFeeEnabled?: boolean
  rateReviewerOnQuality?: boolean
  readerInformation?: LocaleObject
  restrictArticleAccess?: boolean
  restrictOnlyPdf?: boolean
  restrictReviewerFileAccess?: boolean
  restrictSiteAccess?: boolean
  reviewGuidelines?: LocaleObject
  reviewerAccessKeysEnabled?: boolean
  /** @description Enable rights metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  rights?: string
  searchDescription?: LocaleObject
  seq?: number
  showEnsuringLink?: boolean
  sidebar?: string[]
  /** @description Enable source metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  source?: string
  styleSheet?: {
    temporaryFileId?: number
    name?: string
    uploadName?: string
    dateUploaded?: string
  }
  /** @description Enable subjects metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  subjects?: string
  /**
   * @default [
   *   {
   *     "order": 1,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.notPreviouslyPublished"
   *     }
   *   },
   *   {
   *     "order": 2,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.fileFormat"
   *     }
   *   },
   *   {
   *     "order": 3,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.addressesLinked"
   *     }
   *   },
   *   {
   *     "order": 4,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.submissionAppearance"
   *     }
   *   },
   *   {
   *     "order": 5,
   *     "content": {
   *       "defaultLocaleKey": "default.contextSettings.checklist.bibliographicRequirements"
   *     }
   *   }
   * ]
   */
  submissionChecklist?: {
    order?: number
    content?: string
  }[]
  submissionFee?: number
  submissionFeeDescription?: LocaleObject
  submissionFeeName?: LocaleObject
  subscriptionAdditionalInformation?: LocaleObject
  subscriptionEmail?: string
  subscriptionExpiryPartial?: boolean
  subscriptionMailingAddress?: string
  subscriptionName?: string
  subscriptionPhone?: string
  supportEmail?: string
  supportName?: string
  supportPhone?: string
  supportedFormLocales?: string[]
  supportedLocales?: string[]
  supportedSubmissionLocales?: string[]
  /** @default default */
  themePluginPath?: string
  timeFormat?: LocaleObject
  /** @description Enable types metadata. `0` is disabled. `enable` will make it available in the workflow. `request` will allow an author to enter a value during submission. `require` will require that the author enter a value during submission. */
  type?: string
  urlPath?: string
}
export interface ContextSummary {
  /** Format: uri */
  _href?: string
  abbreviation?: LocaleObject
  acronym?: LocaleObject
  description?: LocaleObject
  enabled?: boolean
  id?: number
  journalThumbnail?: {
    type?: unknown
    properties?: unknown
    en_US?: { [key: string]: unknown }
    fr_CA?: { [key: string]: unknown }
  }
  name?: LocaleObject
  seq?: number
  url?: string
  urlPath?: string
}
export interface EmailTemplateEditable {
  body?: LocaleObject
  /** @description The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`. */
  contextId?: number
  /** @description Is this email template enabled? Default is `true`. */
  enabled?: boolean
  /** @description A unique key for this email template. */
  key?: string
  subject?: LocaleObject
}
export interface EmailTemplateSummary {
  /** Format: uri */
  _href?: string
  body?: LocaleObject
  /** @description Can this email template be disabled in the context settings area? Default is `true`. */
  canDisable?: boolean
  /** @description Can this email template be edited in the context settings area? Default is `true`. */
  canEdit?: boolean
  /** @description The ID of the context (journal/press) this email is related to. Only used for custom email templates. Default is `null`. */
  contextId?: number
  description?: LocaleObject
  /** @description Is this email template enabled? Default is `true`. */
  enabled?: boolean
  /** @description The `ROLE_ID_*` of the user who will send this email. */
  fromRoleId?: number
  /** @description The email template ID. */
  id?: number
  /** @description A unique key for this email template. */
  key?: string
  /** @description The `WORKFLOW_STAGE_ID_*` that email template is associated with or `null` if it is not associated with a stage. */
  stageId?: number
  subject?: LocaleObject
  /** @description The `ROLE_ID_*` of the user who will receive this email. */
  toRoleId?: number
}
export interface GalleyEditable {
  isApproved?: boolean
  /** @description A human-readable label for this galley. For the primary article, it is usually indicates the format like PDF, ePub or full text. For supplementary files it often indicates the content, such as source data or interview transcripts. */
  label?: string
  /** @description The primary locale of this galley. */
  locale?: string
  /** @description A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. */
  'pub-id::publisher-id'?: string
  publicationId?: number
  /** @description In what order this galley should appear in lists of galleys for this publication. */
  seq?: number
  submissionFileId?: number
  /** @description An optional path to use in the URL instead of the ID. */
  urlPath?: string
  /** @description An optional URL where the galley can be viewed or downloaded. */
  urlRemote?: string
}
export interface GalleySummary {
  file?: SubmissionFile
  id?: number
  isApproved?: boolean
  /** @description A human-readable label for this galley. For the primary article, it is usually indicates the format like PDF, ePub or full text. For supplementary files it often indicates the content, such as source data or interview transcripts. */
  label?: string
  /** @description The primary locale of this galley. */
  locale?: string
  /** @description A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. */
  'pub-id::publisher-id'?: string
  publicationId?: number
  /** @description In what order this galley should appear in lists of galleys for this publication. */
  seq?: number
  submissionFileId?: number
  /** @description The URL where this galley can be viewed or downloaded. */
  urlPublished?: string
  /** @description An optional URL where the galley can be viewed or downloaded. */
  urlRemote?: string
}
export interface IssueEditable {
  coverImageAltText?: LocaleObject
  coverImageUrl?: LocaleObject
  dateNotified?: string
  datePublished?: string
  description?: LocaleObject
  doi?: string
  id?: number
  lastModified?: string
  number?: string
  publishedUrl?: string
  title?: LocaleObject
  /** @description An optional path to use in the URL instead of the ID. */
  urlPath?: string
  volume?: number
  year?: number
}
export interface IssueSummary {
  _href?: string
  coverImageAltText?: LocaleObject
  coverImageUrl?: LocaleObject
  datePublished?: string
  description?: LocaleObject
  galleys?: Galley[]
  id?: number
  identification?: string
  number?: string
  publishedUrl?: string
  title?: LocaleObject
  volume?: number
  year?: number
}
export interface PublicationEditable {
  abstract?: LocaleObject
  /** @default 0 */
  accessStatus?: number
  categoryIds?: number[]
  /** @description Optional metadata that contains references for works cited in this submission as raw text. */
  citationsRaw?: string
  copyrightHolder?: LocaleObject
  /** @description The copyright year for this publication. */
  copyrightYear?: number
  coverImage?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      temporaryFileId?: number
      dateUploaded?: string
      uploadName?: string
      altText?: string
    }
    fr_CA?: {
      temporaryFileId?: number
      dateUploaded?: string
      uploadName?: string
      altText?: string
    }
  }
  coverage?: LocaleObject
  datePublished?: string
  /** @description Optional metadata that describes the submission's types of study or branches of knowledge. */
  disciplines?: string[]
  /**
   * @description Whether the contributor details should be displayed for this publication. Commonly used for editorial statements without individual authorship.
   * @default false
   */
  hideAuthor?: boolean
  issueId?: number
  /** @description Optional metadata, usually one- to three-word phrases that are used to indicate the main topics of a submission. */
  keywords?: string[]
  /** @description Optional metadata that identifies the submission's primary language. */
  languages?: string[]
  lastModified?: string
  /** @description A URL to a webpage describing the license terms for this publication. */
  licenseUrl?: string
  /** @description The pages of the issue in which this article appears if it is published in a physical format. */
  pages?: string
  prefix?: LocaleObject
  /** @description Which `contributor` is the primary contact for this publication. */
  primaryContactId?: number
  /** @description A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. */
  'pub-id::publisher-id'?: string
  rights?: LocaleObject
  sectionId?: number
  /** @default 0 */
  seq?: number
  source?: LocaleObject
  /**
   * @description Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.
   * @default 1
   */
  status?: number
  /** @description Optional metadata that consists of keywords, key phrases or classification codes that describe the submission's topics. */
  subjects?: string[]
  submissionId?: number
  subtitle?: LocaleObject
  /** @description Optional metadata that indicates the source of research funding or other institutional support. */
  supportingAgencies?: string[]
  title?: LocaleObject
  type?: LocaleObject
  /** @description An optional path to use in the URL instead of the ID. */
  urlPath?: string
  /** @description The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. */
  version?: number
}
export interface PublicationSummary {
  /** Format: uri */
  _href?: string
  /** @description All of the authors rendered with the appropriate separators according to the locale. */
  authorsString?: string
  /** @description A shortened version of the authors rendered with the appropriate separators according to the locale. */
  authorsStringShort?: string
  categoryIds?: number[]
  coverImage?: {
    type?: unknown
    properties?: unknown
    en_US?: { [key: string]: unknown }
    fr_CA?: { [key: string]: unknown }
  }
  datePublished?: string
  fullTitle?: LocaleObject
  galleys?: Galley[]
  id?: number
  /** @description The primary locale of the submission this publication is attached to. This locale is used as the fallback when a language is missing from a multilingual property. */
  locale?: string
  /** @description The pages of the issue in which this article appears if it is published in a physical format. */
  pages?: string
  prefix?: LocaleObject
  /** @description Which `contributor` is the primary contact for this publication. */
  primaryContactId?: number
  /** @description A unique ID provided by the publisher. It will be used in the publication's URL path instead of the `id` when present. */
  'pub-id::publisher-id'?: string
  sectionId?: number
  /**
   * @description Whether the publication is Queued (not yet scheduled for publication), Declined, Published or Scheduled (scheduled for publication at a future date). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.
   * @default 1
   */
  status?: number
  submissionId?: number
  subtitle?: LocaleObject
  title?: LocaleObject
  /** @description The public URL for this publication or where it will be available if it has not yet been published. */
  urlPublished?: string
  /** @description The version number of this publication. Version numbers should increment by one so that the third publication of a submission will have the version number `3`. Version numbers should typically be set automatically and editorial staff should not be encouraged to modify them. */
  version?: number
}
export interface ReviewRoundEditable {
  id?: number
  round?: number
  stageId?: number
  statusId?: number
}
export interface SectionEditable {
  abbrev?: LocaleObject
  id?: number
  seq?: number
  title?: LocaleObject
}
export interface SectionSummary {
  abbrev?: LocaleObject
  id?: number
  seq?: number
  title?: LocaleObject
}
export interface SiteEditable {
  about?: LocaleObject
  contactEmail?: LocaleObject
  contactName?: LocaleObject
  /** @description Which hosted journals, presses or preprint servers are allowed to send bulk emails. */
  enableBulkEmails?: number[]
  installedLocales?: string[]
  minPasswordLength?: number
  pageFooter?: LocaleObject
  pageHeaderTitleImage?: {
    type?: unknown
    properties?: unknown
    en_US?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
    fr_CA?: {
      temporaryFileId?: number
      name?: string
      uploadName?: string
      width?: number
      height?: number
      dateUploaded?: string
      altText?: string
    }
  }
  primaryLocale?: string
  privacyStatement?: LocaleObject
  redirect?: number
  sidebar?: string[]
  styleSheet?: {
    temporaryFileId?: number
    name?: string
    uploadName?: string
    dateUploaded?: string
  }
  supportedLocales?: string[]
  /** @default default */
  themePluginPath?: string
  title?: LocaleObject
}
export interface SubmissionEditable {
  contextId?: number
  /** @description Which publication is the latest published version. */
  currentPublicationId?: number
  /** @description The last time activity was recorded related to this submission. */
  dateLastActivity?: string
  dateSubmitted?: string
  id?: number
  /** @description The last time a modification was made to this submission or any of its associated objects. */
  lastModified?: string
  /** @description The primary language of this submission. */
  locale?: string
  /**
   * @description The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.
   * @default 1
   */
  stageId?: number
  /**
   * @description Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.
   * @default 1
   */
  status?: number
  /**
   * @description This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.
   * @default 1
   */
  submissionProgress?: number
}
export interface SubmissionSummary {
  _href?: string
  contextId?: number
  /** @description Which publication is the latest published version. */
  currentPublicationId?: number
  /** @description The last time activity was recorded related to this submission. */
  dateLastActivity?: string
  dateSubmitted?: string
  id?: number
  /** @description The last time a modification was made to this submission or any of its associated objects. */
  lastModified?: string
  /** @description The primary language of this submission. */
  locale?: string
  /** @description A list of publications that have been created for this submission. */
  publications?: Publication[]
  /**
   * @description The stage of the editorial workflow that this submission is currently in. One of the `WORKFLOW_STAGE_` constants. Default is `WORKFLOW_STAGE_SUBMISSION`.
   * @default 1
   */
  stageId?: number
  /**
   * @description Whether the submission is Published, Declined, Scheduled or Queued (still in the workflow). One of the `STATUS_*` constants. Default is `STATUS_QUEUED`.
   * @default 1
   */
  status?: number
  /** @description A human-readable version of the submission's status. It will be Published, Declined, Queued (still in the workflow) or Scheduled. */
  statusLabel?: string
  /**
   * @description This number tracks a submission's progress before it is submitted to the journal or press. After submission, it will be set to `0`, indicating it is ready for an editor's consideration.
   * @default 1
   */
  submissionProgress?: number
  /** @description A URL to the author's editorial workflow. */
  urlAuthorWorkflow?: string
  /** @description A URL to the editors' and assistants' editorial workflow. */
  urlEditorialWorkflow?: string
  /** @description A URL to the current publication or where it will be published. */
  urlPublished?: string
  /** @description A URL to the workflow most appropriate for the current user. It will match the `urlAuthorWorkflow` or `urlEditorialWorkflow. */
  urlWorkflow?: string
}
export interface SubmissionFileEditable {
  /** @description Used with `assocType` to associate this file with an object such as a galley. */
  assocId?: number
  /** @description Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). */
  assocType?: number
  /** @description A caption for this file. Used with artwork such as images. */
  caption?: string
  /** @description The copyright owner of this file. Used with artwork such as images. */
  copyrightOwner?: string
  /** @description The date this submission file object was created in the system. Set automatically by the software. */
  createdAt?: string
  creator?: LocaleObject
  /** @description An attribution for this file, such as a photographer's name. Used with artwork such as images. */
  credit?: string
  /** @description Public metadata about when this content was created. Used with supplementary files. */
  dateCreated?: string
  description?: LocaleObject
  /** Format: binary */
  file?: string
  fileId?: number
  fileStage?: number
  genreId?: number
  /** @description The language of this file if it contains text. Used with supplementary files. */
  language?: string
  name?: LocaleObject
  publisher?: LocaleObject
  source?: LocaleObject
  /** @description When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. */
  sourceSubmissionFileId?: number
  sponsor?: LocaleObject
  subject?: LocaleObject
  submissionId?: number
  /** @description Licensing terms for this file. Used with artwork such as images. */
  terms?: string
  /** @description When this object was last updated. */
  updatedAt?: string
  uploaderUserId?: number
  viewable?: boolean
}
export interface SubmissionFileSummary {
  /** Format: uri */
  _href?: string
  /** @description Used with `assocType` to associate this file with an object such as a galley. */
  assocId?: number
  /** @description Used with `assocId` to associate this file with an object such as a galley. One of the following constants: `ASSOC_TYPE_SUBMISSION_FILE` (dependent files), `ASSOC_TYPE_REVIEW_ASSIGNMENT` (files uploaded by a reviewer), `ASSOC_TYPE_NOTE` (files uploaded with a discussion), `ASSOC_TYPE_REPRESENTATION` (files uploaded to a galley or publication format), `ASSOC_TYPE_REVIEW_ROUND` (review files and revisions for a particular review round). */
  assocType?: number
  /** @description A caption for this file. Used with artwork such as images. */
  caption?: string
  /** @description The copyright owner of this file. Used with artwork such as images. */
  copyrightOwner?: string
  /** @description The date this submission file object was created in the system. Set automatically by the software. */
  createdAt?: string
  creator?: LocaleObject
  /** @description An attribution for this file, such as a photographer's name. Used with artwork such as images. */
  credit?: string
  /** @description Public metadata about when this content was created. Used with supplementary files. */
  dateCreated?: string
  description?: LocaleObject
  documentType?: string
  fileId?: number
  fileStage?: number
  genreId?: number
  id?: number
  /** @description The language of this file if it contains text. Used with supplementary files. */
  language?: string
  /** @description The primary locale of the submission this file is attached to. This locale is used as the fallback when a language is missing from a multilingual property. */
  locale?: string
  mimetype?: string
  name?: LocaleObject
  path?: string
  publisher?: LocaleObject
  source?: LocaleObject
  /** @description When a submission file is promoted from one stage to another, this property identifies the source file from which this file was promoted. Default: `null`. */
  sourceSubmissionFileId?: number
  sponsor?: LocaleObject
  subject?: LocaleObject
  submissionId?: number
  /** @description Licensing terms for this file. Used with artwork such as images. */
  terms?: string
  /** @description When this object was last updated. */
  updatedAt?: string
  uploaderUserId?: number
  url?: string
  viewable?: boolean
}
export interface UserEditable {
  affiliation?: LocaleObject
  authId?: number
  authString?: string
  billingAddress?: string
  biography?: LocaleObject
  country?: string
  dateLastRegistered?: string
  dateRegistered?: string
  dateValidated?: string
  disabled?: boolean
  disabledReason?: string
  email?: string
  familyName?: LocaleObject
  givenName?: LocaleObject
  gossip?: LocaleObject
  mailingAddress?: string
  mustChangePassword?: boolean
  orcid?: string
  phone?: string
  signature?: LocaleObject
  url?: string
  userName?: string
}
export interface UserSummary {
  _href?: string
  disabled?: boolean
  email?: string
  fullName?: string
  groups?: UserGroup[]
  id?: number
  orcid?: string
  userName?: string
}
export interface UserGroupEditable {
  abbrev?: LocaleObject
  id?: number
  name?: LocaleObject
  permitSelfRegistration?: boolean
  recommendOnly?: boolean
  roleId?: number
  showTitle?: boolean
}
