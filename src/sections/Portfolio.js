import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

import SnakeScreenshot from '../assets/img/screenshots/screenshot-snake.png'
import PianoPortfolioScreenshot from '../assets/img/screenshots/screenshot-portfolio-piano.png'
import FleaScreenshot from '../assets/img/screenshots/screenshot-flea.png'

const PortfolioItemBase = styled.a`
  display: flex;
  height: 240px;
  margin-bottom: 24px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 6px #178578;
  }
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    height: 360px;
    box-shadow: 0 0 4px #333;
  }
`

const PortfolioImageContainer = styled.div`
  flex: 2;
  background: #333;
  color: #fff;
  overflow: hidden;
  @media (max-width: ${breakpoints.sm}) {
    flex: 4;
  }
`

const PortfolioInfo = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & * {
    padding-left: 24px;
    margin-bottom: 4px;
    text-align: left;
  }
  & h3 {
    margin-top: 16px;
    margin-bottom: 8px;
  }
  @media (max-width: ${breakpoints.sm}) {
    & * {
      padding: 0;
      margin: 0;
    }
    & h3 {
      margin-bottom: 16px;
    }
    align-items: center;
  }
`

const PortfolioItem = ({ image, name, description, link, tech, github }) => (
  <PortfolioItemBase href={link} target="_blank">
    <PortfolioImageContainer>
      <img alt={`picture of portfolio piece ${name}`} src={image} />
    </PortfolioImageContainer>
    <PortfolioInfo>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Tech: <small>{tech}</small></p>
      <p>Github: <small>{github}</small></p>
      <p>Hosted URL: <small>{link}</small></p>
    </PortfolioInfo>
  </PortfolioItemBase>
)

const Portfolio = () => {
  return (
    <Section name="portfolio" subheader="Some of my previous projects.">
      <PortfolioItem
        className="portfolio-item"
        image={SnakeScreenshot}
        name="Snake Game"
        description="Snake Game description"
        link="https://confident-perlman-3fa00d.netlify.app/"
        tech="VanillaJS, HTML5, CSS (with Grid), Netlify"
        github="https://github.com/mweitzen/snake-html"
      />
      <PortfolioItem
        className="portfolio-item"
        image={PianoPortfolioScreenshot}
        name="Piano Portfolio"
        description="Piano Portfolio description"
        link="https://friendly-brown-07317c.netlify.app"
        tech="React, React-Static, Netlify"
        github="https://github.com/mweitzen/static-portfolio-piano"
      />
      <PortfolioItem
        className="portfolio-item"
        image={FleaScreenshot}
        name="Video Voting Demo"
        description="Video Voting Demo description"
        link="https://gifted-kilby-f503fd.netlify.app/"
        tech="React, Redux, ReactPlayer (video), Google Apps Script, Netlify"
        github="https://github.com/mweitzen/flea-voting"
      />
      {/*
      <PortfolioItem
        className="portfolio-item"
        image={FleaScreenshot}
        name="Application Demo"
        description="Application Demo description"
        link="#"
        tech="VanillaJS, HTML5, CSS (with Grid), Netlify"
      />
      */}
    </Section>
  )
}

export default Portfolio
