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
  height: 280px;
  border: 1px solid #333;
  border-radius: 50%;
  background: #333;
  color: white;
  justify-content: center;
  align-items: center;
  flex: 2;
  @media (max-width: ${ breakpoints.sm}) {
    margin: 0 auto;
    width: 280px;
    border-radius: 0;
  }
`

const BioImage = styled.img`

`

const BioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

const About = () => {
  return (
    <Section name="about">
      <AboutSection>
        <BioImageContainer>
          <p>Pic</p>
        </BioImageContainer>
        <BioContainer>
          <div>
            <h3>Michael Weitzenhoffer</h3>
            <p><em>Web / Systems Automation Developer</em></p>
            <p>Self Taught. etc...</p>
          </div>
        </BioContainer>
      </AboutSection>
    </Section>
  )
}

export default About
