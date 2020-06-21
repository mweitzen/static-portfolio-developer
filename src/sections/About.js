import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

const AboutSection = styled.div`
  display: flex;
  margin 72px 0;
  @media (max-width: ${ breakpoints.sm}) {
    flex-direction: column;
  }
`

const BioImageContainer = styled.div`
  display: flex;
  height: 240px;
  border: 1px solid #333;
  border-radius: 50%;
  background: #333;
  color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (max-width: ${ breakpoints.sm}) {
    margin: 0 auto;
    width: 240px;
    border-radius: 0;
  }
`

const BioImage = styled.img`

`

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 2;
`

const About = () => {
  return (
    <Section name="about">
      <AboutSection>
        <BioImageContainer>
          <p>Pic</p>
        </BioImageContainer>
        <BioContainer>
          <p>Michael Weitzenhoffer</p>
          <p>Web / Systems Automation Developer</p>
          <p>Self Taught. xyz...</p>
        </BioContainer>
      </AboutSection>
    </Section>
  )
}

export default About
