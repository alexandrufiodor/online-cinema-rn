import { IRoute } from '@/navigation/navigation.types'
import RatingScreen from '@/app/(auth)/rating'
import Settings from '@/app/(auth)/settings'
import Index from '@/app/(auth)'
import ProfileScreen from '@/app/(auth)/profile'
import FavoritesScreen from '@/app/(auth)/favorites'
import MovieSlug from '@/app/(auth)/movie/[slug]'
import TrendingScreen from '@/app/(auth)/trending'
import SearchScreen from '@/app/(auth)/search'
import ActorSlug from '@/app/(auth)/actor/[slug]'

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
		component: RatingScreen,
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
		component: FavoritesScreen,
		options: {
			headerShown: false
		}
	},
	{
		name: 'search',
		component: SearchScreen,
		options: {
			headerShown: false
		}
	},
	{
		name: 'trending',
		component: TrendingScreen,
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
	},
	{
		name: 'actor/[slug]',
		component: ActorSlug,
		options: {
			headerShown: false
		}
	}
]

export const routes = [...authRoutes]
