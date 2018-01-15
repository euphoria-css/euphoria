import { map } from 'lodash'

class RuleSet {
  constructor({ key, name, rules, responsive = false }) {
    this.name = name
    this.rules = rules
    this.responsive = responsive
    this.key = key
  }

  get css() {
    return map(this.rules, r => r.css).join('\n')
  }

  toString() {
    return this.css
  }

  toJSON() {
    const obj = {
      name: this.name,
      rules: map(this.rules, r => r.toJSON()),
    }

    if (this.responsive) obj.responsive = true

    return obj
  }
}

export default RuleSet
