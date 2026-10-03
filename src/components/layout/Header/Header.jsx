import { Link, NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Hirely
        </Link>

        <nav className="header__nav">
          <NavLink to="/jobs">Find Jobs</NavLink>
          <NavLink to="/applications">My Applications</NavLink>
          <NavLink to="/saved">Saved Jobs</NavLink>
        </nav>

        <div className="header__actions">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
