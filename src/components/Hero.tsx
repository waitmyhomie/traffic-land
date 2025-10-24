import React from 'react';
import brainImgMobile from '../assets/logoNew3.svg';
import brainImg2 from '../assets/heroImage3.svg';

const Hero: React.FC = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-black">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0">
        
        {/* Mobile Layout */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:hidden">
          
          {/* Brain image - уменьшенные размеры для малых экранов */}
          <div className="relative w-[160px] h-[152px] sm:w-[200px] sm:h-[190px] md:w-[240px] md:h-[230px]">
            <img 
              src={brainImgMobile} 
              alt="AI Brain Circuit" 
              className="w-full h-full object-contain animate-pulse-slow"
            />
          </div>

          {/* Content container */}
          <div className="w-full max-w-[343px] px-4">
            
            {/* Text content */}
            <div className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6 md:mb-8">
              
              {/* Title */}
              <div className="w-full">
                <h1 className="font-montserrat font-black uppercase 
                              text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 
                              leading-tight text-white text-center">
                  TRAFFIC MINDS
                </h1>
              </div>

              {/* Description */}
              <div className="w-full">
                <p className="font-ubuntu text-white text-center
                             text-[13px] sm:text-[14px] md:text-[15px] 
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
                           px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4
                           text-[14px] sm:text-[16px] md:text-[18px] 
                           leading-relaxed whitespace-nowrap
                           shadow-lg shadow-[#00344d]/20 hover:shadow-xl hover:shadow-[#00344d]/30"
              >
                ХОЧУ В КОМАНДУ
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - адаптивные размеры */}
        <div className="hidden lg:block w-full">
          <div className="relative w-full min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] 2xl:min-h-[600px]">
            
            {/* Основной контейнер - масштабируется под высоту экрана */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-[900px] h-[480px] 
                          lg:w-[1000px] lg:h-[530px]
                          xl:w-[1100px] xl:h-[590px]
                          2xl:w-[1206px] 2xl:h-[640px]" 
                 style={{ transform: 'translate(calc(-50% - 23px), calc(-50% + 0.5px))' }}>
              
              {/* Brain image - масштабируемый */}
              <div className="absolute left-0 top-0 
                            w-[400px] h-[400px] mt-10
                            lg:w-[450px] lg:h-[450px] lg:mt-12
                            xl:w-[490px] xl:h-[490px] xl:mt-13
                            2xl:w-[540px] 2xl:h-[540px] 2xl:mt-14">
                <img 
                  src={brainImg2} 
                  alt="AI Brain Circuit" 
                  className="w-full h-full object-contain animate-pulse-slow"
                />
              </div>

              {/* Content container - масштабируемый */}
              <div className="absolute 
                            w-[450px] h-[320px] left-[50%] top-1/2 -translate-y-1/2
                            lg:w-[480px] lg:h-[340px] lg:left-[51%]
                            xl:w-[520px] xl:h-[360px] xl:left-[51%]
                            2xl:w-[562px] 2xl:h-[387px] 2xl:left-[50.94%]">
                
                {/* Text content wrapper */}
                <div className="absolute left-[12px] top-[-16px] 
                              w-[438px] lg:w-[468px] xl:w-[508px] 2xl:w-[550px] 
                              flex flex-col gap-[16px] lg:gap-[18px] 2xl:gap-[20px] text-white">
                  
                  {/* Title */}
                  <div className="flex flex-col justify-center">
                    <h1 className="font-montserrat font-black uppercase 
                                 text-[48px] leading-[57.6px]
                                 lg:text-[52px] lg:leading-[62.4px]
                                 xl:text-[58px] xl:leading-[69.6px]
                                 2xl:text-[64px] 2xl:leading-[76.8px] text-white">
                      TRAFFIC MINDS
                    </h1>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col justify-center">
                    <p className="font-ubuntu 
                                text-[20px] leading-[26px]
                                lg:text-[22px] lg:leading-[28px]
                                xl:text-[23px] xl:leading-[30px]
                                2xl:text-[25px] 2xl:leading-[32px] text-white">
                      Мы генерируем половину идей, которые вы ищете в спай-сервисах и ПП - подключайся к источнику, а не к копиям!
                    </p>
                  </div>
                </div>

                {/* CTA Button - адаптивный */}
                <div className="absolute left-[12px] 
                              top-[170px] lg:top-[180px] xl:top-[195px] 2xl:top-[208.71px]">
                  <button
                    onClick={scrollToContactForm}
                    className="bg-[#00344d] hover:bg-[#00344d]/90
                               text-white font-montserrat font-bold uppercase 
                               rounded-[18px] transition-all duration-300 
                               transform hover:scale-[1.02] active:scale-[0.98]
                               flex items-center justify-center gap-[10px]
                               px-[45px] py-[16px]
                               lg:px-[50px] lg:py-[18px]
                               xl:px-[55px] xl:py-[19px]
                               2xl:px-[60px] 2xl:py-[21px]
                               text-[20px] leading-[30px]
                               lg:text-[22px] lg:leading-[33px]
                               2xl:text-[24px] 2xl:leading-[36px] whitespace-nowrap
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