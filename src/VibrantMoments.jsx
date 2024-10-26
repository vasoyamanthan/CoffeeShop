import FootSection from "./FootSection";

const VibrantMoments = () => {
    return (
        <>
            {/* <!-- section--7 --> */}
            <section class="section-7">
                <div class="section-div-7 container">
                    <div class="sub-section-div-007">
                        <div class="vibrant-moments-div">
                            <h2>Vibrant Moments</h2>
                            <p>Experience the thrill of surf, skate, and outdoor adventures.</p>
                        </div>
                        <div class="vibrant-img-div">
                            <div class="container">
                                <div class="row" data-aos="fade-up">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <img src="img/03.png" alt="03" class="img-class-03" />
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <img src="img/04.png" alt="04" class="img-class-03" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="faq-h2-div">
                            <h2>FAQ</h2>
                            <p>Find answers to commonly asked questions about our coffee and community.</p>
                        </div>
                        <div class="main-toggle-div">
                            <div class="toggle-div-007">
                                <div class="border-btn">
                                    <button type="button" class="btn  " data-bs-toggle="collapse"
                                        data-bs-target="#demo">What is your coffee sourced?</button>
                                    <div id="demo" class="collapse ">
                                        Our coffee is sourced from sustainable farms around the world, ensuring the highest
                                        quality and ethical practices.
                                    </div>
                                </div>
                            </div>
                            <div class="toggle-div-007">
                                <div class="border-btn">
                                    <button type="button" class="btn  " data-bs-toggle="collapse"
                                        data-bs-target="#demo-001">Do you offer vegan options?</button>
                                    <div id="demo-001" class="collapse ">
                                        Yes, we offer a variety of vegan options, including plant-based milk alternatives &
                                        vegan pastries
                                    </div>
                                </div>
                            </div>
                            <div class="toggle-div-007">
                                <div class="border-btn">
                                    <button type="button" class="btn  " data-bs-toggle="collapse"
                                        data-bs-target="#demo-002">Where are you located?
                                    </button>
                                    <div id="demo-002" class="collapse ">
                                        We are located at 4114 Rad Ave, in the heart of the city. Come visit us!
                                    </div>
                                </div>
                            </div>
                            <div class="toggle-div-007">
                                <div class="border-btn">
                                    <button type="button" class="btn  " data-bs-toggle="collapse"
                                        data-bs-target="#demo-003">Do you have Wi-Fi?</button>
                                    <div id="demo-003" class="collapse ">
                                        Yes, we offer free Wi-Fi to all our customers. Stay connected while enjoying your
                                        coffee.
                                    </div>
                                </div>
                            </div>
                            <div class="toggle-div-007">
                                <div class="border-btn">
                                    <button type="button" class="btn  " data-bs-toggle="collapse"
                                        data-bs-target="#demo-004">What are your hours?</button>
                                    <div id="demo-004" class="collapse ">
                                        We are open every day from 7am to 7pm.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="still-have-div">
                            <h2>Still have questions?</h2>
                            <p>Contact us for more information.</p>
                            <button>CONTACT</button>
                        </div>

                    </div>
                </div>
                <svg class="section-divider-bottom is-black" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor"><path d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z"></path></svg>
            </section>
            <FootSection/>
        </>
    );
};

export default VibrantMoments;