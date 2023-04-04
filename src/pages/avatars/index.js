import Image from 'next/image'
import AvatarList from 'components/avatars/AvatarList'
import { getAllAvatars } from '../../model/avatars'
import styles from '../../styles/Avatar.module.css'

export default function AvatarShop({ avatars }) {
	const buyAvatarHandler = async (avatar) => {
		const userId = 1
		console.log(avatar)
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
			console.log('ok , should update now the list')
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
					avatars={avatars}
					onBuy={buyAvatarHandler}
				/>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const avatars = getAllAvatars()

	return {
		props: {
			avatars
		}
	}
}
