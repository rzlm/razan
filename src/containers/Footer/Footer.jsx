import React from 'react'
import email from '../../assets/email.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-cont section_margin' id='Links'>
        <div className='footer-section-title'>
            <img src={email} alt='email'/>
            <h1 className='section-title gradient'>Links</h1>
        </div>
        <div className='footer-link'>
            <h2>Email</h2>
            <p> <a href=''>moha5150@mylaurier.ca</a></p>
        </div>

        <div className='footer-link'>
            <h2>Github</h2>
            <p> <a href='https://github.com/rzlm'>@rzlm</a></p>
        </div>

        <div className='footer-link'>
            <h2>Resume</h2>
            <p>resume.pdf</p>
        </div>
        <div className='footer-copy'>
            <p> &copy; Razan Mohamed - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer