import CircularWrapper from 'components/cards/CircularWrapper'

import ProgressCircle from 'components/cards/ProgressCircle'

import Image from 'next/image'
import Link from 'next/link'
//import ProgressCircle from 'components/cards/ProgressCircle'
import styles from '../styles/Index.module.css'
export default function Home() {
	return (
		<>
			{/* <h1 className={styles['hey-home']}>Home page</h1>
			<Image
				src="/figma/home-page.png"
				width={300}
				height={600}
				alt="home page screenshot"
			/> */}
			<div className={styles.block}>
				<h2>bear say hey user name </h2>
			</div>
			<div className={`${styles.block} ${styles.action}`}>
				<div>
					<p>Here’s how you’re doing far:</p>
					<h2>You’re doing great! Keep going</h2>
				</div>
				<ProgressCircle percentage={20} />
			</div>
			<div className={`${styles.block} ${styles.action}`}>
				<Link
					href="/days/today"
					className={styles['action-item']}>
					<CircularWrapper
						diameter={100}
						borderWidth={8}
						borderColour="#007CAB"
						bgColor="#FFFFFF">
						<h2>CHALLENGES</h2>
						<p>Take on some challenges for today</p>
					</CircularWrapper>
				</Link>
				<Link
					href="/days"
					className={styles['action-item']}>
					<CircularWrapper
						diameter={100}
						borderWidth={8}
						borderColour="#C96563"
						bgColor="#FFFFFF">
						<h2>DAYS</h2>
						<p>See your progress on a calendar</p>
					</CircularWrapper>
				</Link>
			</div>
		</>
	)
}
