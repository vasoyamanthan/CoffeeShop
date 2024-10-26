import React from "react";
import OriginStorySection from "./OriginStorySection";

const HeadSection = () => {
    return(
        <>
          {/*  <!-- section--1 --> */}
        <section className="section-1">
            <div className="section-div-1 container">
                <nav className="navbar bg-transparent navbar-expand-lg">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <a className="navbar-brand " href="#"><img src="img/05.png" alt="Logo" className="logo-img" /></a>
                        <button className="header-order-btn order-btn">ORDER</button>

                        {/* <!-- ul-div --> */}
                        <div className="collapse navbar-collapse Btn-hide" id="navbarSupportedContent">
                            <ul className="navbar-nav  mr-auto w-100 justify-content-center  ">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">HOME <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SHOP</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT</a>
                                </li>
                            </ul>
                            <button className="header-order-btn">ORDER</button>
                        </div>


                    </div>
                </nav>
                <div className="sub-section-div">
                    <div className="item">
                        <h1>Chill Vibes and Dann Good Coffee</h1>
                        <p>An inspiring space to fuel your ambition and coffee that’s dann good.</p>
                        <div className="inner-btn-div">
                            <button className="btn-1">ORDER</button>
                            <button className="btn-2">MENU</button>
                        </div>
                        <p className="text">OPEN DAILY 7AM–7PM</p>
                    </div>
                </div>
            </div>
            <svg className="section-divider-bottom-001" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#369392">
                <path
                    d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z">
                </path>
            </svg>
        </section>
        <OriginStorySection />
        </>
      
        
    )
}

export default HeadSection;