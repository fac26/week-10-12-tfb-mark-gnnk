import Image from 'next/image'
import styles from './AvatarItem.module.css'

export default function AvatarItem({ id, src, price, avatarName }) {
	return (
		<li
			id={id}
			className={styles.avatarContainer}>
			<Image
				src={src}
				alt={avatarName}
				width={140}
				height={140}
			/>
			<div className={styles.priceContainer}>
				<Image
					src="icons/coin.svg"
					width={25}
					height={25}
				/>
				<p>{price}</p>
			</div>
		</li>
	)
}
