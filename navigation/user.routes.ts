import { IRoute } from '@/navigation/navigation.types'
import Auth from '@/app/auth'
import TabLayout from '@/app/(tabs)/_layout'

export const userRoutes: IRoute[] = [
	{
		name: '(tabs)',
		component: TabLayout,
		options: { headerShown: false }
	},
	{
		name: 'auth',
		component: Auth
	}
]
