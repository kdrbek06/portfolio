import Logo from '../img/logo192.png'


export default function Navigation () {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Welcome My Portfolio
            </a>
        </nav>
    </div>
  );
}