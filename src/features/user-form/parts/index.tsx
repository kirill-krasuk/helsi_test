import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { FormField } from '@ui-kit/index';

import { PassportFormPart } from './passport-form-part';
import { IdPassportFormPart } from './id-passport-form-part';
import { DocumentBaseScheme } from './scheme';

import type { FC } from 'react';
import type { DocumentFormProps, DocumentMap, DocumentSelectItem } from './types';

const componentMap: DocumentMap = {
	passport: PassportFormPart,
	idCard: IdPassportFormPart
};

const documentsTypeMap: DocumentSelectItem[] = [
	{
		value: 'idCard',
		label: 'Паспорт (ID-картка)'
	},
	{
		value: 'passport',
		label: 'Паспорт (книжечка)'
	}
];

const DocumentForm: FC<DocumentFormProps> = props => {
	const { setBaseScheme } = props;

	const [form, setForm] = useState<DocumentBaseScheme['documentType']>(() => {
		setBaseScheme(PassportFormPart.scheme);
		return 'passport';
	});

	const CurrentForm = componentMap[form];

	const handleSelectForm = (event: React.ChangeEvent<HTMLInputElement>) => {
		const currentForm = event.target.value as DocumentBaseScheme['documentType'];

		setForm(currentForm);

		const { scheme } = componentMap[currentForm];

		setBaseScheme(scheme);
	};

	return (
		<>
			<Typography variant='h5' mt={5} mb={3}>
				Документ, що посвідчує особу
			</Typography>

			<CurrentForm
				Selector={
					<FormField
						name='documentType'
						select
						value={form}
						label='Тип документу*'
						onChange={handleSelectForm}
						fullWidth
					>
						{documentsTypeMap.map(({ value, label }) => (
							<MenuItem key={value} value={value}>
								{label}
							</MenuItem>
						))}
					</FormField>
				}
			/>
		</>
	);
};

export { DocumentForm };
