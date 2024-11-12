import React from 'react';
import img from './Profile.png';

const Hero = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Hello, I'm Vraj!</h1>
        <p style={styles.paragraph}>Welcome to my portfolio website.</p>
      </div>
      <div style={styles.imageContainer}>
        <img src={img} alt="Vraj" style={styles.image} />
      </div>
    </section>
  );
};

// Inline CSS with Responsive Styling
const styles = {
  heroSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap', // Allows wrapping for smaller screens
  },
  textContainer: {
    flex: 1,
    paddingRight: '20px',
    minWidth: '300px', // Ensures minimum width for readability
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center',
    minWidth: '300px', // Ensures minimum width on smaller screens
    marginTop: '20px', // Adds space when stacked on smaller screens
  },
  image: {
    width: '100%',
    maxWidth: '300px', // Limits image size for larger screens
    height: 'auto',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

// Responsive media query styles
if (window.innerWidth < 768) {
  styles.heroSection.flexDirection = 'column';
  styles.heading.fontSize = '2rem';
  styles.paragraph.fontSize = '1rem';
  styles.textContainer.paddingRight = '0';
}

export default Hero;
