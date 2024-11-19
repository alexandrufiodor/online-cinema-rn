import { IRoute } from '@/navigation/navigation.types'
import Layout from '@/app/(auth)/_layout'
import PublicLayout from '@/app/(public)/_layout'

export const userRoutes: IRoute[] = [
	{
		name: '(public)',
		component: PublicLayout
	},
	{
		name: '(auth)',
		component: Layout
	}
]

export const routes = [...userRoutes]
