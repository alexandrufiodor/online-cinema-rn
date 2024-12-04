import { useQuery } from '@tanstack/react-query'
import { MovieService } from '@/services/movie.service'

export const useRelatedMovies = (
	genreIds: string[],
	currentMovieId: string
) => {
	const { isLoading, data: movies } = useQuery({
		queryKey: ['get related movies by genres', genreIds],
		queryFn: () => MovieService.getByGenres(genreIds),
		select: data => data.filter(m => m._id !== currentMovieId).slice(0, 5),
		enabled: genreIds?.length > 0
	})

	return { isLoading: isLoading, movies }
}
