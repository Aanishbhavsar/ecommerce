import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import NavComp from './component/NavComp';
import Footer from './component/Footer';
import Dashboard from './component/Dashboard';
import Enquiry from './component/enquiry';
import Contact from './component/Contact';
import ProductDetails from './component/ProductDetails';

function App() {
  // Default tab null/empty rakha hai taaki shuru me Dashboard visible rahe
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#121212' }}>
      <Header />
      
      {/* NavComp pass kar rahe hain */}
      <NavComp activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Content */}
      <div style={{ flex: 1 }}>
        {activeTab === 'dashboard' && <Dashboard />}
         {activeTab === 'productdetails' && <ProductDetails />} 
        {activeTab === 'enquiry' && <Enquiry />}
        {activeTab === 'contact' && <Contact />}
      </div>

      <Footer />
    </div>
  );
}

export default App;