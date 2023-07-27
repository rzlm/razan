import React from 'react'
import './skill.css'
import arrow from '../../assets/right-arrow.png'

const Skill = ({name}) => {
  return (
   
     <div className='sk-cont'>
        <img src={arrow} className='sk-arrow'/>
        <p className='sk-name'>{name}</p>
    </div>
  )
}

export default Skill