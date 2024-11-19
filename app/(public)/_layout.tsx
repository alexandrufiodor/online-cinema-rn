import { Stack } from 'expo-router'
import React from 'react'
import { routes } from '@/navigation/public.routes'

export default function NoAuthLayout() {
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
