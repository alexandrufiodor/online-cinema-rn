import { IMenuItem } from '@/components/ui/layout/bottom-menu/menu.interface'

export const menuItems: IMenuItem[] = [
	{
		iconName: 'home',
		path: 'index',
		title: 'Home'
	},
	{
		iconName: 'bar-chart',
		path: 'trending',
		title: 'Trending'
	},
	{
		iconName: 'search',
		path: 'search',
		title: 'Search'
	},
	{
		iconName: 'heart',
		path: 'favorites',
		title: 'Favorites'
	},
	{
		iconName: 'user',
		path: 'profile',
		title: 'Profile'
	}
]
