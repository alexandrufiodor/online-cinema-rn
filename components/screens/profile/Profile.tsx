import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { AuthService } from '@/services/auth/auth.service'
import { AntDesign } from '@expo/vector-icons'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/components/screens/profile/useProfile'
import { useForm } from 'react-hook-form'
import { Button, Heading, Loader } from '@/components/ui'
import AuthFields from '@/components/screens/auth/AuthFields'

const Profile: FC = () => {
	const { setUser } = useAuth()
	const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})
	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<View className='mt-20 px-10'>
			<Heading title='Profile' />
			{/*Picture user*/}
			{isLoading ? (
				<Loader />
			) : (
				<View className='mb-10'>
					<AuthFields control={control} />
					<Button onPress={handleSubmit(onSubmit)} icon='edit'>
						Update profile
					</Button>
				</View>
			)}
			{/*<Pressable*/}
			{/*	className='opacity-40 items-center flex-row justify-end'*/}
			{/*	onPress={async () => deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)}*/}
			{/*>*/}
			{/*	<Text className='text-lg ml-2 text-white'>Clear accessToken</Text>*/}
			{/*</Pressable>*/}
			{/*<Pressable*/}
			{/*	className='opacity-40 items-center flex-row justify-end'*/}
			{/*	onPress={async () => deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)}*/}
			{/*>*/}
			{/*	<Text className='text-lg ml-2 text-white'>Clear refreshToken</Text>*/}
			{/*</Pressable>*/}
			{/*<Pressable*/}
			{/*	className='opacity-40 items-center flex-row justify-end'*/}
			{/*	onPress={async () =>*/}
			{/*		getItemAsync(EnumSecureStore.ACCESS_TOKEN).then(data =>*/}
			{/*			console.log(data)*/}
			{/*		)*/}
			{/*	}*/}
			{/*>*/}
			{/*	<Text className='text-lg ml-2 text-white'>Show accessToken</Text>*/}
			{/*</Pressable>*/}
			{/*<Pressable*/}
			{/*	className='opacity-40 items-center flex-row justify-end'*/}
			{/*	onPress={async () =>*/}
			{/*		getItemAsync(EnumSecureStore.REFRESH_TOKEN).then(data =>*/}
			{/*			console.log(data)*/}
			{/*		)*/}
			{/*	}*/}
			{/*>*/}
			{/*	<Text className='text-lg ml-2 text-white'>Show refreshToken</Text>*/}
			{/*</Pressable>*/}
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

export default Profile
