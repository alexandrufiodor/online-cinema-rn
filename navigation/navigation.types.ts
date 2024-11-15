import { ComponentType } from 'react'

export type TypeRoutStackParamList = {
	index: undefined
	['(protected)']: undefined
	// ['(tabs)']: undefined
} & TypeRouteStackAdminList

type TypeRouteStackAdminList = {
	Admin: undefined
}

export interface IRoute {
	name: keyof TypeRoutStackParamList
	component: ComponentType
	options?: {}
	isAdmin?: boolean
}
