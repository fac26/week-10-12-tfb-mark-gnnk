import Link from 'next/link'
import styles from './MobileNav.module.css'
import Icon from '../UI/Icon'
export default function MobileNav() {
	return (
		<nav className={styles['mobile-nav']}>
			<ul className={styles['nav-list']}>
				<li>
					<Link href="/">
						<Icon
							src="/icons/home.png"
							alt="home page"
							bgColor="#FFDAA4"
							isActive={true}
						/>
					</Link>
				</li>
				<li>
					<Link href="/days">
						<Icon
							src="/icons/day-tasks.png"
							alt="home page"
							bgColor="#A4FFB8"
						/>
					</Link>
				</li>
				<li>
					<Link href="/add-task">
						<Icon
							src="/icons/add-task.png"
							alt="home page"
							bgColor="#A4CEFF"
						/>
					</Link>
				</li>
				<li>
					<Link href="/days">
						<Icon
							src="/icons/history.png"
							alt="home page"
							bgColor="#FFA4F6"
						/>
					</Link>
				</li>{' '}
				<li>
					<Link href="/avatars">
						<Icon
							src="/icons/to-avatars.png"
							alt="home page"
							bgColor="#FFA4A4"
						/>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
