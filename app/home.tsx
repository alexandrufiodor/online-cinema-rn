import { Text, View } from 'react-native'
import React from 'react'

export default function home() {
	return (
		<View className='mx-2 justify-center items-center h-full'>
			<View className='w-9/12'>
				<Text className='text-center text-white text-4xl font-bold mb-2.5'>
					Home
				</Text>
			</View>
		</View>
	)
}
