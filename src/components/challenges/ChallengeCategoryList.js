import ChallengeCategoryItem from './ChallengeCategoryItem'
import { useState } from 'react'
import ConfirmationModal from '../modals/ConfirmationModal'
import Backdrop from 'components/UI/Backdrop'
export default function ChallengeCategoryList({ tasks, onCompleted }) {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false)
	const [showBackdrop, setShowBackdrop] = useState(false)

	const [taskIdToComplete, setTaskIdToComplete] = useState(null)

	const taskCheckedHandler = (event) => {
		console.log('checked')

		setTaskIdToComplete(event.target.id)
		setShowConfirmationModal(true)
		setShowBackdrop(true)
	}
	const confirmCompleteTask = () => {
		setShowConfirmationModal(false)
		setShowBackdrop(false)
		onCompleted(taskIdToComplete)
		setTaskIdToComplete(null)
	}
	const cancelComplete = () => {
		setShowConfirmationModal(false)
		setShowBackdrop(false)
	}
	return (
		<ul>
			{tasks.map((task) => (
				<ChallengeCategoryItem
					key={`${task.id}-category-${task.category_id}`}
					task={task}
					onChecked={taskCheckedHandler}
					complete={task.status} //task.status
				/>
			))}
			{showBackdrop && <Backdrop opacity={0.5} />}
			<ConfirmationModal
				show={showConfirmationModal}
				onConfirm={confirmCompleteTask}
				onCancel={cancelComplete}
			/>
		</ul>
	)
}
