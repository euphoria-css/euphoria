const _ = require('lodash')
const Rule = require('./rule')
const slugify = require('url-slug')

class RuleSet {
  constructor({ breakpoints = null, name, rules }) {
    this.name = name
    this.rules = rules //rules.map(r => new Rule(r))
    this.breakpoints = breakpoints
  }

  get key() {
    return slugify(this.name.trim())
  }

  get type() {
    return 'RuleSet'
  }

  get css() {
    const separator = '\n'
    if (!this.breakpoints) return this.rules.join(separator)

    return _.map(this.breakpoints, (value, label) => {
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

module.exports = RuleSet
