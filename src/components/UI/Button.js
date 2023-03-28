import styles, { container } from './button.module.css'

export default function Button({
	children,
	onClick,
	background,
	scaling,
	weight
}) {
	if (!background) background = 'bg_blu'
	if (!scaling) scaling = 'small'
	if (!weight) weight = 'normal'

	return (
		<button
			className={`${container} ${styles[background]} ${styles[scaling]} ${styles[weight]}`}
			onClick={onClick}>
			{children || 'Button'}
		</button>
	)
}
