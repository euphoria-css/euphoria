module.exports = {
  // Customize where to put compiled CSS, relative to
  // the current directory
  // outputPath: 'euphoria.min.css',

  // Euphoria options object, passed directly to Euphoria.
  // Override the base colors used in fonts, backgrounds,
  // borders, etc...
  baseColors: {
    primary: '#dd2c76',
    secondary: '#665c62',
    success: '#5cb71b',
    danger: '#c61e07',
    warning: '#d68708',
    info: '#1c96ce',
  },

  // Custom CSS rules
  customRules: {
    buttons: {
      name: 'Buttons',
      rules: opts => [
        {
          selector: '.button',
          inherits: [
            '.px-md',
            '.py-sm',
            '.bg-primary',
            '.white',
            '.ba',
            '.bc-primary',
            '.txt-md',
            '.rad-sm',
            '.c-pointer',
            '.td-none',
          ],
        },
        {
          selector: '.button-lg',
          inherits: ['.txt-lg'],
        },
      ],
    },
  },
}
