import Adviser from 'components/adviser/Adviser'
import styles from '../../styles/Days.module.css'
import DayList from '../../components/days/DayList'

export default function Days() {
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
				<DayList />
			</div>
		</div>
	)
}

// export async function getServerSideProps(context) {
// 	//const userId = context.req.session.userId

// 	const userId = 1
// 	const today = new Date().toISOString().split('T')[0]
// 	const response = await fetch(
// 		`http://localhost:3000/api/tasks?userId=${userId}&date=${today}`
// 	)

// 	const score = await response.json()
// 	console.log(score, ' home page getServerSideProps')

// 	return {
// 		props: {
// 			score: score.score
// 		}
// 	}
// }