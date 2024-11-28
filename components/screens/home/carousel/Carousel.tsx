import { FC } from 'react'
import { View } from 'react-native'
import { IMovie } from '@/shared/types/movie.interface'
import CarouselItem from '@/components/screens/home/carousel/carousel-item/CarouselItem'

interface ICarousel {
	movies: IMovie[]
}
const Carousel: FC<ICarousel> = ({ movies }) => {
	return (
		<View>
			{movies.map(movie => (
				<CarouselItem movie={movie} key={movie._id} />
			))}
		</View>
	)
}

export default Carousel
