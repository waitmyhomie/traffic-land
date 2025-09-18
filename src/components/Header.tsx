import logoImg from '../assets/logo.svg'

export default function Header() {
	return (
		<header className="absolute top-0 left-[300px] w-[1320px] h-[124px] max-[480px]:static max-[480px]:w-full max-[480px]:h-[72px] max-[480px]:flex max-[480px]:items-center max-[480px]:px-4">
			<div className="absolute left-[14px] top-[41px] w-[192.615px] h-[20.57px] max-[480px]:static max-[480px]:w-[154px] max-[480px]:h-[16px]">
				<img src={logoImg} alt="Traffic Minds" className="w-full h-full" />
			</div>
			<nav className="absolute top-[42px] flex items-center gap-[45px] max-[480px]:hidden" style={{ left: '307px' }}>
				<a href="#" className="text-[#989898] text-[16px] font-semibold hover:text-white transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>Вакансии</a>
				<a href="#" className="text-[#989898] text-[16px] font-semibold hover:text-white transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>Сотрудничество</a>
			</nav>
		</header>
	)
}


