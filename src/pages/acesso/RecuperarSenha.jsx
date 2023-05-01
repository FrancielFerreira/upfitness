import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.png';
import styles from './Style.module.css';

function RecuperarSenha() {
  return (
    <div>

      <div className={styles.container}>
        <div className={styles.form}>

          <div className={styles.container360}>

            <div className={styles.formHeader}>
              <Link to="/"><img src={Logo} alt="logotipo" /></Link>
              <h1>Esqueceu a senha?</h1>
              <p>Digite o endereço de e-mail que você usou no cadastro que enviaremos instruções para redefinir sua senha.</p>
            </div>

            <form action="#">

              <div className={styles.formInput}>
                <label htmlFor="email">Email de recuperação</label>
                <input type="email" id="email" />
              </div>

              <div className={styles.formBtn}>
                <button className={styles.btn}>Enviar Email</button>
                <Link to="/login">Fazer login</Link>
              </div>

            </form>

          </div>

        </div>
      </div>

    </div>
  );
}

export default RecuperarSenha;
