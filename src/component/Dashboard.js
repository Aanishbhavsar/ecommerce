import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const videoSlides = [
    '/images/iphonevid.mp4',
    '/images/iphonevideo2.mp4',
    '/images/iphonevideo3.mp4'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [videoSlides.length]);

  const products = [
    { id: 1, name: 'iPhone 18 Pro Max', price: '₹1,89,900', img: '/images/image1.jpg' },
    { id: 2, name: 'Samsung s26 ultra', price: '₹1,49,999', img: '/images/image2.jpg' },
    { id: 3, name: 'iPhone 17 Pro', price: '₹1,11,999', img: '/images/image3.jpg' },
    { id: 4, name: 'iPhone Air', price: '₹79,900', img: '/images/image4.jpg' },
    { id: 5, name: 'iPhone Duo', price: '₹3,89,900', img: '/images/image5.jpg' },
    { id: 6, name: 'Nothing(4a)', price: '₹69,900', img: '/images/image6.jpg' }
  ];

  return (
    <div style={styles.dashboardContainer}>
      {/* --- CAROUSEL WITH VIDEO --- */}
      <div style={styles.carouselSection}>
        <div style={styles.carouselWrapper}>
          <video 
            key={currentSlide} 
            src={videoSlides[currentSlide]} 
            autoPlay 
            muted 
            loop 
            style={styles.carouselVideo}
          />
          <button 
            style={{ ...styles.navButton, left: '15px' }} 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? videoSlides.length - 1 : prev - 1))}
          >
            &#10094;
          </button>
          <button 
            style={{ ...styles.navButton, right: '15px' }} 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % videoSlides.length)}
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* --- 3-3 CARDS GRID --- */}
      <div style={styles.productsSection}>
        <h2 style={styles.sectionHeading}>Featured iPhones & SSD Deals</h2>
        <div style={styles.cardsGrid}>
          {products.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.imageContainer}>
                <img src={item.img} alt={item.name} style={styles.cardImage} />
              </div>
              <h3 style={styles.productName}>{item.name}</h3>
              <p style={styles.productPrice}>{item.price}</p>
              <button style={styles.buyBtn}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: '20px 20px 40px 20px',
    width: '100%',
    boxSizing: 'border-box'
  },
  carouselSection: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center'
  },
  carouselWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '1000px',
    height: '380px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
  },
  carouselVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    border: 'none',
    fontSize: '24px',
    padding: '10px 15px',
    cursor: 'pointer',
    borderRadius: '50%',
    zIndex: 10
  },
  productsSection: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionHeading: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '28px',
    color: '#f5f5f7'
  },
  // Exact 3 columns per row
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '25px',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: '14px',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #2c2c2e',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
  },
  imageContainer: {
    width: '100%',
    height: '220px',
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  cardImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain'
  },
  productName: {
    fontSize: '18px',
    margin: '10px 0 5px 0',
    color: '#ffffff'
  },
  productPrice: {
    fontSize: '16px',
    color: '#30d158',
    fontWeight: 'bold',
    margin: '5px 0 15px 0'
  },
  buyBtn: {
    backgroundColor: '#0a84ff',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '15px',
    cursor: 'pointer',
    fontWeight: '600'
  }
};

export default Dashboard;