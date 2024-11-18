import { IRoute } from '@/navigation/navigation.types'
import Rating from '@/app/(auth)/rating'
import Settings from '@/app/(auth)/settings'

export const authRoutes: IRoute[] = [
	{
		name: 'rating',
		component: Rating,
		options: {
			headerShown: false
		}
	},
	{
		name: 'settings',
		component: Settings
	}
]

export const routes = [...authRoutes]
