const autoprefixer = require('autoprefixer')

module.exports = () => {
  const floats = `.float-left { float: left !important; }
.float-right { float: right !important; }
.float-none { float: none !important; }`

  const sizes = `.full-height { height: 100% !important; }
.full-width { width: 100% !important; }`

  const flex = autoprefixer.process(`.flex-row { flex-direction: row !important; }
.flex-row-reverse { flex-direction: row-reverse !important; }
.flex-column { flex-direction: column !important; }
.flex-column-reverse { flex-direction: column-reverse !important; }
.justify-content-start { justify-content: flex-start !important; }
.justify-content-end { justify-content: flex-end !important; }
.justify-content-center { justify-content: center !important; }
.justify-content-between { justify-content: space-between !important; }
.justify-content-around { justify-content: space-around !important; }
.align-items-start { align-items: flex-start !important; }
.align-items-end { align-items: flex-end !important; }
.align-items-center { align-items: center !important; }
.align-items-baseline { align-items: baseline !important; }
.align-items-stretch { align-items: stretch !important; }
.align-self-start { align-self: flex-start !important; }
.align-self-end { align-self: flex-end !important; }
.align-self-center { align-self: center !important; }
.align-self-baseline { align-self: baseline !important; }
.align-self-stretch { align-self: stretch !important; }
.align-content-start { align-content: flex-start !important; }
.align-content-end { align-content: flex-end !important; }
.align-content-center { align-content: center !important; }
.align-content-stretch { align-content: stretch !important; }
.align-content-between { align-content: space-between !important; }
.align-content-around { align-content: space-around !important; }
.flex-wrap { flex-wrap: wrap !important; }
.flex-wrap-reverse { flex-wrap: wrap-reverse !important; }
.flex-nowrap { flex-wrap: nowrap !important; }
.flex-first { order: -1 !important; }
.flex-last { order: 1 !important; }`)

  const text = `.text-left { text-align: left !important; }
.text-right { text-align: right !important; }
.text-center { text-align: center !important; }
.text-justify { text-align: justify !important; }`

  const vertical = autoprefixer.process(`.align-baseline { vertical-align: baseline !important; }
.align-top { vertical-align: top !important; }
.align-middle { vertical-align: middle !important; }
.align-bottom { vertical-align: bottom !important; }
.align-text-top { vertical-align: text-top !important; }
.align-text-bottom { vertical-align: text-bottom !important; }`)

  return [floats, sizes, flex, text, vertical].join('\n')
}
