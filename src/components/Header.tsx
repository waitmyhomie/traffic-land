import React, { useState } from 'react';
import logoImg from '../assets/logo.svg';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-black">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0">
        
        {/* Main container */}
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex items-center justify-end lg:justify-between h-16 sm:h-18 md:h-20 lg:h-[124px]">

            {/* Left side - Logo (скрыт на мобильных) */}
            <div className="hidden lg:flex items-center">
              <img 
                src={logoImg} 
                alt="Traffic Minds" 
                className="h-4 sm:h-5 md:h-6 lg:h-[20.57px] w-auto"
              />
            </div>

            {/* Right side - Navigation */}
            <div className="flex items-center gap-4 lg:gap-8">
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-[45px]">
                <a 
                  href="#" 
                  className="text-[#989898] text-[14px] lg:text-[16px] font-semibold leading-[24px] 
                           hover:text-white transition-colors font-montserrat"
                >
                  Вакансии
                </a>
                <a 
                  href="#" 
                  className="text-[#989898] text-[14px] lg:text-[16px] font-semibold leading-[24px] 
                           hover:text-white transition-colors font-montserrat"
                >
                  Сотрудничество
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-800 py-4 sm:py-5 md:py-6">
              <nav className="flex flex-col gap-3 sm:gap-4">
                <a 
                  href="#" 
                  className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold 
                           text-gray-400 hover:text-white transition-colors font-montserrat"
                >
                  Вакансии
                </a>
                <a 
                  href="#" 
                  className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold 
                           text-gray-400 hover:text-white transition-colors font-montserrat"
                >
                  Сотрудничество
                </a>
              </nav>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;