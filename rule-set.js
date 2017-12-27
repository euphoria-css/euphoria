const _ = require('lodash')
const Rule = require('./rule')
const slugify = require('slugify')

class RuleSet {
  constructor({ breakpoints, name, rules }) {
    this.name = name
    this._rules = rules
    this.breakpoints = breakpoints
  }

  get key() {
    return slugify(this.name)
  }

  get rules() {
    if (!this.breakpoints) return this._rules

    return _.flatten(
      _.map(this.breakpoints, (value, label) => {
        return _.map(this._rules, rule => {
          const newRule = rule.toObject()
          rule.breakpoint = label
          return new Rule(newRule)
        })
      })
    )
  }

  css(separator = '\n') {
    if (!this.breakpoints) return this.rules.join(separator)

    return _.map(this.breakpoints, (value, label) => {
      return [
        `@media only screen and (${value}) {`,
        this.rules
          .map(rule => {
            // Add the responsive suffix to the class name
            rule.breakpoint = label
            return '  ' + rule
          })
          .join(separator),
        '}',
      ].join(separator)
    }).join(separator)
  }

  toString() {
    return this.css()
  }
}

module.exports = RuleSet
