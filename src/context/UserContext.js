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
		const fetchInitialUserData = async () => {
			try {
				const response = await fetch(`/api/get-user-data?userId=${userId}`)
				const { userAvatar, userPoints } = await response.json()
				console.log(userAvatar, userPoints, ' User context data')
				setPoints(userPoints)
				setAvatar(userAvatar)
			} catch (error) {
				console.error('Error fetching points:', error)
			}
		}

		fetchInitialUserData()
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
