import React from "react";
import ThrilledCustomers from "./ThrilledCustomers";

const MeetOurTeam = () => {
    return (
        <>
            {/* <!-- section--5 --> */}
            <section class="section-5">
                <div class="section-div-5 container">
                    <div class="sub-section-div-005">
                        <div class="meet-our-team-div">
                            <h2>Meet Our Team</h2>
                            <p>We are a group of adventure-seeking, coffee-loving Danns.</p>
                        </div>
                        <div class="main-flip-card-div">
                            <div class="container" data-aos="fade-up">
                                <div class="row main-flip-card-div">
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 normal-flip-card-1 ">
                                        <div class="flip-card ">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img src="img/avtar-01.jpg" alt="Avatar"
                                                         className="avtar-img"/>
                                                    <h4><b>Dann</b></h4>
                                                    <p>Barista</p>
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>Lorem</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                                        natus
                                                        blanditiis expedita incidunt tempora sapiente nemo ducimus, </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 normal-flip-card-2 ">
                                        <div class="flip-card ">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img src="img/avatar-500.jpg" alt="Avatar"
                                                        className="avtar-img"  />
                                                    <h4><b>Dann the Mann</b></h4>
                                                    <p>Beard Manager</p>
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>Lorem</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                                        natus
                                                        blanditiis expedita incidunt tempora sapiente nemo ducimus, </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 normal-flip-card-3 ">
                                        <div class="flip-card ">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <div>
                                                        <img src="img/avatar-600.jpg" alt="Avatar"
                                                            className="avtar-img"  />
                                                    </div>
                                                    <div>
                                                        <h4><b>D. “Petty”</b></h4>
                                                        <p>Roaster</p>
                                                    </div>

                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>Lorem</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                                        natus blanditiis expedita incidunt tempora sapiente nemo ducimus,
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 normal-flip-card-4 ">
                                        <div class="flip-card ">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img src="img/avatar-700.jpg" alt="Avatar"
                                                        className="avtar-img"  />
                                                    <h4><b>Danny</b></h4>
                                                    <p>Web Fueler</p>
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>Lorem</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                                        natus blanditiis expedita incidunt tempora sapiente nemo ducimus,
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="last-h3-div">
                            <h3>Ready for the ride of your life?</h3>
                            <p>Join our dann good team and step into the rad life!</p>
                            <button>VIEW OPEN POSITIONS</button>
                        </div>
                    </div>
                </div>
                <svg class="section-divider-bottom is-teal-dark" viewBox="0 0 1200 120" preserveAspectRatio="none"
                    fill="#006764">
                    <path
                        d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z">
                    </path>
                </svg>
            </section>
            <ThrilledCustomers/>
        </>
    );
};

export default MeetOurTeam;