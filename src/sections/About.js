import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'
import Picture from '../assets/img/me.jpg'

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
  overflow: hidden;
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
  & h2 {
    margin-bottom: 0;
  }
  & p:not(:last-child) {
    margin-bottom: 8px;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    margin: 0 32px;
  }
`

const About = () => {
  return (
    <Section name="about">
      <AboutSection>
        <BioImageContainer>
          <img alt="michael weitzenhoffer" src={Picture} width={"100%"}/>
        </BioImageContainer>
        <BioContainer>
          <div>
            <h2>Michael Weitzenhoffer</h2>
            <p><em>Web / Systems Automation Developer</em></p>
            <p>Self taught web developer with 3+ years experience developing and building small web apps and larger scale applications. Strong programming and scripting skills with an attention to operational needs.</p>
          </div>
        </BioContainer>
      </AboutSection>
    </Section>
  )
}

export default About
