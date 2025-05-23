import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FAQ from './components/FAQ'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
