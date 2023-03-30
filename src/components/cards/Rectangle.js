import styles from './Rectangle.module.css'

export default function Rectangle({
	backgroundColor,
	width,
	display,
	justifyContent,
	textAlign,
	children
}) {
	return (
		<div
			className={styles.card}
			style={{
				backgroundColor,
				width,
				display,
				alignItems: 'center',
				justifyContent,
				textAlign
			}}>
			{children}
		</div>
	)
}
