import React, { useState } from 'react';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    enquiry: ''
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form Submit Handler with Validations & Alerts
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, contact, enquiry } = formData;

    // 1. Name Validation (Only Alphabets & Spaces)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!nameRegex.test(name)) {
      alert('Invalid Name! Name should contain only alphabets and spaces.');
      return;
    }

    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Invalid Email! Please enter a valid email address (e.g., example@mail.com).');
      return;
    }

    // 3. Contact Number Validation (Only 10-digit Numbers)
    const phoneRegex = /^[0-9]{10}$/;
    if (!contact.trim()) {
      alert('Please enter your contact number.');
      return;
    }
    if (!phoneRegex.test(contact)) {
      alert('Invalid Contact Number! Please enter a valid 10-digit mobile number without letters or symbols.');
      return;
    }

    // 4. Enquiry Message Validation
    if (!enquiry.trim()) {
      alert('Please enter your enquiry message.');
      return;
    }

    // If all validations pass
    alert(`Thank you, ${name}! Your enquiry has been submitted successfully.`);
    
    // Reset Form
    setFormData({
      name: '',
      email: '',
      contact: '',
      enquiry: ''
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h2 style={styles.heading}>Enquiry Form</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          
          {/* Name Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Email Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Contact Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Contact No:</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter 10-digit mobile number"
              value={formData.contact}
              maxLength="10"
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Enquiry Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Enquiry Details:</label>
            <textarea
              name="enquiry"
              placeholder="Write your enquiry or question here..."
              value={formData.enquiry}
              onChange={handleChange}
              rows="4"
              style={styles.textarea}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.submitBtn}>
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    minHeight: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    boxSizing: 'border-box'
  },
  formCard: {
    backgroundColor: '#1c1c1e',
    padding: '30px',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    border: '1px solid #2c2c2e'
  },
  heading: {
    color: '#0a84ff',
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    color: '#f5f5f7',
    fontSize: '14px',
    fontWeight: '500'
  },
  input: {
    backgroundColor: '#2c2c2e',
    border: '1px solid #3a3a3c',
    borderRadius: '8px',
    padding: '12px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none'
  },
  textarea: {
    backgroundColor: '#2c2c2e',
    border: '1px solid #3a3a3c',
    borderRadius: '8px',
    padding: '12px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    resize: 'vertical'
  },
  submitBtn: {
    backgroundColor: '#0a84ff',
    color: '#ffffff',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s'
  }
};

export default Enquiry;