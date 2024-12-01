import { FC } from 'react'
import { Layout, Loader, MovieCatalog } from '@/components/ui'
import { useTrending } from '@/components/screens/trending/useTrending'

const Trending: FC = () => {
	const { isLoading, movies } = useTrending()

	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			<MovieCatalog
				title='Trending'
				movies={movies}
				description='Trending movies in execellent quality: legal, safe, without ads'
			/>
		</Layout>
	)
}

export default Trending
