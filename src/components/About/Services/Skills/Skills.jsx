import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import bootstrap from '../../../../images/bootstrap.bab10aaa.png';
import css from '../../../../images/css.29013fe6.png';
import express from '../../../../images/express.483b10d6.png';
import firebase from '../../../../images/firebase.bff5748e.png';
import github from '../../../../images/github.caeb9ff8.png';
import html from '../../../../images/html.ec102b63.png';
import js from '../../../../images/javas.png';
import materical from '../../../../images/metarial ui.4ee24f56.png';
import mongo from '../../../../images/mongodb.70c82e5a.png';
import node from '../../../../images/node js.8030f6dd.png';
import react from '../../../../images/react.35639ed9.png';
import tailwind from '../../../../images/tailwaind.4025b9f6.png';
import './skills.css';
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return (
        <>
          
           <div className="skills">
           
                    <div className="skills__containers">


                      
                          
                           <div data-aos='fade-up' class="box">
                             <img src={html} alt=""/>
                             <h3>HTML</h3>
                             </div>
                       



                            
                           <div data-aos='fade-up'  class="box">
                             <img src={css} alt=""/>
                             <h3>Css</h3>
                             </div>

                      
                      
                           <div data-aos='fade-up' class="box">
                             <img src={bootstrap} alt=""/>
                             <h3>Bootstrap5</h3>
                             </div>
                        


                 
                           <div data-aos='fade-up' class="box">
                             <img src={tailwind} alt=""/>
                             <h3>Tailwind Css</h3>
                             </div>
                      
                       
                           <div data-aos='fade-up' class="box">
                             <img src={js} alt=""/>
                             <h3>Javascript</h3>
                             </div>
                   
                       
                           <div data-aos='fade-up'  class="box">
                             <img src={react} alt=""/>
                             <h3>React.js</h3>
                             </div>
                  
                    
                           <div data-aos='fade-up'  class="box">
                             <img src={materical} alt=""/>
                             <h3>Materical Ui</h3>
                             </div>
                   
                    
                           <div data-aos='fade-up' class="box">
                             <img src={firebase} alt=""/>
                             <h3>Firebase</h3>
                             </div>
                  
                    
                           <div data-aos='fade-up' class="box">
                             <img src={github} alt=""/>
                             <h3>Github</h3>
                             </div>
               
                 
                           <div data-aos='fade-up'  class="box">
                             <img src={node} alt=""/>
                             <h3>Node.js</h3>
                             </div>
                 
                        
                           <div data-aos='fade-up'  class="box">
                             <img src={express} alt=""/>
                             <h3>Express.js</h3>
                             </div>
                   
                         
                           <div data-aos='fade-up'  class="box">
                             <img src={mongo} alt=""/>
                             <h3>MongoDB</h3>
                             </div>
                   
                           
                        </div>



                        
                    </div>
     
        </>
    );
};

export default Skills;