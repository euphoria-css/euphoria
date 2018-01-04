import Compressor from './compressor'
import Euphoria from 'euphoria'

class Generator {
  static generate({ options = {}, customRules = [] }) {
    const euphoria = new Euphoria(options)
    customRules.map(rule => euphoria.addRule(rule))
    return Compressor.compress(euphoria.css)
  }
}

export default Generator
