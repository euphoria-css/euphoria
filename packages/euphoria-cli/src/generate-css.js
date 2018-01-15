import compressCSS from './compress-css'
import euphoria from 'euphoria'

function generateCSS(options) {
  return compressCSS(euphoria(options).css())
}

export default generateCSS
