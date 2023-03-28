import styles from './Rectangle.module.css'

export default function Rectangle({ backgroundColor, children }) {
	return (
		<div
			className={styles.card}
			style={{ backgroundColor }}>
			{children}
		</div>
	)
}
