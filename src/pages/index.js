import React, { useState, useEffect } from 'react'
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
      <Element className="element" name="home">
        <h1>Home</h1>
      </Element>
      <Element className="element" name="about">
        <h1>About</h1>
      </Element>
      <Element className="element" name="skills">
        <h1>Skills</h1>
      </Element>
      <Element className="element" name="portfolio">
        <h1>Portfolio</h1>
      </Element>
      <Element className="element" name="contact">
        <h1>Contact</h1>
      </Element>
    </div>
  )
}
