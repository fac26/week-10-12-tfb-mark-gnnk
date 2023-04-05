import Image from 'next/image'
import SpeechBubble from './SpeechBubble'
import styles from './Adviser.module.css'
function Adviser({ src, text, speechBg }) {
	return (
		<div className={styles.container}>
			<SpeechBubble speechBg={speechBg}>{text}</SpeechBubble>
			<Image
				src={src}
				alt="bear"
				width={100}
				height={120}
			/>
		</div>
	)
}
export default Adviser
