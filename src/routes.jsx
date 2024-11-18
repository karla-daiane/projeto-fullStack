import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Jogando from './pages/Jogando';
import QueroJogar from './pages/QueroJogar';
import Jogados from './pages/Jogados';


function MainRoutes(){

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Cadastro' element={<Cadastro />} />
            <Route path='/Jogando' element={<Jogando />} />
            <Route path='/QueroJogar' element={<QueroJogar />} />
            <Route path='/Jogados' element={<Jogados />} />
        </Routes>
    )
}

export default MainRoutes;