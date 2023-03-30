import Modal from '../UI/Modal'
export default function ConfirmationModal({ show, onConfirm, onCancel }) {
	if (!show) {
		return null
	}

	return (
		<Modal>
			<p>Are you sure you’ve completed this micro-habit?</p>
			<button onClick={onConfirm}>Yes</button>
			<button onClick={onCancel}>No</button>
		</Modal>
	)
}
