import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

const SectionBase = styled.div`
  margin: ${({name}) => name !== 'home' ? '72px 0' : '36px 0'};
`

const Section = ({ children, name, subheader }) => {
  return (
    <Element className="element" name={name}>
      <SectionBase name={name}>
        {
          (name !== 'home' && name !== 'about')&& (
            <h2>{name.charAt(0).toUpperCase() + name.slice(1,)}</h2>
          )
        }
        {
          subheader && (
            <h4>{subheader}</h4>
          )
        }
        { children }
      </SectionBase>
    </Element>
  )
}

export default Section