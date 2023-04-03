import db from '../database/db.js'

const update_user_points = db.prepare(
	/*sql*/
	`UPDATE users_profiles
     SET user_points = user_points + (
       SELECT points FROM tasks WHERE id = ?
     )
     WHERE user_id = ?`
)

export function updateUserPoints(userId, taskId) {
	return update_user_points.run(taskId, userId)
}

const get_user_points = db.prepare(
	/*sql*/
	`
   SELECT user_points FROM users_profiles 
   WHERE user_id = ?`
)

export function getUserPoints(userId) {
	return get_user_points.get(userId)
}
