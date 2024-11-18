import 'react-native-reanimated'
import '../global.css'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import AuthProvider from '@/providers/auth/AuthProvider'
import Navigation from '@/navigation/Navigation'

export default function RootLayout() {
	return (
		<AuthProvider>
			<ThemeProvider value={DarkTheme}>
				<Navigation />
			</ThemeProvider>
		</AuthProvider>
	)
}
