import _ from 'lodash'
import Euphoria from '../euphoria'
import Highlight from './highlight'
import React from 'react'
import ReactDOM from 'react-dom'
import slugify from 'slugify'
import { css } from 'glamor'

// Generate the Euhpria CSS
const euphoria = new Euphoria({})
css.insert(euphoria.toString())

const RULES = _.sortBy(euphoria.rules, 'name')

function TOCLink({ children, href }) {
  return (
    <a
      href={href}
      className="db fl w-100-xs-only w-50-sm-up w-33-md-up w-20-lg-up px-sm py-xs primary hov-bg-cyan-lightest no-decoration br-pill ba bc-transparent hov-bc-primary"
    >
      {children}
    </a>
  )
}

function TOC() {
  return (
    <nav>
      <h1 className="txt-xxl center ls-lg mt-none mb-lg uppercase">Euphoria</h1>
      <h2 className="txt-xs mb-sm sans-serif mt-none center uppercase ls-lg gray-lighter">
        Table of contents
      </h2>
      <div className="cf">
        {RULES.map((ruleset, key) => (
          <TOCLink href={`#${slugify(ruleset.name.toLowerCase())}`} key={key}>
            {ruleset.name}
          </TOCLink>
        ))}
        <TOCLink href="#all">All Rules</TOCLink>
      </div>
    </nav>
  )
}

function TopLink() {
  return (
    <a
      href="#"
      className="fr gray-light hov-primary hov-bg-gray-lightest px-sm py-xxs no-decoration txt-sm ls-md br-pill"
    >
      ↑ Top
    </a>
  )
}

function Code({ children }) {
  return (
    <code className="bg-gray-lightest hov-bg-yellow-lighter hov-cyan-darker p-xs dib br-xs">
      {children}
    </code>
  )
}

function Heading({ children }) {
  return (
    <h2 className="txt-md mb-md pb-sm bb sans-serif ls-xl uppercase">
      {children}
    </h2>
  )
}

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
          <div
            className={`${extraClasses} ${rule.classNameShort} p-sm bg-gray-lightest center`}
          >
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

function AllRules() {
  return (
    <div id="all">
      <Heading>All Rules</Heading>
      <Highlight lang="css">{euphoria.toString()}</Highlight>
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
    case 'Border width':
      return <BorderExample rules={rules} extraClasses="ba" />
      break
    case 'Border radius position':
      return <BorderExample rules={rules} extraClasses="ba br-md" />
      break
    case 'Border positions':
      return <BorderExample rules={rules} />
      break
    case 'Cursor':
    case 'Font families':
    case 'Font sizes':
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

function Documentation() {
  return (
    <div className="sans-serif cf p-sm-xs-only p-lg">
      <div className="mb-lg">
        <TOC />

        <h3>Euphoria Defaults</h3>
        <Highlight lang="css">
          {JSON.stringify(euphoria.defaults, null, 2)}
        </Highlight>
      </div>
      {RULES.map((ruleset, key) => (
        <div className="cf" key={key}>
          <Heading>
            <TopLink />
            {ruleset.name}
          </Heading>
          <div
            id={slugify(ruleset.name.toLowerCase())}
            className="fl-lg-up w-50-lg-up pr-md-lg-up mb-xl"
          >
            <ExampleAdapter ruleset={ruleset} />
          </div>
          <div className="fl-lg-up w-50-lg-up pl-md-lg-up mb-xl">
            <div className="gray-light mb-sm">Rule CSS:</div>
            <Highlight lang="css">{ruleset.toString()}</Highlight>
          </div>
        </div>
      ))}
      <AllRules />
    </div>
  )
}

ReactDOM.render(<Documentation />, document.querySelector('.examples'))
