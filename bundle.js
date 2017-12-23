const CleanCSS = require('clean-css')
const fs = require('fs')
const chalk = require('chalk')
const Euphoria = require('./euphoria')

const PATH = 'euphoria.min.css'

const rules = new Euphoria()

// console.log('\n')
// console.log(chalk.red.bold.underline('RULES:'))
// console.log(chalk.gray(rules))

// rules.rules.map(rule => {
//   console.log(chalk.red.bold.underline('\nRULESET:'))
//   console.log(chalk.gray(rule))
// })

// Add a custom rule.
rules.addRule('.button', { 'box-shadow': '1px 1px 1px rgba(0, 0, 0, 0.1)' }, [
  '.px-lg',
  '.py-md',
  '.bg-primary',
  '.hover-bg-info',
  '.uppercase',
  '.ls-md',
])

const clean = new CleanCSS({}).minify(rules.toString())
fs.writeFileSync(PATH, clean.styles)

console.log(chalk.gray(rules))
// console.log(chalk.gray(clean.styles))
console.log(chalk.green.bold(`\nMinified CSS to ${PATH}!\n`))
