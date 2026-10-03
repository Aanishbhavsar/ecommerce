import React from 'react';

// Image ke hisab se 6 Mobile Products ka Array of Objects
const mobileProducts = [
  {
    id: 1,
    name: 'iPhone 18 Pro Max',
    brand: 'Apple',
    price: '₹1,89,900',
    display: '6.9-inch Super Retina XDR ProMotion OLED',
    processor: 'A20 Pro Chip',
    camera: '48MP Main + 48MP Periscope + 48MP Ultra Wide',
    battery: '4800 mAh',
    storage: '256GB / 512GB / 1TB / 2TB',
    image: '/images/image1.jpg'
  },
  {
    id: 2,
    name: 'Samsung S26 Ultra',
    brand: 'Samsung',
    price: '₹1,49,999',
    display: '6.8-inch Dynamic AMOLED 2X 144Hz',
    processor: 'Snapdragon 8 Gen 5 for Galaxy',
    camera: '200MP + 50MP + 50MP + 12MP',
    battery: '5500 mAh',
    storage: '256GB / 512GB / 1TB',
    image: '/images/image2.jpg'
  },
  {
    id: 3,
    name: 'iPhone 17 Pro',
    brand: 'Apple',
    price: '₹1,11,999',
    display: '6.3-inch Super Retina XDR OLED',
    processor: 'A19 Pro Chip',
    camera: '48MP + 48MP + 12MP Telephoto',
    battery: '3800 mAh',
    storage: '128GB / 256GB / 512GB',
    image: '/images/image3.jpg'
  },
  {
    id: 4,
    name: 'iPhone Air',
    brand: 'Apple',
    price: '₹79,900',
    display: '6.5-inch Ultra-Slim OLED Display',
    processor: 'A19 Chip',
    camera: '48MP Single Advanced Sensor',
    battery: '3500 mAh',
    storage: '128GB / 256GB',
    image: '/images/image4.jpg'
  },
  {
    id: 5,
    name: 'iPhone Duo',
    brand: 'Apple',
    price: '₹3,89,900',
    display: 'Dual 6.7-inch OLED Foldable Screen',
    processor: 'A20 Dual-Core Chip',
    camera: '48MP Dual Rear + 12MP Under-Display',
    battery: '5200 mAh',
    storage: '512GB / 1TB',
    image: '/images/image5.jpg'
  },
  {
    id: 6,
    name: 'Nothing (4a)',
    brand: 'Nothing',
    price: '₹69,900',
    display: '6.7-inch Flexible AMOLED 120Hz',
    processor: 'Custom Snapdragon Processor',
    camera: '50MP + 50MP Dual Camera',
    battery: '5000 mAh',
    storage: '128GB / 256GB',
    image: '/images/image6.jpg'
  },
    {
    id: 7,
    name: 'Samsung Z Flip8',
    brand: 'Samsung',
    price: '₹1,11,000',
    display: '6.7-inch Flexible AMOLED 120Hz',
    processor: 'Custom Snapdragon Processor',
    camera: '50MP + 50MP Dual Camera',
    battery: '5000 mAh',
    storage: '128GB / 256GB',
    image: '/images/image7.jpg'
  },
    {
    id: 8,
    name: 'Samsung Z Fold Ultra 8',
    brand: 'Samsung',
    price: '₹1,94,999',
    display: '6.7-inch Flexible AMOLED 120Hz',
    processor: ' Snapdragon 8 Gen Elite Processor',
    camera: '50MP + 50MP  Camera',
    battery: '5500 mAh',
    storage: '512GB / 1TB',
    image: '/images/image8.jpg'
  },
    {
    id: 9,
    name: 'Google Pixel 11 Pro Fold',
    brand: 'Google',
    price: '₹1,86,000',
    display: '6.7-inch Flexible AMOLED 120Hz',
    processor: 'Android 17',
    camera: '50MP + 50MP Dual Camera',
    battery: '5000 mAh',
    storage: '256GB / 512GB',
    image: '/images/image9.jpg'
  },  {
    id: 10,
    name: 'Xiaomi 19 Pro',
    brand: 'Xiaomi',
    price: '₹85,990',
    display: '6.7-inch Flexible AMOLED 120Hz',
    processor: 'Qualcomm Snapdragon 8 Elite Gen 6 (2 nm)',
    camera: '50MP + 50MP Dual Camera',
    battery: '5000 mAh',
    storage: '256GB / 512GB',
    image: '/images/image11.jpg'
  },
    {
    id: 11,
    name: 'Vivo X500 pro',
    brand: 'Vivo',
    price: '₹1,04,999',
    display: '6.7-inch Flexible AMOLED 120Hz',
    processor: 'Mediatek Dimensity 9600 Pro (2 nm)',
    camera: '200MP + 50MP Dual Camera',
    battery: '9000mAh',
    storage: '512GB / 1TB',
    image: '/images/image12.jpg'
  },   {
    id: 12,
    name: 'Oneplus 16',
    brand: 'Oneplus 1+',
    price: '₹99,990',
    display: '	LTPO AMOLED, 1B colors, 165Hz, Dolby Vision, HDR10+, HDR Vivid',
    processor: 'Qualcomm SM8975 Snapdragon 8 Elite Extreme Gen 6 (2 nm)',
    camera: '200MP + 50MP + 50MP Dual Camera',
    battery: '9000 mAh',
    storage: '256GB / 512GB',
    image: '/images/image10.jpg'
  },

  
];

const ProductDetails = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Product Details</h2>
      
      <div style={styles.grid}>
        {mobileProducts.map((mobile) => (
          <div key={mobile.id} style={styles.card}>
            <img src={mobile.image} alt={mobile.name} style={styles.image} />
            <h3 style={styles.productName}>{mobile.name}</h3>
            <p style={styles.price}>{mobile.price}</p>
            
            <div style={styles.infoContainer}>
              <p style={styles.info}><strong>Brand:</strong> {mobile.brand}</p>
              <p style={styles.info}><strong>Display:</strong> {mobile.display}</p>
              <p style={styles.info}><strong>Processor:</strong> {mobile.processor}</p>
              <p style={styles.info}><strong>Camera:</strong> {mobile.camera}</p>
              <p style={styles.info}><strong>Battery:</strong> {mobile.battery}</p>
              <p style={styles.info}><strong>Storage:</strong> {mobile.storage}</p>
            </div>

            <button style={styles.buyBtn}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    padding: '30px 20px',
    minHeight: '100vh',
    color: '#ffffff'
  },
  heading: {
    textAlign: 'center',
    color: '#0a84ff',
    marginBottom: '30px',
    fontSize: '28px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #2c2c2e',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px'
  },
  productName: {
    fontSize: '20px',
    margin: '10px 0 5px 0',
    color: '#ffffff'
  },
  price: {
    fontSize: '18px',
    color: '#30d158',
    fontWeight: 'bold',
    margin: '0 0 15px 0'
  },
  infoContainer: {
    textAlign: 'left',
    borderTop: '1px solid #2c2c2e',
    paddingTop: '10px',
    marginBottom: '15px'
  },
  info: {
    color: '#d1d1d6',
    fontSize: '14px',
    margin: '6px 0'
  },
  buyBtn: {
    backgroundColor: '#0a84ff',
    color: '#ffffff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default ProductDetails;