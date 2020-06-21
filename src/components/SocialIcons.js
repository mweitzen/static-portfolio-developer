import React from 'react'
import styled from 'styled-components'

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const SocialBox = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: .5rem;
`

const SocialLink = styled.a`
  color: #333333;
  font-size: 22px;
`

const SocialIcons = (props) => {
  return (
    <SocialBox>
      <SocialLink target="_blank" href="https://www.facebook.com/mweitzenhoffer/"><FontAwesomeIcon icon={["fab","facebook-f"]} inverse={props.dark ? true : false} /></SocialLink>
      <SocialLink target="_blank" href="https://www.linkedin.com/in/michael-weitzenhoffer/"><FontAwesomeIcon icon={["fab","linkedin"]} inverse={props.dark ? true : false} /></SocialLink>
      <SocialLink target="_blank" href="https://www.github.com/mweitzen"><FontAwesomeIcon icon={["fab","github"]} inverse={props.dark ? true : false} /></SocialLink>
    </SocialBox>
  )
}

export default SocialIcons
