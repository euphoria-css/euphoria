import cosmiconfig from 'cosmiconfig'
const explorer = cosmiconfig('euphoria')

const CWD = process.cwd()

function getConfig() {
  return explorer.load(CWD)
}

export default getConfig
