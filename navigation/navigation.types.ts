import { ComponentType } from 'react'

export type TypeRoutStackParamList = {
	auth: undefined
	home: undefined
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
