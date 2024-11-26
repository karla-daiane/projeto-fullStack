import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Dashboard() {

  return (
    <div className='container-dashboard'>
      <Header />

      <div className='content-dashboard'>
        <h1>Menu do Administrador</h1>
      </div>
    </div>
  );
}

export default Dashboard;
