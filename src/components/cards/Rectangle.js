// component that is a wrapper so that it renders a div with border-radius that is not sharp
import Days from '../layout/Days'
import styles from './Rectangle.module.css'

export default function Rectangle({ backgroundColor, children}) {
	return (
			<div
				className={styles.card}
				style={{ backgroundColor }}>
        {children}
			</div>
	)
}
