import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <p>header</p>
    </header>
  );
}

export default Header;
