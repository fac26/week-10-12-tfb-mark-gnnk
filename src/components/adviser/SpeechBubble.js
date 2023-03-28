import styles from './SpeechBubble.module.css'

function SpeechBubble({ children, speechBg }) {
	return (
		<div
			className={`${styles.bubble} ${styles['bubble-bottom-left']}`}
			style={{ '--bubble-bg': speechBg }} //add style to css prop
		>
			{children}
		</div>
	)
}

export default SpeechBubble
