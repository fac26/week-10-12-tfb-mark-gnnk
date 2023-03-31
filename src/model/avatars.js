import db from 'database/db.js'

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
