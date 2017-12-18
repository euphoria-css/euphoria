const _ = require('lodash')

class Rule {
  constructor(selectorShort, selectorVerbose, properties, important = false) {
    this.selector = selectorShort
    this.selectorShort = selectorShort

    if (typeof selectorVerbose === 'string') {
      this.selectorVerbose = selectorVerbose
      this.properties = properties
      this.important = important
    } else {
      this.properties = selectorVerbose
      this.important = properties
    }
  }

  get css() {
    const properties = _.map(
      this.properties,
      (val, name) => `${name}: ${val}${this.important ? ' !important' : ''};`
    ).join(' ')
    return `${this.selectorShort}${this.selectorVerbose
      ? `, ${this.selectorVerbose}`
      : ''} { ${properties} }`
  }

  toString() {
    return this.css
  }
}

module.exports = Rule
