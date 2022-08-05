import React, {useState} from 'react';

const completeSkillSet = [
    {
        name: 'Solidity',
        isBlockchain: true,
        isLanguage: true,
        iconText: 'solidity-plain'
    },
    {
        name: 'Ethers',
        isBlockchain: true,
        isFramework: true,
    },
    {
        name: 'Truffle',
        isBlockchain: true,
        isFramework: true,
    },
    {
        name: 'Ganache',
        isBlockchain: true,
        isFramework: true,
    },
    {
        name: 'Hardhat',
        isBlockchain: true,
        isFramework: true,
    },
    {
        name: 'Flash Swaps',
        isBlockchain: true,
    },
    {
        name: 'NFTs',
        isBlockchain: true,
    },
    {
        name: 'Uniswap V3',
        isBlockchain: true,
    },
    {
        name: 'Javascript',
        isGeneral: true,
        isLanguage: true,
        iconText: 'javascript-plain'
    },
    {
        name: 'Python',
        isGeneral: true,
        isLanguage: true,
        iconText: 'python-plain'
    },
    {
        name: 'Typescript',
        isGeneral: true,
        isLanguage: true,
        iconText: 'typescript-plain'
    },
    {
        name: 'ReactJs',
        isGeneral: true,
        isFramework: true,
        iconText: 'react-original'
    },
    {
        name: 'Redux',
        isGeneral: true,
        isFramework: true,
        iconText: 'redux-original'
    },
    {
        name: 'Bootstrap',
        isGeneral: true,
        isFramework: true,
        iconText: 'bootstrap-plain'
    },
    {
        name: 'Git',
        isGeneral: true,
        isFramework: true,
        iconText: 'git-plain'
    },
    {
        name: 'Github',
        isGeneral: true,
        isFramework: true,
        iconText: 'github-original'
    },
    {
        name: 'VS Code',
        isGeneral: true,
        isFramework: true,
        iconText: 'vscode-plain'
    },
];

const categories = [
    {
        name: 'Blockchain',
        key: 'isBlockchain'
    },
    {
        name: 'Languages',
        key: 'isLanguage'
    },
    {
        name: 'Frameworks/Tools',
        key: 'isFramework'
    }
]


const About = () => {

    const initialSelection = 0;

    const [skillSetSelection, setSelection] = useState(initialSelection);

    const currentSkillSet = completeSkillSet.filter((skill) => {
        const skillSetKey = categories[skillSetSelection].key;
        return skill[skillSetKey];
    });
    
    const handleSelectionChange = (index) => {
        setSelection(index);
    }

    const getIconSymbol = (textId) => {
        return <i className={`devicon-${textId} colored me-1`}></i>
    }


    return (
        <section className="section bg-light" id="about">
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title">
                            <div class="position-relative">
                                <h2 class="title text-uppercase mb-4">About</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <h2>Hello, I am David</h2>
                        <h4>Blockchain Developer from Spain</h4>
                        <p>My name is David de Esteban and I have been in the crypto space since early 2018 as an investor and a trader.</p>
                        <p>In 2021 I decided to take my passion for crypto to a new level and become a blockchain developer.</p>

                        <ul className="list-group list-group-horizontal list-group-flush">
                            <li className="list-group-item social-icon">
                                <a href="https://github.com/Vandenynas/" target="_blank" rel="noreferrer noopener"><i className="bi bi-github"></i></a>
                            </li>
                            <li className="list-group-item social-icon">
                                <a href="www.linkedin.com/in/david-de-esteban" target="_blank" rel="noreferrer noopener"><i className="bi bi-linkedin"></i></a>
                            </li>
                        </ul>

                        <p>
                            <a href="../assets/CV-David_de_Esteban.pdf" className="btn btn-dark" download>Download my CV
                                <i className="bi bi-download ms-1"></i>
                            </a>
                        </p>
                    </div>

                    <div className="col">
                        <h2>Skills</h2>
                        <div className="d-flex justify-content-start">
                                    {categories.map((category, index) => {
                                        return(
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
                                        )
                                    })}
                        </div>
                            <div className="d-flex flex-wrap">
                                {currentSkillSet.map((skill, index) => {
                                    return(
                                        <button key={index} type="button" className="btn btn-outline-success m-1">
                                            {skill.iconText ? getIconSymbol(skill.iconText) : ''}
                                            {skill.name}
                                        </button>
                                    )
                                })}
                            </div>                           

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;