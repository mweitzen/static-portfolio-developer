import React from 'react'
import styled from 'styled-components'

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
`

const NavbarName = styled.div`
  width: 100%;
  text-align: center;
  & h1 {
    text-transform: uppercase;
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
`

const NavbarDivider = styled.hr`
  border-top: 1px solid #333;
  width: 720px;
  @media (max-width: 720px) {
    width: 75%;
  }
`

const ComponentLink = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      spy={true}
      smooth={true}
      duration={300}
      offset={-180}
      {...rest}
    >
      {children}
    </Link>
  )
}
const Navbar = () => {
  function handleSetActive(to) {
    console.log(to);
  }
  return (
    <NavbarBase>
      <NavbarName>
        <h1>Michael Weitzenhoffer</h1>
      </NavbarName>
      <NavbarDivider />
      <NavbarLinks>
        <ComponentLink activeClass="active" to="home" onSetActive={handleSetActive}>
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
