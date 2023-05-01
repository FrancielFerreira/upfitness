import ProfilePicture from './../../assets/perfil.png';
import CardTreino from './../../components/CardTreino'
import styles from './Perfil.module.css';

export default function Perfil() {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.perfil}>
            <header className={styles.perfilInfo}>
              <h1>Perfil do Aluno</h1>

              <nav className={styles.perfilMenu}>
                <ul>
                  <li>Menu</li>
                  <li>Menu</li>
                  <li>Menu</li>
                  <li>Menu</li>
                </ul>
              </nav>

              <div className={styles.perfilFoto}>
                <img src={ProfilePicture} alt="foto do aluno" />
              </div>
            </header>

            <main className={styles.treinamentos}>
              <div className={styles.treinoLista}>
                <CardTreino dia="Segunda" treino="Peito" />
                <CardTreino dia="Terça" treino="Pernas" />
                <CardTreino dia="Quarta" treino="Costas" />
                <CardTreino dia="quinta" treino="Bicípes" />
                <CardTreino dia="Sexta" treino="Ombro" />
                <CardTreino dia="Sábado" treino="Tricípes" />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
