import React from 'react'

function Code({ children, className = '', ...props }) {
  return (
    <code
      className={`code purple-dark bg-purple-lightest px-xs py-xxs rad-xs ${className}`}
      {...props}
    >
      {children}
    </code>
  )
}

export default Code
