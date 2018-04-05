import React from 'react'
import ReactDOM from 'react-dom'
import kebabCase from 'lodash/kebabCase'

const COLORS = [
  'primary-lightest',
  'primary-lighter',
  'primary-light',
  'primary',
  'primary-dark',
  'primary-darker',
  'primary-darkest',
  'secondary-lightest',
  'secondary-lighter',
  'secondary-light',
  'secondary',
  'secondary-dark',
  'secondary-darker',
  'secondary-darkest',
  'info-lightest',
  'info-lighter',
  'info-light',
  'info',
  'info-dark',
  'info-darker',
  'info-darkest',
  'success-lightest',
  'success-lighter',
  'success-light',
  'success',
  'success-dark',
  'success-darker',
  'success-darkest',
  'warning-lightest',
  'warning-lighter',
  'warning-light',
  'warning',
  'warning-dark',
  'warning-darker',
  'warning-darkest',
  'danger-lightest',
  'danger-lighter',
  'danger-light',
  'danger',
  'danger-dark',
  'danger-darker',
  'danger-darkest',
  'gray-lightest',
  'gray-lighter',
  'gray-light',
  'gray',
  'gray-dark',
  'gray-darker',
  'gray-darkest',
]
const CURSORS = [
  'auto',
  'default',
  'none',
  'context-menu',
  'help',
  'pointer',
  'progress',
  'wait',
  'cell',
  'crosshair',
  'text',
  'vertical-text',
  'alias',
  'copy',
  'move',
  'no-drop',
  'not-allowed',
  'all-scroll',
  'col-resize',
  'row-resize',
  'n-resize',
  'e-resize',
  's-resize',
  'w-resize',
  'ne-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'ew-resize',
  'ns-resize',
  'nesw-resize',
  'nwse-resize',
  'zoom-in',
  'zoom-out',
  'grab',
  'grabbing',
]
const WIDTHS = [
  0,
  5,
  10,
  15,
  20,
  25,
  30,
  33,
  40,
  50,
  60,
  66,
  70,
  75,
  80,
  90,
  100,
  'auto',
]
const DIRECTIONS = ['', 'l', 't', 'r', 'b', 'x', 'y']
const SPACINGS = ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
const MARGINS = [...SPACINGS, 'auto']
const PADDINGS = SPACINGS
const VARIABLES = `
/*---------------------------------------------
- Colors
---------------------------------------------*/

/* Base colors */

--color-primary: #31c4a9;
--color-secondary: #7a7a7a;
--color-info: #3187c4;
--color-success: #7db735;
--color-warning: #dd6618;
--color-danger: #d8401e;
--color-gray: #7a7a7a;
--color-white: white;
--color-black: black;

/* Color shades/tints */

--color-primary-lightest: #f7fdfc;
--color-primary-lighter: #e2f8f4;
--color-primary-light: #a5e9dc;
--color-primary-dark: #279b86;
--color-primary-darker: #218371;
--color-primary-darkest: #186254;

--color-secondary-lightest: #fafafa;
--color-secondary-lighter: #ededed;
--color-secondary-light: #c7c7c7;
--color-secondary-dark: #616161;
--color-secondary-darker: #525252;
--color-secondary-darkest: #3d3d3d;

--color-info-lightest: #f7fafd;
--color-info-lighter: #e2eff8;
--color-info-light: #a5cde9;
--color-info-dark: #276b9b;
--color-info-darker: #215a83;
--color-info-darkest: #184362;

--color-success-lightest: #f5faef;
--color-success-lighter: #e9f5db;
--color-success-light: #c5e3a0;
--color-success-dark: #618e29;
--color-success-darker: #517722;
--color-success-darkest: #3b5719;

--color-warning-lightest: #fef9f6;
--color-warning-lighter: #fbeadf;
--color-warning-light: #f4be9a;
--color-warning-dark: #ae5113;
--color-warning-darker: #934510;
--color-warning-darkest: #6e330c;

--color-danger-lightest: #fef7f6;
--color-danger-lighter: #fbe5e0;
--color-danger-light: #f2ac9c;
--color-danger-dark: #ab3217;
--color-danger-darker: #902a14;
--color-danger-darkest: #6c200f;

--color-gray-lightest: #fafafa;
--color-gray-lighter: #ededed;
--color-gray-light: #c7c7c7;
--color-gray-dark: #616161;
--color-gray-darker: #525252;
--color-gray-darkest: #3d3d3d;

/*---------------------------------------------
- Spacing
---------------------------------------------*/

--spacing-xxs: 0.25rem;
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 8rem;
--spacing-xxl: 14rem;

/*---------------------------------------------
- Font families
---------------------------------------------*/

--font-family-serif: Georgia, Times, serif;
--font-family-sans-serif: Helvetica, Arial, sans-serif;
--font-family-mono: Consolas, Monaco, mono;

/*---------------------------------------------
- Font sizes
---------------------------------------------*/

--font-size-xxxl: 4rem;
--font-size-xxl: 2.6rem;
--font-size-xl: 1.9rem;
--font-size-lg: 1.3rem;
--font-size-md: 1rem;
--font-size-sm: 0.85rem;
--font-size-xs: 0.7rem;

/*---------------------------------------------
- Border sizes
---------------------------------------------*/

--border-radius-xs: 0.15em;
--border-radius-sm: 0.3em;
--border-radius-md: 0.6em;
--border-radius-lg: 1em;
--border-radius-xl: 1.8em;
--border-radius-pill: 100em;

/*---------------------------------------------
- Border widths
---------------------------------------------*/

--border-width-xxs: 1px;
--border-width-xs: 0.25rem;
--border-width-sm: 0.5rem;
--border-width-md: 1rem;
--border-width-lg: 1.5rem;
--border-width-xl: 2rem;
--border-width-xxl: 3rem;

/*---------------------------------------------
- Box shadows
---------------------------------------------*/

--box-shadow-1: 0 0 4px 2px rgba(0, 0, 0, 0.2);
--box-shadow-2: 0 0 8px 2px rgba(0, 0, 0, 0.2);
--box-shadow-3: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
--box-shadow-4: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
--box-shadow-5: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);

/*---------------------------------------------
- Letter spacing
---------------------------------------------*/

--letter-spacing-xxs: -0.2em;
--letter-spacing-xs: -0.1em;
--letter-spacing-sm: 0.05em;
--letter-spacing-md: 0em;
--letter-spacing-lg: 0.3em;
--letter-spacing-xl: 0.6em;
--letter-spacing-xxl: 1.2em;

/*---------------------------------------------
- line heights
---------------------------------------------*/

--line-height-xxs: 0.5em;
--line-height-xs: 0.75em;
--line-height-sm: 1em;
--line-height-md: 1.5em;
--line-height-lg: 2em;
--line-height-xl: 3em;
--line-height-xxl: 4em;
`

function SectionHeading({ children, ...props }) {
  return (
    <h2
      className="txt-md upper lighter ls-lg mt-xl mb-lg pb-sm bb bc-gray-lighter"
      {...props}
    >
      {children}
    </h2>
  )
}

function SubSectionHeading({ children, ...props }) {
  return (
    <h3 className="mt-md txt-md" {...props}>
      {children}
    </h3>
  )
}

function TOCItem({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="db primary hov-primary-dark hov-bg-primary-lightest td-none my-xs px-sm py-xs"
      >
        {children}
      </a>
    </li>
  )
}

function BackgroundSizes() {
  return (
    <div>
      <SubSectionHeading>Normal</SubSectionHeading>
      <div
        style={{
          backgroundImage:
            'url(https://cl.ly/qBgU/Image%202018-03-14%20at%205.21.39%20PM.jpg)',
          height: '300px',
        }}
      />
      <SubSectionHeading>
        With <code>cover</code> class applied:
      </SubSectionHeading>
      <div
        className="cover"
        style={{
          backgroundImage:
            'url(https://cl.ly/qBgU/Image%202018-03-14%20at%205.21.39%20PM.jpg)',
          height: '300px',
        }}
      />
      <SubSectionHeading>
        With <code>contain</code> class applied:
      </SubSectionHeading>
      <div
        className="contain"
        style={{
          backgroundImage:
            'url(https://cl.ly/qBgU/Image%202018-03-14%20at%205.21.39%20PM.jpg)',
          height: '300px',
        }}
      />
    </div>
  )
}

function BackgroundColors() {
  return (
    <div>
      {COLORS.map((c, key) => (
        <div key={key}>
          <p className={'bg-' + c}>
            This text has class <code>{c}</code>.
          </p>
        </div>
      ))}
      <p className="bg-white">
        This text has class <code>bg-white</code>.
      </p>
      <p className="bg-transparent">
        This text has class <code>bg-transparent</code>.
      </p>
      <p className="white bg-black">
        This text has class <code>bg-black</code>.
      </p>
      <p className="bg-inherit">
        This text has class <code>bg-inherit</code>.
      </p>
      <p className="bg-initial">
        This text has class <code>bg-initial</code>.
      </p>
    </div>
  )
}

function BorderCollapse() {
  return (
    <div>
      Add the class <code>collapse</code> to a table to remove the spacing
      between cell borders.
    </div>
  )
}

function BorderColors() {
  return (
    <div>
      <SubSectionHeading>Usage</SubSectionHeading>
      <p>
        Add a border positions (eg <code>ba</code>), then define the border
        color.
      </p>
      <SubSectionHeading>Hover styles</SubSectionHeading>
      <p>
        Prefix the border colors with <code>hov-</code> to change color on hover
        (eg <code>hov-bc-primary</code>).
      </p>
      <SubSectionHeading>Examples</SubSectionHeading>
      {COLORS.map((c, key) => (
        <p className={`bt bc-${c} bw-xs pt-xxs mb-sm`} key={key}>
          <code>bc-{c}</code>
        </p>
      ))}
    </div>
  )
}

function BorderPositions() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba">
        This element has the class <code>ba</code>
      </p>
      <p className="p-sm bg-gray-lightest bl">
        This element has the class <code>bl</code>
      </p>
      <p className="p-sm bg-gray-lightest bt">
        This element has the class <code>bt</code>
      </p>
      <p className="p-sm bg-gray-lightest br">
        This element has the class <code>br</code>
      </p>
      <p className="p-sm bg-gray-lightest bb">
        This element has the class <code>bb</code>
      </p>
      <p className="p-sm bg-gray-lightest bx">
        This element has the class <code>bx</code>
      </p>
      <p className="p-sm bg-gray-lightest by">
        This element has the class <code>by</code>
      </p>
    </div>
  )
}

function BorderRadii() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba rad-none">
        This element has the class <code>rad-none</code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-xs">
        This element has the class <code>rad-xs</code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-sm">
        This element has the class <code>rad-sm</code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-md">
        This element has the class <code>rad-md</code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-lg">
        This element has the class <code>rad-lg</code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-xl">
        This element has the class <code>rad-xl</code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-pill">
        This element has the class <code>rad-pill</code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-100">
        This element has the class <code>rad-100</code>
      </p>
    </div>
  )
}

function BorderRemoval() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba ba-none">
        This element has the class <code>ba-none</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bl-none">
        This element has the class <code>bl-none</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bt-none">
        This element has the class <code>bt-none</code>
      </p>
      <p className="p-sm bg-gray-lightest ba br-none">
        This element has the class <code>br-none</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bb-none">
        This element has the class <code>bb-none</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bx-none">
        This element has the class <code>bx-none</code>
      </p>
      <p className="p-sm bg-gray-lightest ba by-none">
        This element has the class <code>by-none</code>
      </p>
    </div>
  )
}

function BorderStyles() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba b-solid">
        This element has the class <code>b-solid</code>
      </p>
      <p className="p-sm bg-gray-lightest ba b-dashed">
        This element has the class <code>b-dashed</code>
      </p>
      <p className="p-sm bg-gray-lightest ba b-dotted">
        This element has the class <code>b-dotted</code>
      </p>
    </div>
  )
}

function BorderWidths() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba bw-xxs">
        This element has the class <code>bw-xxs</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-xs">
        This element has the class <code>bw-xs</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-sm">
        This element has the class <code>bw-sm</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-md">
        This element has the class <code>bw-md</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-lg">
        This element has the class <code>bw-lg</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-xl">
        This element has the class <code>bw-xl</code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-xxl">
        This element has the class <code>bw-xxl</code>
      </p>
    </div>
  )
}

function BoxShadows() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(s => (
        <div className={`p-sm my-md bs-${s}`} key={s}>
          This div has the class <code>bs-{s}</code>.
        </div>
      ))}
    </div>
  )
}

function Clearfix() {
  return (
    <p>
      Use the class <code>clearfix</code> to clear floats on parent elements.
    </p>
  )
}

function Cursors() {
  return (
    <div>
      <p className="mb-lg">
        Hover over the examples below to preview the cursor.
      </p>
      {CURSORS.map(c => (
        <p className={`c-${c}`} key={c}>
          This text has the class <code>c-{c}</code>.
        </p>
      ))}
    </div>
  )
}

function Display() {
  return (
    <div>
      <p>
        Add the class <code>db</code> to give an element the display{' '}
        <code>block</code>
      </p>
      <p>
        Add the class <code>di</code> to give an element the display{' '}
        <code>inline</code>
      </p>
      <p>
        Add the class <code>dib</code> to give an element the display{' '}
        <code>inline-block</code>
      </p>
      <p>
        Add the class <code>df</code> to give an element the display{' '}
        <code>flex</code>
      </p>
      <p>
        Add the class <code>dfb</code> to give an element the display{' '}
        <code>flex-block</code>
      </p>
      <p>
        Add the class <code>dt</code> to give an element the display{' '}
        <code>table</code>
      </p>
      <p>
        Add the class <code>dtc</code> to give an element the display{' '}
        <code>table-cell</code>
      </p>
      <p>
        Add the class <code>dn</code> to give an element the display{' '}
        <code>none</code>
      </p>
    </div>
  )
}

function Floats() {
  return (
    <div>
      <p>
        Add the class <code>fl</code> to give an element the float{' '}
        <code>left</code>
      </p>
      <p>
        Add the class <code>fr</code> to give an element the float{' '}
        <code>right</code>
      </p>
      <p>
        Add the class <code>fn</code> to give an element the float{' '}
        <code>none</code>
      </p>
    </div>
  )
}

function Heights() {
  return (
    <div>
      <p>
        Heights have the same values as widths, just prefix the values with{' '}
        <code>h</code> instead of <code>w</code> (<code>w-20</code> changes to{' '}
        <code>h-20</code>).
      </p>
      <p>
        Please see <a href="#widths">widths</a> for available values.
      </p>
    </div>
  )
}

function Opacity() {
  return (
    <div>
      <p>
        Give an element the class <code>o-0</code> to give it <code>0</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-025</code> to give it{' '}
        <code>0.025</code> opacity.
      </p>
      <p>
        Give an element the class <code>o-05</code> to give it <code>0.05</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-10</code> to give it <code>0.1</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-20</code> to give it <code>0.2</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-30</code> to give it <code>0.3</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-40</code> to give it <code>0.4</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-50</code> to give it <code>0.5</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-60</code> to give it <code>0.6</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-70</code> to give it <code>0.7</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-80</code> to give it <code>0.8</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-90</code> to give it <code>0.9</code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <code>o-1</code> to give it <code>1</code>{' '}
        opacity.
      </p>
    </div>
  )
}

function Overflow() {
  return (
    <div>
      <p>
        Give an element the class <code>of-visible</code> to give it an overflow
        of <code>visible</code>.
      </p>
      <p>
        Give an element the class <code>of-hidden</code> to give it an overflow
        of <code>hidden</code>.
      </p>
      <p>
        Give an element the class <code>of-scroll</code> to give it an overflow
        of <code>scroll</code>.
      </p>
      <p>
        Give an element the class <code>of-auto</code> to give it an overflow of{' '}
        <code>auto</code>.
      </p>
    </div>
  )
}

function Positioning() {
  return (
    <div>
      <p>
        Give an element the class <code>relative</code> to give it a position of{' '}
        <code>relative</code>.
      </p>
      <p>
        Give an element the class <code>absolute</code> to give it a position of{' '}
        <code>absolute</code>.
      </p>
      <p>
        Give an element the class <code>fixed</code> to give it a position of{' '}
        <code>fixed</code>.
      </p>
    </div>
  )
}

function Spacings({ sizes }) {
  return (
    <div>
      {sizes.map((m, key) => (
        <div key={key}>
          <SubSectionHeading>
            Size: <code>{m}</code>
          </SubSectionHeading>
          {DIRECTIONS.map((d, key) => (
            <p key={key}>
              <code>
                m{d}-{m}
              </code>
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

function TextColors() {
  return (
    <div>
      {COLORS.map((c, key) => (
        <p className={c} key={key}>
          This text has class <code>{c}</code>.
        </p>
      ))}
      <p className="white bg-black">
        This text has class <code>white</code>.
      </p>
      <p className="black">
        This text has class <code>black</code>.
      </p>
    </div>
  )
}

function VerticalAlignment() {
  return (
    <div>
      <p>
        Give an element the class <code>v-base</code> to give it a
        vertical-align of <code>baseline</code>.
      </p>
      <p>
        Give an element the class <code>v-bot</code> to give it a vertical-align
        of <code>bottom</code>.
      </p>
      <p>
        Give an element the class <code>v-top</code> to give it a vertical-align
        of <code>top</code>.
      </p>
      <p>
        Give an element the class <code>v-text-top</code> to give it a
        vertical-align of <code>text-top</code>.
      </p>
      <p>
        Give an element the class <code>v-text-bot</code> to give it a
        vertical-align of <code>text-bottom</code>.
      </p>
    </div>
  )
}

function Visibility() {
  return (
    <div>
      <p>
        Give an element the class <code>visible</code> to give it a visibility
        of <code>visible</code>.
      </p>
      <p>
        Give an element the class <code>invisible</code> to give it a visibility
        of <code>hidden</code>.
      </p>
    </div>
  )
}

function Whitespace() {
  return (
    <div>
      <p>
        Give an element the class <code>ws-pre</code> to give it a white-space
        of <code>pre</code>.
      </p>
      <p>
        Give an element the class <code>ws-nowrap</code> to give it a
        white-space of <code>nowrap</code>.
      </p>
      <p>
        Give an element the class <code>ws-normal</code> to give it a
        white-space of <code>ws-normal</code>.
      </p>
    </div>
  )
}

function Widths() {
  return (
    <div>
      <p>
        You can prefix any width class with <code>m</code> to change it to a{' '}
        <code>max-width</code> class (eg <code>mw-50</code> sets{' '}
        <code>max-width: 50%;</code>)
      </p>
      {WIDTHS.map((w, key) => (
        <div className="my-sm" key={key}>
          <p className="mb-xs">
            <code>w-{w}</code>
          </p>
          <div className={`bg-primary white w-${w} py-xs`} />
        </div>
      ))}
    </div>
  )
}

function ZIndex() {
  return (
    <div>
      <p>
        Give an element the class <code>z-0</code> to give it a z-index of{' '}
        <code>0</code>.
      </p>
      <p>
        Give an element the class <code>z-100</code> to give it a z-index of{' '}
        <code>100</code>.
      </p>
      <p>
        Give an element the class <code>z-200</code> to give it a z-index of{' '}
        <code>200</code>.
      </p>
      <p>
        Give an element the class <code>z-300</code> to give it a z-index of{' '}
        <code>300</code>.
      </p>
      <p>
        Give an element the class <code>z-400</code> to give it a z-index of{' '}
        <code>400</code>.
      </p>
      <p>
        Give an element the class <code>z-500</code> to give it a z-index of{' '}
        <code>500</code>.
      </p>
      <p>
        Give an element the class <code>z-600</code> to give it a z-index of{' '}
        <code>600</code>.
      </p>
      <p>
        Give an element the class <code>z-700</code> to give it a z-index of{' '}
        <code>700</code>.
      </p>
      <p>
        Give an element the class <code>z-800</code> to give it a z-index of{' '}
        <code>800</code>.
      </p>
      <p>
        Give an element the class <code>z-900</code> to give it a z-index of{' '}
        <code>900</code>.
      </p>
      <p>
        Give an element the class <code>z-1000</code> to give it a z-index of{' '}
        <code>1000</code>.
      </p>
    </div>
  )
}

const sections = [
  {
    Component: BackgroundColors,
    title: 'Background colors',
  },
  {
    Component: BackgroundSizes,
    title: 'Background sizes',
  },
  {
    Component: BorderCollapse,
    title: 'Border collapse',
  },
  {
    Component: BorderColors,
    title: 'Border colors',
  },
  {
    Component: BorderPositions,
    title: 'Border positions',
  },
  {
    Component: BorderRadii,
    title: 'Border radii',
  },
  {
    Component: BorderRemoval,
    title: 'Border removal',
  },
  {
    Component: BorderStyles,
    title: 'Border styles',
  },
  {
    Component: BorderWidths,
    title: 'Border widths',
  },
  {
    Component: BoxShadows,
    title: 'Box shadows',
  },
  {
    Component: Clearfix,
    title: 'Clearfix',
  },
  {
    Component: Cursors,
    title: 'Cursors',
  },
  {
    Component: Display,
    title: 'Display',
  },
  {
    Component: Floats,
    title: 'Floats',
  },
  {
    Component: Heights,
    title: 'Heights',
  },
  {
    Component: Opacity,
    title: 'Opacity',
  },
  {
    Component: Overflow,
    title: 'Overflow',
  },
  {
    Component: Positioning,
    title: 'Positioning',
  },
  {
    Component: () => <Spacings sizes={MARGINS} />,
    title: 'Margins',
  },
  {
    Component: () => <Spacings sizes={PADDINGS} />,
    title: 'Paddings',
  },
  {
    Component: TextColors,
    title: 'Text colors',
  },
  {
    Component: VerticalAlignment,
    title: 'Vertical alignment',
  },
  {
    Component: Visibility,
    title: 'Visibility',
  },
  {
    Component: Whitespace,
    title: 'Whitespace',
  },
  {
    Component: Widths,
    title: 'Widths',
  },
  {
    Component: ZIndex,
    title: 'Z-Index',
  },
]

function Docs() {
  return (
    <div
      className="mx-auto my-md sans-serif p-md"
      style={{ maxWidth: '800px' }}
    >
      <h1 className="txt-xxl mb-lg lighter">Euphoria Reference</h1>

      <SectionHeading>Table of Contents</SectionHeading>
      <ul className="unstyled ml-none pl-none">
        {sections.map((section, key) => (
          <TOCItem
            href={'#' + kebabCase(section.title.toLowerCase())}
            key={key}
          >
            {section.title}
          </TOCItem>
        ))}
        <TOCItem href="#variables">Variables</TOCItem>
      </ul>

      {sections.map((section, key) => (
        <section key={key}>
          <SectionHeading id={kebabCase(section.title.toLowerCase())}>
            {section.title} {section.Component.displayName}
          </SectionHeading>
          <section.Component />
        </section>
      ))}

      <section>
        <SectionHeading id="variables">Variables</SectionHeading>
        <p>
          Below are all the CSS variables that Euphoria provides. Feel free to
          override any of them to customize Euphoria to your needs.
        </p>
        <pre className="px-md py-sm bg-success-lightest bl bw-xs bc-success-light">
          {VARIABLES}
        </pre>
      </section>
    </div>
  )
}

ReactDOM.render(<Docs />, document.getElementById('docs'))
