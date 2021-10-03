import Project from "./Project";
import project1 from "../img/project1.jpeg";
import project2 from  "../img/project2.png"
import WeatherApp from "../img/weatherapp.png"

const PROJECTS = [
  {
    image: WeatherApp,
    title: "Weather App - JavaScript",
    text: "This is a modern Javascript Weather Forecast Application.",
    githubLink: "https://github.com/kdrbek06/modern-javascript-application",
    liveLink: "https://kdrbek06.github.io/modern-javascript-application"
  },
  {
    image: project2,
    title: "Pokemon Cards - PHP",
    text: "A PHP CRUD project with a nice and simple interface",
    githubLink: "https://github.com/kdrbek06/crud",
    liveLink: "https://github.com/kdrbek06/crud"
  },
  {
    image: WeatherApp,
    title: "React project",
    text: "This is my first project",
    githubLink: "#",
    liveLink: "#"
  },
  {
    image: project1,
    title: "React project",
    text: "This is my first project",
    githubLink: "#",
    liveLink: "#"
  }
]


export default function Portfolio () {
  return (
    <div className="portfolioContainer" id="portfolio">

      <div>
        <h2>Portfolio</h2><br />
      </div>

      <div className="portfolioCards">
        {PROJECTS.map((project) => <Project {...project}/>)}
      </div>
      
    </div>
  );
}
