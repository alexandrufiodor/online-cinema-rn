import { FC } from 'react'
import { Animated, Image, Text, View } from 'react-native'
import { IMovie } from '@/shared/types/movie.interface'
import { Link } from 'expo-router'
import { getMediaSource } from '@/utils/getMediaSource'
import { FavoriteButton, GenreList, Rating } from '@/components/ui'
import { useItemAnimation } from './useItemAnimation'
import {
	ITEM_SIZE,
	SPACING
} from '@/components/screens/home/carousel/carousel.constants'

interface ICarouselItem {
	index: number
	scrollX: Animated.Value
	movie: IMovie
}

const CarouselItem: FC<ICarouselItem> = ({ movie, index, scrollX }) => {
	const { inputRange, rotate, opacity, scale, opacityElements } =
		useItemAnimation(index, scrollX)
	return (
		<View style={{ width: ITEM_SIZE }}>
			<Animated.View
				style={{
					padding: SPACING,
					transform: [{ rotate }, { scale }],
					opacity
				}}
				className='items-center'
			>
				<Link
					href={{
						pathname: `/movie/[slug]`,
						params: { slug: movie.slug }
					}}
				>
					<View className='w-full relative'>
						<View className='absolute z-1 right-2 top-2'>
							<FavoriteButton movieId={movie._id} />
						</View>
						<Image
							style={{
								width: ITEM_SIZE * 0.9,
								height: ITEM_SIZE * 1.3,
								resizeMode: 'cover',
								borderWidth: 1,
								borderColor: 'white'
							}}
							className='w-full rounded-xl mb-2.5'
							source={getMediaSource(movie.poster)}
						/>
						<Animated.View
							className='items-center'
							style={{ opacity: opacityElements }}
						>
							<Rating rating={movie.rating} />
							<Link
								href={{
									pathname: `/movie/[slug]`,
									params: { slug: movie.slug }
								}}
							>
								<View>
									<Text
										className='text-white text-3xl font-semibold opacity-95 mb-2.5'
										numberOfLines={1}
									>
										{movie.title}
									</Text>
								</View>
							</Link>
							<GenreList genres={movie.genres} />
						</Animated.View>
					</View>
				</Link>
			</Animated.View>
		</View>
	)
}

export default CarouselItem
