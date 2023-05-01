import Logo from './../../assets/logo.png';
import CoverImg from './../../assets/cover-cadastro.jpg';
import styles from './Style.module.css';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <div>
      <div className={styles.container}>
          <div className={styles.cadastro}>
            <div className={styles.formFields}>
              <div className={styles.formHeader}>
                <Link to="/">
                  <img src={Logo} alt="logotipo" />
                </Link>
                <h1>Cadastro Atleta</h1>
              </div>

              <form action="#">
                <div className={styles.formInput}>
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id="Nome" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="sexo">Sexo</label>
                  <input type="text" id="sexo" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" id="cpf" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="matricula">Matrícula</label>
                  <input type="text" id="matricula" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="esporte">Pratica Esporte</label>
                  <input type="text" id="esporte" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="nascimento">Data de Nascimento</label>
                  <input type="password" id="Nascimento" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="senha">Senha</label>
                  <input type="password" id="senha" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="senha2">Confirme a senha</label>
                  <input type="password" id="senha2" />
                </div>

                <div className={styles.formBtn}>
                  <Link to="/recuperar-senha" className={styles.link}>
                    Esqueci a senha
                  </Link>
                  <button className={styles.btn}>Cadastre-se</button>
                  <p>
                    Já possui uma conta? <Link to="/login">Faça login</Link>
                  </p>
                </div>
              </form>

            </div>
            <div className={styles.formImg}>
              <img src={CoverImg} alt="Mulher se exercitando na academia" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Cadastro;
