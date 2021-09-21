import { IconType } from "react-icons";





export interface IAppProps {
    Icon: IconType;
    text: string;
    title: string;
}

export default function Card ({Icon, text, title}: IAppProps) {

  return (
    <div className="card">
        <Icon/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </div>
    </div>
  );
}
