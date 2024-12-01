import { FC } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Genre from '@/components/screens/genre/Genre'

const GenreSlug: FC = () => {
	const { slug } = useLocalSearchParams<{ slug: string }>()
	return <Genre slug={slug} />
}

export default GenreSlug
