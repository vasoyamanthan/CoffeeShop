import React from "react";
import WebFuel from "./WebFuel";

const ShopBeans = () => {
    return(
    <>
    {/* <!-- section--3 --> */}
        <section class="section-3">
            {/* <!-- svg --> */}
            <svg class="section-divider-top" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#369392">
                <path
                    d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z">
                </path>
            </svg>
            {/* <!-- div --> */}
            <div class="section-div-3 container">
                <div class="sub-section-div-3">
                    <div class="item">
                        <div class="inner-item"     data-aos="fade-up">
                            <div class="inner-div-img">
                                <img src="img/02.png" alt="02" class="inner-img-02" />
                            </div>
                        </div>
                        <div class="inner-item">
                            <h2>Organic, Single Origin & Dann Good</h2>
                            <p>Experience the rich flavors of our unique coffee blends, crafted with the finest organic
                                ingredients from around the world. Each sip is a journey to the heart of dann goodness.
                            </p>
                            <button class="shop-beans-btn">SHOP BEANS</button>
                        </div>
                    </div>
                </div>
            </div>
            <svg class="section-divider-bottom is-orange is-flip" viewBox="0 0 1200 120" preserveAspectRatio="none"
                fill="#C06522">
                <path
                    d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z">
                </path>
            </svg>
        </section>
        <WebFuel/>
    </>
    )
}

export default ShopBeans;