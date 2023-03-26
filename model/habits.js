import db from '../database/db.js'

const select_all_habits = db.prepare(/*sql*/ `
    SELECT habit_catagories.id, habit_catagories.name
    FROM habit_catagories
    `)

export function getAllHabits() {
	return select_all_habits.all()
}
