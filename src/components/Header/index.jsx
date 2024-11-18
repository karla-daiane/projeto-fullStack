import { Link } from 'react-router-dom';
import './styles.css';
import Logotipo from '../../assets/logotipo-cut.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    return (
        <header>
            <img src={Logotipo} alt="Logo Lowprice Gamers" />
            <div>
                <Link to='/'>Home</Link>
                <Link to='/Jogando'>Perfil</Link>
                <Link to='/Login'>Login</Link>
            </div>
        </header>
    );
}

export default Header;