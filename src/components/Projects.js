import React from 'react';
import { projects, getSkill, getIconSymbol } from '../assets/copyData';

const dolphinanceDescription = 'Exchange Dapp with its own ERC-20 token, deployed on the Rinkeby network';
const uniChartsDescription = 'Charting app that reads price data from Uniswap V3 pools';


const ProjectFigure = (props) => {
    const {project } = props;

    return (
        <div className="col-sm-6 col-xs-12">
            <figure>
                <div className="img-wrapper">
                    <img src={project.image} className="img-responsive" alt={project.title} ></img>
                    <div className="overlay">
                            <div className="project-buttons" role="group">
                                <a 
                                    type="button"
                                    className="d-flex btn btn-primary justify-content-center"
                                    target="_blank" rel="noreferrer noopener"
                                    href={project.demoCodeURLs[0]}>Live Demo
                                </a>
                                {project.demoCodeURLs.length === 2 ? 
                                    <a 
                                    type="button" 
                                    className="d-flex btn btn-outline-primary justify-content-center" 
                                    target="_blank" rel="noreferrer noopener" 
                                    href={project.demoCodeURLs[1]}
                                >Code</a>
                                :
                                <div className="d-flex">
                                    <a 
                                    type="button" 
                                    className="btn btn-outline-primary" 
                                    target="_blank" rel="noreferrer noopener" 
                                    href={project.demoCodeURLs[1]}
                                >Frontend Code</a>
                                    <a 
                                    type="button" 
                                    className="btn btn-outline-primary" 
                                    target="_blank" rel="noreferrer noopener" 
                                    href={project.demoCodeURLs[2]}
                                >Backend Code</a>
                                </div>
                                }
                            </div>
                        <div className="project-skillset">
                            <h5 className="mt-2" style={{color: "white"}}>Skills and technologies used:</h5>
                            <div className="d-flex flex-wrap w-100">
                                {project.skillSets.map((skillName, index) => {
                                    const skill = getSkill(skillName);
                                    if(skill !== undefined) return (
                                        <button key={index} type="button" className="btn btn-outline-light m-1" disabled>
                                            {skill.iconText ? getIconSymbol(skill.iconText) : ''}
                                            {skill.name}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
                <figcaption>
                <h4>
                <a href={project.demoCodeURLs[0]}>
                    {project.title}
                </a>
                </h4>
                {project.description.map((paragraph, index) => {
                    return (
                        <p className="fs-6" key={index} >{paragraph}</p>
                    )
                })}
                </figcaption>
            </figure>
        </div>
    )
}

const Projects = () => {
    return (
        <section className="section bg-light" id="projects">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4">My Work &amp; Portfolio</h2>
                                <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
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