import { FC, useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useNavigationContainerRef } from 'expo-router'
import { useCheckAuth } from '@/providers/auth/useCheckAuth'
import PrivateNavigator from '@/navigation/PrivateNavigator'
import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'

const Navigation: FC = () => {
	const { user } = useAuth()
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
			<PrivateNavigator />
			{user && <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />}
		</>
	)
}

export default Navigation
