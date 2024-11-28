import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { IMovie } from '@/shared/types/movie.interface'
import { Link } from 'expo-router'
import { getMediaSource } from '@/utils/getMediaSource'
import { Rating } from '@/components/ui'
import GenreList from '../../../../ui/movie/movie-item/GenreList'

const CarouselItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<View className='w-48'>
			<Link
				href={{
					pathname: `/movie/[slug]`,
					params: { slug: movie.slug }
				}}
			>
				<View>
					<View className='absolute z-1 right-2 top-2'></View>
					<Image
						style={{
							height: 300,
							resizeMode: 'cover',
							borderWidth: 1,
							borderColor: 'white'
						}}
						className='w-full rounded-xl mb-2.5'
						source={getMediaSource(movie.poster)}
					/>
					<View className='items-center'>
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
					</View>
				</View>
			</Link>
		</View>
	)
}

export default CarouselItem
