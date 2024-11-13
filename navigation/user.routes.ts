import { IRoute } from '@/navigation/navigation.types'
import Auth from '@/app/auth'

export const userRoutes: IRoute[] = [
	{
		name: 'auth',
		component: Auth
	}
	// {
	// 	name: '(tabs)',
	// 	component: TabLayout,
	// 	options: { headerShown: false }
	// }
]
