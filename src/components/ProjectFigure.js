import React from 'react';
import { getSkill, getIconSymbol } from '../assets/copyData';

const LinkButton = ({ url, text, focused, textColor, theme }) => {
    return (
        <a
            type="button"
            className={`d-flex btn justify-content-center ${textColor} ${focused ? 'btn-primary' : 'btn-outline-primary'} ${!focused && theme === 'light' ? '' : 'text-light'}`}
            target="_blank" rel="noreferrer noopener"
            href={url}>
            {text}
        </a>
    );
};

const ProjectFigure = (props) => {
    const { project, descriptionId, imageSecond, theme } = props;

    const showText = true;

    return (
        <figure className="h-100 d-flex flex-wrap justify-content-center m-0 py-5">
            <div className={`img-wrapper col-11 col-lg-5 p-0 mb-3 mb-lg-0 ${imageSecond ? 'order-lg-1' : 'order-lg-0'}`}>
                <img src={project.image} className="img-responsive mx-auto" alt={project.title} ></img>
                <div className="overlay">
                    <div className="project-buttons" role="group">
                        {project.demoCodeURLs.map((urlObject, index) => {
                            return (
                                <LinkButton
                                    key={index}
                                    url={urlObject.url}
                                    text={urlObject.name}
                                    focused={index === 0 ? true : false}
                                    textColor={'text-light'}
                                />
                            );
                        })}
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
                            {project.demoCodeURLs.map((urlObject, index) => {
                                return (
                                    <LinkButton
                                        key={index}
                                        url={urlObject.url}
                                        text={urlObject.name}
                                        focused={index === 0 ? true : false}
                                        theme={theme}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className={`read-more-paragraph collapse ${showText ? "show" : ""}`} id={descriptionId}>
                        {project.description.map((paragraph, index) => {
                            return (
                                <div className={`fs-6 ${theme === 'light' ? 'text-secondary' : 'text-light'}`} key={index} >
                                    {paragraph}
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <h5 className={`mt-2 ${theme === 'light' ? 'text-secondary' : 'text-light'}`}>Tools and technologies used:</h5>
                        <div className="d-flex flex-wrap w-100">
                            {project.skillSets.map((skillName, index) => {
                                const skill = getSkill(skillName);
                                if (skill !== undefined) {
                                    return (
                                        <button key={index} type="button" className={`btn m-1 ${theme === 'light' ? 'btn-outline-primary' : 'btn-outline-light'}`} disabled>
                                            {skill.iconText ? getIconSymbol(skill.iconText) : ''}
                                            {skill.name}
                                        </button>
                                    );
                                } else {
                                    return (
                                        <button key={index} type="button" className={`btn m-1 ${theme === 'light' ? 'btn-outline-primary' : 'btn-outline-light'}`} disabled>
                                            {skillName}
                                        </button>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </figcaption>
        </figure>
    );
};

export default ProjectFigure;