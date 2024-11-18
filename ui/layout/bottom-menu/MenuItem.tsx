import { FC } from 'react'
import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { getColor } from '@/config/colors.config'
import { IMenuItem, TypeNavigate } from '@/ui/layout/bottom-menu/menu.interface'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, nav }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable className='items-center w-[20%]' onPress={() => nav(item.path)}>
			<Feather
				name={item.iconName}
				size={26}
				color={isActive ? getColor('primary') : getColor('gray.400')}
			/>
		</Pressable>
	)
}

export default MenuItem
