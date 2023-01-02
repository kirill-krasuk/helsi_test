import Grid from '@mui/material/Grid';

import { FormField } from '@ui-kit/index';

import type { DocumentPartitionComponent } from '../types';

import { IDPassportScheme } from './scheme';

const IdPassportFormPart: DocumentPartitionComponent = props => {
	const { Selector } = props;

	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				{Selector}
			</Grid>

			<Grid item xs={6}>
				<FormField name='id' fullWidth label='номер ID паспорту' />
			</Grid>
		</Grid>
	);
};

IdPassportFormPart.scheme = IDPassportScheme;

export { IdPassportFormPart };
