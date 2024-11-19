import { Pressable, Text, View } from 'react-native'
import { AuthService } from '@/services/auth/auth.service'
import { useAuth } from '@/hooks/useAuth'
import { AntDesign } from '@expo/vector-icons'
import { deleteItemAsync, getItemAsync } from 'expo-secure-store'
import { EnumSecureStore } from '@/shared/types/auth.interface'

export default function Profile() {
	const { setUser } = useAuth()
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
					})
				}}
			>
				<AntDesign name='logout' size={18} color='white' />
				<Text className='text-lg ml-2 text-white'>Logout</Text>
			</Pressable>
		</View>
	)
}
