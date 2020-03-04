import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h3>
          <Link to="/">
            <i className="fas fa-code" /> Resto Hub
          </Link>
        </h3>
      </nav>
    </div>
  );
};

export default Navbar;
