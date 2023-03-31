import Image from 'next/image'
import HeaderCard from 'components/cards/HeaderCard'
import ChallengeCategoryList from 'components/challenges/ChallengeCategoryList'
import styles from '../../styles/Challenges.module.css'
import DatePrinter from '../../components/layout/DatePrinter'

export default function GetHealthy({ tasks }) {
	const completedHandler = async (taskId) => {
		const response = await fetch('http//localhost:3000/api/update-status', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ taskId: 1, date: '2023-03-29' })
		})

		if (response.ok) {
			console.log(`task ${taskId} has been ticked`)
		} else {
			console.error(response.statusText)
		}
		console.log(taskId, ' from pages')
	}

	console.log(tasks)
	return (
		<div className="bg">
			<HeaderCard

				preHeaderText={<DatePrinter type={'today'} />}
        
				header="Get healthy"
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
	const userId = 1
	const response = await fetch(
		`http://localhost:3000/api/get-healthy?userId=${userId}`
	)
	const tasks = await response.json()
	console.log(tasks, ' getHealthy.js')

	return {
		props: {
			tasks
		}
	}
}
