import { useAuth } from '@/hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { UserService } from '@/services/user.service'

export const useFavorites = () => {
	const { user } = useAuth()
	const { isLoading, data: favoriteMovies } = useQuery({
		queryKey: ['favorite movies'],
		queryFn: () => UserService.getFavorites(),
		enabled: !!user
	})

	return { isLoading, favoriteMovies }
}
