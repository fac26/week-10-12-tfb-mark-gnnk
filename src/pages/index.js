import Image from 'next/image'
import Date from 'components/layout/Date'

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
			<p>
				<Date type="today" />
			</p>
		</>
	)
}
