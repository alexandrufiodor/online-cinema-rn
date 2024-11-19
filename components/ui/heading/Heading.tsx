import { FC } from 'react'
import { Text } from 'react-native'
import { IHeading } from '@/components/ui/heading/heading.interface'
import { clsx } from 'clsx'

const Heading: FC<IHeading> = ({ className, title }) => {
	return (
		<Text
			className={clsx(
				'text-white text-opacity-80 font-semibold text-3xl',
				className
			)}
			numberOfLines={1}
		>
			{title}
		</Text>
	)
}

export default Heading
