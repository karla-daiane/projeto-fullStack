import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navbar from '../../components/Navbar';

function Jogando() {

  return (
    <div className='container-jogando'>
      <Header />
      <Navbar />

      <div className='content-jogando'>
        <p>Jogando</p>
      </div>
    </div>
  );
}

export default Jogando;
