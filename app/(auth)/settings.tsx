import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function SettingsScreen() {
	return (
		<View className='pt-20 bg-amber-200 color-red'>
			<Link href='/rating'>
				<Text
					className='text-2xl caret-blue-300 font-bold color-red'
					// style={{ fontWeight: '900' }}
				>
					Go to Rating
				</Text>
			</Link>
		</View>
	)
}
