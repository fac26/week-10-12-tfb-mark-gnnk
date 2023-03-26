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
					<Link href="/days">Days</Link>
				</li>
				<li>
					<Link href="/add-task">Add new habit</Link>
				</li>
				<li>
					<Link href="/days">History</Link>
				</li>{' '}
				<li>
					<Link href="/avatars">Avatar shop</Link>
				</li>
			</ul>
		</nav>
	)
}
