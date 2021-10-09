import React, { useState } from "react";
import Logo from '../img/k-letter.png'



export default function Navigation() {


  // Toggle twitch button
  const[toggle, setToggle] = useState(false);

  

  return (
    <div>
      <nav className="navbar">
        <div>
          <a className="navbar-brand" href="/">
            <img src={Logo} width="30" height="30" className="homeLogo" alt="" />
          </a>
        </div>
        
        <a onClick={() => setToggle(!toggle)} className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

        <div className={"navbar-links" + (toggle? " active" : "")}>
          <ul>
            <li><a href="" className="hireMeButton">Hire Me</a></li>
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