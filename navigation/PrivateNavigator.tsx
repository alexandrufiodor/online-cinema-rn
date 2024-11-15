import { FC, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { routes } from '@/navigation/user.routes'
import { Stack, useRouter, useSegments } from 'expo-router'

const PrivateNavigator: FC = () => {
	const { user } = useAuth()
	const segments = useSegments()
	const router = useRouter()

	useEffect(() => {
		const inAuthGroup = segments[0] === '(protected)'

		if (!user && inAuthGroup) {
			router.replace('/')
		} else if (user) {
			router.replace('/(protected)')
		}
	}, [user])
	return (
		<Stack
			screenOptions={{
				headerShown: false
			}}
		>
			{user ? (
				routes.map(route =>
					user.isAdmin || !route.isAdmin ? (
						<Stack.Screen
							key={route.name}
							name={route.name}
							options={route.options}
						/>
					) : (
						<Stack.Screen key='not-found' name='+not-found' />
					)
				)
			) : (
				<Stack.Screen key='index' name='index' />
			)}
		</Stack>
	)
}

export default PrivateNavigator
