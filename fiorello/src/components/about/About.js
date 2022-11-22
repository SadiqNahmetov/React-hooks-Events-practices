import React from 'react'

import '../../assets/css/about/about.css'

function About() {
  return (
    <div>
         <section id="about">
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-lg-6">
                        <div className="img">
                            <img className="img-fluid" src={require('../../assets/img/h3-video-img.jpg')} />
                            <div
                                className="player position-absolute rounded-circle d-flex align-items-center justify-content-center">
                                <i className="fas fa-play fa-lg"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text mt-5 mt-lg-0 px-lg-5">
                            <h1>Suprise Your <span>Valentine!</span> Let us arrange a smile.</h1>
                            <p className="py-3">Where flowers are our inspiration to create lasting memories. Whatever the
                                occasion...</p>
                            <ul className="list-unstyled">
                                <li className="mt-3">
                                <img className='mr-2'  src={require('../../assets/img/h1-custom-icon.png')} /> Hand picked just
                                    for you.</li>
                                   
                                <li className="mt-3">
                                   <img className='mr-2'  src={require('../../assets/img/h1-custom-icon.png')} /> Unique flower
                                    arrangements</li>
                                    
                                <li className="mt-3">
                                <img className='mr-3' src={require('../../assets/img/h1-custom-icon.png')} /> Best way to say
                                    you care.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About