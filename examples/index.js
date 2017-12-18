import _ from 'lodash'
import Euphoria from '../euphoria'
import Highlight from './highlight'
import React from 'react'
import ReactDOM from 'react-dom'
import slugify from 'slugify'
import { css } from 'glamor'
import { selectLimit } from '../../../Library/Caches/typescript/2.6/node_modules/@types/async'

// Generate the Euhpria CSS
const euphoria = new Euphoria()
css.insert(euphoria.toString())

const RULES = _.sortBy(euphoria.rules, 'name')

function TOC() {
  return (
    <nav>
      <h2 className="txt-xs my-lg sans-serif mt-none center uppercase ls-lg txt-gray-light">
        Table of contents
      </h2>
      {RULES.map((ruleset, key) => (
        <a
          href={`#${slugify(ruleset.name)}`}
          className="px-sm py-xs txt-primary hover-txt-white hover-bg-primary no-decoration db br-xs"
          key={key}
        >
          {ruleset.name}
        </a>
      ))}
    </nav>
  )
}

function TopLink() {
  return (
    <a
      href="#"
      className="fr txt-gray-light hover-txt-primary hover-bg-gray-lightest px-sm py-xxs no-decoration txt-sm ls-md br-pill"
    >
      ↑ Top
    </a>
  )
}

function CodeTile({ selector }) {
  return (
    <code className="bg-gray-lightest hover-bg-orange hover-txt-white px-sm py-xs mr-xs mb-xs dib br-xs">
      {selector}
    </code>
  )
}

function Pre({ children }) {
  return (
    <pre className="code px-md py-sm bg-gray-lightest bl bw-md bc-gray-lighter mt-md mb-xxl txt-sm">
      {children}
    </pre>
  )
}

function BackgroundColorExample({ rules }) {
  return (
    <table className="border-collapse">
      <tbody>
        {rules.map((rule, key) => (
          <tr key={key}>
            <td
              className={`${rule.selector.slice(
                1
              )} py-lg px-xl am br bc-transparent`}
            />
            <td className="p-lg bb bc-gray-lighter">
              <code className="txt-gray-darker">{rule.selectorShort}</code>
              <small className="mx-sm txt-gray-light">or</small>
              <code className="txt-gray-darker">{rule.selectorVerbose}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function TextColorExample({ rules }) {
  return (
    <table className="border-collapse">
      <tbody>
        {rules.map((rule, key) => (
          <tr key={key}>
            <td
              className={`p-lg align-middle br bb bc-gray-lighter ${rule.selector ===
                '.txt-white' || rule.selector === '.txt-transparent'
                ? 'bg-black'
                : ''}`}
            >
              <span className={`${rule.selector.slice(1)} txt-xxl bold`}>
                ABC
              </span>
            </td>
            <td className="p-lg bb bc-gray-lighter">
              <code className="txt-gray-darker">{rule.selectorShort}</code>
              <small className="mx-sm txt-gray-light">or</small>
              <code className="txt-gray-darker">{rule.selectorVerbose}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function SelectorList({ rules }) {
  return (
    <div>
      {rules.map((rule, key) => (
        <p>
          <CodeTile selector={rule.selectorShort} key={key} />
          <small className="mx-sm txt-graylight">or</small>
          <CodeTile selector={rule.selectorVerbose} key={key} />
        </p>
      ))}
    </div>
  )
}

function Documentation() {
  return (
    <div className="sans-serif cf">
      <div className="fl w-20 p-lg">
        <TOC />
      </div>

      <div className="fl w-80 p-lg">
        {RULES.map((ruleset, key) => (
          <div id={slugify(ruleset.name)} key={key}>
            <h2
              id={key}
              className="txt-md mb-lg pb-sm bb sans-serif ls-xl uppercase"
            >
              <TopLink />
              {ruleset.name}
            </h2>

            {ruleset.name === 'Text colors' && (
              <TextColorExample rules={ruleset.rules} />
            )}
            {ruleset.name === 'Background colors' && (
              <BackgroundColorExample rules={ruleset.rules} />
            )}

            <h5 className="mt-lg mb-sm txt-sm">Selectors</h5>
            <SelectorList rules={ruleset.rules} />

            <h5 className="mt-lg mb-sm txt-sm">Rule CSS</h5>
            <Pre>
              {ruleset.rules.map((rule, key) => (
                <div key={key}>{rule.css}</div>
              ))}
            </Pre>
          </div>
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(<Documentation />, document.querySelector('.examples'))

// const COLORS = _.map(defaults.colors, (val, key) => key)

// const SECTIONS = [
//   {
//     key: 'border-directions',
//     heading: 'Border direction',
//     Component: () => {
//       const rules = ['ba', 'bl', 'br', 'bt', 'bb']
//       return <BorderExample rules={rules} />
//     },
//   },
//   {
//     key: 'border-style',
//     heading: 'Border style',
//     Component: () => {
//       const rules = ['ba b-solid', 'ba b-dotted', 'ba b-dashed']
//       return <BorderExample rules={rules} />
//     },
//   },
//   {
//     key: 'border-width',
//     heading: 'Border width',
//     Component: () => {
//       const rules = ['ba bw-xs', 'ba bw-sm', 'ba bw-md', 'ba bw-lg', 'ba bw-xl']
//       return <BorderExample rules={rules} />
//     },
//   },
//   {
//     key: 'border-remove',
//     heading: 'Remove Borders',
//     Component: () => {
//       const rules = ['ba bn', 'ba bn-l', 'ba bn-t', 'ba bn-r', 'ba bn-b']
//       return <BorderExample rules={rules} />
//     },
//   },
//   {
//     key: 'border-radius',
//     heading: 'Border radius',
//     Component: () => {
//       const rules = [
//         'ba br-none',
//         'ba br-xs',
//         'ba br-sm',
//         'ba br-md',
//         'ba br-lg',
//         'ba br-xl',
//         'ba br-pill',
//       ]
//       return <BorderExample rules={rules} extraClasses="p-xl" />
//     },
//   },
//   {
//     key: 'colors-background',
//     heading: 'Background Colors',
//     Component: () => {
//       return (
//         <table className="border-collapse">
//           <tbody>
//             {COLORS.map((color, key) => (
//               <tr key={key}>
//                 <td
//                   className={`bg-${color} py-lg px-xl align-middle br bc-transparent`}
//                 />
//                 <td className="p-lg bb bc-gray-lighter">
//                   <code className="txt-gray">bg-{color}</code>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )
//     },
//   },
//   {
//     key: 'colors-text',
//     heading: 'Text Colors',
//     Component: () => {
//       return (
//         <table className="border-collapse">
//           <tbody>
//             {COLORS.map((color, key) => (
//               <tr key={key}>
//                 <td className="p-lg align-middle br bb bc-gray-lighter">
//                   <span className={`txt-${color} txt-xxl bold`}>ABC</span>
//                 </td>
//                 <td className="p-lg bb bc-gray-lighter">
//                   <code className="txt-gray">txt-{color}</code>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )
//     },
//   },
//   {
//     key: 'display',
//     heading: 'Display',
//     Component: () => {
//       return (
//         <div>
//           {[
//             'block',
//             'inline',
//             'inline-block',
//             'flex',
//             'inline-flex',
//             'table',
//             'table-cell',
//             'none',
//           ].map(display => (
//             <div className="my-md" key={display}>
//               <h4>
//                 <code>
//                   &lt;div class="{display}"&gt;.{display}&lt;/div&gt;
//                 </code>
//               </h4>
//               <div className="p-xs ba bc-gray-light">
//                 <div className={`${display} bg-gray-lighter p-xs ba bc-gray`}>
//                   <code>.{display}</code>
//                 </div>
//                 <div className={`${display} bg-gray-lighter p-xs ba bc-gray`}>
//                   <code>.{display}</code>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )
//     },
//   },
//   {
//     key: 'font-family',
//     heading: 'Font Families',
//     Component: () => (
//       <FontFamilyExamples
//         families={[
//           'serif',
//           'sans-serif',
//           'system',
//           'code',
//           'ff-athelas',
//           'ff-avenir',
//           'ff-baskervile',
//           'ff-bodoni',
//           'ff-calisto',
//           'ff-courier',
//           'ff-helvetica',
//           'ff-garamond',
//           'ff-georgia',
//           'ff-times',
//         ]}
//       />
//     ),
//   },
//   {
//     key: 'flexbox',
//     heading: 'Flex Box',
//     Component: () => (
//       <div>
//         <p>
//           See <a href="#display-flex">Display</a> section for{' '}
//           <code>.display-flex</code> reference.
//         </p>
//         <h4 id="alignment-flexbox-direction">Direction</h4>
//         <ul>
//           <li>
//             <code>.flex-row</code>
//           </li>
//           <li>
//             <code>.flex-row-reverse</code>
//           </li>
//           <li>
//             <code>.flex-column</code>
//           </li>
//           <li>
//             <code>.flex-column-reverse</code>
//           </li>
//         </ul>
//         <h4 id="alignment-flexbox-justify">Justify</h4>
//         <ul>
//           <li>
//             <code>.justify-content-start</code>
//           </li>
//           <li>
//             <code>.justify-content-end</code>
//           </li>
//           <li>
//             <code>.justify-content-center</code>
//           </li>
//           <li>
//             <code>.justify-content-between</code>
//           </li>
//           <li>
//             <code>.justify-content-around</code>
//           </li>
//         </ul>
//         <h4 id="alignment-flexbox-align">Align Items</h4>
//         <ul>
//           <li>
//             <code>.align-items-start</code>
//           </li>
//           <li>
//             <code>.align-items-end</code>
//           </li>
//           <li>
//             <code>.align-items-center</code>
//           </li>
//           <li>
//             <code>.align-items-baseline</code>
//           </li>
//           <li>
//             <code>.align-items-stretch</code>
//           </li>
//         </ul>
//         <h4 id="alignment-flexbox-align">Align Self</h4>
//         <ul>
//           <li>
//             <code>.align-self-start</code>
//           </li>
//           <li>
//             <code>.align-self-end</code>
//           </li>
//           <li>
//             <code>.align-self-center</code>
//           </li>
//           <li>
//             <code>.align-self-baseline</code>
//           </li>
//           <li>
//             <code>.align-self-stretch</code>
//           </li>
//         </ul>
//         <h4 id="alignment-flexbox-content">Align Content</h4>
//         <ul>
//           <li>
//             <code>.align-content-start</code>
//           </li>
//           <li>
//             <code>.align-content-end</code>
//           </li>
//           <li>
//             <code>.align-content-center</code>
//           </li>
//           <li>
//             <code>.align-content-stretch</code>
//           </li>
//           <li>
//             <code>.align-content-between</code>
//           </li>
//           <li>
//             <code>.align-content-around</code>
//           </li>
//         </ul>
//         <h4 id="alignment-flexbox-wrapping">Wrapping</h4>
//         <ul>
//           <li>
//             <code>.flex-wrap</code>
//           </li>
//           <li>
//             <code>.flex-wrap-reverse</code>
//           </li>
//           <li>
//             <code>.flex-nowrap</code>
//           </li>
//         </ul>
//         <h4 id="alignment-flexbox-ordering">Ordering</h4>
//         <ul>
//           <li>
//             <code>.flex-first</code>
//           </li>
//           <li>
//             <code>.flex-last</code>
//           </li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     key: 'floats',
//     heading: 'Floats',
//     Component: () => (
//       <ul>
//         <li>
//           <code>.fl</code>
//         </li>
//         <li>
//           <code>.fr</code>
//         </li>
//         <li>
//           <code>.fn</code>
//         </li>
//       </ul>
//     ),
//   },
//   // { key: 'spacing', heading: 'Spacing', Component: Spacing, subsections: [] },
//   {
//     key: 'lists',
//     heading: 'Lists',
//     Component: () => (
//       <div>
//         <p>
//           <code>.unstyled</code>
//         </p>
//         <ul className="unstyled">
//           <li>Here is an</li>
//           <li>Unstyled list.</li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     key: 'position',
//     heading: 'Position',
//     Component: () => (
//       <ul>
//         <li>
//           <code>.relative</code>
//         </li>
//         <li>
//           <code>.absolute</code>
//         </li>
//         <li>
//           <code>.fixed</code>
//         </li>
//       </ul>
//     ),
//   },
//   {
//     key: 'txt-alignment',
//     heading: 'Text Alignment',
//     Component: () => (
//       <div>
//         <p className="bg-gray-lightest ba p-md w-20 txt-left">
//           <code>txt-left</code>
//         </p>
//         <p className="bg-gray-lightest ba p-md w-20 txt-center">
//           <code>txt-center</code>
//         </p>
//         <p className="bg-gray-lightest ba p-md w-20 txt-right">
//           <code>txt-right</code>
//         </p>
//         <p className="bg-gray-lightest ba p-md w-20 txt-justify">
//           <code>txt-right</code>
//           . Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
//           lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna
//           mollis ornare vel eu leo.
//         </p>
//       </div>
//     ),
//   },
//   {
//     key: 'txt-decoration',
//     heading: 'Text decoration',
//     Component: () => {
//       return (
//         <FontExample
//           styles={['line-through', 'underline', 'normal', 'bold', 'italic']}
//         />
//       )
//     },
//   },
//   {
//     key: 'txt-transforms',
//     heading: 'Text transforms',
//     Component: () => {
//       return <FontExample styles={['uppercase', 'lowercase', 'capitalize']} />
//     },
//   },
//   {
//     key: 'txt-sizes',
//     heading: 'Text sizes',
//     Component: () => {
//       return (
//         <FontExample
//           styles={[
//             'txt-xxxl',
//             'txt-xxl',
//             'txt-xl',
//             'txt-lg',
//             'txt-md',
//             'txt-sm',
//             'txt-xs',
//           ]}
//         />
//       )
//     },
//   },
//   {
//     key: 'visibility',
//     heading: 'Visibility',
//     Component: () => {
//       return (
//         <div>
//           {['visible', 'invisible'].map(display => (
//             <div className="my-md" key={display}>
//               <h4>
//                 <code>
//                   &lt;div class="{display}"&gt;.{display}&lt;/div&gt;
//                 </code>
//               </h4>
//               <div className="p-xs ba bc-gray-light w-30">
//                 <div className={`${display} bg-gray-lighter p-xs ba bc-gray`}>
//                   <code>.{display}</code>
//                 </div>
//                 <div className={`${display} bg-gray-lighter p-xs ba bc-gray`}>
//                   <code>.{display}</code>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )
//     },
//   },
//   {
//     key: 'vertical-alignment',
//     heading: 'Vertical Alignment',
//     Component: () => (
//       <ul>
//         <li>
//           <code>.align-baseline</code>
//         </li>
//         <li>
//           <code>.align-top</code>
//         </li>
//         <li>
//           <code>.align-middle</code>
//         </li>
//         <li>
//           <code>.align-bottom</code>
//         </li>
//         <li>
//           <code>.align-txt-top</code>
//         </li>
//         <li>
//           <code>.align-txt-bottom</code>
//         </li>
//       </ul>
//     ),
//   },
//   { key: 'all', heading: 'All Rules', Component: AllRules },
// ]

// function AllRules() {
//   return <Highlight lang="css">{RULES.join('\n')}</Highlight>
// }

// function FontExample({ styles }) {
//   return (
//     <div>
//       <div className="clearfix">
//         <div className="fl w-50">
//           {styles.map((style, key) => (
//             <div className="my-md" key={key}>
//               <div className={`${style}`}>
//                 This text is{' '}
//                 <code className="txt-primary lowercase">{style}</code>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="fl w-50 pl-lg">
//           {/* <Highlight lang="css">{euphoria.text().join('\n')}</Highlight> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// function BorderExample({ rules, extraClasses }) {
//   return (
//     <div>
//       {rules.map((rules, key) => (
//         <div key={key}>
//           <code>&lt;div class="{rules}"&gt;&lt;div&gt;</code>
//           <p
//             className={`${rules} p-lg bg-gray-lightest mw-10 ${extraClasses ||
//               ''}`}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }

// function FontFamilyExamples({ families }) {
//   return (
//     <div>
//       {families.map((family, key) => (
//         <div key={key}>
//           <div className={family}>
//             <h5 className="txt-xxl m-none">
//               <code>{family}</code>
//             </h5>
//             <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
//             <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
//             <p>
//               <span className="mr-lg">0 1 2 3 4 5 6 7 8 9</span> ! ? & ~ @ # $ %
//               ^ * ( ) " ; : ' , . - / | \ + =
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// function Header() {
//   return (
//     <header className="p-xl bg-gray-lighter">
//       <h1 className="txt-xxxl serif normal uppercase m-none">🏝 Euphoria</h1>
//       <p className="txt-lg txt-gray-dark mw-60">
//         Examples of how to use Euphoria styles in your CSS-in-JS project.
//       </p>
//       <p>
//         Please see{' '}
//         <a href="https://github.com/danawoodman/euphoria">
//           Euphoria on Github
//         </a>.
//       </p>
//     </header>
//   )
// }

// function Navigation() {
//   return (
//     <section className="txt-center">
//       <h5 className="txt-xl mt-xl mb-md uppercase ls-lg">Sections</h5>
//       <nav className="mb-xl w-50 mx-auto">
//         <ul className="unstyled">
//           {SECTIONS &&
//             SECTIONS.map((section, key) => (
//               <a
//                 className="txt-sm ib px-md py-xs m-xxs ba bc-primary br-pill txt-primary hover-txt-white no-decoration bg-white hover-bg-primary"
//                 href={`#${section.key}`}
//                 key={key}
//               >
//                 {section.heading}
//               </a>
//             ))}
//         </ul>
//       </nav>
//     </section>
//   )
// }

// function Examples() {
//   return (
//     <div className="p-xl">
//       {SECTIONS.map(section => (
//         <section id={section.key} key={section.key}>
//           <h2
//             id={section.key}
//             className="txt-sm mt-xxl mb-lg pb-sm bb sans-serif ls-xl uppercase"
//           >
//             <a
//               href="#"
//               className="fr txt-gray-light hover-txt-primary no-decoration txt-sm ls-md"
//             >
//               ^ Top
//             </a>
//             {section.heading}
//           </h2>
//           {section.Component && <section.Component />}
//         </section>
//       ))}
//     </div>
//   )
// }

// function Docs() {
//   return (
//     <div className="sans-serif">
//       <Header />
//       <Navigation />
//       <Examples />
//     </div>
//   )
// }

// const root = document.querySelector('.root')
// ReactDOM.render(<Docs />, root)
