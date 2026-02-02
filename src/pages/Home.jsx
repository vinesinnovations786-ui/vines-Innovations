import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Camera, Video, PenTool, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              We Create <span className="gradient-text">Digital Magic</span>
            </h1>
            <p className="hero-subtitle">
              Winds Innovations is your one-stop solution for design, development, and content creation. Detailed perfection in every pixel.
            </p>
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
          </motion.div>
        </div>
        <div className="hero-background-glow"></div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section-padding">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Our Expertise
          </motion.h2>
          
          <div className="services-grid">
            {[
              { icon: <PenTool />, title: 'Graphic Design', desc: 'Branding, logos, and marketing materials that stand out.' },
              { icon: <Video />, title: 'Video Editing', desc: 'Cinematic editing for storytelling that captures attention.' },
              { icon: <Code />, title: 'Web Development', desc: 'Responsive, fast, and modern websites built for growth.' },
              { icon: <Layout />, title: 'Software Dev', desc: 'Custom software solutions tailored to your business needs.' },
              { icon: <Camera />, title: 'Photography', desc: 'Capturing moments with professional precision.' },
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="see-more-link">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
