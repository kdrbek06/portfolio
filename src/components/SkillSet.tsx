import Card from './Card';
import { IoLogoJavascript } from 'react-icons/io';


export default function SkillSet () {
  return (
    <div className="skillContainer">

      <div>
          <h3>Skillset</h3>
      </div>

      <div className="card-group">
        <Card Icon={IoLogoJavascript} text={"this card is for react skills"} title={"JavaScript"}/>
        <Card Icon={IoLogoJavascript} text={"this card is for react skills"} title={"React"}/>
        <Card Icon={IoLogoJavascript} text={"this card is for react skills"} title={"PHP"}/>
        <Card Icon={IoLogoJavascript} text={"this card is for react skills"} title={"Lavarel"}/>
      </div>
    </div>
  );
}

