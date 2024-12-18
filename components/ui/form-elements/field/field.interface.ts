import {
	Control,
	FieldPath,
	FieldValues,
	RegisterOptions
} from 'react-hook-form'
import { TextInputProps } from 'react-native'

export interface IField<T extends FieldValues>
	extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
	control: Control<T>
	name: FieldPath<T>
	rules?:
		| Omit<
				RegisterOptions<FieldValues, string>,
				'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
		  >
		| undefined
}
