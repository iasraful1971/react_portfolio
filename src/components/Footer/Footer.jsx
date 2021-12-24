import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (

        <div className="gpt3__footer section__margin-nav">
           <hr />
            <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                   <h1>Get In Touch</h1>
                   <p>Here, I provided my social media links. Before going to a argument you firstly contact me.</p>
                   <div className="social-media">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/iasraful1971"
                target="_href">
               <i class="fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/iasraful1971"
                target="_href">
               <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/iasraful1971/"
                target="_href">
              <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/iasraful1971"
                target="_href">
               <i class="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/16839821/asraful"
                target="_href">
             <i class="fab fa-stack-overflow"></i>
              </a>
            </li>
           
            <li>
              <a
                href="https://dribbble.com/iasraful1971"
                target="_href">
                    <i class="fab fa-dribbble-square"></i>
              </a>
            </li>
          </ul>
          </div>
               </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <Link to="/"><p>Home</p></Link>
                   <Link to="/about"> <p>About</p></Link>
                    <Link to="portfolio"><p>Works</p></Link>
                   <Link to="/about"> <p>Skils</p></Link>
                  <Link to="/blog">  <p>Blogs</p></Link>
                    

                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Terms & Conditions</h4>
                    <p>Privacy Policy</p>
                  <Link to="/contact"><p>Contact</p></Link>
                    
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Address</h4>
                    <p>Dhaka, Bangladesh</p>
                
                   <p><a style={{color:'#111', textDecoration:'none'}} href="tel:01633780292" 
                                 rel="opener noreferrer"
                                 target="_blank"
                                >01633780292</a></p>
                   <p><a style={{color:'#111', textDecoration:'none'}} href="mailto:iasraful107@gmail.com" 
                                 rel="opener noreferrer"
                                 target="_blank"
                                >iasraful107@gmail.com</a></p>
                </div>

            </div>
            <div className="gpt3__footer-copy">
                <p>Designed & Developed by Muhammad Asraful</p>
            </div>



            <div className="folk__footer">
              <div className="star">
              <i class="fas fa-star"></i><span> star</span>
              </div>
              <div className='star and'>
                &
              </div>
              <div className='star'>
              <i class="fas fa-code-branch"></i><span> forks</span>
              </div>
              <div className='star button'>
                    <a rel="noopener noreferrer" target='_blank'  href="https://github.com/iasraful1971">
                    <button>by me</button>
                    </a>
              </div>
            </div>


        </div>
    );
};

export default Footer;