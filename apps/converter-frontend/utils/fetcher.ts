export const fetcher = (resource: string, init: RequestInit) =>
  fetch(resource, { headers: { 'Access-Control-Allow-Origin': '*' } }).then(
    (res) => res.json()
  )
