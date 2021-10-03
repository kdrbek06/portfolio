import Pp from "../img/pp.png"
import Contact from "./Contact";


export default function AboutMe() {
  return (
    <div className="aboutContainer" id="aboutMe">
      <div className="aboutContact">
        <Contact />
      </div>
      <div className="aboutProfile">
        <div className="aboutText">
          <p className="aboutTextTitle">Hi! I'm <strong>Kadir Bek</strong></p>
          <p>Fullstack Web Developer with curiosity and passion in Becode</p><br />
          <a className="hireMe">Hire Me</a>
        </div>
        <div className="profilPicture">
          {/* <img src={Pp} alt="" /> */}
        </div>
      </div>

    </div>
  );
}

