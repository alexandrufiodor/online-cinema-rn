import { FC } from 'react'
import { Text, View } from 'react-native'
import { IGenre } from '@/shared/types/movie.interface'
import { Link } from 'expo-router'

const GenreList: FC<{ genres: IGenre[] }> = ({ genres }) => {
	return (
		<View className='flex-row gap-3'>
			{genres.map(genre => (
				<Link
					key={genre._id}
					href={{
						pathname: `/genre/[slug]`,
						params: { slug: genre.slug }
					}}
				>
					<View className='rounded-2xl bg-gray py-1.5 px-3'>
						<Text className='text-white'>{genre.name}</Text>
					</View>
				</Link>
			))}
		</View>
	)
}

export default GenreList
