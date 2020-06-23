import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

import NodeJsLogo from "../assets/img/logos/grayscale-nodejs-240.png"
import BootstrapLogo from "../assets/img/logos/grayscale-bootstrap-240.png"
import FirebaseLogo from "../assets/img/logos/grayscale-firebase-240.png"
import GitLogo from "../assets/img/logos/grayscale-git-240.png"
import HerokuLogo from "../assets/img/logos/grayscale-heroku-240.png"
import JavaLogo from "../assets/img/logos/grayscale-java-240.png"
import JavascriptLogo from "../assets/img/logos/grayscale-js-240.png"
import MaterialUiLogo from "../assets/img/logos/grayscale-materialui-240.png"
import MongoDbLogo from "../assets/img/logos/grayscale-mongodb-240.png"
import MySqlLogo from "../assets/img/logos/grayscale-mysql-240.png"
import PythonLogo from "../assets/img/logos/grayscale-python-240.png"
import ReactLogo from "../assets/img/logos/grayscale-react-240.png"
import ReduxLogo from "../assets/img/logos/grayscale-redux-240.png"
import StyledComponentsLogo from "../assets/img/logos/grayscale-styled-components-240.png"
import GoogleAppsScriptLogo from '../assets/img/logos/grayscale-google-apps-240.png'
import SocketIoLogo from '../assets/img/logos/grayscale-socket-io-240.png'

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
    name: "Styled Components",
    logo: StyledComponentsLogo
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
    name: "NodeJS",
    logo: NodeJsLogo
  },
  {
    name: "MongoDB",
    logo: MongoDbLogo
  },
  {
    name: "Socket.io",
    logo: SocketIoLogo
  },
  {
    name: "Git/GitHub",
    logo: GitLogo
  },
  {
    name: "Firebase",
    logo: FirebaseLogo
  },
  {
    name: "Google Apps Script",
    logo: GoogleAppsScriptLogo
  },
  {
    name: "Heroku",
    logo: HerokuLogo
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
