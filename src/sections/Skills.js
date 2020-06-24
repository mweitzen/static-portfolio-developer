import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from 'components/Section'

import { skills } from 'app/content'

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
    width: 320px;
  }
`

const SkillBlock = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  &:last-child {
    flex-direction: row-reverse;
    div {
      text-align: right;
    }
  }
  @media (max-width: ${ breakpoints.sm}) {
    &:last-child {
      flex-direction: row;
      div {
        text-align: left;
      }
    }
  }
`

const SkillLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const SkillInfo = styled.div`
  flex: 2;
  text-align: left;
  color: #a9a9a9;
  font-size : 36px;
  @media (max-width: ${ breakpoints.sm}) {
    font-size: 32px;
  }
`

const Skills = () => {
  const regRows = skills.length / 2
  const extraRow = skills.length % 2
  const rows = regRows + extraRow

  const skillsInRows = []

  skills.forEach((skill, i) => {
    if ( i % 2 === 0 ) {
      skillsInRows.push([ skill, skills[i+1] ])
    }
  })

  return (
    <Section
      name="skills"
      subheader="A few technologies I am comfortable using."
    >
      <SkillsSection>
        {
          skillsInRows.map((row, i) => {
            const row1 = row[0];
            const row2 = row[1] && row[1]

            return (
              <SkillsRow key={i}>
                <SkillBlock>
                  <SkillLogoContainer>
                    <img src={row1.logo} height={80} width={80} />
                  </SkillLogoContainer>
                  <SkillInfo>
                    <p>{row1.name}</p>
                  </SkillInfo>
                </SkillBlock>

                {
                  !!row2 && (
                    <SkillBlock>
                      <SkillLogoContainer>
                        <img src={row2.logo} height={80} width={80} />
                      </SkillLogoContainer>
                      <SkillInfo>
                        <p>{row2.name}</p>
                      </SkillInfo>
                    </SkillBlock>
                  )
                }
              </SkillsRow>
            )
          })
        }
      </SkillsSection>
    </Section>
  )
}

export default Skills
