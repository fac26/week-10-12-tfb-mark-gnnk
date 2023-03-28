import db from 'database/db.js'

const select_all_habits = db.prepare(/*sql*/ `
    SELECT habit_categories.id, habit_categories.name
    FROM habit_categories
    `)

export function getAllHabits() {
	return select_all_habits.all()
}
