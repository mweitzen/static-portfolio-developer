import React, { useEffect } from 'react'
import { useNavigate } from '@reach/router'
export default () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  })
  return <div />
}
