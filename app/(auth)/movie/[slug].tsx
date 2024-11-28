import { FC } from 'react'
import { Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { Layout } from '@/components/ui'

const MovieSlug: FC = () => {
	const { slug } = useLocalSearchParams<{ slug: string }>()
	return (
		<Layout isHasPadding>
			<Text className='text-2xl caret-blue-300 font-bold color-red'>
				{slug}
			</Text>
		</Layout>
	)
}

export default MovieSlug
