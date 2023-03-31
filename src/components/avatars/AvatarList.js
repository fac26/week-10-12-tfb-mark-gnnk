import AvatarItem from 'components/avatars/AvatarItem'
import styles from './AvatarList.module.css'

export default function AvatarList({ avatars }) {
	return (
		<ul className={styles.gridLayout}>
			{avatars.map((avatar) => (
				<AvatarItem
					key={avatar.id}
					id={avatar.id}
					src={avatar.img_src}
					price={avatar.price}
					avatarName={avatar.name}
				/>
			))}
		</ul>
	)
}
