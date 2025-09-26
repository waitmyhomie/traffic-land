import React, { useState } from 'react';
import logoImg from '../assets/logoNew3.svg';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-black">
      {/* Максимальная ширина с центрированием */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0">
        
        {/* Внутренний контейнер с центрированием */}
        <div className="w-full max-w-[1400px] mx-auto">
          
          {/* Флекс контейнер */}
          <div className="flex items-center justify-end lg:justify-start h-16 sm:h-18 md:h-20 lg:h-[124px]">

            {/* Логотип - скрыт на мобильных, показан слева на десктопе */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <img 
                src={logoImg} 
                alt="Traffic Minds" 
                className="h-[60px] lg:h-[80px] xl:h-[84px] w-auto object-contain"
              />
            </div>

            {/* Навигация - на десктопе рядом с логотипом */}
            <div className="flex items-center lg:ml-8 xl:ml-[45px]">
              
              {/* Десктопная навигация */}
              <nav className="hidden lg:flex items-center space-x-8 xl:space-x-[45px]">
                <a 
                  href="#vacancies" 
                  className="font-montserrat font-semibold text-[16px] leading-[24px] 
                           text-[#989898] hover:text-white transition-colors duration-200
                           whitespace-nowrap"
                >
                  Вакансии
                </a>
                <a 
                  href="#cooperation" 
                  className="font-montserrat font-semibold text-[16px] leading-[24px] 
                           text-[#989898] hover:text-white transition-colors duration-200
                           whitespace-nowrap"
                >
                  Сотрудничество
                </a>
              </nav>

              {/* Мобильная кнопка меню */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 -mr-2 rounded-md text-[#989898] 
                         hover:text-white hover:bg-gray-900/50 transition-all duration-200"
                aria-label="Открыть меню"
                aria-expanded={mobileMenuOpen}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>

          {/* Мобильное меню */}
          {mobileMenuOpen && (
            <div className="lg:hidden animate-in slide-in-from-top-2 duration-200">
              <div className="border-t border-gray-800 pt-4 pb-6 space-y-4">
                <a 
                  href="#vacancies" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-montserrat font-semibold text-[16px] 
                           text-[#989898] hover:text-white transition-colors duration-200
                           px-2 py-2 rounded-md hover:bg-gray-900/30"
                >
                  Вакансии
                </a>
                <a 
                  href="#cooperation" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-montserrat font-semibold text-[16px] 
                           text-[#989898] hover:text-white transition-colors duration-200
                           px-2 py-2 rounded-md hover:bg-gray-900/30"
                >
                  Сотрудничество
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;