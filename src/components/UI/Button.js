import styles, { container } from './button.module.css'

export default function Button({
	children,
	onClick,
	background = 'bg_blu',
	scaling = 'small',
	weight = 'normal'
}) {
	const btnStyles = `${container} ${styles[background]} ${styles[scaling]} ${styles[weight]}`
	return (
		<button
			className={btnStyles}
			onClick={onClick}>
			{children}
		</button>
	)
}
