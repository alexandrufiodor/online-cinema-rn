import { Tabs } from 'expo-router'
import React from 'react'
import { TabBarIcon } from '@/ui/TabBarIcon'
import { menuItems } from '@/ui/layout/bottom-menu/menu.data'

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					height: 80,
					borderTopWidth: 2,
					borderColor: 'gray',
					borderTopColor: 'gray',
					backgroundColor: 'black',
					justifyContent: 'center'
				},
				tabBarLabelStyle: {
					fontSize: 12,
					fontWeight: 'bold'
				}
			}}
		>
			{menuItems.map((item, index) => (
				<Tabs.Screen
					name={item.path}
					options={{
						title: '',
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								name={item.iconName}
								color={focused ? 'red' : color}
							/>
						)
					}}
				/>
			))}
		</Tabs>
	)
}
