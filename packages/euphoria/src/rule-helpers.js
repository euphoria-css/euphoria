// import { CssSelectorParser } from 'css-selector-parser'

// export function create(selector, properties) {
//   return { [selector]: properties }
// }

// export function addProperty(rule, newProperty) {
//   const key = Object.keys(rule)[0]
//   const properties = { ...rule[key], ...newProperty }
//   return { [key]: properties }
// }

export function addSuffix(selector, suffix) {
  // Add the suffix to the selector but before
  // any pseudo selectors.
  const parts = selector.split(':')
  parts[0] += `-${suffix}`
  return parts.join(':')
}
