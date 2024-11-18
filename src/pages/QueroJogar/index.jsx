import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navbar from '../../components/Navbar';

function QueroJogar() {

  return (
    <div className='container-QueroJogar'>
      <Header />
      <Navbar />

      <div className='content-QueroJogar'>
        <p>Quero Jogar</p>
      </div>
    </div>
  );
}

export default QueroJogar;
