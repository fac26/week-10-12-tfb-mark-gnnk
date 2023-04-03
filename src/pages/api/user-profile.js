import { updateUserAvatar } from 'model/user-profile'

export default async function handler(req, res) {
	const { userId, avatarId } = req.body
	console.log(userId, avatarId, ' api/user-profile')
	try {
		await updateUserAvatar(userId, avatarId)

		return res.status(200).json('updated')
	} catch (err) {
		console.log(req.body)
		res.status(500).json({ error: 'Internal server error' })
	}
}
