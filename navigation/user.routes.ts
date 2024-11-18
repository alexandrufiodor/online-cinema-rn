import { IRoute } from '@/navigation/navigation.types'
import index from '@/app'
import Layout from '@/app/(auth)/_layout'

export const userRoutes: IRoute[] = [
	{
		name: 'index',
		component: index
	},
	{
		name: '(auth)',
		component: Layout
	}
]

export const routes = [...userRoutes]
