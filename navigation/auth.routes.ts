import { IRoute } from '@/navigation/navigation.types'
import TabLayout from '@/app/(auth)/(tabs)/_layout'
import Rating from '@/app/(auth)/rating'
import Settings from '@/app/(auth)/settings'

export const authRoutes: IRoute[] = [
	{
		name: '(tabs)',
		component: TabLayout
	},
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
