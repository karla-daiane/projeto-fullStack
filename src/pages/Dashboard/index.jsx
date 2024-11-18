import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Dashboard() {

  return (
    <div className='container-dashboard'>
      <Header />

      <div className='content-dashboard'>
        
      <Navbar />
      </div>
    </div>
  );
}

export default Dashboard;
