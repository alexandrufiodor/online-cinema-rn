import { IRoute } from '@/navigation/navigation.types'
import { adminRoutes } from '@/navigation/admin.routes'
import index from '@/app'
import TabLayout from '@/app/(protected)/_layout'

export const userRoutes: IRoute[] = [
	{
		name: 'index',
		component: index
	},
	{
		name: '(protected)',
		component: TabLayout
	}
]

export const routes = [...userRoutes, ...adminRoutes]
