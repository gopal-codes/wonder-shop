import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa'

const Fotter = () => {
    return (
        <div>
            <footer className="section-padding footer mycontainer">
                <div className="">
                    <div className="grid col-1-col-1-col-1">
                        <div className="info text-center">
                            <a href="#about" className="footer-logo">WONDERSHOP</a>
                            <hr />
                            <p> some thing is needed to write in the gap thaat is something i dont exceop can klbr hdsfjahj bettwee nthis so i am</p>

                            <div className="social-links">
                                <ul class="d-flex space-around">
                                    <li> <FaFacebookF size='25px'/></li>
                                    <li> <FaGithub  size='25px'/></li>
                                    <li> <FaLinkedin  size='25px'/></li>
                                </ul>
                            </div>
                        </div>

                        <div className="links text-center">
                            <h3>UseFull Link</h3>
                            <hr />
                            <ul>
                                <li>HOME</li>
                                <li>BRANDS</li>
                                <li>PRODUCTS</li>
                                <li>SEARCH</li>
                                <li>CONTACT US</li>
                            </ul>
                        </div>
                        <div className="llegal-links text-center">
                            <h3>Legal Links</h3>
                            <hr />
                            <ul>
                                <li>importan to us</li>
                                <li>copyrights </li>
                                <li>Laws of our company</li>
                                <li>somethin different</li>
                                <li>i dont know what?</li>
                            </ul>
                        </div>
                    </div>
                    <div className="credits text-center">
                        <hr />
                        <p> Made by Gopal Raut &copy; 2001. All rights reserved. </p>
                       
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Fotter
