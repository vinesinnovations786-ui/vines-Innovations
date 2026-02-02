import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-page page-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="about-content"
        >
          <div className="glass-card about-card">
            <h1 className="page-title">About <span className="gradient-text">Winds Innovations</span></h1>
            <p className="about-text">
              Founded with a vision to revolutionize the digital landscape, 
              <strong> Winds Innovations</strong> is a collective of creative minds and technical wizards. 
              We believe in the power of innovation to transform businesses.
            </p>
            <p className="about-text">
              Our team consists of industry experts who are passionate about their craft. 
              From the pixel-perfect designs of our graphics team to the robust code written by our developers, 
              excellence is our standard.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
