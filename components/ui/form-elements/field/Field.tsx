import { Controller } from 'react-hook-form'
import { Text, TextInput } from 'react-native'
import { clsx } from 'clsx'
import React from 'react'
import { IField } from '@/components/ui/form-elements/field/field.interface'

const Field = <T extends Record<string, any>>({
	placeholder,
	control,
	rules,
	name,
	className,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			//@ts-ignore
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<TextInput
						placeholder={placeholder}
						autoCapitalize='none'
						onChangeText={onChange}
						onBlur={onBlur}
						value={(value || '').toString()}
						className={clsx(
							'bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5 text-white text-base',
							error ? 'border-red' : 'border-transparent'
						)}
						placeholderClassName='text-red'
						{...rest}
					/>
					{error && <Text className='text-red'>{error?.message}</Text>}
				</>
			)}
		/>
	)
}

export default Field
