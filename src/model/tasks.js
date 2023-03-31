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
	return select_all_current_tasks.all(id)
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

const select_all_date_tasks = db.prepare(
	/*sql*/
	`
      SELECT *
      FROM history_tasks
      WHERE user_id = ? AND date = ?
    `
)

export function getAllTasksByDate(id, date) {
	return select_all_date_tasks.all(id, date)
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

const fill_history_table = db.prepare(/*sql*/ `
  INSERT INTO history_tasks (user_id, task_id, date)
  SELECT user_id, task_id, ?
  FROM current_tasks
  WHERE NOT EXISTS (
    SELECT 1
    FROM history_tasks
    WHERE history_tasks.user_id = current_tasks.user_id
      AND history_tasks.task_id = current_tasks.task_id
      AND history_tasks.date = ?
  );
`)

export function fillHistoryTable(date) {
	return fill_history_table.run(date, date)
}

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

const select_all_day_tasks_by_category = db.prepare(
	/*sql*/
	`
  SELECT tasks.id, tasks.name, tasks.category_id, categories.name AS category_name, tasks.points, current_tasks.id AS current_task_id, history_tasks.status
  FROM history_tasks
  LEFT JOIN current_tasks ON history_tasks.task_id = current_tasks.task_id AND current_tasks.user_id = history_tasks.user_id
  LEFT JOIN tasks ON history_tasks.task_id = tasks.id
  LEFT JOIN habit_categories AS categories ON tasks.category_id = categories.id
  WHERE history_tasks.user_id = ? AND tasks.category_id = ? AND history_tasks.date = ?
  
    `
)

export function getAllDayTasksByCategory(id, habitId, day) {
	return select_all_day_tasks_by_category.all(id, habitId, day)
}

// const result = getAllDayTasksByCategory(1, 2, '2023-03-30')
// console.log(result, ' from tasks.js')
