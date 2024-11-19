import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	['(public)']: undefined
	['(auth)']: undefined
	rating: undefined
	settings: undefined
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
