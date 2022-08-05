import React from 'react';

const Home = () => {
    return (
        <section className="bg-home bg-light d-table w-100 active" style={{"backgroundImage":"url('images/home/01.png')"}} id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="title-heading mt-5">
                            <h3 className="sub-title">Looking for a Blockchain Developer?</h3>
                            <h1 className="heading text-primary mb-3">Hey, I'm David de Esteban</h1>
                            <p className="para-desc text-muted">Obviously I'm a Blockchain Developer. Blockchain Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <div className="mt-4 pt-2">
                                <a href="" className="btn btn-primary rounded mb-2 me-2">Hire me</a>
                                <a href="../assets/CV-David_de_Esteban.pdf" className="btn btn-outline-primary rounded mb-2" download>Download CV <i className="bi bi-download"></i></a>
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