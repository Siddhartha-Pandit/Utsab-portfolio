import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Utsab</div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <li className="close-icon" onClick={toggleMenu}>
            ✖
          </li>
        )}
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact</a></li>
        <li style={{ cursor: "pointer" }}>
          <div
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <i className="fas fa-moon"></i> // FontAwesome moon icon for dark mode
            ) : (
              <i className="fas fa-sun"></i> // FontAwesome sun icon for light mode
            )}
          </div>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
