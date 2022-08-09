import React from 'react';
import { projects } from '../assets/copyData';
import ProjectFigure from './ProjectFigure';

const Projects = () => {
    return (
        <section className="section bg-light" id="projects">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4">Project Portfolio</h2>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {projects.map((project, index) => {
                        return (
                            <ProjectFigure key={index}
                                project={project}
                            />
                        )

                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects;