import Logo from './../../assets/logo.png';
import CoverImg from './../../assets/cover-cadastro.jpg';

function Cadastro() {
  return (
    <div>

      <div className="content container">
        <div className="cadastro">

          <div className="form-fields">

            <div className="form-header">
              <a href="/"><img src={Logo} alt="logotipo" /></a>
              <h1>Cadastro Atleta</h1>
            </div>

            <form action="#">

              <div className="form-input">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="Nome" />
              </div>

              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>

              <div className="form-input">
                <label htmlFor="sexo">Sexo</label>
                <input type="text" id="sexo" />
              </div>

              <div className="form-input">
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" />
              </div>

              <div className="form-input">
                <label htmlFor="matricula">Matrícula</label>
                <input type="text" id="matricula" />
              </div>

              <div className="form-input">
                <label htmlFor="esporte">Pratica Esporte</label>
                <input type="text" id="esporte" />
              </div>

              <div className="form-input">
                <label htmlFor="nascimento">Data de Nascimento</label>
                <input type="password" id="Nascimento" />
              </div>

              <div className="form-input">
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" />
              </div>

              <div className="form-input">
                <label htmlFor="senha2">Confirme a senha</label>
                <input type="password" id="senha2" />
              </div>

              <div className="form-btn">
                <a href="/recuperar-senha" className="link">Esqueci a senha</a>
                <button className="btn">Cadastre-se</button>
                <p>Já possui uma conta? <a href="/login">Faça login</a></p>
              </div>

            </form>
          </div>
          <div className="form-img">
            <img src={CoverImg} alt="Mulher se exercitando na academia" />
          </div>
        </div>
      </div>
      
    </div>
  )

}

export default Cadastro;
