import styles from './TopBar.module.css'
import DesktopNav from './DesktopNav'
import UserBar from './UserBar'
function TopBar({ points }) {
	return (
		<div className={styles['top-nav']}>
			<DesktopNav />
			<UserBar points={points} />
		</div>
	)
}

export default TopBar
