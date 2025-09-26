import React from 'react';
import brainImg from '../assets/heroImage.svg';
import brainImgMobile from '../assets/logoNew3.svg';

const Hero: React.FC = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-black">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0">
        
        {/* Main container */}
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Центрируем весь контент по вертикали */}
          <div className="flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            
            {/* Mobile Layout - точно по дизайну Figma */}
            <div className="flex flex-col items-center justify-start gap-0 lg:hidden w-full">
              
              {/* Brain image - точные размеры из дизайна */}
              <div className="relative w-[262px] h-[250px] mb-[45px]">
                <img 
                  src={brainImgMobile} 
                  alt="AI Brain Circuit" 
                  className="w-full h-full object-contain animate-pulse-slow"
                />
              </div>

              {/* Content container - точная ширина и позиция из дизайна */}
              <div className="w-[343px] mx-auto px-0">
                
                {/* Content wrapper */}
                <div className="flex flex-col items-center justify-center text-center gap-[20px] mb-[45px]">
                  
                  {/* Title - точные размеры из Figma */}
                  <div className="w-full">
                    <h1 className="font-montserrat font-black uppercase
                                  text-[40px] leading-[76.8px] text-white text-center h-[33px] flex items-center justify-center">
                      TRAFFIC MINDS
                    </h1>
                  </div>

                  {/* Description - точные размеры из Figma */}
                  <div className="w-full h-[78px] flex items-center justify-center">
                    <p className="font-ubuntu text-white text-center
                                 text-[16px] leading-[26px]">
                      Мы генерируем половину идей, которые вы ищете в спай-сервисах и ПП - подключайся к источнику, а не к копиям!
                    </p>
                  </div>
                </div>

                {/* CTA Button - точные размеры и позиция из Figma */}
                <div className="w-full flex justify-center">
                  <button
                    onClick={scrollToContactForm}
                    className="bg-[#00344d] hover:bg-[#00344d]/90
                               text-white font-montserrat font-bold uppercase 
                               rounded-[18px] transition-all duration-300 
                               transform hover:scale-[1.02] active:scale-[0.98]
                               flex items-center justify-center
                               px-[30px] py-[14px]
                               text-[20px] leading-[36px] whitespace-nowrap
                               shadow-lg shadow-[#00344d]/20 hover:shadow-xl hover:shadow-[#00344d]/30"
                  >
                    ХОЧУ В КОМАНДУ
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout - логотип слева, контент справа */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-16 xl:gap-20 2xl:gap-24 w-full">
              
              {/* Left column - brain image */}
              <div className="flex-shrink-0">
                <div className="relative w-[540px] h-[540px]">
                  <img 
                    src={brainImg} 
                    alt="AI Brain Circuit" 
                    className="w-full h-full object-contain animate-pulse-slow"
                  />
                </div>
              </div>

              {/* Right column - content */}
              <div className="flex-shrink-0 w-[550px]">
                
                {/* Title */}
                <div className="mb-5">
                  <h1 className="font-montserrat font-black uppercase leading-[1.2] 
                                text-[64px] text-white">
                    TRAFFIC MINDS
                  </h1>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="font-ubuntu text-white leading-[1.28] 
                               text-[25px] w-[550px]">
                    Мы генерируем половину идей, которые вы ищете в спай-сервисах и ПП - подключайся к источнику, а не к копиям!
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContactForm}
                  className="bg-[#00344d] hover:bg-[#00344d]/90
                             text-white font-montserrat font-bold uppercase 
                             rounded-[18px] transition-all duration-300 
                             transform hover:scale-[1.02] active:scale-[0.98]
                             flex items-center justify-center
                             px-[60px] py-[21px]
                             text-[24px] leading-[1.5] whitespace-nowrap 
                             shadow-lg shadow-[#00344d]/20 hover:shadow-xl hover:shadow-[#00344d]/30"
                >
                  ХОЧУ В КОМАНДУ
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;