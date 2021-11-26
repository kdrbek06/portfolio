import Project from "./Project";
import project1 from "../img/project1.jpeg";
import Pokeball from  "../img/pokeball.png"
import WeatherApp from "../img/weather-app.png"

const PROJECTS = [
  {
    image: WeatherApp,
    title: "Weather App - JavaScript",
    text: "This is a modern Javascript Weather Forecast Application.",
    githubLink: "https://github.com/kdrbek06/modern-javascript-application",
    liveLink: "https://kdrbek06.github.io/modern-javascript-application"
  },
  {
    image: Pokeball,
    title: "Pokemon Cards - PHP",
    text: "A PHP CRUD project with a nice and simple interface",
    githubLink: "https://github.com/kdrbek06/crud",
    liveLink: "https://github.com/kdrbek06/crud"
  },
  {
    image: WeatherApp,
    title: "Laravel project",
    text: "COMING SOON...",
    githubLink: "#",
    liveLink: "#"
  },
  {
    image: project1,
    title: "PHP project",
    text: "COMING SOON...",
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
