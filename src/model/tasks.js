import db from '../database/db.js'

const select_all_current_tasks = db.prepare(
	/*sql*/
	`
    SELECT tasks.id, tasks.name, tasks.category_id, categories.name AS category_name, tasks.points, current_tasks.id AS current_task_id
    FROM tasks
    LEFT JOIN current_tasks ON tasks.id = current_tasks.task_id
    LEFT JOIN habit_categories AS categories ON tasks.category_id = categories.id
    WHERE current_tasks.user_id = ?
    `
)

export function getAllCurrentTasks(id) {
	return select_all_current_tasks.get(id)
}

const select_all_current_tasks_by_category = db.prepare(
	/*sql*/
	`
      SELECT tasks.id, tasks.name, tasks.category_id, categories.name AS category_name, tasks.points, current_tasks.id AS current_task_id
      FROM tasks
      LEFT JOIN current_tasks ON tasks.id = current_tasks.task_id
      LEFT JOIN habit_categories AS categories ON tasks.category_id = categories.id
      WHERE current_tasks.user_id = ? AND tasks.category_id = ?
    `
)

export function getAllCurrentTasksByCategory(id, habitId) {
	return select_all_current_tasks_by_category.all(id, habitId)
}

const select_all_today_tasks = db.prepare(
	/*sql*/
	`
      SELECT *
      FROM history_task
      WHERE user_id = ? AND date = ?
    `
)

export function getAllTodayTasks(id, date) {
	return select_all_today_tasks.all(id, date)
}

const select_completed_by_habits_and_by_day = db.prepare(
	/*sql*/
	`
    SELECT tasks.*
    FROM tasks
    JOIN history_tasks ON tasks.id = history_tasks.task_id
    WHERE history_tasks.user_id = ? 
    AND history_tasks.date = ? 
    AND history_tasks.status = true
`
)

export function getCompletedTasksByDate(userId, date) {
	return select_completed_by_habits_and_by_day.all(userId, date)
}

const select_uncompleted_by_habits_and_by_day = db.prepare(
	/*sql*/
	`
    SELECT tasks.*
    FROM tasks
    JOIN history_tasks ON tasks.id = history_tasks.task_id
    WHERE history_tasks.user_id = ? 
    AND history_tasks.date = ? 
    AND history_tasks.status = false
`
)

export function getUncompletedTasksByDate(userId, date) {
	return select_uncompleted_by_habits_and_by_day.all(userId, date)
}

const update_task_status = db.prepare(
	/*sql*/
	`UPDATE history_tasks SET status = ? WHERE task_id = ? AND date = ?`
)

export function updateTaskStatus(status, taskId, date) {
	return update_task_status.run(status, taskId, date)
}
const updateStatus = updateTaskStatus(0, 1, '2023-03-24') //true, taskId, date
// const uncompletedTbyDate = getUncompletedTasksByDate(1, '2023-03-24')
// console.log(uncompletedTbyDate, ' all uncompleted tasks by date')
// const currentTbyUserid = getAllCurrentTasks(1)
// console.log(currentTbyUserid, ' current tasks by user id')

// const getTbyC = getAllCurrentTasksByCategory(1, 1)

// console.log(getTbyC)
