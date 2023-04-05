import Image from 'next/image'
import AvatarList from 'components/avatars/AvatarList'
import { getAvatarsNotAssignedToUser } from '../../model/avatars'
import styles from '../../styles/Avatar.module.css'
import { useState } from 'react'

export default function AvatarShop({ avatars }) {
	const [avatarsList, setAvatarsList] = useState(avatars)
	const buyAvatarHandler = async (avatar) => {
		const userId = 1
		const response = await fetch('/api/add-avatars', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({
				userId: userId,
				avatarId: avatar.id,
				points: avatar.price
			})
		})

		if (response.ok) {
			setAvatarsList((currentAvatars) =>
				currentAvatars.filter((avatarEl) => avatarEl.id !== avatar.id)
			)
		} else {
			console.error(response.statusText)
		}
	}

	return (
		<div className="bg">
			<h1 className={styles.heading}>The Avatar Shop</h1>
			<div className={styles.divider}></div>
			<div className="main-container">
				<AvatarList
					avatars={avatarsList}
					onBuy={buyAvatarHandler}
				/>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const userId = 1
	const avatars = await getAvatarsNotAssignedToUser(userId)

	return {
		props: {
			avatars
		}
	}
}
