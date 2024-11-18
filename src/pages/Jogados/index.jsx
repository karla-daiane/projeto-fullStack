import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Navbar from '../../components/Navbar';

function Jogados() {

  return (
    <div className='container-jogados'>
      <Header />
      <Navbar />

      <div className='content-jogados'>
        <p>Jogados</p>
      </div>
    </div>
  );
}

export default Jogados;
