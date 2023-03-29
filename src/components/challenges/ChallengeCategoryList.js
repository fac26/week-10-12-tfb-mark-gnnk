import ChallengeCategoryItem from './ChallengeCategoryItem'
import { useState } from 'react'
import ConfirmationModal from '../modals/ConfirmationModal'
export default function ChallengeCategoryList({ tasks, onCompleted }) {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false)
	const [taskIdToComplete, setTaskIdToComplete] = useState(null)

	const taskCheckedHandler = (event) => {
		console.log('checked')

		setTaskIdToComplete(event.target.id)
		setShowConfirmationModal(true)
	}
	const confirmCompleteTask = () => {
		setShowConfirmationModal(false)
		onCompleted(taskIdToComplete)
		setTaskIdToComplete(null)
	}
	const cancelComplete = () => {}
	return (
		<ul>
			{tasks.map((task) => (
				<ChallengeCategoryItem
					key={`${task.id}-category-${task.category_id}`}
					task={task}
					onChecked={taskCheckedHandler}
					complete={false} //task.status
				/>
			))}

			<ConfirmationModal
				show={showConfirmationModal}
				onConfirm={confirmCompleteTask}
				onCancel={cancelComplete}
			/>
		</ul>
	)
}
