import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Film, Globe, Monitor, Camera } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    icon: <Palette size={48} />,
    title: "Graphic Designing",
    description: "We craft visual identities that resonate. From logos to complete brand guidelines, our designs tell your story uniquely and powerfully.",
    color: "#ec4899"
  },
  {
    icon: <Film size={48} />,
    title: "Video Editing",
    description: "Professional post-production services. We turn raw footage into compelling narratives with high-quality cuts, transitions, and effects.",
    color: "#eab308"
  },
  {
    icon: <Globe size={48} />,
    title: "Web Development",
    description: "Full-stack web solutions using the latest technologies like React, Next.js, and Node. We build sites that are fast, secure, and SEO-friendly.",
    color: "#3b82f6"
  },
  {
    icon: <Monitor size={48} />,
    title: "Software Development",
    description: "Scalable software tailored for your business operations. Whether it's a desktop app or a complex SaaS platform, we have you covered.",
    color: "#8b5cf6"
  },
  {
    icon: <Camera size={48} />,
    title: "Photography",
    description: "High-resolution photography for products, events, and portraits. We capture the essence of the moment with professional gear and lighting.",
    color: "#10b981"
  }
];

const Services = () => {
  return (
    <div className="services-page page-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-header"
        >
          <h1 className="page-title">Our <span className="gradient-text">Services</span></h1>
          <p className="page-subtitle">We offer a comprehensive suite of digital solutions to elevate your brand.</p>
        </motion.div>

        <div className="services-detailed-list">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="service-row glass-card"
            >
              <div className="service-icon-large" style={{ color: service.color }}>
                {service.icon}
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
