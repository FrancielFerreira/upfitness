import Menu from './Menu';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Home</h1>
        <Menu />
      </div>
    </header>
  );
}
