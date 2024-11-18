import { TypeFeatherIconNames } from '@/shared/types/icon.types'
import { TypeRouteTabList } from '@/navigation/navigation.types'

export interface IMenuItem {
	iconName: TypeFeatherIconNames
	path: keyof TypeRouteTabList
	title: string
}

export type TypeNavigate = (screenName: keyof TypeRouteTabList) => void
