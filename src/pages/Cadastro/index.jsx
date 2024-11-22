import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Logotipo from '../../assets/logotipo-cut.png';

function Cadastro() {
    return (
        <div className='container-cadastro'>
            <img src={ Logotipo } alt="Logo Lowprice Gamers" />
            <form>
                <div className="form">
                    <input type="text" className="form-control" placeholder="Nome" required/>
                </div>
                <div className='form'>
                    <input type="email" className="form-control" placeholder="Email" required/>
                </div>
                <div className="form">
                    <input type="tel" className="form-control" placeholder="Telefone" required/>
                </div>
                <div className="form">
                    <input type="text" className="form-control" placeholder="Endereço" required/>
                </div>
                <div className="form">
                    <input type="text" className="form-control" placeholder="Nome de usuário" required/>
                </div>
                <div className="form">
                    <input type="password" className="form-control" placeholder="Senha" required/>
                </div>
                <button type="submit" className="btn btn-primary"><a href="/projeto-fullStack/Login">Cadastrar</a></button>
            </form>
            <div className='ancora-login'>
                <p>Já tem uma conta? </p>
                <a href="/Login">Faça o Login</a>
            </div>
        </div>
    );
};

export default Cadastro;