import Image from 'next/image'
import Modal from 'components/UI/Modal'
import Button from 'components/UI/Button'
import styles from './CongratulationsModal.module.css'

function CongratsModal({ title, message, buttonText, onClick }) {
	return (
		<Modal>
			<h2 className={styles.title}>{title}</h2>
			<Image
				src="/icons/cup.svg"
				alt="cup"
				width={40}
				height={40}
			/>
			<p className={styles.message}>{message}</p>
			<Button
				onClick={onClick}
				scaling="x_large"
				background="bg_purple">
				{buttonText}
			</Button>
		</Modal>
	)
}

export default CongratsModal
