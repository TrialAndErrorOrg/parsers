import { paths } from './swagger-types.js'

export type SubmissionQuery = {
  /**
   * Filter results by those assigned to one or more user ids. All users except managers and admins are automatically restricted to assigned submissions and do not need to pass this parameter.
   */
  assignedTo: number[]

  /**
   * Default: 20
   *
   * How many results to return in a single request. Max is 100.
   */
  count: number

  /**
   * Filter the results by those which have not had activity for the last X days.
   */
  daysInactive: number

  /**
   * Filter the results by those for which the author has not yet completed the submission process.
   */
  isIncomplete: boolean

  /**
   * Filter the results by those for which a reviewer has missed a deadline.
   */
  isOverdue: boolean

  /**
   * Filter the results by those with one or more publications assigned to an issue.
   */
  issueIds: number[]

  /**
   * Offset the results returned. Use this to receive subsequent pages of requests. A count of 10 and offset of 15 will return results 15 to 25. */
  offset: number

  /**
   * Default: "dateSubmitted"
   *
   * Order the results returned.
   */
  orderBy: 'dateSubmitted' | 'dateLastActivity' | 'lastModified' | 'title'

  /**
   * Default: "DESC"
   *
   * Return the results in ascending or descending order.
   */
  orderDirection: 'ASC' | 'DESC'

  /**
   * Filter the results by a search phrase matched against the title and authors.
   */
  searchPhrase: string

  /**
   * Filter the results by those with one or more publications assigned to a section.
   */
  sectionIds: number[]

  /**
   * Filter results by one or more submission statuses. Must match the value of one of the STATUS_QUEUED, STATUS_SCHEDULED, STATUS_PUBLISHED or STATUS_DECLINED constants.
   */
  status: (1 | 2 | 3 | 4 | 5)[]
}

export type Responses<
  path extends keyof paths,
  method extends keyof paths[path],
> = paths[path][method] extends { responses: any }
  ? paths[path][method][keyof paths[path][method]['responses']]
  : never
