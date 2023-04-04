import Button from 'components/UI/Button'
import Rectangle from 'components/cards/Rectangle'

export default function AddTaskItem({ task, onClick }) {
	return (
		<Rectangle
			display="flex"
			backgroundColor="#FFF8F0"
			borderRadius={20}
			justifyContent="space-between">
			<div className>
				<h1>{task.categories}</h1>
				<p>{task.name}</p>
			</div>
			<Button
				scaling="small"
				weight="bold"
				onClick={onClick}>
				ADD
			</Button>
		</Rectangle>
	)
}
