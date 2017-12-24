const CleanCSS = require('clean-css')
const chalk = require('chalk')
const fs = require('fs')
const Euphoria = require('./euphoria')

const PATH = 'euphoria.min.css'

const euphoria = new Euphoria()

// Add a custom rule.
// euphoria.addRule({
//   short: 'btn',
//   verbose: 'button',
//   properties: { 'box-shadow': '1px 1px 1px rgba(0, 0, 0, 0.1)' },
//   inherits: ['px-lg', 'py-md', 'bg-primary', 'hov-bg-info', 'br-pill'],
// })

const copyright = `/**
 * Euphoria
 * 
 * Copyright: Dana Woodman 2018
 * Licence: MIT
 * 
 * Learn more at: <http:github.com/danawoodman/euphoria>
 */`

const clean = new CleanCSS({}).minify(euphoria.toString())
const css = [copyright, clean.styles].join('\n')
fs.writeFileSync(PATH, css)

// console.log(chalk.gray(euphoria))
console.log(
  chalk.green.bold('Minified CSS to'),
  chalk.blue.bold.underline(PATH)
)
