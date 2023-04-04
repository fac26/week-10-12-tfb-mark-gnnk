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

// const result = addUserAvatar(1, 5)
// console.log(result)
