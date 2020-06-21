import React from 'react'
import { Element } from 'react-scroll'

const Section = ({ children, name }) => {
  return (
    <Element className="element" name={name}>
      <div>
        <h2>{name.charAt(0).toUpperCase() + name.slice(1,)}</h2>
        { children }
      </div>
    </Element>
  )
}

export default Section
