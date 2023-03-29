import Image from 'next/image'
import ChallengeCategoryList from 'components/challenges/ChallengeCategoryList'

export default function GetOrganized({ tasks }) {
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
	}

	console.log(tasks)
	return (
		<>
			return <h1>Get Reflective!</h1>
			<Image
				src="/figma/get-reflective.png"
				width={300}
				height={600}
				alt="get reflective challenge screenshot"
			/>
			<ChallengeCategoryList
				tasks={tasks}
				onCompleted={completedHandler}
			/>
		</>
	)
}

export async function getServerSideProps(context) {
	const userId = 1
	const response = await fetch(
		`http://localhost:3000/api/get-organised?userId=${userId}`
	)
	const tasks = await response.json()
	console.log(tasks, ' getReflective.js')

	return {
		props: {
			tasks
		}
	}
}
