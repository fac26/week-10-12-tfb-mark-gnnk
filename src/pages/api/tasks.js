import { getAllCurrentTasks } from 'model/tasks'

//user in home page, the req will be sent automatically to receive the user score
export default async function handler(req, res) {
	console.log(req.body, ' api/tasks req.body')
	try {
		const userId = req.query.userId
		const today = new Date().toISOString().split('T')[0]
		console.log(userId, today, ' api tasks')
		if (req.method === 'GET') {
			// const today_tasks = getAllTodayTasks(userId, date)
			// console.log(today_tasks)

			// Connect to the SQLite database using the db.sqlite file path
			//const db = sqlite3('db.sqlite')
			//model
			const tasks = getAllCurrentTasks(userId)
			console.log(tasks, ' tasks from api')

			res.status(200).json(tasks)
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
}
