import Button from 'components/UI/Button'
import Rectangle from 'components/cards/Rectangle'
import styles from './AddTaskItem.module.css'

export default function AddTaskItem({ task, onClick }) {
	return (
		<li id={task.id}>
			<Rectangle
				display="flex"
				backgroundColor="#FFF8F0"
				borderRadius={20}
				justifyContent="space-between">
				<div className={styles.taskContainer}>
					<h1 className={styles.taskTitle}>{task.category_name}</h1>
					<p className={styles.taskName}>{task.name}</p>
				</div>
				<Button
					scaling="small"
					weight="bold"
					onClick={onClick.bind(null, task)}>
					ADD
				</Button>
			</Rectangle>
		</li>
	)
}
