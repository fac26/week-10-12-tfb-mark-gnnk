import Image from 'next/image'
import SpeachBubble from './SpeachBubble'
import styles from './Adviser.module.css'
function Adviser({ src, text, speachBg }) {
	return (
		<div className={styles.container}>
			<SpeachBubble speachBg={speachBg}>{text}</SpeachBubble>
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
