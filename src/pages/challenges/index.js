import Link from 'next/link'
import Image from 'next/image'
import { getAllHabits } from '../../../model/habits'
import Days from 'components/layout/Days'
import ProgressCircle from 'components/cards/ProgressCircle'
import styles from './Challenges.module.css'

export default function Challenges({ tasks, habits }) {
	console.log(habits)
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<p>Your challenges for:</p>
					<div className={styles.date}>
						<Days type={'today'} />
					</div>
				</div>
				<div>
					<ProgressCircle percentage={50} />
				</div>
			</div>
			<div className={styles.challengeHeader}>
				<p>Pick a challenge for today</p>
			</div>

			<ul className={styles.habitContainer}>
				{habits.map((habit) => (
					<li key={habit.id}>
						<Link
							href={`/challenges/${habit.name.toLowerCase().replace(' ', '-')}`}
							className={styles.challengeBox}>
							<div>
								<h3>{habit.name}</h3>
								<p>Micro-habits to help you {habit.name}</p>
							</div>
							<div>
								<ProgressCircle
									percentage={50}
									textColor="red"
									pathColor="var(--main-lavendar)"
									trailColor="transparent"
									width={75}
									strokeWidth={8}
								/>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
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
