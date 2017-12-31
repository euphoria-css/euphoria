import Hr from './hr'
import React from 'react'
import ruleSetAnchor from './ruleset-anchor'
import { NavLink } from 'react-router-dom'

function TOCLink({ children, href }) {
  return (
    <NavLink
      to={href}
      className="db px-sm py-xs td-none primary hov-white hov-bg-primary bl bw-lg bc-transparent hov-bc-cyan-dark txt-sm"
      activeClassName="white bg-primary bc-cyan-dark"
    >
      {children}
    </NavLink>
  )
}

function Heading({ children }) {
  return (
    <h3 className="m-none mb-sm px-sm mt-sm gray-light uppercase ls-lg txt-sm">
      {children}
    </h3>
  )
}

function TOC({ rules }) {
  return (
    <nav>
      <div className="cf">
        <Heading>Getting Started</Heading>
        <TOCLink href="/">Usage</TOCLink>
        <TOCLink href="/customize">Customize</TOCLink>
        <TOCLink href="/all">All Rules</TOCLink>
        <Hr />
        <Heading>Rules</Heading>
        {rules.map((ruleset, key) => (
          <TOCLink href={`/${ruleSetAnchor(ruleset.name)}`} key={key}>
            {ruleset.name}
          </TOCLink>
        ))}
      </div>
    </nav>
  )
}

export default TOC
