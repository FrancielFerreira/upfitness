import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/acesso/Login';
import Cadastro from './pages/acesso/Cadastro';
import RecuperarSenha from './pages/acesso/RecuperarSenha';
import Perfil from './pages/perfil/Perfil';
import Historico from './pages/perfil/Historico';
import Page404 from './pages/Page404';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
