import { IRoute } from '@/navigation/navigation.types'
import Settings from '@/app/(private)/settings'
import Favorites from '@/app/(private)/favorites'

export const authRoutes: IRoute[] = [
	{
		name: 'favorites',
		component: Favorites,
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
