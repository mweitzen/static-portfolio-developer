import React from 'react'
import { Element } from 'react-scroll'

const Section = ({ children, name, subheader }) => {
  return (
    <Element className="element" name={name}>
      <div>
        <h2>{name.charAt(0).toUpperCase() + name.slice(1,)}</h2>
        {
          subheader && (
            <h4>{subheader}</h4>
          )
        }
        { children }
      </div>
    </Element>
  )
}

export default Section
