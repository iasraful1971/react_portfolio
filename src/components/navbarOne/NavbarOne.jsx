import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './NavbarOne.css';


const NavbarOne = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar section__margin-nav">
          <div className="flexing">
        <div className="gpt3__navbar-links_logo">
         <h2>Muhammad Asraful</h2>
         <p>Full Stack web developer, Tech Entrepreneur & Coding Evangelist</p>
        </div>

    
        <div className="gpt3__navbar-links_container">
            <NavLink to="/home"> HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/portfolio">WORKS</NavLink>
            <NavLink to="/blog">BLOGS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/argument">LET'S AGGREMENT</NavLink>
        </div>
    


      <div className="gpt3__navbar-sign">
      <ul className="social-media-desktop">
  
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





      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#111" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#111" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <NavLink to="/home"> HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/portfolio">WORKS</NavLink>
            <NavLink to="/blog">BLOGS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/argument">LET'S AGREEMENT</NavLink>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>

      
    </div>
  );
};

export default NavbarOne;