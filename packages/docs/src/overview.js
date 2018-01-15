import Code from './code'
import Highlight from './highlight'
import React from 'react'
import SubHeading from './subheading'
import Title from './title'
import { Link } from 'react-router-dom'

function P({ children }) {
  return <p className="lh-md">{children}</p>
}

function A({ children, ...props }) {
  return (
    <a {...props} target="_blank">
      {children}
    </a>
  )
}

function Li({ children }) {
  return <li className="my-xs lh-md">{children}</li>
}

function Overview() {
  return (
    <div>
      <Title>Overview</Title>

      <P>
        At its core, Euphoria is a set of minimal CSS styles that you can use to
        assemble user interfaces for the web. However, Euphoria is much more
        than that.
      </P>
      <P>
        Euphoria leverages the power of JavaScript to generate a powerful set of
        CSS utility classes that can be used to assemble frontend UIs. This
        toolset is similar to tools like{' '}
        <A href="https://getbootstrap.com">Bootstrap</A> or{' '}
        <A href="http://tachyons.io">Tachyons</A> in that they give you the
        building blocks you need to create a responsive, feature rich UI without
        having to write a line of CSS.
      </P>
      <P>
        Euphoria is built using JavaScript which gives you the power to do
        nearly anything you want with the generated styles. By default, Euphoria
        outputs a sane default set of styles that work for quickly mocking up
        UIs. However, since most websites and applications need certain design
        elements that Euphoria doesn't ship with, we've made it easy to add and
        extend the set of styles that Euphoria outputs.
      </P>
      <P>
        The most common properties of Euphoria that you will most likely change
        are our bundled selection of colors, fonts and font sizes. Most other
        styles (<Code>.float-left</Code>, <Code>.display-block</Code>, etc.) are
        generic enough that they don't need to be changed. We make it easy to
        override the defaults for all styles.
      </P>
      <P>
        You can override any of these settings easily either using our
        JavaScript API or command line build tool,{' '}
        <A href="https://github.com/euphoria-css/euphoria-cli">euphoria-cli</A>.
        There is no need to write any CSS, use any pre or post-processing tools
        (LESS, Sass, PostCSS) in order to do this. See the{' '}
        <Link to="/usage">Usage</Link> section to learn more how to customize
        Euphoria.
      </P>
      <P>
        In addition, for projects that leverage CSS-in-JS frameworks like{' '}
        <A href="https://github.com/threepointone/glamor">glamor</A>, all the
        outputted styles are available to you and you can share common settings
        for font sizes, colors, etc between Euphoria and your CSS-in-JS tool of
        choice. The recommended approach would be to use{' '}
        <A href="https://github.com/euphoria-css/euphoria-cli">euphoria-cli</A>{' '}
        in your build process and have your <Code>euphoria.config.js</Code> file
        import and global CSS for things like colors, fonts, etc that you need.
      </P>

      <SubHeading>Features</SubHeading>
      <ul>
        <Li className="my-xs">
          <strong>Atomic Styles</strong>: Styles in Euphoria are designed to be
          assembled together to create the styles you desire. Each class is as
          simple as possible.
        </Li>
        <Li>
          <strong>Isolation</strong>: By building with Euphoria you remove the
          magic from your HTML. No longer do you have to wade through hundreds
          or thousands of lines of CSS/LESS/Sass/etc. looking for the various
          places where you CSS styling comes from and then looking to where
          those classes are defined so you don't break anything. Instead, every
          HTML class becomes clear and concise as to what styles are applied to
          it. Changing that one HTML class is isolated an will effect only the
          code being modified meaning you don't need to waste hours making sure
          you didn't break anything.
        </Li>
        <Li>
          <strong>A "Palette" of Styles</strong>: Euphoria gives you a wide
          range of common styling utilities to "paint" your UI. You have near
          infinite flexibility tweaking styles, having one-off but still
          commonly defined styles and more programatic styling.
        </Li>
        <Li>
          <strong>Component Friendly</strong>: Euphoria works great with tools
          like React, Vue.js or Angular where you create common components to
          use throughout your application. Your components can make it so you
          don't need to duplicate classes all over the place, which makes
          working with Euphoria even easier.
        </Li>
        <Li>
          <strong>Customizable rules</strong>: We give you the freedom to
          customize nearly everything in Euphoria including colors, fonts,
          spacing sizes and a lot more. You can even add custom rules that
          extend built-in Euphoria rules.
        </Li>
        {/* <li>
        <strong>Short and Verbose Styles</strong>: We provide, out of the box,
        two sets of styles for different preferences. One style is what we call
        "short" which provide abbreviated class names so you don't need to write
        long style names (e.g. <Code>.fl</Code> instead of <Code>.float-left</Code>). For those that
        like more explicit and verbose styles, we provide a "verbose" version of
        Euphoria that has all the class names as clear as possible (e.g.
        <Code>.of-visible</Code>, <Code>.text-center</Code>, or <Code>.background-color-primary</Code>).
        Choose whatever style you want and if you don't want to output one of
        the styles, just configure Euphoria to omit the one you don't want (see
        <Link to='/options'>Options</Link> below)
      </li> */}
        <Li>
          <strong>No pre/post-processors needed</strong>: Doesn't rely on CSS
          pre/post-processors like LESS, Sass or PostCSS which frees you up to
          use the tools you like and none you don't.
        </Li>
        <Li>
          <strong>Simplicity</strong>: Styles are short, simple and isolated.
          Add or remove styles and things behave as you expect. There is no
          magic in this library.
        </Li>
        <Li>
          <strong>Consistency</strong>: We attempt to keep a common format for
          styles that are predictable and consistent. In certain situations for
          the "short" styles, we made exceptions to improve the usability of the
          library.
        </Li>
      </ul>
    </div>
  )
}

export default Overview
