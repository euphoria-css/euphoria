const _ = require('lodash')
const { CssSelectorParser } = require('css-selector-parser')

const parser = new CssSelectorParser()

class Rule {
  constructor({
    selector,
    properties,
    breakpoint = null,
    important = false,
    media = null,
  }) {
    this._rawSelector = selector
    this.properties = properties
    this.important = important
    this.breakpoint = breakpoint
    this.media = media
  }

  get className() {
    return parser.parse(this.selector).rule.classNames[0]
  }

  get selector() {
    const parsed = parser.parse(this._rawSelector).rule
    let selector = parsed.classNames[0]

    // Add breakpoint suffix.
    if (this.breakpoint) selector += `-${this.breakpoint}`

    // Add pseudo selectors, if present.
    const pseudos = parsed.pseudos && parsed.pseudos.map(p => p.name).join(':')
    if (pseudos) selector += `:${pseudos}`

    return '.' + selector
  }

  get css() {
    let rule = `${this.selector} { ${this._propertyCSS} }`
    if (this.media) rule = `@media only screen and (${this.media}) { ${rule} }`
    return rule
  }

  toString() {
    return this.css
  }

  //----------------------------------------------
  // Private instance methods
  //----------------------------------------------

  get _propertyCSS() {
    return _.map(
      this.properties,
      (val, key) => `${key}: ${val}${this.important ? ' !important' : ''};`
    ).join(' ')
  }
}

module.exports = Rule
