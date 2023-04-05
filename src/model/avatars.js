import db from '../database/db.js'

const select_all_avatars = db.prepare(
	/*sql*/
	`
    SELECT avatars.id, avatars.name, avatars.img_src, avatars.price
    FROM avatars
    `
)

export function getAllAvatars() {
	return select_all_avatars.all()
}

const insert_user_avatar = db.prepare(
	/*sql*/
	`INSERT INTO user_avatars (user_id, avatar_id)
VALUES (?, ?)`
)

export function addUserAvatar(userId, avatarId) {
	return insert_user_avatar.run(userId, avatarId)
}

const select_avatars_not_assigned_to_user = db.prepare(
	/*sql*/
	`
	SELECT avatars.id, avatars.name, avatars.img_src, avatars.price
	FROM avatars
	LEFT JOIN user_avatars ON avatars.id = user_avatars.avatar_id AND user_avatars.user_id = ?
	WHERE user_avatars.avatar_id IS NULL
	`
)

export function getAvatarsNotAssignedToUser(userId) {
	return select_avatars_not_assigned_to_user.all(userId)
}

// const result = getAvatarsNotAssignedToUser(1)

