import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

const PortfolioItem = styled.div`
  display: flex;
`

const PortfolioImage = styled.img`
  flex: 2;
`

const PortfolioInfo = styled.div`
  flex: 3;
`

const Portfolio = () => {
  return (
    <Section name="portfolio" subheader="Some of my previous projects.">
      <PortfolioItem>
        <PortfolioImage/>
        <PortfolioInfo>
          <a href="https://confident-perlman-3fa00d.netlify.app/" target="_blank">Snake Game</a>
        </PortfolioInfo>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioImage/>
        <PortfolioInfo>
          <a href="https://friendly-brown-07317c.netlify.app" target="_blank">Piano Portfolio</a>
        </PortfolioInfo>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioImage/>
        <PortfolioInfo>
          <a href="https://gifted-kilby-f503fd.netlify.app/" target="_blank">Video Voting Demo</a>
        </PortfolioInfo>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioImage/>
        <PortfolioInfo>
          <a href="#" target="_blank">Application Demo</a>
        </PortfolioInfo>
      </PortfolioItem>
    </Section>
  )
}

export default Portfolio
