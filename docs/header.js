import React from 'react'

function Header() {
  return (
    <nav className="cf bg-primary px-md py-md ai-center bl bw-lg bc-cyan-dark">
      <h1 className="fl txt-lg ls-lg m-none uppercase white fw-1">Euphoria</h1>
      <div className="fr db-xs-only fn-xs-only py-xxs">
        <a
          href="https://github.com/euphoria-css/euphoria"
          className="cyan-lighter hov-white no-decoration"
          target="_blank"
        >
          Euphoria on Github
        </a>
      </div>
    </nav>
  )
}

export default Header
