import React from 'react'

import '../../assets/css/subscribe/subscribe.css'
function Subscribe() {
  return (
    <div>
          <section id="subscribe">
            <div class="container py-5">
                <div class="row py-5">
                    <div class="col-12">
                        <div class="content text-center py-5">
                            <h3>Join The Colorful Bunch!</h3>
                            <div class="form-group d-flex justify-content-center flex-wrap mt-5">
                            <img  className="img-fluid" src={require('../../assets/img/h3-background-img.jpg')}/>
                                        {/* <form className="form-horizontal">
                                        <input id="input-search" type="email" className="form-control"  ref={(c) => this.title = c} placeholder="Email Address" class="form-control-lg rounded-0">
                                                    <input id="input-search" type="text" className="form-control" ref={(c) => this.title = c} name="title" placeholder="Search" />
                                                </form>  */}
                                <button class="btn btn-danger btn-lg rounded-0 px-5 mt-3 mt-sm-0">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Subscribe