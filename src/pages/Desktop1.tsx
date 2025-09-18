import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';

const Desktop1: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <Header />
      <Hero />
      <Marquee />
    </div>
  );
};

export default Desktop1;