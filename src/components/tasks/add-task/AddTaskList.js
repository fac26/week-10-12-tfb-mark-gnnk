import AddTaskItem from './AddTaskItem'

export default function AddTaskList({ tasks }) {
	if (!tasks) {
		tasks = [
			{
				id: 1,
				title: 'Placeholder Task',
				description: 'This is a placeholder task'
			}
		]
	}

	return (
		<div>
			<ul>
				{tasks.map((task) => (
					<AddTaskItem
						key={task.id}
						task={task}
					/>
				))}
			</ul>
		</div>
	)
}
