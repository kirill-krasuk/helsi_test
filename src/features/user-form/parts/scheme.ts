import { z } from 'zod';

export type DocumentBaseScheme = z.infer<typeof DocumentBaseScheme>;
export const DocumentBaseScheme = z.object({
	documentType: z.enum(['passport', 'idCard'])
});
