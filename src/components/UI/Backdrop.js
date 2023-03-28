import styles from './Backdrop.module.css'
function Backdrop({ opacity }) {
	return (
		<div
			className={styles.backdrop}
			style={{ opacity }}></div>
	)
}

export default Backdrop
