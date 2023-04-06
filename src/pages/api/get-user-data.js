import { getUserProfile } from 'model/user-profile'
export default async function handler(req, res) {
	const userId = req.query.userId

	if (!userId) {
		res.status(400).json({ error: 'Missing user ID' })
		return
	}

	try {
		const { userPoints, userAvatar } = await getUserProfile(userId)
		res.status(200).json({ userPoints: userPoints, userAvatar: userAvatar })
	} catch (error) {
		console.error('Error fetching points:', error)
		res.status(500).json({ error: 'Failed to fetch points' })
	}
}
