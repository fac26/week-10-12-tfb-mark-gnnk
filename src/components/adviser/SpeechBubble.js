import styles from './SpeechBubble.module.css'

function SpeechBubble({ children, speachBg }) {
	return (
		<div
			className={`${styles.bubble} ${styles['bubble-bottom-left']}`}
			style={{ '--bubble-bg': speachBg }} //add style to css prop
			contenteditable>
			{children}
		</div>
	)
}

export default SpeechBubble
