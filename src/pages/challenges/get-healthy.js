import Image from 'next/image'

export default function GetHealthy() {
	return (
		<>
			<h1>Get Healthy!</h1>
			<Image
				src="/figma/get-healthy.png"
				width={300}
				height={600}
				alt="get healthy challenge screenshot"
			/>
		</>
	)
}
