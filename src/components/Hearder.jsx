import { Link } from 'react-router-dom';
import Menu from './Menu';
import './Header.css';
import Logo from './../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="logotipo" />
        </Link>
        <Menu />
      </div>
    </header>
  );
}
