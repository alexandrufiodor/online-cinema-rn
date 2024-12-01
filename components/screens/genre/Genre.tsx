import { FC } from 'react'
import { Layout, Loader, MovieCatalog, NotFound } from '@/components/ui'
import { useGenre } from '@/components/screens/genre/useGenre'

const Genre: FC<{ slug: string }> = ({ slug }) => {
	const { isLoading, movies, genre } = useGenre(slug)

	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			{genre ? (
				<MovieCatalog
					title={genre.name}
					movies={movies}
					description={genre.description}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Genre
