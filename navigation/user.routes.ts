import { IRoute } from '@/navigation/navigation.types'
import auth from '@/app/auth'
import { adminRoutes } from '@/navigation/admin.routes'
import home from '@/app/home'

export const userRoutes: IRoute[] = [
	{
		name: 'auth',
		component: auth
	},
	{
		name: 'home',
		component: home
	}
]

export const routes = [...userRoutes, ...adminRoutes]
