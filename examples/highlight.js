import docco from 'react-syntax-highlighter/dist/styles/docco'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import css from 'react-syntax-highlighter/dist/languages/css'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light'
import React from 'react'

registerLanguage('javascript', js)
registerLanguage('css', css)

export default function Highlight(props) {
  return (
    <SyntaxHighlighter
      className="p-md border-lg border-primary bl bw-md bc-info"
      language={props.lang}
      style={docco}
    >
      {props.children}
    </SyntaxHighlighter>
  )
}
