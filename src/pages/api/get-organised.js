import { getAllCurrentTasksByCategory } from 'models/tasks'

export default async function handler(req, res) {
	try {
		const userId = req.query.userId
		console.log(userId, ' user id')
		if (req.method === 'GET') {
			const tasks = getAllCurrentTasksByCategory(userId, 1)
			console.log(tasks, ' tasks from api')

			res.status(200).json(tasks)
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
}
