import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated from 'react-native-reanimated'
import { BlurButton, FavoriteButton, Rating } from '@/components/ui'
import { IMovieComponent } from '@/components/screens/movie/movie-page.interface'

const MovieHeader: FC<IMovieComponent> = ({ movie }) => {
	const { back } = useRouter()
	const { top } = useSafeAreaInsets()
	return (
		<View
			className='absolute left-0 top-0 w-full z-1 flex-row justify-between items-center px-6 pb-4'
			style={{ marginTop: -top - 20, paddingTop: top + 6 }}
		>
			<Animated.View
				style={{ ...StyleSheet.absoluteFillObject }}
				className='bg-[#0D0404]'
			/>
			<BlurButton icon='chevron-left' iconSize={23} onPress={back} />
			<Animated.View className='items-center w-2/3'>
				<Text
					className='text-white font-semibold text-2xl mb-0.5 px-2'
					numberOfLines={1}
				>
					{movie.title}
				</Text>
				<Rating rating={movie.rating} size={14} />
			</Animated.View>
			<FavoriteButton movieId={movie._id} />
		</View>
	)
}

export default MovieHeader
