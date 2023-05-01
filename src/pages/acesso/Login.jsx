import Logo from './../../assets/logo.png';
import styles from './Style.module.css';

function Login() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.container360}>
            <div className={styles.formHeader}>
              <a href="/">
                <img src={Logo} alt="logotipo" />
              </a>
              <h1>Login</h1>
            </div>

            <form>
              <div className={styles.formInput}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>

              <div className={styles.formInput}>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" />
              </div>

              <div className={styles.formBtn}>
                <a href="/recuperar-senha" className={styles.link}>
                  Esqueci a senha
                </a>
                <button className={styles.btn}>Entrar</button>
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

