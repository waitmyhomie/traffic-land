type MarqueeProps = {
	text?: string
	top?: number // px from the top of the section
	height?: number // total container height
	lineHeight?: number // height of each scrolling line
	gradientWidth?: number // px width of side gradients
	fontSize?: number // px font size of the text
	speedSec?: number // animation duration in seconds
}

const DEFAULT_TEXT = 'МЫ ИЩЕМ БАЙЕРОВ В КОМАНДУ! '

export default function Marquee({
	text = DEFAULT_TEXT.repeat(3),
	top = 707,
	height = 128,
	lineHeight = 64,
	gradientWidth = 224,
	fontSize = 54,
	speedSec = 30,
}: MarqueeProps) {
	const lineStyle: React.CSSProperties = {
		top: `${Math.round(lineHeight / 2 - 5)}px`,
		transform: 'translateY(-50%)',
		animationDuration: `${speedSec}s`,
	}

	const gradientLeft: React.CSSProperties = {
		width: `${gradientWidth}px`,
		background: 'linear-gradient(to right, #000000 16%, transparent)',
	}

	const gradientRight: React.CSSProperties = {
		width: `${gradientWidth}px`,
		background: 'linear-gradient(to left, #000000 16%, transparent)',
	}

	const textClass = `text-white font-black uppercase leading-[36px]`
	const textStyle: React.CSSProperties = { fontFamily: 'Montserrat, sans-serif', fontSize }

	return (
		<div
			className="absolute left-0 right-0 overflow-hidden max-[480px]:static max-[480px]:mt-6"
			style={{ top: `${top}px`, height: `${height}px` }}
		>
			{/* Top line */}
			<div className="relative w-full overflow-hidden" style={{ height: `${lineHeight}px` }}>
				<div className="absolute left-0 top-0 bottom-0 z-10 max-[480px]:hidden" style={gradientLeft} />
				<div className="absolute whitespace-nowrap animate-marquee" style={lineStyle}>
					<span className={textClass} style={textStyle}>{text}</span>
				</div>
			</div>
			{/* Bottom line (reverse) */}
			<div className="relative w-full overflow-hidden" style={{ height: `${lineHeight}px` }}>
				<div className="absolute right-0 top-0 bottom-0 z-10 max-[480px]:hidden" style={gradientRight} />
				<div className="absolute whitespace-nowrap animate-marquee-reverse" style={lineStyle}>
					<span className={textClass} style={textStyle}>{text}</span>
				</div>
			</div>
		</div>
	)
}


