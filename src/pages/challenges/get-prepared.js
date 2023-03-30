import ChallengeCategoryList from 'components/challenges/ChallengeCategoryList'
import HeaderCard from 'components/cards/HeaderCard'

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
	}

	return (
		<div className="bg">
			<HeaderCard
				preHeaderText="Your challenges for:"
				header="Get prepared"
				percentage={75}
				textColor="black"
				pathColor="var(--main-lavendar)"
				trailColor="transparent"
				width={110}
				strokeWidth={10}
			/>
			<div className="main-container">
				<ChallengeCategoryList
					tasks={tasks}
					onCompleted={completedHandler}
				/>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const userId = 1
	const response = await fetch(
		`http://localhost:3000/api/get-prepared?userId=${userId}`
	)
	const tasks = await response.json()

	return {
		props: {
			tasks
		}
	}
}
