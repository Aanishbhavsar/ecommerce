

import React from 'react';

const NavComp = ({ activeTab, setActiveTab }) => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <button 
            onClick={() => setActiveTab('productdetails')} 
            style={activeTab === 'productdetails' ? styles.activeLink : styles.link}
          >
            Productsdetails
          </button>
        </li>
        <li style={styles.navItem}>
          <button 
            onClick={() => setActiveTab('enquiry')} 
            style={activeTab === 'enquiry' ? styles.activeLink : styles.link}
          >
            enquiry
          </button>
        </li>
        <li style={styles.navItem}>
          <button 
            onClick={() => setActiveTab('contact')} 
            style={activeTab === 'contact' ? styles.activeLink : styles.link}
          >
            contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#2c2c2e',
    padding: '10px 0',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '30px'
  },
  navItem: {},
  link: {
    background: 'none',
    border: 'none',
    color: '#0a84ff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    cursor: 'pointer',
    outline: 'none'
  },
  activeLink: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
    borderBottom: '2px solid #0a84ff'
  }
};

export default NavComp;


