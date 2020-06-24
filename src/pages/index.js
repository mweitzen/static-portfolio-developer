import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

import Home from 'sections/Home'
import About from 'sections/About'
import Skills from 'sections/Skills'
import Portfolio from 'sections/Portfolio'
import Contact from 'sections/Contact'

const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`

export default () => {
  useEffect(() => {
    window.scrollTo(0,0)

    Events.scrollEvent.register('begin', (to, element) => {

    });

    Events.scrollEvent.register('end', (to, element) => {

    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
  }, [])

  return (
    <Content>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Content>
  )
}
