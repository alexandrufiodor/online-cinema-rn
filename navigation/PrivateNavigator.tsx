import { FC } from 'react'
import { routes } from '@/navigation/user.routes'
import { Stack } from 'expo-router'

const PrivateNavigator: FC = () => {
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
