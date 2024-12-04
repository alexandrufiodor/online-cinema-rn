import { FC } from 'react'
import { Animated, Image, StyleSheet } from 'react-native'
import { getMediaSource } from '@/utils/getMediaSource'
import { LinearGradient } from 'expo-linear-gradient'
import { IMovieComponent } from '@/components/screens/movie/movie-page.interface'

const MovieBackground: FC<IMovieComponent> = ({ movie }) => {
	// const { top } = useSafeAreaInsets()
	return (
		<Animated.View style={StyleSheet.absoluteFillObject}>
			<Image
				style={StyleSheet.absoluteFill}
				resizeMode='cover'
				source={getMediaSource(movie.poster)}
			/>
			<LinearGradient
				start={[0, 0.3]}
				end={[0, 0.8]}
				style={StyleSheet.absoluteFill}
				colors={['transparent', 'rgba(0,0,0,.2)', '#090909']}
			/>
		</Animated.View>
	)
}

export default MovieBackground
