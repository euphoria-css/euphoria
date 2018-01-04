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
        <Code>euphoria.config.js</Code> file (or a <Code>.euphoriarc</Code>{' '}
        containing JSON or YAML) which exports a configuration object.
        Everything in the configuration file is optional.
      </p>
      <Highlight lang="javascript">{`module.exports = {

  // Location to put compiled CSS. Below is default setting:
  outputPath: 'euphoria.min.css',

  // Euphoria config object, passed directly to Euphoria.
  options: {
    baseColors: { red: 'red' },  // Override the default colors
    flexbox: false,          // Don't generate "flexbox" styles
  },

  // Custom CSS rules to add to outputted CSS. Rules can
  // inherit from existing Euphoria styles and can have 
  // their own custom CSS properties.
  customRules: [
    {
      selector: '.button',
      properties: {
        outline: '5px solid red',
      },
      inherits: ['.px-md', '.py-sm', '.bg-primary', '.white', '.td-none'],
    },
  ],
}`}</Highlight>

      <SubHeading>Changing defaults</SubHeading>
      <p>
        You can override any of these settings by passing in a configuration
        object to Euphoria which will be merged with the defaults, for example:
      </p>
      <Highlight lang="javascript">{`module.exports = {
  options: {
    baseColors: {
      red: 'red'
    }
  }
}`}</Highlight>
      <p>
        You can override the default <Code>baseColors</Code> settings but all
        the other defaults will be retained.
      </p>

      <SubHeading>Removing rulesets</SubHeading>
      <p>
        To remove a ruleset you don't want, just set the key to{' '}
        <Code>false</Code> and Euphoria will not generate any rules that depend
        on that setting.
      </p>
      <Highlight lang="javascript">{`module.exports = {
  options: {
    cursors: false
  }
}`}</Highlight>

      <SubHeading>Adding custom rules</SubHeading>
      <p>
        If you'd like to add custom rules that get generated via Euphoria, you
        can pass an array of style objects. These can take custom CSS as well as
        inheriting from existing Euphoria styles. You can think of these as
        "mixins" from other tools like Sass/LESS.
      </p>
      <Highlight lang="javascript">{`module.exports = {
  customRules: [
    {
      selector: '.input',
      inherits: ['.p-sm', '.bg-white', '.ba', '.br-sm', '.bc-gray'],
    },
    {
      selector: '.some-custom-style:hover',
      properties: {
        border: '0 none',
        'text-decoration': 'none',
        // Any CSS rules you'd like in kebab-case...
      },
    },
    // Create as many rules as you'd like with any combination of
    // Euphoria styles or custom styles.
  ],
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
