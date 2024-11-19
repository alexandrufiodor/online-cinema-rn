import { IRoute } from '@/navigation/navigation.types'
import Layout from '@/app/(private)/_layout'
import NoAuthLayout from '@/app/(public)/_layout'

export const userRoutes: IRoute[] = [
	{
		name: '(public)',
		component: NoAuthLayout
	},
	{
		name: '(auth)',
		component: Layout
	}
]

export const routes = [...userRoutes]
