import brainImg from '../assets/brain.png'

export default function Hero() {
	return (
		<section className="absolute left-0 right-0 top-[124px] h-[805px] max-[480px]:static max-[480px]:pt-6 max-[480px]:pb-4">
			{/* Brain image */}
			<div className="absolute left-[320px] top-[130px] w-[391px] h-[389px] max-[480px]:static max-[480px]:mx-auto max-[480px]:w-[212px] max-[480px]:h-[211px]">
				<img src={brainImg} alt="AI Brain Circuit" className="w-full h-full object-cover" />
			</div>
			{/* Text/CTA */}
			<div className="absolute h-[287px] w-[657px] max-[480px]:static max-[480px]:px-4" style={{ left: '44.27%', right: '15.63%', top: 'calc(50% - 77.91px)', transform: 'translateY(-50%)' }}>
				<div className="relative w-full h-full max-[480px]:h-auto">
					<div className="absolute left-[12px] top-[-16.09px] w-[657px] max-[480px]:static">
						<h1 className="text-white text-[64px] font-black uppercase leading-[76.8px] mb-[20px] max-[480px]:text-[28px] max-[480px]:leading-[34px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>TRAFFIC MINDS</h1>
						<p className="text-white text-[25px] leading-[32px] font-normal max-[480px]:text-[14px] max-[480px]:leading-[20px]" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
							Мы генерируем половину идей, которые вы ищете в спай-сервисах и ПП - подключайся к источнику, а не к копиям!
						</p>
					</div>
					<button className="absolute left-[12px] top-[208.71px] px-[60px] py-[21px] bg-[#00cfff] rounded-[18px] text-black text-[24px] font-bold uppercase hover:bg-[#00b8e6] transition-colors max-[480px]:static max-[480px]:mt-4 max-[480px]:mx-auto max-[480px]:block max-[480px]:px-6 max-[480px]:py-3 max-[480px]:text-[16px]">
						хочу в команду
					</button>
				</div>
			</div>
		</section>
	)
}


