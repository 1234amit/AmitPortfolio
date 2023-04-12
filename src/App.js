import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
// import Blog from './Components/Blog/Blog'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import Pricing from './Components/Pricing/Pricing'
import Resume from './Components/Resume/Resume'
import Services from './Components/Services/Services'
import Sidebar from './Components/Sidebar/Sidebar'
import "./App.css"



const App = () => {
  return (
    <div>
      <Sidebar />
      <main className='main'>
          <Home />
          <About />
          <Services />
          {/* <Blog /> */}
          <Portfolio />
          {/* <Resume /> */}
          <Pricing />
          <Contact />
      </main>
    </div>
  )
}

export default App