import chalk from 'chalk'
import Config from './config'
import Generator from './generator'
import Logger from './logger'
import Writer from './writer'

const logger = new Logger()

const DEFAULT_CONFIG = { options: {} }

class Builder {
  static build() {
    logger.info('⏱  Euphoria build started!')
    const start = Date.now()

    Config.get()
      .then(result => {
        if (!result) {
          logger.warn(
            'No "euphoria.config.js" or ".euphoriarc" file found, using defaults.'
          )
        }

        const config = result.config || DEFAULT_CONFIG

        // logger.debug('Building with config:', JSON.stringify(config, null, 2))

        const css = Generator.generate(config)
        Writer.write(config.outputPath, css)

        const end = Date.now()
        const elapsed = end - start
        logger.success(
          '🚀  Euphoria build complete!',
          chalk.gray(`[${elapsed}ms]`)
        )
      })
      .catch(error => logger.error(error))
  }
}

export default Builder
