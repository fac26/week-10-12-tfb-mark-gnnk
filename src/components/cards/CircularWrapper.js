import styles from './CircularWrapper.module.css'

function CircularWrapper({
	diameter,
	borderWidth,
	borderColour,
	bgColor,
	children
}) {
	const wrapperStyle = {
		width: `${diameter}px`,
		height: `${diameter}px`,
		backgroundColor: bgColor,
		border: `${borderWidth}px solid ${borderColour}`,
		padding: `${borderWidth + 8}px`
	}
	return (
		<div
			className={styles.circleWrapper}
			style={wrapperStyle}>
			<div>{children}</div>
		</div>
	)
}

export default CircularWrapper
