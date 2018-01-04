module.exports = {
  // Customize where to put compiled CSS, relative to
  // the current directory
  // outputPath: 'euphoria.min.css',

  // Euphoria options object, passed directly to Euphoria.
  options: {
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

    // To disable a certain set or rules, just
    // pass "false" and it won't be generated.
    // alignContent: false,
    // alignItems: false,
    // alignSelf: false,
    // backgroundSizes: false,
    // baseColors: false,
    // borderPosition: false,
    // borderRadii: false,
    // borderRadiiPosition: false,
    // borderRemoval: false,
    // borderStyles: false,
    // borderWidths: false,
    // boxShadows: false,
    // breakpoints: false,
    // colors: false,
    // collapse: false,
    // clearfix: false,
    // cursors: false,
    // display: false,
    // flexDirection: false,
    // flexOrder: false,
    // flexWrap: false,
    // floats: false,
    // fontFamilies: false,
    // fontSizes: false,
    // fontWeights: false,
    // justifyContent: false,
    // letterSpacing: false,
    // lineHeights: false,
    // lists: false,
    // opacity: false,
    // overflow: false,
    // positions: false,
    // sizes: false,
    // spacing: false,
    // textAlignment: false,
    // textDecoration: false,
    // textTransforms: false,
    // textStyle: false,
    // verticalAlignment: false,
    // visibility: false,
    // whitespace: false,
    // zIndex: false,
  },

  // Custom CSS rules
  customRules: [
    // {
    //   selector: '.btn, .button',
    //   properties: { color: 'red' },
    //   inherits: ['.px-md', '.py-sm', '.bg-primary', '.white'],
    // },
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
      responsive: true,
    },
    {
      selector: '.button:hover',
      inherits: ['.primary', '.bg-white'],
    },
    // {
    //   selector: '.button:after',
    //   properties: { content: '"hello"' },
    // },
    {
      selector: '.input',
      // properties: {},
      inherits: [
        '.p-sm',
        '.ba',
        '.txt-sm',
        '.bc-gray-light',
        '.rad-sm',
        '.bg-white',
      ],
    },
  ],
}
