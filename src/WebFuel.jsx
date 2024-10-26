import React from "react";
import MeetOurTeam from "./MeetOurTeam";

const WebFuel = () => {
    return (
        <>
            {/* <!-- section--4 --> */}
            <section class="section-4">
                <div class="section-div-4 container">
                    <div class="sub-section-div-4">
                        <div class="row justify-content-center">
                            <div class="col-sm-4">
                                <img src="img/Coffee-Icon-Beans.svg" alt="Coffee-Icon-Beans" class="icon-beans" />
                                <h2>Custom Roasts</h2>
                                <p>Bring your coffee ideas and we’ll make a custom roast just for you.</p>
                                <button>LET’S ROAST</button>
                            </div>
                            <div class="col-sm-4">
                                <img src="img/Coffee-Icon-Cursor.svg" alt="Coffee-Icon-Cursor" class="icon-beans" />
                                <h2>Web Fuel</h2>
                                <p>When we’re not serving coffee, we’re fueling the web with custom-built websites.</p>
                                <button>GET STARTED</button>
                            </div>
                            <div class="col-sm-4">
                                <img src="img/Coffee-Icon-Beard.svg" alt="Coffee-Icon-Beard" class="icon-beans" />
                                <h2>Beard Training</h2>
                                <p>Yup, that’s right. Our beard manager will guide you to your best beard yet.</p>
                                <button>TRAIN ME</button>
                            </div>
                        </div>
                    </div>
                </div>
                <svg class="section-divider-top is-orange is-flip" viewBox="0 0 1200 120" preserveAspectRatio="none"
                    fill="#c06522">
                    <path
                        d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z">
                    </path>
                </svg>
            </section>
            <MeetOurTeam />
        </>
    )
}

export default WebFuel;