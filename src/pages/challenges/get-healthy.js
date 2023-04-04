import styles from '../../styles/Challenges.module.css'
import HeaderCard from 'components/cards/HeaderCard'
import ChallengeCategoryList from 'components/challenges/ChallengeCategoryList'
import DatePrinter from '../../components/layout/DatePrinter'
import {
	getTodayTasksByCategory,
	getTodayScoreByCategory
} from 'model/helpers/today-tasks'
import { useState } from 'react'
import { useUserContext } from 'context/UserContext.js'

export default function GetHealthy({ tasks, progress }) {
	const [data, setData] = useState({ tasks: tasks, progress: progress })
	const userId = 1
	const ctx = useUserContext()

	const completedHandler = async (taskId) => {
		const taskPoints = data.tasks.find(
			(task) => task.id === Number(taskId)
		).points

		const response = await fetch('http://localhost:3000/api/update-status', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ userId: userId, taskId: taskId })
		})

		if (response.ok) {
			setData((prevState) => {
				const updatedTasks = prevState.tasks.map((task) =>
					task.id == taskId ? { ...task, status: 1 } : task
				)
				const completedTasks = updatedTasks.filter(
					(task) => task.status === 1
				).length
				const totalTasks = updatedTasks.length
				const newProgress = Math.round((completedTasks / totalTasks) * 100)

				return { tasks: updatedTasks, progress: newProgress }
			})
			ctx.updateUserPoints(taskPoints)
		} else {
			console.error(response.statusText)
		}
	}

	return (
		<div className="bg">
			<HeaderCard
				preHeaderText={<DatePrinter type={'today'} />}
				header="Get healthy"
				percentage={data.progress}
				textColor="black"
				pathColor="var(--main-lavender)"
				trailColor="transparent"
				width={110}
				strokeWidth={10}
			/>
			<div className={styles.challengeHeader}>
				<p>Pick a challenge for today</p>
			</div>
			<div className="main-container">
				<ChallengeCategoryList
					tasks={data.tasks}
					onCompleted={completedHandler}
				/>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const userId = 1
	const tasks = await getTodayTasksByCategory(userId, 3)
	const progress = await getTodayScoreByCategory(userId, 3)
	return {
		props: {
			tasks,
			progress
		}
	}
}
