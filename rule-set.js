class RuleSet {
  constructor(name, rules) {
    this.name = name
    this.rules = rules
  }

  css(separator = '\n') {
    return this.rules.map(rule => rule).join(separator)
  }

  get selectors() {
    return this.rules.map(rule => rule.selector)
  }

  toString() {
    return this.css()
  }
}

module.exports = RuleSet
