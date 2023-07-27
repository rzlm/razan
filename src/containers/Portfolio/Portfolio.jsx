import React from 'react'
import './portfolio.css'
import folder from '../../assets/folder.png'
import {Project} from '../../components'

const projectData = [
    {
        name: 'Task Manager',
        image: {},
        link: '',
        about: 'An online project management system that allows users to sign in, add, delete tasks. ',
        tags: [
            'React',
            'MongoDB',
            'OAuth'
          
        ]
    },

    {
        name: 'Weather App',
        image: {},
        link: '',
        about: 'An online project management system that allows users to sign in, add, delete tasks. ',
        tags: [
            'React',
            'Redux',
            'REST API'
         
        ]
    },

    {
        name: 'Course Scheduling System',
        image: {},
        link: '',
        about: 'An online project management system that allows users to sign in, add, delete tasks. ',
        tags: [
            'Python',
            'SQL',
            'Algorithms',
            'OOP'
        ]
    },
]
const Portfolio = () => {
  return (
    <div className='section_margin' id='Portfolio'>
        <div className='portfolio-section-title'>
            <img src={folder} alt='portfolio'/>
            <h1 className='section-title gradient'>Portfolio</h1>
        </div>

        <div className='portfolio-abt'>
            <p>Check out some of the projects that I've been working on!</p>
        </div>

        <div className='portfolio-projects'>
        {projectData.map((item, index) => (
          <Project key={index} name = {item.name} about={item.about} tags={item.tags}/>
        ))}
        </div>
    </div>
  )
}

export default Portfolio