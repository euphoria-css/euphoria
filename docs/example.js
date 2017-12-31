import Code from './code'
import Highlight from './highlight'
import React from 'react'
import SubHeading from './subheading'
import ruleSetAnchor from './ruleset-anchor'
import Title from './title'

function BackgroundColorExample({ hover = false, rules }) {
  return (
    <table className="border-collapse">
      <tbody>
        {rules.map((rule, key) => (
          <tr key={key}>
            <td
              className={`${
                rule.classNameShort
              } gray-light hov-black px-md am br bc-transparent`}
            >
              {hover && <small>Hover!</small>}
            </td>
            <td className="px-sm bb bc-gray-lighter">
              <Code>{rule.classNameShort}</Code>
            </td>
            <td className="px-sm bb bc-gray-lighter">
              <Highlight lang="javascript" inline>{`<span class="${
                rule.classNameShort
              }">ABC</span>`}</Highlight>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function TextColorExample({ hover = false, rules }) {
  return (
    <table className="border-collapse">
      <tbody>
        {rules.map((rule, key) => (
          <tr key={key}>
            <td
              className={`px-md align-middle br bb bc-gray-lighter ${
                rule.classNameShort === 'white' ||
                rule.classNameShort === 'transparent'
                  ? 'bg-black'
                  : ''
              }`}
            >
              <span className={`${rule.classNameShort} txt-xxl bold`}>ABC</span>
            </td>
            <td className="p-sm bb bc-gray-lighter">
              <Code>{rule.classNameShort}</Code>
            </td>
            <td className="p-sm bb bc-gray-lighter">
              <Highlight lang="javascript" inline>{`<span class="${
                rule.classNameShort
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
            <Code>{rule.classNameShort}</Code>
          </div>
          <div className="bg-gray-lightest">
            <div className={`${rule.classNameShort} bg-blue-light p-xs`} />
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
          className={`my-md p-sm bg-white w-50-md-up ${rule.classNameShort}`}
          key={key}
        >
          <Code>{rule.classNameShort}</Code>
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
            className={`${rule.classNameShort} ${
              rule.classNameShort.indexOf('auto') !== -1 ? 'db w-auto' : 'dib'
            } center bg-white ba bc-gray-light ${extraClasses}`}
          >
            <Code>{rule.classNameShort}</Code>
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
          <div className={`${extraClasses} ${rule.classNameShort}`}>
            <small>
              <Code>{rule.classNameShort}</Code>
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
        <p className={`${extraClasses} ${rule.classNameShort}`} key={key}>
          This text has the class <Code>{rule.classNameShort}</Code>.
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
    case 'Border radius':
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
    case 'Line height':
    case 'Opacity':
    case 'Opacity (hover)':
    case 'Text alignment':
    case 'Text decoration':
    case 'Text styles':
    case 'Text transforms':
      return <TextExample rules={rules} />
      break
    case 'Margins':
    case 'Margins (responsive)':
      return <BoxExample rules={rules} extraClasses="p-xs" />
      break
    case 'Padding':
    case 'Padding (responsive)':
      return <BoxExample rules={rules} />
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
        In order to customize this rule, you can change the default options of:
      </p>
      <Highlight lang="javascript">{`new Euphoria({
  //... other options
})`}</Highlight>
    </div>
  )
}

export default Example
