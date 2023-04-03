import {
	getAllTasksByDate,
	fillHistoryTable,
	getAllDayTasksByCategory
} from '../tasks.js'

import { getAllHabits } from '../habits.js'
const today = new Date().toISOString().split('T')[0]

async function todayTasks(userId) {
	//gets all tasks for today from history_tasks table
	let today_tasks = await getAllTasksByDate(userId, today)
	if (today_tasks.length === 0) {
		//populates history_tasks from current_tasks table
		fillHistoryTable(today)
		today_tasks = await getAllTasksByDate(userId, today)
	}

	return today_tasks
}

export function getTodayScoreByCategory(userId, categoryId) {
	const today_tasks = getAllDayTasksByCategory(userId, categoryId, today)
	const uncompletedTasks = today_tasks.filter((task) => task.status === 1)
	const score = uncompletedTasks.length / today_tasks.length
	return Math.trunc(score * 100)
}

export async function getTotalTodayScore(userId) {
	const today_tasks = await todayTasks(userId)
	const uncompletedTasks = today_tasks.filter((task) => task.status === 1)
	const score = uncompletedTasks.length / today_tasks.length
	return Math.trunc(score * 100)
}

export async function getTodayTasksByCategory(userId, categoryId) {
	const todayTasksByCategory = getAllDayTasksByCategory(
		userId,
		categoryId,
		today
	)
	return todayTasksByCategory
}

export async function getTodayScoreWithCategories(userId) {
	const categories = getAllHabits()

	const scores = categories.map((category) => {
		const value = (category.score = getTodayScoreByCategory(
			userId,
			category.id
		))

		return { id: category.id, name: category.name, score: value }
	})

	return scores
}
