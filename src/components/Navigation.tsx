import React, { useState, useEffect } from "react";
import Logo from '../img/k-letter.png'
import { useMediaQuery } from 'react-responsive';

// import Resume from './../documents/resume.pdf'


export default function Navigation() {


  // Toggle twitch button
  const[toggle, setToggle] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 575px)' })

  // Hamburger twitch menu set closed first
  useEffect(() => {
    if(!isMobile){setToggle(false)}
  
  }, [isMobile]);
  


  

  return (
    <div>
      <nav className="navbar">
        <div className="text-center">
          <a className="navbar-logo " href="/">
            <img src={Logo} width="45" height="45" className="home-logo" alt="" />
          </a>
        </div>
        
        <a onClick={() => setToggle(!toggle)} className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

        <div className={"navbar-links" + (toggle? " active" : "")}>
          <ul>
            <li><a href={require('./../documents/kadir-bek-resume.pdf').default} className="hireMeButton" data-toggle="tooltip" data-placement="left" title="Click here to download the resume" download>Download CV</a></li>
            <li><a href="#aboutMe">About Me</a></li>
            <li><a href="#skillSet">Skillsets</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#footerContact">Contact</a></li>
          </ul>

        </div>
      </nav>
    </div>
  );
}