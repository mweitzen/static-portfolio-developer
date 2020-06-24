import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'

import Resume from '../assets/pdf/Michael_Weitzenhoffer_Resume.pdf'

const DownloadResumeButton = styled.button`
  background: #fff;
  height: 48px;
  width: 240px;
  border: 1px solid black;
  font-size: 16px;
  font-family: 'Raleway';
  &:hover {
    cursor: pointer;
    background: #333;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`

const Home = () => {
  return (
    <Section name="home" >
      <a href={Resume} download>
        <DownloadResumeButton>
          Download Resume
        </DownloadResumeButton>
      </a>
    </Section>
  )
}

export default Home
