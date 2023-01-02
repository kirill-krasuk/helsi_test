import { z } from 'zod';

export function mergeValidationScheme<T extends z.ZodRawShape>(
	BaseScheme: z.ZodObject<T>,
	RestSchemas: z.ZodObject<any>[]
) {
	return z.object({
		...BaseScheme.shape,
		...RestSchemas.reduce((acc, schema) => ({ ...acc, ...schema.shape }), {})
	});
}
