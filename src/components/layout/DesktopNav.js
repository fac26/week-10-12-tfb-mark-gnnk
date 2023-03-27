import Link from 'next/link'
import styles from './DesktopNav.module.css'

export default function DesktopNav() {
	return (
		<nav className="">
			<ul className={styles['desktop-list']}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/days/today">Today's challenges</Link>
				</li>

				<li>
					<Link href="/add-task">Add a new micro-habit</Link>
				</li>
				<li>
					<Link href="/days">Calendar</Link>
				</li>
				<li>
					<Link href="/avatars">Avatar shop</Link>
				</li>
			</ul>
		</nav>
	)
}
