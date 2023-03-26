import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

import { useState, useEffect } from 'react'
import TopBar from './TopBar'
import styles from './Layout.module.css'

export default function Layout({ children }) {
	const [isDesktop, setIsDesktop] = useState(false)
	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)')
		setIsDesktop(mediaQuery.matches)

		const handleResize = (event) => setIsDesktop(event.matches)

		mediaQuery.addEventListener('change', handleResize)

		return () => {
			mediaQuery.removeEventListener('change', handleResize)
		}
	}, [])
	return (
		<>
			<TopBar
				isDesktop={isDesktop}
				points={20}
				src="/avatars/avatar1.png"
			/>
			<div className={styles.main}>{children}</div>
			{!isDesktop && <MobileNav />}
		</>
	)
}
