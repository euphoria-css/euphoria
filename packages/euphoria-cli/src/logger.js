import chalk from 'chalk'

class Logger {
  debug(...args) {
    console.log('🐞 ', chalk.gray(...args))
  }

  error(error) {
    console.error('⛔️ ', chalk.red(error.message))
    console.error(error.stack)
  }

  warn(...args) {
    console.error('⚠️ ', chalk.yellow(...args))
  }

  info(msg) {
    console.log(chalk.blue(msg))
  }

  success(...args) {
    console.log(chalk.green(...args))
  }
}

export default Logger
