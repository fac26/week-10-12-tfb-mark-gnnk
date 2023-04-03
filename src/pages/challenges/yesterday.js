import Link from 'next/link'

import {
	getYesterdayScoreWithCategories,
	getYesterdayScore
} from '../../model/helpers/yesterday-tasks'
import DatePrinter from 'components/layout/DatePrinter'
import ProgressCircle from 'components/cards/ProgressCircle'
import styles from '../../styles/Challenges.module.css'
import Rectangle from 'components/cards/Rectangle'
import HeaderCard from 'components/cards/HeaderCard'

export default function Yesterday({ habits, yesterdayScore }) {
	return (
		<div className="bg">
			<HeaderCard
				preHeaderText="Your challenges for:"
				header={<DatePrinter type={'yesterday'} />}
				percentage={yesterdayScore}
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
					</li>
				))}
			</ul>
		</div>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	const habits = await getYesterdayScoreWithCategories(userId)
	const yesterdayScore = await getYesterdayScore(userId)

	return {
		props: {
			habits,
			yesterdayScore
		}
	}
}
