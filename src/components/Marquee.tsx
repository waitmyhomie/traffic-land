import React from 'react';

interface MarqueeProps {
  text?: string;
  speed?: number; // секунды
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text = 'МЫ ИЩЕМ БАЙЕРОВ В КОМАНДУ!',
  speed = 30,
  className = ''
}) => {
  // Создаём массив для повторения текста
  const repeatedText = Array(3).fill(text).join(' ');
  
  return (
    <div className={`absolute bottom-0 left-0 right-0 h-24 sm:h-32 overflow-hidden bg-black ${className}`}>
      {/* Top Line */}
      <div className="relative h-12 sm:h-16 overflow-hidden flex items-center">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 lg:w-56 
                      bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        
        {/* Scrolling Content */}
        <div 
          className="flex absolute whitespace-nowrap"
          style={{
            animation: `marquee ${speed}s linear infinite`
          }}
        >
          {[1, 2].map(i => (
            <span key={i} className="font-montserrat font-black uppercase 
                                   text-2xl sm:text-3xl lg:text-5xl xl:text-[54px] 
                                   text-white pr-8 select-none">
              {repeatedText}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Line - Reverse */}
      <div className="relative h-12 sm:h-16 overflow-hidden flex items-center">
        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 lg:w-56 
                      bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        
        {/* Scrolling Content Reverse */}
        <div 
          className="flex absolute whitespace-nowrap"
          style={{
            animation: `marquee-reverse ${speed}s linear infinite`
          }}
        >
          {[1, 2].map(i => (
            <span key={i} className="font-montserrat font-black uppercase 
                                   text-2xl sm:text-3xl lg:text-5xl xl:text-[54px] 
                                   text-white pr-8 select-none">
              {repeatedText}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;