import { FC, useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Stack, useNavigationContainerRef, useRouter } from 'expo-router'
import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'
import { useCheckAuth } from '@/providers/auth/useCheckAuth'
import { routes } from '@/navigation/user.routes'

const Navigation: FC = () => {
	const { user } = useAuth()
	const router = useRouter()
	const navRef = useNavigationContainerRef()
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)
		const listener = navRef.addListener('state', () => {
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		})
		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])

	useCheckAuth(currentRoute || '')
	return (
		<>
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
			{user && <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />}
		</>
	)
}

export default Navigation
