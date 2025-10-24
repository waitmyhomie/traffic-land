import React from 'react';
import brainImg from '../assets/heroImage.svg';
import brainImgMobile from '../assets/logoNew3.svg';
import brainImg2 from '../assets/heroImage3.svg';

const Hero: React.FC = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-black">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0">
        
        {/* Mobile Layout - центрированно и адаптивно */}
        <div className="flex flex-col items-center justify-center gap-8 lg:hidden">
          
          {/* Brain image - адаптивные размеры */}
          <div className="relative w-[200px] h-[190px] sm:w-[240px] sm:h-[230px] md:w-[262px] md:h-[250px]">
            <img 
              src={brainImgMobile} 
              alt="AI Brain Circuit" 
              className="w-full h-full object-contain animate-pulse-slow"
            />
          </div>

          {/* Content container - адаптивная ширина */}
          <div className="w-full max-w-[343px] px-4">
            
            {/* Text content */}
            <div className="flex flex-col items-center justify-center text-center gap-5 mb-8">
              
              {/* Title - адаптивные размеры */}
              <div className="w-full">
                <h1 className="font-montserrat font-black uppercase 
                              text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] 
                              leading-tight text-white text-center">
                  TRAFFIC MINDS
                </h1>
              </div>

              {/* Description */}
              <div className="w-full">
                <p className="font-ubuntu text-white text-center
                             text-[14px] sm:text-[15px] md:text-[16px] 
                             leading-relaxed">
                  Мы генерируем половину идей, которые вы ищете в спай-сервисах и ПП - подключайся к источнику, а не к копиям!
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full flex justify-center">
              <button
                onClick={scrollToContactForm}
                className="bg-[#00344d] hover:bg-[#00344d]/90
                           text-white font-montserrat font-bold uppercase 
                           rounded-[18px] transition-all duration-300 
                           transform hover:scale-[1.02] active:scale-[0.98]
                           flex items-center justify-center
                           px-6 sm:px-8 py-3 sm:py-4
                           text-[16px] sm:text-[18px] md:text-[20px] 
                           leading-relaxed whitespace-nowrap
                           shadow-lg shadow-[#00344d]/20 hover:shadow-xl hover:shadow-[#00344d]/30"
              >
                ХОЧУ В КОМАНДУ
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - точное позиционирование как в Figma */}
        <div className="hidden lg:block w-full">
          <div className="relative w-full min-h-[500px] xl:min-h-[600px]">
            
            {/* Основной контейнер - центрированный со смещением как в Figma */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1206px] h-[640px]" 
                 style={{ transform: 'translate(calc(-50% - 23px), calc(-50% + 0.5px))' }}>
              
              {/* Brain image - левая позиция */}
              <div className="absolute left-0 top-0 w-[540px] h-[540px] mt-14">
                <img 
                  src={brainImg2} 
                  alt="AI Brain Circuit" 
                  className="w-full h-full object-contain animate-pulse-slow"
                />
              </div>

              {/* Content container - точная позиция из Figma */}
              <div className="absolute w-[562px] h-[387px] left-[50.94%] right-[19.79%] top-1/2 -translate-y-1/2"
                   style={{ top: 'calc(50% + 1px)', transform: 'translateY(-50%)' }}>
                
                {/* Text content wrapper - точная позиция */}
                <div className="absolute left-[12px] top-[-16px] w-[550px] flex flex-col gap-[20px] text-white">
                  
                  {/* Title */}
                  <div className="h-[76.8px] flex flex-col justify-center">
                    <h1 className="font-montserrat font-black uppercase text-[64px] leading-[76.8px] text-white">
                      TRAFFIC MINDS
                    </h1>
                  </div>

                  {/* Description */}
                  <div className="w-[550px] h-[78px] flex flex-col justify-center">
                    <p className="font-ubuntu text-[25px] leading-[32px] text-white">
                      Мы генерируем половину идей, которые вы ищете в спай-сервисах и ПП - подключайся к источнику, а не к копиям!
                    </p>
                  </div>
                </div>

                {/* CTA Button - точная позиция из Figma */}
                <div className="absolute left-[12px] top-[208.71px]">
                  <button
                    onClick={scrollToContactForm}
                    className="bg-[#00344d] hover:bg-[#00344d]/90
                               text-white font-montserrat font-bold uppercase 
                               rounded-[18px] transition-all duration-300 
                               transform hover:scale-[1.02] active:scale-[0.98]
                               flex items-center justify-center gap-[10px]
                               px-[60px] py-[21px]
                               text-[24px] leading-[36px] whitespace-nowrap
                               shadow-lg shadow-[#00344d]/20 hover:shadow-xl hover:shadow-[#00344d]/30"
                  >
                    ХОЧУ В КОМАНДУ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;