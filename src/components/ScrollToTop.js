import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScrollToTopDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`

const ScrollToTopLink = styled.a`
  color: #178578;
  &:hover {
    cursor: pointer;
  }
`

const ScrollToTop = () => {
  function scrollToTop() {
    scroll.scrollToTop({duration: 300});
  }

  return (
    <ScrollToTopDiv>
      <ScrollToTopLink onClick={scrollToTop}>
        To the top{" "}<FontAwesomeIcon icon='chevron-circle-up' />
      </ScrollToTopLink>
    </ScrollToTopDiv>
  )
}

export default ScrollToTop
