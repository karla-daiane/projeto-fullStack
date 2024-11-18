import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Navbar() {
    const location = useLocation();

    return (
        <div className="navbar container-navbar" id='container-navbar'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to='/Jogando' className={`nav-link ${location.pathname === '/Jogando' ? 'active' : ''}`} aria-current="page" >Jogando</Link>
                </li>
                <li className="nav-item">
                    <Link to='/QueroJogar' className={`nav-link ${location.pathname === '/QueroJogar' ? 'active' : ''}`}>Quero Jogar</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Jogados' className={`nav-link ${location.pathname === '/Jogados' ? 'active' : ''}`}>Jogados</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;