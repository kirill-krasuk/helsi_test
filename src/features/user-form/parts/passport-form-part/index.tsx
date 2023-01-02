import Grid from '@mui/material/Grid';

import { FormDatePicker, FormField } from '@ui-kit/index';

import type { DocumentPartitionComponent } from '../../parts/types';

import { PassportScheme } from './scheme';

const PassportFormPart: DocumentPartitionComponent = props => {
	const { Selector } = props;

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					{Selector}
				</Grid>

				<Grid item xs={6}>
					<FormField
						name='series'
						fullWidth
						label='Серія (за наявності), номер*'
					/>
				</Grid>
			</Grid>

			<Grid container spacing={2} mt={2}>
				<Grid item xs={6}>
					<FormDatePicker
						name='dateOfIssue'
						label='Коли виданий*'
						inputProps={{
							fullWidth: true
						}}
					/>
				</Grid>

				<Grid item xs={6}>
					<FormDatePicker
						name='dateOfExpiry'
						label='Діє до'
						inputProps={{
							fullWidth: true
						}}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={2} mt={2}>
				<Grid item xs={6}>
					<FormField name='issuedBy' fullWidth label='Ким виданий*' />
				</Grid>

				<Grid item xs={6}>
					<FormField
						name='UNZR'
						fullWidth
						label='Запис № (УНЗР)*'
						placeholder='РРРРММДД-ХХХХХ'
						helperText='Вкажіть унікальний номер запису в Демографічному реєстрі (Запис №)'
					/>
				</Grid>
			</Grid>
		</>
	);
};

PassportFormPart.scheme = PassportScheme;

export { PassportFormPart };
