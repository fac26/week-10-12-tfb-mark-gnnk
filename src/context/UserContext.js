//import { getUserPoints } from '../model/user-profile.js'
import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({ points: '', updateUserPoints: () => {} })

export const useUserContext = () => {
	return useContext(UserContext)
}

export const UserProvider = ({ children, userId }) => {
	const [points, setPoints] = useState(0)

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

		fetchInitialPoints()
	}, [userId])

	const updateUserPoints = (newPoints) => {
		setPoints((currentPoints) => currentPoints + newPoints)
	}

	return (
		<UserContext.Provider value={{ points, updateUserPoints }}>
			{children}
		</UserContext.Provider>
	)
}
