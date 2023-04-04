//import { getUserPoints } from '../../model/user-profile'
import { getUserPoints, getUserCurrentAvatar } from 'model/user-profile'
export default async function handler(req, res) {
	const userId = req.query.userId

	if (!userId) {
		res.status(400).json({ error: 'Missing user ID' })
		return
	}

	try {
		const { user_points } = await getUserPoints(userId)
		const response = await getUserCurrentAvatar(userId)
		res.status(200).json({ userPoints: user_points, userAvatar: response })
	} catch (error) {
		console.error('Error fetching points:', error)
		res.status(500).json({ error: 'Failed to fetch points' })
	}
}
