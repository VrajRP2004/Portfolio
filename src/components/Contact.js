import React from 'react';

const Contact = () => {
  return (
    <section style={styles.contactSection}>
      <h1 style={styles.heading}>Contact Me</h1>
      <p style={styles.paragraph}>Feel free to reach out to me through any of the following platforms:</p>
      
      <div style={styles.linkContainer}>
        {/* Email Icon */}
        <a href="mailto:vrajrp4@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <img src="https://img.icons8.com/ios-filled/50/000000/mail.png" alt="Email" style={styles.icon} />
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/vraj-prajapati-262600236/" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" style={styles.icon} />
        </a>

        {/* Twitter Icon */}
        <a href="https://x.com/vraj_6fb" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" style={styles.icon} />
        </a>

        {/* GitHub Icon */}
        <a href="https://github.com/VrajRP2004" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style={styles.icon} />
        </a>

      </div>
    </section>
  );
};

// Inline CSS for styling
const styles = {
  contactSection: {
    backgroundColor: '#222',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#f0f0f0',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#f0f0f0',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    transition: 'all 0.3s ease-in-out',
  },
  icon: {
    width: '40px', // Adjust icon size
    height: '40px',
    transition: 'transform 0.3s ease',
  },
};

export default Contact;
