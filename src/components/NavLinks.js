import { useState } from "react";


import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        
        <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Technologies</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav> 
    </>
  );
};

export default NavLinks;