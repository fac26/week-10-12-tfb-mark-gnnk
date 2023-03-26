import db from '../database/db.js'

const select_all_current_tasks = db.prepare(
	/*sql*/
	`
    SELECT tasks.id, tasks.name, tasks.catergory_id, tasks.points, current_tasks.id AS current_task_id
    FROM tasks
    LEFT JOIN current_tasks ON tasks.id = current_tasks.task_id
    WHERE current_tasks.user_id = ?
    `
)

export function getAllCurrentTasks(id) {
	return select_all_current_tasks.get(id)
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

const result = getUncompletedTasksByDate(1, '2023-03-24')
console.log(result)
