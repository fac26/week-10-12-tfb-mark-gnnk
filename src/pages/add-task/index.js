import AddTaskList from 'components/tasks/add-task/AddTaskList'
import Adviser from 'components/adviser/Adviser'
import styles from 'styles/Home.module.css'

export default function AddTaskPage() {
	return (
		<div className="bg">
			<div className="main-container">
				<div className={`${styles.adviser} main-container`}>
					<Adviser
						src="/icons/bear.png"
						text="If you’ve already completed all the challenges. You can add some more micro-habits to earn more coins."
						speechBg={`var(--main-white)`}
					/>
				</div>
				<AddTaskList />
			</div>
		</div>
	)
}
