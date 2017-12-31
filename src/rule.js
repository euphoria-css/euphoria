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
    this._selector = selector
    this.properties = properties
    this.important = important
    this.breakpoint = breakpoint
    this.media = media

    // TODO: handle non-class rules
    const parsed = parser.parse(this._selector)
    this._className = parsed.rule.classNames[0]

    // Parse pseudo selectors
    const pseudos = parsed.rule.pseudos && parsed.rule.pseudos.map(p => p.name)
    this.hover = Boolean(pseudos && pseudos.includes('hover'))
    this.after = Boolean(pseudos && pseudos.includes('after'))
    // TODO: Handle any arbitrary selectors
  }

  get selector() {
    let selector = '.' + this.className
    if (this.hover) selector += ':hover'
    if (this.after) selector += ':after'
    return selector
  }

  get className() {
    let name = this._className
    if (this.breakpoint) name += `-${this.breakpoint}`
    return name
  }

  get propertiesCSS() {
    return _.map(
      this.properties,
      (val, key) => `${key}: ${val}${this.important ? ' !important' : ''};`
    ).join(' ')
  }

  get css() {
    let rule = `${this.selector} { ${this.propertiesCSS} }`
    if (this.media) rule = `@media only screen and (${this.media}) { ${rule} }`
    return rule
  }

  toString() {
    return this.css
  }

  toObject() {
    return {
      selector: this.selector,
      properties: this.properties,
      important: this.important,
      breakpoint: this.breakpoint,
      media: this.media,
      // verbose: this._classNameVerbose,
      // hover: this.hover,
      // after: this.after,
    }
  }
}

module.exports = Rule
