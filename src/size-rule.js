class SizeRule {
  constructor({ prefixShort, prefixVerbose, size }) {
    this.rawSize = size
    this.prefixShort = prefixShort
    this.prefixVerbose = prefixVerbose
  }

  get label() {
    return this.rawSize === 'auto' ? 'auto' : parseInt(this.rawSize)
  }

  get size() {
    return this.rawSize === 'auto' ? 'auto' : `${this.rawSize}%`
  }

  get nameShort() {
    return `${this.prefixShort}-${this.label}`
  }

  get nameVerbose() {
    return `${this.prefixVerbose}-${this.label}`
  }

  toObject() {
    const obj = {
      short: this.nameShort,
      verbose: this.nameVerbose,
      properties: { [`${this.prefixVerbose}`]: this.size },
    }

    return obj
  }
}

module.exports = SizeRule
