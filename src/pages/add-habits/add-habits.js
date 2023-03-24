import Image from 'next/image'

export default function AddHabits() {
	return (
		<>
			<h1>Days</h1>
			<Image
				src="/figma/add-task.png"
				width={300}
				height={600}
				alt="days screenshot"
			/>
		</>
	)
}
