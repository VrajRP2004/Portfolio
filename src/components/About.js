// About.js
import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="about" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p>
          Hello! I'm a passionate software engineer with a background in full-stack web development and a keen interest in building innovative, futuristic applications. Skilled in MERN stack, JavaScript, and Python, I love creating interactive user experiences that blend functionality with modern aesthetics.
        </p>
        <p>
          I’m always exploring new technologies, and I'm particularly interested in AI-driven applications, 3D web design, and seamless transitions in web development. Let's create something amazing together!
        </p>
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>HTML / CSS / JavaScript</li>
          <li>React / Node.js / MongoDB</li>
          <li>Python / C++</li>
          <li>Docker / DevOps Fundamentals</li>
          <li>SQL / NoSQL Databases</li>
        </ul>
      </motion.div>
    </section>
  );
}

export default About;
