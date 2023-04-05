import AddTaskItem from './AddTaskItem'

export default function AddTaskList({ tasks, onClick }) {
	return (
		<div>
			<ul>
				{tasks.map((task) => {
					return (
						<AddTaskItem
							key={task.id}
							task={task}
							onClick={onClick}
						/>
					)
				})}
			</ul>
		</div>
	)
}
