import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img 
          src="/images/logoshop.jpg" 
          alt="Logo" 
          style={styles.logo} 
        />
        <h1 style={styles.title}> Shree SSD Mobile iPhonewala </h1>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#1c1c1e',
    color: '#ffffff',
    padding: '15px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '2px solid #333'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
   
  }
};

export default Header;