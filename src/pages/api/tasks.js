import {
	getAllCurrentTasks,
	getAllTodayTasks,
	fillHistoryTable
} from 'model/tasks'

//user in home page, the req will be sent automatically to receive the user score
export default async function handler(req, res) {
	try {
		const userId = Number(req.query.userId)
		const today = new Date().toISOString().split('T')[0]

		if (req.method === 'GET') {
			const today_tasks = getAllTodayTasks(userId, today)

			if (today_tasks.length === 0) {
				const tasks = getAllCurrentTasks(userId)

				const result = fillHistoryTable(today)
				console.log(result)
			}

			res.status(200).json('added to history')
		}
	} catch (err) {
		console.log(req.body)
		res.status(500).json({ error: 'Internal server error' })
	}
}
