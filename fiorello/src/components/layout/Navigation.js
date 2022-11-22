import React from 'react'
import '../../assets/css/navbar/navbar.css'

function Navigation() {
    return (
        <div>

            <div className='container'>
                <div className='row'>

       {/* <div className="col-12 testtest">
                    <nav
                        className="navbar navbar-expand-lg d-flex d-lg-block justify-content-between d-xl-flex navbar-light py-3 py-lg-0">
                        <a  className="navbar-brand" href="#">
                            
                            <img src={require('../../assets/img/logo.png')} id='logo'/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" id="mobile-navbar-show">
                            <span className="navbar-toggler-icon" style={{color: 'black'}}></span>
                        </button>

                        <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                               
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="#">Pages</a>
                                 
                                </li>
                                <li className="nav-item shop-li">
                                    <a className="nav-link" href="#">Shop</a>
                                  
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Portfolio</a>
                             
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                   
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Elements</a>
                                   
                                </li>
                                <li className="nav-item my-auto search">
                                    <i className="fas fa-search" id="search"></i>
                                    <ul className="list-unstyled py-3">
                                        <li className="d-flex px-3">
                                            <input id="input-search" type="text" placeholder="Search">
                                            <i className="fas fa-search my-auto" id="search"></i>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item my-auto shop-cart">
                                    <i className="fas fa-shopping-bag"></i>
                                    <sup className="rounded-circle">0</sup>
                                     <span>CART ($0)</span> 
                                   
                                </li>
                                

                            </ul>
                        </div>

                    </nav>
                </div> */}




                    <div className="col-12">
                        <nav
                            className="navbar navbar-expand-lg d-flex d-lg-block justify-content-between d-xl-flex navbar-light py-3 py-lg-0">
                            <a className="navbar-brand" href="#">
                                <img src={require('../../assets/img/logo.png')} id='logo'/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation" id="mobile-navbar-show">
                                <span className="navbar-toggler-icon" style={{fontSize: 12}}></span>
                            
                            </button>
                            
                            <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                     
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pages</a>
                                   
                                    </li>
                                    <li className="nav-item shop-li">
                                        <a className="nav-link" href="#">Shop</a>
                                    
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Portfolio</a>
                                  
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                 
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Elements</a>
                                    
                                    </li>
                                    <li className="nav-item my-auto search">
                                        <i className="fas fa-search" id="search"></i>
                                        <ul className="list-unstyled py-3">
                                            <li className="d-flex px-3">

                                                {/* <form className="form-horizontal">
                                                    <input id="input-search" type="text" className="form-control" ref={(c) => this.title = c} name="title" placeholder="Search" />
                                                </form> */}
                                         


                                                    <i className="fas fa-search my-auto" id="search"></i>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="nav-item my-auto shop-cart">
                                        <i className="fas fa-shopping-bag"></i>
                                        <sup className="rounded-circle">0</sup>
                                        <span>CART ($0)</span>
                                       
                                    </li>
                                </ul>
                            </div>

                        </nav>
                    </div>

                </div>
            </div>



        </div>

    )
}

export default Navigation