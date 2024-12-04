import { useQuery } from '@tanstack/react-query'
import { MovieService } from '@/services/movie.service'

export const useMovie = (slug: string) => {
	const { isLoading, data: movie } = useQuery({
		queryKey: ['movie', slug],
		queryFn: () => MovieService.getBySlug(slug)
	})

	return { isLoading: isLoading, movie }
}
