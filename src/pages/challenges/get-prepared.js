import Image from 'next/image'

export default function GetPrepared() {
	return (
		<>
			<h1>Get Prepared!</h1>
			<Image
				src="/figma/get-prepared.png"
				width={300}
				height={600}
				alt="get prepared challenge screenshot"
			/>
		</>
	)
}
