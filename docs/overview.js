import Code from './code'
import Highlight from './highlight'
import React from 'react'
import Title from './title'

function Overview() {
  return (
    <div>
      <Title>Overview</Title>

      <p>
        At its core, Euphoria is a set of minimal CSS styles that you can use to
        assemble user interfaces for the web. However, Euphoria is much more
        than that.
      </p>

      <p>
        Euphoria leverages the power of JavaScript to generate a powerful set of
        CSS utility classes that can be used to assemble frontend UIs. This
        toolset is similar to tools like [Bootstrap][bootstrap] or
        [Tachyons][tachyons] in that they give you the building blocks you need
        to create a responsive, feature rich UI without having to write a line
        of CSS.
      </p>

      <p>
        Euphoria is built using JavaScript which gives you the power to do
        nearly anything you want with the generated styles. By default, Euphoria
        outputs a sane default set of styles that work for quickly mocking up
        UIs. However, since most websites and applications need certain design
        elements that Euphoria doesn't ship with, we've made it easy to add and
        extend the set of styles that Euphoria outputs.
      </p>

      <p>
        The most common properties of Euphoria that you will most likely change
        are our bundled selection of colors, fonts and font sizes. Most other
        styles (<Code>.float-left</Code>, <Code>.display-block</Code>, etc.) are
        generic enough that they don't need to be changed. We make it easy to
        override the defaults for all styles.
      </p>
    </div>
  )
}

export default Overview
