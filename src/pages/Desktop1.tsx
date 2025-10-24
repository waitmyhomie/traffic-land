import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { useToast } from '../hooks/useToast';

interface Desktop1Props {
  toast: ReturnType<typeof useToast>['toast'];
}

const Desktop1: React.FC<Desktop1Props> = ({ toast }) => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className="max-w-[1920px] mx-auto relative min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center py-8 sm:py-12 lg:py-0">
          <Hero />
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto min-h-screen flex flex-col justify-center">
        <div className="flex-1 flex flex-col justify-end pb-8">
          <ContactForm toast={toast} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Desktop1;