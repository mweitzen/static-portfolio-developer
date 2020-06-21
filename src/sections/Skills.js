import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

import NodeJsLogo from "../assets/img/grayscale-nodejs.png"
import BoostrapLogo from "../assets/img/grayscale-bootstrap.png"
import FirebaseLogo from "../assets/img/grayscale-firebase.png"
import GitLogo from "../assets/img/grayscale-git.png"
import HerokuLogo from "../assets/img/grayscale-heroku.png"
import JavaLogo from "../assets/img/grayscale-java.png"
import JavascriptLogo from "../assets/img/grayscale-js.png"
import MaterialUiLogo from "../assets/img/grayscale-materialui.png"
import MongoDbLogo from "../assets/img/grayscale-mongodb.png"
import MySqlLogo from "../assets/img/grayscale-mysql.png"
import PythonLogo from "../assets/img/grayscale-python.png"
import ReactLogo from "../assets/img/grayscale-react.png"
import ReduxLogo from "../assets/img/grayscale-redux.png"
import StyledComponentsLogo from "../assets/img/grayscale-styled-components.png"

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
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const SkillLogoContainer = styled.div`
  display: flex;
  flex: 1;
`

const SkillInfo = styled.div`
  display: flex;
  flex: 3;
`

const Skills = () => {
  return (
    <Section
      name="skills"
      subheader="A few technologies I am comfortable using."
    >
      <SkillsSection>
        <SkillsRow>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={JavascriptLogo}/>
            </SkillLogoContainer>
            <SkillInfo>
              <p>Javascript</p>
            </SkillInfo>
          </SkillBlock>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={PythonLogo}/>
            </SkillLogoContainer>
            <SkillInfo>
              <p>Python</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={ReactLogo}/>
            </SkillLogoContainer>
            <SkillInfo>
              <p>React</p>
            </SkillInfo>
          </SkillBlock>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={ReduxLogo}/>
            </SkillLogoContainer>
            <SkillInfo>
              <p>Redux</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={MongoDbLogo}/>
            </SkillLogoContainer>
            <SkillInfo>
              <p>MongoDB</p>
            </SkillInfo>
          </SkillBlock>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={MySqlLogo}/>
            </SkillLogoContainer>
            <SkillInfo>
              <p>MySQL</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={NodeJsLogo}/>
            </SkillLogoContainer>
            <SkillInfo>
              <p>Node</p>
            </SkillInfo>
          </SkillBlock>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={MaterialUiLogo}/>
            </SkillLogoContainer>
            <SkillInfo>
              <p>etc...</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
      </SkillsSection>
    </Section>
  )
}

export default Skills
