import styles, { container } from './button.module.css'

export default function Button({
	children,
	onClick,
	background = 'bg_blu',
	scaling = 'small',
	weight = 'normal'
}) {
	return (
		<button
			className={`${container} ${styles[background]} ${styles[scaling]} ${styles[weight]}`}
			onClick={onClick}>
			{children}
		</button>
	)
}
