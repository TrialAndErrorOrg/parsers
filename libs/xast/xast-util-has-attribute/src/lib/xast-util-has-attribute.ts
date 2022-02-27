const own = {}.hasOwnProperty

/**
 * Check if `node` has a set `name` property.
 *
 * @param {unknown} node
 * @param {string} name
 * @returns {boolean}
 */
export function hasAttribute(node: unknown, name: string): boolean {
  /** @type {unknown} */
  const value: unknown =
    name &&
    node &&
    typeof node === 'object' &&
    // @ts-expect-error Looks like a node.
    node.type === 'element' &&
    // @ts-expect-error Looks like an element.
    node.attributes &&
    // @ts-expect-error Looks like an element.
    own.call(node.attributes, name) &&
    // @ts-expect-error Looks like an element.
    node.attributes[name]

  return value !== null && value !== undefined && value !== false
}
