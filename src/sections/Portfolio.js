import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Image from '../assets/img/grayscale-bootstrap.png'
import Section from '../components/Section'

const PortfolioItemBase = styled.div`
  display: flex;
  height: 240px;
  &:not(last-child) {
    margin-bottom: 24px;
  }
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

const PortfolioItem = ({ image, name, description, link }) => (
  <a href={link} target="_blank">
    <PortfolioItemBase>
      <PortfolioImageContainer>
        {/*<img alt={`picture of portfolio piece ${name}`} src={image} />*/}
        <p>Pic</p>
      </PortfolioImageContainer>
      <PortfolioInfo>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Tech:</p>
        <p>Github: </p>
        <p>Hosted URL: </p>
      </PortfolioInfo>
    </PortfolioItemBase>
  </a>
)

const Portfolio = () => {
  return (
    <Section name="portfolio" subheader="Some of my previous projects.">
      <PortfolioItem
        image={Image}
        name="Snake Game"
        description="Snake Game description"
        link="https://confident-perlman-3fa00d.netlify.app/"
      />
      <PortfolioItem
        image={Image}
        name="Piano Portfolio"
        description="Piano Portfolio description"
        link="https://friendly-brown-07317c.netlify.app"
      />
      <PortfolioItem
        image={Image}
        name="Video Voting Demo"
        description="Video Voting Demo description"
        link="https://gifted-kilby-f503fd.netlify.app/"
      />
      <PortfolioItem
        image={Image}
        name="Application Demo"
        description="Application Demo description"
        link="#"
      />
    </Section>
  )
}

export default Portfolio
