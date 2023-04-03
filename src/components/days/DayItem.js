import DatePrinter from '../layout/DatePrinter'
import Rectangle from '../cards/Rectangle'
import styles from './DayItem.module.css'
import Button from '../UI/Button'

export default function DayItem({ type, text, onClick, progressBar }) {
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
					<p>{message}</p>
					<DatePrinter type={type} />
					<p>{text}</p>
					<Button
						scaling="medium"
						onclick={onClick}>
						Review your tasks
					</Button>
				</div>
				<div className={styles.progressBarWrapper}>{progressBar}</div>
			</div>
		</Rectangle>
	)
}
