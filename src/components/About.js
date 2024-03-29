import React, { useState } from 'react';
import { about, skillCategories, completeSkillSet, getIconSymbol } from '../assets/copyData';

const About = ({ theme }) => {

    const initialSelection = 0;

    const [skillSetSelection, setSelection] = useState(initialSelection);

    const currentSkillSet = completeSkillSet.filter((skill) => {
        const skillSetKey = skillCategories[skillSetSelection].key;
        return skill[skillSetKey];
    });


    const handleSelectionChange = (index) => {
        setSelection(index);
    };

    return (
        <section className={`section container ${theme === 'light' ? 'text-secondary' : 'text-light'}`} id="about">
            <div className="mw-100 px-3">
                <div className="mw-100 row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <div className="position-relative">
                                <h2 className="title text-uppercase mb-4">About</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mw-100 row">
                    <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                        <h2>{about.title1}</h2>
                        <h4>{about.title2}</h4>
                        {about.descriptions.map((description, index) => {
                            return (
                                <div key={index}>{description}</div>
                            );
                        })}
                    </div>

                    <div className="col">
                        <h2>Skills</h2>
                        <div className="d-flex justify-content-start">
                            {skillCategories.map((category, index) => {
                                return (
                                    <div key={index} className="m-1">
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id={`btnradio${index}`}
                                            autoComplete="off"
                                            checked={index === skillSetSelection ? true : false}
                                            onChange={() => handleSelectionChange(index, category.key)}
                                        ></input>
                                        <label
                                            className="btn btn-outline-primary"
                                            htmlFor={`btnradio${index}`}
                                        >{category.name}</label>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="d-flex flex-wrap">
                            {currentSkillSet.map((skill, index) => {
                                return (
                                    <button key={index} type="button" className={`btn m-1 ${theme === 'light' ? 'btn-outline-primary' : 'btn-outline-light'}`} disabled>
                                        {skill.iconText ? getIconSymbol(skill.iconText) : ''}
                                        {skill.name}
                                    </button>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;