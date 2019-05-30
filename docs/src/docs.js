import React from 'react'
import ReactDOM from 'react-dom'
import kebabCase from 'lodash/kebabCase'
import {
  COLORS,
  CURSORS,
  DIRECTIONS,
  MARGINS,
  PADDINGS,
  WIDTHS,
  VARIABLES,
} from './constants'

function Code({ children, className, ...props }) {
  return (
    <code
      className={`bg-gray-lightest danger px-xs py-xxs ${className}`}
      {...props}
    >
      {children}
    </code>
  )
}

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
        With <Code>cover</Code> class applied:
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
        With <Code>contain</Code> class applied:
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
      <p>
        Add the prefix <code>hov-</code> to any background color to add a{' '}
        <code>:hover</code> background style to the given element.
      </p>
      {COLORS.map((c, key) => (
        <div key={key}>
          <p className={'bg-' + c}>
            This text has class <Code>bg-{c}</Code>.
          </p>
        </div>
      ))}
      <p className="bg-white">
        This text has class <Code>bg-white</Code>.
      </p>
      <p className="bg-transparent">
        This text has class <Code>bg-transparent</Code>.
      </p>
      <p className="white bg-black">
        This text has class <Code>bg-black</Code>.
      </p>
      <p className="bg-inherit">
        This text has class <Code>bg-inherit</Code>.
      </p>
      <p className="bg-initial">
        This text has class <Code>bg-initial</Code>.
      </p>
    </div>
  )
}

function BorderCollapse() {
  return (
    <div>
      Add the class <Code>collapse</Code> to a table to remove the spacing
      between cell borders.
    </div>
  )
}

function BorderColors() {
  return (
    <div>
      <SubSectionHeading>Usage</SubSectionHeading>
      <p>
        Add a border positions (eg <Code>ba</Code>), then define the border
        color.
      </p>
      <SubSectionHeading>Hover styles</SubSectionHeading>
      <p>
        Prefix the border colors with <Code>hov-</Code> to change color on hover
        (eg <Code>hov-bc-primary</Code>).
      </p>
      <SubSectionHeading>Examples</SubSectionHeading>
      {COLORS.map((c, key) => (
        <p className={`bt bc-${c} bw-xs pt-xxs mb-sm`} key={key}>
          <Code>bc-{c}</Code>
        </p>
      ))}
    </div>
  )
}

function BorderPositions() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba">
        This element has the class <Code>ba</Code>
      </p>
      <p className="p-sm bg-gray-lightest bl">
        This element has the class <Code>bl</Code>
      </p>
      <p className="p-sm bg-gray-lightest bt">
        This element has the class <Code>bt</Code>
      </p>
      <p className="p-sm bg-gray-lightest br">
        This element has the class <Code>br</Code>
      </p>
      <p className="p-sm bg-gray-lightest bb">
        This element has the class <Code>bb</Code>
      </p>
      <p className="p-sm bg-gray-lightest bx">
        This element has the class <Code>bx</Code>
      </p>
      <p className="p-sm bg-gray-lightest by">
        This element has the class <Code>by</Code>
      </p>
    </div>
  )
}

function BorderRadii() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba rad-none">
        This element has the class <Code>rad-none</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-xs">
        This element has the class <Code>rad-xs</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-sm">
        This element has the class <Code>rad-sm</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-md">
        This element has the class <Code>rad-md</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-lg">
        This element has the class <Code>rad-lg</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-xl">
        This element has the class <Code>rad-xl</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-pill">
        This element has the class <Code>rad-pill</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba rad-100">
        This element has the class <Code>rad-100</Code>
      </p>
    </div>
  )
}

function BorderRemoval() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba ba-none">
        This element has the class <Code>ba-none</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bl-none">
        This element has the class <Code>bl-none</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bt-none">
        This element has the class <Code>bt-none</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba br-none">
        This element has the class <Code>br-none</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bb-none">
        This element has the class <Code>bb-none</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bx-none">
        This element has the class <Code>bx-none</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba by-none">
        This element has the class <Code>by-none</Code>
      </p>
    </div>
  )
}

function BorderStyles() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba b-solid">
        This element has the class <Code>b-solid</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba b-dashed">
        This element has the class <Code>b-dashed</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba b-dotted">
        This element has the class <Code>b-dotted</Code>
      </p>
    </div>
  )
}

function BorderWidths() {
  return (
    <div>
      <p className="p-sm bg-gray-lightest ba bw-xxs">
        This element has the class <Code>bw-xxs</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-xs">
        This element has the class <Code>bw-xs</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-sm">
        This element has the class <Code>bw-sm</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-md">
        This element has the class <Code>bw-md</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-lg">
        This element has the class <Code>bw-lg</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-xl">
        This element has the class <Code>bw-xl</Code>
      </p>
      <p className="p-sm bg-gray-lightest ba bw-xxl">
        This element has the class <Code>bw-xxl</Code>
      </p>
    </div>
  )
}

function BoxShadows() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(s => (
        <div className={`p-sm my-md bs-${s}`} key={s}>
          This div has the class <Code>bs-{s}</Code>.
        </div>
      ))}
    </div>
  )
}

function Clearfix() {
  return (
    <p>
      Use the class <Code>clearfix</Code> to clear floats on parent elements.
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
          This text has the class <Code>c-{c}</Code>.
        </p>
      ))}
    </div>
  )
}

function Display() {
  return (
    <div>
      <p>
        Add the class <Code>db</Code> to give an element the display{' '}
        <Code>block</Code>
      </p>
      <p>
        Add the class <Code>di</Code> to give an element the display{' '}
        <Code>inline</Code>
      </p>
      <p>
        Add the class <Code>dib</Code> to give an element the display{' '}
        <Code>inline-block</Code>
      </p>
      <p>
        Add the class <Code>df</Code> to give an element the display{' '}
        <Code>flex</Code>
      </p>
      <p>
        Add the class <Code>dfb</Code> to give an element the display{' '}
        <Code>flex-block</Code>
      </p>
      <p>
        Add the class <Code>dt</Code> to give an element the display{' '}
        <Code>table</Code>
      </p>
      <p>
        Add the class <Code>dtc</Code> to give an element the display{' '}
        <Code>table-cell</Code>
      </p>
      <p>
        Add the class <Code>dn</Code> to give an element the display{' '}
        <Code>none</Code>
      </p>
    </div>
  )
}

function Floats() {
  return (
    <div>
      <p>
        Add the class <Code>fl</Code> to give an element the float{' '}
        <Code>left</Code>
      </p>
      <p>
        Add the class <Code>fr</Code> to give an element the float{' '}
        <Code>right</Code>
      </p>
      <p>
        Add the class <Code>fn</Code> to give an element the float{' '}
        <Code>none</Code>
      </p>
    </div>
  )
}

function FontStyle() {
  return (
    <div>
      <p className="fs-italic">
        This text has the class <Code>fs-italic</Code>
      </p>
    </div>
  )
}

function FontWeight() {
  return (
    <div>
      <p className="fw-bold">
        This text has the class <Code>fw-bold</Code>
      </p>
      <p className="fw-normal">
        This text has the class <Code>fw-normal</Code>
      </p>
      <p className="fw-lighter">
        This text has the class <Code>fw-lighter</Code>
      </p>
      <p className="fw-1">
        This text has the class <Code>fw-1</Code>
      </p>
      <p className="fw-2">
        This text has the class <Code>fw-2</Code>
      </p>
      <p className="fw-3">
        This text has the class <Code>fw-3</Code>
      </p>
      <p className="fw-4">
        This text has the class <Code>fw-4</Code>
      </p>
      <p className="fw-5">
        This text has the class <Code>fw-5</Code>
      </p>
      <p className="fw-6">
        This text has the class <Code>fw-6</Code>
      </p>
      <p className="fw-7">
        This text has the class <Code>fw-7</Code>
      </p>
      <p className="fw-8">
        This text has the class <Code>fw-8</Code>
      </p>
      <p className="fw-9">
        This text has the class <Code>fw-9</Code>
      </p>
    </div>
  )
}

function Heights() {
  return (
    <div>
      <p>
        Heights have the same values as widths, just prefix the values with{' '}
        <Code>h</Code> instead of <Code>w</Code> (<Code>w-20</Code> changes to{' '}
        <Code>h-20</Code>).
      </p>
      <p>
        Please see <a href="#widths">widths</a> for available values.
      </p>
    </div>
  )
}

function FontFamilies() {
  return (
    <div>
      <p className="ff-sans-serif">
        This text has the class <Code>ff-sans-serif</Code>.
      </p>
      <p className="ff-serif">
        This text has the class <Code>ff-serif</Code>.
      </p>
      <p className="ff-code">
        This text has the class <Code>ff-code</Code>.
      </p>
    </div>
  )
}

function LetterSpacing() {
  return (
    <div>
      <p className="ls-xxs">
        This text has the class <Code>ls-xxs</Code>
      </p>
      <p className="ls-xs">
        This text has the class <Code>ls-xs</Code>
      </p>
      <p className="ls-sm">
        This text has the class <Code>ls-sm</Code>
      </p>
      <p className="ls-md">
        This text has the class <Code>ls-md</Code>
      </p>
      <p className="ls-lg">
        This text has the class <Code>ls-lg</Code>
      </p>
      <p className="ls-xl">
        This text has the class <Code>ls-xl</Code>
      </p>
      <p className="ls-xxl">
        This text has the class <Code>ls-xxl</Code>
      </p>
    </div>
  )
}

function LineHeights() {
  return (
    <div>
      <p className="lh-xxs">
        This text has the class <Code>lh-xxs</Code>. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Proin mauris dui, lacinia ac eros quis,
        mattis accumsan ex. Duis quis justo sit amet lectus posuere luctus sed
        et risus. Morbi suscipit mi vel magna faucibus venenatis. Vivamus vitae
        nisi iaculis, malesuada tellus non, tempor risus. In nec justo
        ultricies, vulputate magna sit amet, vehicula nulla. Sed iaculis at erat
        eget feugiat. Sed sit amet finibus ante.
      </p>
      <p className="lh-xs">
        This text has the class <Code>lh-xs</Code>.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Proin mauris dui, lacinia ac eros quis,
        mattis accumsan ex. Duis quis justo sit amet lectus posuere luctus sed
        et risus. Morbi suscipit mi vel magna faucibus venenatis. Vivamus vitae
        nisi iaculis, malesuada tellus non, tempor risus. In nec justo
        ultricies, vulputate magna sit amet, vehicula nulla. Sed iaculis at erat
        eget feugiat. Sed sit amet finibus ante.
      </p>
      <p className="lh-sm">
        This text has the class <Code>lh-sm</Code>. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Proin mauris dui, lacinia ac eros quis,
        mattis accumsan ex. Duis quis justo sit amet lectus posuere luctus sed
        et risus. Morbi suscipit mi vel magna faucibus venenatis. Vivamus vitae
        nisi iaculis, malesuada tellus non, tempor risus. In nec justo
        ultricies, vulputate magna sit amet, vehicula nulla. Sed iaculis at erat
        eget feugiat. Sed sit amet finibus ante.
      </p>
      <p className="lh-md">
        This text has the class <Code>lh-md</Code>. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Proin mauris dui, lacinia ac eros quis,
        mattis accumsan ex. Duis quis justo sit amet lectus posuere luctus sed
        et risus. Morbi suscipit mi vel magna faucibus venenatis. Vivamus vitae
        nisi iaculis, malesuada tellus non, tempor risus. In nec justo
        ultricies, vulputate magna sit amet, vehicula nulla. Sed iaculis at erat
        eget feugiat. Sed sit amet finibus ante.
      </p>
      <p className="lh-lg">
        This text has the class <Code>lh-lg</Code>. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Proin mauris dui, lacinia ac eros quis,
        mattis accumsan ex. Duis quis justo sit amet lectus posuere luctus sed
        et risus. Morbi suscipit mi vel magna faucibus venenatis. Vivamus vitae
        nisi iaculis, malesuada tellus non, tempor risus. In nec justo
        ultricies, vulputate magna sit amet, vehicula nulla. Sed iaculis at erat
        eget feugiat. Sed sit amet finibus ante.
      </p>
      <p className="lh-xl">
        This text has the class <Code>lh-xl</Code>. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Proin mauris dui, lacinia ac eros quis,
        mattis accumsan ex. Duis quis justo sit amet lectus posuere luctus sed
        et risus. Morbi suscipit mi vel magna faucibus venenatis. Vivamus vitae
        nisi iaculis, malesuada tellus non, tempor risus. In nec justo
        ultricies, vulputate magna sit amet, vehicula nulla. Sed iaculis at erat
        eget feugiat. Sed sit amet finibus ante.
      </p>
      <p className="lh-xxl">
        This text has the class <Code>lh-xxl</Code>. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Proin mauris dui, lacinia ac eros quis,
        mattis accumsan ex. Duis quis justo sit amet lectus posuere luctus sed
        et risus. Morbi suscipit mi vel magna faucibus venenatis. Vivamus vitae
        nisi iaculis, malesuada tellus non, tempor risus. In nec justo
        ultricies, vulputate magna sit amet, vehicula nulla. Sed iaculis at erat
        eget feugiat. Sed sit amet finibus ante.
      </p>
    </div>
  )
}

function Opacity() {
  return (
    <div>
      <p>
        Give an element the class <Code>o-0</Code> to give it <Code>0</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-025</Code> to give it{' '}
        <Code>0.025</Code> opacity.
      </p>
      <p>
        Give an element the class <Code>o-05</Code> to give it <Code>0.05</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-10</Code> to give it <Code>0.1</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-20</Code> to give it <Code>0.2</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-30</Code> to give it <Code>0.3</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-40</Code> to give it <Code>0.4</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-50</Code> to give it <Code>0.5</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-60</Code> to give it <Code>0.6</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-70</Code> to give it <Code>0.7</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-80</Code> to give it <Code>0.8</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-90</Code> to give it <Code>0.9</Code>{' '}
        opacity.
      </p>
      <p>
        Give an element the class <Code>o-1</Code> to give it <Code>1</Code>{' '}
        opacity.
      </p>
    </div>
  )
}

function Outline() {
  return (
    <div>
      <p>
        Give an element the class <Code>outline-none</Code> to remove the
        outline styling from an element that is focused.
      </p>
    </div>
  )
}

function Overflow() {
  return (
    <div>
      <p>
        Give an element the class <Code>of-visible</Code> to give it an overflow
        of <Code>visible</Code>.
      </p>
      <p>
        Give an element the class <Code>of-hidden</Code> to give it an overflow
        of <Code>hidden</Code>.
      </p>
      <p>
        Give an element the class <Code>of-scroll</Code> to give it an overflow
        of <Code>scroll</Code>.
      </p>
      <p>
        Give an element the class <Code>of-auto</Code> to give it an overflow of{' '}
        <Code>auto</Code>.
      </p>
    </div>
  )
}

function Positioning() {
  return (
    <div>
      <p>
        Give an element the class <Code>relative</Code> to give it a position of{' '}
        <Code>relative</Code>.
      </p>
      <p>
        Give an element the class <Code>absolute</Code> to give it a position of{' '}
        <Code>absolute</Code>.
      </p>
      <p>
        Give an element the class <Code>fixed</Code> to give it a position of{' '}
        <Code>fixed</Code>.
      </p>
      <p>
        Give an element the class <Code>sticky</Code> to give it a position of{' '}
        <Code>sticky</Code>.
      </p>
    </div>
  )
}

function Spacings({ prefix, sizes }) {
  return (
    <div>
      <table className="collapse">
        <thead>
          <tr>
            <th />
            {sizes.map((s, key) => (
              <th>
                <Code>{s}</Code>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DIRECTIONS.map((d, key) => (
            <tr>
              <th className="bb bc-gray-lighter p-xs">
                {d ? (
                  <Code>{d}</Code>
                ) : (
                  <em className="txt-xs fw-normal gray">Blank</em>
                )}
              </th>
              {sizes.map((s, key) => (
                <td className="bb bc-gray-lighter p-xs">
                  <Code key={key} className="mx-xs">
                    {prefix}
                    {d}-{s}
                  </Code>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <SubSectionHeading>Directions</SubSectionHeading>
      <ul>
        <li>
          <em className="txt-xs fw-normal gray">Blank</em> - all directions
        </li>
        <li>
          <Code>t</Code> - top
        </li>
        <li>
          <Code>r</Code> - right
        </li>
        <li>
          <Code>b</Code> - bottom
        </li>
        <li>
          <Code>l</Code> - left
        </li>
        <li>
          <Code>x</Code> - left and right
        </li>
        <li>
          <Code>y</Code> - top and bottom
        </li>
      </ul>
    </div>
  )
}

function TextAlignment() {
  return (
    <div>
      <p className="left">
        This text has class <Code>left</Code>.
      </p>
      <p className="right">
        This text has class <Code>right</Code>.
      </p>
      <p className="center">
        This text has class <Code>center</Code>.
      </p>
      <p className="justify">
        This text has class <Code>justify</Code>. This text has class{' '}
        <Code>justify</Code>. This text has class <Code>justify</Code>. This
        text has class <Code>justify</Code>. This text has class{' '}
        <Code>justify</Code>. This text has class <Code>justify</Code>. This
        text has class <Code>justify</Code>. This text has class{' '}
        <Code>justify</Code>. This text has class <Code>justify</Code>. This
        text has class <Code>justify</Code>.
      </p>
    </div>
  )
}

function TextColors() {
  return (
    <div>
      <p>
        Add the prefix <code>hov-</code> to any color to add a{' '}
        <code>:hover</code> background style to the given element.
      </p>
      {COLORS.map((c, key) => (
        <p className={c} key={key}>
          This text has class <Code>{c}</Code>.
        </p>
      ))}
      <p className="white bg-black">
        This text has class <Code>white</Code>.
      </p>
      <p className="black">
        This text has class <Code>black</Code>.
      </p>
    </div>
  )
}

function TextDecoration() {
  return (
    <div>
      <p className="td-none">
        This text has the class <Code>td-none</Code>.
      </p>
      <p className="td-line">
        This text has the class <Code>td-line</Code>.
      </p>
      <p className="td-underline">
        This text has the class <Code>td-underline</Code>.
      </p>

      <SubSectionHeading>Hover state</SubSectionHeading>
      <p className="hov-td-none">
        This text has the class <Code>hov-td-none</Code>.
      </p>
      <p className="hov-td-line">
        This text has the class <Code>hov-td-line</Code>.
      </p>
      <p className="hov-td-underline">
        This text has the class <Code>hov-td-underline</Code>.
      </p>
    </div>
  )
}

function TextSizes() {
  return (
    <div>
      <p className="txt-xs">
        This text has the class <Code>txt-xs</Code>.
      </p>
      <p className="txt-sm">
        This text has the class <Code>txt-sm</Code>.
      </p>
      <p className="txt-md">
        This text has the class <Code>txt-md</Code>.
      </p>
      <p className="txt-lg">
        This text has the class <Code>txt-lg</Code>.
      </p>
      <p className="txt-xl">
        This text has the class <Code>txt-xl</Code>.
      </p>
      <p className="txt-xxl">
        This text has the class <Code>txt-xxl</Code>.
      </p>
    </div>
  )
}

function TextTransform() {
  return (
    <div>
      <p className="upper">
        This text has the class <Code className="lower">upper</Code>.
      </p>
      <p className="lower">
        This text has the class <Code className="lower">lower</Code>.
      </p>
      <p className="capital">
        This text has the class <Code className="lower">capital</Code>.
      </p>
    </div>
  )
}

function VerticalAlignment() {
  return (
    <div>
      <p>
        Give an element the class <Code>v-base</Code> to give it a
        vertical-align of <Code>baseline</Code>.
      </p>
      <p>
        Give an element the class <Code>v-bot</Code> to give it a vertical-align
        of <Code>bottom</Code>.
      </p>
      <p>
        Give an element the class <Code>v-mid</Code> to give it a vertical-align
        of <Code>mid</Code>.
      </p>
      <p>
        Give an element the class <Code>v-top</Code> to give it a vertical-align
        of <Code>top</Code>.
      </p>
      <p>
        Give an element the class <Code>v-sub</Code> to give it a vertical-align
        of <Code>sub</Code>.
      </p>
      <p>
        Give an element the class <Code>v-super</Code> to give it a
        vertical-align of <Code>super</Code>.
      </p>
      <p>
        Give an element the class <Code>v-text-top</Code> to give it a
        vertical-align of <Code>text-top</Code>.
      </p>
      <p>
        Give an element the class <Code>v-text-bot</Code> to give it a
        vertical-align of <Code>text-bottom</Code>.
      </p>
    </div>
  )
}

function Visibility() {
  return (
    <div>
      <p>
        Give an element the class <Code>visible</Code> to give it a visibility
        of <Code>visible</Code>.
      </p>
      <p>
        Give an element the class <Code>invisible</Code> to give it a visibility
        of <Code>hidden</Code>.
      </p>
    </div>
  )
}

function Whitespace() {
  return (
    <div>
      <p>
        Give an element the class <Code>ws-pre</Code> to give it a white-space
        of <Code>pre</Code>.
      </p>
      <p>
        Give an element the class <Code>ws-nowrap</Code> to give it a
        white-space of <Code>nowrap</Code>.
      </p>
      <p>
        Give an element the class <Code>ws-normal</Code> to give it a
        white-space of <Code>ws-normal</Code>.
      </p>
    </div>
  )
}

function Widths() {
  return (
    <div>
      <p>
        You can prefix any width class with <Code>m</Code> to change it to a{' '}
        <Code>max-width</Code> class (eg <Code>mw-50</Code> sets{' '}
        <Code>max-width: 50%;</Code>)
      </p>
      {WIDTHS.map((w, key) => (
        <div className="my-sm" key={key}>
          <p className="mb-xs">
            <Code>w-{w}</Code>
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
        Give an element the class <Code>z-0</Code> to give it a z-index of{' '}
        <Code>0</Code>.
      </p>
      <p>
        Give an element the class <Code>z-100</Code> to give it a z-index of{' '}
        <Code>100</Code>.
      </p>
      <p>
        Give an element the class <Code>z-200</Code> to give it a z-index of{' '}
        <Code>200</Code>.
      </p>
      <p>
        Give an element the class <Code>z-300</Code> to give it a z-index of{' '}
        <Code>300</Code>.
      </p>
      <p>
        Give an element the class <Code>z-400</Code> to give it a z-index of{' '}
        <Code>400</Code>.
      </p>
      <p>
        Give an element the class <Code>z-500</Code> to give it a z-index of{' '}
        <Code>500</Code>.
      </p>
      <p>
        Give an element the class <Code>z-600</Code> to give it a z-index of{' '}
        <Code>600</Code>.
      </p>
      <p>
        Give an element the class <Code>z-700</Code> to give it a z-index of{' '}
        <Code>700</Code>.
      </p>
      <p>
        Give an element the class <Code>z-800</Code> to give it a z-index of{' '}
        <Code>800</Code>.
      </p>
      <p>
        Give an element the class <Code>z-900</Code> to give it a z-index of{' '}
        <Code>900</Code>.
      </p>
      <p>
        Give an element the class <Code>z-1000</Code> to give it a z-index of{' '}
        <Code>1000</Code>.
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
    Component: FontFamilies,
    title: 'Font families',
  },
  {
    Component: FontStyle,
    title: 'Font style',
  },
  {
    Component: FontWeight,
    title: 'Font weight',
  },
  {
    Component: Heights,
    title: 'Heights',
  },
  {
    Component: LetterSpacing,
    title: 'Letter spacing',
  },
  {
    Component: LineHeights,
    title: 'Line heights',
  },
  {
    Component: Opacity,
    title: 'Opacity',
  },
  {
    Component: Outline,
    title: 'Outline',
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
    Component: () => <Spacings prefix="m" sizes={MARGINS} />,
    title: 'Margins',
  },
  {
    Component: () => <Spacings prefix="p" sizes={PADDINGS} />,
    title: 'Paddings',
  },
  {
    Component: TextAlignment,
    title: 'Text alignment',
  },
  {
    Component: TextColors,
    title: 'Text colors',
  },
  {
    Component: TextDecoration,
    title: 'Text decoration',
  },
  {
    Component: TextSizes,
    title: 'Text sizes',
  },
  {
    Component: TextTransform,
    title: 'Text transform',
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
      className="mx-auto my-md ff-sans-serif p-md"
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
