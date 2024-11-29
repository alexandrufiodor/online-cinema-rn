import { FC, useRef } from 'react'
import { Animated, Platform, View } from 'react-native'
import { IMovie } from '@/shared/types/movie.interface'
import CarouselItem from './carousel-item/CarouselItem'
import { EMPTY_ITEM_SIZE, ITEM_SIZE } from './carousel.constants'

interface ICarousel {
	movies: IMovie[]
}
const Carousel: FC<ICarousel> = ({ movies }) => {
	const scrollX = useRef(new Animated.Value(0)).current
	return (
		<View>
			<Animated.FlatList
				data={[
					{ _id: 'first' } as IMovie,
					...movies,
					{ _id: 'last' } as IMovie
				]}
				horizontal
				bounces={false}
				renderToHardwareTextureAndroid
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					alignItems: 'center'
				}}
				scrollEventThrottle={16}
				snapToInterval={ITEM_SIZE}
				snapToAlignment={'start'}
				decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
				keyExtractor={item => item._id}
				renderItem={({ item: movie, index }) =>
					movie?.slug ? (
						<CarouselItem movie={movie} index={index} scrollX={scrollX} />
					) : (
						<View style={{ width: EMPTY_ITEM_SIZE }} />
					)
				}
			/>
		</View>
	)
}

export default Carousel
