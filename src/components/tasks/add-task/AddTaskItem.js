//task with button <Add> that listens for event when user clickes add button
import Button from 'components/UI/Button'
import { addTask } from 'model/tasks'

export default function AddTaskItem({ task }) {
	return (
		<li className="">
			<div className="">
				<h3>{task.name}</h3>
				<p>{task.category_name}</p>
				<Button
					background="bg_blu"
					scaling="medium"
					onClick={addTask(task.id)}>
					ADD
				</Button>
			</div>
		</li>
	)
}
