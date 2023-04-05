import { updateTaskStatus } from 'model/tasks'
import { updateUserPoints } from 'model/user-profile'

export default async function handler(req, res) {
	if (req.method !== 'PUT') {
		return res.status(405).json({ error: 'Method Not Allowed' })
	}

	const { userId, taskId } = req.body
	const today = new Date().toISOString().split('T')[0] //check the date in backend
	// if (date == currentDate) {
	// 	return res.status(405).json({ error: 'Invalit date' })
	// }
	try {
		await updateTaskStatus(userId, taskId, today)
		updateUserPoints(userId, taskId)
		res.status(200).json({ success: true })
	} catch (error) {
		console.error(error.message)
		res.status(500).json({ error: 'Something went wrong' })
	}
}
