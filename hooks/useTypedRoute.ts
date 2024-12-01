import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export const useTypedRoute = () => {
	const navigation = useNavigation()
	const [currentRouteName, setCurrentRouteName] = useState('')

	useEffect(() => {
		return navigation.addListener('state', () => {
			const state = navigation.getState()
			const routeName = state?.routes[state.index]?.name || ''
			setCurrentRouteName(routeName)
		})
	}, [navigation])

	return { name: currentRouteName }
}
