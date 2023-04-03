import styles from './DarkModal.module.css'
function Modal({ children }) {
	return <div className={styles.darkmodal}>{children}</div>
}

export default Modal
