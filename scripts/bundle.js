const CleanCSS = require('clean-css')
const chalk = require('chalk')
const fs = require('fs')
const Euphoria = require('../packages/euphoria/lib/euphoria.cjs')
const path = require('path')

// TODO: Use the CLI to generate this instead...

const PATH = path.join(process.cwd(), 'dist', 'euphoria.min.css')
const COPYRIGHT = `/**
 * Euphoria
 * 
 * Copyright: Dana Woodman 2018
 * Licence: MIT
 * 
 * Learn more at: <http:github.com/danawoodman/euphoria>
 */`

const euphoria = new Euphoria()
const clean = new CleanCSS({}).minify(euphoria.toString())
const css = [COPYRIGHT, clean.styles].join('\n')
// Compressor.compress(euphoria.css)

fs.writeFileSync(PATH, css)

// console.log(chalk.gray(euphoria))
console.log(
  chalk.green.bold('Minified CSS to'),
  chalk.blue.bold.underline(PATH)
)
