import Code from './code'
import Highlight from './highlight'
import React from 'react'
import SubHeading from './subheading'
import Title from './title'

function Customize({ defaults }) {
  return (
    <div>
      <Title>Customize</Title>
      <p>
        Euphoria is customizable by using the CLI tool in combination with a{' '}
        <Code>euphoria.config.js</Code> file which exports a configuration
        object. Everything in the configuration file is optional.
      </p>
      <Highlight lang="javascript">{`module.exports = {

  // Location to put compiled CSS. Below is default setting:
  outputPath: 'euphoria.min.css',

  // Overrid Euphoria defaults for various properties
  baseColors: { red: 'red' }, // Override the default colors

  // Disable specific rule sets.
  disabledRules: [ 'flex-direction' ],

  // Custom CSS rules to add to outputted CSS. Rules can
  // inherit from existing Euphoria styles and can have 
  // their own custom CSS properties.
  customRules: {
    buttons: {
      name: 'Buttons',

      // A function that returns a list of rules to create. This function
      // gets passed the full configuration object so you have access to
      // all available configuration options.
      rules: opts => [
        {
          // The CSS selector to create. Feel free to use Pseudo-selectors, IDs, 
          // tag names, etc...
          selector: '.button', // or 'button', '#button', '.button:hover', etc...

          // An optional object of CSS properties to apply to the new rule.
          properties: {
            outline: '5px solid red',
          },

          // Pass an optional array of Euphoria selectors to inherit specific styles.
          // Any changes to these default rules will be reflected in your custom rule.
          inherits: ['.px-md', '.py-sm', '.bg-primary', '.white', '.td-none'],
        },
      ],
    },
  ],
}`}</Highlight>

      <SubHeading>Changing defaults</SubHeading>
      <p>
        You can override any of these settings by passing in a configuration
        object to Euphoria which will be merged with the defaults, for example:
      </p>
      <Highlight lang="javascript">{`module.exports = {
  baseColors: {
    red: 'red'
  }
}`}</Highlight>
      <p>
        You can override the default <Code>baseColors</Code> settings but all
        the other defaults will be retained.
      </p>

      <SubHeading>Removing rulesets</SubHeading>
      <p>
        To remove a ruleset you don't want, just set the key to{' '}
        <Code>false</Code> and Euphoria will not generate the specified rules.
      </p>
      <Highlight lang="javascript">{`module.exports = {
  disabledRules: [ 'cursors' ]
}`}</Highlight>

      <SubHeading>Adding custom rules</SubHeading>
      <p>
        If you'd like to add custom rules that get generated via Euphoria, you
        can pass an array of style objects. These can take custom CSS as well as
        inheriting from existing Euphoria styles. You can think of these as
        "mixins" from other tools like Sass/LESS.
      </p>
      <Highlight lang="javascript">{`module.exports = {
  customRules: {
    forms: {
      name: 'Forms',
      rules: opts => [
        {
          selector: '.input',
          inherits: ['.p-sm', '.bg-white', '.ba', '.br-sm', '.bc-gray'],
        },
        {
          selector: '.input:focus',
          properties: {
            outline: '1px solid blue',
            // Properties can be any CSS rules you'd like in kebab-case or camelCase
          },
        },
      ]
    }
    // Create as many rules as you'd like with any combination of
    // Euphoria styles or custom styles.
  },
}`}</Highlight>

      <SubHeading>Defaults</SubHeading>
      <p>
        Below is a full list of Euphoria's defaults. Each key can be overridden
        like the example above.
      </p>
      <Highlight lang="css">{JSON.stringify(defaults, null, 2)}</Highlight>
    </div>
  )
}

export default Customize
