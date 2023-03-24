import Image from 'next/image'
export default function Days() {
	return (
		<>
			<h1>Days</h1>
			<Image
				src="/figma/days.png"
				width={300}
				height={600}
				alt="days screenshot"
			/>
		</>
	)
}
