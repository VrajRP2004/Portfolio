import React, { useEffect, useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import img1 from './TextUtils.png';
import img2 from './News.png';
import img3 from './Clone.png';
import img4 from './Inotebook.png';

function Projects() {
  const [isVisible, setIsVisible] = useState([]);
  
  // Initialize data
  const data = [
    {
      name: 'TextUtils',
      image: img1,
      link: 'https://vrajrp2004.github.io/React_learning/',
    },
    {
      name: 'News',
      image: img2,
      link: 'https://vrajrp2004.github.io/',
    },
    {
      name: 'Clone',
      image: img3,
      link: 'https://vrajrp2004.github.io/Inter_Project/',
    },
    {
      name: 'Inotebook',
      image: img4,
      link: 'https://vrajrp2004.github.io/inotebook/',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.project-card');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          setIsVisible((prev) => [...prev, index]);  // Make the element visible
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);  // Clean up listener
    };
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {data.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: isVisible.includes(index) ? 1 : 0, x: isVisible.includes(index) ? 0 : index % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.name} className="project-image" />
            </div>
            <a href={project.link}>
              <h3>{project.name}</h3>
            </a>
            <h5>{project.des}</h5>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
