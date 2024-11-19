import { IRoute } from '@/navigation/navigation.types'
import index from '@/app/(public)'

export const publicRoutes: IRoute[] = [
	{
		name: 'index',
		component: index,
		options: {
			headerShown: false
		}
	}
]

export const routes = [...publicRoutes]
