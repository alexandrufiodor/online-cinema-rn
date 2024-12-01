import { useQuery } from '@tanstack/react-query'
import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

export const useGenre = (slug: string) => {
	const { isLoading, data: genre } = useQuery({
		queryKey: ['genre', slug],
		queryFn: () => GenreService.getBySlug(slug)
	})

	const genreId = genre?._id || ''

	const { isLoading: isMovieLoading, data: movies } = useQuery({
		queryKey: ['get movies by genre', genreId],
		queryFn: () => MovieService.getByGenres([genreId]),
		enabled: !!genre?._id
	})

	return { isLoading: isLoading || isMovieLoading, genre, movies }
}
