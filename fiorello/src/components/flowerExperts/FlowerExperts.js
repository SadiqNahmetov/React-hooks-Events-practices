import React from 'react'
import '../../assets/css/flowerExperts/flowerexperts.css'


function FlowerExperts() {
  return (
    <div>
        
        <section id="experts">
            <div className="container">
                <div className="row py-5">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="section-title">
                            <h1>Flower Experts</h1>
                            <p className="text-black-50">A perfect blend of creativity, energy, communication, happiness and
                                love. Let us arrange
                                a smile for you.</p>
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-6 col-lg-3">
                        <div className="item text-center">
                            <div className="img">
                                <img className="img-fluid rounded-circle" src={require('../../assets/img/h3-team-img-1.png')}/>
                            
                            </div>
                            <div className="text mt-3">
                                <h6>CRYSTAL BROOKS</h6>
                                <p className="text-black-50">Florist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="item text-center">
                            <div className="img">
                                <img className="img-fluid rounded-circle" src={require('../../assets/img/h3-team-img-2.png')}/>
                            </div>
                            <div className="text mt-3">
                                <h6>SHIRLEY HARRIS</h6>
                                <p className="text-black-50">Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="item text-center">
                            <div className="img">
                                <img className="img-fluid rounded-circle" src={require('../../assets/img/h3-team-img-3.png')}/>
                            </div>
                            <div className="text mt-3">
                                <h6>BEVERLY CLARK</h6>
                                <p className="text-black-50">Florist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="item text-center">
                            <div className="img">
                                <img className="img-fluid rounded-circle" src={require('../../assets/img/h3-team-img-4.png')}/>
                            </div>
                            <div className="text mt-3">
                                <h6>AMANDA WATKINS</h6>
                                <p className="text-black-50">Florist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FlowerExperts