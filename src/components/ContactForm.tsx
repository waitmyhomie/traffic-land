import React, { useState } from 'react';
import FormSkeleton from './FormSkeleton';
import type { ToastMethods } from '../hooks/useToast';

interface ContactFormProps {
  toast: ToastMethods;
}

const ContactForm: React.FC<ContactFormProps> = ({ toast }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        telegram: '',
        comment: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Валидация
        if (formData.fullName.trim().length < 2) {
            toast.warning('Имя должно содержать минимум 2 символа');
            return;
        }

        const tgRegex = /^@?[\w\d_]{5,32}$/;
        if (!tgRegex.test(formData.telegram.trim())) {
            toast.warning('Введите корректный Telegram (минимум 5 символов)');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:4000/send", {  
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
                setFormData({ fullName: "", telegram: "", comment: "" });
            } else {
                toast.error('Ошибка при отправке. Пожалуйста, попробуйте позже.');
            }
        } catch (error) {
            console.error(error);
            toast.error('Не удалось подключиться к серверу. Проверьте соединение.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Показываем skeleton во время загрузки
    if (isLoading) {
        return <FormSkeleton />;
    }

    return (
        <section id="contact-form" className="relative flex-1 flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-black">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0">
                <div className="w-full max-w-[1400px] mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">

                        {/* Left column - title and description */}
                        <div className="w-full lg:w-[45%] xl:w-[42%] 2xl:w-[40%] flex-shrink-0 
                                        flex flex-col items-center justify-center lg:items-start lg:justify-start">
                            <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
                                <div className="font-montserrat font-black uppercase leading-[0.9] relative mb-6 md:mb-8 lg:mb-8 xl:mb-10
                                            text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px]">
                                    <div className="relative inline-grid place-items-center lg:place-items-start mt-10">
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
                                        <div className="col-start-1 row-start-1 text-white"
                                            style={{
                                                transform: 'translateY(-5px)'
                                            }}>
                                            ИЩЕМ БАЙЕРОВ
                                        </div>
                                    </div>
                                </div>

                                <div className="font-ubuntu text-white leading-[1.6] w-full
                                              text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]
                                              text-center lg:text-left max-w-[280px] sm:max-w-[400px] lg:max-w-none mx-auto lg:mx-0">
                                    <p className="mb-0">Готовы обсудить условия сотрудничества по любым вопросам</p>
                                </div>
                            </div>
                        </div>

                        {/* Right column - form */}
                        <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[57%] flex-shrink-0">
                            <form onSubmit={handleSubmit} className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none mx-auto">
                                <div className="flex flex-col sm:flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 xl:gap-8 mb-5 sm:mb-6 lg:mb-8">
                                    <div className="w-full">
                                        <label className="block font-montserrat font-normal text-white uppercase mb-2 sm:mb-3
                                                             text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] 
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
                                                         disabled:opacity-50 disabled:cursor-not-allowed
                                                         px-4 sm:px-[17px]
                                                         h-[48px] sm:h-[52px] lg:h-[56px] xl:h-[60px] 2xl:h-[69px]
                                                         text-[14px] sm:text-[16px]"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block font-montserrat font-normal text-white uppercase mb-2 sm:mb-3
                                                             text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] 
                                                             leading-[1.9]">
                                            Telegram
                                        </label>
                                        <input
                                            type="text"
                                            name="telegram"
                                            value={formData.telegram}
                                            onChange={handleInputChange}
                                            placeholder="@username"
                                            className="w-full bg-transparent rounded-[18px] border border-[#bdbdbd] 
                                                         text-white placeholder-[#bdbdbd] font-ubuntu
                                                         focus:outline-none focus:border-[#00cfff] transition-colors
                                                         disabled:opacity-50 disabled:cursor-not-allowed
                                                         px-4 sm:px-[17px]
                                                         h-[48px] sm:h-[52px] lg:h-[56px] xl:h-[60px] 2xl:h-[69px]
                                                         text-[14px] sm:text-[16px]"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="w-full mb-5 sm:mb-6 lg:mb-8">
                                    <label className="block font-montserrat font-normal text-white uppercase mb-2 sm:mb-3
                                                         text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] 
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
                                                     disabled:opacity-50 disabled:cursor-not-allowed
                                                     px-4 sm:px-[17px] py-3 sm:py-[12px]
                                                     h-[60px] sm:h-[64px] lg:h-[66px] xl:h-[70px] 2xl:h-[66px]
                                                     text-[14px] sm:text-[15.75px]"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#01415f] hover:bg-[#01415e] disabled:bg-[#01415c]/70
                                                 text-white font-montserrat font-bold uppercase 
                                                 rounded-[18px] transition-all duration-300 
                                                 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100
                                                 disabled:cursor-not-allowed flex items-center justify-center gap-2
                                                 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-[140px]
                                                 py-3 sm:py-4 lg:py-4.5 xl:py-5 2xl:py-[21px]
                                                 h-[50px] sm:h-[56px] lg:h-[64px] xl:h-[70px] 2xl:h-[78px]
                                                 text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 
                                                 leading-[1.5]"
                                >
                                    {isSubmitting && (
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
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