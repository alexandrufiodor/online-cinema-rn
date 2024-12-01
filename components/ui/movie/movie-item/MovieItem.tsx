import { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import Animated from 'react-native-reanimated'
import { useMovieItemAnimation } from './useMovieItemAnimation'
import { IMovie } from '@/shared/types/movie.interface'
import { Link } from 'expo-router'
import { FavoriteButton, Rating } from '@/components/ui'
import { BlurView } from 'expo-blur'
import { clsx } from 'clsx'
import { getMediaSource } from '@/utils/getMediaSource'

const ReanimatedLink = Animated.createAnimatedComponent(Link)

interface IMovieItem {
	index: number
	className?: string
	movie: IMovie
}

const MovieItem: FC<IMovieItem> = ({ index, movie, className }) => {
	const { name } = useTypedRoute()
	const isFavoritePage = name === 'favorites'

	const { styleAnimation } = useMovieItemAnimation(index)
	return (
		<ReanimatedLink
			href={{
				pathname: `/movie/[slug]`,
				params: { slug: movie.slug }
			}}
			style={styleAnimation}
		>
			<View
				className={clsx(
					'rounded-xl overflow-hidden h-56 w-[165px] relative',
					className
				)}
			>
				<Image
					style={{
						resizeMode: 'cover',
						...StyleSheet.absoluteFillObject
					}}
					source={getMediaSource(movie.poster)}
				/>
				{isFavoritePage && (
					<View className='absolute z-1 right-1.5 top-1.5'>
						<FavoriteButton movieId={movie._id} isSmall />
					</View>
				)}
				<BlurView
					intensity={25}
					className='absolute w-full bottom-0 left-0 right-0 items-center pt-0.5 px-2'
				>
					<View className='-ml-2 -mb-0.5'>
						<Rating rating={movie.rating} size={16} />
					</View>
					<Text
						className='text-white text-lg font-semibold mb-1'
						numberOfLines={1}
					>
						{movie.title}
					</Text>
				</BlurView>
				{/*</Animated.View>*/}
			</View>
		</ReanimatedLink>
	)
}

export default MovieItem
