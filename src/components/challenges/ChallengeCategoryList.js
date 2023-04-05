import ChallengeCategoryItem from './ChallengeCategoryItem'
import { useState } from 'react'
import ConfirmationModal from 'components/modals/ConfirmationModal'
import CongratulationsModal from 'components/modals/CongratulationsModal'
import Backdrop from 'components/UI/Backdrop'

export default function ChallengeCategoryList({ tasks, onCompleted }) {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false)
	const [showBackdrop, setShowBackdrop] = useState(false)
	const [showCongratulationsModal, setShowCongratulationsModal] =
		useState(false)

	const [taskIdToComplete, setTaskIdToComplete] = useState(null)

	const taskCheckedHandler = (event) => {
		setTaskIdToComplete(event.target.id)
		setShowConfirmationModal(true)
		setShowBackdrop(true)
		setShowCongratulationsModal(false)
	}
	const confirmCompleteTask = () => {
		setShowConfirmationModal(false)
		setShowBackdrop(true)
		setShowCongratulationsModal(true)
		onCompleted(taskIdToComplete)
		setTaskIdToComplete(null)
	}
	const cancelComplete = () => {
		setShowConfirmationModal(false)
		setShowBackdrop(false)
		setShowCongratulationsModal(false)
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

			{showBackdrop && <Backdrop opacity={0.6} />}
			<ConfirmationModal
				show={showConfirmationModal}
				onConfirm={confirmCompleteTask}
				onCancel={cancelComplete}
			/>
			{showCongratulationsModal && (
				<CongratulationsModal
					title="You’re doing a great job!"
					message="Why not try completing some of the other tasks for some more coins?"
					buttonText="Continue"
					onClick={cancelComplete}
				/>
			)}
		</ul>
	)
}
