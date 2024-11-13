import 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import '../global.css'
import { SafeAreaView } from 'react-native'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import Navigation from '@/navigation/Navigation'
import AuthProvider from '@/providers/auth/AuthProvider'

export default function RootLayout() {
	return (
		<AuthProvider>
			<SafeAreaProvider style={{ flex: 1 }} className='bg-black'>
				<SafeAreaView style={{ flex: 1 }} className='bg-black'>
					<ThemeProvider value={DarkTheme}>
						<Navigation />
					</ThemeProvider>
				</SafeAreaView>
			</SafeAreaProvider>
		</AuthProvider>
	)
}
