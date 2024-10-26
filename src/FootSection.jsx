import React from "react";

const FootSection = () => {
    return (
        <>
            {/* <!-- footer --> */}
            <footer>
                <div class="main-footer-div container">
                    <div class="sub-footer-div">
                        <div class="container">
                            <div class="row main-row">
                                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 footer-logo">

                                    <img src="img/05.png" alt="Logo" class="footer-logo-img" />

                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <ul class=" ul-div-footer">
                                        <li><a href="#">MENU</a></li>
                                        <li><a href="#">SHOP</a></li>
                                        <li><a href="#">ABOUT</a></li>
                                        <li><a href="#">ORDER</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="icons-div">
                                        <i class="fa-brands fa-x-twitter"></i>
                                        <i class="fa-brands fa-instagram"></i>
                                        <i class="fa-brands fa-youtube"></i>
                                        <i class="fa-brands fa-facebook"></i>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="last-main-div">
                                <div class="sub-div">
                                    <p>© 2024 Dann Good Coffee</p>
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms of Service</a>
                                    <a href="#">Coffee Settings</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <img src="img/6619a61ab4e3c6e682f584a9_Thats-Dann-Good-Light.svg" alt="" />
            </footer>
        </>
    );
};

export default FootSection;