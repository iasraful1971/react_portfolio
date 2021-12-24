import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeContact.css';
const HomeContact = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <>
        <div  data-aos="fade-up" className="section__margin home__contact py-5">
                <div className="w">
                <h6>What's Next?</h6>
                <h1>Get In Touch</h1>
                <p>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message.  I'll try my best to get back to you!</p>
                    <Link to="/contact"><button>Say Hello</button></Link>
                </div>
        </div>
            
        </>
    );
};

export default HomeContact;