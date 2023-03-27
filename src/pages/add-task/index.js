import Image from 'next/image'
export default function AddTask() {
	return (
		<>
			<h1>Add micro habits</h1>
			<Image
				src="/figma/add-task.png"
				width={300}
				height={600}
				alt="days screenshot"
			/>
		</>
	)
}
