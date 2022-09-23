import cheerio from 'cheerio'

// Attributes
export function attrImpl(nothing, just, name, cheerioInst) {

  if (cheerioInst.length > 0) {
    const value = cheerioInst.attr(name);
    return value != null ? just(value) : nothing;
  }

  return nothing;
}

export function hasClassImpl(className, cheerioInst) {
  return cheerioInst.hasClass(className);
}

// Traversing
export function findImpl(selector, cheerioInst) {
  return cheerioInst.find(selector);
}

export function parent(cheerioInst) {
  return cheerioInst.parent()
}

export function next(cheerioInst) {
  return cheerioInst.next()
}

export function prev(cheerioInst) {
  return cheerioInst.prev()
}

export function siblings(cheerioInst) {
  return cheerioInst.siblings()
}

export function children(cheerioInst) {
  return cheerioInst.children()
}

export function first(cheerioInst) {
  return cheerioInst.first()
}

export function last(cheerioInst) {
  return cheerioInst.last()
}

export function eqImpl(index, cheerioInst) {
  return cheerioInst.eq(index)
}

// Rendering
export function htmlImpl(nothing, just, cheerioInst) {
  return cheerioInst.length ? just(cheerioInst.html()) : nothing;
}

export function text(cheerioInst) {
  return cheerioInst.text()
}

// Miscellaneous
export function length(cheerioInst) {
  return cheerioInst.length;
}
