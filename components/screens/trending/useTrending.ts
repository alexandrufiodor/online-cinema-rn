import { useQuery } from '@tanstack/react-query'
import { MovieService } from '@/services/movie.service'

export const useTrending = () => {
	const { isLoading, data: movies } = useQuery({
		queryKey: ['trending movies'],
		queryFn: () => MovieService.getMostPopularMovies()
	})

	return { isLoading, movies }
}
