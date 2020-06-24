import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from 'components/Section'

import { portfolio } from 'app/content'

const PortfolioItemBase = styled.a`
  display: flex;
  height: 288px;
  margin-bottom: 24px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    height: 560px;
  }
`

const PortfolioImageContainer = styled.div`
  flex: 2;
  background: #333;
  color: #fff;
  /* ::-webkit-scrollbar {
    width : 0px;
    background: transparent;
  } */
  /* overflow: auto; */
  overflow: hidden;
`

const PortfolioInfo = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  & > div {
    padding: 2px 32px;
  }
  & div div {
    display: flex;
    flex-direction: column;
  }
  & h3 {
    margin-top: 16px;
    margin-bottom: 8px;
  }
  & div div p {
    margin-bottom: 0;
    margin-top: 6px;
  }
  @media (max-width: ${breakpoints.sm}) {
    background: #f9f9f9;
    align-items: center;
    text-align: center;
    padding: 0 8px;
    & h3 {
      margin-bottom: 16px;
    }
  }
`

const PortfolioItem = ({ image, name, description, link, tech, github }) => (
  <PortfolioItemBase href={link} target="_blank">
    <PortfolioImageContainer>
      <img alt={`picture of portfolio piece ${name}`} src={image} width="100%" />
    </PortfolioImageContainer>
    <PortfolioInfo>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <p><strong>Tech:</strong></p>
          <p><small>{tech}</small></p>
        </div>
        <div>
          <p><strong>Github:</strong></p>
          <p><small>{github}</small></p>
        </div>
        <div>
          <p><strong>Hosted URL:</strong></p>
          <p><small>{link}</small></p>
        </div>
      </div>
    </PortfolioInfo>
  </PortfolioItemBase>
)

const Portfolio = () => {
  return (
    <Section name="portfolio" subheader="Some of my previous projects.">
      {
        portfolio.map((item, i) => (
          <PortfolioItem
            key={i}
            className="portfolio-item"
            {...item}
          />
        ))
      }
    </Section>
  )
}

export default Portfolio
