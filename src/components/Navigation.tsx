import Logo from '../img/logo192.png'


export default function Navigation () {
  return (
    <div>
        <nav className="navbar">
           <div>
                <a className="navbar-brand" href="/">
                <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Home
                </a>
           </div>
           <div className="navLink">
               <a href="#aboutMe">About Me</a>
               <a href="#skillSet">Skillsets</a>
               <a href="#portfolio">Portfolio</a>
               <a href="#footerContact">Contact</a>
            </div>
        </nav>
    </div>
  );
}