import {
	createContext,
	FC,
	PropsWithChildren,
	useEffect,
	useState
} from 'react'
import { IContext, TypeUserState } from './auth-provider.interface'
import * as SplashScreen from 'expo-splash-screen'
import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper'
import { useRouter } from 'expo-router'

export const AuthContext = createContext({} as IContext)

let ignore = SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const router = useRouter()

	useEffect(() => {
		let isMounted = true
		setIsLoading(true)
		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken()
				if (accessToken) {
					const user = await getUserFromStorage()
					if (isMounted) {
						setUser(user)
						router.replace('/(auth)')
					}
				} else {
					router.replace('/(public)')
				}
			} catch {
			} finally {
				setTimeout(async () => {
					await SplashScreen.hideAsync()
					setIsLoading(false)
				}, 1000)
			}
		}
		let ignore = checkAccessToken()
		return () => {
			isMounted = false
		}
	}, [])

	useEffect(() => {
		if (!isLoading && user) {
			router.replace('/(auth)')
		}
	}, [user])
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
