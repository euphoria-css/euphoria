module.exports = {
  outputPath: '../../docs/euphoria.min.css',
  customRules: {
    typography: {
      name: 'Typography',
      rules: () => [
        {
          selector: 'p',
          inherits: ['.lh-md', '.gray-darker', '.my-md'],
        },
        {
          selector: 'a',
          inherits: ['.primary', '.td-none'],
        },
        {
          selector: 'a:hover',
          inherits: ['.primary-dark', '.td-underline'],
        },
      ],
    },
  },
}
