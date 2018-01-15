import { CssSelectorParser } from 'css-selector-parser'
import { map } from 'lodash'

const parser = new CssSelectorParser()

class Rule {
  constructor({ selector, properties, breakpoint = null }) {
    this.selector = selector
    this.properties = properties
    this.breakpoint = breakpoint
  }

  get className() {
    try {
      return parser.parse(this.selector).rule.classNames[0]
    } catch (error) {
      return null
    }
  }

  get css() {
    return `${this.selector} { ${map(
      this.properties,
      (v, k) => `${k}: ${v};`
    ).join(' ')} }`
  }

  toString() {
    return this.css
  }

  toJSON() {
    const obj = {
      selector: this.selector,
      properties: this.properties,
      css: this.css,
    }

    if (this.breakpoint) obj.breakpoint = this.breakpoint
    if (this.className) obj.className = this.className

    return obj
  }
}

export default Rule
