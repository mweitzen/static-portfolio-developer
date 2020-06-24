import React from 'react'
import styled from 'styled-components'

import SocialIcons from 'components/SocialIcons'
import ScrollToTop from 'components/ScrollToTop'

const FooterBox = styled.div`
  width: 100%;
  background: ${props => props.dark ? "#131313" : "#ffffff"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`
const Copyright = styled.p`
  font-size: 12px;
  color: ${props => props.dark ? "#ffffff" : "#333333"};
  padding-bottom: 1rem;
`

const Footer = (props) => {
  return (
    <FooterBox {...props}>
      <ScrollToTop />
      <a href="tel:330-612-4661">330.612.4661</a>
      <SocialIcons {...props} />
      <Copyright {...props}>Copyright {new Date().getFullYear()}. mwProfessional</Copyright>
    </FooterBox>
  )
}

export default Footer
