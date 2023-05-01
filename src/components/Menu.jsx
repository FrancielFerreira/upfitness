import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Home() {
  return (
    <div>
      <ul>
        <li><Link className={styles.btn} to="/cadastro">Cadastre-se</Link></li>
        <li><Link className={styles.btnAlt} to="/login">Login</Link></li>
      </ul>
    </div>
  );
}

export default Home;
