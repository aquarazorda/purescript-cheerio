import cheerio from 'cheerio'

// Loading
export const load = cheerio.load

// Selecting
export function selectImpl(str, cheerioStatic) {
  return cheerioStatic(str)
}

export function selectDeepImpl(strArr, cheerioStatic) {
  return cheerioStatic.apply(cheerioStatic, strArr)
}

// Rendering
export function htmlImpl(nothing, just, cheerioInst) {
  const ret = cheerio.html(cheerioInst)
  return ret != null ? just(ret) : nothing
}

// Utilities
export function root(cheerioStatic) {
  return cheerio.root.call(cheerioStatic)
}
