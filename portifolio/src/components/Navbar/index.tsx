import "./styles.css";
import Brand from "./../../assets/img/brand.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Action: React.FC<{ href: string; icon: string }> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <i className={icon} />
  </a>
);

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded((value) => !value);
  };

  return (
    <nav className={expanded ? "nav expanded" : ""}>
      <div className="navbar-brand">
        <Link to="/">
          <img src={Brand} alt="brand" />
        </Link>
        <div className="navbar-burger" onClick={toggle}>
          &#9776;
        </div>
      </div>
      <div className="navbar-content">
        <div className="navbar-links">
          <Link to="/" onClick={toggle}>Home</Link>
          <Link to="/portifolio" onClick={toggle}>Portifolio</Link>
          <Link to="/about" onClick={toggle}>About</Link>
        </div>
        <div className="navbar-actions">
          <Action href="#" icon="fab fa-linkedin" />
          <Action href="https://github.com/jrcodev" icon="fab fa-github" />
          <Action href="#" icon="fas fa-envelope" />
          <Action href="#" icon="fab fa-medium" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
