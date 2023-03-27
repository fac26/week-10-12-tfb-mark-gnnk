import CircularWrapper from 'components/cards/CircularWrapper'
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
			<CircularWrapper
				diameter={100}
				borderWidth={8}
				borderColour="yellow"
				bgColor="transparent">
				<div>
					<h1>hi there</h1>Text is here dfg dfgdg dfg fgh gfh gfhfgjgjghj
					fgfhfghgfhfh
				</div>
			</CircularWrapper>
		</>
	)
}
