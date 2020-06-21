import React, { useState, useEffect } from 'react'
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

import Section from '../components/Section'

export default () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
  }, [])

  function scrollToBottom() {
    scroll.scrollToBottom();
  }

  function scrollTo() {
    scroll.scrollTo(100);
  }

  function scrollMore() {
    scroll.scrollMore(100);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Section name="home" />
      <Section name="about" />
      <Section name="skills" />
      <Section name="portfolio" />
      <Section name="contact" />
    </div>
  )
}
