import Contact from "./Contact";


export default function AboutMe() {
  return (
    <div className="aboutContainer" id="aboutMe">

      <div className="aboutContact">
        <Contact id="aboutContact" />
      </div>

      <div className="aboutMe">
        <p className="aboutTextTitle">Hi! I'm <strong>Kadir Bek</strong></p>
        <p>Fullstack Web Developer with curiosity and passion in Becode. d I’m currently at the final stage of the full stack web developer training in BeCode. My contract
will end on 3 December 2021 and I’m looking for a software developer position or internship. </p><br />
      </div>
      
    </div>
  );
}

