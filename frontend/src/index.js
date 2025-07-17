import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import HomePage from './Landing_page/Home/HomePage';
import Signup from './Landing_page/Signup/Signup';
import PricingPage from './Landing_page/Pricing/PricingPage';
import AboutPage from './Landing_page/About/AboutPage';
import ProductsPage from './Landing_page/Products/ProductsPage';
import SupportPage from './Landing_page/Support/SupportPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';
import Login from './Landing_page/Login/Login';
import Logout from './Landing_page/Logout/Logout';
 // <-- Yahan import karo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Login' element={<Login />} />  {/* <-- Yahan route add karo */}
      <Route path='/Logout' element={<Logout />} />  {/* <-- Yahan route add karo */}
      <Route path='/About' element={<AboutPage />} />
      <Route path='/Products' element={<ProductsPage />} />
      <Route path='/Pricing' element={<PricingPage />} />
      <Route path='/Support' element={<SupportPage />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
