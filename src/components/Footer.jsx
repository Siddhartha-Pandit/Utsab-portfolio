import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo or Name */}
        <div className="footer-logo">
          <h3>Utsab Sapkota</h3>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <ul>
            <li>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>Made by Siddhartha Pandit. &copy; {new Date().getFullYear()}  All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
