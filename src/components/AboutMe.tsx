import Pp from "../img/pp.png"


export default function AboutMe () {
  return (
    <div className="aboutContainer" id="aboutMe">
        <div className="aboutText">
            <p className="aboutTextTitle">Hi! I'm <strong>Kadir Bek</strong></p>
            <p>Fullstack Web Developer with curiosity and passion in Becode</p>
        </div>
        <div className="profilPicture">
          <img src={Pp} alt="" />
        </div>
    </div>
  );
}

