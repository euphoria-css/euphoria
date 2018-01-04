'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var chalk = _interopDefault(require('chalk'));
var cosmiconfig = _interopDefault(require('cosmiconfig'));
var CleanCSS = _interopDefault(require('clean-css'));
var Euphoria = _interopDefault(require('euphoria'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var explorer = cosmiconfig('euphoria');

var CWD = process.cwd();

var Config = function () {
  function Config() {
    classCallCheck(this, Config);
  }

  createClass(Config, null, [{
    key: 'get',
    value: function get$$1() {
      return explorer.load(CWD);
    }
  }]);
  return Config;
}();

var COPYRIGHT = '/**\n * Euphoria\n * \n * Copyright: Dana Woodman 2018\n * Licence: MIT\n * \n * Learn more at: <http://euphoria-css.com>\n */';

var Compressor = function () {
  function Compressor() {
    classCallCheck(this, Compressor);
  }

  createClass(Compressor, null, [{
    key: 'compress',
    value: function compress(css) {
      var cleaned = new CleanCSS({}).minify(css).styles;
      return [COPYRIGHT, cleaned].join('\n');
    }
  }]);
  return Compressor;
}();

var Generator = function () {
  function Generator() {
    classCallCheck(this, Generator);
  }

  createClass(Generator, null, [{
    key: 'generate',
    value: function generate(_ref) {
      var _ref$options = _ref.options,
          options = _ref$options === undefined ? {} : _ref$options,
          _ref$customRules = _ref.customRules,
          customRules = _ref$customRules === undefined ? [] : _ref$customRules;

      var euphoria = new Euphoria(options);
      customRules.map(function (rule) {
        return euphoria.addRule(rule);
      });
      return Compressor.compress(euphoria.css);
    }
  }]);
  return Generator;
}();

var Logger = function () {
  function Logger() {
    classCallCheck(this, Logger);
  }

  createClass(Logger, [{
    key: 'debug',
    value: function debug() {
      console.log('🐞 ', chalk.gray.apply(chalk, arguments));
    }
  }, {
    key: 'error',
    value: function error(_error) {
      console.error('⛔️ ', chalk.red(_error.message));
      console.error(_error.stack);
    }
  }, {
    key: 'warn',
    value: function warn() {
      console.error('⚠️ ', chalk.yellow.apply(chalk, arguments));
    }
  }, {
    key: 'info',
    value: function info(msg) {
      console.log(chalk.blue(msg));
    }
  }, {
    key: 'success',
    value: function success() {
      console.log(chalk.green.apply(chalk, arguments));
    }
  }]);
  return Logger;
}();

var DEFAULT_PATH = 'euphoria.min.css';

var Writer = function () {
  function Writer() {
    classCallCheck(this, Writer);
  }

  createClass(Writer, null, [{
    key: 'write',
    value: function write() {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_PATH;
      var content = arguments[1];

      fs.writeFileSync(path.join(process.cwd(), p), content);
    }
  }]);
  return Writer;
}();

var logger = new Logger();

var DEFAULT_CONFIG = { options: {} };

var Builder = function () {
  function Builder() {
    classCallCheck(this, Builder);
  }

  createClass(Builder, null, [{
    key: 'build',
    value: function build() {
      logger.info('⏱  Euphoria build started!');
      var start = Date.now();

      Config.get().then(function (result) {
        if (!result) {
          logger.warn('No "euphoria.config.js" or ".euphoriarc" file found, using defaults.');
        }

        var config = result.config || DEFAULT_CONFIG;

        // logger.debug('Building with config:', JSON.stringify(config, null, 2))

        var css = Generator.generate(config);
        Writer.write(config.outputPath, css);

        var end = Date.now();
        var elapsed = end - start;
        logger.success('🚀  Euphoria build complete!', chalk.gray('[' + elapsed + 'ms]'));
      }).catch(function (error) {
        return logger.error(error);
      });
    }
  }]);
  return Builder;
}();

Builder.build();

// export { default as Compressor } from './compressor'
