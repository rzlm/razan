import React from 'react'
import './project.css'

const Button = ({tag}) => {
  return (
    <button>{tag}</button>
  )
}


const Project = ({name, image, link, about, tags}) => {
  return (
    <div className='project-container'>
        <div className='project-img'>
            {/* <img src={image}/> */}
        </div>
        <div className='project-description'>
            <h1>{name}</h1>
            <p>{about}</p>
        </div>
        <div className='project-tags'>
        {tags.map((item, index) => (
          <Button key={index} tag = {item}/>
        ))} 
        </div>
    </div>
  )
}

export default Project