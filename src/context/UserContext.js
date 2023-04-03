//import { getUserPoints } from '../model/user-profile.js'
import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({
	points: '',
	updateUserPoints: () => {},
	avatar: '',
	updateUserAvatar: () => {}
})

export const useUserContext = () => {
	return useContext(UserContext)
}

export const UserProvider = ({ children, userId }) => {
	const [points, setPoints] = useState(0)
	const [avatar, setAvatar] = useState(1)
	useEffect(() => {
		const fetchInitialPoints = async () => {
			try {
				const response = await fetch(`/api/get-points?userId=${userId}`)
				const data = await response.json()
				setPoints(data.user_points)
			} catch (error) {
				console.error('Error fetching points:', error)
			}
		}
		const fetchInitialAvatar = async () => {
			const response = await fetch(`/api/get-userAvatar?userId=${userId}`)
			const { userAvatar } = await response.json()
			console.log(userAvatar, ' fetch avatar')
			setAvatar(userAvatar)
		}

		fetchInitialPoints()
		fetchInitialAvatar()
	}, [userId])

	const updateUserPoints = (newPoints) => {
		setPoints((currentPoints) => currentPoints + newPoints)
	}
	const updateUserAvatar = (newAvatar) => {
		setAvatar(newAvatar)
	}

	return (
		<UserContext.Provider
			value={{ points, updateUserPoints, avatar, updateUserAvatar }}>
			{children}
		</UserContext.Provider>
	)
}
