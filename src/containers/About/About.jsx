import React from 'react'
import './about.css'
import person from '../../assets/user.png'

const About = () => {
  return (
    <div className='about section_margin'>
        <div className='about-section-title' id='About'>
            <img src={person} alt='person' />
        <h1 className='abt-title section-title gradient'>About Me</h1>
        </div>

        <p className='section-subtext'> I am a Computer Science student studying at Wilfrid Laurier University.
            I am interested in software development, fullstack web development, iOS/Android App development, 
            systems design, and computer hardware and design.  
            
        </p>
    </div>
  )
}

export default About