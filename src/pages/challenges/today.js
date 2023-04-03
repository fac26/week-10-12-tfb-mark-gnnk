import Link from 'next/link'

import {
	getTodayScoreWithCategories,
	getTotalTodayScore
} from '../../model/helpers/today-tasks'
import DatePrinter from 'components/layout/DatePrinter'
import ProgressCircle from 'components/cards/ProgressCircle'
import styles from '../../styles/Challenges.module.css'
import Rectangle from 'components/cards/Rectangle'
import HeaderCard from 'components/cards/HeaderCard'

export default function Challenges({ habits, todayScore }) {
	return (
		<div className="bg">
			<HeaderCard
				preHeaderText="Your challenges for:"
				header={<DatePrinter type={'today'} />}
				percentage={todayScore}
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
										percentage={habit.score}
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
	const habits = await getTodayScoreWithCategories(userId)
	const todayScore = await getTotalTodayScore(userId)

	return {
		props: {
			habits,
			todayScore
		}
	}
}
