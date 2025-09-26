import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        telegram: '',
        comment: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', formData);

        setIsSubmitting(false);
        setFormData({
            fullName: '',
            telegram: '',
            comment: ''
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section id="contact-form" className="relative flex-1 flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-black">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0">
                
                {/* Main container */}
                <div className="w-full max-w-[1400px] mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">

                        {/* Left column - title and description */}
                        <div className="w-full lg:w-[45%] xl:w-[42%] 2xl:w-[40%] flex-shrink-0 
                                        flex flex-col items-center justify-center lg:items-start lg:justify-start">
                            
                            {/* Container for centering on mobile, left align on desktop */}
                            <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
                                
                                {/* Title with layered effect - исправленная версия */}
                                <div className="font-montserrat font-black uppercase leading-[0.9] relative mb-6 md:mb-8 lg:mb-8 xl:mb-10
                                            text-[32px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px]">
                                    
                                    {/* Создаем centered container для мобильных с правильным позиционированием */}
                                    <div className="relative inline-grid place-items-center lg:place-items-start">
                                        {/* Black stroke layers - каждый с небольшим смещением для создания объема */}
                                        <div className="col-start-1 row-start-1 text-black"
                                            style={{
                                                WebkitTextStrokeWidth: '1px',
                                                WebkitTextStrokeColor: '#00CFFF',
                                                transform: 'translateY(-18px)'
                                            }}>
                                            ИЩЕМ БАЙЕРОВ
                                        </div>
                                        <div className="col-start-1 row-start-1 text-black"
                                            style={{
                                                WebkitTextStrokeWidth: '1px',
                                                WebkitTextStrokeColor: '#00CFFF',
                                                transform: 'translateY(-13px)'
                                            }}>
                                            ИЩЕМ БАЙЕРОВ
                                        </div>
                                        <div className="col-start-1 row-start-1 text-black"
                                            style={{
                                                WebkitTextStrokeWidth: '1px',
                                                WebkitTextStrokeColor: '#00CFFF',
                                                transform: 'translateY(-8px)'
                                            }}>
                                            ИЩЕМ БАЙЕРОВ
                                        </div>
                                        {/* White text on top - финальный белый слой */}
                                        <div className="col-start-1 row-start-1 text-white"
                                            style={{
                                                transform: 'translateY(-5px)'
                                            }}>
                                            ИЩЕМ БАЙЕРОВ
                                        </div>
                                    </div>
                                </div>

                                {/* Description - также центрируем на мобильных с правильными размерами */}
                                <div className="font-ubuntu text-white leading-[1.6] w-full
                                              text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]
                                              text-center lg:text-left max-w-[303px] sm:max-w-[500px] lg:max-w-none mx-auto lg:mx-0">
                                    <p className="mb-0">Готовы обсудить условия сотрудничества по любым вопросам</p>
                                </div>
                            </div>
                        </div>

                        {/* Right column - form */}
                        <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[57%] flex-shrink-0">
                            <form onSubmit={handleSubmit} className="w-full max-w-[303px] sm:max-w-[600px] lg:max-w-none mx-auto">

                                {/* First row - вертикально на мобильных, горизонтально на больших экранах */}
                                <div className="flex flex-col sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8 mb-5 sm:mb-6 md:mb-7 lg:mb-8">

                                    {/* Name field */}
                                    <div className="w-full">
                                        <label className="block font-montserrat font-normal text-white uppercase mb-2 sm:mb-3
                                                             text-[16px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] 
                                                             leading-[1.9]">
                                            Имя и фамилия
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Имя и фамилия"
                                            className="w-full bg-transparent rounded-[18px] border border-[#bdbdbd] 
                                                         text-white placeholder-[#bdbdbd] font-ubuntu
                                                         focus:outline-none focus:border-[#00cfff] transition-colors
                                                         px-[17px] sm:px-4 md:px-[17px]
                                                         h-[50px] sm:h-[48px] md:h-[52px] lg:h-[56px] xl:h-[60px] 2xl:h-[69px]
                                                         text-[16px] sm:text-[15px] md:text-[16px]"
                                            required
                                        />
                                    </div>

                                    {/* Telegram field */}
                                    <div className="w-full">
                                        <label className="block font-montserrat font-normal text-white uppercase mb-2 sm:mb-3
                                                             text-[15px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] 
                                                             leading-[1.9]">
                                            Telegram
                                        </label>
                                        <input
                                            type="text"
                                            name="telegram"
                                            value={formData.telegram}
                                            onChange={handleInputChange}
                                            placeholder="@"
                                            className="w-full bg-transparent rounded-[18px] border border-[#bdbdbd] 
                                                         text-white placeholder-[#bdbdbd] font-ubuntu
                                                         focus:outline-none focus:border-[#00cfff] transition-colors
                                                         px-[17px] sm:px-4 md:px-[17px]
                                                         h-[50px] sm:h-[48px] md:h-[52px] lg:h-[56px] xl:h-[60px] 2xl:h-[69px]
                                                         text-[16px] sm:text-[15px] md:text-[16px]"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Comment field */}
                                <div className="w-full mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                                    <label className="block font-montserrat font-normal text-white uppercase mb-2 sm:mb-3
                                                         text-[15px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] 
                                                         leading-[1.9]">
                                        Комментарий
                                    </label>
                                    <textarea
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleInputChange}
                                        placeholder="Комментарий"
                                        className="w-full bg-transparent rounded-[18px] border border-[#bdbdbd] 
                                                     text-white placeholder-[#bdbdbd] font-ubuntu resize-none
                                                     focus:outline-none focus:border-[#00cfff] transition-colors
                                                     px-[17px] sm:px-4 md:px-[17px] py-3 sm:py-3 md:py-[12px]
                                                     h-[50px] sm:h-[64px] md:h-[66px] lg:h-[68px] xl:h-[70px] 2xl:h-[66px]
                                                     text-[16px] sm:text-[15px] md:text-[15.75px]"
                                    />
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#01415f] hover:bg-[#01415e] disabled:bg-[#01415c]/70
                                                 text-white font-montserrat font-bold uppercase 
                                                 rounded-[18px] transition-all duration-300 
                                                 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100
                                                 disabled:cursor-not-allowed flex items-center justify-center
                                                 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px]
                                                 py-3 sm:py-3.5 md:py-4 lg:py-4.5 xl:py-5 2xl:py-[21px]
                                                 h-[54px] sm:h-[52px] md:h-[58px] lg:h-[64px] xl:h-[70px] 2xl:h-[78px]
                                                 text-[18px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 
                                                 leading-[1.5]"
                                >
                                    {isSubmitting ? 'ОТПРАВЛЯЕМ...' : 'СТАТЬ ЧАСТЬЮ КОМАНДЫ'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;