import React, { useState } from 'react';
import logoImg from '../assets/logo.svg';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-black">
      <div className="max-w-[1920px] mx-auto">
        {/* Mobile/Tablet (flex header) */}
        <div className="flex items-center justify-between h-20 px-6 sm:px-12 lg:hidden">
          <img src={logoImg} alt="Traffic Minds" className="h-5 w-auto" />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
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

        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-black border-t border-gray-800 py-4">
            <nav className="flex flex-col gap-4 px-6">
              <a href="#" className="text-base font-semibold text-gray-400 hover:text-white transition-colors font-montserrat">Вакансии</a>
              <a href="#" className="text-base font-semibold text-gray-400 hover:text-white transition-colors font-montserrat">Сотрудничество</a>
            </nav>
          </div>
        )}

        {/* Desktop (exact Figma positions) */}
        <div className="hidden lg:block relative h-[124px]">
          {/* 1320-wide container positioned 300px from the left */}
          <div className="absolute left-header-left top-0 h-[124px] w-[1320px]">
            {/* Logo at 14px/41px with exact size */}
            <div className="absolute left-logo-left top-logo-top w-[192.615px] h-[20.57px]">
              <img src={logoImg} alt="Traffic Minds" className="w-full h-full" />
            </div>
            {/* Nav at 307px/41px with 45px gap and 24px line-height */}
            <nav className="absolute left-nav-left top-nav-top h-[18px] flex items-center gap-nav-gap">
              <a href="#" className="text-[#989898] text-[16px] font-semibold leading-[24px] hover:text-white transition-colors font-montserrat">Вакансии</a>
              <a href="#" className="text-[#989898] text-[16px] font-semibold leading-[24px] hover:text-white transition-colors font-montserrat">Сотрудничество</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;