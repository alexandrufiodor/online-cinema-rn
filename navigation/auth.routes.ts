import { IRoute } from '@/navigation/navigation.types'
import Rating from '@/app/(auth)/rating'
import Settings from '@/app/(auth)/settings'
import Index from '@/app/(auth)'
import ProfileScreen from '@/app/(auth)/profile'
import Favorites from '@/app/(auth)/favorites'
import Search from '@/app/(auth)/search'
import Trending from '@/app/(auth)/trending'
import MovieSlug from '@/app/(auth)/movie/[slug]'

export const authRoutes: IRoute[] = [
	{
		name: 'index',
		component: Index,
		options: {
			headerShown: false
		}
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
		component: Settings,
		options: {
			headerShown: false
		}
	},
	{
		name: 'profile',
		component: ProfileScreen,
		options: {
			headerShown: false
		}
	},
	{
		name: 'favorites',
		component: Favorites,
		options: {
			headerShown: false
		}
	},
	{
		name: 'search',
		component: Search,
		options: {
			headerShown: false
		}
	},
	{
		name: 'trending',
		component: Trending,
		options: {
			headerShown: false
		}
	},
	{
		name: 'movie/[slug]',
		component: MovieSlug,
		options: {
			headerShown: false
		}
	},
	{
		name: 'genre/[slug]',
		component: MovieSlug,
		options: {
			headerShown: false
		}
	}
]

export const routes = [...authRoutes]
