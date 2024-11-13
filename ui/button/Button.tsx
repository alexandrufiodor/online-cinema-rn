import React, { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'
import { IButton } from './button.interface'
import { clsx } from 'clsx'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	icon,
	children,
	...rest
}) => {
	return (
		<Pressable className={clsx('self-center mt-3.5', className)} {...rest}>
			<View
				className={clsx('w-full rounded-2xl overflow-hidden', className, {
					'flex-row': !!icon
				})}
			>
				<LinearGradient
					start={{ x: 0, y: 0.75 }}
					end={{ x: 1, y: 0.25 }}
					colors={['#DC3F41', '#a6282b']}
				>
					<View
						className={clsx('w-full py-3 px-8 items-center rounded-2xl', {
							'flex-row': !!icon
						})}
					>
						{icon && <Feather name={icon} size={18} color='white' />}
						<Text
							className={clsx('text-white text-center font-medium text-lg', {
								'ml-2': !!icon
							})}
						>
							{children}
						</Text>
					</View>
				</LinearGradient>
			</View>
		</Pressable>
	)
}

export default Button
