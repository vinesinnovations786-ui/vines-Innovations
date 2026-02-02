import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          vines <span className="gradient-text">Innovations</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {['/', '/services', '/about', '/contact'].map((path) => (
            <li key={path}>
              <Link 
                to={path} 
                className={`nav-link ${isActive(path) ? 'active' : ''}`}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
           {['/', '/services', '/about', '/contact'].map((path) => (
            <li key={path}>
              <Link 
                to={path} 
                className={`mobile-nav-link ${isActive(path) ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
