import { FC } from 'react'
import { userRoutes } from '@/navigation/user.routes'
import { Stack } from 'expo-router'

const Navigation: FC = () => {
	console.log('🚀Navigation.tsx:6')
	return (
		<Stack screenOptions={{}}>
			{userRoutes.map(route => (
				<Stack.Screen
					key={route.name}
					name={route.name}
					options={route.options}
				/>
			))}
		</Stack>
	)
}

export default Navigation
