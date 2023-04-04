import Link from 'next/link'

import { getAllTasks } from '../../model/tasks'
import DatePrinter from 'components/layout/DatePrinter'
import ProgressCircle from 'components/cards/ProgressCircle'
import styles from '../../styles/Challenges.module.css'
import Rectangle from 'components/cards/Rectangle'
import HeaderCard from 'components/cards/HeaderCard'

export default function AddTask({ tasks }) {
	return (
		<div className="bg">
			<h2></h2>
			<div className={styles.challengeHeader}>
				<p>Pick a challenge for today</p>
			</div>

			<ul className="main-container">
				{tasks.map((task) => (
					<li key={task.id}>
						<p>{task.name}</p>
						<p>{tasks.category_id}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	const tasks = await getAllTasks(userId)

	return {
		props: {
			tasks
		}
	}
}
