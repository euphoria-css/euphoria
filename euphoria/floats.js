const rule = require('./utils/create-rule')

module.exports = () => {
  return [
    rule('fl', ['float', 'left']),
    rule('fr', ['float', 'right']),
    rule('fn', ['float', 'none']),
  ]
}
