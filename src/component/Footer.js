import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        
        {/* --- SECTION 1: COMPANY ADDRESS & BRANCHES --- */}
        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>Company Address & Branches</h3>
          <p style={styles.addressText}>
            <strong>Head Office:</strong><br />
            SSD Mobile iPhonewala  Store,<br />
            Visanji nagar Golani Market ,Jalgaon Maharashtra-425001
          </p>
          <div style={styles.branchesList}>
            <strong>Branches:</strong>
            <ul style={styles.ulStyle}>
              <li>Branch 1: Dadar West, Mumbai</li>
              <li>Branch 2: Thane Station Road, Thane</li>
              <li>Branch 3: Vashi Sector 17, Navi Mumbai</li>
            </ul>
          </div>
        </div>

        {/* --- SECTION 2: GOOGLE MAP OF HEAD OFFICE --- */}
        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>Google Map of Head Office</h3>
          <div style={styles.mapContainer}>
            <iframe
              title="Google Map Head Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.488049194889!2d75.56271453772604!3d21.01314928071283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f65ad2eef61%3A0xaee96c3e1ff65b21!2siPhonewala!5e0!3m2!1sen!2sin!4v1790960868934!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>

      </div>

      {/* --- COPYRIGHT BAR --- */}
      <div style={styles.copyrightBar}>
        All right Reserved by iPhone & SSD Store &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#1c1c1e',
    color: '#f5f5f7',
    paddingTop: '30px',
    borderTop: '2px solid #2c2c2e',
    marginTop: 'auto'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    padding: '0 20px 25px 20px'
  },
  footerSection: {
    backgroundColor: '#2c2c2e',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
  },
  sectionTitle: {
    margin: '0 0 12px 0',
    fontSize: '18px',
    color: '#0a84ff',
    borderBottom: '1px solid #3a3a3c',
    paddingBottom: '8px'
  },
  addressText: {
    margin: '0 0 10px 0',
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#d1d1d6'
  },
  branchesList: {
    fontSize: '14px',
    color: '#d1d1d6'
  },
  ulStyle: {
    margin: '5px 0 0 0',
    paddingLeft: '20px',
    fontSize: '13px',
    color: '#aeaeb2'
  },
  mapContainer: {
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  copyrightBar: {
    backgroundColor: '#121212',
    color: '#8e8e93',
    textAlign: 'center',
    padding: '12px 0',
    fontSize: '14px',
    borderTop: '1px solid #2c2c2e'
  }
};

export default Footer;