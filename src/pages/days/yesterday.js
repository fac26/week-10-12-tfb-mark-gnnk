import Image from 'next/image'

export default function Yesterday() {
	return (
		<>
			<h1>Previous Day</h1>
			<Image
				src="/figma/yesterday.png"
				width={300}
				height={600}
				alt="yesterday screenshot"
			/>
		</>
	)
}
