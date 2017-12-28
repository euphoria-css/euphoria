import Code from './code'
import Highlight from './highlight'
import React from 'react'
import ruleSetAnchor from './ruleset-anchor'
import Title from './title'

function BackgroundColorExample({ hover = false, rules }) {
  return (
    <table className="border-collapse">
      <tbody>
        {rules.map((rule, key) => (
          <tr key={key}>
            <td
              className={`${rule.classNameShort} gray-light hov-black px-md am br bc-transparent`}
            >
              {hover && <small>Hover!</small>}
            </td>
            <td className="p-sm bb bc-gray-lighter">
              <Code>{rule.classNameShort}</Code>
            </td>
            <td className="p-sm bb bc-gray-lighter">
              <Code>{rule.classNameVerbose}</Code>
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
              className={`px-md align-middle br bb bc-gray-lighter ${rule.classNameShort ===
                'white' || rule.classNameShort === 'transparent'
                ? 'bg-black'
                : ''}`}
            >
              <span className={`${rule.classNameShort} txt-xxl bold`}>ABC</span>
            </td>
            <td className="p-sm bb bc-gray-lighter">
              <Code>{rule.classNameShort}</Code>
            </td>
            <td className="p-sm bb bc-gray-lighter">
              <Code>{rule.classNameVerbose}</Code>
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
        <div className={`my-md p-sm bg-white ${rule.classNameShort}`} key={key}>
          <Code>{rule.classNameShort}</Code>
        </div>
      ))}
    </div>
  )
}

function BoxExample({ rules }) {
  return (
    <div>
      {rules.map((rule, key) => (
        <div className="my-sm bg-blue-lightest ba bc-blue-lighter" key={key}>
          <div
            className={`${rule.classNameShort} ${rule.classNameShort.indexOf(
              'auto'
            ) !== -1
              ? 'db w-auto'
              : 'dib'} center p-xs bg-white ba bc-gray-light`}
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
        <div key={key} className="mb-sm w-70">
          <div className={`${extraClasses} ${rule.classNameShort} p-sm center`}>
            <small>
              <Code>{`${extraClasses} ${rule.classNameShort}`}</Code>
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
    case 'Border radius':
    case 'Border removal':
    case 'Border styles':
    case 'Border widths':
      return <BorderExample rules={rules} extraClasses="ba" />
      break
    case 'Border radius position':
      return <BorderExample rules={rules} extraClasses="ba br-md" />
      break
    case 'Border positions':
      return <BorderExample rules={rules} extraClasses="bg-gray-lightest" />
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
    case 'Text alignment':
    case 'Text decoration':
    case 'Text styles':
    case 'Text transforms':
      return <TextExample rules={rules} />
      break
    case 'Margins':
    case 'Margins (responsive)':
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
        <p className="bg-yellow-lighter bl bw-md bc-yellow p-md">
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
      <div className="">
        <div className="gray-light mb-sm">Rule CSS:</div>
        <Highlight lang="css">{ruleset.toString()}</Highlight>
      </div>
    </div>
  )
}

export default Example
