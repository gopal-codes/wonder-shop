import React, { } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../image/wondershop1.jpg';
import img2 from '../image/wondershop2.jpg';
import img3 from '../image/wondershop4.jpg';

import Fotter from './Fotter';
import Itemcontainer2 from './Itemcontainer2';


function Home() {
    return (
        <div >

            <div className='mycontainer'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                            height='500vh'
                        />
                        <Carousel.Caption>
                            <h2>EARN TIME BY SHOPPING ONLINE WITH US</h2>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                            height='500vh'
                        />

                        <Carousel.Caption>
                            <h2 style={{ background: 'black' }}>GET BEST FOR YOU AND YOUR FAMILY </h2>
                            <p style={{ background: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                            height='500vh'
                        />

                        <Carousel.Caption>
                            <h2 style={{ backgroundColor: 'black' }}>BEST QUALITY ITEMS FROM BEST BRANDS.</h2>
                            <p style={{ backgroundColor: 'black' }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ height: "30px", background: "blue" }}></div>

            <section>
                <div className="whyus ">
                    <div>
                        <div className="whyus_content">
                            <h1>Why Choose Us ?</h1>
                            <h3>We have best MarketPlace in the whole Country. We offer best Product at Reasonable Price.
                            </h3>
                            <p>Excellence is our desire. And i dont remeber what to write this time. I am writing some random
                                text that doesn't mean anythings. Thank You</p>
                        </div>
                    </div>
                </div>
            </section>


            <div style={{ height: "30px", background: "blue" }}></div>

        
            <Itemcontainer2 />


            <div style={{ height: "30px", background: "blue" }}></div>

            <section className="contact-section">
                <h2 style={{ textAlign: 'center' }}>Contact us</h2>
                <div className="d-flex justify-content-center">
                    <form className="form-items">
                        <div className="form-group">
                            <label>Your Email</label>
                            <input className="cinput" type="text" name="" />
                        </div>
                        <div className="form-group">
                            <label> Your Name</label>
                            <input className="cinput" type="text" name="" />
                        </div>
                        <div className="form-group">
                            <label>Your Phone</label>
                            <input className="cinput" type="text" name="" />
                        </div>
                        <div className="d-flex form-group">
                            <label> Your Message</label>
                            <textarea> </textarea>
                        </div>

                        <button type="button" onClick={() => { alert("Thanks, for your time we will contact you soon....") }} className="main-btn">Send</button>

                    </form>

                </div>
            </section>

            <div style={{ height: "30px", background: "blue" }}></div>

            <Fotter />

        </div>
    )
}

export default Home
