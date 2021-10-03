
export interface IAppProps {
    image: any;
    title: string;
    text: string;
    githubLink: any;
    liveLink: any;
}

export default function Project({ image, title, text, githubLink, liveLink }: IAppProps) {
    return (
        <div className="projectCard">

            <img src={image} className="portfolioImage" alt="..." />

            <div className="projectText">

                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={liveLink} className="btn btn-primary">Project Page</a>
                <a href={githubLink} className="btn btn-primary">Github Page</a>

            </div>
        </div>
    );
}
