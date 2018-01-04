import fs from 'fs'
import path from 'path'

const DEFAULT_PATH = 'euphoria.min.css'

class Writer {
  static write(p = DEFAULT_PATH, content) {
    fs.writeFileSync(path.join(process.cwd(), p), content)
  }
}

export default Writer
