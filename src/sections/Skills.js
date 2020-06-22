import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

import NodeJsLogo from "../assets/img/grayscale-nodejs-240.png"
import BootstrapLogo from "../assets/img/grayscale-bootstrap-240.png"
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
import GoogleAppsScriptLogo from '../assets/img/grayscale-google-apps-240.png'
import SocketIoLogo from '../assets/img/grayscale-socket-io-240.png'

const skills = [
  {
    name: "Javascript",
    logo: JavascriptLogo
  },
  {
    name: "Python",
    logo: PythonLogo
  },
  {
    name: "React",
    logo: ReactLogo
  },
  {
    name: "Redux",
    logo: ReduxLogo
  },
  {
    name: "NodeJS",
    logo: NodeJsLogo
  },
  {
    name: "MongoDB",
    logo: MongoDbLogo
  },
  {
    name: "Bootstrap",
    logo: BootstrapLogo
  },
  {
    name: "Material UI",
    logo: MaterialUiLogo
  },
  {
    name: "Socket.io",
    logo: SocketIoLogo
  },
  {
    name: "Google Apps Script",
    logo: GoogleAppsScriptLogo
  },
  {
    name: "Firebase",
    logo: FirebaseLogo
  },
  {
    name: "Heroku",
    logo: HerokuLogo
  },
  {
    name: "Git/GitHub",
    logo: GitLogo
  },
]

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
`

const Skills = () => {
  const regRows = skills.length / 2
  const extraRow = skills.length % 2
  const rows = regRows + extraRow

  const skillsInRows = skills.filter((skill, i) => {
    if ( i % 2 !== 0 ) return [skill, skills[i + 1]]
  })

  // console.log(skillsInRows)

  return (
    <Section
      name="skills"
      subheader="A few technologies I am comfortable using."
    >
      <SkillsSection>
        <SkillsRow>
          {/* Javascript */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={JavascriptLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Javascript</p>
            </SkillInfo>
          </SkillBlock>
            {/* Python */}
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
          {/* React */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={ReactLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>React</p>
            </SkillInfo>
          </SkillBlock>
            {/* Redux */}
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
          {/* MongoDB */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={MongoDbLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>MongoDB</p>
            </SkillInfo>
          </SkillBlock>
            {/* MySQL */}
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
          {/* NodeJS */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={NodeJsLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>NodeJS</p>
            </SkillInfo>
          </SkillBlock>
            {/* Material UI */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={MaterialUiLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Material UI</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          {/* Git/GitHub */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={GitLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Git/GitHub</p>
            </SkillInfo>
          </SkillBlock>
            {/* Bootstrap */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={BootstrapLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Bootstrap</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          {/* Styled Components */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={StyledComponentsLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Styled Components</p>
            </SkillInfo>
          </SkillBlock>
            {/* Java */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={JavaLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Java</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          {/* Google Apps Scripts */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={GoogleAppsScriptLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Google Apps Scripts</p>
            </SkillInfo>
          </SkillBlock>
            {/* Socket.io */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={SocketIoLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Socket.io</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
        <SkillsRow>
          {/* Firebase */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={FirebaseLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Firebase</p>
            </SkillInfo>
          </SkillBlock>
            {/* Heroku */}
          <SkillBlock>
            <SkillLogoContainer>
              <img src={HerokuLogo} height={80} width={80} />
            </SkillLogoContainer>
            <SkillInfo>
              <p>Heroku</p>
            </SkillInfo>
          </SkillBlock>
        </SkillsRow>
      </SkillsSection>
    </Section>
  )
}

export default Skills
