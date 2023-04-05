import Button from 'components/UI/Button'
import Modal from 'components/UI/Modal'
import styles from './ConfirmationModal.module.css'
export default function ConfirmationModal({ show, onConfirm, onCancel }) {
	if (!show) {
		return null
	}

	return (
		<Modal className={styles.container}>
			<p>Are you sure you’ve completed this micro-habit?</p>
			<div className={styles.btns}>
				<Button
					onClick={onConfirm}
					background="bg_purple">
					Yes
				</Button>
				<Button
					onClick={onCancel}
					background="bg_purple">
					No
				</Button>
			</div>
		</Modal>
	)
}
