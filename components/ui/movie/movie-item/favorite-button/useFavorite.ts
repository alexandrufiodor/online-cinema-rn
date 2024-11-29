import { useEffect, useState } from 'react'
import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserService } from '@/services/user.service'

export const useFavorite = (movieId: string) => {
	const [isSmashed, setIsSmashed] = useState(false)
	const { favoriteMovies } = useFavorites()
	const queryClient = useQueryClient()
	useEffect(() => {
		if (!favoriteMovies) return
		const isHasMovie = favoriteMovies.some(f => f._id === movieId)
		if (isHasMovie !== isSmashed) setIsSmashed(isHasMovie)
	}, [favoriteMovies, isSmashed, movieId])

	const { mutate: toggleFavorite } = useMutation({
		mutationKey: ['update favorites'],
		mutationFn: () => UserService.toggleFavorite(movieId),
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['favorite movies']
			})
		}
	})

	return { toggleFavorite, isSmashed }
}
