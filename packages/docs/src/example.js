import Code from './code'
import Highlight from './highlight'
import React from 'react'
import SubHeading from './subheading'
import ruleSetAnchor from './ruleset-anchor'
import Title from './title'

function BackgroundColorExample({ hover = false, rules }) {
  return (
    <table className="collapse">
      <tbody>
        {rules.map((rule, key) => (
          <tr key={key} className="hov-bg-yellow-lightest">
            <td
              className={`${
                rule.className
              } gray-light hov-black px-md am br bc-transparent`}
            >
              {hover && <small>Hover!</small>}
            </td>
            <td className="p-xs bb bc-gray-lighter">
              <Code>{rule.className}</Code>
            </td>
            <td className="p-xs bb bc-gray-lighter">
              <Highlight lang="javascript" inline>{`<div class="${
                rule.className
              }"></div>`}</Highlight>
            </td>
            <td className="p-xs bb bc-gray-lighter">
              <Highlight lang="css" inline>
                {rule.css}
              </Highlight>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
function TextColorExample({ hover = false, rules }) {
  return (
    <table className="collapse">
      <tbody>
        {rules.map((rule, key) => (
          <tr key={key} className="hov-bg-yellow-lightest">
            <td
              className={`px-md align-middle br bb bc-gray-lighter ${
                rule.className === 'white' || rule.className === 'transparent'
                  ? 'bg-black'
                  : ''
              }`}
            >
              <span className={`${rule.className} txt-xl bold`}>ABC</span>
            </td>
            <td className="px-sm bb br bc-gray-lighter">
              <Code>{rule.className}</Code>
            </td>
            <td className="px-sm bb bc-gray-lighter">
              <Highlight lang="javascript" inline>{`<span class="${
                rule.className
              }">ABC</span>`}</Highlight>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function WidthExample({ rules }) {
  return (
    <div>
      {rules.map((rule, key) => (
        <div className="mb-md" key={key}>
          <div className="mb-xs">
            <Code>{rule.className}</Code>
          </div>
          <div className="bg-gray-lightest">
            <div className={`${rule.className} bg-blue-light p-xs`} />
          </div>
        </div>
      ))}
    </div>
  )
}

function BoxShadowExample({ rules }) {
  return (
    <div>
      {rules.map((rule, key) => (
        <div
          className={`my-md p-sm bg-white w-50-md-up ${rule.className}`}
          key={key}
        >
          <Code>{rule.className}</Code>
        </div>
      ))}
    </div>
  )
}
function MarginExample({ rules }) {
  return (
    <div>
      <p>
        Margin utilites include a variety of scaled spacing, auto margins,
        removal of margins and percentage based widths for offsetting
        columns/etc.
      </p>
      {rules.map((rule, key) => {
        const auto = rule.className.includes('auto')
        return (
          <div className="my-sm" key={key}>
            <div className={`bg-blue-light ${auto ? 'db' : 'dib'}`}>
              <div
                className={`center ${rule.className} ${
                  auto ? 'db w-20' : 'dib'
                }`}
              >
                <div className="bg-blue p-xs">
                  <code className="dib white">{rule.className}</code>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function PaddingExample({ rules }) {
  return (
    <div>
      {rules.map((rule, key) => (
        <div className="my-sm" key={key}>
          <div className="dib bg-blue-light">
            <div className={`dib center ${rule.className}`}>
              <div className="bg-blue p-xs">
                <code className="dib white">{rule.className}</code>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function BoxExample({ extraClasses = '', rules }) {
  return (
    <div>
      {rules.map((rule, key) => (
        <div className="my-sm bg-blue-lightest ba bc-blue-lighter" key={key}>
          <div
            className={`${rule.className} ${
              rule.className.includes('auto') ? 'db w-20' : 'dib'
            } center bg-white ba bc-gray-light ${extraClasses}`}
          >
            <Code>{rule.className}</Code>
          </div>
        </div>
      ))}
    </div>
  )
}

function BorderExample({ extraClasses = '', rules }) {
  return (
    <div className="cf">
      {rules.map((rule, key) => (
        <div key={key} className="mb-md w-50-md-up">
          <div className={`${extraClasses} ${rule.className}`}>
            <small>
              <Code>{rule.className}</Code>
            </small>
          </div>
        </div>
      ))}
    </div>
  )
}

function TextExample({ extraClasses = '', rules }) {
  return (
    <div>
      {rules.map((rule, key) => (
        <p className={`${extraClasses} ${rule.className}`} key={key}>
          This text has the class <Code>{rule.className}</Code>.
        </p>
      ))}
    </div>
  )
}

function ExampleAdapter({ ruleset }) {
  const { name, rules } = ruleset

  switch (name) {
    case 'Background colors':
      return <BackgroundColorExample rules={rules} />
      break
    case 'Background colors (hover)':
      return <BackgroundColorExample rules={rules} hover />
      break
    case 'Border colors':
    case 'Border colors (hover)':
      return <BorderExample rules={rules} extraClasses="bt bw-md pt-xs" />
      break
    case 'Border positions':
      return (
        <BorderExample
          rules={rules}
          extraClasses="center p-sm bg-gray-lightest"
        />
      )
      break
    case 'Border radii position':
      return (
        <BorderExample
          rules={rules}
          extraClasses="ba rad-md center p-sm bg-gray-lightest"
        />
      )
      break
    case 'Border radii':
    case 'Border removal':
    case 'Border styles':
    case 'Border widths':
      return (
        <BorderExample
          rules={rules}
          extraClasses="ba center p-sm bg-gray-lightest"
        />
      )
      break
    case 'Box shadows':
      return <BoxShadowExample rules={rules} />
      break
    case 'Cursor':
    case 'Font families':
    case 'Font sizes':
    case 'Font weights':
    case 'Letter spacing':
    case 'Line heights':
    case 'Opacity':
    case 'Opacity (hover)':
    case 'Text alignment':
    case 'Text decoration':
    case 'Text styles':
    case 'Text transforms':
      return <TextExample rules={rules} />
      break
    case 'Margin':
    case 'Margin (responsive)':
      return <MarginExample rules={rules} extraClasses="p-xs" />
      break
    case 'Padding':
    case 'Padding (responsive)':
      return <PaddingExample rules={rules} />
      break
    case 'Normalize font':
      return <TextExample rules={rules} extraClasses="bold italic underline" />
      break
    case 'Text colors':
      return <TextColorExample rules={rules} />
      break
    case 'Text colors (hover)':
      return <TextColorExample rules={rules} hover />
      break
    case 'Widths':
    case 'Widths (max)':
    case 'Widths (responsive)':
      return <WidthExample rules={rules} />
      break
    case 'Visibility':
      return (
        <p>
          Apply this classes to cause an element to be visible or invisible.
        </p>
      )
      break
    case 'Z-Index':
      return (
        <p>
          A collection of <Code>z-index</Code> values from 0-1000 in 100
          increments.
        </p>
      )
      break
    default:
      return (
        <p className="bl bw-md bc-orange italic yellow-darkest bg-yellow-lighter p-md">
          Examples coming soon...
        </p>
      )
      break
  }
}

function Example({ ruleset }) {
  return (
    <div className="cf">
      <Title>{ruleset.name}</Title>
      <div id={ruleSetAnchor(ruleset.name)} className="mb-xl">
        <ExampleAdapter ruleset={ruleset} />
      </div>
      <SubHeading>Rule CSS</SubHeading>
      <Highlight lang="css">{ruleset.toString()}</Highlight>

      <SubHeading>Configuration Options</SubHeading>
      <p>
        In order to customize this rule, you can change the default options in
        your <Code>euphoria.config.js</Code> file:
      </p>
      <Highlight lang="javascript">{`module.exports = {
  options: {

    // Disable this rule:
    disabledRules: [ '${ruleset.key}' ],

    // Make responsive
    responsive: [ '${ruleset.key}' ],

  },
}`}</Highlight>
    </div>
  )
}

export default Example
