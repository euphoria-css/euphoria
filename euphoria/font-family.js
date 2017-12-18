const rule = require('./utils/create-rule')

module.exports = () => {
  return [
    // Generic type classes
    rule('system', [
      'font-family',
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue" ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    ]),
    rule('sans-serif', ['font-family', 'sans-serif']),
    rule('serif', ['font-family', 'georgia, times, serif']),
    rule('code', ['font-family', 'Consolas, monaco, monospace']),

    // Specific families
    rule('ff-courier', ['font-family', '"Courier Next", courier, monospace']),
    rule('ff-helvetica', [
      'font-family',
      '"helvetica neue", helvetica, sans-serif',
    ]),
    rule('ff-avenir', ['font-family', '"avenir next", avenir, sans-serif']),
    rule('ff-athelas', ['font-family', 'athelas, georgia, serif']),
    rule('ff-georgia', ['font-family', 'georgia, serif']),
    rule('ff-times', ['font-family', 'times, serif']),
    rule('ff-bodoni', ['font-family', '"Bodoni MT", serif']),
    rule('ff-calisto', ['font-family', '"Calisto MT", serif']),
    rule('ff-garamond', ['font-family', 'garamond, serif']),
    rule('ff-baskerville', ['font-family', 'baskerville, serif']),
  ]
}
