import Image from 'next/image'

import styles from './UserBar.module.css'
import { useUserContext } from '../../context/UserContext.js'
function UserBar({ src }) {
	const { points } = useUserContext()
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
				<Image
					src={src}
					alt="user-avatar"
					width={40}
					height={40}
				/>
			</div>
		</div>
	)
}

export default UserBar
