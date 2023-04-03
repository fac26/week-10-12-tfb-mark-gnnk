import { getUserPoints, getUserAvatars } from '../../model/user-profile.js'
import AvatarItem from 'components/avatars/AvatarItem.js'
import styles from '../../styles/User.module.css'
import { useUserContext } from 'context/UserContext.js'
export default function User({ points, avatars }) {
	const ctx = useUserContext()
	const updateAvatarHandler = async (avatar) => {
		console.log('clicked ', avatar)
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
			<form>
				<div>
					<label>Name</label>
					<input />
				</div>
				<button>Update</button>
			</form>
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
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	const points = await getUserPoints(userId)
	const avatars = await getUserAvatars(userId)

	return {
		props: {
			points,
			avatars
		}
	}
}
