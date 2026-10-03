


import React from 'react';

// Branches ka data array
const branchDetails = [
  {
    id: 1,
    city: 'Jalgaon(Head Office)',
    address: 'Visanji Nagar ,Golani Market near hanuman mandir, Jalgaon -425001',
    phone: '+91 98765 43210',
    email: 'mumbai.head@iphonewala.com',
    timing: 'Mon - Sat: 10:00 AM - 8:00 PM'
  },
  {
    id: 2,
    city: 'Delhi Branch',
    address: 'Connaught Place, Block C, Inner Circle, New Delhi - 110001',
    phone: '+91 98765 43211',
    email: 'delhi.office@iphonewala.com',
    timing: 'Mon - Sat: 10:00 AM - 8:00 PM'
  },
  {
    id: 3,
    city: 'Bengaluru Branch',
    address: '100 Feet Road, Indiranagar, Bengaluru, Karnataka - 560038',
    phone: '+91 98765 43212',
    email: 'blr.office@iphonewala.com',
    timing: 'Mon - Sat: 10:00 AM - 8:00 PM'
  },
  {
    id: 4,
    city: 'Kolkata Branch',
    address: 'Park Street, Opposite Metro Station, Kolkata, West Bengal - 700016',
    phone: '+91 98765 43213',
    email: 'kolkata.office@iphonewala.com',
    timing: 'Mon - Sat: 10:00 AM - 8:00 PM'
  }
];

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.mainHeading}>Contact Us</h2>
      <p style={styles.subHeading}>Reach out to our Head Office or visit any of our regional branches.</p>

      {/* Head Office & Map Section */}
      <div style={styles.topSection}>
        {/* Head Office Card */}
        <div style={styles.headOfficeCard}>
          <span style={styles.badge}>HEAD OFFICE</span>
          <h3 style={styles.cardHeading}>{branchDetails[0].city}</h3>
          <p style={styles.infoText}><strong>Address:</strong> {branchDetails[0].address}</p>
          <p style={styles.infoText}><strong>Phone:</strong> {branchDetails[0].phone}</p>
          <p style={styles.infoText}><strong>Email:</strong> {branchDetails[0].email}</p>
          <p style={styles.infoText}><strong>Timings:</strong> {branchDetails[0].timing}</p>
        </div>

        {/* Google Map Location */}
        <div style={styles.mapContainer}>
          <iframe
            title="Head Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.488049194889!2d75.56271453772604!3d21.01314928071283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f65ad2eef61%3A0xaee96c3e1ff65b21!2siPhonewala!5e0!3m2!1sen!2sin!4v1790960868934!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Other Branches Grid */}
      <h3 style={styles.sectionTitle}>Our Regional Branches</h3>
      <div style={styles.branchesGrid}>
        {branchDetails.slice(1).map((branch) => (
          <div key={branch.id} style={styles.branchCard}>
            <h4 style={styles.branchCity}>{branch.city}</h4>
            <p style={styles.infoText}><strong>Address:</strong> {branch.address}</p>
            <p style={styles.infoText}><strong>Phone:</strong> {branch.phone}</p>
            <p style={styles.infoText}><strong>Email:</strong> {branch.email}</p>
            <p style={styles.infoText}><strong>Timings:</strong> {branch.timing}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: '30px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '100vh'
  },
  mainHeading: {
    textAlign: 'center',
    color: '#0a84ff',
    fontSize: '32px',
    marginBottom: '8px'
  },
  subHeading: {
    textAlign: 'center',
    color: '#a1a1a6',
    fontSize: '16px',
    marginBottom: '30px'
  },
  topSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  },
  headOfficeCard: {
    backgroundColor: '#1c1c1e',
    padding: '25px',
    borderRadius: '12px',
    border: '1px solid #0a84ff',
    position: 'relative'
  },
  badge: {
    backgroundColor: '#0a84ff',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '4px 10px',
    borderRadius: '12px',
    display: 'inline-block',
    marginBottom: '10px'
  },
  cardHeading: {
    color: '#ffffff',
    fontSize: '22px',
    marginBottom: '15px'
  },
  infoText: {
    color: '#d1d1d6',
    fontSize: '14px',
    margin: '8px 0',
    lineHeight: '1.5'
  },
  mapContainer: {
    backgroundColor: '#1c1c1e',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #2c2c2e'
  },
  sectionTitle: {
    color: '#0a84ff',
    fontSize: '24px',
    marginBottom: '20px'
  },
  branchesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  branchCard: {
    backgroundColor: '#1c1c1e',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #2c2c2e'
  },
  branchCity: {
    color: '#ffffff',
    fontSize: '18px',
    marginBottom: '12px',
    borderBottom: '1px solid #2c2c2e',
    paddingBottom: '8px'
  }
};

export default Contact;