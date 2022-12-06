import React from 'react';
import { home, mainLinks } from '../assets/copyData';

const Home = () => {
    return (
        <section className="bg-home bg-light d-table w-100 active" 
            style={{
                backgroundImage:`url(${home.backgroundImage})`,
                backgroundSize:'cover',
                backgroundPositionX:'left',
                backgroundPositionY:'top'
            }} 
            id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="title-heading mt-5">
                            <h3 className="sub-title">{home.titleQuestion}</h3>
                            <h1 className="heading text-primary mb-3">{home.title}</h1>
                            <p className="para-desc text-muted">{home.titleCaption}</p>
                            <div className="mt-4 pt-2">
                                <a href={mainLinks.email} className="btn btn-primary rounded mb-2 me-2">Hire me</a>
                                <a href={mainLinks.cv}
                                    className="btn btn-outline-primary rounded mb-2" 
                                    download="CV Developer - David de Esteban.pdf"
                                    >Download CV <i className="bi bi-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#about" data-scroll-nav="1" className="mouse-icon rounded-pill bg-transparent mouse-down">
                <span className="wheel position-relative d-block mover"></span>
            </a>
        </section>
    )
}

export default Home;