import React, { useState, useEffect } from 'react'
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

import Section from '../components/Section'

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
    <div style={{ textAlign: 'center' }}>
      <Section name="home" />
      <Section name="about" />
      <Section name="skills" subheader="A few technologies I am comfortable using." />
      <Section name="portfolio" subheader="Some of my previous projects." />
      <Section name="contact" />
    </div>
  )
}
