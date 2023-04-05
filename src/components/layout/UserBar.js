import Image from 'next/image'
import Link from 'next/link'
import styles from './UserBar.module.css'
import { useUserContext } from '../../context/UserContext.js'

function UserBar() {
	const { points, avatar } = useUserContext()
	return (
		<div className={styles['user-info']}>
			<div className={styles['user-bank']}>
				<div>
					<Image
						src="/icons/coin.png"
						alt="coin"
						width={20}
						height={20}
					/>
				</div>
				<div>{points}</div>
			</div>
			<div>
				<Link href="/user-profile">
					<span className={styles['avatar-tooltip']}>
						<Image
							src={avatar.img_src}
							alt="user-avatar"
							width={40}
							height={40}
						/>
						<span className={styles['avatar-tooltip-text']}>
							Update your Avatar
						</span>
					</span>
				</Link>
			</div>
		</div>
	)
}

export default UserBar
