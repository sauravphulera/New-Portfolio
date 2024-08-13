import React from 'react'
import './Skills.css'
import { SKILLSDATA } from '../../data';
export const Skills = () => {
    const SKILLS = [...SKILLSDATA];
  return (
    <div className='p-4 Skills'>
        <h1>Skills</h1>
        <div className='mt subtitle'>
            Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
        </div>
        <div className='flex flex-wrap jusify-between'>
                {
                  SKILLS.map((skill) => {
                  return(
                      <div key={skill.name + Math.random()} className='flex skill p align-center space-evenly'>
                      
                          <div>
                            <img className='logo' src={skill.logo} alt='Skill logo' />
                          </div>
                          <div>{skill.name}</div>
                      </div>
                      )
                    })
                }
          </div>
    </div>
  )
}
