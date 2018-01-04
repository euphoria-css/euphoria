import CleanCSS from 'clean-css'

const COPYRIGHT = `/**
 * Euphoria
 * 
 * Copyright: Dana Woodman 2018
 * Licence: MIT
 * 
 * Learn more at: <http://euphoria-css.com>
 */`

class Compressor {
  static compress(css) {
    const cleaned = new CleanCSS({}).minify(css).styles
    return [COPYRIGHT, cleaned].join('\n')
  }
}

export default Compressor
