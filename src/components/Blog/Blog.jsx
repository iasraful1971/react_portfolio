import React from 'react';
import reactDom from '../../images/1_sX8rBJBol5dBp5WIJQrYyw.png';
import js from '../../images/js.jpeg';
import mern from '../../images/mern.jpg';
import react from '../../images/react-blog.png';
import firebase from '../../images/reactFirebase.png';
import wordpress from '../../images/wordpress.jpg';
const Blog = () => {
    return (
        <>
            <div className="section__margin">
                <div className="blog-heading">
                <h1> My blogs</h1>
                    <div className="border" ></div>

                </div>
            <div className="home__blog-container py-5">
            <a rel="noopener noreferrer" href='https://medium.com/@iasraful107/a-simple-introduction-to-react-js-455e1eb01391' target="_blank">
                      <div className="blog-colum">
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
                        <div className="blog-colum">
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

                        <a rel="noopener noreferrer" href="https://medium.com/@iasraful107/a-little-about-javascript-and-its-importance-in-modern-times-3b37b9fcb33b" target="_blank">
                        
                        <div className="blog-colum">
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

                        
                      <a rel="noopener noreferrer" href="https://medium.com/@iasraful107/wordpress-developers-in-demand-in-2021-66afb348163c" target="_blank">
                      <div className="blog-colum my-5">
                        <img className="img-fluid" src={wordpress} alt="" />
                            <h3>WordPress developers in demand in 2021?</h3>
                            <p>More than 35 percent of internet sites are WordPress, so a massive demand for qualified WordPress developers is not surprising.</p>
                            <div className="tools">
                                <div className="features">
                                    <li>WordPress</li>
                                    <li>Wp</li>
                                </div>
                                <div className="date">
                                    <span>December 2, 2021</span>
                                </div>
                            </div>
                        </div>
                      </a>


                        <a rel="noopener noreferrer" href="https://medium.com/@iasraful107/the-relation-react-with-firebase-efa7a386fa91" target="_blank">
                        <div className="blog-colum my-5">
                        <img className="img-fluid" src={firebase} alt="" />
                            <h3>The relation react with firebase And the Advantages.</h3>
                            <p>A lot of modern-day fatigue from developing web applications results from the number of technologies and services we have to use…</p>
                            <div className="tools">
                                <div className="features">
                                    <li>React</li>
                                    <li>Firebase</li>
                                </div>
                                <div className="date">
                                    <span>December 10, 2021</span>
                                </div>
                            </div>
                        </div>
                        </a>

                       <a rel="noopener noreferrer" href="https://medium.com/@iasraful107/a-little-bit-about-the-mern-stack-2fc1e381ca99" target="_blank">
                       <div className="blog-colum my-5">
                        <img className="img-fluid" src={mern} alt="" />
                            <h3>A little bit About the MERN stack developers.</h3>
                            <p>The technology stack is a set of frameworks and tools used to develop a software product. This set of frameworks and tools are very specifically chosen to work togethe..</p>
                            <div className="tools">
                                <div className="features">
                                    <li>MERN</li>
                                    <li>Web-Dev</li>
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

export default Blog;