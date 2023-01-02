import { useState } from 'react';
import dayjs from 'dayjs';

import type { Dayjs } from 'dayjs';
import type { FieldInputProps } from 'react-final-form';

export function useDateHandlers(inputFormat: string) {
	const [value, setValue] = useState<Dayjs | null>(null);

	// handle calendar input and format data to date
	const handleChange =
		(input: FieldInputProps<any, HTMLElement>) => (newValue: Dayjs | null) => {
			setValue(newValue);
			input.onChange(newValue?.toDate());
		};

	// handle manual input and format data to date
	const handleChangeInput =
		(input: FieldInputProps<any, HTMLElement>) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target;
			const newValue = dayjs(value, inputFormat);

			setValue(newValue);
			input.onChange(newValue?.toDate());
		};

	return { value, handleChange, handleChangeInput };
}
