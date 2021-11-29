import "./navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="right-navbar">
          <p className="logo">Lux</p>
        </div>
        <div className="center-navbar">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Blog</a>
        </div>
        <div className="left-navbar">
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
