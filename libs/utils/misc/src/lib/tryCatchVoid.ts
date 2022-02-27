export function tryCatchVoid(
  func: any,
  errorHandler?: (error: any) => void
): unknown | void {
  try {
    const data = func
    return
  } catch (e) {
    console.error(e)
    errorHandler && errorHandler(e)
    return e
  }
}
