import React from 'react'

const SectionTitle = ({ children }) => {
  return (
    <div className="section-title">
      <h1 className="title color-red">{children}</h1>
    </div>
  )
}

export default SectionTitle
