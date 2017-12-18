const rule = require('./utils/create-rule')

module.exports = () => {
  const display = [
    // Use border-box
    '* { box-sizing: border-box; }',

    rule('display-block', ['display', 'block']),
    rule('display-inline', ['display', 'inline']),
    rule('display-inline-block', ['display', 'inline-block']),
    rule('display-flex', ['display', 'flex']),
    rule('display-inline-flex', ['display', 'inline-flex']),
    rule('display-none', ['display', 'none']),

    // Short rules
    rule('block', ['display', 'block']),
    rule('inline', ['display', 'inline']),
    rule('inline-block', ['display', 'inline-block']),
    rule('flex', ['display', 'flex']),
    rule('inline-flex', ['display', 'inline-flex']),
    rule('table', ['display', 'table']),
    rule('table-cell', ['display', 'table-cell']),
    rule('none', ['display', 'none']),
  ]

  const visibility = [
    rule('visible', ['visibility', 'visible']),
    rule('invisible', ['visibility', 'hidden']),
  ]

  return [].concat(display, visibility)
}
