import { isEmpty, map } from 'lodash'

function makeProps(properties) {
  return map(properties, (v, k) => `${k}: ${v};`).join(' ')
}

function makeRule(selector, properties) {
  return `${selector} { ${makeProps(properties)} }`
}

function createCSS(ast) {
  return map(ast, (properties, selector) => {
    // If a responsive group, go ahead and loop through
    // the list of responsive styles and wrap them in a
    // media query.
    if (selector.startsWith('@media')) {
      const rules = map(properties, (v, k) => `  ${makeRule(k, v)}`)
      rules.unshift(`${selector} {`)
      rules.push('}')
      return rules.join('\n')
    }

    return makeRule(selector, properties)
  }).join('\n')
}

export default createCSS
