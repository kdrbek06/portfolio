import Contact from "./Contact";


export default function AboutMe() {
  return (
    <div className="aboutContainer" id="aboutMe">

      <div className="aboutContact">
        <Contact id="aboutContact" />
      </div>

      <div className="aboutProfile">
        <p className="aboutTextTitle">Hi! I'm <strong>Kadir Bek</strong></p>
        <p>Fullstack Web Developer with curiosity and passion in Becode</p><br />
        <a className="hireMe">Hire Me</a>
      </div>
      
    </div>
  );
}

