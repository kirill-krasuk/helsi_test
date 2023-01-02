import TextField, { TextFieldProps } from '@mui/material/TextField';

import { getControlProps, getFormErrorProps, getPlaceholderProps } from './helpers';

import type { FC } from 'react';
import type { InputProps } from '../types';

const defaultProps: Partial<TextFieldProps> = {
	variant: 'standard'
};

const Input: FC<InputProps> = props => {
	const { formInputProps, meta, control, onChange, ...restProps } = {
		...defaultProps,
		...props
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(event);
		formInputProps.onChange(event);
	};

	return (
		<TextField
			{...formInputProps}
			{...restProps}
			{...getFormErrorProps(meta)}
			{...getPlaceholderProps(restProps.placeholder)}
			{...getControlProps(control)(formInputProps, meta)}
			onChange={handleChange}
		/>
	);
};

export { Input };
