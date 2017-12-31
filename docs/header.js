import React from 'react'

function Header() {
  return (
    <nav className="cf bg-primary p-md ai-center bl bw-lg bc-cyan-dark">
      <h1 className="fl-md-up txt-lg ls-lg m-none uppercase white fw-1">
        Euphoria
      </h1>
      <div className="fr-md-up db-xs-only py-xxs mt-sm mt-none-md-up">
        <a
          href="https://github.com/euphoria-css/euphoria"
          className="cyan-lighter hov-white td-none"
          target="_blank"
        >
          Euphoria on Github
        </a>
      </div>
    </nav>
  )
}

export default Header
