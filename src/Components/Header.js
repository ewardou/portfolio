import React from "react";
import "../style/Header.css";

function Header() {
  return (
      <header>
        <nav>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
  );
}

export default Header;
