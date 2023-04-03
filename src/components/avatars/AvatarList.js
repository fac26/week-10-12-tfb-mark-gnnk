import AvatarItem from 'components/avatars/AvatarItem'
import styles from './AvatarList.module.css'
import { useState } from 'react'

export default function AvatarList({ avatars }) {
	const [points, setPoints] = useState(0)

	function handleAvatarClick(avatar) {
		if (points >= avatar.price) {
			setPoints(points - avatar.price)
			console.log(`You have bought ${avatar.name} for ${avatar.price} coins!`)
		} else {
			console.log(
				`You still need ${avatar.price - points} coins to buy ${
					avatar.avatarName
				}`
			)
		}
	}

	return (
		<ul className={styles.gridLayout}>
			{avatars.map((avatar) => (
				<AvatarItem
					key={avatar.id}
					id={avatar.id}
					src={avatar.img_src}
					price={avatar.price}
					avatarName={avatar.name}
					onClick={() => handleAvatarClick(avatar)}
				/>
			))}
		</ul>
	)
}
