import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [click , setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         
         <h1>Muhammad Asraful </h1>
          <p>Full Stack web developer, Tech Entrepreneur & Coding Evangelist</p>
         
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            click ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
           
            <li>
              <NavLink to="/portfolio">WORK</NavLink>
            </li>
            <li>
              <NavLink to="/blog">BLOGS</NavLink>
            </li>
            <li>
              <NavLink to="/argument">LET'S ARGUMENTS</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="/"
                target="_href">
               <i class="fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_href">
               <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_href">
              <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_href">
               <i class="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_href">
             <i class="fab fa-stack-overflow"></i>
              </a>
            </li>
           
            <li>
              <a
                href="/"
                target="_href">
                    <i class="fab fa-dribbble-square"></i>
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <Link to="/" onClick={() => handleClick(true)}>
           {
               click ? 
               
               <FaTimes/> : 
               <GiHamburgerMenu /> 
           }
           
            </Link>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
//asrad