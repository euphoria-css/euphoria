import { map } from 'lodash'
import Rule from './rule'
import slugify from 'url-slug'

class RuleSet {
  constructor({ breakpoints = null, name, rules }) {
    this.name = name
    this.rules = rules
    this.breakpoints = breakpoints
  }

  get key() {
    return slugify(this.name.trim())
  }

  get type() {
    return 'RuleSet'
  }

  get css() {
    if (!this.rules || !this.rules.length) return ''
    const separator = '\n'
    if (!this.breakpoints) return this.rules.join(separator)

    return map(this.breakpoints, (value, label) => {
      return [
        `@media only screen and (${value}) {`,
        this.rules
          .map(rule => {
            // Set the breakpoint for the rule so that
            // it will add the proper responsive suffix
            // to the class name.
            rule.breakpoint = label
            return '  ' + rule
          })
          .join(separator),
        '}',
      ].join(separator)
    }).join(separator)
  }

  toString() {
    return this.css
  }
}

export default RuleSet
