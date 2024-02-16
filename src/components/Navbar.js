import React from 'react';
import { mainLinks } from '../assets/copyData';
import { BsSun, BsMoonStars } from "react-icons/bs";

const styles = {
    navbar: {
        default: 'navbar navbar-expand-lg sticky-top navbar-custom navbar-light sticky-top',
        light: 'navbar-light bg-light',
        dark: 'navbar-dark bg-dark'
    }
};

const Navbar = ({ theme, toggleTheme }) => {
    const navLinks = ['home', 'projects', 'about', 'contact'];

    return (
        <nav id="navbar" className={`${styles.navbar.default} ${styles.navbar[theme]}`}>
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#top">
                    <span className="badge bg-primary me-2 fs-1">D</span>
                    <h1 className={`fs-3 ${theme === 'light' ? 'text-secondary' : 'text-light'}`}><p className="m-1"><strong>Software Engineer</strong></p></h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul id="navbar-navlist" className="navbar-nav navbar-nav-link mx-auto">
                        {navLinks.map((navLink, index) => {
                            return (
                                <li key={index} className={index === 0 ? "nav-item active" : "nav-item"}>
                                    <a className={`nav-link fs-5 ${theme === 'light' ? 'text-secondary' : 'text-light'}`} href={'#' + navLink}>{navLink[0].toUpperCase() + navLink.slice(1)}</a>
                                </li>
                            );
                        })}
                    </ul>

                    <ul className="list-group list-group-horizontal align-items-center mb-0 mt-1 mt-sm-0">
                        <li className="list-group-item social-icon">
                            <button onClick={toggleTheme} className={`btn fs-2 ${theme === 'light' ? 'text-primary' : 'text-light'}`}>{theme === 'light' ? <BsMoonStars /> : <BsSun />}</button>
                        </li>
                        <li className="list-group-item social-icon">
                            <a href={mainLinks.blog} target="_blank" rel="noreferrer noopener" className="text-decoration-none"><p className="fs-2 m-0">Blog</p></a>
                        </li>
                        <li className="list-group-item social-icon">
                            <a href={mainLinks.github} target="_blank" rel="noreferrer noopener"><i className="bi bi-github" style={{ fontSize: "2rem" }}></i></a>
                        </li>
                        <li className="list-group-item social-icon">
                            <a href={mainLinks.linkedIn} target="_blank" rel="noreferrer noopener"><i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i></a>
                        </li>
                        <li className="list-group-item social-icon">
                            <a href={mainLinks.cv} target="_blank" rel="noreferrer noopener"><i className="bi bi-file-earmark-text" style={{ fontSize: "2rem" }}></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;