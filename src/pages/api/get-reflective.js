import { getAllCurrentTasksByCategory } from 'model/tasks'

export default async function handler(req, res) {
	try {
		const userId = req.query.userId
		if (req.method === 'GET') {
			const tasks = getAllCurrentTasksByCategory(userId, 4)
			res.status(200).json(tasks)
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
}
