import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

interface ILoaderProps {
	size?: number | 'large' | 'small' | undefined
}

const Loader: FC<ILoaderProps> = ({ size = 'large' }) => {
	return <ActivityIndicator size={size} color='#BF3335' />
}

export default Loader
