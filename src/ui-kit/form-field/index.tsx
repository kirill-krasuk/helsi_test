import { Field, useForm } from 'react-final-form';

import { FC, useEffect } from 'react';
import type { FormFieldProps } from '../types';
import { Input } from '@ui-kit/Input';

const defaultProps: Partial<FormFieldProps> = {
	clearOnUnmount: true
};

const FormField: FC<FormFieldProps> = props => {
	const { name, clearOnUnmount, ...restProps } = { ...defaultProps, ...props };

	const form = useForm();

	useEffect(() => {
		return () => {
			if (clearOnUnmount) {
				form.change(name, undefined);
			}
		};
	}, []);

	return (
		<Field name={name}>
			{({ input, meta }) => (
				<Input formInputProps={input} meta={meta} {...restProps} />
			)}
		</Field>
	);
};

export { FormField };
