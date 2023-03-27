import Image from 'next/image'
import { getAllHabits } from '../../../model/habits'

export default function Challenges({ tasks, habits }) {
	console.log(habits)
	return (
		<>
			<h1>Challenges</h1>
			<Image
				src="/figma/challenges.png"
				width={300}
				height={600}
				alt="challenges screenshot"
			/>
			<ul>
				{habits.map((habit) => (
					<li key={habit.id}>{habit.name}</li>
				))}
			</ul>
		</>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	// Fetch the tasks data for the user from the API endpoint
	// const response = await fetch(
	// 	`http://localhost:3000/api/tasks?userId=${userId}`
	// )
	// const tasks = await response.json()
	// console.log(tasks, ' index.js')
	const habits = getAllHabits()

	return {
		props: {
			habits
		}
	}
}
