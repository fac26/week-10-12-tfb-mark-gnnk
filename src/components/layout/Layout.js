import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

import { useState, useEffect } from 'react'
import TopBar from './TopBar'
import styles from './Layout.module.css'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
	const path = useRouter()

	const [activePath, setActivePath] = useState(path.asPath)

	useEffect(() => {
		const onChangePath = () => {
			setActivePath(path.asPath)
		}

		path.events.on('routeChangeComplete', onChangePath)

		return () => {
			path.events.off('routeChangeComplete', onChangePath)
		}
	}, [path])

	if (activePath === '/') {
		return <div className={styles.main}>{children}</div>
	}
	return (
		<>
			<TopBar
				src="/avatars/Avatar-1.png"
				activePath={activePath}
			/>
			<div className={styles.main}>{children}</div>
			<MobileNav activePath={activePath} />
		</>
	)
}
