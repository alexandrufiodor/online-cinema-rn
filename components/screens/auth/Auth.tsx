import React, { FC, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { Button, Loader } from '@/ui'
import AuthFields from '@/components/screens/auth/AuthFields'
import DismissKeyboard from '@/ui/form-elements/field/DismissKeyboard'

const AuthScreen: FC = () => {
	const [isReg, setIsReg] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = ({ email, password }) => {}
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
