import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

const SkillsSection = styled.div`
  display: flex;
  @media (max-width: ${ breakpoints.sm}) {
    flex-direction: column;
  }
`

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Skills = () => {
  return (
    <Section
      name="skills"
      subheader="A few technologies I am comfortable using."
    >
      <SkillsSection>
        <SkillsColumn>
          <p>Javascript</p>
          <p>Python</p>
          <p>React</p>
          <p>Redux</p>
        </SkillsColumn>
        <SkillsColumn>
          <p>Node</p>
          <p>MongoDB</p>
          <p>MySQL</p>
        </SkillsColumn>
      </SkillsSection>
    </Section>
  )
}

export default Skills
