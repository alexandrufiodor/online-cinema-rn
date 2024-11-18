import { FC, useEffect, useState } from 'react'
import PrivateNavigator from '@/navigation/PrivateNavigator'
import BottomMenu from '@/ui/layout/bottom-menu/BottomMenu'
import { useAuth } from '@/hooks/useAuth'
import { useNavigationContainerRef, useRouter } from 'expo-router'

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

	useEffect(() => {
		if (!user) {
			router.replace('/')
		} else {
			router.replace('/(auth)')
		}
	}, [user])
	return (
		<>
			<PrivateNavigator />
			{user && <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />}
		</>
	)
}

export default Navigation
