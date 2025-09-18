import React, { useState } from 'react';
import logoImg from '../assets/logo.svg';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-black">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-[300px]">
        <div className="flex items-center justify-between h-20 lg:h-[124px]">
          {/* Logo */}
          <img 
            src={logoImg} 
            alt="Traffic Minds" 
            className="h-5 lg:h-[21px] w-auto"
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex gap-8 lg:gap-[45px]">
            <a 
              href="#" 
              className="text-sm lg:text-base font-semibold text-gray-400 hover:text-white transition-colors font-montserrat"
            >
              Вакансии
            </a>
            <a 
              href="#" 
              className="text-sm lg:text-base font-semibold text-gray-400 hover:text-white transition-colors font-montserrat"
            >
              Сотрудничество
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute left-0 right-0 bg-black border-t border-gray-800 py-4">
            <nav className="flex flex-col gap-4 px-6">
              <a 
                href="#" 
                className="text-base font-semibold text-gray-400 hover:text-white transition-colors font-montserrat"
              >
                Вакансии
              </a>
              <a 
                href="#" 
                className="text-base font-semibold text-gray-400 hover:text-white transition-colors font-montserrat"
              >
                Сотрудничество
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;