import { IconContext } from "react-icons";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";

type ContactProps = {
  id: string;
};
export default function Contact({id}:ContactProps) {
  return (
    <div className="contactContainer" {...{id}}>
      <IconContext.Provider value={{size : "1.5em"}}>
        <div className="contactLinks">
          <a href="https://www.linkedin.com/in/kdrbek" target="_blank" rel="noreferrer"><SiLinkedin /></a>
          <a href="https://github.com/kdrbek06" target="_blank" rel="noreferrer"><SiGithub /></a>
          <a href="https://discordapp.com/users/405814490433585163/" target="_blank" rel="noreferrer"><SiDiscord /></a>
          <a href="https://www.instagram.com/kdrbek/" target="_blank" rel="noreferrer"><SiInstagram /></a>
          <a href="https://twitter.com/kadirbek/" target="_blank" rel="noopener noreferrer"><SiTwitter /></a>
        </div>
      </IconContext.Provider>
    </div>
  );
}
