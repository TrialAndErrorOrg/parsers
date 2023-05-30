import { Data as CSL } from 'csl-json'
export function fixBib(parsedBib: CSL[], overrideId = true): CSL[] {
  return parsedBib.map((bib) => fixCSL(bib, overrideId))
}
export function fixCSL(csl: CSL, overrideId = true): CSL {
  const cslWithCorrectParticleName = fixCSLParticleName(csl)
  const cslWithCorrectIssued = fixCSLIssued(cslWithCorrectParticleName)
  const cslWId = addCSLId(cslWithCorrectIssued, overrideId)
  const clsWithGivenProperlySplit = fixCSLGiven(cslWId)
  return clsWithGivenProperlySplit
}

// AnyStyle assigns things as "particle" instead of "non-dropping-particle"
export function fixCSLParticleName(csl: CSL): CSL {
  if (!csl.author) {
    return csl
  }

  csl.author = csl.author.map((auth) => {
    if (auth.literal) {
      return auth
    }

    // @ts-expect-error we are doing the case of "CSL bad"
    if (!auth?.particle) {
      return auth
    }

    // @ts-expect-error again, anystyle incorrectly assigns things as "particle" instead of "non-dropping-particle"
    const { particle, ...rest } = auth

    rest['non-dropping-particle'] = particle

    return rest
  })

  return csl
}

export function fixCSLIssued(csl: CSL) {
  if (!csl.issued || typeof csl.issued !== 'string') {
    console.log(`This looks fine to me or it's not here, not fixing ${csl.issued}`)
    return csl
  }

  // @ts-expect-error we are doing the case of "CSL bad"
  const split = csl.issued.split('-')
  csl.issued = { 'date-parts': [split] }
  return csl
}

export function addCSLId(csl: CSL, override?: boolean): CSL {
  if (csl.id && !override) {
    console.log('This already has an id bruh')
    console.log({ id: csl.id })
    return csl
  }

  return makeCSLIdAuthYear(csl)
}

export function makeCSLIdAuthYear(csl: CSL): CSL {
  if (!csl?.author?.[0]?.family || !csl.issued || !csl?.issued?.['date-parts']?.[0]?.[0]) {
    console.log("Don't have an author or issued date for csl, skipping")
    console.log({ csl })
    return csl
  }

  const prefix = csl?.author?.[0]?.['non-dropping-particle']
    ? `${csl?.author?.[0]?.['non-dropping-particle']} `
    : ``

  const newId = `${prefix}${csl?.author?.[0]?.family}${
    csl.issued['date-parts']?.[0]?.[0] || csl.issued
  }`.replace(/ /g, '')

  csl.id = newId
  return csl
}

/**
 * AnyStyle gives us a CSL with a given name like "J.K." but biblatex just can't handle that for some reason.
 * We add an extra space so it becomes "J. K." and then biblatex will print more than one initial.
 */
export function fixCSLGiven(cslWId: CSL) {
  const { author } = cslWId
  if (!author || author.length === 0) {
    return cslWId
  }

  const newAuthor = author.map((a) => {
    if (!a.given) {
      return a
    }

    const splitGiven = a.given
      .replace(/([A-Z])\.([A-Z])/g, '$1. $2')
      .replace(/([A-Z])\.([A-Z])/g, '$1. $2')

    return {
      ...a,
      given: splitGiven,
    }
  })

  return {
    ...cslWId,
    author: newAuthor,
  }
}
