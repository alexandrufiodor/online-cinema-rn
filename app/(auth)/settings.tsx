import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import ParallaxScrollView from '@/ui/ParallaxScrollView'
import { Link } from 'expo-router'

export default function Settings() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={
				<Ionicons size={310} name='code-slash' style={styles.headerImage} />
			}
		>
			<View className='pt-20 bg-amber-200 color-red'>
				<Text>Settings</Text>
			</View>
			<Link href='/rating'>
				<Text
					className='text-2xl caret-blue-300 font-bold color-red'
					// style={{ fontWeight: '900' }}
				>
					Go to Rating
				</Text>
			</Link>
		</ParallaxScrollView>
	)
}
const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute'
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8
	}
})
