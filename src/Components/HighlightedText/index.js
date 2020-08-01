import React from 'react'

const HighlightedText = ({ containerClassName = '', effect = 'reveal-left-in', text }) => {
  return (
    <span className={`highlight ${containerClassName}`}>
        <i parallax={effect}>
          {text}
        </i>
        {text}
    </span>
  )
}

export default HighlightedText
