import Logo from '../img/logo192.png'


export default function Navigation () {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
           <div>
                <a className="navbar-brand" href="/">
                <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Welcome My Portfolio
                </a>
           </div>
           <div className="navLink">
               <a href="">About Me</a>
               <a href="">Skillsets</a>
               <a href="">Portfolio</a>
               <a href="">Contact</a>
            </div>
        </nav>
    </div>
  );
}