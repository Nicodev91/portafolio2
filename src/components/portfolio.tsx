import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServiceSection';
import BrandsSection from './BrandSection';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BrandsSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
