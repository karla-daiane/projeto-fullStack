import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Logotipo from '../../assets/logotipo-cut.png';

function Cadastro() {
    return (
        <div className='container-cadastro'>
            <img src={ Logotipo } alt="Logo Lowprice Gamers" />
            <form action='http://localhost:5173/projeto-fullStack/backend/actions/cadastrar.php' method='post'>
                <div className="form">
                    <input type="text" name='nome' className="form-control" placeholder="Nome" required/>
                </div>
                <div className='form'>
                    <input type="email" name='email' className="form-control" placeholder="Email" required/>
                </div>
                <div className="form">
                    <input type="tel" name='telefone' className="form-control" placeholder="Telefone" required/>
                </div>
                <div className="form">
                    <input type="text" name='endereco' className="form-control" placeholder="Endereço" required/>
                </div>
                <div className="form">
                    <input type="text" name='nome_usuario' className="form-control" placeholder="Nome de usuário" required/>
                </div>
                <div className="form">
                    <input type="password" name='senha' className="form-control" placeholder="Senha" required/>
                </div>
                <button type="submit" className="btn btn-primary">{/*<a href="/projeto-fullStack/Login">Cadastrar</a>*/}Cadastrar</button>
            </form>
            <div className='ancora-login'>
                <p>Já tem uma conta? </p>
                <a href="/projeto-fullStack/Login">Faça o Login</a>
            </div>
        </div>
    );
};

export default Cadastro;