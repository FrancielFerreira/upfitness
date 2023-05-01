import { Link } from 'react-router-dom';
import Header from '../../components/Hearder';
import Hero from './Hero';

export default function Home() {
  return (
    <>
      <Header />

      {/**Link para o perfil, excluir após configurar */}
      <Link
        style={{
          position: 'fixed',
          top: '12px',
          left: '50%',
          transform: 'translate3d(-50%, 0, 0)',
          background: '#555',
          color: '#fff',
          padding: '12px 24px',
          textDecoration: 'none',
          zIndex: '10',
        }}
        to="/perfil"
      >
        Perfil
      </Link>

      <Hero />
    </>
  );
}
