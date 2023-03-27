import Circle from 'components/cards/PercentageCircle'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<div>
				<h1>Home</h1>
				<Image
					src="/figma/homepage.png"
					width={300}
					height={600}
					alt="days screenshot"
				/>
			</div>
			
		</>
	)
}
