import Logo from './../../assets/logo.png';
import './Style.css';

function Login() {
  return (
    <div>
      <div className="content container">
        <div className="form">
          <div className="container360">
            <div className="form-header">
              <a href="/">
                <img src={Logo} alt="logotipo" />
              </a>
              <h1>Login</h1>
            </div>

            <form>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>

              <div className="form-input">
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" />
              </div>

              <div className="form-btn">
                <a href="/recuperar-senha" className="link">
                  Esqueci a senha
                </a>
                <button className="btn">Entrar</button>
                <p>
                  Ainda não possui uma conta? <a href="/cadastro">Cadastre-se</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

