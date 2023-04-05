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

const get_user_avatars = db.prepare(
	/*sql*/
	`
  SELECT user_avatars.id, avatars.name, avatars.img_src, user_avatars.avatar_id
  FROM avatars
  LEFT JOIN user_avatars ON avatars.id = user_avatars.avatar_id
  WHERE user_id = ?`
)

export function getUserAvatars(userId) {
	return get_user_avatars.all(userId)
}

const update_user_avatar = db.prepare(/*sql*/ `
  UPDATE users_profiles
  SET user_avatar = (
    SELECT id
    FROM user_avatars
    WHERE user_id = ?
      AND avatar_id = ?
  )
  WHERE user_id = ?;
`)

//avatarId => avatar_id
export function updateUserAvatar(userId, avatarId) {
	return update_user_avatar.run(userId, avatarId, userId)
}

const get_user_current_avatar = db.prepare(
	/*sql*/
	`
  SELECT user_avatars.id, avatars.name, avatars.img_src, user_avatars.avatar_id
  FROM users_profiles
  LEFT JOIN user_avatars ON user_avatar = user_avatars.id
  LEFT JOIN avatars
  ON avatars.id = user_avatars.avatar_id
  WHERE user_avatars.user_id = ?;
  `
)

export function getUserCurrentAvatar(userId) {
	return get_user_current_avatar.get(userId)
}

const reduce_user_points = db.prepare(
	/*sql*/
	`
  UPDATE users_profiles
  SET user_points = user_points - ?
  WHERE user_id = ?;
  `
)

export function reduceUserPoints(userId, points) {
	return reduce_user_points.run(points, userId)
}

// const result = reduceUserPoints(1, 20) //avatarId, userId

