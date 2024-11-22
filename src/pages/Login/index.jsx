import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Logotipo from '../../assets/logotipo-cut.png';

function Login() {
    return (
        <div className='container-cadastro'>
            <img src={ Logotipo } alt="Logo Lowprice Gamers" />
            <form>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Senha</label>
                </div>
                <button type="submit" className="btn btn-primary"><a href="/projeto-fullStack/">Entrar</a></button>
            </form>
            <div className='ancora-cadastro'>
                <p>Não tem uma conta? </p>
                <a href="/Cadastro">Cadastre-se</a>
            </div>
        </div>
    );
};

export default Login;