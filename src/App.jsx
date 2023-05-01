import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/acesso/Login';
import Cadastro from './pages/acesso/Cadastro';
import RecuperarSenha from './pages/acesso/RecuperarSenha';
import Perfil from './pages/perfil/Perfil'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </div>
  );
}

export default App;
