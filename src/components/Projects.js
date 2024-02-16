import React from 'react';
import { projects } from '../assets/copyData';
import ProjectFigure from './ProjectFigure';

const Projects = ({ theme }) => {
    return (
        <section className="section" id="projects">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="container-title text-center mb-4 pb-2">
                        <div className="titles">
                            <h2 className={`title text-capitalize mb-4 ${theme === 'light' ? 'text-secondary' : 'text-light'}`}>Project Portfolio</h2>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

            {projects.map((project, index) => {
                const imageSecond = index % 2 === 0;
                return (
                    <ProjectFigure key={index}
                        theme={theme} project={project} descriptionId={`project-${index}`} imageSecond={imageSecond}
                    />
                );

            })}
        </section>
    );
};

export default Projects;