import styles from './Backdrop.module.css'
function Backdrop({ opacity, children }) {
	return (
		<div
			className={styles.backdrop}
			style={{ opacity }}>
			{children}
		</div>
	)
}

export default Backdrop
