import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

import { ThemedText } from '@/components/ui/ThemedText'
import { ThemedView } from '@/components/ui/ThemedView'

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<ThemedView style={styles.container}>
				<ThemedText type='title' style={{ color: 'white' }}>
					This screen doesn't exist.
				</ThemedText>
			</ThemedView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	},
	link: {
		marginTop: 15,
		paddingVertical: 15
	}
})
