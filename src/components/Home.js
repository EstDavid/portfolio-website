import React from 'react';
import { home, mainLinks } from '../assets/copyData';

const Home = ({ theme }) => {
    return (
        <section className="d-table w-100 hero-image active"
            style={{
                backgroundImage: `url(${home.backgroundImage})`,
            }}
            id="home">
            <div className="container py-5">
                <div className="d-flex flex-column align-items-start title-heading col-auto mt-5">
                    <h3 className={`opacity-75 p-1 mt-5 ${theme === 'light' ? 'bg-light-subtle text-dark' : 'bg-dark-subtle text-light'}`}>{home.titleQuestion}</h3>
                    <h1 className="heading text-primary fw-bold mb-3">{home.title}</h1>
                    <p className={`para-desc fs-4 ${theme === 'light' ? 'text-muted' : 'text-light'}`}>{home.titleCaption}</p>
                    <div className="mt-4 pt-2">
                        <a href={mainLinks.email} className="btn btn-primary rounded mb-2 me-2">Email me</a>
                        <a href={mainLinks.cv}
                            className={`btn btn-outline-primary rounded mb-2 bg-transparent ${theme === 'light' ? 'text-dark' : 'text-light'}`}
                            download="CV Developer - David de Esteban.pdf"
                        >Download CV <i className="bi bi-download"></i>
                        </a>
                    </div>
                </div>
            </div>
            <a href="#about" data-scroll-nav="1" className="mouse-icon rounded-pill bg-transparent mouse-down">
                <span className="wheel position-relative d-block mover"></span>
            </a>
        </section>
    );
};

export default Home;