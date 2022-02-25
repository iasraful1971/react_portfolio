import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cuisine from '../../../images/filterapp.png';
import vamix from '../../../images/vamix.png';
import zomato from '../../../images/zomatoapp.png';
import './HomePortfolio.css';

const HomePortfolio = () => {
    useEffect(() => {
        AOS.init({
          duration : 1000
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
                            <img className="img-fluid" src={vamix} alt="" />
                    </div>
                    <div  data-aos='fade-up' className="home__portfolio-container-details col-md-5 col-lg-5 md-sm-12 col-12">
                        <h6>01</h6>
                        <h2>Vamix eCommerce</h2>
                        <p>The multiple page ecommerce web app where people are able to add product to cart and see the details information about products and user may login and register.</p>
                        <div>
                            <ul  className="tools">
                                <li>React.js</li>
                                <li>Firebase</li>
                                <li>Redux</li>
                                <li>Material ui</li>
                                <li>React-Bootstrap</li>
                                <li>Css</li>
                                
                                
                            </ul>
                        </div>
                        <div className="href">
                            <a href="https://github.com/iasraful1971/vamix_frontend_ecommerce.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://vamix.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>

                {/* port folio  */}
                <div className="home__portfolio-container py-5 my-5 row">
                    <div  data-aos='fade-up' className="home__portfolio-container-img col-md-7 col-lg-7 md-sm-12 col-12">
                            <img className="img-fluid" src={zomato} alt="" />
                    </div>
                    <div  data-aos='fade-down' className="home__portfolio-container-details col-md-5 col-lg-5 md-sm-12 col-12">
                        <h6>02</h6>
                        <h2>Zomato Food</h2>
                        <p>A Single page restaurant web app with amazing carousel and modern design website using react.js. In this project you my filtering items easily.</p>
                        <div>
                            <ul  className="tools">
                                <li>React.js</li>
                                <li>Firebase</li>
                                <li>Fetch API</li>
                                <li>Use Context</li>
                                <li>Slick Slider</li>
                                <li>Css</li>
                                
                            </ul>
                        </div>
                        <div className="href">
                            <a href="https://github.com/iasraful1971/zomato_frontend.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://zomato-site.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>

                {/* port folio  */}
                <div className="home__portfolio-container row">
                    <div  data-aos='fade-down' className="home__portfolio-container-img col-md-7 col-lg-7 md-sm-12 col-12">
                            <img className="img-fluid" src={cuisine} alt="" />
                    </div>
                    <div  data-aos='fade-up' className="home__portfolio-container-details col-md-5 col-lg-5 md-sm-12 col-12">
                        <h6>03</h6>
                        <h2>Cuisines Filter</h2>
                        <p>one page web application of Cusines filter by react js. The website is based of filter method. You can filter item in different ways  such as search , selected, star, and price range.</p>
                        <div>
                            <ul  className="tools">
                                
                                <li>React</li>
                                <li>Material Ui</li>
                                <li>React Bootstrap</li>
                                <li>useContext</li>
                                <li>props</li>
                                <li>css</li>
                            </ul>
                        </div>
                        <div className="href">
                            <a href="https://github.com/iasraful1971/react_filter.git" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            </a>
                          <a href="https://react-filteringp.netlify.app/"  rel="noopener noreferrer" target="_blank"> <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>




            </div>
        </>
    );
};

export default HomePortfolio;