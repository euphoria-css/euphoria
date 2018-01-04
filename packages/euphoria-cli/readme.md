# Euphoria CLI

> The Euphoria CLI tool

**IN DEVELOPMENT!**

Please see [Euphoria repo][euphoria] for more information on what Euphoria is.

```
euphoria-cli (version: 1.0.0)

  -p, --print      Print the CSS to stdout instead of writing to a file. Useful for debugging or using with build tools.
  -c, --config     Relative or absolute path to config file. Default is `euphoria.config.js` or `.euphoriarc`.
  -o, --output     Relative or absolute path to output generated CSS file.
  -s, --silent     Be silent with output.
  -v, --verbose    Be verbose in the output.
  -h, --help       Print out this help message.
```

## Config File

A sample `euphoria.config.js` file:

```js
module.exports = {
  // Location to put compiled CSS
  outputPath: 'dist/euphoria.css',

  // Euphoria config object, passed directly to Euphoria.
  options: {
    colors: 'red',
  },

  // Custom CSS rules to add to outputted CSS.
  customRules: [
    {
      short: 'btn',
      verbose: 'button',
      properties: {
        outline: '5px solid red',
      },
      inherits: ['px-md', 'py-sm', 'bg-primary', 'white'],
    },
  ],
}
```

## Todo

* [ ] Add `-w, --watch` task
  * For now, use [watchy][watchy] and run `watchy -w euphoria.config.js -- euphoria`

[euphoria]: https://github.com/euphoria-css/euphoria
[watchy]: https://github.com/caseywebdev/watchy
