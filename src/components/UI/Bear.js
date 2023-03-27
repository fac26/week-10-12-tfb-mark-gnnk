import Image from 'next/image'
export default function Bear() {
	return (
		<>
			<Image
				src="/bear/pombear.png"
				width={75}
				height={125}
				alt="Pom Bear Image"
			/>
			<div>
				<p>Hey [userName], pick one of the options below to get started.</p>
			</div>
			<Image
				src="/bear/speech-bubble.svg"
				width={150}
				height={150}
			/>
		</>
	)
}
