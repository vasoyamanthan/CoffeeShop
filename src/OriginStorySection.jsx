import React from "react";
import ShopBeans from "./ShopBeans";

const OriginStorySection = () => {
    return (
        <>
            <section className="section-2">
                <div className="section-div-2 container">
                    <div className="sub-section-div-2 pe">
                        <div className="item">
                            <div className="inner-item ">
                                <div className="inner-h2-p-div">
                                    <h2>Peruse Our Vintage, Mid-Century Vibe</h2>
                                    <p>Step into a world of surf, skating, snowboarding, outdoor adventure, and mid-century
                                        awesomeness at Dann Good Coffee. Our coffee shop is inspired by the retro vibes of
                                        the
                                        past, offering a cozy and nostalgic atmosphere for coffee lovers to enjoy.</p>
                                    <button className="read-btn">
                                        READ OUR ORIGIN STORY
                                    </button>
                                </div>
                            </div>
                            <div className="inner-item" data-aos="fade-up">
                                <div className="inner-img-div ">
                                    <img src="../img/800.jpg" alt="01" className="inner-img-01" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ShopBeans />
        </>
    )
}
export default OriginStorySection;