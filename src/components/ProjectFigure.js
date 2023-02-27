import React, { useState } from 'react';
import { getSkill, getIconSymbol } from '../assets/copyData';

const ProjectFigure = (props) => {
    const { project, descriptionId, imageSecond } = props;

    const [showText, setShowText] = useState(false)

    const handleShowText = (event) => {
        event.preventDefault()
        console.log(showText)
        setShowText(!showText)
    }

    return (
        <figure className="h-100 d-flex flex-wrap justify-content-center m-0 py-5">
            <div className={`img-wrapper col-11 col-lg-5 p-0 mb-3 mb-lg-0 ${imageSecond ? 'order-lg-1' : 'order-lg-0'}`}>
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
                </div>
            </div>
            <figcaption className={`col-11 col-lg-5 p-0 ${imageSecond ? 'order-lg-0' : 'order-lg-1'}`}>
                <div className={`${imageSecond ? 'me-lg-5' : 'ms-lg-5'}`}>
                    <h4 className="text-center">
                        <a href={project.demoCodeURLs[0]}>
                            {project.title}
                        </a>
                    </h4>
                    <div className='text-center'>
                        <div className="btn-group mt-2 mb-2" role="group">
                            <a
                                type="button"
                                className="d-flex btn btn-primary justify-content-center"
                                target="_blank" rel="noreferrer noopener"
                                href={project.demoCodeURLs[0]}>Live Demo
                            </a>
                            <a
                                type="button"
                                className="d-flex btn btn-outline-primary justify-content-center"
                                target="_blank" rel="noreferrer noopener"
                                href={project.demoCodeURLs[1]}
                            >{project.demoCodeURLs.length === 2 ? 'Code' : 'Frontend Code'}</a>
                            {project.demoCodeURLs.length === 2 ?
                                ''
                                :
                                <a
                                    type="button"
                                    className="btn btn-outline-primary"
                                    target="_blank" rel="noreferrer noopener"
                                    href={project.demoCodeURLs[2]}
                                >Backend Code</a>
                            }
                        </div>
                    </div>
                    <div className={`read-more-paragraph collapse ${showText ? "show" : ""}`} id={descriptionId}>
                        {project.description.map((paragraph, index) => {
                            return (
                                <div className="fs-6" key={index} >
                                    {paragraph}
                                </div>
                            )
                        })}
                        <p className="read-more">
                            <button className="btn btn-outline-primary m-2" onClick={handleShowText}>{showText ? 'Show less' : 'Show more'}</button>
                        </p>
                    </div>
                    <div>
                        <h5 className="mt-2">Tools and technologies used:</h5>
                        <div className="d-flex flex-wrap w-100">
                            {project.skillSets.map((skillName, index) => {
                                const skill = getSkill(skillName);
                                if (skill !== undefined) {
                                    return (
                                        <button key={index} type="button" className="btn btn-outline-secondary m-1" disabled>
                                            {skill.iconText ? getIconSymbol(skill.iconText) : ''}
                                            {skill.name}
                                        </button>
                                    )
                                } else {
                                    return (
                                        <button key={index} type="button" className="btn btn-outline-secondary m-1" disabled>
                                            {skillName}
                                        </button>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default ProjectFigure;