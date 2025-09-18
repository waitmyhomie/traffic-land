import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';

const Desktop1: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className="max-w-[1920px] mx-auto relative h-screen flex flex-col">
        <Header />
        <Hero />
        <Marquee />
      </div>
    </div>
  );
};

export default Desktop1;