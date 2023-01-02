import { z } from 'zod';

import type { DocumentBaseScheme } from './scheme';
import type { FC } from 'react';

export type DocumentFormProps = {
	setBaseScheme: <T extends z.ZodRawShape>(scheme: z.ZodObject<T>) => void;
};

export type FormPartProps = {
	Selector: React.ReactNode;
};

export type DocumentPartitionComponent = FC<FormPartProps> & {
	scheme: z.ZodObject<any>;
};

export type DocumentSelectItem = {
	value: DocumentBaseScheme['documentType'];
	label: string;
};
export type DocumentMap = Record<
	DocumentBaseScheme['documentType'],
	DocumentPartitionComponent
>;
