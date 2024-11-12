// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
