import { IRoute } from '@/navigation/navigation.types'
import Rating from '@/app/(auth)/rating'
import Settings from '@/app/(auth)/settings'
import Index from '@/app/(auth)'
import Profile from '@/app/(auth)/profile'
import Favorites from '@/app/(auth)/favorites'
import Search from '@/app/(auth)/search'
import Trending from '@/app/(auth)/trending'

export const authRoutes: IRoute[] = [
	{
		name: 'index',
		component: Index
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
	},
	{
		name: 'profile',
		component: Profile
	},
	{
		name: 'favorites',
		component: Favorites
	},
	{
		name: 'search',
		component: Search
	},
	{
		name: 'trending',
		component: Trending
	}
]

export const routes = [...authRoutes]
