import styles from './ChallengeCategoryItem.module.css'
import Rectangle from '../cards/Rectangle'
import Image from 'next/image'
export default function ChallengeCategoryItem({ task, complete, onChecked }) {
	return (
		<li id={`${task.id}-category-${task.category_id}`}>
			<Rectangle backgroundColor="var(--main-green)">
				<div className={styles['category-task']}>
					<p>{task.name}</p>
					<div
						className={styles.checkboxContainer}
						id={task.id}
						onClick={!!complete ? undefined : onChecked}>
						{!!complete && (
							<div className={styles.checkboxMark}>
								<Image
									src="/icons/check-mark.svg"
									alt="check mark"
									width={20}
									height={20}
								/>
							</div>
						)}
					</div>
				</div>
			</Rectangle>
		</li>
	)
}
