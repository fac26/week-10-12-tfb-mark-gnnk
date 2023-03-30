import styles from '../../styles/Challenges.module.css'
import HeaderCard from 'components/cards/HeaderCard'
import ChallengeCategoryList from 'components/challenges/ChallengeCategoryList'
import Days from '../../components/layout/Days'

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
		console.log(taskId, ' from pages')
	}

	console.log(tasks)
	return (
		<div className="bg">
			<HeaderCard
				preHeaderText={<Days type={'today'} />}
				header="Get organised"
				percentage={75}
				textColor="black"
				pathColor="var(--main-lavendar)"
				trailColor="transparent"
				width={110}
				strokeWidth={10}
			/>
			<div className={styles.challengeHeader}>
				<p>Pick a challenge for today</p>
			</div>
			<div className="main-container">
				<ChallengeCategoryList
					tasks={tasks}
					onCompleted={completedHandler}
				/>
			</div>

			{/* <ul>
				{tasks.map((task) => (
					<li
						key={task.id}
						id={task.id}>
						<h2>{task.name}</h2>
						<p>{task.category_name}</p>
					</li>
				))}
			</ul> */}
		</div>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	// Fetch the tasks data for the user from the API endpoint
	const response = await fetch(
		`http://localhost:3000/api/get-organised?userId=${userId}`
	)
	const tasks = await response.json()
	console.log(tasks, ' getOragnised.js')

	// Pass the tasks data as a prop to the page component
	return {
		props: {
			tasks
		}
	}
}
