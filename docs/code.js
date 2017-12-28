import React from 'react'

function Code({ children }) {
  return (
    <code className="bg-gray-lightest hov-bg-yellow-lighter hov-cyan-darker p-xs dib br-xs">
      {children}
    </code>
  )
}

export default Code
