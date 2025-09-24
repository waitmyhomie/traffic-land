import React from 'react';
import brainImg from '../assets/brain.png';

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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">

            {/* Mobile Layout - все элементы вертикально по центру */}
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:hidden w-full">
              
              {/* Brain image - сверху на мобильных */}
              <div className="relative max-w-[200px] sm:max-w-[230px] w-full">
                <img 
                  src={brainImg} 
                  alt="AI Brain Circuit" 
                  className="w-full h-auto object-contain animate-pulse-slow rounded-lg"
                />
              </div>

              {/* Content - под картинкой на мобильных */}
              <div className="w-full flex flex-col items-center justify-center text-center max-w-[343px] px-4">
                
                {/* Title */}
                <h1 className="font-montserrat font-black uppercase leading-[0.9] relative mb-4 sm:mb-5
                              text-[28px] sm:text-[32px] text-white">
                  TRAFFIC MINDS
                </h1>

                {/* Description */}
                <p className="font-ubuntu text-white leading-[1.3] w-full mb-6 sm:mb-7
                             text-[14px] sm:text-[16px]">
                  Мы генерируем половину идей, которые вы ищете в спай-сервисах и ПП - подключайся к источнику, а не к копиям!
                </p>

                {/* CTA Button */}
                <button
                  onClick={scrollToContactForm}
                  className="bg-[#00cfff] hover:bg-[#00cfff]/90
                             text-black font-montserrat font-bold uppercase 
                             rounded-[18px] transition-all duration-300 
                             transform hover:scale-[1.02] active:scale-[0.98]
                             flex items-center justify-center w-full
                             px-6 py-3 h-[48px] sm:h-[52px]
                             text-[16px] sm:text-[18px] 
                             leading-[1.5] shadow-lg shadow-[#00cfff]/20 hover:shadow-xl hover:shadow-[#00cfff]/30"
                >
                  ХОЧУ В КОМАНДУ
                </button>
              </div>
            </div>

            {/* Desktop Layout - рядом друг с другом */}
            <div className="hidden lg:contents">
              
              {/* Left column - brain image */}
              <div className="w-full lg:w-[45%] xl:w-[42%] 2xl:w-[40%] flex-shrink-0 order-1
                              flex items-center justify-center lg:justify-end lg:pr-8">
                
                <div className="relative max-w-[360px] xl:max-w-[391px] w-full">
                  <img 
                    src={brainImg} 
                    alt="AI Brain Circuit" 
                    className="w-full h-auto object-contain animate-pulse-slow rounded-lg"
                  />
                </div>
              </div>

              {/* Right column - content */}
              <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[57%] flex-shrink-0 order-2
                              flex flex-col items-start justify-start lg:pr-8 xl:pr-[15%]">
                
                {/* Title */}
                <h1 className="font-montserrat font-black uppercase leading-[0.9] relative mb-6 xl:mb-8
                              text-[42px] xl:text-[54px] 2xl:text-[64px]
                              text-left text-white">
                  TRAFFIC MINDS
                </h1>

                {/* Description */}
                <p className="font-ubuntu text-white leading-[1.3] w-full mb-8 xl:mb-10
                             text-[20px] xl:text-[22px] 2xl:text-[25px]
                             text-left max-w-[550px]">
                  Мы генерируем половину идей, которые вы ищете в спай-сервисах и ПП - подключайся к источнику, а не к копиям!
                </p>

                {/* CTA Button */}
                <button
                  onClick={scrollToContactForm}
                  className="bg-[#01415f] hover:bg-[#01415f]/90
                             text-white font-montserrat font-bold uppercase 
                             rounded-[18px] transition-all duration-300 
                             transform hover:scale-[1.02] active:scale-[0.98]
                             flex items-center justify-center
                             px-12 xl:px-14 2xl:px-[60px]
                             py-4.5 xl:py-5 2xl:py-[21px]
                             h-[64px] xl:h-[70px] 2xl:h-[78px]
                             text-[20px] xl:text-[22px] 2xl:text-[24px] 
                             leading-[1.5] whitespace-nowrap shadow-lg shadow-[#00cfff]/20 hover:shadow-xl hover:shadow-[#00cfff]/30"
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