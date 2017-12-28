import React from 'react'

function Header() {
  return (
    <nav className="bg-primary px-md py-sm df ai-center">
      <h1 className="dib txt-lg ls-lg m-none uppercase white fw-1">Euphoria</h1>
      <a
        href="https://github.com/euphoria-css/euphoria"
        className="cyan-lighter hov-white no-decoration ml-auto"
      >
        Euphoria on Github
      </a>
    </nav>
  )
}

export default Header
