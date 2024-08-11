import { PROJECTS } from '../../data';
import ProjectDetail from './ProjectDetail';
import './Projects.css'
import React, { useState } from 'react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = [...PROJECTS]

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };
    return (
        <div className='p-6 project-page flex align-center justify-center'>
            <div className="carousel-button prev" onClick={handlePrev}>
                <img className='arrow' src='arrow-left.svg' alt='Left arrow' />
            </div>
            <div className="carousel">
                    <div className="carousel-wrapper">
                        <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {projects.map((project, index) => (
                                <div className="carousel-slide" key={index}>
                                    <ProjectDetail 
                                        title={project.title} 
                                        description={project.description}
                                        url={project.url}
                                        imageUrl={project.imageUrl}  
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
            <div className="carousel-button next" onClick={handleNext}>
                        <img className='arrow' src='arrow-right.svg' alt='right arrow' />
            </div>
        </div>
    )
}

export default Projects;