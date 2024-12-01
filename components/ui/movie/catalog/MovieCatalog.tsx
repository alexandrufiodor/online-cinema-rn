import { FC } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { IMovieCatalog } from './movie-catalog.interface'
import { useRouter } from 'expo-router'
import { MovieItem } from '@/components/ui'
import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'
import { Ionicons } from '@expo/vector-icons'

const MovieCatalog: FC<IMovieCatalog> = ({
	description,
	isBackButton,
	movies = [],
	title
}) => {
	const { back } = useRouter()
	return (
		<View>
			<View className='flex-row items-center justify-between'>
				<Heading title={title} className='mb-3' />
				{isBackButton && (
					<Pressable onPress={back}>
						<Ionicons
							name='arrow-back-circle-outline'
							size={32}
							color='white'
						/>
					</Pressable>
				)}
			</View>
			{description && <Description text={description} />}
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex-row flex-wrap justify-between mt-5 mb-32'>
					{movies?.length ? (
						movies.map((movie, index) => (
							<View className='mb-6' key={movie._id}>
								<MovieItem index={index} movie={movie} style={{ width: 164 }} />
							</View>
						))
					) : (
						<Text className='text-white text-lg'>Elements not found</Text>
					)}
				</View>
			</ScrollView>
		</View>
	)
}

export default MovieCatalog
