import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import bug from '../../../../images/bug.c8ea6b59.png';
import capture from '../../../../images/code.2e0870f2.png';
import responsive from '../../../../images/responsive.png';
import webdesign from '../../../../images/web-design.f721d630.png';
import webdevelopment from '../../../../images/web-development.e943b1aa.png';
import './services.css';

const Services = () => {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <>
            <div className="service__container">
              <div className="service-heading">
                <h1> My Services</h1>
                    <div className="border" ></div>

                </div>

                
                <div className="box__container">

                <div class="box" data-aos="fade-up">
                    <div class="service-icon-box">
                    <img src={webdesign} alt=""  class="service-icon"/>  
                    </div>
                    
                    <h3>WEB DESIGN</h3><p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design</p>
                </div>
                <div class="box" data-aos="fade-up"  duration="2000">
                    <div class="service-icon-box">
                    <img src={webdevelopment} alt=""  class="service-icon"/>  
                    </div>
                    
                    <h3>WEB DEVELOPMENT</h3>
                    <p>Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                </div>
                <div class="box" data-aos="fade-up">
                    <div class="service-icon-box">
                    <img src={webdesign} alt=""  class="service-icon"/>  
                    </div>
                    
                    <h3>WP DEVELOPMENT</h3>
                    <p>WordPress is a Content Management System (CMS), which means it’s a software application that lets you create digital content and publish it online. One of the main differences between using a CMS like WordPress instead of sticking with HTML and CSS is that you avoid the need to individually edit and then reupload each page of a website any time you want to add content.</p>
                </div>
                <div class="box" data-aos="fade-up">
                    <div class="service-icon-box">
                    <img src={capture} alt=""  class="service-icon"/>  
                    </div>
                    
                    <h3>CAPTURE CODE</h3><p>The Code Capture tool allows you easily create screenshots of you LabVIEW code for use in documentation, web-sites, wikis, emails.for creating well a GUI for easy capturing and use of code</p>
                </div>
                <div class="box" data-aos="fade-up">
                    <div class="service-icon-box">
                    <img src={responsive} alt=""  class="service-icon"/>  
                    </div>
                    
                    <h3>RESPONSIVE DESIGN</h3><p>Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, media queries.</p>
                </div>
                <div class="box" data-aos="fade-up">
                    <div class="service-icon-box">
                    <img src={bug} alt=""  class="service-icon"/>  
                    </div>
                    
                    <h3>BUG FIXING</h3><p>A bug fix is a change to a system or product designed to handle a programming bug/glitch. Many different types of programming bugs that create errors with system implementation may require specific bug fixes that are successfully resolved by a development or other IT team.</p>
                </div>
           



                </div>


                
                
            </div>
        </>
    );
};

export default Services;
