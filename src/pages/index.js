import Circle from 'components/cards/ProgressCircle'
import Logo from 'components/UI/Logo'
import Link from 'next/link'
import Button from 'components/UI/Button'
import styles from '../styles/Index.module.css'
export default function Home() {
	return (
		<div className="landing-bg">
			<div className={styles['landing-container']}>
				<Logo />
				<div className={styles.about}>
					An app to help you build good habits and get rid of the bad ones.
				</div>
				<Button
					background="bg_wht"
					scaling="large">
					<Link href="/home">Ready? Let&rsquo;s go</Link>
				</Button>
			</div>
		</div>
	)
}
