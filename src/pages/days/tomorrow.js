import Image from 'next/image'

export default function Tomorrow() {
	return (
		<>
			<h1>Tomorrow</h1>
			<Image
				src="/figma/tomorrow.png"
				width={300}
				height={600}
				alt="yesterday screenshot"
			/>
		</>
	)
}
