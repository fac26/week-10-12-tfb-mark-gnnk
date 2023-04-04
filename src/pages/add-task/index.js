import AddTaskList from 'components/tasks/AddTaskList'
import Adviser from 'components/adviser/Adviser'
import styles from 'styles/Home.module.css'
import { getAllTasks } from 'model/tasks'

export default function AddTaskPage({ tasks }) {
	const addTask = () => {}
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
				<AddTaskList
					tasks={tasks}
					onClick={addTask}
				/>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const userId = 1
	const tasks = await getAllTasks(userId) //array of objects with category name and id

	return {
		props: {
			tasks
		}
	}
}

//1. as soon as user clicks add, insert new row into current tasks
//2. update history tasks
//3. remove from add-task list (disappear from the page) so you cannot add the same task twice
