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

## Documentation

**Please see [euphoria-css.com][docs] for information on installation and usage!**

Also, have a look at the [examples folder][examples] for a real-world example of using Euphoria.

## Contributing

**Pull Requests welcome!**

Checkout the project and run:

```bash
# Using nvm, install proper node version.
nvm install
nvm use

# Install dependencies.
npm install

# Make sure things work.
npm test

# Run dev server:
npm start
```

Once you're happy with your changes, submit a Pull Request on Github.

### Formatting

Please run Prettier (use `npm run format` if your editor isn't setup to use Prettier) on all code before submitting.

### Test

Please write tests for your code! Test files are next to the source files (with a `.test.js` extension) and we're using the [ava][ava] test library. Run tests with `npm test` or `npm run watch-test`

## TODO

### General

* [ ] Full docs on every possible option and what it affects
* [ ] Full docs on all the possible override values

### Rules:

* [ ] Animations (default and hover versions)
  * [ ] Fade
  * [ ] Show child
  * [ ] Hide child
  * [ ] Grow
  * [ ] Shake
  * [ ] Rotate
* Better Pseudo-selector support
  * [ ] Placeholder `::placeholder` text
  * [ ] Outline `:outline` styling
  * [ ] Focus `:focus` styling
  * [ ] Hover `:hover` styling
* [ ] Font families:
  * [ ] Have a set of common "web safe" fonts
  * [ ] Have a font stack for common Google Web Fonts (Open Sans, Roboto, etc)
* Someday:
  * [ ] Grid layout helpers

### Build:

* [ ] Add autoprefixer

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
[usage]: #usage
