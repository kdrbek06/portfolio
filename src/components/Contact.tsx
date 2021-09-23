import { IconContext } from "react-icons";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";


export default function Contact() {




  return (
    <div className="contactContainer">
      <div>
        <h2>Contact</h2>
        <p>I'm eager to hear from you! I'm available for work</p>
      </div>

      <IconContext.Provider value={{size:"1.3em"}}>

        <div className="contactLinks">

          <a href="https://www.linkedin.com/in/kdrbek/"><SiLinkedin /></a>
          <a href="https://github.com/kdrbek06/"><SiGithub /></a>
          <a href="https://discordapp.com/users/405814490433585163/"><SiDiscord /></a>
          <a href="https://www.instagram.com/kdrbek/"><SiInstagram /></a>
          <a href="https://twitter.com/kadirbek/"><SiTwitter /></a>

        </div>

      </IconContext.Provider>


    </div>

  );
}
