import type { FieldMetaState } from 'react-final-form';
import type { InputProps } from '../types';
import type { FormError } from '../types';

export function getPlaceholderProps(placeholder?: string) {
	if (placeholder) {
		return {
			placeholder,
			InputLabelProps: { shrink: true }
		};
	}

	return null;
}

export function getControlProps(control: InputProps['control']) {
	return function (
		formInputProps: InputProps['formInputProps'],
		meta: InputProps['meta']
	) {
		if (control) {
			return {
				InputProps: {
					endAdornment: control ? control(formInputProps, meta) : null
				}
			};
		}

		return null;
	};
}

export function getFormErrorProps(errorMeta: FieldMetaState<string>): FormError | null {
	if (errorMeta.error && errorMeta.touched) {
		return {
			error: true,
			helperText: errorMeta.error,
			FormHelperTextProps: {
				style: {
					display: 'flex',
					justifyContent: 'flex-end'
				}
			}
		};
	}

	return null;
}
