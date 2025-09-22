import React from 'react';
import brainImg from '../assets/brain.png';



const Hero: React.FC = () => {
  return (
    <section className="flex-1 flex items-center py-12 lg:py-0">
      <div className="max-w-[1920px] mx-auto w-full px-6 sm:px-12 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:pb-[13%] lg:pr-[10%]">
          
          {/* Brain Image */}
          <div className="flex justify-center lg:justify-end lg:pr-8 ">
            <img 
              src={brainImg} 
              alt="AI Brain Circuit" 
              className="w-64 sm:w-80 lg:w-96 xl:w-[391px] h-auto object-contain
                         animate-pulse-slow rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:pr-8 xl:pr-[15%]">
            {/* Title */}
            <h1 className="font-montserrat font-black uppercase 
                         text-4xl sm:text-5xl xl:text-[64px] 
                         leading-tight xl:leading-[76.8px] 
                         mb-5 text-white">
              TRAFFIC MINDS
            </h1>
            
            {/* Description */}
            <p className="font-ubuntu 
                        text-lg sm:text-xl xl:text-[25px] 
                        leading-relaxed xl:leading-[32px] 
                        mb-8 xl:mb-10 
                        text-white/90">
              Мы генерируем половину идей, которые вы ищете в спай-сервисах и ПП - подключайся к источнику, а не к копиям!
            </p>
            
            {/* CTA Button */}
            <button 
              className="bg-[#00cfff] hover:bg-[#00b8e6] 
                             text-black font-montserrat font-bold uppercase 
                             px-10 py-4 sm:px-12 xl:px-[60px] xl:py-[21px] 
                             rounded-2xl xl:rounded-[18px] 
                             text-lg sm:text-xl xl:text-2xl 
                             transition-all duration-300 
                             transform hover:scale-105 active:scale-95
                             shadow-lg shadow-[#00cfff]/20 hover:shadow-xl hover:shadow-[#00cfff]/30"
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                contactForm?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              хочу в команду
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;