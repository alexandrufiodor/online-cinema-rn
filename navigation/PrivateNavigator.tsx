import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { routes } from '@/navigation/user.routes'
import { Stack } from 'expo-router'

const PrivateNavigator: FC = () => {
	const { user } = useAuth()
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
						<Stack.Screen key='not-found' name='not-found' />
					)
				)
			) : (
				<Stack.Screen key='auth' name='auth' />
			)}
		</Stack>
	)
}

export default PrivateNavigator
