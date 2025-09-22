import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Desktop1: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Первый экран с Hero секцией */}
      <div className="max-w-[1920px] mx-auto relative h-screen flex flex-col">
        <Header />
        <Hero />
        <Marquee />
      </div>
      
      {/* Форма контактов */}
      <div className="max-w-[1920px] mx-auto">
        <ContactForm />
      </div>
      
      {/* Футер */}
      <div className="max-w-[1920px] mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Desktop1;