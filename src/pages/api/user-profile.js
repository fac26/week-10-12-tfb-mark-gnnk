import { updateUserAvatar } from 'model/user-profile'

export default async function handler(req, res) {
	const { userId, avatarId } = req.body
	try {
		await updateUserAvatar(userId, avatarId)

		return res.status(200).json('updated')
	} catch (err) {
		res.status(500).json({ error: 'Internal server error' })
	}
}
