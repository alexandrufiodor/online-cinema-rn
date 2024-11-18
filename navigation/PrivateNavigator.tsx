import { FC, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { routes } from '@/navigation/user.routes'
import { Stack, useRouter, useSegments } from 'expo-router'

const PrivateNavigator: FC = () => {
	const { user } = useAuth()
	const segments = useSegments()
	const router = useRouter()

	useEffect(() => {
		const inAuthGroup = segments[0] === '(tabs)'

		if (user) {
			router.replace('/')
		} else if (!user) {
			router.replace('/(tabs)')
		}
	}, [user])
	return (
		<Stack
			screenOptions={{
				headerShown: false
			}}
		>
			{routes.map(route => (
				<Stack.Screen
					key={route.name}
					name={route.name}
					options={route.options}
				/>
			))}
		</Stack>
	)
}

export default PrivateNavigator
