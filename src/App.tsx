import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./components/AboutMe"
import Navigation from "./components/Navigation";
import SkillSet from "./components/SkillSet";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";



export default function App() {
    
    



    return (
        <div className="container-fluid">
            <Navigation />
            <AboutMe />
            <SkillSet />
            <Portfolio />
            <div>
                <h2>Contact</h2>
                <p>I'm eager to hear from you! I'm available for work</p>
            </div>
            <Contact id="footerContact" />
            <div className="copy-right">
                <p>Copyright &copy; {new Date().getFullYear()} </p>
            </div>
        </div>
    )

}


// import * as React from 'react';

// export interface IAppProps {
//     name: string;
//     lastname: string;
// }

// export default function App ({name, lastname}:IAppProps) {
//   return (
//     <div>

//     </div>
//   );
// }
