import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	['(public)']: undefined
	['(auth)']: undefined
	rating: undefined
	settings: undefined
	['movie/[slug]']: undefined
	['genre/[slug]']: undefined
} & TypeRouteTabList

export type TypeRouteTabList = {
	index: undefined
	trending: undefined
	search: undefined
	favorites: undefined
	profile: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	options?: {}
	isAdmin?: boolean
}
