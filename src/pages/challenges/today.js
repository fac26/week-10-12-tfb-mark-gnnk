import Link from 'next/link'
import Image from 'next/image'
import { getAllHabits } from '../../model/habits'
import DatePrinter from 'components/layout/DatePrinter'
import ProgressCircle from 'components/cards/ProgressCircle'
import styles from '../../styles/Challenges.module.css'
import Rectangle from 'components/cards/Rectangle'
import HeaderCard from 'components/cards/HeaderCard'

export default function Challenges({ habits }) {
	return (
		<div className="bg">
			<HeaderCard
				preHeaderText="Your challenges for:"
				header={<DatePrinter type={'today'} />}
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

			<ul className="main-container">
				{habits.map((habit) => (
					<li key={habit.id}>
						<Link
							href={`/challenges/${habit.name
								.toLowerCase()
								.replace(' ', '-')}`}>
							<Rectangle
								backgroundColor="#FFF8F0"
								display="flex"
								justifyContent="space-around"
								textAlign="center">
								<div className={styles.challengeContainer}>
									<h3 className={styles.challengeTitle}>{habit.name}</h3>
									<p className={styles.challengeDesc}>
										Micro-habits to help you {habit.name.toLowerCase()}
									</p>
								</div>
								<div>
									<ProgressCircle
										percentage={75}
										textColor="var(--main-text-black"
										pathColor="var(--main-lavendar)"
										trailColor="transparent"
										width={70}
										strokeWidth={10}
									/>
								</div>
							</Rectangle>
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
