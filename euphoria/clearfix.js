const rule = require('./utils/create-rule')

module.exports = () => {
  return [
    rule(
      'clearfix:after',
      ['clear', 'both'],
      ['display', 'table'],
      ['content', '""']
    ),
  ]
}
