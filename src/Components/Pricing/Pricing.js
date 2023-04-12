import React from 'react'
import "./Pricing.css"
import img1 from '../../assets/price-1.svg'
import img2 from '../../assets/price-2.svg'
import img3 from '../../assets/price-3.svg'

const Pricing = () => {
  return (
    <section className='pricing container section' id='pricing'>
      <h2 className='section__title'>Pricing Plans</h2>
      
      <div className='pricing__container grid'>
        <div className='pricing__item'>
          <img src={img1} className='pricing__image' />
          <h3 className='pricing__plan'>Basic</h3>
          <p className='pricing__title'>Functional website with HTML, CSS, JS, Bootstrap use frontend and django, Node Js as backend.</p>
          <p className='pricing__support'>Email Support</p>
          <h3 className='price'>
            <em>$</em> 70 <span>Month</span>
          </h3>
          <a href='' className='btn'>Get Started</a>
        </div>

        <div className='pricing__item'>
          <img src={img2} className='pricing__image' />
          <h3 className='pricing__plan'>Standerd</h3>
          <p className='pricing__title'>Standerd website with Bootstrap, Tailwind, React Js us fronted and django, Node js as backend.</p>
          <p className='pricing__support'>Email and Video Support</p>
          <h3 className='price'>
            <em>$</em> 150 <span>Month</span>
          </h3>
          <a href='' className='btn'>Get Started</a>
        </div>

        <div className='pricing__item'>
          <img src={img3} className='pricing__image' />
          <h3 className='pricing__plan'>Premium</h3>
          <p className='pricing__title'>Custom website with Bootstrap, Tailwind, React.Js use fronted and django, Node js as backend.</p>
          <p className='pricing__support'>Full Support</p>
          <h3 className='price'>
            <em>$</em> 400 <span>Month</span>
          </h3>
          <a href='' className='btn'>Get Started</a>
        </div>
      </div>
    </section>
  )
}

export default Pricing