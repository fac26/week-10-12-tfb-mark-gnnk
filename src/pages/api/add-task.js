import { addTaskToUser } from 'model/tasks'

export default async function handler(req, res) {
	const { userId, taskId } = req.body

	try {
		await addTaskToUser(userId, taskId)

		return res.status(200).json('updated')
	} catch (err) {
		console.log(req.body)
		res.status(500).json({ error: 'Internal server error' })
	}
}
