import { reduceUserPoints } from 'model/user-profile'
import { addUserAvatar } from 'model/avatars'

export default async function handler(req, res) {
	if (req.method !== 'PUT') {
		return res.status(405).json({ error: 'Method Not Allowed' })
	}

	const { userId, avatarId, points } = req.body
	try {
		await addUserAvatar(userId, avatarId)
		await reduceUserPoints(userId, points)
		res.status(200).json({ success: true })
	} catch (error) {
		console.error(error.message)
		res.status(500).json({ error: 'Something went wrong' })
	}
}
