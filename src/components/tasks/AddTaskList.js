import AddTaskItem from './AddTaskItem'

export default function AddTaskList({ tasks, onClick }) {
	return (
		<div>
			<ul>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							<AddTaskItem
								task={task}
								onClick={onClick}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
