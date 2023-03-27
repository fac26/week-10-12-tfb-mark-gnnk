import styles from './button.module.css'

export default function Button({ type, children, onClick }) {
	let classes = styles.container

	switch (type) {
		case 'add':
			classes += ` ${styles.add} ${styles.bg_blu}`
			children = 'ADD'
			break
		case 'review':
			classes += ` ${styles.review} ${styles.bg_blu}`
			children = 'Review your tasks'
			break
		default:
			children = 'Default'
			break
	}

	return (
		<button
			className={classes}
			onClick={onClick}>
			{children}
		</button>
	)
}
