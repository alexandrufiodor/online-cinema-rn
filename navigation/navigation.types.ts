import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	index: undefined
	['(auth)']: undefined
	['(tabs)']: undefined
	rating: undefined
	settings: undefined
}

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
