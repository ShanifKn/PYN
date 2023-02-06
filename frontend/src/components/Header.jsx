import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="brand">
          <Link to="/">Movie Club</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
