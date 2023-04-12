import React from 'react'
import Me from '../../assets/logo2.jpg'
import HeaderSocials from './HeaderSocials'
import './Home.css'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className='home container' id="home">
      <div className='intro'>
          <img src={Me} className="home__img" />
          <h1 className='home__name'>Amit Kumar Goswami</h1>
          <span className='home__education'>I am a Full Stack Software Engineer.</span>

          <HeaderSocials />

          <a href='#contact' className='btn'>Hire Me</a>
          <ScrollDown />
      </div>
    </section>
  )
}

export default Home