import Image from 'next/image'

export default function Today() {
	return (
		<>
			<h1>Today's challenges</h1>
			<Image
				src="/figma/today.png"
				width={300}
				height={600}
				alt="today screenshot"
			/>
		</>
	)
}
