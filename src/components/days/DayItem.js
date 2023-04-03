import DatePrinter from '../layout/DatePrinter'
import Rectangle from '../cards/Rectangle'
import styles from './DayItem.module.css'
import Button from '../UI/Button'
import Link from 'next/link'
import ProgressCircle from 'components/cards/ProgressCircle'
export default function DayItem({ type, text, href, percentage }) {
	const capitalise = type.charAt(0).toUpperCase() + type.slice(1)
	console.log(capitalise)
	let message
	if (type === 'yesterday') {
		message = `${capitalise} was:`
	} else {
		message = `${capitalise} is:`
	}
	return (
		<Rectangle backgroundColor="#FFF8F0">
			<div className={styles.flex}>
				<div className={styles.flexItem}>
					<p className={styles['day-indicator']}>{message}</p>
					<div className={styles.day}>
						<DatePrinter type={type} />
					</div>
					<p>{text}</p>
					<Link href={href}>
						<Button scaling="medium">Review your tasks</Button>
					</Link>
				</div>
				<div className={styles.progressBarWrapper}>
					<ProgressCircle
						percentage={percentage}
						textColor="black"
						pathColor="var(--main-lavender)"
						trailColor="transparent"
						width={120}
						strokeWidth={11}
					/>
				</div>
			</div>
		</Rectangle>
	)
}
