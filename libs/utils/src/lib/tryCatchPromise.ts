export async function tryCatchPromise(
  promise: Promise<any>,
  errorHandler?: (error: any) => void
): Promise<[any, any]> {
  try {
    const data = await promise
    return [data, null]
  } catch (e) {
    console.error(e)
    errorHandler && errorHandler(e)
    return [null, e]
  }
}
