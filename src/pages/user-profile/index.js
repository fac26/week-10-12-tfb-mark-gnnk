import { getUserAvatars } from '../../model/user-profile.js'
import AvatarItem from 'components/avatars/AvatarItem.js'
import { useUserContext } from 'context/UserContext.js'
import styles from '../../styles/Avatar.module.css'
export default function User({ avatars }) {
	const ctx = useUserContext()
	const updateAvatarHandler = async (avatar) => {
		const userId = 1

		const response = await fetch('/api/user-profile', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ userId: userId, avatarId: avatar.avatar_id })
		})

		if (response.ok) {
			ctx.updateUserAvatar(avatar)
		} else {
			console.error(response.statusText)
		}
	}
	return (
		<div className="bg">
			<h1 className={styles.heading}>Update your avatar</h1>
			<div className={styles.divider}></div>

			<div className="main-container">
				<ul className={styles.gridLayout}>
					{avatars.map((avatar) => (
						<AvatarItem
							key={avatar.id}
							id={avatar.id}
							src={avatar.img_src}
							price={avatar.price}
							avatarName={avatar.name}
							onClick={() => updateAvatarHandler(avatar)}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	const avatars = await getUserAvatars(userId)

	return {
		props: {
			avatars
		}
	}
}
