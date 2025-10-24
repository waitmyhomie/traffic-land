import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Desktop1: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Первый экран с Hero секцией */}
      <div className="max-w-[1920px] mx-auto relative h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center">
          <Hero />
        </div>
      </div>

      {/* Форма контактов и футер - ближе друг к другу */}
      <div className="max-w-[1920px] mx-auto min-h-screen flex flex-col justify-center">
        <div className="flex-1 flex flex-col justify-end pb-8">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Desktop1;