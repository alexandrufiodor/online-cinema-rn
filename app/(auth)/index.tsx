import { Image, StyleSheet, Text, View } from 'react-native'
import ParallaxScrollView from '@/ui/ParallaxScrollView'
import { Link } from 'expo-router'

export default function Home() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image source={require('@/assets/icon.png')} style={styles.reactLogo} />
			}
		>
			<View className='p-20 bg-red-950'>
				<Text
					className='text-2xl caret-blue-300 font-bold'
					// style={{ fontWeight: '900' }}
				>
					Home
				</Text>
				<Link href='/settings'>
					<Text
						className='text-2xl caret-blue-300 font-bold color-red'
						// style={{ fontWeight: '900' }}
					>
						Go to Settings
					</Text>
				</Link>
			</View>
		</ParallaxScrollView>
	)
}
const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute'
	}
})
