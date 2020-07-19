import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import { Link } from 'react-scroll'

const NavbarBase = styled.nav`
  height: 160px;
  width: 100%;
  background: #fff;
  color: #333;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  @media (max-width: ${breakpoints.xxs}) {
    height: 140px;
  }
`

const NavbarName = styled.div`
  width: 100%;
  text-align: center;
  & h1 {
    text-transform: uppercase;
  }
  @media (max-width: ${breakpoints.xxs}) {
    & h1 {
      font-size: 20px;
    }
  }
`

const NavbarLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    padding: 1rem
  }
  @media (max-width: ${breakpoints.sm}) {
    & a {
      font-size: 14px;
      padding: 0.5rem;
    }
  }
  @media (max-width: ${breakpoints.xxs}) {
    & a {
      font-size: 13px;
      padding: 0.5rem;
    }
  }
`

const NavbarDivider = styled.hr`
  border-top: 1px solid #333;
  width: 720px;
  @media (max-width: 720px) {
    width: 75%;
  }
`

const ComponentLink = (props) => {
  const [ isXXS, setIsXSS ] = useState(false)
  const [ isXS, setIsXS ] = useState(false)
  const { children, ...rest } = props

  useEffect(() => {
    if(Number(window.innerWidth) <= Number(breakpoints.xxs.replace('px', ''))) {
      setIsXSS(true)
    } else if(Number(window.innerWidth) <= Number(breakpoints.xs.replace('px', ''))) {
      setIsXS(true)
    }
  }, [])

  const isHome = props.to === 'home'
  const isAbout = props.to === 'about'

  const getOffset = () => {
    if (isHome) return -212
    if ((isXS || isXXS) && isAbout) return 142
    if (!isXXS) return -160
    if (isXXS) return -140
  }

  const offset = getOffset()

  return (
    <Link
      spy={true}
      smooth={true}
      duration={300}
      offset={offset}
      {...rest}
    >
      {children}
    </Link>
  )
}

const Navbar = () => {
  return (
    <NavbarBase>
      <NavbarName>
        <h1>Michael Weitzenhoffer</h1>
      </NavbarName>
      <NavbarDivider />
      <NavbarLinks>
        <ComponentLink activeClass="active" to="home">
          Home
        </ComponentLink>
        <ComponentLink to="about">
          About
        </ComponentLink>
        <ComponentLink to="skills">
          Skills
        </ComponentLink>
        <ComponentLink to="portfolio">
          Portfolio
        </ComponentLink>
        <ComponentLink to="contact">
          Contact
        </ComponentLink>
      </NavbarLinks>
    </NavbarBase>
  )
}

export default Navbar
