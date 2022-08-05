import React from 'react';

const Navbar = () => {

    const navLinks = [ 'home', 'projects', 'about', 'contact' ];

    return (
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
    		<div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                <h1><span className="badge bg-primary me-2">D</span></h1>
                    David de Esteban</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul id="navbar-navlist" className="navbar-nav navbar-nav-link mx-auto">
                        {navLinks.map((navLink, index) => {
                            return (
                                <li key={index} className="nav-item">
                                    <a className="nav-link" href={'#' + navLink}>{navLink[0].toUpperCase() + navLink.slice(1)}</a>
                                </li>
                            )
                        })}
                    </ul>

                    <ul className="list-unstyled mb-0 mt-2 mt-sm-0 social-icon">
                        <li className="list-inline-item"><a href=""><i className="mdi mdi-facebook"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="mdi mdi-twitter"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="mdi mdi-instagram"></i></a></li>
                    </ul>
                </div> 
            </div>
		</nav>
    )
}

export default Navbar;