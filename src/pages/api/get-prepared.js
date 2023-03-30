import { getAllCurrentTasksByCategory } from 'model/tasks'

export default async function handler(req, res) {
	try {
		const userId = req.query.userId
		console.log(userId, 'user id')
		if (req.method === 'GET') {
			const tasks = getAllCurrentTasksByCategory(userId, 2)
			res.status(200).json(tasks)
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
}
