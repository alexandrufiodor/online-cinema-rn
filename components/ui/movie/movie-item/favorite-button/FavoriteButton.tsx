import { FC } from 'react'
import BlurButton from '../../../blur-button/BlurButton'
import { StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFavoriteAnimation } from './useFavoriteAnimation'
import Animated, { withSpring } from 'react-native-reanimated'
import { useFavorite } from '@/components/ui/movie/movie-item/favorite-button/useFavorite'

interface IFavoriteButton {
	movieId: string
	isSmall?: boolean
}

const FavoriteButton: FC<IFavoriteButton> = ({ movieId, isSmall }) => {
	const { toggleFavorite, isSmashed } = useFavorite(movieId)
	const { liked, outlineStyle, fillStyle } = useFavoriteAnimation(isSmashed)
	return (
		<BlurButton
			isSmall={isSmall}
			onPress={() => {
				liked.value = withSpring(liked.value === 1 ? 0 : 1)
				toggleFavorite()
			}}
		>
			<Animated.View
				style={[StyleSheet.absoluteFill, outlineStyle]}
				className='items-center justify-center'
			>
				<MaterialCommunityIcons
					name='heart-outline'
					size={isSmall ? 19 : 22}
					color='white'
				/>
			</Animated.View>
			<Animated.View
				style={[StyleSheet.absoluteFill, fillStyle]}
				className='items-center justify-center'
			>
				<MaterialCommunityIcons
					name='heart'
					size={isSmall ? 19 : 22}
					color='#DC3F41'
				/>
			</Animated.View>
		</BlurButton>
	)
}

export default FavoriteButton
