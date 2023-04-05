import styles from './Modal.module.css'
function Modal({ children, className }) {
	const modalStyle = (className = `${styles.modal} ${className}`)
	return <div className={modalStyle}>{children}</div>
}

export default Modal
