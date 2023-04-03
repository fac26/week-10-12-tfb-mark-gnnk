import { getUserPoints } from '../../model/user-profile'

export default async function handler(req, res) {
	const userId = req.query.userId

	if (!userId) {
		res.status(400).json({ error: 'Missing user ID' })
		return
	}

	try {
		const { user_points } = getUserPoints(userId)
		res.status(200).json({ user_points })
	} catch (error) {
		console.error('Error fetching points:', error)
		res.status(500).json({ error: 'Failed to fetch points' })
	}
}
