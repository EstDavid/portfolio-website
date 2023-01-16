import React from 'react';
import { mainLinks } from '../assets/copyData';

const Navbar = () => {

    const navLinks = [ 'home', 'projects', 'about', 'contact' ];

    return (
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
    		<div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#top">
                    <span className="badge bg-primary me-2 fs-1">D</span>
                        <h1 className="fs-3"><p className="m-1"><strong>Front End | Blockchain</strong></p>
                        <p className="m-1"><strong>Developer</strong></p></h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul id="navbar-navlist" className="navbar-nav navbar-nav-link mx-auto">
                        {navLinks.map((navLink, index) => {
                            return (
                                <li key={index} className={index === 0 ? "nav-item active" : "nav-item"}>
                                    <a className="nav-link" href={'#' + navLink}>{navLink[0].toUpperCase() + navLink.slice(1)}</a>
                                </li>
                            )
                        })}
                    </ul>

                    <ul className="list-group list-group-horizontal mb-0 mt-1 mt-sm-0">
                        <li className="list-group-item social-icon">
                            <a href={mainLinks.github} target="_blank" rel="noreferrer noopener"><i className="bi bi-github" style={{fontSize: "2rem"}}></i></a>
                        </li>
                        <li className="list-group-item social-icon">
                            <a href={mainLinks.linkedIn} target="_blank" rel="noreferrer noopener"><i className="bi bi-linkedin" style={{fontSize: "2rem"}}></i></a>
                        </li>
                        <li className="list-group-item social-icon">
                            <a href={mainLinks.cv} target="_blank" rel="noreferrer noopener"><i className="bi bi-file-earmark-text" style={{fontSize: "2rem"}}></i></a>
                        </li>
                    </ul>
                </div> 
            </div>
		</nav>
    )
}

export default Navbar;