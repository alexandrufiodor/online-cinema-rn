import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import ParallaxScrollView from '@/ui/ParallaxScrollView'

export default function Profile() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={
				<Ionicons size={310} name='code-slash' style={styles.headerImage} />
			}
		>
			<View className='pt-20 bg-amber-200'>
				<Text>Explore</Text>
			</View>
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
