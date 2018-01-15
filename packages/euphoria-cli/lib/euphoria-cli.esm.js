import chalk from 'chalk';
import cosmiconfig from 'cosmiconfig';
import CleanCSS from 'clean-css';
import euphoria from 'euphoria';
import fs from 'fs';
import path from 'path';

var explorer = cosmiconfig('euphoria');

var CWD = process.cwd();

function getConfig() {
  return explorer.load(CWD);
}

var COPYRIGHT = '/**\n * Euphoria\n * \n * Copyright: Dana Woodman 2018\n * Licence: MIT\n * \n * Learn more at: <http://euphoria-css.com>\n */';

function compressCSS(css) {
  var cleaned = new CleanCSS({}).minify(css).styles;
  return [COPYRIGHT, cleaned].join('\n');
}

function generateCSS(options) {
  return compressCSS(euphoria(options).css());
}

var logger = {
  debug: function debug() {
    console.log('🐞 ', chalk.gray.apply(chalk, arguments));
  },
  error: function error(_error) {
    console.error('⛔️ ', chalk.red(_error.message));
    console.error(_error.stack);
  },
  warn: function warn() {
    console.error('⚠️ ', chalk.yellow.apply(chalk, arguments));
  },
  info: function info(msg) {
    console.log(chalk.blue(msg));
  },
  success: function success() {
    console.log(chalk.green.apply(chalk, arguments));
  }
};

var DEFAULT_PATH = 'euphoria.min.css';

function writeFile() {
  var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_PATH;
  var content = arguments[1];

  fs.writeFileSync(path.join(process.cwd(), p), content);
}

function buildCSS() {
  logger.info('⏱  Euphoria build started!');
  var start = Date.now();

  getConfig().then(function (result) {
    if (!result) {
      logger.warn('No "euphoria.config.js" or ".euphoriarc" file found, using defaults.');
    }

    var options = result.config || {};

    // logger.debug('Building with config:', JSON.stringify(config, null, 2))

    var css = generateCSS(options);
    writeFile(options.outputPath, css);

    var end = Date.now();
    var elapsed = end - start;
    logger.success('🚀  Euphoria build complete!', chalk.gray('[' + elapsed + 'ms]'));
  }).catch(function (error) {
    return logger.error(error);
  });
}

buildCSS();
