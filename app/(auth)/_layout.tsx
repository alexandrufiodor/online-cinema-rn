import { Stack } from 'expo-router'
import React from 'react'
import { routes } from '@/navigation/auth.routes'

export default function Layout() {
	return (
		<Stack>
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
