import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import Animated from 'react-native-reanimated'
import { AntDesign } from '@expo/vector-icons'
import { useAuth } from '@/hooks/useAuth'
import { AuthService } from '@/services/auth/auth.service'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { useProfile } from '@/components/screens/profile/useProfile'
import { Button, Heading, Layout, Loader } from '@/components/ui'
import AuthFields from '@/components/screens/auth/AuthFields'
import { useScaleOnMount } from '@/hooks/useScaleOnMount'

const Profile: FC = () => {
	const { setUser } = useAuth()
	const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})
	const { isLoading, onSubmit } = useProfile(setValue)
	const { styleAnimation } = useScaleOnMount()
	return (
		<Layout>
			<View className='px-10'>
				<Heading title='Profile' />
				<Animated.View
					style={styleAnimation}
					className='my-6 items-center justify-center'
				>
					<Image
						source={require('./avatar-guest.jpg')}
						className='h-40 w-40 rounded-2xl'
					/>
				</Animated.View>
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
		</Layout>
	)
}

export default Profile
