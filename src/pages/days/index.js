import Adviser from 'components/adviser/Adviser'
import styles from '../../styles/Days.module.css'
import DayList from '../../components/days/DayList'
import { getTotalTodayScore } from '../../model/helpers/today-tasks'
import { getYesterdayScore } from '../../model/helpers/yesterday-tasks'
import { useRouter } from 'next/router'

export default function Days({ yesterdayScore, todayScore }) {
	return (
		<div className="bg">
			<div className={`${styles.adviser} main-container`}>
				<Adviser
					src="/icons/bear.png"
					text="Welcome back! Click on one of the days to see how you're getting on with your habits."
					speechBg={`var(--main-white)`}
				/>
			</div>
			<div className={`${styles.flex} ${styles.center} main-container`}>
				<DayList
					yesterdayScore={yesterdayScore}
					todayScore={todayScore}
				/>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	const todayScore = await getTotalTodayScore(userId)
	const yesterdayScore = await getYesterdayScore(userId)

	return {
		props: {
			yesterdayScore,
			todayScore
		}
	}
}
