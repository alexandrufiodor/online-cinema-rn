import 'react-native-reanimated'
import '../global.css'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import AuthProvider from '@/providers/auth/AuthProvider'
import Navigation from '@/navigation/Navigation'
import Toast from '@/components/ui/Toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<ThemeProvider value={DarkTheme}>
					<Navigation />
				</ThemeProvider>
			</AuthProvider>
			<Toast />
		</QueryClientProvider>
	)
}
