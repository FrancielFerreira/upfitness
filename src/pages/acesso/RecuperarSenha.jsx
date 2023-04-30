import Logo from './../../assets/logo.png';
import './Style.css';

function RecuperarSenha() {
  return (
    <div>

      <div className="content container">
        <div className="form">

          <div className="container360">

            <div className="form-header">
              <a href="/"><img src={Logo} alt="logotipo" /></a>
              <h1>Esqueceu a senha?</h1>
              <p>Digite o endereço de e-mail que você usou no cadastro que enviaremos instruções para redefinir sua senha.</p>
            </div>

            <form action="#">

              <div className="form-input">
                <label htmlFor="email">Email de recuperação</label>
                <input type="email" id="email" />
              </div>

              <div className="form-btn">
                <button className="btn">Enviar Email</button>
                <a href="/login">Fazer login</a>
              </div>

            </form>

          </div>

        </div>
      </div>

    </div>
  );
}

export default RecuperarSenha;
