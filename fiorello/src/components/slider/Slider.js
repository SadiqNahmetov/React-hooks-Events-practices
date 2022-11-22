import React from 'react'
import '../../assets/css/slider/slider.css'
function Slider() {
  return (
    <div>

        <div className='container'>
            <div className='row'>
                <div className='sl'>
                <section id="slider">
            <div class="owl-carousel slider">
            <img src={require('../../assets/img/h3-slider-background.jpg')} />
            {/* <img src={require('../../assets/img/h3-slider-background-2.jpg')} />
            <img src={require('../../assets/img/h3-slider-background-3.jpg')}/> */}
             
            </div>
            <div class="container context pl-lg-5 ml-lg-3">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="text">
                            <h1>Send <span>flowers</span> like</h1>
                            <h1>you mean it</h1>
                            <p class="text-black-50 d-none d-sm-block">Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will
                                make it special cursus a sit amet mauris. </p>
                        </div>
                        <div class="img">
                          
                            <img src={require('../../assets/img/h2-sign-img.png')}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Slider