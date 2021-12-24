import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import mine from '../../images/asraful style picture.png';
import './about.css';
import Education from './Edu/Education';
import Services from './Services/Service/Services';
import Skills from './Services/Skills/Skills';


  
const About = () => {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <>
            <div className="section__margin about__section">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 fixed-part">
                                <img data-aos='fade-down' width="300px" className="img-fluid" src={mine} alt="" />
                                <h2>I'm Muhammad Asraful</h2>
                                <div className="auto-type d-flex">
                                <h4>
                                <Typewriter
                                      options={{
                                       strings: ['A React.Js Developer', 'Javascript Developer','Wordpress Developer', 'Woocommerce Developer'],
                                       autoStart: true,
                                       loop: true,
                                  }}
                             />
                              </h4>
                                </div>
                               
                                <p style={{textAlign:'justify'}}  data-aos='fade-up'>
                                An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React, Node JS, Express JS, Mongo DB.Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 1+ years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.
                                </p>
                                <button  data-aos='fade-up'>download cv</button>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <Services/>
                        </div>
                    </div>
                    <div className="row py-5 mt-5">
                    <div className="about-heading">
                   <h1 className="skill-head"> My Skills and Experiences</h1>
                    <div className="border" ></div>

                </div>
                        <div className="col-lg-4 col-md-4 col-12 col-12">
                            <Education/>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12 col-12">
                            <Skills/>
                        </div>
                       
                        
                    </div>
            </div>
        </>
    );
};

export default About;

// I started as a front-end software engineer, then worked as a full-stack web developer for a while. I was later forced to stop working as a developer and find a different way of making a living because of the harsh circumstances and hardships. I was lucky enough to receive a full scholarship awarded to 30 out of 3000 other candidates, to undertake a 4-month intensive full-stack boot camp based on the world-class curriculum of the silicon-valley Hack Reactor in RBK-Jordan. I Graduated as a full-stack web developer.

// I love creating high-quality and appealing websites. I believe that web design and development are a form of art, that requires passion and dedication.

// I love a good challenge, and I'm always on the lookout for new trends and technologies because I love learning new things. I've worked solo and in teams, and I love working and collaborating with other developers.