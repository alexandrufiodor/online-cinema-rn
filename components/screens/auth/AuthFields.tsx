import { FC } from 'react'
import { Control } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { Field } from '@/components/ui'
import { validEmail } from '@/shared/regex'

interface IAuthFields {
	control: Control<IAuthFormData>
	isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
	return (
		<>
			<Field<IAuthFormData>
				placeholder='Enter email'
				control={control}
				name='email'
				rules={{
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				}}
				keyboardType='email-address'
			/>
			<Field<IAuthFormData>
				placeholder='Enter password'
				control={control}
				name='password'
				secureTextEntry
				rules={
					isPassRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Password should be minimum 6 characters long'
								}
							}
						: {}
				}
				keyboardType='visible-password'
			/>
		</>
	)
}

export default AuthFields
