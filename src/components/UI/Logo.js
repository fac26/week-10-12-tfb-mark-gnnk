import Image from 'next/image'
import styles from './Logo.module.css'

export default function Logo() {
	return (
		<div className={styles.logo}>
			<Image
				src="/logos/logo-with-text.png"
				alt="Habits"
				width={200}
				height={200}
			/>
		</div>
	)
}
