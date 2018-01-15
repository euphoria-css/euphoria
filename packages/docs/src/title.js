import React from 'react'

function Title({ children }) {
  return (
    <h2 className="txt-xl mb-lg pb-sm bb bc-gray-lighter sans-serif fw-1 ls-lg upper">
      {children}
    </h2>
  )
}

export default Title
