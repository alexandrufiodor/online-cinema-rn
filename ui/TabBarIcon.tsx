// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { type IconProps } from '@expo/vector-icons/build/createIconSet'
import { type ComponentProps } from 'react'
import { Feather } from '@expo/vector-icons'

export function TabBarIcon({
	style,
	...rest
}: IconProps<ComponentProps<typeof Feather>['name']>) {
	return <Feather size={20} style={[{ marginBottom: -3 }, style]} {...rest} />
}
