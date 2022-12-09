export async function tryCatchPromise<T = any>(
  promise: Promise<T>,
  errorHandler?: (error: unknown) => void
): Promise<[T | null, unknown | null]> {
  try {
    const data = await promise
    return [data, null]
  } catch (e) {
    console.error(e)
    errorHandler?.(e)
    return [null, e]
  }
}
