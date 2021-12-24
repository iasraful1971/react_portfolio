import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import pic from '../../images/animation.gif';
import './hero.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <>
         <div className="hero__section section__margin">
            <div  data-aos="fade-right" className="hero__section-text">
                <p>Hello there , I'm</p>
                <h1>Muhammad Asraful</h1>
                <ul className="text-bold">
                    <li>Web Developer</li>
                    <li>Programmer</li>
                </ul>
                <p className="description">


A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.

</p>
<div className="button-area">
   <Link to="/about">
  <button>more about me</button>
  </Link>
    <Link to="/contact">
    <button className="contact">get in touch</button>
    </Link>
</div>
            </div>
            <div  data-aos="fade-left" className="hero__sention-img">
                <img src={pic} alt="" />
            </div>
         
         </div>   

        </>
    );
};

export default HeroSection;