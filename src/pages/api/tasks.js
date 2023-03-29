import {
	getAllCurrentTasks,
	getAllTodayTasks,
	fillHistoryTable
} from 'model/tasks'

// export default async function handler(req, res) {
// 	const userId = Number(req.query.userId)
// 	const today = new Date().toISOString().split('T')[0]
// 	const today_tasks = await getAllTodayTasks(userId, today)
// 	console.log(today_tasks, ' today tasks')
// 	try {
// 		if (req.method === 'GET') {
// 			console.log('GET')
// 			console.log(today_tasks.length, ' the length is')
// 			if (today_tasks.length === 0) {
// 				const tasks = getAllCurrentTasks(userId)
// 				const result = fillHistoryTable(today)
// 				console.log(result, ' in if block')
// 				return res.status(200).json({ message: 0 })
// 			} else {
// 				console.log('in else block')
// 				//calculate the today's score
// 				return res.status(200).json({ message: 'score will be calculated' })
// 			}
// 		}
// 	} catch (err) {
// 		console.log(req.body)
// 		res.status(500).json({ error: 'Internal server error' })
// 	}
// }

export default async function handler(req, res) {
	const date = req.query.date
	console.log(date)
	const userId = Number(req.query.userId)

	const today_tasks = await getAllTodayTasks(userId, date)
	if (today_tasks.length > 0) {
		return res.status(200).json({ message: today_tasks })
	}

	try {
		const tasks = getAllCurrentTasks(userId)
		const result = fillHistoryTable(date)
		return res
			.status(200)
			.json({ message: 'history_tasks table populated successfully' })
	} catch (err) {
		console.log(req.body)
		res.status(500).json({ error: 'Internal server error' })
	}
}
