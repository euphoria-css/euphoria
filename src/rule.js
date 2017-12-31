const _ = require('lodash')
const { CssSelectorParser } = require('css-selector-parser')

const parser = new CssSelectorParser()

class Rule {
  constructor({
    selector,
    short,
    properties,
    after = false,
    breakpoint = null,
    hover = false,
    important = false,
    media = null,
    verbose = null,
  }) {
    this.selector = selector || `.${short}${hover ? ':hover' : ''}`

    if (selector) {
      const parsed = parser.parse(selector)
      const className = parsed.rule.classNames[0]
      short = className
      const pseudos =
        parsed.rule.pseudos && parsed.rule.pseudos.map(p => p.name)
      hover = Boolean(pseudos && pseudos.includes('hover'))
      after = Boolean(pseudos && pseudos.includes('after'))
    }

    this._classNameShort = short
    this._classNameVerbose = verbose
    this.properties = properties
    this.important = important
    this.breakpoint = breakpoint
    this.hover = hover
    this.after = after
    this.media = media
  }

  get classNameShort() {
    return this._makeClassName(this._classNameShort)
  }

  get classNameVerbose() {
    return this._makeClassName(this._classNameVerbose)
  }

  get selectors() {
    if (!this.selectorVerbose) return this.selectorShort
    return this.selectorShort
    // return this.selectorShort + ', ' + this.selectorVerbose
  }

  get selectorShort() {
    return this._makeSelectorName(this.classNameShort)
  }

  get selectorVerbose() {
    if (!this.classNameVerbose) return null
    return this._makeSelectorName(this.classNameVerbose)
  }

  _makeClassName(name) {
    if (this.breakpoint) name += `-${this.breakpoint}`
    return name
  }

  _makeSelectorName(name) {
    let selector = '.' + name
    if (this.hover) selector += ':hover'
    if (this.after) selector += ':after'
    // if (this.breakpoint) selector += `-${this.breakpoint}`
    return selector
  }

  get propertiesCSS() {
    return _.map(
      this.properties,
      (val, name) => `${name}: ${val}${this.important ? ' !important' : ''};`
    ).join(' ')
  }

  get css() {
    let rule = `${this.selectors} { ${this.propertiesCSS} }`
    if (this.media) rule = `@media only screen and (${this.media}) { ${rule} }`
    return rule
  }

  toString() {
    return this.css
  }

  toObject() {
    return {
      short: this._classNameShort,
      verbose: this._classNameVerbose,
      properties: this.properties,
      important: this.important,
      breakpoint: this.breakpoint,
      hover: this.hover,
      after: this.after,
      media: this.media,
    }
  }
}

module.exports = Rule
