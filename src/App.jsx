import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/acesso/Login';
import Cadastro from './pages/acesso/Cadastro';
import RecuperarSenha from './pages/acesso/RecuperarSenha';

function App() {
  return (
    <div>
      <BrowserRouter>=
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
