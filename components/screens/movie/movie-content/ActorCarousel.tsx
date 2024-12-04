import { FC } from 'react'
import { Image, ListRenderItemInfo, Text, View } from 'react-native'
import { IActor } from '@/shared/types/movie.interface'
import HorizontalList from '@/components/ui/HorizontalList'
import { Link } from 'expo-router'
import { getMediaSource } from '@/utils/getMediaSource'

const ActorCarousel: FC<{ actors: IActor[] }> = ({ actors }) => {
	return (
		<HorizontalList
			data={actors}
			// @ts-ignore
			renderItem={({ item: actor }: ListRenderItemInfo<IActor>) => (
				<Link
					href={{
						pathname: `/actor/[slug]`,
						params: { slug: actor.slug }
					}}
				>
					<View
						className='flex-row items-center rounded-xl overflow-hidden w-48 mr-4'
						style={{
							height: 72,
							backgroundColor: 'rgba(255, 255, 255, .07)'
						}}
					>
						<Image
							className='h-full'
							style={{ width: 50, resizeMode: 'cover' }}
							source={getMediaSource(actor.photo)}
						/>
						<View className='p-3 w-11/12'>
							<Text
								className='text-white text-base font-medium pr-7'
								numberOfLines={1}
							>
								{actor.name}
							</Text>
						</View>
					</View>
				</Link>
			)}
		></HorizontalList>
	)
}

export default ActorCarousel
