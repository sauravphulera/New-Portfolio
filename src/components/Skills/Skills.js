import React from 'react'
import './Skills.css'
import { SKILLSDATA } from '../../data';
export const Skills = () => {
    const SKILLS = [...SKILLSDATA];
  return (
    <div className='Skills'>
        <h1>Skills</h1>
        <div className='subtitle'>
            Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
        </div>
        <div className='skills-container'>
                {
                  SKILLS.map((skill) => (
                      <div key={skill.name} className='skill'>
                          <div>
                            <img className='logo' src={skill.logo} alt={`${skill.name} logo`} />
                          </div>
                          <div>{skill.name}</div>
                      </div>
                    ))
                }
          </div>
    </div>
  )
}
