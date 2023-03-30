import Image from 'next/image'
import ChallengeCategoryList from '../../components/challenges/ChallengeCategoryList'

export default function GetPrepared({ tasks }) {
	const completedHandler = async (taskId) => {
		const response = await fetch('http://localhost:3000/api/update-status', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ taskId: 1, date: '2023-03-24' })
		})

		if (response.ok) {
			console.log(`Task ${taskId} has been marked as completed`)
		} else {
			console.error(response.statusText)
		}
		console.log(taskId, ' from pages')
	}

	console.log(tasks)
	return (
		<>
			<h1>Get Prepared!</h1>
			<Image
				src="/figma/get-prepared.png"
				width={300}
				height={600}
				alt="get prepared challenge screenshot"
			/>
			<ChallengeCategoryList
				tasks={tasks}
				onCompleted={completedHandler}
			/>
		</>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	// Fetch the tasks data for the user from the API endpoint
	const response = await fetch(
		`http://localhost:3000/api/get-prepared?userId=${userId}`
	)
	const tasks = await response.json()
	console.log(tasks, 'getPrepared.js')

	// Pass the tasks data as a prop to the page component
	return {
		props: {
			tasks
		}
	}
}
