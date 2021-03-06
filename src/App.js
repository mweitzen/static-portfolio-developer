import React, { useEffect } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'

import { Router } from 'components/Router'
import { Redirect } from '@reach/router'

import './app.css'
import './assets/fontAwesome'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Navbar />
      <div className="content">
        <React.Suspense fallback={<Loader />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  )
}

export default App
