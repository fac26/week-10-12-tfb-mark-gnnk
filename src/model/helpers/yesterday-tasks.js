import { getAllDayTasksByCategory, getAllTasksByDate } from '../tasks.js'
import { getAllHabits } from '../habits.js'

let yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
	.toISOString()
	.split('T')[0]

function getYesterdayScoreByCategory(userId, categoryId) {
	let score
	const yesterdayTasksByCategory = getAllDayTasksByCategory(
		userId,
		categoryId,
		yesterday
	)

	if (yesterdayTasksByCategory.length === 0) {
		return (score = 0)
	}

	const uncompletedTasks = yesterdayTasksByCategory.filter(
		(task) => task.status === 1
	)

	score = uncompletedTasks.length / yesterdayTasksByCategory.length
	return score
}

export async function getYesterdayScore(userId) {
	let score
	const yesterdayTasks = getAllTasksByDate(userId, '2023-03-24')

	if (yesterdayTasks.length === 0) {
		return (score = 0)
	}

	const uncompletedTasks = yesterdayTasks.filter((task) => task.status === 1)

	score = uncompletedTasks.length / yesterdayTasks.length
	return Math.trunc(score * 100)
}

export async function getYesterdayScoreWithCategories(userId) {
	const categories = getAllHabits()

	const scores = categories.map((category) => {
		const value = (category.score = getYesterdayScoreByCategory(
			userId,
			category.id
		))

		return { id: category.id, name: category.name, score: value }
	})

	return scores
}
