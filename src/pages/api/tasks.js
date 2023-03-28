import { getAllCurrentTasks } from 'model/tasks'

export default async function handler(req, res) {
	try {
		const userId = req.query.userId
		console.log(userId, ' user id')
		if (req.method === 'GET') {
			// Connect to the SQLite database using the db.sqlite file path
			//const db = sqlite3('db.sqlite')
			//model
			const tasks = getAllCurrentTasks(userId)
			console.log(tasks, ' tasks from api')

			res.status(200).json(tasks)
			//db.close()
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
}
