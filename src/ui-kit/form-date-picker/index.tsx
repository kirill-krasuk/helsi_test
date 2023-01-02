import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Field, FieldInputProps } from 'react-final-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { Input } from '@ui-kit/Input';

import { useDateHandlers } from './useDateHandlers';

import type { FC } from 'react';
import type { DatePickerProps } from '../types';

const defaultProps: Partial<DatePickerProps> = {
	inputFormat: 'MM/DD/YYYY'
};

const FormDatePicker: FC<DatePickerProps> = props => {
	const { inputProps, name, inputFormat } = { ...defaultProps, ...props };

	const { value, handleChange, handleChangeInput } = useDateHandlers(inputFormat!);

	return (
		<Field name={name}>
			{({ input, meta }) => (
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DesktopDatePicker
						{...input}
						{...props}
						onChange={handleChange(input)}
						value={value}
						inputFormat={inputFormat}
						renderInput={(params: any) => (
							<Input
								formInputProps={input}
								meta={meta}
								{...params}
								{...inputProps}
								onChange={handleChangeInput(input)}
							/>
						)}
					/>
				</LocalizationProvider>
			)}
		</Field>
	);
};

export { FormDatePicker };
