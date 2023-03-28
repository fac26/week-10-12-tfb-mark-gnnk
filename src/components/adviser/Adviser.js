import Image from 'next/image'
import SpeechBubble from './SpeechBubble'
import styles from './Adviser.module.css'
function Adviser({ src, text, speachBg }) {
	return (
		<div className={styles.container}>
			<SpeechBubble speachBg={speachBg}>{text}</SpeechBubble>
			<Image
				src={src}
				alt="bear"
				width={100}
				height={100}
			/>
		</div>
	)
}
export default Adviser
