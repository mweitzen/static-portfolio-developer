import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

const Portfolio = () => {
  return (
    <Section name="portfolio" subheader="Some of my previous projects.">
      <p><a href="https://confident-perlman-3fa00d.netlify.app/" target="_blank">Snake Game</a></p>
      <p><a href="https://friendly-brown-07317c.netlify.app" target="_blank">Piano Portfolio</a></p>
      <p><a href="https://gifted-kilby-f503fd.netlify.app/" target="_blank">Video Voting Demo</a></p>
      <p><a href="#" target="_blank">Application Demo</a></p>
    </Section>
  )
}

export default Portfolio
