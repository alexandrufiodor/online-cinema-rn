import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AuthService } from '@/services/auth/auth.service'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { deleteItemAsync, getItemAsync } from 'expo-secure-store'
import { EnumSecureStore } from '@/shared/types/auth.interface'

export default function Profile() {
	const { setUser } = useAuth()
	const router = useRouter()
	return (
		<View className='mt-20 px-10'>
			<Pressable
				className='opacity-40 items-center flex-row justify-end'
				onPress={async () => deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)}
			>
				<Text className='text-lg ml-2 text-white'>Clear accessToken</Text>
			</Pressable>
			<Pressable
				className='opacity-40 items-center flex-row justify-end'
				onPress={async () => deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)}
			>
				<Text className='text-lg ml-2 text-white'>Clear refreshToken</Text>
			</Pressable>
			<Pressable
				className='opacity-40 items-center flex-row justify-end'
				onPress={async () =>
					getItemAsync(EnumSecureStore.ACCESS_TOKEN).then(data =>
						console.log(data)
					)
				}
			>
				<Text className='text-lg ml-2 text-white'>Show accessToken</Text>
			</Pressable>
			<Pressable
				className='opacity-40 items-center flex-row justify-end'
				onPress={async () =>
					getItemAsync(EnumSecureStore.REFRESH_TOKEN).then(data =>
						console.log(data)
					)
				}
			>
				<Text className='text-lg ml-2 text-white'>Show refreshToken</Text>
			</Pressable>
			<Pressable
				className='opacity-40 items-center flex-row justify-end'
				onPress={async () => {
					await AuthService.logout().then(() => {
						setUser(null)
						router.replace('/(public)')
					})
				}}
			>
				<AntDesign name='logout' size={18} color='white' />
				<Text className='text-lg ml-2 text-white'>Logout</Text>
			</Pressable>
		</View>
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
