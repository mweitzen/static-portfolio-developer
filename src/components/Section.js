import React from 'react'

const Section = (props) => {
  const { children, ...rest } = props
  return (
    <div>
      <h2>Section Header</h2>
      { children }
    </div>
  )
}

export default Section
