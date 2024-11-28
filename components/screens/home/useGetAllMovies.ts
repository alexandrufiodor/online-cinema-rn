import { useQuery } from '@tanstack/react-query'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movie.interface'

export const useGetAllMovies = () => {
	const { isLoading, data: movies } = useQuery({
		queryKey: ['get movies'],
		queryFn: () => MovieService.getAll(),
		select: (data: IMovie[]) => data?.slice(0, 10)
	})
	return { movies, isLoading }
}
