import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

import { useState, useEffect } from 'react'
import TopBar from './TopBar'
import styles from './Layout.module.css'
import { useRouter } from 'next/router'
export default function Layout({ children }) {
	const [isDesktop, setIsDesktop] = useState(false)
	const [activePath, setActivePath] = useState('/')
	const path = useRouter()
	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)')
		setIsDesktop(mediaQuery.matches)

		const handleResize = (event) => setIsDesktop(event.matches)

		mediaQuery.addEventListener('change', handleResize)

		return () => {
			mediaQuery.removeEventListener('change', handleResize)
		}
	}, [])

	useEffect(() => {
		const onChangePath = () => {
			setActivePath(path.asPath)
		}

		path.events.on('routeChangeComplete', onChangePath)

		return () => {
			path.events.off('routeChangeComplete', onChangePath)
		}
	}, [path])
	return (
		<>
			<TopBar
				isDesktop={isDesktop}
				points={20}
				src="/avatars/avatar1.png"
				activePath={activePath}
			/>
			<div className={styles.main}>{children}</div>
			{!isDesktop && <MobileNav activePath={activePath} />}
		</>
	)
}
