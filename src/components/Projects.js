import React from 'react';
import dolphinanceProject from '../assets/projectDlpTokenExchange_cropped.png';
import uniChartsProject from '../assets/projectUniCharts_cropped.png';

const dolphinanceDescription = 'Exchange Dapp with its own ERC-20 token, deployed on the Rinkeby network';
const uniChartsDescription = 'Charting app that reads price data from Uniswap V3 pools';


const ProjectFigure = (props) => {
    return (
        <div className="col-sm-6 col-xs-12">
            <figure>
                <div className="img-wrapper">
                    <img src={props.projectImage} className="img-responsive" alt={props.title} ></img>
                    <div className="overlay">
                        <div className="btn-group-vertical" role="group">
                            <a type="button" className="btn btn-primary" target="_blank" rel="noreferrer noopener" href={props.demoLink}>Live Demo</a>
                            {props.githubLinkBackend === undefined ? 
                                <a type="button" className="btn btn-outline-primary" target="_blank" rel="noreferrer noopener" href={props.githubLink}>Code</a>
                            :
                                <div>
                                    <a type="button" className="btn btn-outline-primary" target="_blank" rel="noreferrer noopener" href={props.githubLink}>Frontend Code</a>
                                    <a type="button" className="btn btn-outline-primary" target="_blank" rel="noreferrer noopener" href={props.githubLinkBackend}>Backend Code</a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <figcaption>
                <h4>
                <a href={props.demoLink}>
                    {props.title}
                </a>
                </h4>
                <p>
                    {props.description}
                </p>
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
                    <ProjectFigure 
                        projectImage={dolphinanceProject}
                        title='Dolphinance'
                        description={dolphinanceDescription}
                        demoLink='http://dlp-token-exchange.herokuapp.com/'
                        githubLink='https://github.com/Vandenynas/DappExchange'
                    />
                    <ProjectFigure
                        projectImage={uniChartsProject}
                        title='UniCharts'
                        description={uniChartsDescription}
                        demoLink='http://uniswapv3-charts.herokuapp.com/'
                        githubLink='https://github.com/Vandenynas/uniswapv3-charts'
                        githubLinkBackend='https://github.com/Vandenynas/UniswapV3OracleReader'
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects;