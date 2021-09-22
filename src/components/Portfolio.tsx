import Project from "./Project";
import project1 from "../img/project1.jpeg";

const PROJECTS = [
  {
    image: project1,
    title: "React project",
    text: "This is my first project"
  },
  {
    image: project1,
    title: "React project",
    text: "This is my first project"
  },
  {
    image: project1,
    title: "React project",
    text: "This is my first project"
  },
  {
    image: project1,
    title: "React project",
    text: "This is my first project"
  },
]


export default function Portfolio () {
  return (
    <div>

      <div>
        <h3>Portfolio</h3><br />
      </div>

      <div className="card-group">
        {PROJECTS.map((project) => <Project {...project}/>)}
      </div>
      
    </div>
  );
}
