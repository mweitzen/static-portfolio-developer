import React from 'react'
import styled from 'styled-components'

const LoaderBody = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Loader = () => {
  return (
    <LoaderBody>
      <em>Loading...</em>
    </LoaderBody>
  )
}

export default Loader
