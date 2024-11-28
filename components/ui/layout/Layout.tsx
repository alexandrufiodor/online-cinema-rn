import React, { FC, PropsWithChildren } from 'react'
import { SafeAreaView, StyleProp, View, ViewStyle } from 'react-native'
import { clsx } from 'clsx'

interface ILayout {
	className?: string
	style?: StyleProp<ViewStyle>
	isHasPadding?: boolean
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	style,
	className,
	isHasPadding
}) => {
	return (
		<SafeAreaView className='flex-1'>
			<View
				className={clsx('pt-5 flex-1', className, {
					'px-6': isHasPadding
				})}
				style={style}
			>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout
