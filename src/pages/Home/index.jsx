import Header from '../../components/Header';
import './styles.css'
import Gamepad from '../../assets/old-game-controller.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../components/Modal/index';

function Home() {

  return (
    <div className='container-home'>
      <Header />

      <div className='content-home'>
        <img src={Gamepad} alt="Ilustração gamepad" />
        <form>
          <div className="form">
            <input type="text" className="form-control" placeholder="Pesquisar Jogo" required />
          </div>
          <Modal textBtn='Pesquisar' />
        </form>
      </div>

    </div>
  );
}

export default Home;
