import { UseFormReset } from 'react-hook-form'
import { IAuthFormData, IAuthResponse } from '@/shared/types/auth.interface'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/auth/auth.service'
import { useMemo } from 'react'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth()

	const setData = (data: IAuthResponse) => {
		setTimeout(() => {
			reset()
			setUser(data.user)
		})
	}
	const { mutate: loginSync, isPending: isLoginLoading } = useMutation({
		mutationFn: ({ email, password }: IAuthFormData) =>
			AuthService.main('login', email, password),
		onSuccess: data => {
			setData(data)
		}
	})

	const { mutate: registerSync, isPending: isRegisterLoading } = useMutation({
		mutationFn: ({ email, password }: IAuthFormData) =>
			AuthService.main('reg', email, password),
		onSuccess: data => {
			setData(data)
		}
	})

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
