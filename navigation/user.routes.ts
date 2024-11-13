import { IRoute } from '@/navigation/navigation.types'
import auth from '@/app/auth'

export const userRoutes: IRoute[] = [
	{
		name: 'auth',
		component: auth
	}
]
