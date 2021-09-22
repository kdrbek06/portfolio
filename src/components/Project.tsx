
export interface IAppProps {
    image: any;
    title: string;
    text: string;
}

export default function Project({ image, title, text }: IAppProps) {
    return (
        <div className="">
            <img src={image} width="250" height="250" className="card-img-top" alt="..."/>
            <div className ="card-body">
            <h5 className ="card-title">{title}</h5>
            <p className ="card-text">{text}</p>
            <a href="#" className ="btn btn-primary">Go to project page</a>
            </div>
        </div>
    );
}
