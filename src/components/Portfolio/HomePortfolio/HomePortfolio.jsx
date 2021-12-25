import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../images/doctor.png';
import panda from '../../../images/pandae.png';
import red from '../../../images/redOnion.png';
import './HomePortfolio.css';

const HomePortfolio = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <>
            <div className="home__portfolio section__margin">
                <div className="row py-5 my-5">

                   <div className="col-md-7 col-sm-12 col-12 home__portfolio-header">
                  <div> <h1>Some of my works</h1>  </div> 
                  <div className="border"></div>  
                    <Link to="/portfolio"><div><button>All Works</button></div></Link>
                   </div>

                   
                   <div className="col-md-5 col-sm12 col-12">
                       
                   </div>
                </div>
                {/* port folio  */}
                <div className="home__portfolio-container row">
                    <div data-aos='fade-down' className="home__portfolio-container-img col-md-7 col-lg-7 md-sm-12 col-12">
                            <img className="img-fluid" src={red} alt="" />
                    </div>
                    <div  data-aos='fade-up' className="home__portfolio-container-details col-md-5 col-lg-5 md-sm-12 col-12">
                        <h6>01</h6>
                        <h2>Red Onion foods</h2>
                        <p>A single page restaurant app where people are able to select food in their cart and checkout the cart with their information .</p>
                        <div>
                            <ul  className="tools">
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                                <li>Bootstrap5</li>
                            </ul>
                        </div>
                        <div className="href">
                            {/* <a href="https://github.com/iasraful1971/LAVISH-frontEnd.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a> */}
                          <a href="https://red-onion-food.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>

                {/* port folio  */}
                <div className="home__portfolio-container py-5 my-5 row">
                    <div  data-aos='fade-up' className="home__portfolio-container-img col-md-7 col-lg-7 md-sm-12 col-12">
                            <img className="img-fluid" src={doctor} alt="" />
                    </div>
                    <div  data-aos='fade-down' className="home__portfolio-container-details col-md-5 col-lg-5 md-sm-12 col-12">
                        <h6>02</h6>
                        <h2>Doctor's Portal</h2>
                        <p>A Single page web app with dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient from his dashboard</p>
                        <div>
                            <ul  className="tools">
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                                <li>Material UI</li>
                            </ul>
                        </div>
                        <div className="href">
                            <a href="https://github.com/iasraful1971/doctorPortal-client.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://doctors-portal-react.firebaseapp.com/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>

                {/* port folio  */}
                <div className="home__portfolio-container row">
                    <div  data-aos='fade-down' className="home__portfolio-container-img col-md-7 col-lg-7 md-sm-12 col-12">
                            <img className="img-fluid" src={panda} alt="" />
                    </div>
                    <div  data-aos='fade-up' className="home__portfolio-container-details col-md-5 col-lg-5 md-sm-12 col-12">
                        <h6>03</h6>
                        <h2>Red Onion foods</h2>
                        <p>A simple , static and one page Ecommerce website design . It is a XD to HTML conversion . The website fully made with bootsrap5. This is all device friendly website</p>
                        <div>
                            <ul  className="tools">
                                
                                <li>Html</li>
                                <li>Css5</li>
                                <li>Bootstrap5</li>
                            </ul>
                        </div>
                        <div className="href">
                            <a href="https://github.com/iasraful1971/panda-ecommerce-bootstrap5.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://iasraful1971.github.io/panda-ecommerce-bootstrap5/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>




            </div>
        </>
    );
};

export default HomePortfolio;