import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <h1>SwiftRides</h1>
<Navbar/>
      <div className="controls">
        <button>Login</button>
        <button>Sign-up</button>
        <button>Dark mode</button>
      </div>
    </header>
  );
}

export default Header;
