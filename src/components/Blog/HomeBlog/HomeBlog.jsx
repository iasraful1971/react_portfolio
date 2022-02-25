import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import js from '../../../images/js.jpeg';
import react from '../../../images/react-blog.png';
import reactDom from '../../../images/reactRouter.png';
import './HomeBlog.css';
const HomeBlog = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
      
        <>
            
            <div className="section__margin home__blog my-5 pt-5">
                <div className="row">
                 <div className="col-md-7 col-sm-12 col-12 home__blog-header">
                 <div> <h1>My  Articles</h1>  </div> 
                 <div className="border"></div>      
                <Link to="/blog"> <div><button>All Blogs</button></div></Link>
                   </div>
                   <div className="col-md-5 col-sm12 col-12">   
                   </div>
                   </div>

                   <div className="col-md-7 col-sm-12 col-12 home__portfolio-header">
                 
                 
                    
                   </div>


                   
                    <div className="home__blog-container py-5">

                      <a  rel="noopener noreferrer" href='https://medium.com/@iasraful107/a-simple-introduction-to-react-js-455e1eb01391' target="_blank">
                      <div  data-aos="fade-up"  className="blog-colum">
                            <img className="img-fluid" src={react} alt="" />
                            <h3>A simple Introduction to React.js And it's Features</h3>
                            <p>ReactJS is a JavaScript library used for building reusable UI components. According to React official documentation, the following is the…</p>
                            <div className="tools">
                                <div className="features">
                                    <li>React.Js</li>
                                </div>
                                <div className="date">
                                    <span>December 4, 2021</span>
                                </div>
                            </div>
                        </div></a>
                        
                        <a rel="noopener noreferrer" href="https://medium.com/@iasraful107/understanding-react-router-with-a-simple-blog-application-d2f7a2a2de4" target="_blank">
                        <div data-aos="fade-up"  className="blog-colum">
                        <img className="img-fluid" src={reactDom} alt="" />
                            <h3>Understanding React Router with a Simple Blog Application</h3>
                            <p>React router is arguably one of the coolest features there is in React. It is a famous library and familiarity in knowing how to use this…</p>
                            <div className="tools">
                                <div className="features">
                                    <li>React.Js</li>
                                    <li>React-Router</li>
                                </div>
                                <div className="date">
                                    <span>December 7, 2021</span>
                                </div>
                            </div>
                        </div>
                        </a>

                        <a   rel="noopener noreferrer" href="https://medium.com/@iasraful107/a-little-about-javascript-and-its-importance-in-modern-times-3b37b9fcb33b" target="_blank">
                        
                        <div data-aos="fade-up" className="blog-colum">
                        <img className="img-fluid" src={js} alt="" />
                            <h3>A little about Javascript and its importance in modern times</h3>
                            <p>JavaScript is a programming language used primarily by Web browsers to create a dynamic and interactive experience for the user…</p>
                            <div className="tools">
                                <div className="features">
                                    <li>Javascript</li>
                                    <li>JS</li>
                                </div>
                                <div className="date">
                                    <span>December 6, 2021</span>
                                </div>
                            </div>
                        </div>
                        </a>

                    </div>

                   
               
            </div>
        </>
    );
};

export default HomeBlog;