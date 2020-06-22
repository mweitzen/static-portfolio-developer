import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

import NodeJsLogo from "../assets/img/grayscale-nodejs-240.png"
import BoostrapLogo from "../assets/img/grayscale-bootstrap-240.png"
import FirebaseLogo from "../assets/img/grayscale-firebase-240.png"
import GitLogo from "../assets/img/grayscale-git-240.png"
import HerokuLogo from "../assets/img/grayscale-heroku-240.png"
import JavaLogo from "../assets/img/grayscale-java-240.png"
import JavascriptLogo from "../assets/img/grayscale-js-240.png"
import MaterialUiLogo from "../assets/img/grayscale-materialui-240.png"
import MongoDbLogo from "../assets/img/grayscale-mongodb-240.png"
import MySqlLogo from "../assets/img/grayscale-mysql-240.png"
import PythonLogo from "../assets/img/grayscale-python-240.png"
import ReactLogo from "../assets/img/grayscale-react-240.png"
import ReduxLogo from "../assets/img/grayscale-redux-240.png"
import StyledComponentsLogo from "../assets/img/grayscale-styled-components-240.png"

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
`

const SkillLogoContainer = styled.div`
  flex: 1;
`

const SkillInfo = styled.div`
  flex: 2;
  text-align: left;
  color: #a9a9a9;
  font-size : 36px;
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
              <img src={JavascriptLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Javascript</p>
            </SkillInfo>
          </SkillBlock>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={PythonLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Python</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={ReactLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>React</p>
            </SkillInfo>
          </SkillBlock>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={ReduxLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Redux</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={MongoDbLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>MongoDB</p>
            </SkillInfo>
          </SkillBlock>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={MySqlLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>MySQL</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={NodeJsLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Node</p>
            </SkillInfo>
          </SkillBlock>
          <SkillBlock>
            <SkillLogoContainer>
              <img src={MaterialUiLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Material UI</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
      </SkillsSection>
    </Section>
  )
}

export default Skills
