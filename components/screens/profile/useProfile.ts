import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { useMutation, useQuery } from '@tanstack/react-query'
import { UserService } from '@/services/user.service'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'

export const useProfile = (setValue: UseFormSetValue<IAuthFormData>) => {
	const { isLoading, isSuccess, data } = useQuery({
		queryKey: ['profile'],
		queryFn: UserService.getProfile
	})

	const { mutateAsync } = useMutation({
		mutationFn: (data: IAuthFormData) => UserService.updateProfile(data),
		onSuccess: () => {
			Toast.show({
				text1: 'Update Profile',
				text2: 'update was successful',
				type: 'success'
			})
		}
	})

	useEffect(() => {
		if (isSuccess) {
			setValue('email', data?.email)
		}
	}, [isSuccess])

	const onSubmit: SubmitHandler<IAuthFormData> = async (
		data: IAuthFormData
	) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
