import { updateTaskStatus } from 'model/tasks'

export default async function handler(req, res) {
	console.log(req)
	if (req.method !== 'PUT') {
		return res.status(405).json({ error: 'Method Not Allowed' })
	}
	console.log(req.body, ' update-status!!')

	const { taskId, date } = req.body
	const currentDate = new Date().toISOString().split('T')[0] //check the date in backend
	console.log(currentDate)
	// if (date == currentDate) {
	// 	return res.status(405).json({ error: 'Invalit date' })
	// }
	try {
		await updateTaskStatus(1, taskId, date)
		res.status(200).json({ success: true })
	} catch (error) {
		console.error(error.message)
		res.status(500).json({ error: 'Something went wrong' })
	}
}
