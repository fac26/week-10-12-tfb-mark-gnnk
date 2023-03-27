import ProgressCircle from 'components/cards/ProgressCircle'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<h1>Home page</h1>
			<Image
				src="/figma/home-page.png"
				width={300}
				height={600}
				alt="home page screenshot"
			/>
			<ProgressCircle percentage={36} />
		</>
	)
}
