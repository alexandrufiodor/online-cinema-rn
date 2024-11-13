import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'
import { IButton } from './button.interface'
import { clsx } from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'

const Button: FC<PropsWithChildren<IButton>> = ({
	onPress,
	className,
	icon,
	children
}) => {
	return (
		<Pressable
			onPress={onPress}
			className={clsx('self-center mt-3.5', className)}
		>
			<LinearGradient
				className={clsx('w-full py-3 px-8 rounded-2xl items-center', {
					'flex-row': !!icon
				})}
				colors={['#DC3F41', '#a6282b']}
			>
				{icon && <Feather name={icon} size={18} color='white' />}
				<Text
					className={clsx('text-white text-center font-medium text-lg', {
						'ml-2': !!icon
					})}
				>
					{children}
				</Text>
			</LinearGradient>
		</Pressable>
	)
}

export default Button
