import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./components/AboutMe"
import Navigation from "./components/Navigation";
import SkillSet from "./components/SkillSet";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";



export default function App() {
    return (
    <div className="container">
        <Navigation/>
        <AboutMe/>
        <SkillSet/>
        <Portfolio/>
        <Contact/>
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
