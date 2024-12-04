import { FC, useRef } from 'react'
import { Animated, ScrollView, View } from 'react-native'
import { useScrollToTop } from '@react-navigation/native'
import MovieInfo from './MovieInfo'
import { IMovieComponent } from '../movie-page.interface'
import ActorCarousel from './ActorCarousel'
import RelatedMovies from '@/components/screens/movie/movie-content/RelatedMovies'

const MovieContent: FC<IMovieComponent> = ({ movie }) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)
	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
		>
			<MovieInfo movie={movie} />
			<View className='bg-[#090909] px-6 pt-1 pb-24'>
				<ActorCarousel actors={movie.actors} />
				<RelatedMovies
					genreIds={movie.genres?.map(({ _id }) => _id)}
					currentMovieId={movie._id}
				/>
			</View>
		</Animated.ScrollView>
	)
}

export default MovieContent
