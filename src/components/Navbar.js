// Navbar.js
import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
