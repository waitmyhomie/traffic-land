import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-black border-t border-gray-900">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div className="relative h-24 sm:h-20 flex items-center">
          
          {/* Левая часть - Политика конфиденциальности */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <a 
              href="/privacy-policy" 
              className="text-white text-sm font-ubuntu hover:text-[#00cfff] transition-colors duration-300"
            >
              Политика конфиденциальности
            </a>
          </div>

          {/* Правая часть - Back to top с разделителем */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-4">
            
            {/* Вертикальный разделитель со стрелкой */}
            <div className="relative">
              {/* Вертикальная линия */}
              <div className="w-px h-8 bg-white"></div>
              
              {/* Стрелка наверх */}
              <div className="absolute -top-1 -left-1 w-2 h-2">
                <div className="w-full h-full border-t border-r border-white transform rotate-[-45deg]"></div>
              </div>
            </div>

            {/* Кнопка Back to top */}
            <button 
              onClick={scrollToTop}
              className="text-white text-sm font-ubuntu hover:text-[#00cfff] transition-colors duration-300 
                         focus:outline-none focus:text-[#00cfff]"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;