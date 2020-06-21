import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

import styled from 'styled-components'

const ScrollToTopDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ScrollToTopLink = styled.a`
  color: blue;
`

const ScrollToTop = () => {
  function scrollToTop() {
    scroll.scrollToTop({duration: 300});
  }

  return (
    <ScrollToTopDiv>
      <ScrollToTopLink onClick={scrollToTop}>To the top!</ScrollToTopLink>
    </ScrollToTopDiv>
  )
}

export default ScrollToTop
