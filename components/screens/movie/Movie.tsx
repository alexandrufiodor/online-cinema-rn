import { FC } from 'react'
import { Layout, Loader } from '@/components/ui'
import { useMovie } from './useMovie'
import MovieHeader from '@/components/screens/movie/MovieHeader'
import MovieBackground from '@/components/screens/movie/MovieBackground'
import MovieContent from '@/components/screens/movie/movie-content/MovieContent'

const Movie: FC<{ slug: string }> = ({ slug }) => {
	const { movie, isLoading } = useMovie(slug)

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} />
			<MovieBackground movie={movie} />
			<MovieContent movie={movie} />
		</Layout>
	)
}

export default Movie
