import cosmiconfig from 'cosmiconfig'
const explorer = cosmiconfig('euphoria')

const CWD = process.cwd()

class Config {
  static get() {
    return explorer.load(CWD)
  }
}

export default Config
