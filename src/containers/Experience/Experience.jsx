import React from 'react'
import './Experience.css'
import '../../App.css'
import support from '../../assets/support.png'
import { Skill } from '../../components'
import python from '../../assets/python.png'
import html from '../../assets/html.png'
import css from '../../assets/css-3.png'
import js from '../../assets/js.png'
import physics from '../../assets/physics.png'
import java from '../../assets/java.png'
import android from '../../assets/android.png'


const skillData = [
    { name: 'HTML',
      logo: {html}
    },
    { name: 'CSS',
      logo: {css}
    },
    { name: 'Javascript',
      logo: {js}
    },
    { name: 'React',
      logo: {physics}
    },
    

    { name: 'Python',
      logo: {python}
    },
    { name: 'Java',
      logo: {java}
    },
    { name: 'Android Studio',
      logo: {android}
    },
    { name: 'Git',
    logo: {android}
  },
  { name: 'Github',
  logo: {android}
}
  
  ]
const Experience = () => {
  return (
    <div className=' experience section_margin' id='Experience'>
        <div className='exp-section-title'>
            <img src={support} alt='settings'/>
            <h1 className='section-title gradient'>Experience</h1>
        </div>
        <div>
            <div>
                <div>
                    <h1 className='exp-skills-title'>Skills</h1>
                </div>
                
                <div className='exp-skills'>
                {skillData.map((item, id) => (
          <Skill key={item.id} name = {item.name}/>
        ))}
                </div>
            </div>

            <div>
                <h1 className='exp-skills-title'>Work Experience</h1>
            </div>
        </div>
    </div>
  )
}

export default Experience