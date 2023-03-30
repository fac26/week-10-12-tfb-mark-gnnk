import CircularWrapper from 'components/cards/CircularWrapper'

import ProgressCircle from 'components/cards/ProgressCircle'
import Adviser from 'components/adviser/Adviser'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home({ score }) {
	const toFixedScore = Math.trunc(score * 100)

	console.log(toFixedScore, ' this is from home page')
	return (
		<div className="bg">
			<div className={`${styles.adviser} main-container`}>
				<Adviser
					src="/icons/bear.png"
					text="Hey [userName], pick one of the options below to get started."
					speechBg={`var(--main-white)`}
				/>
			</div>
			<div className={`${styles.flex} ${styles.center} main-container`}>
				<div className={styles['text-box']}>
					<p>Here’s how you’re doing far:</p>
					<h2>You’re doing great! Keep going</h2>
				</div>

				<ProgressCircle
					percentage={toFixedScore}
					textColor="var(--main-text-black)"
					pathColor="var(--main-dark-violet)"
					trailColor="var(--main-light-violet)"
					width={160}
					strokeWidth={11}
				/>
			</div>
			<div className={`${styles.flex} main-container`}>
				<Link
					href="/challenges/today"
					className={styles['flex-item']}>
					<CircularWrapper
						diameter={160}
						borderWidth={12}
						borderColour="#007CAB"
						bgColor="#FFFFFF">
						<h2>CHALLENGES</h2>
						<p>
							Take on some <span>challenges</span> for today
						</p>
					</CircularWrapper>
				</Link>
				<Link
					href="/days"
					className={styles['flex-item']}>
					<CircularWrapper
						diameter={160}
						borderWidth={12}
						borderColour="#C96563"
						bgColor="#FFFFFF">
						<h2>DAYS</h2>
						<p>
							See your
							<span> progress on a</span> calendar
						</p>
					</CircularWrapper>
				</Link>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	const today = new Date().toISOString().split('T')[0]
	const response = await fetch(
		`http://localhost:3000/api/tasks?userId=${userId}&date=${today}`
	)

	const score = await response.json()
	console.log(score, ' home page getServerSideProps')

	return {
		props: {
			score: score.score
		}
	}
}
