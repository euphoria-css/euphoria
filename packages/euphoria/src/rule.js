import { each, map } from 'lodash'
import slugify from 'url-slug'
import { CssSelectorParser } from 'css-selector-parser'

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
    this.properties = {}
    each(properties, (val, key) => {
      this.properties[slugify(key)] = val
    })
    this.important = important
    this.breakpoint = breakpoint
    this.media = media
  }

  get type() {
    return 'Rule'
  }

  get className() {
    return parser.parse(this.selector).rule.classNames[0]
  }

  get name() {
    return this.selector
  }

  get selector() {
    const parsed = parser.parse(this._rawSelector).rule

    // Reconstruct the selector base name
    let selector = null
    if (parsed.classNames) selector = '.' + parsed.classNames[0]
    if (parsed.tagName) selector = parsed.tagName
    if (parsed.id) selector = '#' + parsed.id

    // Add breakpoint suffix.
    if (this.breakpoint) selector += `-${this.breakpoint}`

    // Add pseudo selectors, if present.
    const pseudos = parsed.pseudos && parsed.pseudos.map(p => p.name).join(':')
    if (pseudos) selector += `:${pseudos}`

    return selector
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
    return map(
      this.properties,
      (val, key) => `${key}: ${val}${this.important ? ' !important' : ''};`
    ).join(' ')
  }
}

export default Rule
