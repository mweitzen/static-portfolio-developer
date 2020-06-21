import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'

import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'
import './assets/fontAwesome'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Navbar />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
          <ScrollToTop />
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  )
}

export default App
