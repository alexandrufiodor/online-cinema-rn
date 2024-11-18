import React, { FC, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { Button, DismissKeyboard, Loader } from '@/components/ui'
import AuthFields from '@/components/screens/auth/AuthFields'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/auth/auth.service'

const AuthScreen: FC = () => {
	const [isReg, setIsReg] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})
	const { mutate } = useMutation({
		mutationFn: ({ email, password }: { email: string; password: string }) =>
			AuthService.main(isReg ? 'reg' : 'login', email, password),
		onSuccess: response => {
			console.log('🚀Auth.tsx:21', JSON.stringify(response, null, 2))
		}
	})
	const onSubmit: SubmitHandler<IAuthFormData> = ({ email, password }) => {
		mutate({ email, password })
	}

	return (
		<DismissKeyboard>
			<View className='mx-2 justify-center items-center h-full'>
				<View className='w-9/12'>
					<Text className='text-center text-white text-4xl font-bold mb-2.5'>
						{isReg ? 'Register' : 'Login'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthFields control={control} isPassRequired />
							<Button icon='film' onPress={handleSubmit(onSubmit)}>
								Go to watch
							</Button>

							<Pressable onPress={() => setIsReg(!isReg)}>
								<Text className='text-base text-white text-right mt-3 opacity-30'>
									{isReg ? 'Login' : 'Register'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</DismissKeyboard>
	)
}

export default AuthScreen
