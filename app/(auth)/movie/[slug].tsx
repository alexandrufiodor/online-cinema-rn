import { FC } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Movie from '@/components/screens/movie/Movie'

const MovieSlug: FC = () => {
	const { slug } = useLocalSearchParams<{ slug: string }>()
	return <Movie slug={slug} />
}

export default MovieSlug
