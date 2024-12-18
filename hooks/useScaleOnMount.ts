import {
	useAnimatedStyle,
	useSharedValue,
	withSpring
} from 'react-native-reanimated'
import { useEffect } from 'react'

export const useScaleOnMount = () => {
	const scale = useSharedValue(0)

	useEffect(() => {
		scale.value = withSpring(1)
	}, [])

	const styleAnimation = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }]
	}))

	return { styleAnimation }
}
