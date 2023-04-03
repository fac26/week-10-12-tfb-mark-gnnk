import Button from 'components/UI/Button'
import Rectangle from 'components/cards/Rectangle'
import styles from './AddTaskItem.module.css'

export default function AddTaskItem({ task }) {
	return (
		<Rectangle>
			<li>
				<div className={styles.title}>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
				</div>
				<Button
					scaling="small"
					weight="bold">
					ADD
				</Button>
			</li>
		</Rectangle>
	)
}
