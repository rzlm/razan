import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero-container section_padding'>
      <div className='hero-text-container'>
        <h1 className='hero-text-name'>Razan Mohamed</h1>
        <h3 className='hero-text-job'>Software Developer</h3>
      </div>
  
      <div className='hero-btn-container'>
        <button href="#About" className='hero-btn'><a href='#About'>  ˅  </a></button>
      </div>
    </div>
  )
}

export default Hero