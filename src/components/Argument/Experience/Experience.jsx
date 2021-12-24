import React, {useEffect} from 'react';
import CountUp from 'react-countup';
import './Experience.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Experience = () => {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);


    return (
        <>
          <div className="experience__container">
              <div className="experence-box">
                  <div data-aos='fade-down' className="experience">
                 
                        <h1><CountUp start={0} end={1.5} duration={1} />+</h1>
                   
                      <h4>Years Of Experience</h4>
                  </div>

                  <div data-aos='fade-down'  className="experience">
                  <h1><CountUp start={0} end={35} duration={3} />+</h1>
                      <h4>Porject Completed</h4>
                  </div>

                  <div data-aos='fade-up'  className="experience">
                  <h1><CountUp start={0} end={5} duration={2} />+</h1>
                      <h4>Happy Clients</h4>
                  </div>
                 
                  <div data-aos='fade-up'  className="experience">
                  <h1><CountUp start={0} end={3} duration={1} />+</h1>
                      <h4>Awards Won</h4>
                  </div>
              </div>
          </div>  
        </>
    );
};

export default Experience;