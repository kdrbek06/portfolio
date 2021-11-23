import Card from './Card';
import { SiReact, SiPhp, SiLaravel } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";


  

const SKILLS = [
  {
    Icon: IoLogoJavascript,
    text: "This card is for JavaScript skills",
    title: "JavaScript",
  },
  {
    Icon: SiReact,
    text: "This card is for react skills",
    title: "React",
  },
  {
    Icon: SiPhp,
    text: "This card is for PHP skills",
    title: "PHP",
  },
  {
    Icon: SiLaravel,
    text: "this card is for Laravel skills",
    title: "Laravel",
  }
];

export default function SkillSet() {
  return (

    <div className="skillContainer" id="skillSet">
      <div className="skillBg"></div>

      <div>
        <h2>Skillset</h2><br />
      </div>

      <div className="card-group">
        {SKILLS.map((skill) => <Card {...skill} />)}
      </div>

    </div>
  );
}




{/* {SKILLS.map(({Icon, text, title}) => <Card Icon={Icon} text={text} title={title}/> */ }


{/* <Card Icon={IoLogoJavascript} text={"this card is for react skills"} title={"JavaScript"}/>
        <Card Icon={SiReact} text={"this card is for react skills"} title={"React"}/>
        <Card Icon={SiPhp} text={"this card is for react skills"} title={"PHP"}/>
        <Card Icon={SiLaravel} text={"this card is for react skills"} title={"Lavarel"}/> */}

