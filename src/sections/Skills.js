import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SkillsRow = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: ${ breakpoints.sm}) {
    flex-direction: column;
  }
`

const SkillBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const SkillLogo = styled.div`

`

const Skills = () => {
  return (
    <Section
      name="skills"
      subheader="A few technologies I am comfortable using."
    >
      <SkillsSection>
        <SkillsRow>
          <SkillBlock> <p>Javascript</p> </SkillBlock>
          <SkillBlock> <p>Python</p> </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          <SkillBlock> <p>React</p> </SkillBlock>
          <SkillBlock> <p>Redux</p> </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          <SkillBlock> <p>Node</p> </SkillBlock>
          <SkillBlock> <p>MongoDB</p> </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          <SkillBlock> <p>MySQL</p> </SkillBlock>
          <SkillBlock> <p>etc...</p> </SkillBlock>
        </SkillsRow>
      </SkillsSection>
    </Section>
  )
}

export default Skills
