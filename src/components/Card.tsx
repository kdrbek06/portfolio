import { IconType } from "react-icons";
import { readConfigFile } from "typescript";



// Icon is a component (because it is a JSX.element) so we have to use the Icon as a component and components have to start with capital letter.

export interface IAppProps {
    Icon: IconType;
    text: string;
    title: string;
}

export default function Card ({Icon, text, title}: IAppProps) {

  return (
    <div className="card">
        <Icon className="skill-icon responsive-img" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </div>
    </div>
  );
}



// width={75} height={75}