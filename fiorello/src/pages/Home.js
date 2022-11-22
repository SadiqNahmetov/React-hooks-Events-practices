import React from 'react'
import Navigation from '../components/layout/Navigation'
import Slider from '../components/slider/Slider'
import Product from '../components/product/Product'
import About from '../components/about/About'
import FlowerExperts from '../components/flowerExperts/FlowerExperts'
import Subscribe from '../components/subscribe/Subscribe'
import Blog from '../components/blog/Blog'
import Footer from '../components/layout/Footer'


function Home() {
  return (
    <div>

       <Navigation/>
       <Slider/>
       <Product/>
       <About/>
       <FlowerExperts/>
       <Subscribe/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home