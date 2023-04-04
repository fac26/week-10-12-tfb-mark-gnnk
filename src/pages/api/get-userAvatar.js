// import { getUserCurrentAvatar } from 'model/user-profile'

// export default async function handler(req, res) {
// 	const userId = req.query.userId
// 	console.log(userId)
// 	try {
// 		const response = await getUserCurrentAvatar(userId)
// 		console.log(response, ' api')
// 		return res.status(200).json({ userAvatar: response })
// 	} catch (err) {
// 		console.log(req.body)
// 		res.status(500).json({ error: 'Internal server error' })
// 	}
// }
