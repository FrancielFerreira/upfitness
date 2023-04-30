import './Button.css'

function Home() {
  return (
    <div>
      <ul>
        <li><a className="btn" href="/cadastro">Cadastre-se</a></li>
        <li><a className="btn-alt" href="/login">Login</a></li>
      </ul>
    </div>
  );
}

export default Home;
