import Image from 'next/image'

export default function Challenges() {
	return (
		<>
			<h1>Challenges</h1>
			<Image
				src="/figma/challenges.png"
				width={300}
				height={600}
				alt="challenges screenshot"
			/>
		</>
	)
}
