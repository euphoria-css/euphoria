![Euphoria Banner](https://cl.ly/oWlv/euphoria-banner.png)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis CI build status](https://img.shields.io/travis/euphoria-css/euphoria.svg)](https://travis-ci.org/euphoria-css/euphoria)
[![Dependency Status](https://img.shields.io/david/euphoria-css/euphoria.svg)](https://david-dm.org/euphoria-css/euphoria)
[![View on npm](https://img.shields.io/npm/dm/euphoria.svg)](https://www.npmjs.com/package/euphoria)
[![View on npm](https://img.shields.io/npm/v/euphoria.svg)](https://www.npmjs.com/package/euphoria)

> A euphoric CSS micro-framework.

## Quick Start

To try out Euphoria, just add the following to the `<head>` of your page:

```html
<link href="//unpkg.com/euphoria/dist/euphoria.min.css" rel="stylesheet" type="text/css" />
```

Now check the [documentation site][docs] for usage information.

## Installation

### CDN

The easiest way to use Euphoria in a new project is to just include the unpkg file above.

### Using npm/yarn

Install Euphoria:

```bash
# Using npm
npm install --save euphoria

# Using yarn
yarn add euphoria
```

Now you can either include the minified files in your CSS:

```css
@import './node_modules/euphoria/dist/euphoria.min.css';
```

Or, if you are using PostCSS, you can import the source files which will give you access to the CSS variables that Euphoria provides:

```css
@import './node_modules/euphoria/src/euphoria.css';
```

If you are using a tool like WebPack, you can use a shorter import syntax:

```css
@import '~euphoria';
```

### Customizing Euphoria

To customize Euphoria, import the CSS and then change the values of the CSS variables. Please see the [available variables][variables] that Euphoria creates.

## Contributing

**Pull Requests welcome!**

Checkout the project and run:

```bash
# Using nvm, install proper node version.
nvm install
nvm use

# Install dependencies.
npm install

# Run dev server:
npm start
```

Once you're happy with your changes, submit a Pull Request on Github.

### Formatting

Please run Prettier (use `npm run format` if your editor isn't setup to use Prettier) on all code before submitting.

## Changelog

Please see [changelog.md][changelog]

## Credits

Copyright &copy; 2018 by [Dana Woodman][dana].

### Inspiration

Euphoria was inspired by a lot of awesome projects, including:

* [Bootstrap][bootstrap]
* [Tachyons][tachyons]
* [glamor][glamor]

Thank you to all those that have put in a lot of thought and energy around pushing CSS forward!

## License

MIT

[ava]: https://github.com/avajs/ava
[bootstrap]: https://getbootstrap.com
[cosmicconfig]: https://github.com/davidtheclark/cosmiconfig
[cli]: https://github.com/euphoria-css/euphoria-cli
[changelog]: /changelog.md
[dana]: http://danawoodman.com
[docs]: http://euphoria-css.com
[examples]: /packages/example
[glamor]: https://github.com/threepointone/glamor
[options]: #options
[tachyons]: http://tachyons.io
[variables]: http://euphoria-css.com#variables
[usage]: #usage
