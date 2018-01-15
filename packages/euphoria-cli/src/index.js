import chalk from 'chalk'
import getConfig from './get-config'
import generateCSS from './generate-css'
import logger from './logger'
import writeFile from './write-file'

function buildCSS() {
  logger.info('⏱  Euphoria build started!')
  const start = Date.now()

  getConfig()
    .then(result => {
      if (!result) {
        logger.warn(
          'No "euphoria.config.js" or ".euphoriarc" file found, using defaults.'
        )
      }

      const options = result.config || {}

      // logger.debug('Building with config:', JSON.stringify(config, null, 2))

      const css = generateCSS(options)
      writeFile(options.outputPath, css)

      const end = Date.now()
      const elapsed = end - start
      logger.success(
        '🚀  Euphoria build complete!',
        chalk.gray(`[${elapsed}ms]`)
      )
    })
    .catch(error => logger.error(error))
}

buildCSS()
