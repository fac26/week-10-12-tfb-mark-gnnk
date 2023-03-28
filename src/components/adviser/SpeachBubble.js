import styles from './SpeachBubble.module.css'

function SpeachBubble({ children, speachBg }) {
	return (
		<div
			className={`${styles.bubble} ${styles['bubble-bottom-left']}`}
			style={{ '--bubble-bg': speachBg }} //add style to css prop
			contenteditable>
			{children}
		</div>
	)
}

export default SpeachBubble
