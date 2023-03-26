import styles from './TopBar.module.css'
import DesktopNav from './DesktopNav'
import UserBar from './UserBar'
function TopBar({ isDesktop, points, src }) {
	return (
		<div className={styles['top-nav']}>
			{isDesktop && <DesktopNav />}
			<UserBar
				points={points}
				src={src}
			/>
		</div>
	)
}

export default TopBar
