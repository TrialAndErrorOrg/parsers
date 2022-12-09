import { Element } from 'xast'
import { isElement } from 'xast-util-is-element'

export interface PrObject {
  [key: string]: string | boolean | PrObject
}

const reducePr = (nodes: Element[] | undefined): PrObject => {
  return (nodes ?? []).reduce((acc, child) => {
    if (!isElement(child)) {
      return acc
    }
    const { name, attributes: attr, children } = child as Element
    const attributes = attr ?? {}

    const patchedName = name.replace(/\w+:/, '')?.replace(/-/, '_')
    const patchedAttrs = Object.keys(attributes)?.reduce((acc, key) => {
      const patchedKey = key.replace(/\w+:/, '')?.replace(/-/, '_')
      return { ...acc, [patchedKey]: attributes[key] }
    }, {})

    const patchedChildren = reducePr(children as Element[])

    return {
      ...acc,
      [patchedName]:
        Object.keys(patchedAttrs)?.length ||
        Object.keys(patchedChildren)?.length
          ? { ...patchedAttrs, ...patchedChildren }
          : true,
    }
  }, {} as PrObject)
}

export function getPr(node: Element): PrObject {
  const prName = `${node.name}Pr`

  const pr = node.children.find(
    (child) => child.type === 'element' && child.name.includes(prName)
  )

  if (!(pr && isElement(pr))) {
    return {}
  }

  // return pr.children as a JSON object with the prefix stripped
  return reducePr(pr?.children as Element[])
}
