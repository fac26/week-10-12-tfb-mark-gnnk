import Image from 'next/image'
import styles from './Icon.module.css'

function Icon({ src, alt, bgColor, isActive }) {
	const iconStyle = `${styles.container} ${isActive ? styles.active : ''}`
	return (
		<div
			className={iconStyle}
			style={{ backgroundColor: bgColor }}>
			<Image
				src={src}
				width={20}
				height={20}
				alt={alt}
			/>
		</div>
	)
}

export default Icon
