import React from 'react'
import '../../assets/css/blog/blog.css'

function Blog() {
  return (
    <div>
          <section id="blog">
            <div className="container">
                <div className="row py-5">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="section-title">
                            <h1>From our Blog</h1>
                            <p className="text-black-50">A perfect blend of creativity, energy, communication, happiness and
                                love. Let us arrange
                                a smile for you.</p>
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <div className="img position-relative">
                                <img src={require('../../assets/img/blog-feature-img-1.jpg')} className="img-fluid" alt=""/>
                                <div className="date rounded bg-light position-absolute py-1 px-2">
                                    <span>29.12.2019</span>
                                </div>
                            </div>
                            <div className="text mt-3 text-center px-5">
                                <h5>Flower Power</h5>
                                <p className="text-black-50">className aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <div className="img position-relative">
                                <img src={require('../../assets/img/blog-feature-img-3.jpg')} className="img-fluid" alt=""/>
                                <div className="date rounded bg-light position-absolute py-1 px-2">
                                    <span>29.12.2019</span>
                                </div>
                            </div>
                            <div className="text mt-3 text-center px-5">
                                <h5>Local Florists</h5>
                                <p className="text-black-50">className aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <div className="img position-relative">
                                <img src={require('../../assets/img/blog-feature-img-4.jpg')} className="img-fluid" alt=""/>
                                <div className="date rounded bg-light position-absolute py-1 px-2">
                                    <span>29.12.2019</span>
                                </div>
                            </div>
                            <div className="text mt-3 text-center px-5">
                                <h5>Flower Beauty</h5>
                                <p className="text-black-50">className aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blog