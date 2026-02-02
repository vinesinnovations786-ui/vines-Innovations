import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page page-padding">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="contact-info-section"
          >
            <h1 className="page-title">Get in <span className="gradient-text">Touch</span></h1>
            <p className="contact-desc">
              Have a project in mind? We'd love to hear from you. Let's create something amazing together.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@windsinnovations.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Creative Street, Tech City</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="contact-form-section"
          >
            <form className="glass-card contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
