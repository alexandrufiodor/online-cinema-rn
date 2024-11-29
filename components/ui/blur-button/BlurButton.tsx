import { FC, PropsWithChildren } from 'react'
import { Pressable } from 'react-native'
import { IBlurButton } from '@/components/ui/blur-button/blur-button.interface'
import { BlurView } from 'expo-blur'
import { clsx } from 'clsx'
import { Feather } from '@expo/vector-icons'

const BlurButton: FC<PropsWithChildren<IBlurButton>> = ({
	children,
	className,
	color = '#fff',
	icon,
	iconSize = 21,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint='light'
				className={clsx(
					'w-12 h-12 items-center justify-center rounded-2xl overflow-hidden',
					className
				)}
			>
				{children ? (
					children
				) : (
					<Feather name={icon} size={iconSize} color={color} />
				)}
			</BlurView>
		</Pressable>
	)
}

export default BlurButton
