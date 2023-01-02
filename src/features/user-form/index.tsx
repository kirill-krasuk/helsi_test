import { type FC, useState } from 'react';
import { Form } from 'react-final-form';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

import { FormField, FormDatePicker } from '@ui-kit/index';
import { validate } from '@lib/validation';

import {
	PatronymicOptionalScheme,
	PatronymicScheme,
	TINOptionalScheme,
	TINScheme,
	UserBaseScheme,
	UserFormValues
} from './scheme';
import { useValidationSchemas } from './useValidationSchemas';
import { DocumentForm } from './parts';

const sex = [
	{
		value: 'male',
		label: 'Чоловіча'
	},
	{
		value: 'female',
		label: 'Жіноча'
	}
];

const methodsOfContact = [
	{
		value: 'phone',
		label: 'Телефон'
	},
	{
		value: 'email',
		label: 'Електронна пошта'
	}
];

const UserForm: FC = () => {
	const [excludePatronymic, setExcludePatronymic] = useState(false);
	const [excludeTIN, setExcludeTIN] = useState(false);

	// toggle validations based on user input
	const UserOptionalSchemas = [
		!excludePatronymic ? PatronymicScheme : PatronymicOptionalScheme,
		!excludeTIN ? TINScheme : TINOptionalScheme
	];

	const { scheme, mergeDynamicSchemes } = useValidationSchemas(
		UserBaseScheme,
		UserOptionalSchemas,
		[excludePatronymic, excludeTIN]
	);

	const onSubmit = (values: UserFormValues) => {
		alert(JSON.stringify(values));
	};

	return (
		<>
			<Typography variant='h5'>Дані Пацієнта</Typography>
			<Form
				onSubmit={onSubmit}
				validate={validate(scheme)}
				render={({ handleSubmit, errors }) => (
					<form onSubmit={handleSubmit}>
						<Grid container spacing={4}>
							<Grid item xs={4}>
								<FormField name='lastName' label='Прізвище*' fullWidth />
							</Grid>

							<Grid item xs={4}>
								<FormField name='firstName' label="Ім'я*" fullWidth />
							</Grid>

							<Grid item xs={4}>
								<FormField
									name='patronymic'
									label='По батькові*'
									fullWidth
									control={() => (
										<Switch
											checked={!excludePatronymic}
											onChange={e =>
												setExcludePatronymic(!e.target.checked)
											}
										/>
									)}
								/>
							</Grid>
						</Grid>

						<Grid container spacing={4} mt={2}>
							<Grid item xs={4}>
								<FormField
									name='TIN'
									label='РНОКПП(ІПН)*'
									fullWidth
									control={() => (
										<Switch
											checked={!excludeTIN}
											onChange={e =>
												setExcludeTIN(!e.target.checked)
											}
										/>
									)}
								/>
							</Grid>

							<Grid item xs={4}>
								<FormDatePicker
									name='birthDate'
									label='Дата народження*'
									inputProps={{
										fullWidth: true
									}}
								/>
							</Grid>

							<Grid item xs={4}>
								<FormField name='sex' label='Стать*' fullWidth select>
									{sex.map(({ value, label }) => (
										<MenuItem key={value} value={value}>
											{label}
										</MenuItem>
									))}
								</FormField>
							</Grid>
						</Grid>

						<Grid container spacing={6} mt={2}>
							<Grid item xs={6}>
								<FormField
									name='country'
									label='Країна народження*'
									fullWidth
								/>
							</Grid>

							<Grid item xs={6}>
								<FormField
									name='city'
									label='Mісце народження*'
									fullWidth
								/>
							</Grid>
						</Grid>

						<Grid container spacing={6} mt={2}>
							<Grid item xs={6}>
								<FormField
									name='methodOfCommunication'
									label="Бажаний спосіб зв'язку із пацієнтом*"
									fullWidth
									select
								>
									{methodsOfContact.map(({ value, label }) => (
										<MenuItem key={value} value={value}>
											{label}
										</MenuItem>
									))}
								</FormField>
							</Grid>

							<Grid item xs={6}>
								<FormField
									name='secretWord'
									label='Секретне слово(не менше 6 символів)*'
									fullWidth
								/>
							</Grid>
						</Grid>

						<Grid container spacing={6} mt={2}>
							<Grid item xs={6}>
								<FormField
									name='phoneNumber'
									label='Номер телефону*'
									placeholder='+380 (__) ___-__-__'
									fullWidth
								/>
							</Grid>

							<Grid item xs={6}>
								<FormField
									name='email'
									label='Адреса електроної пошти*'
									placeholder='example@example.com'
									fullWidth
								/>
							</Grid>
						</Grid>

						<Grid container>
							<DocumentForm setBaseScheme={mergeDynamicSchemes} />
							<Button variant='contained' type='submit'>
								Submit
							</Button>
						</Grid>
					</form>
				)}
			/>
		</>
	);
};

export { UserForm };
