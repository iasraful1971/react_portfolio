import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cbr from '../../../images/cbr.png';
import inc from '../../../images/davly.png';
import doctor from '../../../images/doctor.png';
import { default as ebato } from '../../../images/ebantoSc.png';
import education from '../../../images/education.png';
import emajhon from '../../../images/emajhon.png';
import food from '../../../images/food.png';
import gpt3 from '../../../images/gpt3.png';
import jsBangla from '../../../images/jsBangladesh.png';
import lavis from '../../../images/lavish.png';
import manpo from '../../../images/manPo.png';
import myPO from '../../../images/mycv.png';
import panda from '../../../images/pandae.png';
import psye from '../../../images/psychecareMAin.png';
import onion from '../../../images/redOnion.png';
import res from '../../../images/restaurent.png';
import rymo from '../../../images/rymo.png';
import weather from '../../../images/waether app.png';
import './portfolio.css';

const Portfolio = () => {
const [isClick, setIsClick] = useState(false);
const [isSeondCLick, setIsSecondClick] = useState(false);
    return (
        <>
             <div className="section__margin">
                <div className="blog-heading">
                <h1> My Projects</h1>
                    <div className="border" ></div>

                </div>
            <div className="home__blog-container py-5">
                      
                        
                       

                        
                        <div className="blog-colum">
                        <img className="img-fluid" src={onion} alt="" />
                            <h3>Red Onion foods</h3>
                            <p>A single page restaurant app where people are able to select food in their cart and checkout the cart with their information</p>
                            <div className="tools">
                                <div className="features">
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                                <li>Bootstrap5</li>
                                </div> 
                            </div>
                          
                            <hr />
                            <div className="href">
                            {/* <a href="https://github.com/iasraful1971/LAVISH-frontEnd.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a> */}
                          <a href="https://red-onion-food.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                        </div>
                        <div className="blog-colum">
                        <img className="img-fluid" src={doctor} alt="" />
                            <h3>Doctor's Portal</h3>
                            <p>A Single page web app with dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments.</p>
                            <div className="tools">
                                <div className="features">
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                                <li>Material UI</li>
                                </div> 
                            </div>
                          
                            <hr />
                            <div className="href">
                            <a href="https://github.com/iasraful1971/doctorPortal-client.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://doctors-portal-react.firebaseapp.com/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                        </div>
                        <div className="blog-colum">
                        <img className="img-fluid" src={psye} alt="" />
                            <h3>Psyche Care</h3>
                            <p>It a multiple page website of mental health care related. In the funtionalies of this website are included log and register system and private route.</p>
                            <div className="tools">
                                <div className="features">
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                                <li>Bootstrap5</li>
                                </div> 
                            </div>
                          
                            <hr />
                            <div className="href">
                            <a href="https://github.com/iasraful1971/psycheCare-react.js.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://fervent-franklin-1f65db.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                        </div>
                        <div className="blog-colum mt-5">
                        <img className="img-fluid" src={gpt3} alt="" />
                            <h3>GPT-3 </h3>
                            <p>A single page react application . The design of the gpt3 website is latest way and color combination is eye catching.</p>
                            <div className="tools">
                                <div className="features">
                                    <li>React.js</li>
                                    <li>Css</li>
                                    <li>Css Grid</li>
                         

                                </div> 
                            </div>
                          
                            <hr />
                            <div className="href">
                            <a href="https://github.com/iasraful1971/gpT3-frontEnd.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://stupefied-mccarthy-3518c8.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                        </div>
                        <div className="blog-colum mt-5">
                        <img className="img-fluid" src={lavis} alt="" />
                            <h3>LAVISH</h3>
                            <p>One page website created by react js.In the navbar section is designed sliding menu-bar and the codes are clean </p>
                            <div className="tools">
                                <div className="features">
                                <li>React.js</li>
                                    <li>Css</li>
                                    <li>Css Grid</li>
                                    <li>Flex-box</li>
                                </div> 
                            </div> 
                          
                            <hr />
                            <div className="href">
                            <a href="https://github.com/iasraful1971/LAVISH-frontEnd.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://practical-booth-b12dab.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                        </div>
                        <div className="blog-colum mt-5">
                        <img className="img-fluid" src={inc} alt="" />
                            <h3>Devaly</h3>
                            <p>It is react.js one page website in where different types of product shown. V6 react router is intrigated in this application</p>
                            <div className="tools">
                                <div className="features">
                                    <li>React js</li>
                                    <li>Props</li>
                                    <li> css Grid</li>
                                    <li>Bootstrap5</li>
                                </div> 
                            </div>
                          
                            <hr />
                            <div className="href">
                            <a href="https://github.com/iasraful1971/dvaly.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://sleepy-gates-a27efc.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                        </div>
                        
                    </div>
                    <div className="next-btn pt-5">
                        <button className={isClick && 'show'} onClick={() => setIsClick(true)} >see more</button>
                    </div>



                    {/* show part  */}
                    <div className= {isClick ? "home__blog-container py-5": "show"}>
                      
                        
                       

                        
                        <div className="blog-colum">
                        <img className="img-fluid" src={emajhon} alt="" />
                            <h3>Ema-jhon</h3>
                            <p>Multiplae page E-commerece. It is conclued , react-router, firebase authentication and private route.</p>
                            <div className="tools">
                                <div className="features">
                                    <li>React.js</li>
                                    <li>firebase</li>
                                    <li>mongodb</li>
                                    <li>express.js</li>
                                </div> 
                            </div>
                          
                            <hr />
                            <div className="href">
                            <a href="https://github.com/iasraful1971/emaJhon-react" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://frosty-feynman-9b8b09.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                        </div>
                        <div className="blog-colum">
                        <img className="img-fluid" src={rymo} alt="" />
                            <h3>Rymo </h3>
                            <p>The Rymo website is a kind of ecommerce website. And the website is all of devices friendly.</p>
                            <div className="tools">
                                <div className="features">
                                    <li>HTML</li>
                                    <li>Css</li>
                                    <li>Flex-box</li>
                                    <li>Bootstrap5</li>
                                    <li>Javascript</li>
                                    
                                   
                                </div> 
                            </div>
                          
                            <hr />
                             <div className="href">
                            <a href="https://github.com/iasraful1971/rymo-ecommerce.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://iasraful1971.github.io/rymo-ecommerce/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                        </div>
                        <div className="blog-colum">
                        <img className="img-fluid" src={myPO} alt="" />
                            <h3>My CV</h3>
                            <p>This is a simplest one page portfolio website design uses pure javascript and a little bit jquery.</p>
                            <div className="tools">
                                <div className="features">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>grid-layout</li>
                                    <li>flex-box</li>
                                    <li>Jquery</li>
                                    <li>Javascript</li>
                                   
                                </div> 
                            </div>
                          
                            <hr />
                              <div className="href">
                            <a href="https://github.com/iasraful1971/my-cv.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://iasraful1971.github.io/my-cv/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                        </div>
                        <div className="blog-colum mt-5">
                        <img className="img-fluid" src={panda} alt="" />
                            <h3>Panda Ecommerce</h3>
                            <p>A simple and single page , static and one page Ecommerce website design . It is a XD to HTML conversion. </p>
                            <div className="tools">
                                <div className="features">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootsrap5</li>
                                    <li>Javascript</li>
                                </div> 
                            </div>
                          
                            <hr />
                              <div className="href">
                            <a href="https://github.com/iasraful1971/panda-ecommerce-bootstrap5.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://iasraful1971.github.io/panda-ecommerce-bootstrap5/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                        </div>
                        <div className="blog-colum mt-5">
                        <img className="img-fluid" src={res} alt="" />
                            <h3>Cafe Garden</h3>
                            <p>This is  a restaurant website with colourfully designed. For amazing sliding uses jquery and for responsive uses Bootstrap4</p>
                            <div className="tools">
                                <div className="features">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap4</li>
                                  
                                    <li>JQuery</li>
                                </div> 
                            </div>
                          
                            <hr />
                            <div className="href">
                            <a href="https://github.com/iasraful1971/restaurent-project.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://iasraful1971.github.io/restaurent-project/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                        </div>
                        <div className="blog-colum mt-5">
                        <img className="img-fluid" src={education} alt="" />
                            <h3>Tech Edu.</h3>
                            <p>This is multiple pages website design for tech education realated, without use of any framework/libraries or any third party plugins </p>
                            <div className="tools">
                                <div className="features">
                                    <li>HTML</li>
                                    <li>CSS3</li>
                                    <li>Grid-layout</li>
                                </div> 
                            </div>
                          
                            <hr />
                              <div className="href">
                            <a href="https://github.com/iasraful1971/tech-education.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://techedubd.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                        </div>
                        
                    </div>

                    {
                        isClick &&
                        <div className="next-btn pt-5">
                        <button className={isSeondCLick && "show"} onClick={() =>setIsSecondClick(true)}>see more</button>
                          </div>
                    }
                     {/* show part  */}
                     <div className= {isSeondCLick ? "home__blog-container py-5": "show"}>
                      
                        
                       

                        
                      <div className="blog-colum">
                      <img className="img-fluid" src={ebato} alt="" />
                          <h3>E-School</h3>
                          <p>It is a another educational single page website. The website totally made with popular framework bootstrap5</p>
                          <div className="tools">
                              <div className="features">
                                  <li>HTML</li>
                                  <li>Bootstrap5</li>
                              </div> 
                          </div>
                        
                          <hr />
                          <div className="href">
                            <a href="https://github.com/iasraful1971/ibnu-e-school-bootstrap.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://iasraful1971.github.io/ibnu-e-school-bootstrap/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                      </div>
                      <div className="blog-colum">
                      <img className="img-fluid" src={weather} alt="" />
                          <h3>Weather App</h3>
                          <p>It is simple weather application. Here a input filend , if you type any of location then recent weather would be appear. </p>
                          <div className="tools">
                              <div className="features">
                                  <li>Javascript</li>
                                  <li>HTML</li>
                                  <li>CSS</li>
                                  <li>API</li>
                              </div> 
                          </div>
                        
                          <hr />
                            <div className="href">
                            <a href="https://github.com/iasraful1971/weather-app.git">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://iasraful1971.github.io/weather-app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                      </div>
                      <div className="blog-colum">
                      <img className="img-fluid" src={food} alt="" />
                          <h3>Food Sparks</h3>
                          <p>This is a simplest one page food sparks website design without any framework/libraries or any third party plugins </p>
                          <div className="tools">
                              <div className="features">
                                 <li>HTML</li>
                                 <li>CSS</li>
                              </div> 
                          </div>
                        
                          <hr />
                          <div className="href">
                            <a href="https://github.com/iasraful1971/food-sparks.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://iasraful1971.github.io/food-sparks/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                      </div>
                      <div className="blog-colum mt-5">
                      <img className="img-fluid" src={jsBangla} alt="" />
                          <h3>JS Bangladesh Clone</h3>
                          <p>Here I tried to clone <Link style={{textDecoration:'none'}} target="_blank"  to="https://jsbangladesh.com/">Js Bangladesh</Link> Website.But I couldn't complited the project for lack of times. </p>
                          <div className="tools">
                              <div className="features">
                                  <li>HTML</li>
                                  <li>CSS</li>
                                  <li>Bootstrap5</li>
                                  <li>Javascript</li>
                              </div> 
                          </div>
                        
                          <hr />
                             <div className="href">
                            <a href="https://github.com/iasraful1971/js-bangladesh-clone.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://jsbangladesh.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                      </div>
                      <div className="blog-colum mt-5">
                      <img className="img-fluid" src={cbr} alt="" />
                          <h3>cbr-honda</h3>
                          <p>This is another simple one page  website design of cbr honda without any framework/libraries or any third party plugins .</p>
                          <div className="tools">
                              <div className="features">
                                  <li>HTML</li>
                                  <li>CSS3</li>
                                  
                              </div> 
                          </div>
                        
                          <hr />
                          <div className="href">
                            <a href="https://github.com/iasraful1971/cbr-hunda.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://iasraful1971.github.io/cbr-hunda/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>

                      </div>
                      <div className="blog-colum mt-5">
                      <img className="img-fluid" src={manpo} alt="" />
                          <h3>Designer Portfolio</h3>
                          <p>The website is a designer portfolio. It is nicely colour combination and sliding website. And all device friendly</p>
                          <div className="tools">
                              <div className="features">
                                  <li>HTML</li>
                                  <li>CSS</li>
                                  <li>Bootsrap5</li>
                                  <li>JQuery</li>
                              </div> 
                          </div>
                        
                          <hr />
                          <div className="href">
                            <a href="https://iasraful1971.github.io/amazing-portfolio/" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://github.com/iasraful1971/amazing-portfolio.git"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                        
                      </div>
                      
                  </div>

            </div>

        </>
    );
};

export default Portfolio;