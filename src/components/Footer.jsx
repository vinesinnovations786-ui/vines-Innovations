import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Winds Innovations</h3>
          <p>Transforming ideas into digital reality.</p>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Graphic Design</li>
            <li>Video Editing</li>
            <li>Web Development</li>
            <li>Software Development</li>
            <li>Photography</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
          <div className="contact-info">
             <Mail size={16} /> <span>contact@windsinnovations.com</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Winds Innovations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
