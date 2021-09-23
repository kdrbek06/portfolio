import Project from "./Project";
import project1 from "../img/project1.jpeg";
import WeatherApp from "../img/weatherapp.png"

const PROJECTS = [
  {
    image: WeatherApp,
    title: "JavaScript project",
    text: "This is a modern Javascript Weather Forecast Application.",
    githubLink: "https://github.com/kdrbek06/modern-javascript-application",
    liveLink: "https://kdrbek06.github.io/modern-javascript-application"
  },
  {
    image: project1,
    title: "React project",
    text: "This is my first project",
    githubLink: "https://github.com/kdrbek06/crud/tree/main/Starter-pack",
    liveLink: "#"
  },
  {
    image: project1,
    title: "React project",
    text: "This is my first project",
    githubLink: "https://github.com/kdrbek06/crud/tree/main/Starter-pack",
    liveLink: "#"
  },
  {
    image: project1,
    title: "React project",
    text: "This is my first project",
    githubLink: "https://github.com/kdrbek06/crud/tree/main/Starter-pack",
    liveLink: "#"
  }
]


export default function Portfolio () {
  return (
    <div className="portfolioContainer" id="portfolio">

      <div>
        <h2>Portfolio</h2><br />
      </div>

      <div className="card-group">
        {PROJECTS.map((project) => <Project {...project}/>)}
      </div>
      
    </div>
  );
}
