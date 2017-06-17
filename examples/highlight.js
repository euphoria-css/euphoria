import docco from 'react-syntax-highlighter/dist/styles/docco'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light'
import React from 'React'

registerLanguage('javascript', js)

export default function Highlight(props) {
  return (
    <SyntaxHighlighter language={props.lang} style={docco}>
      {props.children}
    </SyntaxHighlighter>
  )
}
