import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import '../global.css'
import { SafeAreaView } from 'react-native'
import Navigation from '@/navigation/Navigation'
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider
} from '@react-navigation/native'
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
	})

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<SafeAreaProvider style={{ flex: 1 }} className='bg-black'>
			<SafeAreaView style={{ flex: 1 }} className='bg-black'>
				<ThemeProvider value={'dark' === 'dark' ? DarkTheme : DefaultTheme}>
					<Navigation />
				</ThemeProvider>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
