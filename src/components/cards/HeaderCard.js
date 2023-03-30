import ProgressCircle from './ProgressCircle'
import styles from './HeaderCard.module.css'
export default function HeaderCard({
	preHeaderText,
	header,
	percentage,
	textColor,
	pathColor,
	trailColor,
	width,
	strokeWidth
}) {
	return (
		<div className={`top-container ${styles.container} `}>
			<div>
				<p className={styles['pre-header']}>{preHeaderText}</p>
				<div className={styles.header}>
					{header}
					<div className={styles.divider}></div>
				</div>
			</div>
			<div>
				<ProgressCircle
					percentage={percentage}
					textColor={textColor}
					pathColor={pathColor}
					trailColor={trailColor}
					width={width}
					strokeWidth={strokeWidth}
				/>
			</div>
		</div>
	)
}
