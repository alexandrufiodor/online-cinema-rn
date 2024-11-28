import { FC } from 'react'
import { Layout, Loader } from '@/components/ui'
import { useGetAllMovies } from '@/components/screens/home/useGetAllMovies'
import Carousel from '@/components/screens/home/carousel/Carousel'

const Home: FC = () => {
	const { movies, isLoading } = useGetAllMovies()
	return (
		<Layout>
			{isLoading ? <Loader /> : movies?.length && <Carousel movies={movies} />}
		</Layout>
	)
}

export default Home
