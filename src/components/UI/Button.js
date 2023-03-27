import styles from './button.module.css'

export default function Button({ type, children }) {
	let classes = styles.container
	let content = children

	switch (type) {
		case 'add':
			classes += ` ${styles.add}`
			content = 'ADD'
			break
		case 'review':
			classes += ` ${styles.review}`
			content = 'Review your tasks'
			break
		default:
			content = 'Default'
			break
	}

	return (
		<button
			className={classes}
			onClick={handleClick}>
			{content}
		</button>
	)
}
