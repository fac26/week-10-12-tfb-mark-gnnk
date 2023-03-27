//reusable button component using button css module
import { useState } from 'react'
import styles from './button.module.css'

export default function Button({ type, children }) {
	const [isActive, setIsActive] = useState(false)

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

	const handleClick = () => {
		setIsActive(true)
	}

	return (
		<button
			className={classes}
			onClick={handleClick}>
			{content}
		</button>
	)
}
