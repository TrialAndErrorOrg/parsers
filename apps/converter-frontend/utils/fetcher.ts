export const fetcher = (resource: string, init: RequestInit) =>
  fetch(resource, init).then((res) => res.json())
