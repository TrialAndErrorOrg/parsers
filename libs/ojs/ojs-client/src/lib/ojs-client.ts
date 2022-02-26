import { Http2ServerResponse } from 'http2'
import { RequestOptions } from 'https'
import fetch from 'isomorphic-fetch'
import qs from 'qs'
import { paths } from './swagger-types'

const DEFAULT_ENDPOINT = 'https://submit.jtrialerror.com'

const buildMeta = (res: Response) => {
  if (!res || !res.headers) {
    return {}
  }

  return {
    rateLimit: {
      //@ts-expect-error hmm
      limit: parseInt(res.headers.get('x-ratelimit-limit'), 10),
      //@ts-expect-error hmm
      remaining: parseInt(res.headers.get('x-ratelimit-remaining'), 10),
    },
  }
}

const responseHandler = (res: Response) =>
  res
    .json()
    .then((body) => {
      if (res.status >= 400) {
        const errOpts = {
          code: body.code,
          msg: body.msg,
          _meta: buildMeta(res),
        }

        if (body.problems && body.problems.length > 0) {
          //@ts-expect-error hmm
          errOpts.problems = body.problems
        }

        const errMsg = body && body.err ? body.err : 'Unknown error occured'
        const err = new Error(errMsg)

        return Promise.reject(Object.assign(err, errOpts))
      }

      body._meta = buildMeta(res) // eslint-disable-line no-param-reassign

      return body
    })
    .catch((err) =>
      // Catch unexpected server errors where json isn't sent and rewrite
      // with proper class (WebflowError)
      {
        return Promise.reject(new Error(err))
      }
    )
function isObjectEmpty(object: Record<string, any>) {
  return !Object.keys(object).length
}

export default class OJS {
  //@ts-expect-error hmm
  endpoint: string
  //@ts-expect-error hmm
  token: string
  //@ts-expect-error hmm
  headers: {
    Accept: string
    'accept-version': string
    'Content-Type': string
    Cookie: string
    // Authorization: `Bearer ${string}`
  }
  //@ts-expect-error hmm
  cookie: string
  //@ts-expect-error hmm
  authenticatedFetch: (
    method: string,
    path: string,
    data?: Record<string, any> | false,
    query?: Record<string, any>
  ) => Promise<Response>
  constructor({
    endpoint = DEFAULT_ENDPOINT,
    token = '',
    version = '1.0.0',
    cookie = '',
  } = {}) {
    // if (!token) throw buildRequiredArgError('token')

    //  this.responseWrapper = new ResponseWrapper(this)
    if (!token) return

    this.endpoint = endpoint
    this.token = token
    this.cookie = ''

    this.headers = {
      // Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'accept-version': version,
      'Content-Type': 'application/json',
      Cookie: this.cookie,
    }

    this.authenticatedFetch = async (method, path, data, query = {}) => {
      const queryWithApiToken = { ...query, apiToken: this.token }
      const queryString = `?${qs.stringify(queryWithApiToken)}`

      const uri = `${this.endpoint}${path}${queryString}`
      const opts: RequestInit = {
        method,
        headers: this.headers,
        // mode: 'cors',
      }

      // if (data) {
      //   opts.body = JSON.stringify(data)
      // }

      const res = await fetch(uri, opts)
      return responseHandler(res)
    }
  }

  // Generic HTTP request handlers

  get(path: string, query: Record<string, any> = {}) {
    return this.authenticatedFetch('GET', path, false, query)
  }

  post(
    path: string,
    data: Record<string, any>,
    query: Record<string, any> = {}
  ) {
    return this.authenticatedFetch('POST', path, data, query)
  }

  put(
    path: string,
    data: Record<string, any>,
    query: Record<string, any> = {}
  ) {
    return this.authenticatedFetch('PUT', path, data, query)
  }

  patch(
    path: string,
    data: Record<string, any>,
    query: Record<string, any> = {}
  ) {
    return this.authenticatedFetch('PATCH', path, data, query)
  }

  delete(path: string, query: Record<string, any> = {}) {
    return this.authenticatedFetch('DELETE', path, query)
  }

  // Meta

  info(query = {}) {
    return this.get('/info', query)
  }

  // // init
  // async auth() {
  //   try {
  //     const login = await fetch(this.endpoint + '/api/login', {
  //       method: 'post',
  //       body: JSON.stringify({
  //         email: this.email,
  //         password: SHA3(this.password).toString(encHex),
  //       }),
  //       headers: {
  //         credentials: 'include',
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     const auth = await login.json()
  //     const headers = login.headers
  //     this.cookie = headers.get('set-cookie') || ''
  //     return { json: auth, response: login }
  //   } catch (e) {
  //     throw new Error(e as any)
  //   }
  // }
  // async many(query?: { [key: string]: any }) {
  //   return await this.authenticatedFetch(
  //     'post',
  //     '/api/pubs/many',
  //     query || {
  //       query: {
  //         term: '',
  //         ordering: { field: 'updatedDate', direction: 'DESC' },
  //         excludeCollectionIds: ['0d54a7d3-f225-4c1d-89e2-3c9653b6868d'],
  //         limit: 50,
  //         offset: 0,
  //         communityId: '27d9a5c8-30f3-44bd-971f-181388d53323',
  //       },
  //       pubOptions: { getCollections: true },
  //       alreadyFetchedPubIds: [],
  //     },
  //     {}
  //   )
  // }

  /**
   * Get a list of submissions
   */
  async submissions(
    query: paths['/submissions']['get']['parameters']['query'] = {}
  ) {
    const submissions = (await (
      await this.get('/submissions', query)
    ).json()) as paths['/submissions']['get']['responses'][200]['schema']

    return submissions
  }

  /**
   * Get a submission by ID
   */
  async submission(id: number) {
    const submission = await this.get(`/submissions/${id}`)
    console.log(submission)

    return submission
  }

  async publications(submissionId: number) {
    const submission = await this.get(
      `/submissions/${submissionId}/publications`
    )
    console.log(submission)

    return submission
  }
  /**
   * Get a publication by ID
   */
  async publication(submissionId: number, publicationId: number) {
    const submission = await this.get(
      `/submissions/${submissionId}/publications/${publicationId}`
    )
    console.log(submission)

    return submission
  }

  // publishSite({ siteId, domains }) {
  //   if (!siteId) return Promise.reject(buildRequiredArgError('siteId'))
  //   if (!domains) return Promise.reject(buildRequiredArgError('domains'))

  //   return this.post(`/sites/${siteId}/publish`, { domains })
  // }

  // Sites

  //   async sites(query = {}) {
  //     const sites = await this.get('/sites', query)
  //     return sites.map((site) => this.responseWrapper.site(site))
  //   }

  //   async site({ siteId }, query = {}) {
  //     if (!siteId) return Promise.reject(buildRequiredArgError('siteId'))

  //     const site = await this.get(`/sites/${siteId}`, query)
  //     return this.responseWrapper.site(site)
  //   }

  //   publishSite({ siteId, domains }) {
  //     if (!siteId) return Promise.reject(buildRequiredArgError('siteId'))
  //     if (!domains) return Promise.reject(buildRequiredArgError('domains'))

  //     return this.post(`/sites/${siteId}/publish`, { domains })
  //   }

  //   // Domains

  //   async domains({ siteId }) {
  //     if (!siteId) return Promise.reject(buildRequiredArgError('siteId'))

  //     const domains = await this.get(`/sites/${siteId}/domains`)
  //     return domains.map((domain) => this.responseWrapper.domain(domain, siteId))
  //   }

  //   // Collections

  //   async collections({ siteId }, query = {}) {
  //     if (!siteId) return Promise.reject(buildRequiredArgError('siteId'))

  //     const collections = await this.get(`/sites/${siteId}/collections`, query)
  //     return collections.map((collection) =>
  //       this.responseWrapper.collection(collection)
  //     )
  //   }

  //   async collection({ collectionId }, query = {}) {
  //     if (!collectionId)
  //       return Promise.reject(buildRequiredArgError('collectionId'))

  //     const collection = await this.get(`/collections/${collectionId}`, query)
  //     return this.responseWrapper.collection(collection)
  //   }

  //   // Items

  //   async items({ collectionId }, query = {}) {
  //     if (!collectionId)
  //       return Promise.reject(buildRequiredArgError('collectionId'))

  //     const res = await this.get(`/collections/${collectionId}/items`, query)
  //     return {
  //       ...res,

  //       items: res.items.map((item) =>
  //         this.responseWrapper.item(item, collectionId)
  //       ),
  //     }
  //   }

  //   async item({ collectionId, itemId }, query = {}) {
  //     if (!collectionId)
  //       return Promise.reject(buildRequiredArgError('collectionId'))
  //     if (!itemId) return Promise.reject(buildRequiredArgError('siteId'))

  //     const res = await this.get(
  //       `/collections/${collectionId}/items/${itemId}`,
  //       query
  //     )
  //     return this.responseWrapper.item(res.items[0], collectionId)
  //   }

  //   async createItem({ collectionId, ...data }, query = {}) {
  //     if (!collectionId)
  //       return Promise.reject(buildRequiredArgError('collectionId'))

  //     const item = await this.post(
  //       `/collections/${collectionId}/items`,
  //       data,
  //       query
  //     )
  //     return this.responseWrapper.item(item, collectionId)
  //   }

  //   updateItem({ collectionId, itemId, ...data }, query = {}) {
  //     if (!collectionId)
  //       return Promise.reject(buildRequiredArgError('collectionId'))
  //     if (!itemId) return Promise.reject(buildRequiredArgError('itemId'))

  //     return this.put(`/collections/${collectionId}/items/${itemId}`, data, query)
  //   }

  //   removeItem({ collectionId, itemId }, query = {}) {
  //     if (!collectionId)
  //       return Promise.reject(buildRequiredArgError('collectionId'))
  //     if (!itemId) return Promise.reject(buildRequiredArgError('itemId'))

  //     return this.delete(`/collections/${collectionId}/items/${itemId}`, query)
  //   }

  //   patchItem({ collectionId, itemId, ...data }, query = {}) {
  //     if (!collectionId)
  //       return Promise.reject(buildRequiredArgError('collectionId'))
  //     if (!itemId) return Promise.reject(buildRequiredArgError('itemId'))

  //     return this.patch(
  //       `/collections/${collectionId}/items/${itemId}`,
  //       data,
  //       query
  //     )
  //   }

  //   // Images

  //   // TODO

  //   // Webhooks

  //   async webhooks({ siteId }, query = {}) {
  //     if (!siteId) return Promise.reject(buildRequiredArgError('siteId'))

  //     const webhooks = await this.get(`/sites/${siteId}/webhooks`, query)
  //     return webhooks.map((webhook) =>
  //       this.responseWrapper.webhook(webhook, siteId)
  //     )
  //   }

  //   async webhook({ siteId, webhookId }, query = {}) {
  //     if (!siteId) return Promise.reject(buildRequiredArgError('siteId'))
  //     if (!webhookId) return Promise.reject(buildRequiredArgError('webhookId'))

  //     const webhook = await this.get(
  //       `/sites/${siteId}/webhooks/${webhookId}`,
  //       query
  //     )
  //     return this.responseWrapper.webhook(webhook, siteId)
  //   }

  //   async createWebhook({ siteId, ...data }, query = {}) {
  //     if (!siteId) return Promise.reject(buildRequiredArgError('siteId'))

  //     const webhook = await this.post(`/sites/${siteId}/webhooks`, data, query)
  //     return this.responseWrapper.webhook(webhook, siteId)
  //   }

  //   removeWebhook({ siteId, webhookId }, query = {}) {
  //     if (!siteId) return Promise.reject(buildRequiredArgError('siteId'))
  //     if (!webhookId) return Promise.reject(buildRequiredArgError('webhookId'))

  //     return this.delete(`/sites/${siteId}/webhooks/${webhookId}`, query)
  //   }
}
