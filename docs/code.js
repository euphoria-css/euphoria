import React from 'react'

function Code({ children }) {
  return (
    <code className="bg-gray-lightest hov-bg-yellow-lighter hov-cyan-darker p-xs dib rad-xs">
      {children}
    </code>
  )
}

export default Code
