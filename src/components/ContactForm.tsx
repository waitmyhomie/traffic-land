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

        // Симуляция отправки формы
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Form submitted:', formData);

        // Здесь будет логика отправки на сервер

        setIsSubmitting(false);

        // Сброс формы после успешной отправки
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
        <section id="contact-form" className="relative py-16 lg:py-24 bg-black">
            <div className="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-0">

                {/* Desktop layout - точная копия из Figma */}
                <div className="hidden lg:block relative">
                    <div className="relative h-[500px] w-full">

                        {/* Левая колонка - заголовок и описание (позиция из Figma: left-[306px] top-[1072px]) */}
                        <div className="absolute left-[306px] top-[50px] w-[505.48px] flex flex-col gap-[30px]">

                            {/* Заголовок с многослойным эффектом - точная копия стилей */}
                            <div className="font-montserrat font-black text-[54px] uppercase leading-[36px] relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                                {/* Черные слои с обводкой */}
                                <div className="[grid-area:1_/_1] text-black mt-[18px] translate-y-[-50%]"
                                    style={{
                                        WebkitTextStrokeWidth: '1px',
                                        WebkitTextStrokeColor: '#00CFFF'
                                    }}>
                                    ИЩЕМ БАЙЕРОВ
                                </div>
                                <div className="[grid-area:1_/_1] text-black mt-[23px] translate-y-[-50%]"
                                    style={{
                                        WebkitTextStrokeWidth: '1px',
                                        WebkitTextStrokeColor: '#00CFFF'
                                    }}>
                                    ИЩЕМ БАЙЕРОВ
                                </div>
                                <div className="[grid-area:1_/_1] text-black mt-[28px] translate-y-[-50%]"
                                    style={{
                                        WebkitTextStrokeWidth: '1px',
                                        WebkitTextStrokeColor: '#00CFFF'
                                    }}>
                                    ИЩЕМ БАЙЕРОВ
                                </div>
                                {/* Белый текст поверх */}
                                <div className="[grid-area:1_/_1] text-white mt-[31px] translate-y-[-50%]">
                                    ИЩЕМ БАЙЕРОВ
                                </div>
                            </div>

                            {/* Описание */}
                            <div className="font-ubuntu text-[24px] leading-[30px] text-white h-[57px] w-full">
                                <p className="mb-0">Готовы обсудить условия сотрудничества по</p>
                                <p>любым вопросам</p>
                            </div>
                        </div>

                        {/* Правая колонка - форма (позиция из Figma: left-[981.48px] top-[1049px]) */}
                        <div className="absolute left-[981.48px] top-0 w-[633px] h-[373px]">
                            <form onSubmit={handleSubmit} className="relative size-full">

                                {/* Лейблы */}
                                <div className="absolute top-0 left-0 right-[69.67%] h-[31px] flex items-center">
                                    <label className="font-montserrat font-normal text-[20px] leading-[31px] text-white uppercase">
                                        Имя и фамилия
                                    </label>
                                </div>

                                <div className="absolute top-0 left-[52.13%] right-[29.86%] h-[31px] flex items-center">
                                    <label className="font-montserrat font-normal text-[20px] leading-[31px] text-white uppercase">
                                        Telegram
                                    </label>
                                </div>

                                {/* Поля ввода - первая строка */}
                                <div className="absolute top-[10.99%] bottom-[71.31%] left-0 right-0">
                                    {/* Поле имени */}
                                    <div className="absolute left-0 right-[52.13%] top-0 bottom-0">
                                        <div className="relative size-full">
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Имя и фамилия"
                                                className="w-full h-full px-[17px] bg-transparent rounded-[18px] border border-[#bdbdbd] 
                                 text-white placeholder-[#bdbdbd] font-ubuntu text-[16px]
                                 focus:outline-none focus:border-[#00cfff] transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Поле телеграма */}
                                    <div className="absolute left-[52.13%] right-0 top-0 bottom-0">
                                        <div className="relative size-full">
                                            <input
                                                type="text"
                                                name="telegram"
                                                value={formData.telegram}
                                                onChange={handleInputChange}
                                                placeholder="@"
                                                className="w-full h-full px-[17px] bg-transparent rounded-[18px] border border-[#bdbdbd] 
                                 text-white placeholder-[#bdbdbd] font-ubuntu text-[16px]
                                 focus:outline-none focus:border-[#00cfff] transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Лейбл комментария */}
                                <div className="absolute top-[34.05%] bottom-[57.64%] left-0 right-[72.83%] flex items-center">
                                    <label className="font-montserrat font-normal text-[20px] leading-[31px] text-white uppercase">
                                        Комментарий
                                    </label>
                                </div>

                                {/* Поле комментария */}
                                <div className="absolute top-[45.04%] bottom-[37.27%] left-0 right-0">
                                    <div className="relative size-full">
                                        <textarea
                                            name="comment"
                                            value={formData.comment}
                                            onChange={handleInputChange}
                                            placeholder="Комментарий"
                                            className="w-full h-full px-[17px] py-[12px] bg-transparent rounded-[18px] border border-[#bdbdbd] 
                               text-white placeholder-[#bdbdbd] font-ubuntu text-[15.75px] resize-none
                               focus:outline-none focus:border-[#00cfff] transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Кнопка отправки */}
                                <div className="absolute top-[79.09%] bottom-0 left-0 right-0">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-full bg-[#01415f] hover:bg-[#01415f] disabled:bg-[#01415f]/70
                             text-white font-montserrat font-bold text-[24px] leading-[36px] uppercase 
                             rounded-[18px] px-[140px] py-[21px]
                             transition-all duration-300 
                             transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100
                             disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {isSubmitting ? 'ОТПРАВЛЯЕМ...' : 'СТАТЬ ЧАСТЬЮ КОМАНДЫ'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet layout - адаптивная версия */}
                <div className="lg:hidden">
                    <div >

                        {/* Заголовок для мобильных - ИСПРАВЛЕННАЯ ВЕРСИЯ */}
                        {/* Заголовок для мобильных - ИСПРАВЛЕННАЯ ВЕРСИЯ */}
                        <div className="text-center mb-[10px]">
                            <div className="font-montserrat font-black text-[32px] sm:text-[40px] uppercase leading-[36px] sm:leading-[42px] relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                                {/* Черные слои с обводкой - точные позиции из Figma */}
                                <div className="[grid-area:1_/_1] text-black mt-[18px] translate-y-[-50%]"
                                    style={{
                                        WebkitTextStrokeWidth: '1px',
                                        WebkitTextStrokeColor: '#00CFFF'
                                    }}>
                                    ИЩЕМ БАЙЕРОВ
                                </div>
                                <div className="[grid-area:1_/_1] text-black mt-[23px] translate-y-[-50%]"
                                    style={{
                                        WebkitTextStrokeWidth: '1px',
                                        WebkitTextStrokeColor: '#00CFFF'
                                    }}>
                                    ИЩЕМ БАЙЕРОВ
                                </div>
                                <div className="[grid-area:1_/_1] text-black mt-[28px] translate-y-[-50%]"
                                    style={{
                                        WebkitTextStrokeWidth: '1px',
                                        WebkitTextStrokeColor: '#00CFFF'
                                    }}>
                                    ИЩЕМ БАЙЕРОВ
                                </div>
                                {/* Белый текст поверх - финальная позиция */}
                                <div className="[grid-area:1_/_1] text-white mt-[31px] translate-y-[-50%]">
                                    ИЩЕМ БАЙЕРОВ
                                </div>
                            </div>

                            {/* Описание для мобильных - точно как в дизайне с переносом строки */}

                        </div>

                        <div className="font-ubuntu text-[16px] leading-[26px] font-normal text-white max-w-[303px] mx-auto flex flex-col flex-shrink-0 justify-center mb-8">
                            <p className="mb-0">Готовы обсудить условия сотрудничества по любым вопросам</p>

                        </div>

                        {/* Форма для мобильных - точные размеры из Figma */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] items-start w-full max-w-[303px] mx-auto">

                            {/* Поле "Имя и фамилия" */}
                            <div className="flex flex-col gap-[10px] items-start w-full">
                                <label className="font-montserrat font-normal text-[16px] leading-[31px] text-white uppercase">
                                    Имя и фамилия
                                </label>
                                <div className="relative w-[303px] h-[50px]">
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Имя и фамилия"
                                        className="w-full h-full px-[17px] bg-transparent border border-[#bdbdbd] rounded-[18px] 
                         text-white placeholder-[#bdbdbd] font-ubuntu text-[16px]
                         focus:outline-none focus:border-[#01415f] transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Поле "Telegram" */}
                            <div className="flex flex-col gap-[10px] items-start w-full">
                                <label className="font-montserrat font-normal text-[15px] leading-[31px] text-white uppercase">
                                    Telegram
                                </label>
                                <div className="relative w-[303px] h-[50px]">
                                    <input
                                        type="text"
                                        name="telegram"
                                        value={formData.telegram}
                                        onChange={handleInputChange}
                                        placeholder="@"
                                        className="w-full h-full px-[17px] bg-transparent border border-[#bdbdbd] rounded-[18px] 
                         text-white placeholder-[#bdbdbd] font-ubuntu text-[16px]
                         focus:outline-none focus:border-[#01415f] transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Поле "Комментарий" */}
                            <div className="flex flex-col gap-[10px] items-start w-full">
                                <label className="font-montserrat font-normal text-[15px] leading-[31px] text-white uppercase">
                                    Комментарий
                                </label>
                                <div className="relative w-[303px] h-[50px]">
                                    <textarea
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleInputChange}
                                        placeholder="Комментарий"
                                        className="w-full h-full px-[17px] py-[12px] bg-transparent border border-[#bdbdbd] rounded-[18px] 
                         text-white placeholder-[#bdbdbd] font-ubuntu text-[15.75px] resize-none
                         focus:outline-none focus:border-[#01415f] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Кнопка отправки - точные размеры из Figma */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-[303px] h-[64px] bg-[#01415f] hover:bg-[#01415f] disabled:bg-[#01415f]/70
                   px-[30px] py-[14px] rounded-[18px] flex-shrink-0
                   transition-all duration-300 
                   transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100
                   disabled:cursor-not-allowed flex items-center justify-center gap-[10px] "
                                style={{
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    fontFamily: 'Montserrat',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '36px',
                                    textTransform: 'uppercase'
                                }}
                            >
                                {isSubmitting ? 'ОТПРАВЛЯЕМ...' : 'СТАТЬ ЧАСТЬЮ КОМАНДЫ'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;