import { TextFieldProps } from '@mui/material/TextField';

import type { DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker';
import type { FieldInputProps, FieldMetaState } from 'react-final-form';

export type InputProps = Omit<
	TextFieldProps & {
		control?: (
			input: FieldInputProps<any, HTMLElement>,
			meta: FieldMetaState<string>
		) => JSX.Element;
		meta: FieldMetaState<any>;
		formInputProps: FieldInputProps<any, HTMLElement>;
	},
	'variant'
>;

export type DatePickerProps = Omit<
	DesktopDatePickerProps<any, any>,
	'value' | 'renderInput' | 'onChange'
> & {
	name: string;
	inputProps?: Omit<InputProps, 'meta' | 'formInputProps'>;
};

export type FormFieldProps = Omit<
	InputProps & {
		name: string;
		clearOnUnmount?: boolean;
	},
	'meta' | 'formInputProps'
>;

export type FormError = Pick<
	TextFieldProps,
	'error' | 'helperText' | 'FormHelperTextProps'
>;
